import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
import { Header } from "../header"
import { ReactNode } from "react"

interface ILayoutProps{
    children?: ReactNode
    className?: string
}

export const Layout=(props:ILayoutProps)=>{
    return(
        <>
        <div className=" w-screen h-[100vh] flex sm:flex-row flex-col gap-2 ">
            <Navbar className="hidden sm:flex"/>
            <div className="flex sm:w-[95%] h-[90%] lg:h-[96vh] items-center gap-5 flex-col border-box">
                <Header className='w-[100%] sm:w-[90%] lg:w-[97%] h-[10%] sm:h-[20%]  sm:rounded-br-lg sm:rounded-bl-lg'/>
                <div className="flex items-center justify-center scrollbar-thin w-[100%] h-[100%] overflow-auto">
                    {
                        props.children
                    }
                </div>
            </div>
            <Navbar className="sm:hidden flex h-[10%]"/>
        </div>
        </>
    )
}