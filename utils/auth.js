import firebase from 'firebase/app';
import 'firebase/auth';
import clearDOM from '../components/clearDOM';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  clearDOM();
  document.querySelector('#navbar').innerHTML = '';
  firebase.auth().signOut();
};

export { signIn, signOut };
