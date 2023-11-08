import React from 'react'
import Navbar from './home/Navbar'
import Data from './home/Data'
import Gauge from './home/Gauge'
import Footer from './home/Footer'
import BarChart from './home/BarChart'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <div><Data/></div>
        <div className='mt-14 md:mt-20'><Gauge/></div>
        <div className='mt-14'><BarChart/></div>
        <div className='text-gray-500 text-sm my-16'><Footer/></div>

    </div>
  )
}

export default Home