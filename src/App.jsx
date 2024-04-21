import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Footer'
import Footer from './components/Footer'
import Discord from './components/Discord'

function App() {

  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">
        statusCode1
      </h1>
      <Discord/>
      <Footer/>
    </>
  )
}

export default App
