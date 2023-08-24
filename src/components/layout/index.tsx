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
        <div className=" w-screen h-[100vh] flex sm:flex-row flex-col gap-2">
            <Navbar className="hidden sm:flex"/>
            <div className="flex sm:w-[95%] h-[92vh] sm:h-[98vh] flex-col border-box overflow-hidden">
                <Header/>
                <div>
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