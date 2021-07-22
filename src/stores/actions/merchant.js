import merchantApi from '../apis/merchant';

export const SET_MERCHANT = 'SET_MERCHANT';
export const SET_MERCHANTS = 'SET_MERCHANTS';

export function setMerchants(merchants) {
  return {
    type: SET_MERCHANTS,
    payload: {
      merchants
    }
  };
}

export function setMerchant(merchant) {
  return {
    type: SET_MERCHANT,
    payload: merchant
  };
}

export function fetchMerchants(params) {
  return (dispatch, getState) => {
    merchantApi
      .fetchMerchant(params)
      .then(resp => {
        dispatch(setMerchants(resp.payload.sort((a, b) => a.id - b.id)));
      })
      .catch(err => console.debug(err));
  };
}

export function deleteMerchant(params) {
  return (dispatch, getState) => {
    merchantApi
      .deleteMerchant(params)
      .then(resp => {
        // dispatch(deleteMerchant)
      })
      .catch(err => console.debug(err));
  };
}

export function createMerchant(payload, props) {
  payload.provinceId = +payload.provinceId;
  payload.districtId = +payload.districtId;
  payload.wardId = +payload.wardId;
  return (dispatch, getState) => {
    merchantApi
      .createMerchant(payload)
      .then(resp => {
        dispatch(setMerchant(resp.payload));
        if (props) {
          props.history.push(`/merchant/${resp.payload.id}`);
        }
      })
      .catch(err => console.debug(err));
  };
}

export function getMerchant(params) {
  return (dispatch, getState) => {
    merchantApi
      .getMerchant(params)
      .then(resp => {
        dispatch(setMerchant(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}

export function updateMerchant(payload) {
  payload.provinceId = +payload.provinceId;
  payload.districtId = +payload.districtId;
  payload.wardId = +payload.wardId;
  return (dispatch, getState) => {
    merchantApi
      .updateMerchant(payload)
      .then(resp => {
        dispatch(setMerchant(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}

export function activateMerchant(id, isActive) {
  const api = isActive
    ? merchantApi.inactiveMerchant(id)
    : merchantApi.activeMerchant(id);
  return (dispatch, getState) => {
    api
      .then(resp => {
        dispatch(setMerchant(resp.payload));
      })
      .catch(err => console.debug(err));
  };
}
