import Link from "next/link"
import {FcLibrary} from "react-icons/fc"
import {BsGraphUpArrow} from "react-icons/bs"
import {GoPerson} from "react-icons/go"
import {BiCog} from "react-icons/bi"

import "tailwindcss/tailwind.css"

interface INavbarProps{
    className?:string
}
export const Navbar=(props:INavbarProps)=>{
    return(
        <>
         <div className={`${props.className} hidden bg-gray-900 w-[52px] h-[100vh] sm:flex flex-col items-center justify-center`}> 
              <nav>
                <ul className="w-[50px] h-[100vh] flex flex-col items-center gap-10 pt-5">
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link  href="/"><FcLibrary/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/graph"><BsGraphUpArrow/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/clients"><GoPerson/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/process"><BiCog/></Link></li>
                
                </ul>
              </nav>
         </div>
         <div className={`${props.className} sm:hidden bg-gray-900 w-[100vw] h-[8vh] flex items-center justify-center`}> 
              <nav >
                <ul className="w-[100%] h-[100%] flex  items-center gap-10">
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link  href="/"><FcLibrary/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/graph"><BsGraphUpArrow/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/clients"><GoPerson/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-purple-300 "><Link href="/process"><BiCog/></Link></li>
                
                </ul>
              </nav>
         </div>
        </>
    )
}