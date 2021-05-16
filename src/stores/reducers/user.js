const initialState = {
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('user') || '',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_TOKEN':
      return {...state, token: payload };
    default:
      return state;
  }
}
