import { SET_ACCOUNT } from '../actions/account';

const initialState = {
  accounts: []
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ACCOUNT:
      return { ...state, ...payload };
    default:
      return state;
  }
}
