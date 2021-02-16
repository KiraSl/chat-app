import React from 'react'

const AppContext = React.createContext();

const actionTypes = {
  AUTHENTICATE: 'AUTHENTICATE',
}

const stateTypes = {
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED: 'UNAUTHENTICATED',
}

const appInitialState = {
  authState: stateTypes.UNAUTHENTICATED,
}

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return {
        authState: stateTypes.AUTHENTICATED,
      }
  }
}

export { AppContext, appInitialState, appReducer, actionTypes, stateTypes }
