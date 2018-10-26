import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      /*state.push(action.author);
      return state;*/ // impossible to do that because it's must be immutable!!
      return action.authors;

      default:
        return state;
  }
}
