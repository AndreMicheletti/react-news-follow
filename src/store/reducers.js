import {
  INPUT_FOLLOW_UPDATE,
  ADD_FOLLOW,
  REMOVE_FOLLOW
} from './types';

const INITIAL_STATE = {
  followTags: [],
  followInput: ''
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
  console.log({ type, payload });
  let tags = state.followTags;
  switch(type) {
    case INPUT_FOLLOW_UPDATE:
      return { ...state, followInput: payload }
    case ADD_FOLLOW:
      tags.push(state.followInput)
      return {
        followTags: tags,
        followInput: ''
      };
    case REMOVE_FOLLOW:
      return {
        ...state,
        followTags: tags.splice(tags.indexOf(payload), 1)
      }
    default:
      return state;
  };
};

export default reducers;
