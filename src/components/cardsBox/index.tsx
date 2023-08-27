import "tailwindcss/tailwind.css"

interface ICardsBoxProps{
  title?:string
  subtitle?:string
  value?:string
  className?:string
   children?:any
}
export const CardsBox=(props:ICardsBoxProps)=>{
    return(
        <>
        <div className={`${props.className} min-w-[16vw] p-3 min-h-[15vh]  bg-gray-900 text-white items-center justify-center flex-col flex rounded-lg items-center`}>
          <div className="text-[2.5rem] text-red-700">
            {props.children}
          </div>
          <p className="flex flex-col items-center justify-center h-[50%] text-[3.2rem]">
            <strong>
              {props.title}
            </strong>
            <span className="text-[.8rem] text-red-700">
              {props.subtitle}
            </span>
          </p>
        </div>
        </>
    )
}