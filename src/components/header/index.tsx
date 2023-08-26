import "tailwindcss/tailwind.css"
import Link from "next/link"

interface IHeaderProps{
  className: string
}
export const Header=(props:IHeaderProps)=>{

    return(
        <>
        <div className={`${props.className} px-4  text-white flex items-center justify-between`}>
          <p>
            <Link href='/'>Dashboard</Link>
          </p>
          <p>
            Welcome Junior.
          </p>
        </div>
        </>
    )
}