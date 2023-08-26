import "tailwindcss/tailwind.css"
import Link from "next/link"
import { Input } from "../input"
import { BsSearch } from "react-icons/bs"
import { AiOutlineExpand } from "react-icons/ai"
import { AiOutlineGlobal } from "react-icons/ai"
import { AiTwotoneAlert } from "react-icons/ai"

interface IHeaderProps{
  className: string
}
export const Header=(props:IHeaderProps)=>{

    return(
        <>
        <div className={`${props.className} px-4 bg-gray-900  text-white flex items-center justify-between`}>
          <form className="flex items-center gap-5">
            <Link href='/'>Dashboard</Link>
            <div className="flex items-center justify-center"> 
              <Input type="text" placeHolder="search..." className="h-[30px] rounded-bl-lg rounded-tl-lg text-black pl-3"/>
              <span className="w-[1.5rem] rounded-br-lg rounded-tr-lg h-[30px] bg-white flex items-center justify-center">
                <BsSearch className="text-gray-800 "/>
              </span>
            </div>
          </form>
          <div className="flex gap-4 items-center justify-center">
            <span className="hidden sm:block">
              <AiTwotoneAlert/>
            </span>
            <span className="hidden sm:block">
            <AiOutlineGlobal/>
            </span>
            <span>
              <AiOutlineExpand/>
            </span>
            Welcome Junior.
          </div>
        </div>
        </>
    )
}