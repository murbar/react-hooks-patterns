import React, { createContext, useState, useMemo, useContext } from 'react';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// can use reducer if state is complex enough

const StateContext = createContext();
const ActionsContext = createContext();

const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({});

  // still need to memoize actions since a new function is created on every update
  // wouldn't need to do this if we were passing setState directly to the inner context
  // could also use a reducer/dispatch without action functions
  // what about async actions? https://kentcdodds.com/blog/how-to-use-react-context-effectively
  const actions = useMemo(
    () => ({
      someAction: () => {
        setState(prev => ({
          ...prev,
          thing: true
        }));
      },
      someOtherAction: () => {
        setState(prev => ({
          ...prev,
          otherThing: false
        }));
      }
    }),
    [setState]
  );

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>{children}</ActionsContext.Provider>
    </StateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
};

const useAppStateActions = () => {
  const context = useContext(ActionsContext);
  if (context === undefined) {
    throw new Error('useAppStateActions must be used within a AppStateProvider');
  }
  return context;
};

// if you
const useWhatever = () => [useAppState(), useAppStateActions()];

export { AppStateProvider, useWhatever };

// wrap components that need access to this state with `<AppStateProvider>`
// import `useAppState` to access state and actions
