import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
);


const BarChart = () => {
  const [chart, setChart] = useState({})
  let baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  let apiKey = "coinrankingd4a533fd07ba81388db736bbdb0a987d1a0cb6252392664f";


  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              
              setChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [baseUrl, apiKey])

  let data = {
    labels: chart?.coins?.map(x => x.name),
    datasets: [{
      label: `${chart?.coins?.length} Coins Available`,
      data: chart?.coins?.map(x => x.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
    
      },
    },
  }


  return (
   <>
    <h1 id='Bar' className='font-bold text-lg md:text-2xl ml-5 mt-5 md:ml-14 md:mt-10'>(iii) Bar chart</h1>

    <div className='flex justify-center'>

        <div className='w-[80%] h-64 md:h-auto '>
        <Bar  data={data} height={400} options={options} />
        </div>

    </div>
   </>
  )
}

export default BarChart