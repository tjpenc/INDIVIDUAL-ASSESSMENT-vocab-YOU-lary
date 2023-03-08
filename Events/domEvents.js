import {
  deleteVocabWord, getSingleVocabCard, getVocabWords, filterVocabWordsByType
} from '../api/vocabAPI';
import showCards from '../pages/vocabCard';
import showWordForm from '../pages/showWordForm';

const domEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocabWord(firebaseKey).then(() => {
        console.warn(uid);
        getVocabWords(uid).then(showCards);
      });
    }

    if (e.target.id.includes('update-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((card) => showWordForm(card));
    }

    if (e.target.id.includes('filter-btn')) {
      const inputValue = document.querySelector('#filter-value').value.toLowerCase();
      filterVocabWordsByType(uid, inputValue).then(showCards);
    }

    if (e.target.id.includes('order-btn')) {
      const inputValue = document.querySelector('#order-value').value;
      filterVocabWordsByType(uid, inputValue).then(showCards);
    }
  });
};

export default domEvents;
