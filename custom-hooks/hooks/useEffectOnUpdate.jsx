import { useRef, useEffect } from 'react';

export default function useEffectOnUpdate(callback, depArr) {
  // convention: start with lowercase use
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, depArr);
}
