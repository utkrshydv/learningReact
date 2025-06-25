import { useState } from 'react'
import Person1 from './Person1'
import Person2 from './Person2'
import Messi from './Messi'
import Ronaldo from './Ronaldo'

function App() {
 
  return (
    <div>
      <h1>Auction</h1>
      <Person1/>
      <Person2/>
      <h1>Goalss</h1>
      <Messi />
      <Ronaldo />
    </div>
  
  )
}

export default App
