export const MODE_CHANGE = 'MODE_CHANGE';

export function modeChange(payload) {
  return {
    type: MODE_CHANGE,
    payload,
  };
}