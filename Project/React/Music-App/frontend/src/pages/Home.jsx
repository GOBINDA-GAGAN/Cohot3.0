import React, { useContext } from 'react'
import PageTransition from '../components/PageTransition'
import { Auth } from '../context/AuthContext'
import Box from '../components/Box';

const Home = () => {


  const data = useContext(Auth);
  return (
    <PageTransition>


      <h1>home</h1>


    </PageTransition>
  )
}

export default Home