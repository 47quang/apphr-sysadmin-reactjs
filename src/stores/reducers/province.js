import { SET_DISTRICTS, SET_PROVINCES, SET_WARDS } from '../actions/province';

const initialState = {
  provinces: [],
  districts: [],
  wards: []
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_WARDS:
    case SET_DISTRICTS:
    case SET_PROVINCES:
      return { ...state, ...payload };
    default:
      return state;
  }
}
