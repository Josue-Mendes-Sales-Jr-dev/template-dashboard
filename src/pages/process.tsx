import Image from 'next/image'
import { Layout } from '@/components/layout'
import { IoMdPerson} from 'react-icons/io'
import { Data } from '@/components/data'
import { BsThreeDotsVertical } from 'react-icons/bs'


export default function Process() {
  return (
  <>

     <Layout>
      <div className='w-[100%] h-[100%] flex flex-col items-center justify-center'>
        <ul className=' flex  items-center justify-between lg:justify-center w-[95%]  py-2 px-[1rem] bg-gray-900 h-[60px] text-white rounded-tl-lg rounded-tr-lg'>
            <li className='lg:w-[25%] w-[20%]' >
                Nome
            </li>
            <li className='lg:w-[25%] w-[50%]'>
                Status
            </li >
            <li className='w-[25%] hidden lg:inline'>
                Last Order
            </li>
            <li className='w-[25%] hidden lg:inline'>
                Method
            </li>
        </ul>
        <div className='flex flex-col gap-3 w-[95%] items-center h-[90vh]  pb-2 rounded-bl-lg rounded-br-lg bg-gray-900 overflow-hidden'>
            <ul className='flex flex-col gap-3 w-[99%] items-center h-[100%] bg-gray-900 overflow-auto  scrollbar-thin scrollbar-thumb-slate-300' >
              {
                Data.map((items)=>(
                    <>
                    <li  className=' flex items-center justify-between lg:justify-center  w-[98%] px-3 bg-gray-300 h-[55px] rounded'>
                        <li key={items.id} className='lg:w-[25%] w-[20%] py-2' >
                           <div className='flex w-[100%] gap-3 lg:gap-5 items-center'>
                            <span className='flex items-center justify-center rounded bg-red-700  w-[35px] h-[38px]'><IoMdPerson className='sm:w-[30px] w-[25px]'/></span>
                            <p className=' flex flex-col md:text-[1rem] sm:text-[.8rem] text-[.6rem]'>
                                <strong>$ {items.total},00</strong>
                                <span className='text-[.6rem]'>{items.nome.first} </span>
                            </p>
                           </div>
                        </li>
                                     <li className={` lg:w-[25%] w-[50%] md:text-[1rem] sm:text-[.8rem] text-[.6rem]`}>
                                   <p className={`${items.status=="Completed" ? 'bg-blue-400 ' : items.status=="OnHold" ? 'bg-yellow-300': 'bg-red-400'} py-1 text-center rounded-lg w-[100px]`}>
                                     {items.status}
                                   </p>
                                     </li >
                                     <li className='w-[25%] hidden lg:inline'>
                                    {items.date}
                                     </li>
                                     <li className='w-[25%] hidden lg:flex items-center justify-between'>
                                     {items.method}
                                     <BsThreeDotsVertical/>
                                     </li>
                    </li>
                 </>
                ))
              }
            </ul>
        </div>
      </div>
     </Layout>
   
  </>
  )
}
