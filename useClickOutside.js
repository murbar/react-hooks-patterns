import { useEffect, useRef } from 'react';

// e.g. to dismiss a menu when the user clicks away
// returns ref that must be set to `ref` on element

export default function useClickOutside(callback) {
  const ref = useRef();

  useEffect(() => {
    const handleClickAway = e => {
      if (ref && !ref.current.contains(e.target)) {
        callback(e);
      }
    };

    window.addEventListener('click', handleClickAway);
    return () => window.removeEventListener('click', handleClickAway);
  }, [callback]);

  return ref;
}
