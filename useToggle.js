import { useState, useEffect } from 'react';

export default function useToggle(initial = false) {
  const [isOn, setIsOn] = useState(initial);

  const toggle = bool => {
    if (bool !== undefined) {
      setIsOn(bool);
    } else {
      setIsOn(prev => !prev);
    }
  };

  const toggleOn = () => setIsOn(true);

  const toggleOff = () => setIsOn(false);

  useEffect(() => {
    setIsOn(initial);
  }, [initial]);

  return { isOn, toggle, toggleOn, toggleOff };
}
