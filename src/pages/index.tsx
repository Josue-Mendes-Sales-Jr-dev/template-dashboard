import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
   <div className='W-[100vw] h-[100vh] flex items-center justify-center '>
     <Layout>
      <div className=' h-[100vh] overflow-auto py-[7rem] md:overflow md:py-0'>
        <div className='flex flex-col flex-row gap-3 items-center justify-center h-[100vh] '>
          <div className='flex flex-col md:flex-row gap-3 w-[100%] items-center justify-center'>
            <Card className='w-[90%] md:w-[39%] rounded-lg' title='valor' subtitle='semanal' value='+18%'/>
            <Card className='w-[90%] md:w-[34%] rounded-lg' title='valor' subtitle='ROI transação' value='+11%'/>
            <Card className='w-[90%] md:w-[24%] rounded-lg' title='valor' subtitle='Superavit' value='+18%'/>
          </div>
          <div className='flex flex-col md:flex-row gap-3 w-[100%] h-[75vh] mb-15 md:mb-8 items-center justify-center'>
            <div className='w-[90%] md:w-[60%] rounded-lg h-[50rem] md:h-[100%] bg-red-400'>
            </div>
            <div  className='w-[90%] md:w-[38.2%] rounded-lg h-[50rem] mb-10 md:0  md:h-[100%] bg-blue-400'>
            </div>
          </div>
        </div>
      </div>
     </Layout>
    </div>  
  </>
  )
}
