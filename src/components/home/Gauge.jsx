import React, { useState } from 'react'
import GaugeChart from "react-gauge-chart";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Gauge = () => {

    const api = {
            key: '81349bc105b014e2e05372ebd1fcf7bc',
            base: 'http://api.openweathermap.org/data/2.5/'
    }
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({
            main:{temp:0}
    });

    const searchPressed = () =>{

      setLoading(true)
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
      });
      setTimeout(()=>{setLoading(false)},5000)
    }

        
  return (
   <>
    

    <h1 id='Gauge' className='font-bold text-lg md:text-2xl ml-5 mt-5 md:ml-14 md:mt-10'>(ii) Gauge chart</h1>
       <div className='flex   justify-center'>

        <div className='md:w-[60%] xl:w-[50%] '>
            <GaugeChart
            className=''
            id="gauge-chart"
            nrOfLevels={5}
            colors={["#0896ff", "#4272b8", "#73568d", "#f90714", "#c51010"]}
            arcWidth={0.2}
            percent={weather.main.temp/100  }
            textColor={"black"}
            />
            
        </div>
       </div>


      {/* weather */}
      
        

        {/* Search Box - Input + Button  */}
        <div className='ml-5  md:ml-14'>
            <p className='font-bold text-lg md:text-2xl  md:mt-10'>Weather checker</p>
          <input
          className='bg-slate-200 outline-none focus:border focus:border-blue-400 h-12'
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='mt-10 px-7 py-3 rounded-md bg-blue-400 hover:bg-blue-500 text-white font-bold' onClick={searchPressed}>Search</button>

        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div className=' flex gap-x-3 mt-4 ml-5  md:ml-14'>
            {/* Location  */}
            <p>{weather.name}</p>
            {loading &&  <Spin size='large' indicator={ <LoadingOutlined/>} spin/> }

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>
         
          </div>
        ) : (
          ""
        )}

   </>
      
  )
}

export default Gauge