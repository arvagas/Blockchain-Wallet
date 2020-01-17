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
  const [ receipts, setReceipts ] = useState([])

  // grab the chain data
  useEffect(() => {
    axios.get(`${url}/chain`)
    .then(res => {
      setChain(res.data.chain)
    })
  }, [user])

  // get all transaction involving user
  useEffect(() => {
    if (chain) {
      chain.forEach(block => {
        block.transactions.forEach(trans => {
          if (trans.recipient === user || trans.sender === user) setReceipts(receipts => [...receipts, trans])
        })
      })
    }
  }, [chain])

  // grab coins
  useEffect(() => {
    if (receipts) {
      receipts.forEach(receipt => {
        if (receipt.recipient === user) setCoins(coins => coins += receipt.amount)
        else if (receipt.sender === user) setCoins(coins => coins -= receipt.amount)
      })
    }
  }, [receipts])

  return (
    <div>
      <h1>Welcome {user}!</h1>
      <h2>You have {coins} coins.</h2>
      <h2>Transactions:</h2>
      {receipts.map((receipt, index) => (
        <div key={Date.now()+index} style={(receipt.sender === user) ? {color:'red'} : {color:'green'}}>
          <p>Sender: {receipt.sender}</p>
          <p>Recipient: {receipt.recipient}</p>
          <p>Amount: {receipt.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default UserPage