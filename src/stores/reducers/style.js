const initialState = {
  language: 'en',
  sidebarShow: 'responsive'
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, ...payload };
    case 'CHANGE_SIDEBARSHOW':
      return { ...state, ...payload };
    default:
      return state;
  }
}
