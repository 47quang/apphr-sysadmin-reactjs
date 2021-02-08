import client from './client';

export function getUsers() {
  return new Promise(async (resolve, reject) => {
    client
      .get('/api.user')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
