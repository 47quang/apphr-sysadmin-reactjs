import { SET_STYLE_DARK, SET_STYLE_LIGHT } from './types';

export const setStyleDark = () => ({
  type: SET_STYLE_DARK,
  color: '#511951',
  backgroundColor: '#eaafea',
});

export const setStyleLight = () => ({
  type: SET_STYLE_LIGHT,
  color: '#eaafea',
  backgroundColor: '#511951',
});
