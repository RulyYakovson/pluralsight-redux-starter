import * as types from './actionTypes';

export function createCource(course) {
  return { type: types.CREATE_COURSE, course };
}
