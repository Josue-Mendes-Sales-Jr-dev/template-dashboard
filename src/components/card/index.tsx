import "tailwindcss/tailwind.css"

interface ICardProps{
  title:string
  subtitle:string
  value:string
  className?:string
}
export const Card=(props:ICardProps)=>{
    return(
        <>
        <div className={`${props.className} bg-gray-900 text-white w-[47%] sm:w-[48%] px-3 h-[60px] lg:h-[110px] bg-white flex gap-5 rounded-lg items-center justify-between`}>
          <p className="flex flex-col text-[1rem] md:text-[1.3rem]">
            <strong>{props.title}</strong>
            <span className="text-[.8rem]">
              {props.subtitle}
            </span>
          </p>
          <p className="bg-red-700 py-3 lg:py-8 px-1 text-[.8rem] md:text-[1.2rem] rounded-lg">
            {props.value}
          </p>
        </div>
        </>
    )
}