import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <div className='bg-red-500 text-4xl' ><Header/></div>
      <div className='bg-blue-500 text-6xl'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        </BrowserRouter>
      </div>
      <div className='bg-green-700 text-4xl'><Footer/></div>
    </>
  )
}

export default App
