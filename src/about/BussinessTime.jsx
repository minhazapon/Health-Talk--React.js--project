

import "react-big-calendar/lib/css/react-big-calendar.css"

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)



const BussinessTime = () => {
    return (
        <div className="  flex-col md:flex-row lg:flex-row mb-10 mt-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row">
                <h1 className=" text-center text-blue-500 text-6xl font-bold"><span className=" text-red-600">Health</span> Talk Business Time</h1>
                <p className=" text-center text-xl text-slate-500">"Health is not valued till sickness comes."</p>
            </div>
{/* ---------------------------------------------------------------------------------------------------------------             */}


           <div>



           <div className=" flex-col md:flex-row lg:flex-row mt-20 ">
           <Calendar
             localizer={localizer}
             startAccessor="start"
             endAccessor="end"
             style={{ height: 500 }}
           />
         </div>







           </div>













        </div>
    );
};

export default BussinessTime;