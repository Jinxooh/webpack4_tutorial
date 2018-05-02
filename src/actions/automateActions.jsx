import { UPDATE_PROJECT_MENU } from './actionTypes';

export const addIntent = ({ menu }) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROJECT_MENU, payload: { menu } });
  } catch (error) {
    console.error('error', error);
  }
};
