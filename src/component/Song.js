import React from 'react';
import { connect } from 'react-redux';
import { Status } from "../consts";
import { play, pause, resume } from "../actions/currentSongAction";
import './Song.css';



function Song({ songs, status, pause, play, resume, num, index }) {
  return (
    <div className="song">
      {index !== num ? <button onClick={play.bind(this, num)}> none </button> :
        status === Status.PLAYING ? <button onClick={pause}> pause </button> :
          status === Status.PAUSING ? <button onClick={resume}> resume </button> :
            <button onClick={play.bind(this, num)}> play </button>
      }
      {/* {
        index === num ? <button onClick={play(num)}> play </button> :
          <button onClick={play(num)}> none </button>} */}

      <div> {songs[num].name} </div>
      <div> {songs[num].artist} </div>
    </div>
  );
}

function mapState2Props(state) {
  return {
    songs: state.songs,
    index: state.currentSong.index,
    status: state.currentSong.status,
  };
}

const mapDispatch2Props = {
  play,
  pause,
  resume,
};

export default connect(mapState2Props, mapDispatch2Props)(Song);