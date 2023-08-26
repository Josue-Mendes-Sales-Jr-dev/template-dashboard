import 'tailwindcss/tailwind.css'
import {Bar} from 'react-chartjs-2'
import { Data } from '../data'
import {
     Chart as chartjs,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
 } from 'chart.js'
import { useEffect, useState } from 'react'

 chartjs.register(
    CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
 )

export const BarChart = ()=>{
    const[chartData,setChartData]=useState<any>({
        datasets: []})

    const[chartOptions, setChartOptions]=useState({})

    useEffect(()=>{
        setChartData({
            labels:Data.map(item=>(item.nome.first )),
            datasets:[
                  {
                  label: 'sales',
                  data: Data.map(item=>(item.total)),
                  borderColor: 'rgb(255, 255, 255)',
                  backgroundColor: 'rgb(155, 20, 13)',
                  
                },
            ]
        })
        setChartOptions({
            Plugin:{
                legend:{
                    position: 'top'
                },
                Title:{
                    display:true,
                    Text: 'Daily Revenue'
                }

            },
            maintainAspectRatio: false,
            reponsive:true
        })

    },[])

    return(
        <>
        <div className='w-[100%] p-1 h-[100%] rounded-lg '>
            <Bar className='text-white' data={ chartData} options={chartOptions}/>
        </div>
        </>

    )
}