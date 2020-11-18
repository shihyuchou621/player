import React from 'react';
import { Mode } from "../consts";
import { connect } from 'react-redux';
import { modeChange } from "../actions/modeAction";

function SongMode({mode, modeChange}) {
  return (
    <div>
      {mode === Mode.ONE ? <button onClick={modeChange.bind(this, {mode: Mode.ALL})}> {Mode.ONE} </button> :
        mode === Mode.ALL ? <button onClick={modeChange.bind(this, {mode: Mode.RANDOM})}> {Mode.ALL} </button> :
          mode === Mode.RANDOM ? <button onClick={modeChange.bind(this, {mode: Mode.ONE})}> {Mode.RANDOM} </button> :
            <button> {Mode.ONE} </button>
      }
    </div>
  );
}

function mapState2Props(state) {
  return {
    mode: state.mode.mode,
  };
}

const mapDispatch2Props = {
  modeChange,
};

export default connect(mapState2Props, mapDispatch2Props)(SongMode);