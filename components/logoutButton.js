import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-login-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-login-auth').addEventListener('click', signOut);
};

export default logoutButton;
