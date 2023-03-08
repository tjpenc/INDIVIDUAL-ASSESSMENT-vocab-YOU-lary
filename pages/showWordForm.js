import clearDOM from '../components/clearDOM';
import renderToDOM from '../utils/renderToDom';

const showWordForm = (word = {}) => {
  clearDOM();
  const domString = `
  <form id="${word.firebaseKey ? `update-word--${word.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group" id="form-group">
      <label for="title">Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Word Here" value="${word.word_name || ''}" required>
    </div>
    <div class="form-group" id="form-group">
      <label for="definition">Definition</label>
      <input type="text" class="form-control" id="definition" aria-describedby="bookTitle" placeholder="Enter Definition" value="${word.definition || ''}" required>
    </div>
    <div id="form-group">
      <label for="word-type">Select a Category</label>
      <select class="form-control" id="word-type" required>
        <option value="">Select an option</option>
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-button">Submit Word
    </button>
    <a id="add-a-category" href="#">Add a Category</a>
  </form>`;
  renderToDOM(domString, '#form-display');
};

export default showWordForm;
