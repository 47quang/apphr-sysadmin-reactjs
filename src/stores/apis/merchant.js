import client from './client';

const MerchantApi = {
  fetchMerchant(params) {
    return new Promise((resolve, reject) => {
      client
        .get('/api.tenant', { params })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default MerchantApi;
