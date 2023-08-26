import 'tailwindcss/tailwind.css'

interface IInputProps{
  className?:string
  type?:string
  placeHolder?:string
  value?:any
  onCange?: (e:any)=>void
}
export const Input=(props:IInputProps)=>{
    return(
        <>
        <input type={props.type} className={props.className} placeholder={props.placeHolder} value={props.value} onChange={props.onCange}/>
        </>
    )
}