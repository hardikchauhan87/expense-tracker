import React, { useContext, useState } from 'react'
import Context from './Context'

const AddTransaction = () => {
  var {fetch,insert}=useContext(Context)
 const[obj,Setobj]=useState({
  text:"",
  amount:""
})
 
function set(e){
Setobj({...obj,[e.target.name]:e.target.value})

}
function Save(){
  if(fetch==""){
insert([obj])}
else{
  insert(fetch=>[...fetch,obj])
  }
  
}

  
  return (
    <div>
      <div>
  <h3>Add new transaction</h3>
  <form id="form">
    <div className="form-control">

      <label htmlFor="text">Text</label>
      <input type="text" onChange={set} name="text" placeholder="Enter text..." />

    </div>
    <div className="form-control">

      <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
      <input type="number" onChange={set} name="amount" placeholder="Enter amount..." />

    </div>

    <button type='button' className="btn" onClick={Save}>Add transaction</button>
    
  </form>
</div>

    </div>
  )
}

export default AddTransaction
