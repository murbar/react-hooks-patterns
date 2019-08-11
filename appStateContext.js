import React, { createContext, useState, useMemo, useContext } from 'react';

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({});

  const contextValue = useMemo(() => {
    const someAction = () => {
      setState(prev => ({ ...prev, thing: 'done' }));
    };

    return { state, someAction };
  }, [state]);

  return <AppStateContext.Provider value={contextValue}>{children}</AppStateContext.Provider>;
};

const useAppState = () => useContext(AppStateContext);

export { AppStateProvider, useAppState };

// wrap components that need access to this state with `<AppStateProvider>`
// import `useAppState` to access state and actions
