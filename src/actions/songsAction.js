export const TOGGLE_STAR = 'TOGGLE_STAR';

export function toggleStar(index) {
  return {
    type: TOGGLE_STAR,
    index,
  };
}