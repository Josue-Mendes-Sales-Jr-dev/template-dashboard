import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { NewCalendar } from '../components/calendar'
import { BarChart } from '@/components/graph'
import { RadarGraph } from '@/components/graph/Radar'
import { LineGraph } from '@/components/graph/line'


export default function Home() {
  return (
  <>
     <Layout>
      <div className='flex flex-col w-screen gap-10 h-[100%]'>
        <div className='w-screen lg:h-[45%] gap-5 flex flex-col lg:flex-row items-center justify-center'>
          <div className='w-[80%] lg:w-[45%] h-[100%] flex flex-wrap gap-4 items-center justify-center'>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
          </div>
          <div className='w-[80%] lg:w-[45%] h-[45%] lg:h-[100%] flex items-center justify-center bg-gray-900 rounded'>
            <BarChart/>
          </div>
        </div>
        <div className='w-screen lg:h-[45%]  flex-col lg:flex-row  gap-5 flex items-center justify-center' >
          <div className='w-[80%] lg:w-[30%] h-[100%]'>
           <NewCalendar/>
          </div>
          <div className='bg-gray-900 text-white rounded-lg w-[80%] lg:w-[40%] h-[100%]'>
             <LineGraph/>
          </div>
          <div className='bg-gray-900 rounded-lg flex items-center justify-center w-[80%] lg:w-[20%] h-[100%]'>
            <RadarGraph/>
          </div>
        </div>
      </div>
     </Layout>
  </>
  )
}
