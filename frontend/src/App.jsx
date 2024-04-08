import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <Home />
    </>
  )
}

export default App