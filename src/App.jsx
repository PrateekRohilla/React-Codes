import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import UserInput from './Components/UserInput'

function App() {

  return (
    <>
      <h1>Here you can Implement React Codes</h1>
      <div className='main'>
        {/* <Counter /> */}
        <UserInput />
      </div>
    </>
  )
}

export default App
