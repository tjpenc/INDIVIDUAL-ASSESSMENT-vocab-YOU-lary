const clearDOM = () => {
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#search-bar').innerHTML = '';
  document.querySelector('#form-display').innerHTML = '';
  document.querySelector('#vocab-display').innerHTML = '';
};

export default clearDOM;
