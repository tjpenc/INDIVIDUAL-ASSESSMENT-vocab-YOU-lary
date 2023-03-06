import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startApp from './startApp';
import logoutButton from '../components/logoutButton';
import welcomePage from '../pages/welcomePage';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      welcomePage();
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
