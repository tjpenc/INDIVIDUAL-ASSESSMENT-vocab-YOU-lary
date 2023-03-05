import clearDOM from '../components/clearDOM';
import renderToDOM from '../utils/renderToDom';

const showWordForm = (word = {}) => {
  clearDOM();
  const domString = `
  <form id="${word.firebaseKey ? `update-word--${word.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group">
      <label for="title">Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Word Here" value="${word.word_name || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <input type="text" class="form-control" id="definition" aria-describedby="bookTitle" placeholder="Enter Definition" value="${word.definition || ''}" required>
    </div>
    <div class="form-group">
      <label for="word-type">Type</label>
      <input type="text" class="form-control" id="word-type" aria-describedby="bookTitle" placeholder="Type" value="${word.type || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary" id="${word.firebaseKey ? `update-word--${word.firebaseKey}` : 'submit-button'}">Submit Word
    </button>
  </form>`;
  renderToDOM(domString, '#form-display');
};

export default showWordForm;
