import { SET_MERCHANT } from '../actions/merchant';

const initialState = {
  merchants: [],
  merchant: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_MERCHANT:
      return { ...state, ...payload };
    default:
      return state;
  }
}
