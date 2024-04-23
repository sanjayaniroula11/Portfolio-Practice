import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyWorks from './components/MyWorks';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <MyWorks />
    </>
  )
}

export default App
