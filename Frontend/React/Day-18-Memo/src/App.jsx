import React, { useCallback, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'


const App = () => {
  const [count, setCount] = useState(0);
  const [user, setuser] = useState({
    name: "alok", id: 789
  })


  const greet = useCallback(() => {
    console.log(" good evening");

  }, [])

  return (
    <div>
      <h1>count is:{count}</h1>
      <button
        style={{
          border: "1px solid red",
          borderShape: `shape(
      from 1% 4%,
      line to 24% 1%,
      line to 49% 3%,
      line to 75% 1%,
      line to 99% 5%,
      line to 97% 30%,
      line to 99% 62%,
      line to 96% 97%,
      line to 70% 99%,
      line to 45% 96%,
      line to 19% 99%,
      line to 2% 95%,
      line to 3% 62%,
      line to 10% 34%,
      close
    )`,
        }}
        className='px-4 py-4 rounded-md' onClick={() => {
          setCount((prev) => prev + 1)
        }}> clic me </button>
      <Home greet={greet} />
      <About greet={greet} />

    </div>

  )
}

export default App