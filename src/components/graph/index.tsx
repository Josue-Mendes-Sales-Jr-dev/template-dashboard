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
                  borderColor: 'rgb(128, 0, 128)',
                  backgroundColor: 'rgb(128,16,325,0.4)',
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
        <div className='w-[100%] p-1 bg-white h-[100%] rounded-lg'>
            <Bar data={ chartData} options={chartOptions}/>
        </div>
        </>

    )
}