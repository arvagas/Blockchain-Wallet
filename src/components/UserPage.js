// library imports
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
// context import
import UserContext from '../contexts/UserContext'

const url = 'http://localhost:5000'

const UserPage = () => {
  const { user } = useContext(UserContext)
  const [ coins, setCoins ] = useState(0)
  const [ chain, setChain ] = useState([])
  const [ receipts, setReceipts ] = useState({})

  useEffect(() => {
    axios.get(`${url}/chain`)
    .then(res => {
      setChain(res.data.chain)
    })
  }, [user])

  useEffect(() => {
    if (chain) {
      chain.forEach(block => {
        block.transactions.forEach(trans => {
          if (trans.recipient === user) setCoins(coins => coins += trans.amount)
        })
      })
    }
  }, [chain])

  return (
    <div>
      <h1>Welcome {user}!</h1>
      <h2>You have {coins} coins.</h2>
    </div>
  )
}

export default UserPage