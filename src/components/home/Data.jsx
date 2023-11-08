import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';



ChartJS.register(
  ArcElement,CategoryScale,LinearScale,PointElement, LineElement, Title, Tooltip, Legend, Filler
)

const Data = () => {

    const [chartData, setchartData] = useState(false);
    const [count, setCount] = useState(4);

    const less = ()=>{
      setCount(count -1)
    }
    const add = ()=>{
      setCount(count + 1)
    }
    useEffect(()=>{
        const fetchData = async ()=>{  
            const {data} = await axios.get(`https://hub.dummyapis.com/products?noofRecords=${count}&idStarts=1001&currency=usd`).catch((e)=>{console.log(e);})
          
            setchartData({
              labels: data.map(item => item.name),
              datasets: [
                {
                  label: 'Price',
                  data: data.map(item => item.price.replace('$','')),
                  fill: true,
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],

            })
        }
        fetchData();
        
    },[setCount,count])

  return (
    <>
    

    <h1 id='Line chart' className='font-bold text-lg md:text-2xl ml-5 mt-5 md:ml-14 md:mt-10'>(i) Line chart</h1>
    <p className='font-bold flex justify-end mr-5 md:mr-24  text-sm md:text-base'>Number of product</p>
    <div className=' md:ml-20 lg:ml-72 flex justify-end mr-5 md:mr-20'>
        <button className='border px-3 py-1 text-sm md:text-xl font-bold'  onClick={less}>-</button>
        <p className='border px-3 py-1 text-sm md:text-xl font-bold' >{count}</p>
        <button className='border px-3 py-1 text-sm md:text-xl font-bold' onClick={add}>+</button>
      
    </div>
    

    <div className="md:flex justify-center">
      <div className='  md:w-[70%] md:h-auto '>
        {
          chartData?chartData && chartData?.datasets && (
            <Line 
              options={ {
                responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Product Price',
                    },
                  },
                }} 
              data={chartData} 
            />
          ): <Spin size='large' indicator={ <LoadingOutlined/>} spin/>
        }
      </div>
    </div>
    </>
  )
}

export default Data