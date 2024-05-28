import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";



const ALLService = () => {
   
    const [all, setAll] = useState([])


    useEffect( () => {

      fetch('departments.json')
      .then(res => res.json())
      .then(data => setAll(data))
    }  , [])







    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

              <div>
                
               <div className=" bg-blue-100 p-2 rounded-xl flex-col md:flex-row lg:flex-row text-center">
                <h1 className="  text-blue-500 text-4xl font-bold"> <span className=" text-red-600">Health</span> Talk All Services</h1>
                <p className=" text-4xl font-bold text-slate-500 mt-5">"Service is what life is all about.</p>
               </div>
              </div>
   
              

              <div>


                <div className=" flex justify-center items-center mb-10 mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-10">
                {
                   all.map( all => <ServiceDetails all={all} ></ServiceDetails> )

                 }
                </div>
                </div>

              </div>


            </div>
            
        </div>
    );
};

export default ALLService;