import merchantApi from '../apis/merchant';

export const SET_MERCHANT = 'SET_MERCHANT';

export function setMerchants(merchants) {
  return {
    type: SET_MERCHANT,
    payload: {
      merchants
    }
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
