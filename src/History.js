import React, { useContext } from 'react'
import Context from './Context'
const History = () => {
  var {fetch,insert}=useContext(Context)

 function del(key){
  fetch.splice(key,1)
  insert(fetch=>[...fetch])
 }
  
  
  return (
    <div>
       <h3>History</h3>
      <ul id="list" className="list">

        {
          fetch.map(function(obj,index){
        if(obj.amount<0){
            return(
            <li className="minus">
            {obj.text} <span>${obj.amount}</span>
            <button onClick={()=>del(index)} className="delete-btn">x</button>
            </li>
          )}
          else{
            return(
              <li className="plus">
              {obj.text} <span>${obj.amount}</span>
              <button onClick={()=>del(index)} className="delete-btn">x</button>
              </li>
            )
          }
          })
        }
        


</ul>

    </div>
  )
}

export default History
