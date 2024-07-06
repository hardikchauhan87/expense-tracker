import React, { useState } from 'react'
import "./Style.css"
import Balance from './Balance'
import Updown from './Updown'
import History from './History'
import AddTransaction from './AddTransaction'
import Context from './Context'

const App = () => {
 const[Obj,SetObj]=useState([])
  return (
    <div>
      <Context.Provider value={{"fetch":Obj,"insert":SetObj}}>
       <h2>Expense Tracker</h2>
       <div className="container">
       <Balance/>
       <Updown/>
       <History/>
       <AddTransaction/>
       </div>
       </Context.Provider>
     
    </div>
  )
}

export default App
