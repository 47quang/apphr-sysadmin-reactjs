import { SET_MERCHANT, SET_MERCHANTS } from '../actions/merchant';

const initialState = {
  merchants: [],
  merchant: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_MERCHANT:
    case SET_MERCHANTS:
      return { ...state, ...payload };
    default:
      return state;
  }
}
