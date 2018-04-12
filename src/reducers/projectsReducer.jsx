import {
  SELECT_PROJECT,
  UPDATE_PROJECT_MENU
} from 'actionTypes';

const initialValues = {
  list: [
    {
      id: 'pr-herigjepfjopeafejoewaef1',
      name: 'test project 1',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef2',
      name: 'test project 2',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef3',
      name: 'test project 3',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef4',
      name: 'test project 4',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef1',
      name: 'test project 5',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef2',
      name: 'test project 6',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef3',
      name: 'test project 7',
    },
    {
      id: 'pr-herigjepfjopeafejoewaef4',
      name: 'test project 8',
    },
  ],
  selectedProject: {},
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return { ...state, ...action.payload };
    case UPDATE_PROJECT_MENU:
      return { ...state, ...action.payload };
    default:
      return state || initialValues;
  }
};

export default projectsReducer;
