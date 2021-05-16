import client from './client';

const ProvinceApi = {
  fetchProvinces(params) {
    return new Promise((resolve, reject) => {
      client
        .get('/api.province', { params })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  fetchDistricts(params) {
    return new Promise((resolve, reject) => {
      client
        .get(`/api.province/${params.id}/district`)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  fetchWards(params) {
    return new Promise((resolve, reject) => {
      client
        .get(`/api.district/${params.id}/ward`)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default ProvinceApi;
