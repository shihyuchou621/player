import { Status } from "../consts";
import * as ACTIONS from "../actions";

export const initData = {
  index: 0,
  status: Status.NONE, // none, playing, pausing
  second: null,
};

export default function currentSongReducer(state = initData, action) {
  switch (action.type) {
  case ACTIONS.NONE:
    return {
      ...state,
      status: Status.NONE,
      second: null,
    };
  case ACTIONS.PLAY:
    return {
      index: action.index,
      status: Status.PLAYING,
      second: 0,
    };
  case ACTIONS.PAUSE:
    return {
      ...state,
      status: Status.PAUSING,
    };
  case ACTIONS.RESUME:
    return {
      ...state,
      status: Status.PLAYING,
    };

  case ACTIONS.TICKING:
    return{
      ...state,
      second: state.second + 1,
    };
    // case 'CHANGE_STATUS':
    //   return {
    //     ...state,
    //     status: action.status,
    //   }
    // case 'CHANGE_SONG':
    //   return {
    //     ...state,
    //     index: action.index,
    //   }
  default:
    return state;
  }
}