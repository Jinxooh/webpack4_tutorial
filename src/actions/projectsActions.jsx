import { push } from 'react-router-redux';

import {
  SELECT_PROJECT,
  UPDATE_PROJECT_MENU,
} from 'actionTypes';

export const selectProject = selectedProject => (dispatch, getState) => {
  dispatch({ type: SELECT_PROJECT, payload: { selectedProject } });
  dispatch(push(`/project/${selectedProject.id}/dashboard`));
};

export const updateProjectMenu = ({ menu }) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROJECT_MENU, payload: { menu } });
  } catch (error) {
    console.error('error', error);
  }
};
