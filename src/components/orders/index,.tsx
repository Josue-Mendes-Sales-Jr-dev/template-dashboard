import 'tailwindcss/tailwind.css'
import {AiFillShopping} from 'react-icons/ai'
import { Data } from '../data'


export const Orders=()=>{
    return(
        <>
        <div  className='w-[90%] flex flex-col items-center pt-2  md:w-[32%] rounded-lg mb-3  md:mb-[0px]  h-[100%] bg-gray-900 border-box '>
        <div className='w-[98%] flex flex-col items-center   rounded-lg   md:mb-[0px]  h-[98%] bg-gray-900 overflow-auto  scrollbar-thin scrollbar-thumb-red-900'>
             {
                Data.map(items=>(
                    // eslint-disable-next-line react/jsx-key
        <div className='flex items-center justify-between h-[80px] w-[95%] mb-2 px-2 py-2 rounded bg-gray-300'>
            <div className='flex gap-3 items-center'>
               <span className='flex items-center justify-center w-[35px] h-[38px] rounded bg-red-700'>
                <AiFillShopping/>
               </span>
               <div className=' flex flex-col items-center justify-center'>
                   <p>
                     <strong>{items.nome.first}</strong>
                   </p>
                   <p className='text-[.7rem]'>
                   ${items.total},00
                   </p>
               </div>
            </div>
            <div className='text-[1rem] flex items-center justify-center'>
              <p>
              {items.date}
              </p>
            
            </div>
        </div>
                ))
             }

     </div>
    </div>

        </>
    )
}