


const BookForm = () => {
    return (
        <div className=" mb-10 mt-10  ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row  flex justify-center items-center gap-60">

             <div>
                <h1 className=" text-6xl">Request An<br></br> Appointment</h1>              
 
             </div>

             <div className="  bg-blue-500  p-5 rounded-xl flex items-center gap-5 ">

                <img className=" h-[100px]" src="https://i.ibb.co/mSpVgQy/medical-2.png" alt="" />

                <div>
                    <h1 className=" text-4xl text-white font-bold">Medical Solution</h1>
                </div>


             </div>

            </div>
{/* ------------------------------------------------------------------------------ */}
            

            <div>
           
             
             <div className="  flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-10  mt-10">
               <input placeholder="First Name" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="text" />
               <input placeholder="Last Name" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="text" />
             </div>


             <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-10  mt-10">
             <input placeholder="Phone Number" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="email" name="email" id="" />
              <input placeholder="Your Email" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] "  type="number" name="number" id="" />
             </div>

            

            {/* <div className=" flex  justify-center  mt-10">
                
            <div className="">
              <h1 className=" text-xl font-bold">First Time Visit?</h1> 
              <div className=" mt-5 flex items-center gap-5">
              <input type="checkbox" name="yes" id="" />   
              <h1>Yes</h1>
              </div>
              <div className=" mt-5 flex items-center gap-5">
              <input type="checkbox" name="yes" id="" />   
              <h1>no</h1>
              </div>
            </div>  

            </div> */}
            






            </div>






            
        </div>
    );
};

export default BookForm;