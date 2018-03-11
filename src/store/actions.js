import {
  INPUT_FOLLOW_UPDATE,
  ADD_FOLLOW,
  REMOVE_FOLLOW,
  LOADED_TOP_HEADLINES,
  LOADED_FOLLOW_HEADLINES,
  RESET_TOP_HEADLINES,
  RESET_FOLLOW_HEADLINES
} from './types';
import API from '../services';

export const updateFollowInput = (text) => {
    return {
      type: INPUT_FOLLOW_UPDATE,
      payload: text
    }
};

export const addFollow = (text) => {
    return {
      type: ADD_FOLLOW,
      payload: text
    }
};

export const removeFollow = () => {
    return { type: REMOVE_FOLLOW };
};

export const fetchTopHeadlines = () => {
  return (dispatch) => {
    dispatch({ type: RESET_TOP_HEADLINES });
    API.getLatest().then((body) => {
      console.log(body);
      dispatch({
        type: LOADED_TOP_HEADLINES,
        payload: body.articles
      });
    });
  };
};

export const fetchFollowHeadlines = (followTag) => {
  return (dispatch) => {
    dispatch({ type: RESET_FOLLOW_HEADLINES });
    API.getByQuery(followTag).then((body) => {
      console.log(body);
      dispatch({
        type: LOADED_FOLLOW_HEADLINES,
        payload: body.articles
      });
    });
  };
};