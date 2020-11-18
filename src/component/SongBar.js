import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Status } from "../consts";
import { ticking, none } from "../actions/currentSongAction";

const timeform = (time) => {
  return `${Math.floor(time / 60)}:${("" + time % 60).length === 1 ? "0" + (time % 60) : (time % 60)}`;
  // return (
  //   Math.floor(time / 60) + ":" +
  //   ("" + time % 60).length === 1 ? "0" + (time % 60) : (time % 60)
  // );
};

function SongBar({sec, index, status, length, ticking, none }) {
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
    if(sec > length) {none();}
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
  console.log(state.currentSong.index);
  return {
    sec: state.currentSong.second,
    index: state.currentSong.index,
    status: state.currentSong.status,
    length: state.songs[state.currentSong.index].length,
  };
}
const mapDispatch2Props = {
  ticking,
  none,
};

export default connect(mapState2Props, mapDispatch2Props)(SongBar);