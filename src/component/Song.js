import React from 'react';
// import cx from 'classnames';
import { connect } from 'react-redux';
import { Status } from "../consts";
import { toggleStar, play, pause, resume } from '../actions';
import './Song.css';



function Song({ songs, status, pause, play, resume, num, index, toggleStar }) {
  return (
    <div className="song playButton">
      {index !== num ?
        <div className="button playSign sign" onClick={play.bind(this, num)} /> :
        status === Status.PLAYING ?
          <div className="button current pauseSign sign" onClick={pause} /> :
          status === Status.PAUSING ?
            <div className="button current playSign sign" onClick={resume} /> :
            <div className="button current playSign sign" onClick={play.bind(this, num)} />
      }
      {/* {
        index === num ? <button onClick={play(num)}> play </button> :
          <button onClick={play(num)}> none </button>} */}
      <div
        className="starButton"
        onClick={toggleStar.bind(this, num)}
        data-star={songs[num].isStar ? '★': '☆'}
      />
      {/* {songs[num].isStar ?
        <div className="starButton isStar" onClick={toggleStar.bind(this, num)}>★</div> :
        <div className="starButton" onClick={toggleStar.bind(this, num)}>☆</div>
      } */}
      <div className="songsData">
        <div className="songData"> {songs[num].name} </div>
        <div className="songData"> {songs[num].artist} </div>
      </div>
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
  toggleStar,
};

export default connect(mapState2Props, mapDispatch2Props)(Song);