import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {





  const [toogle, setToogle] = useState(true);

  const [users, setUser] = useState(() => {
    const savedUsers = localStorage.getItem("user");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });


  return (
    <div className='p-2 bg-green-100 h-screen  relative  '>
      <Navbar setToogle={setToogle} />

      <div className="mt-4 flex gap-3 flex-wrap">
        {toogle ? (
          <Form users={users} setUser={setUser} setToogle={setToogle} />
        ) : (
          users.map((user, i) => (
            <UserCard key={i} user={user} />
          ))
        )}
      </div>

    </div>
  )
}

export default App