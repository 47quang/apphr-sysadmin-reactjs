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
        dispatch(setMerchants(resp.payload));
      })
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
  };
}

export function getMerchant(params) {
  return (dispatch, getState) => {
    merchantApi
      .getMerchant(params)
      .then(resp => {
        console.log(resp);
        dispatch(setMerchant(resp.payload));
      })
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
  };
}
