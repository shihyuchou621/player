import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Status, Mode } from "./consts";
import {
  toggleStar,
  none,
  play,
  pause,
  resume,
  ticking,
  modeChange,
} from './actions';
import reducers from "./reducers";
import Song from './component/Song';
import SongBar from './component/SongBar';
import Controler from './component/Controler';
import SongMode from './component/SongMode';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(play(1));

// store.dispatch(pause());

// store.dispatch(resume());

// store.dispatch(ticking());

// store.dispatch(none());

// store.dispatch(toggleStar(2));

// store.dispatch(
//   modeChange({mode: Mode.ALL})
// );

// console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <div className="songArea">
      player
        <Song num={0} />
        <Song num={1} />
        <Song num={2} />
      </div>
      <SongBar />
      <Controler />
      <SongMode />
    </Provider>
  );
}