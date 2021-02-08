import client from './client';

const AccountApi = {
  getUsers() {
    return new Promise((resolve, reject) => {
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
  
}

export default AccountApi;