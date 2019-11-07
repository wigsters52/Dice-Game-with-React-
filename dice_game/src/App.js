import React from 'react'
import Die from './Die'
import './Die.css'

function App () {
  return (
    <div className='App'>
      <Die face='five' />
      <Die face='four' />
      <Die face='three' />
      <Die face='one' />
    </div>
  )
}

export default App
