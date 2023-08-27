import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export const NewCalendar=()=>{
    const[ calendar, setCalendar]=useState(new Date())
    const[ week, setWeek]=useState([
        'seg', 'ter','qua','qui','sex','sáb','dom'
    ])
    return(
        <>
         <div className='flex items-center justify-center rounded-lg w-[27rem] h-[30rem] bg-gray-900'>
         <Calendar
         className={`w-[45rem] h-[25rem] rounded-lg p-3 `}
         value={calendar}
         onChange={setCalendar}
        
         
         />
         </div>
        </>
    )
}