import React from 'react'
import { useState } from 'react';
import Form from './Form';

const App = () => {
  const [name, setName] = useState('Reezy wise')
  const [job, setJob] = useState('full-stack dev')
  const [count, setCount] = useState (20)
  
   
  const changeName =() => {
    setName("reezy!!!!!!")
    setJob("Abi javascript de whine me ni")
   }

  return (
    <div>
      <p>
        My Name is {name} . I Am a {job}
        <button onClick={changeName}>
        Click me
      </button>
       <h1>
        Count:{count}
       </h1>
       <button className='btn btn-primary m-1' onClick={()=>{setCount(count - 1)}}>
          Decrease
       </button>
       <button className='btn btn-danger  m-1' onClick={()=>{setCount(count + 0.5)}}>  
        Increase
       </button>
       <button className='btn btn-outline-secondary  m-1' onClick={()=>{setCount(count * 0)}}>
        Reset
       </button>
      </p>

      <Form/>
    </div>
  )
}

export default App
