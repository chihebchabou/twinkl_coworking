import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2 text-2xl">
            <img className='w-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXa2nDnEvDX38UwW8xvmzh7-5GMYS5c0iUCBulvv2Lcx5XRQ3PYdthgJDzWUsOD-zbpY&usqp=CAU" alt="" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-9">
            <a href="" className='hover:text-darkGrayishBlue'>Acceuil</a>
            <a href="" className='hover:text-darkGrayishBlue'>No formations</a>
            <a href="" className='hover:text-darkGrayishBlue'>Découvrir Twinkl</a>
          </div>
          {/* Button */}
          <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block ">S'inscrire</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Apprends, Réalise tes projets, Réussis ta carrière
            </h1>
            <p className='max-w-md text-center text-darkGrayishBlue md:text-left md:max-w-sm'>Des programmes tech basés sur des projets, flexibles et conçus pour te donner les compétences indispensables pour faire évoluer ta carrière.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App