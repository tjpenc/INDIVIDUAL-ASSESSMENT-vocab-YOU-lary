import renderToDOM from '../utils/renderToDom';
import clearDOM from '../components/clearDOM';

const showCards = (wordArray) => {
  clearDOM();
  let domString = '';
  wordArray.forEach((word) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${word.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${word.type}</h6>
      <p class="card-text">${word.description}</p>
      <a href="#" class="card-link">Update</a>
      <a href="#" class="card-link">Delete</a>
    </div>
  </div>`;
  });

  renderToDOM(domString, '#vocab-display');
};

export default showCards;
