import { MODE_CHANGE } from '../actions/modeAction';
import { Mode } from "../consts";

export const initData = {
  mode: Mode.ONE
};

export default function modeReducer(state = initData, action) {
  switch (action.type) {
  case MODE_CHANGE:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}