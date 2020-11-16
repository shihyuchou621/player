const initData = [
  { name: 'song1', artist: 'artist1', isStar: false, length: 5 },
  { name: 'song2', artist: 'artist2', isStar: false, length: 5 },
  { name: 'song3', artist: 'artist3', isStar: false, length: 5 },
  { name: 'song4', artist: 'artist4', isStar: false, length: 5 },
  { name: 'song5', artist: 'artist5', isStar: false, length: 5 },
  { name: 'song6', artist: 'artist6', isStar: false, length: 5 },
  { name: 'song7', artist: 'artist7', isStar: false, length: 5 },
  { name: 'song8', artist: 'artist8', isStar: false, length: 5 },
  { name: 'song9', artist: 'artist9', isStar: false, length: 5 },
];

export default function songsReducer(state = initData, action) {
  switch (action.type) {
  case 'TOGGLE_STAR':
    return [
      ...state.slice(0, action.index),
      {
        ...state[action.index],
        isStar: !state[action.index].isStar,
      },
      ...state.slice(action.index + 1),
    ];
  default:
    return state;
  }
}