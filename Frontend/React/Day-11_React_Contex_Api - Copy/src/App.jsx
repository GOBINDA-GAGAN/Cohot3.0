

import React, { useContext } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { myStore } from './components/context/MyContext'

export const App = () => {

  const { count, setCount} = useContext(myStore)

 



  return (
    <div>


      <button onClick={() => setCount((prev) => prev + 1)} className='p-3 border m-4 bg-yellow-950 text-stone-50'> click</button>
      <h1>Count:{count}</h1>
      <Home />
      <About />
      <Contact />

    </div>
  )
}

