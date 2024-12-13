import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import UserInput from './Components/UserInput'
import ListofItems from './Components/ListofItems'
import ToggleSwitch from './Components/ToggleSwitch'

function App() {

  return (
    <>
      <h1>Here you can Implement React Codes</h1>
      <div className='main'>
        {/* <Counter /> */}
        {/* <UserInput /> */}
        {/* <ListofItems /> */}
        <ToggleSwitch/>
      </div>
    </>
  )
}

export default App
