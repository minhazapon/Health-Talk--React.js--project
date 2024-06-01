import { Link } from "react-router-dom";

import 'animate.css';



const Banner = () => {
    return (
        <div className=" animate__animated animate__flipInY animate__repeat-2   mb-10  mt-16 ml-10 mr-10">

             <div className=" flex-col md:flex-row lg:flex-row  bg-[#1a504a] text-white  p-14 rounded-xl flex justify-center items-center gap-20">
               

               <div className=" flex-col md:flex-row lg:flex-row">
                
                 <h1 className="  text-6xl font-semibold">Your Best Medical<br></br> Help Center</h1>
                 <p className=" mt-10 text-xl">The art of medicine consists in amusing<br></br> the patient while nature cures the disease.</p>

                  <Link to="/all" >
                 <button className=" mt-10 btn bg-blue-500 text-white">All Service</button>
                 </Link>

               </div>

                
               <div className=" animate__animated animate__flip animate__repeat-2 flex-col md:flex-row lg:flex-row">

                 <div className=" flex-col md:flex-row lg:flex-row  flex items-center gap-5">
                    <img className=" border-[5px] border-blue-500  h-[200px] w-[300px] rounded-xl"
                     src="https://img.freepik.com/free-photo/portrait-young-male-doctor-wearing-eyeglasses_23-2147941751.jpg?t=st=1716482745~exp=1716486345~hmac=ca378b4b3b6a59a24b7edd49b59b833171eeb3cf6d57a29babd0fb532d61b9ef&w=740" 
                     alt="" />
                    <img className=" border-[5px] border-blue-500  h-[200px] w-[300px] rounded-xl"
                     src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-crossed-arms_23-2149355015.jpg?t=st=1716482954~exp=1716486554~hmac=ca598251ee8b64184211dc4ab1f86fb2fe9ad2b88dcf87db88aacd37a0f42371&w=740" 
                     alt="" />
                 </div>

                  <div className=" flex-col md:flex-row lg:flex-row  flex justify-center  -mt-14">
                    <img className=" border-[5px] border-blue-500  h-[200px] w-[300px] rounded-xl"
                     src="https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?t=st=1716483040~exp=1716486640~hmac=54bcb7cf650ac284008ae35afd283c031808b2d77f5868dbdd04b08fc11a3502&w=740" 
                     alt="" />

                  </div>




               </div>








             </div>


        </div>
    );
};

export default Banner;