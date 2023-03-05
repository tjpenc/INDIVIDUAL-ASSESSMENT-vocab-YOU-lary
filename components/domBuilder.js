import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="filter-buttons"></div>
  <div id="search-bar"></div>
  <div id="form-display"></div>
  <div id="vocab-display"></div>
  `;

  renderToDOM(domString, '#app');
};

export default domBuilder;
