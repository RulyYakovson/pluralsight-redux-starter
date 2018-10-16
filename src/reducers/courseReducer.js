import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      /*state.push(action.course);
      return state;*/ // impossible to do that because it's must be immutable!!
      return [ ...state, Object.assign( {}, action.course ) ];

      default:
        return state;
  }
}
