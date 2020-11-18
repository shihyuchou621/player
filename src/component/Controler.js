import React from 'react';
import { connect } from "react-redux";
import { Status, Mode } from "../consts";
import { play, pause, resume } from "../actions/currentSongAction";

const getRandomExcept = (len, expectIndex) => {
  const arr = [...Array(len).keys()];
  const expArr = [
    ...arr.slice(0, expectIndex),
    ...arr.slice(expectIndex + 1),
  ];
  return expArr[ ~~(Math.random() * (len - 1)) ];
};

function Controler({ status, pause, play, resume, index, mode, songs, }) {

  const lastSong = () => {
    mode === Mode.RANDOM ? play(getRandomExcept(songs.length, index)) :
      index === 0 ? play(songs.length - 1) : play(index - 1);
  };

  const nextSong = () => {
    mode === Mode.RANDOM ? play(getRandomExcept(songs.length, index)) :
      index === songs.length - 1 ? play(0) : play(index + 1);
  };

  return (
    <div>
      <div>
        <button onClick={lastSong}>last</button>
      </div>
      <div>
        {status === Status.PLAYING ? <button onClick={pause}> pause </button> :
          status === Status.PAUSING ? <button onClick={resume}> resume </button> :
            <button onClick={play.bind(this, index)}> play </button>
        }
      </div>
      <div>
        <button onClick={nextSong}>next</button>
      </div>
    </div>
  );
}
function mapState2Props(state) {
  return {
    songs: state.songs,
    mode: state.mode.mode,
    index: state.currentSong.index,
    status: state.currentSong.status,
  };
}
const mapDispatch2Props = {
  play,
  pause,
  resume,
};

export default connect(mapState2Props, mapDispatch2Props)(Controler);