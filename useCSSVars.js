import React from 'react';

// e.g.
// const theme = {
//   'button-padding': '16px',
//   'button-hover-color': '#FFF'
// };

// Hook
export default function useTheme(theme) {
  React.useLayoutEffect(() => {
    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
  }, [theme]);
}
