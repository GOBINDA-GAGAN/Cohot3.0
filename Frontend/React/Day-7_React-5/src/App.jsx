import React, { useState } from 'react'
import Web from './Web.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import UserCard from './components/UserCard.jsx';
import { User } from 'lucide-react';

const App = () => {

  const [toogle, setToogle] = useState(false);
  const [user, setUser] = useState([]);
  console.log(user);

  return (
    <div className=' h-screen'>



      <Register setToogle={setToogle} setUser={setUser} />
      <UserCard user={user[1]} />

      {/* <div>
        {
          user.map((elem, key) => {
            <UserCard user={elem} key={key} />
          })
        }
      </div> */}












    </div>
  )
}

export default App