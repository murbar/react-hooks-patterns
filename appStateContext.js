import React, { createContext, useState, useMemo, useContext } from 'react';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// probably best to split the state and actions into two contexts
// can use reducer if state is complex enough

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({});

  // wrap in useMemo so these functions don't change every time state is updated,
  // causing a nasty loop
  // using a reducer/dispatch will avoid this, but I think that adds more complexity
  // can also be mitigated by splitting the state and updater contexts
  const contextValue = useMemo(() => {
    const someAction = () => {
      setState(prev => ({
        ...prev,
        thing: 'done'
      }));
    };

    return { state, someAction };
  }, [state]);

  return (
    <AppStateContext.Provider value={contextValue}>{children}</AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
};

export { AppStateProvider, useAppState };

// wrap components that need access to this state with `<AppStateProvider>`
// import `useAppState` to access state and actions
// wrap actions in `useMemo` and `useCallback` as needed to prevent loops
// (state and setState can't be in same effect/memo/callback)
