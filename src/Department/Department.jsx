import { useEffect, useState } from "react";
import DEpartDetails from "./DEpartDetails";

import Marquee from "react-fast-marquee";




const Department = () => {

      
     const [depart, setDepart] = useState([])


     useEffect( () => {

      fetch('departments.json')
      .then(res => res.json())
      .then(data => setDepart(data))


     } , [])



    
    return (
        <div className=" mb-10 mt-10 mr-10 ml-10">

            <div>

               <div className=" bg-blue-100 p-2 rounded-xl flex-col md:flex-row lg:flex-row text-center">
                
                 <Marquee>
                 <div>
                 <h1 className="  text-blue-500 text-4xl font-bold">Health Talk working on ten Category Departments  </h1>
                 <p className=" text-xl text-slate-500 mt-5">Illness is the doctor to whom we pay most heed; to kindness, to knowledge, we make promise only; pain we obey.</p>
                 </div>

                 </Marquee>
                 

                
               </div>


            </div>


            <div className="     flex justify-center items-center mb-10 mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-10">
                    {
                        depart.map( depart => <DEpartDetails   depart={depart}></DEpartDetails> )
                    }
                </div>
            </div>

            
            
        </div>
    );
};

export default Department;