import { getVocabWords } from '../api/vocabAPI';
import showWordForm from '../pages/showWordForm';
import showCards from '../pages/vocabCard';

const navEvents = (uid) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-words')) {
      getVocabWords(uid).then(showCards);
    }

    if (e.target.id.includes('create-word')) {
      showWordForm();
    }

    if (e.target.id.includes('search-vocab-button')) {
      const searchValue = document.querySelector('#search-vocab').value.toLowerCase();
      console.warn(searchValue);
      getVocabWords(uid).then((words) => {
        const searchedArray = words.filter((word) => word.word_name.toLowerCase().includes(searchValue)
        || word.definition.toLowerCase().includes(searchValue));
        console.warn(searchedArray);
        showCards(searchedArray);
      });
    }
  });
};

export default navEvents;
