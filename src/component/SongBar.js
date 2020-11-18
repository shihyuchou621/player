import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Status, Mode } from "../consts";
import { ticking, none, play } from "../actions/currentSongAction";
import { modeChange } from "../actions/modeAction";

const getRandomExcept = (len, expectIndex) => {
  const arr = [...Array(len).keys()];
  const expArr = [
    ...arr.slice(0, expectIndex),
    ...arr.slice(expectIndex + 1),
  ];
  return expArr[ ~~(Math.random() * (len - 1)) ];
};

// const getRandom = (max, min = 0) => {
//   return ~~(Math.random() * (max - min + 1)) + min;
// };

// const randomSong = ( songNum, currentIndex ) => {
//   return [
//     ...[...Array(songNum).keys()].slice(0, currentIndex),
//     ...[...Array(songNum).keys()].slice(currentIndex + 1)
//   ];
// };

const timeform = (time) => {
  return `${Math.floor(time / 60)}:${("" + time % 60).length === 1 ? "0" + (time % 60) : (time % 60)}`;
  // return (
  //   Math.floor(time / 60) + ":" +
  //   ("" + time % 60).length === 1 ? "0" + (time % 60) : (time % 60)
  // );
};

function SongBar({sec, index, status, length, ticking, none, mode, play, songs, }) {
  // const [sec, setSec] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSec(sec + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [sec]);

  useEffect(() => {
    let interval;
    if(status === Status.PLAYING) {
      interval = setInterval(() => {
        ticking();
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [status]);

  useEffect(() => {
    // console.log(index);
    if(sec > length) {
      if(mode === Mode.ONE) {none();}
      if(mode === Mode.ALL) {
        index === songs.length - 1 ? none() : play(index + 1);
      }
      if(mode === Mode.RANDOM) {
        play(getRandomExcept(songs.length, index));
        // play(randomSong(songs.length, index)[getRandom(songs.length - 2)]);
      }
    }
  }, [sec]);

  return (
    <div>
      <div>{timeform(sec)}</div>
      <div>{"-" + timeform(length - sec)}</div>
      <div>{index}</div>
    </div>
  );
}

function mapState2Props(state) {
  return {
    songs: state.songs,
    mode: state.mode.mode,
    sec: state.currentSong.second,
    index: state.currentSong.index,
    status: state.currentSong.status,
    length: state.songs[state.currentSong.index].length,
  };
}
const mapDispatch2Props = {
  none,
  play,
  ticking,
  modeChange,
};

export default connect(mapState2Props, mapDispatch2Props)(SongBar);