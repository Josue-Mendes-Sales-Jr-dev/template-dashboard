import { Layout } from '@/components/layout'
import { Orders } from '@/components/orders/index,'
import { CardsBox } from '@/components/cardsBox'
import { LineGraph } from '@/components/graph/line'
import { BsGraphUpArrow} from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai' 
import {AiOutlineCheckCircle} from 'react-icons/ai' 
import {GoPaste} from 'react-icons/go' 

export default function Graph() {
  return (
  <>
     <Layout>
     <div className='flex flex-col sm:flex-row items-center justify-center gap-5 w-[95%] h-[100%] '>
      <div className='w-[85%] h-[100%] mt-[35rem] flex flex-col sm:flex-raw gap-10 sm:mt-0'>
        <div className='flex items-center gap-5 justify-center w-[100%] h-[30%]'>
          <CardsBox title='218' subtitle='Graph'>
          < BsGraphUpArrow/>
          </CardsBox>
          <CardsBox title='38' subtitle='Check' >
          <AiOutlineMail/>
          </CardsBox>
          <CardsBox title='52' subtitle='Email' >
          <AiOutlineCheckCircle/>
          </CardsBox>
          <CardsBox title='77' subtitle='Percentual' >
          <GoPaste/>
          </CardsBox>
          
        </div>
        <div className='flex items-center gap-5 bg-gray-900 rounded-lg justify-center w-[100%] h-[65%]'>
         <LineGraph/>
        </div>
      </div>
       <Orders/>
     </div>
     </Layout>
      
  </>
  )
}
