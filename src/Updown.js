import React, { useContext } from 'react'
import Context from './Context'


const Updown = () => {
  var {fetch}=useContext(Context)
  var expense=0
  var income=0
 fetch.map(function(obj){
  if(obj.amount<0){
    expense=expense+parseInt(obj.amount)
  }
  else{
    income=income+parseInt(obj.amount)
  }
  

 })
  return (
  <div>
    <div className="inc-exp-container">
  <div>
    <h4>Income</h4>
    <p id="money-plus" className="money plus">₹{income}</p>
  </div>
  <div>
    <h4>Expense</h4>
    <p id="money-minus" className="money minus">₹{expense}</p>
  </div>
</div>
  </div>

  )
}

export default Updown
