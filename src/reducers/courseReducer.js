import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      /*state.push(action.course);
      return state;*/ // impossible to do that because it's must be immutable!!
      return action.courses;

      default:
        return state;
  }
}
