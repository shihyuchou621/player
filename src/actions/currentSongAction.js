export const CURRENT_SONG_CHANGE = 'CURRENT_SONG_CHANGE';
export const NONE = 'NONE';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RESUME = 'RESUME';
export const TICKING = 'TICKING';

export function none() {
  return {
    type: NONE,
  };
}

export function play(index) {
  return {
    type: PLAY,
    index,
  };
}

export function pause() {
  return {
    type: PAUSE,
  };
}

export function resume() {
  return {
    type: RESUME,
  };
}

export function ticking() {
  return {
    type: TICKING,
  };
}
