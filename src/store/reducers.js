import {
  INPUT_FOLLOW_UPDATE,
  ADD_FOLLOW,
  REMOVE_FOLLOW,
  LOADED_TOP_HEADLINES,
  LOADED_FOLLOW_HEADLINES,
  RESET_TOP_HEADLINES,
  RESET_FOLLOW_HEADLINES
} from './types';

const INITIAL_STATE = {
  followTag: '',
  followInput: '',
  topHeadlines: [],
  followHeadlines: null
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
  console.log({ type, payload });
  switch(type) {
    case INPUT_FOLLOW_UPDATE:
      return { ...state, followInput: payload };
    case ADD_FOLLOW:
      return {
        ...state,
        followTag: payload,
        followInput: ''
      };
    case REMOVE_FOLLOW:
      return {
        ...state,
        followTag: '',
        followHeadlines: null
      };
    case LOADED_TOP_HEADLINES:
      return { ...state, topHeadlines: payload };
    case LOADED_FOLLOW_HEADLINES:
      return { ...state, followHeadlines: payload };
    case RESET_TOP_HEADLINES:
      return { ...state, topHeadlines: [] };
    case RESET_FOLLOW_HEADLINES:
      return { ...state, followHeadlines: [] };
    default:
      return state;
  }
};

export default reducers;
