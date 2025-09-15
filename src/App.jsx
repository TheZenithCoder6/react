import React, { useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Contacts from './pages/Contacts'
import Blogue from './pages/Blogue'


const App = () => {
  
 

  return (
 
    <div className='overflow-x-hidden'>
         <div className='text-white'>
    </div>
  
    <Navbar />
    <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
          <Route path="/blogue" element={<Blogue />} />
    </Routes>
    </div>
  )
}

export default App
