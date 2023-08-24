import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Orders } from '@/components/orders/index,'
import { BarChart } from '@/components/graph'


export default function Home() {
  return (
  <>
   <div className='W-[100vw] h-[100vh] flex items-center justify-center '>
     <Layout>
      <div className=' h-[100vh] overflow-auto pt-[2rem] pb-[6rem] sm:py-[2rem] md:overflow md:py-0'>
        <div className='flex flex-col flex-row gap-8 items-center justify-center h-[100vh] '>
          <div className='flex flex-col sm:mt-4 sm:flex-row gap-3 w-[100%] items-center justify-center'>
            <Card className='w-[90%] sm:w-[30%] mt-5 sm:mt-0 md:w-[39%] rounded-lg' title='valor' subtitle='semanal' value='+18%'/>
            <Card className='w-[90%] sm:w-[30%] md:w-[34%] rounded-lg' title='valor' subtitle='ROI transação' value='+11%'/>
            <Card className='w-[90%] sm:w-[26%] md:w-[24%] rounded-lg' title='valor' subtitle='Superavit' value='+18%'/>
          </div>
          <div className='flex flex-col md:flex-row gap-3 w-[100%] h-[73vh] mb-[2.5rem] md:mb-[2.5rem] items-center justify-center'>
            <div className='w-[90%] md:w-[65.8%] rounded-lg h-[100%] bg-red-400'>
              <BarChart/>
            </div>
          </div>
        </div>
      </div>
     </Layout>
    </div>  
  </>
  )
}
