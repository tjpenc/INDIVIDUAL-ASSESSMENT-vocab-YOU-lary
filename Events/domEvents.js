import { deleteVocabWord, getSingleVocabCard, getVocabWords } from '../api/vocabAPI';
import showCards from '../pages/vocabCard';
import showWordForm from '../pages/showWordForm';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocabWord(firebaseKey).then(() => {
        getVocabWords(user).then(showCards);
      });
    }

    if (e.target.id.includes('update-btn')) {
      console.warn('update button clicked');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((card) => showWordForm(card));
    }
  });
};

export default domEvents;
