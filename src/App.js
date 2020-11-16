import './App.css';
import { createStore } from "redux";

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

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(play(1));

store.dispatch(pause());

store.dispatch(resume());

store.dispatch(ticking());

store.dispatch(none());


store.dispatch(toggleStar(2));

store.dispatch(
  modeChange({mode: Mode.ALL})
);



// console.log(store.getState());

export default function App() {
  return (
    <div className="App">
      player
    </div>
  );
}