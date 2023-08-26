import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import Calendar from 'react-calendar'

export const NewCalendar=()=>{
    const[ calendar, setCalendar]=useState(new Date())
    return(
        <>
         <div className='flex items-center justify-center w-[100%] h-[100%]'>
         <Calendar
         className={`w-[80%} h-[100%] bg-white rounded-lg p-3`}
         value={calendar}
         onChange={setCalendar}
         />
         </div>
        </>
    )
}