// library imports
import React, { useState } from 'react'
import AppRouter from './components/AppRouter'
//context import
import UserContext from './contexts/UserContext'

function App() {
  const [user, setUser] = useState('TEST')
  const [userInfo, setUserInfo] = useState()

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  )
}

export default App
