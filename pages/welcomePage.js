import renderToDOM from '../utils/renderToDom';

const welcomePage = () => {
  const domString = `
  <div id="welcome-page">
    <h1>Welcome to vocab-YOU-lary!</h1>
    <div id="login-form-container"></div>
  </div>
  `;

  renderToDOM(domString, '#app');
};

export default welcomePage;
