import React from 'react'
import Navbar from './home/Navbar'
// import Data from './home/Data'
// import Gauge from './home/Gauge'
import Footer from './home/Footer'
import LineChart from './LineChart'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <LineChart/>
        {/* <div><Data/></div> */}
        {/* <div className='md:mt-20'><Gauge/></div> */}
        <div className='text-gray-500 text-sm my-16'><Footer/></div>

    </div>
  )
}

export default Home