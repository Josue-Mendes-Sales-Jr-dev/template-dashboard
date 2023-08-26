import "tailwindcss/tailwind.css"
import Link from "next/link"
import { Input } from "../input"
import { BsSearch } from "react-icons/bs"
import { AiOutlineExpand } from "react-icons/ai"
import { AiOutlineGlobal } from "react-icons/ai"
import { AiTwotoneAlert } from "react-icons/ai"
import {AiOutlineDollar } from "react-icons/ai"

interface IHeaderProps{
  className: string
}
export const Header=(props:IHeaderProps)=>{

    return(
        <>
        <div className={`${props.className} px-4 bg-gray-900  text-white flex items-center justify-between`}>
          <form className="flex items-center gap-5">
            <Link href='/'><AiOutlineDollar/></Link>
            <div className="flex items-center justify-center"> 
              <Input type="text" placeHolder="search..." className="h-[30px] w-[10rem] sm:w-[12rem] rounded-bl-lg rounded-tl-lg text-black pl-3"/>
              <span className="w-[1.5rem] rounded-br-lg rounded-tr-lg h-[30px] bg-white flex items-center justify-center">
                <BsSearch className="text-gray-800 "/>
              </span>
            </div>
          </form>
          <div className="flex gap-4 sm:gap-7 items-center justify-center">
            <span className="hidden sm:block">
              <AiTwotoneAlert/>
            </span>
            <span >
            <AiOutlineGlobal/>
            </span>
            <span className="hidden sm:block">
              <AiOutlineExpand/>
            </span>
            <span className=" bg-white w-[1.4rem] h-[1.4rem] rounded-full">
              
            </span>
          </div>
        </div>
        </>
    )
}