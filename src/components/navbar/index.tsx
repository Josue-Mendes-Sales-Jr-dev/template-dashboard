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
         <div className={`${props.className} bg-green-400 w-[50px] h-[100vh] flex flex-col items-center justify-center`}> 
              <nav>
                <ul className="w-[50px] h-[100vh] flex flex-col items-center gap-10 pt-5">
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-green-800 "><Link  href="/"><FcLibrary/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-green-800 "><Link href="/"><BsGraphUpArrow/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-green-800 "><Link href="/"><GoPerson/></Link></li>
                   <li className="p-2 bg-gray-200 rounded-lg hover:bg-green-800 "><Link href="/"><BiCog/></Link></li>
                
                </ul>
              </nav>
         </div>
        </>
    )
}