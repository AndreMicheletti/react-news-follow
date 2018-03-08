import {
  INPUT_FOLLOW_UPDATE,
  ADD_FOLLOW,
  REMOVE_FOLLOW
} from './types';

export const updateFollowInput = (text) => {
    return {
      type: INPUT_FOLLOW_UPDATE,
      payload: text
    }
};

export const addFollow = (text) => {
    return {
      type: ADD_FOLLOW
    }
};

export const removeFollow = (follow) => {
    return {
      type: REMOVE_FOLLOW,
      payload: follow
    }
};
