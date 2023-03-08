import submitForm from '../utils/submitForm';
import {
  createVocabWord, updateVocabWord, getVocabWords, getSingleVocabCard
} from '../api/vocabAPI';
import showCards from '../pages/vocabCard';
import clearDOM from '../components/clearDOM';
import renderToDOM from '../utils/renderToDom';

const formEvents = (user) => {
  document.querySelector('#form-display').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
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

  document.querySelector('#form-display').addEventListener('click', (e) => {
    if (e.target.id.includes('add-a-category')) {
      clearDOM();
      const domString = `
      <div id="add-category-div>
        <label for="new-category">New Category</label>
        <input id="new-category">
        <button id="new-category-btn">Add!</button>
      </div>
      `;

      renderToDOM(domString, '#form-display');
    }

    if (e.target.id.includes('new-category-btn')) {
      const inputValue = document.querySelector('#new-category').value.toLowerCase();
      console.warn(inputValue);
    }
  });
};

export default formEvents;
