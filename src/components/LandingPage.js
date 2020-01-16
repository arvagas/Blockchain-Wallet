//library imports
import React, { useState, useContext } from 'react'
//context import
import UserContext from '../contexts/UserContext'

const LandingPage = ({ history }) => {
  const { setUser } = useContext(UserContext)
  const [ userInput, setUserInput ] = useState('')

  const handleSubmit = () => {
    setUser(userInput)
    history.push('/user')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' name='userInput' onChange={e => setUserInput(e.target.value)} value={userInput} required/>
          <button type='submit'>Enter</button>
        </label>
      </form>
    </div>
  )
}

export default LandingPage