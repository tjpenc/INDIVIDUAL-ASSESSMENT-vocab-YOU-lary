const submitForm = (user) => {
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
  return payload;
};

export default submitForm;
