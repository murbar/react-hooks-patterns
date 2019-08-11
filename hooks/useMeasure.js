import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
  return [{ ref }, bounds];
}

// usage

// import { render } from 'react-dom';
// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import useMeasure from './useMeasure';
// import './styles.css';

// function App() {
//   const [open, toggle] = useState(false);
//   const [bind, { width }] = useMeasure();
//   const props = useSpring({ width: open ? width : 0 });

//   return (
//     <div {...bind} class="main" onClick={() => toggle(!open)}>
//       <animated.div class="fill" style={props} />
//       <animated.div class="content">{props.width.interpolate(x => x.toFixed(0))}</animated.div>
//     </div>
//   );
// }

// render(<App />, document.getElementById('root'));
