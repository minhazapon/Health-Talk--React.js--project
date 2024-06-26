import { Link } from "react-router-dom";


const Book = () => {
    return (
        <div className=" mb-10 mt-10 mr-10 ml-10">

            <div>
                  
                <h1 className=" text-center text-5xl font-bold mt-20 ">Available Time For Treatment</h1>
{/* 
-----------------------------------------Book Appointment                */}


              <div>


              <div className=" flex justify-center  mt-20">
                 <div className=" grid  md:grid-cols-3 gap-5">
                 
                 <div className=" animate__animated animate__flip animate__repeat-2  animate__flip bg-blue-100  p-2 rounded-xl ">
                    <div className="flex items-center gap-5 ">
                    <img className=" h-[80px]" src="https://i.ibb.co/MDJ3xQq/cardiology.png" alt="" />
                    <p className=" text-2xl font-bold ">Cardiology</p>
                    </div>
                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link>
                 </div>
                 
                 
                 
                 <div className=" animate__animated animate__flip animate__repeat-2  bg-blue-100  p-2 rounded-xl ">
                    
                    <div className="  flex items-center gap-5">
                    <img className="  h-[80px]" src="https://i.ibb.co/XCCFgYp/neurology.png" alt="" />
                    <p className=" text-2xl font-bold ">neurology</p>
                    </div>
                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link>
                      </div>
                 
                 
                 <div className=" animate__animated animate__flip animate__repeat-2  bg-blue-100  p-2 rounded-xl ">
                     <div className=" flex items-center gap-5">
                     <img className=" h-[80px]" src="https://i.ibb.co/1vT2q0g/arthritis.png" alt="" />
                    <p className=" text-2xl font-bold ">orthopedics</p>
                     </div>
                   
                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link> 
                    </div>
                 
                 
                 <div className=" animate__animated animate__flip animate__repeat-2  bg-blue-100  p-2 rounded-xl ">
                    <div className="flex items-center gap-5 ">
                    <img className=" h-[80px]" src="https://i.ibb.co/XjyXSJb/pediatrics.png" alt="" />
                    <p className=" text-2xl font-bold ">pediatrics</p>
                    </div>
                    

                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link>                 </div>
                 
                 
                 <div className="  animate__animated animate__flip animate__repeat-2  bg-blue-100  p-2 rounded-xl ">
                     
                     <div className=" flex items-center gap-5">
                     <img className=" h-[80px]" src="https://i.ibb.co/JskJCKH/bowel-cancer.png" alt="" />
                    <p className=" text-2xl font-bold ">oncology</p>
                     </div>
                    

                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link>                 </div>
                 
                 
                 <div className="  animate__animated animate__flip animate__repeat-2 bg-blue-100  p-2 rounded-xl  ">
                     
                     <div className=" flex items-center gap-5">
                     <img className=" h-[80px]" src="https://i.ibb.co/HzmvsDY/dermatology.png" alt="" />
                    <p className=" text-2xl font-bold ">dermatology</p>
                     </div>
                    

                    <h1 className=" mt-2 font-semibold  ">Time: 2.00pm-8.00am </h1>
                    <Link to="/form" >
                    <button className=" text-white mt-2 btn bg-blue-400  ">Book Appointment </button>

                    </Link>                 </div>
                 
                 </div>
                 
                 </div>

















              </div>










            </div>
            
        </div>
    );
};

export default Book;