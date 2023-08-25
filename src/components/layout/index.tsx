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
            <div className="flex sm:w-[95%] h-[91vh] sm:h-[96vh] gap-5 flex-col border-box ">
                <Header/>
                <div className="flex items-center justify-center scrollbar-thin w-[100%] h-[90%] overflow-auto">
                    {
                        props.children
                    }
                </div>
            </div>
            <Navbar className="sm:hidden flex"/>
        </div>
        </>
    )
}