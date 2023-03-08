import { getVocabWords } from '../api/vocabAPI';
import domBuilder from '../components/domBuilder';
import filterButton from '../components/filterButton';
import logoutButton from '../components/logoutButton';
import buildNavBar from '../components/navBar';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navEvents from '../Events/navEvents';
import showCards from '../pages/vocabCard';

const startApp = (user) => {
  domBuilder();
  filterButton();
  buildNavBar();
  logoutButton();
  navEvents(user.uid);
  formEvents(user.uid);
  domEvents(user.uid);

  getVocabWords(user.uid).then(showCards);
};

export default startApp;
