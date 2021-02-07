const initialState = {
  sidebarShow: 'responsive',
  language: 'en',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_SIDEBAR_VISIBILITY':
      return { ...state, ...payload };
    case 'CHANGE_LANGUAGE':
      return { ...state, ...payload };
    default:
      return state;
  }
}
