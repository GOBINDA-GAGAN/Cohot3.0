import React from 'react'
import PageTransition from '../components/PageTransition'
import SparkHover from '../components/SparkHover';
import ElectricSpark from '../components/ElectricSpark';

const Home = React.memo(
  () => {
    console.log("home render.........");

    return (
      <PageTransition>


        <div className=' bg-blue-100 text-black  font-bold text-center p-4 uppercase'>



          <h1 className='text-8xl'>
            Home
          </h1>

          <button className=' py-3 mt-40 w-full hover:bg-blue-500 transition-all duration-300 border border-blue-500   
        [border-shape:shape(from_1%_20%,line_to_11%_1%,line_to_39%_3%,line_to_75%_1%,line_to_11%_1%,line_to_39%_3%,line_to_75%_1%,line_to_99%_5%,line_to_97%_30%,line_to_99%_62%,line_to_96%_97%,line_to_70%_99%,line_to_45%_96%,line_to_19%_99%,line_to_2%_95%,line_to_3%_62%,line_to_0%_34%,close)]'>
            Kia  hal hee dost
          </button>



        </div>



      </PageTransition>
    )
  }
)
export default Home;