import { getVocabWords } from '../api/vocabAPI';
import showWordForm from '../pages/showWordForm';
import showCards from '../pages/vocabCard';

const navEvents = (user) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-words')) {
      console.warn('view words');
      getVocabWords(user).then(showCards);
    }

    if (e.target.id.includes('create-word')) {
      console.warn('create words');
      showWordForm();
    }
  });
};

export default navEvents;
