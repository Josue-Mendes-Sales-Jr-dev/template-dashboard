import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Orders } from '@/components/orders/index,'
import { BarChart } from '@/components/graph'


export default function Home() {
  return (
  <>
   <div className='w-[100vw] h-[100vh] flex items-center justify-center '>
     <Layout>
      <div className='flex flex-col w-screen gap-10 h-[100%]'>
        <div className='w-screen lg:h-[45%] gap-5 flex flex-col lg:flex-row items-center justify-center'>
          <div className='w-[100%] sm:w-[80%] lg:w-[45%] h-[100%] flex flex-wrap gap-4 items-center justify-center'>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
             <Card title='Dinheiro' subtitle='valor' value='$34567'/>
          </div>
          <div className='w-[80%] lg:w-[45%] h-[45%] lg:h-[100%] flex items-center justify-center'>
            <BarChart/>
          </div>
        </div>
        <div className='w-screen lg:h-[45%]  flex-col lg:flex-row  gap-5 flex items-center justify-center' >
          <div className='w-[80%] lg:w-[30%] h-[100%]'>
           <BarChart/>
          </div>
          <div className='w-[80%] lg:w-[40%] h-[100%]'>
             <BarChart/>
          </div>
          <div className='w-[80%] lg:w-[20%] h-[100%]'>
            <BarChart/>
          </div>
        </div>
      </div>
     </Layout>
    </div>  
  </>
  )
}
