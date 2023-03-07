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

const createVocabWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${url}/words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const updateVocabWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${url}/words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteVocabWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${url}/words/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${url}/words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const filterVocabWordsByType = (user, inputValue) => new Promise((resolve, reject) => {
  fetch(`${url}/words.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (inputValue === 'A-Z') {
        const alphebetizedArray = Object.values(data).sort((a, b) => ((a.word_name.toLowerCase() > b.word_name.toLowerCase()) ? 1 : -1));
        resolve(alphebetizedArray);
      } else if (inputValue === 'Newest') {
        const newestArray = Object.values(data).sort((a, b) => ((a.time_submitted > b.time_submitted) ? 1 : -1));
        resolve(newestArray);
      } else if (inputValue === 'Oldest') {
        console.warn('oldest!');
        const oldestArray = Object.values(data).sort((a, b) => ((a.time_submitted > b.time_submitted) ? -1 : 1));
        resolve(oldestArray);
      } else if (inputValue !== 'all') {
        const filteredArray = Object.values(data).filter((word) => word.type.toLowerCase() === inputValue);
        resolve(filteredArray);
      } else {
        resolve(Object.values(data));
      }
    })
    .catch(reject);
});

export {
  getVocabWords, createVocabWord, updateVocabWord, deleteVocabWord, getSingleVocabCard, filterVocabWordsByType
};
