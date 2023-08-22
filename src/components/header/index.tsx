import "tailwindcss/tailwind.css"

export const Header=()=>{

    return(
        <>
        <div className="w-[100%] px-2 p-2 bg-yellow-500 h-[80px] flex items-center justify-between">
          <p>
            Dashboard
          </p>
          <p>
            Welcome Junior.
          </p>
        </div>
        </>
    )
}