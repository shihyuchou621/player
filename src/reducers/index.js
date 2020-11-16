import { combineReducers } from "redux";
import songs from "./songsReducer";
import currentSong from "./currentSongReducer";
import mode from "./modeReducer";

export default combineReducers({
  songs,
  currentSong,
  mode,
});