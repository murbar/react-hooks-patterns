import React from 'react';

// helper to stop linter complaining about empty dependency array
export default function useMountEffect(callback) {
  return React.useEffect(callback, []);
}
