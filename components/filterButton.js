import renderToDOM from '../utils/renderToDom';

const filterButton = () => {
  const domString = `<div>
  <label for="filter-value">Select a Category</label>
  <select class="form-control" id="filter-value" required>
    <option value="">Select an option</option>
    <option value="animal">animal</option>
    <option value="weird">weird</option>
    <option value="misc">miscellaneous</option>
  </select>
</div><button type="button" class="btn btn-primary" id="filter-btn">Filter by Type</button>`;
  renderToDOM(domString, '#filter-buttons');
};

export default filterButton;
