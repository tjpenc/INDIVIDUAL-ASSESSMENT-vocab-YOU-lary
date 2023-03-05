import { deleteVocabWord, getVocabWords } from '../api/vocabAPI';
import showCards from '../pages/vocabCard';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocabWord(firebaseKey).then(() => {
        getVocabWords(user).then(showCards);
      });
    }
  });
};

export default domEvents;
