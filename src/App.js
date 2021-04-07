import { useReducer, useState } from 'react'
import { Button, Input } from 'antd'
import { AppContext, appInitialState, appReducer, actionTypes, stateTypes } from './App.context'
import { Discussion } from './pages/Discussion/Discussion'
import 'antd/dist/antd.css';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, appInitialState)
  const [userId, setUserId] = useState('')

  const handleChange = (event) => {
    setUserId(event.target.value)
  }

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3001/user/${userId}`)
    const user  = await response.json()

    dispatch({ type: actionTypes.AUTHENTICATE, user })
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>

      {
        state.authState === stateTypes.AUTHENTICATED
        ? <Discussion />
        : (
          <>
            <Input value={userId} onChange={handleChange} />
            <Button onClick={fetchUser}>
              Login
            </Button>
          </>
        )
      }
    </AppContext.Provider>
  );
}

export default App;
