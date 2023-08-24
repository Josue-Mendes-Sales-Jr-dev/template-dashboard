import "tailwindcss/tailwind.css"

interface ICardProps{
  title:string
  subtitle:string
  value:string
  className:string
}
export const Card=(props:ICardProps)=>{
    return(
        <>
        <div className={`${props.className} px-3 h-[60px] md:h-[80px] bg-white flex items-center justify-between`}>
          <p className="flex flex-col text-[1.1rem] md:text-[1.3rem]">
            <strong>{props.title}</strong>
            <span className="text-[.8rem]">
              {props.subtitle}
            </span>
          </p>
          <p className="bg-purple-400 py-3 px-2 text-[.9rem] md:text-[1.2rem] rounded-lg">
            {props.value}
          </p>
        </div>
        </>
    )
}