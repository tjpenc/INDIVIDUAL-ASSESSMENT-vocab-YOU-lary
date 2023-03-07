import renderToDOM from '../utils/renderToDom';

const filterButton = () => {
  const domString = `<div id="filtering">
  <label for="filter-value">Filter by Category</label>
  <select class="form-control" id="filter-value" required>
    <option value="">Category</option>
    <option value="all">All</option>
    <option value="animal">Animal</option>
    <option value="weird">Weird</option>
    <option value="misc">Miscellaneous</option>
  </select>
  <span id="filter-btn-div">
  <button type="button" class="btn btn-primary" id="filter-btn">Filter!</button>
  </span>
</div>
`;
  renderToDOM(domString, '#filter-buttons');
};

export default filterButton;
