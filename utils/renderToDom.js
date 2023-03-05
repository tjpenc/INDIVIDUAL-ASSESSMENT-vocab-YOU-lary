const renderToDOM = (domString, elementId) => {
  const element = document.querySelector(`${elementId}`);
  element.innerHTML = domString;
};

export default renderToDOM;
