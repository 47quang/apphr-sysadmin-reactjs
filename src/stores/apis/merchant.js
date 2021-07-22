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
  },
  createMerchant(payload) {
    return new Promise((resolve, reject) => {
      client
        .post('/api.tenant/register', payload)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deleteMerchant(id) {
    return new Promise((resolve, reject) => {
      client
        .delete('/api.tenant/' + id)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getMerchant(params) {
    return new Promise((resolve, reject) => {
      client
        .get(`/api.tenant/${params.id}`)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateMerchant(payload) {
    return new Promise((resolve, reject) => {
      client
        .put(`/api.tenant/${payload.id}`, payload)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  activeMerchant(id) {
    return new Promise((resolve, reject) => {
      client
        .put(`/api.tenant/${id}/active`)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  inactiveMerchant(id) {
    return new Promise((resolve, reject) => {
      client
        .put(`/api.tenant/${id}/inactive`)
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
