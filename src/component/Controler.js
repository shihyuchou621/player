import React from 'react';
import { connect } from "react-redux";
import { Status } from "../consts";
import { play, pause, resume } from "../actions/currentSongAction";

function Controler({ status, pause, play, resume, index }) {

  return (
    <div>
      {
        status === Status.PLAYING ? <button onClick={pause}> pause </button> :
          status === Status.PAUSING ? <button onClick={resume}> resume </button> :
            <button onClick={play.bind(this, index)}> play </button>
      }
    </div>
  );
}
function mapState2Props(state) {
  return {
    status: state.currentSong.status,
    index: state.currentSong.index,
  };
}
const mapDispatch2Props = {
  play,
  pause,
  resume,
};

export default connect(mapState2Props, mapDispatch2Props)(Controler);