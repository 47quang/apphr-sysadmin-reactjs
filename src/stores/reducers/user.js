const initialState = {
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('user') || '',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
