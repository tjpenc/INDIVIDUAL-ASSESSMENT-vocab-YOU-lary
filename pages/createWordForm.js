import renderToDOM from '../utils/renderToDom';

const showWordForm = () => {
  const domString = `
  <div id="form-div">
    <div>Create a Word!</div>
    <form>
      <label for="word-name">Word Name:</label>
      <input type="text" id="word-name" name="word-name"><br>

      <label for="word-definition">Word Definition:</label>
      <input type="text" id="word-definition" name="word-definition"><br>

      <label for="word-category">Word Category:</label>
      <input type="text" id="word-category" name="word-category"><br>

      <input type="submit" value="Submit">
    </form>
  </div>
  `;
  renderToDOM(domString, '#form-display');
};

export default showWordForm;
