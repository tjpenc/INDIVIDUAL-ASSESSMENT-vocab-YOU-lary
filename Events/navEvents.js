const navEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    console.warn('clicked in the app');
    console.warn(e);
  });
};

export default navEvents;
