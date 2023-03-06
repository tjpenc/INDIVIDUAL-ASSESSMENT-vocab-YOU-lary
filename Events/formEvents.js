import submitForm from '../utils/submitForm';
import {
  createVocabWord, updateVocabWord, getVocabWords, getSingleVocabCard
} from '../api/vocabAPI';
import showCards from '../pages/vocabCard';

const formEvents = (user) => {
  document.querySelector('#form-display').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-button')) {
      const payload = submitForm(user);
      createVocabWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabWord(patchPayload).then(() => {
          getVocabWords(user).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = submitForm(user);
      payload.firebaseKey = firebaseKey;
      getSingleVocabCard(firebaseKey).then(() => {
        updateVocabWord(payload).then(() => {
          getVocabWords(user).then(showCards);
        });
      });
    }
  });
};

export default formEvents;
