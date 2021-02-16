import { useReducer, useEffect } from 'react'
import { AppContext, appInitialState, appReducer, actionTypes, stateTypes } from './App.context'
import { Discussion } from './pages/Discussion/Discussion'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, appInitialState)

  useEffect(() => {
    dispatch({ type: actionTypes.AUTHENTICATE })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {
        state.authState === stateTypes.AUTHENTICATED ? <Discussion /> : <div>Unauthenticated</div>
      }
    </AppContext.Provider>
  );
}

export default App;
