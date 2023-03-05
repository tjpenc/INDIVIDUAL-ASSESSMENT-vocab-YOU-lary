import submitForm from '../utils/submitForm';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-button')) {
      submitForm(user);
    }
  });
};

export default formEvents;
