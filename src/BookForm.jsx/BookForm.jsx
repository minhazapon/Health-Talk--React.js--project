import { useRef } from "react";



const BookForm = () => {
     
     const name1Ref = useRef(null)
     const name2Ref = useRef(null)
     const emailRef = useRef(null)
     const numRef = useRef(null)
     const dateRef = useRef(null)
     const categoryRef = useRef(null)
     const timeRef = useRef(null)
     const doctorRef = useRef(null)
     const cmntRef = useRef(null)
     

    const handleAppo = e => {

    e.preventDefault();
    console.log(name1Ref.current.value)
    console.log(name2Ref.current.value)
    console.log(emailRef.current.value)
    console.log(numRef.current.value)
    console.log(dateRef.current.value)
    console.log(categoryRef.current.value)
    console.log(timeRef.current.value)
    console.log(doctorRef.current.value)
    console.log(cmntRef.current.value)

    


    }




    return (
        <div className="    mb-10 mt-10  ml-10 mr-10">

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
            
            <form onSubmit={handleAppo} >
            
            <div className=" flex justify-center  items-center mt-16">

            <div className=" grid  md:grid-cols-2 gap-5">
           
            
           <input ref={name1Ref} placeholder="First Name" name="name1" className=" flex-col md:flex-row lg:flex-row rounded-lg border-[1px] border-black  p-3  w-[400px] " type="text" />
           <input ref={name2Ref} placeholder="Last Name" name="name2" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="text" />
      
         <input ref={emailRef} placeholder="Your Email" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="email" name="email" id="" />
          <input ref={numRef} placeholder="Your Number" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] "  type="number" name="number" id="" />
       
         <div className="">
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
          </div> 
      
         <input ref={dateRef} placeholder="Select Your Appointment date" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="date" name="date" id="" />            
        <input ref={categoryRef} placeholder="Select Your Category" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="text" name="category" />
        <input ref={timeRef} placeholder="Select Your Time" className=" rounded-lg border-[1px] border-black  p-3  w-[400px] " type="time" name="time" id="" />

           

        </div>

            </div>

            <div>
            <div className=" flex justify-center mt-5 ">
           
              <textarea ref={cmntRef} name="comment" placeholder="Comments" className=" rounded-lg border-[1px] border-black  p-3  w-[820px] h-[300px] "></textarea>
            </div>
            </div>


             

          

         

          <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 mt-5">

           <input ref={doctorRef} placeholder="Doctor Name" name="doctor"  className=" rounded-lg border-[1px] border-black  p-3  w-[400px] "  type="text" />



          <div className=" ">
          <input onClick={()=>document.getElementById('my_modal_4').showModal()} className=" btn w-[400px]   bg-blue-500 text-white " type="submit" value=" Get Appointment" />
          <dialog id="my_modal_4" className="modal">
                  <div className="modal-box flex items-center justify-center gap-5 ">
                    <h3 className="font-bold text-blue-500 text-4xl">Appointment Done</h3>
                    <img className=" h-[100px]" src="https://i.ibb.co/t3sgw0n/like.png" alt="" />
                 
                   
                  </div>
                </dialog>
          </div> 




          </div>
            
          

          </form>


          <div className=" flex-col md:flex-row lg:flex-row rounded-xl mt-20 text-center bg-blue-100 p-10 ">
            <h1 className=" text-5xl text-blue-950 font-bold">Get Appointment And Join With US </h1>
          </div>
            
        </div>
    );
};

export default BookForm;