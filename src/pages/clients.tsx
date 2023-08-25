import Image from 'next/image'
import { Layout } from '@/components/layout'
import { IoMdPerson} from 'react-icons/io'
import { Data } from '@/components/data'
import { BsThreeDotsVertical } from 'react-icons/bs'



export default function Clients() {
  return (
  <>
     <Layout>
      <div className='w-[100%] h-[100%] mt-2 flex flex-col pb-2 items-center justify-center'>
        <ul className=' flex  items-center justify-between lg:justify-center w-[95%]  py-2 px-[1rem] bg-gray-100 h-[60px] rounded-tl-lg rounded-tr-lg'>
            <li className='lg:w-[25%] w-[20%]' >
                Nome
            </li>
            <li className='lg:w-[25%] w-[50%]'>
                Email
            </li >
            <li className='w-[25%] hidden lg:inline'>
                Last Order
            </li>
            <li className='w-[25%] hidden lg:inline'>
                Method
            </li>
        </ul>
        <div className='flex flex-col gap-3 w-[95%] items-center h-[75vh] sm:h-[60vh] lg:h-[80vh] pb-2 rounded-bl-lg rounded-br-lg bg-gray-100 overflow-hidden'>
            <ul className='flex flex-col gap-3 w-[99%] items-center h-[100%] bg-gray-100 overflow-auto  scrollbar-thin scrollbar-thumb-slate-300' >
              {
                Data.map((items)=>(
                    <>
                    <li  className=' flex items-center justify-between lg:justify-center  w-[98%] px-3 bg-gray-300 h-[55px] rounded'>
                        <li key={items.id} className='lg:w-[25%] w-[20%] py-2' >
                           <div className='flex w-[100%] gap-3 lg:gap-5 items-center'>
                            <span className='flex items-center justify-center rounded bg-purple-400 w-[35px] h-[35px]'><IoMdPerson className='sm:w-[30px] w-[25px]'/></span>
                            <p className=' flex gap-1 md:text-[1rem] sm:text-[.8rem] text-[.6rem]'>
                                <span>{items.nome.first}</span>
                                {items.nome.last}
                            </p>
                           </div>
                        </li>
                                     <li className='lg:w-[25%] w-[50%] md:text-[1rem] sm:text-[.8rem] text-[.6rem]'>
                         <p>{items.nome.first}{items.nome.last}@gmail.com</p>
                                     </li >
                                     <li className='w-[25%] hidden lg:inline'>
                                    {items.date}
                                     </li>
                                     <li className='w-[25%] hidden lg:flex items-center justify-between'>
                                     {items.method}
                                     < BsThreeDotsVertical />
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
