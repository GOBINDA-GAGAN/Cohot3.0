import React from 'react'
import PageTransition from '../components/PageTransition'

const About = () => {
  console.log("About rendering............");

  return (
    <PageTransition>



      <div className=' bg-amber-400 text-8xl  font-bold text-center p-4 uppercase'>About</div>
    </PageTransition>
  )
}

export default React.memo(About)