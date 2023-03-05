import renderToDOM from '../utils/renderToDom';
import clearDOM from '../components/clearDOM';

const showCards = (wordArray) => {
  clearDOM();
  let domString = '';
  wordArray.forEach((word) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${word.word_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${word.type}</h6>
      <p class="card-text">${word.definition}</p>
      <a href="#" class="card-link" id="update-btn--${word.firebaseKey}">Update</a>
      <a href="#" class="card-link" id="delete-word--${word.firebaseKey}">Delete</a>
    </div>
  </div>`;
  });

  renderToDOM(domString, '#vocab-display');
};

export default showCards;
