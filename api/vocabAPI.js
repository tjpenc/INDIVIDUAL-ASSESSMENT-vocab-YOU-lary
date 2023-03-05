import client from '../utils/client';

const url = client.databaseURL;

const getVocabWords = (user) => new Promise((resolve, reject) => {
  fetch(`${url}/words.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getVocabWords;
