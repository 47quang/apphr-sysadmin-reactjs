const initialState = {
  language: 'en',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, ...payload };
    default:
      return state;
  }
}
