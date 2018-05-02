import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_LOCALE = 'settings/CHANGE_LOCALE';

const changeLocale = createAction(CHANGE_LOCALE);

export const actionCreators = {
  changeLocale,
};

const initialState = {
  locale: 'en',
};

export default handleActions({
  [CHANGE_LOCALE]: (state, { payload }) => produce(state, (draft) => {
    draft.locale = payload;
  }),
}, initialState);
