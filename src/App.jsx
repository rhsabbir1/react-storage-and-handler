import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmatics from './components/Cosmatics/Cosmatics'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Cosmatics></Cosmatics>
     <Shop></Shop>
    </div>
  )
}

export default App
