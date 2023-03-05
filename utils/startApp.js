import { getVocabWords } from '../api/vocabAPI';
import domBuilder from '../components/domBuilder';
import buildNavBar from '../components/navBar';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navEvents from '../Events/navEvents';
import showCards from '../pages/vocabCard';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder();
  buildNavBar();
  navEvents(user);
  formEvents(user);
  domEvents(user);

  getVocabWords(user).then(showCards);
};

export default startApp;
