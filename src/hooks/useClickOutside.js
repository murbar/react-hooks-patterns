import { useEffect } from 'react';

// e.g. to dismiss a menu when the user clicks away

export default function useClickOutside(elementRef, callback) {
  useEffect(() => {
    const handleClickAway = e => {
      if (elementRef && !elementRef.current.contains(e.target)) {
        callback(e);
      }
    };

    window.addEventListener('click', handleClickAway);
    return () => window.removeEventListener('click', handleClickAway);
  }, [callback, elementRef]);
}
