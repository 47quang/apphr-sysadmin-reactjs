import ProvinceApi from '../apis/province';

export const SET_PROVINCES = 'SET_PROVINCES';
export const SET_DISTRICTS = 'SET_DISTRICTS';
export const SET_WARDS = 'SET_WARDS';

export function setProvinces(provinces) {
  return {
    type: SET_PROVINCES,
    payload: {
      provinces
    }
  };
}

export function setDistricts(districts) {
  return {
    type: SET_DISTRICTS,
    payload: {
      districts
    }
  };
}

export function setWards(wards) {
  return {
    type: SET_WARDS,
    payload: {
      wards
    }
  };
}

export function fetchProvinces(params) {
  return (dispatch, getState) => {
    ProvinceApi.fetchProvinces(params)
      .then(resp => {
        dispatch(setProvinces(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}

export function fetchDistricts(params) {
  return (dispatch, getState) => {
    ProvinceApi.fetchDistricts(params)
      .then(resp => {
        dispatch(setDistricts(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}

export function fetchWards(params) {
  return (dispatch, getState) => {
    ProvinceApi.fetchWards(params)
      .then(resp => {
        dispatch(setWards(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}
