import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {

  const [toogle, setToogle] = useState(true);

  const [user, setUser] = useState([])

  return (
    <div className='p-2 bg-rose-300 h-screen  relative  '>
      <Navbar setToogle={setToogle} />

      <div className="mt-4 flex gap-3 flex-wrap">
        {toogle ? (
          <Form setUser={setUser} setToogle={setToogle} />
        ) : (
          user.map((user, i) => (
            <UserCard key={i} user={user} />
          ))
        )}
      </div>

    </div>
  )
}

export default App