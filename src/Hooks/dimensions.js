import { useState } from 'react';


export const useDimension = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  window.addEventListener('resize', e => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  })

  return {
    innerHeight,
    innerWidth
  }
}
export function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}