import domBuilder from '../components/domBuilder';
import buildNavBar from '../components/navBar';
import navEvents from '../Events/navEvents';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder(user);
  buildNavBar();
  navEvents(user);
};

export default startApp;
