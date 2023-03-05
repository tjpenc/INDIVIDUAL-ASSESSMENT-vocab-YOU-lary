import { createVocabWord, getVocabWords, updateVocabWord } from '../api/vocabAPI';
import showCards from '../pages/vocabCard';

const submitForm = (user) => {
  // grab values from form
  // arrange them into payload
  // pass payload through create word API call
  // patch firebase key onto new object
  // show all cards
  console.warn('form submitted!');
  console.warn(user.uid);
  const word = document.querySelector('#title').value;
  const wordDefinition = document.querySelector('#definition').value;
  const wordType = document.querySelector('#word-type').value;
  const currentTime = Date.now();

  const payload = {
    word_name: word,
    definition: wordDefinition,
    type: wordType,
    uid: user.uid,
    time_submitted: currentTime
  };

  createVocabWord(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };
    updateVocabWord(patchPayload).then(() => {
      getVocabWords(user).then(showCards);
    });
  });
};

export default submitForm;
