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
        <div className=" w-screen h-[100vh] flex gap-2">
            <Navbar/>
            <div className="flex w-[95%] h-[100vh] bg-gray-400 flex-col border-box overflow-hidden">
                <Header/>
                <div>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
        </>
    )
}