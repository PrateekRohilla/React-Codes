import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import UserInput from './Components/UserInput'
import ListofItems from './Components/ListofItems'
import ToggleSwitch from './Components/ToggleSwitch'
import FetchDisplay from './Components/Fetch&Display'
import Timer from './Components/Timer'
import ToDo1 from './Components/ToDo1'
import ChangeBG from './Components/ChangeBG'
import RandomQuote from './Components/RandomQuote'
import FileUpload from './Components/FileUpload'
import SearchBar from './Components/SearchBar'
import Pagination from './Components/Pagination'

function App() {

  const items = [
    "Apple","Banana","Orange","Mango","Strawberry","Pineapple","Grapes","Watermelon",
    "Cherry","Blueberry","Peach","Kiwi","Papaya","Guava","Lemon","Pomegranate","Coconut","Raspberry",
    "Lychee","Apricot"
];

  return (
    <>
      <h1>Here you can Implement React Codes</h1>
      <div className='main'>
        {/* <Counter /> */}
        {/* <UserInput /> */}
        {/* <ListofItems /> */}
        {/* <ToggleSwitch/> */}
        {/* <FetchDisplay /> */}
        {/* <Timer /> */}
        {/* <ToDo1 /> */}
        {/* <ChangeBG /> */}
        {/* <RandomQuote /> */}
        {/* <FileUpload /> */}
        {/* <SearchBar items={items} /> */}
        <Pagination items={items} itemsPerPage={4} />
      </div>
    </>
  )
}

export default App
