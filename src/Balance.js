import React, { useContext } from 'react'
import Context from './Context'

const Balance = () => {
  var {fetch}=useContext(Context)
  var sum=0
  fetch.map(function(obj){
    sum=sum+parseInt(obj.amount)
  })
  return (
    <div>
        <h4>Your Balance</h4>
      <h1>Rs.{sum}</h1>
    </div>
  )
}

export default Balance
