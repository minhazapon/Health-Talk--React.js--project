import { useRef } from "react";




const Contact = () => {
       
      const nameRef = useRef(null)
      const numRef = useRef(null)
      const emailRef = useRef(null)
      const docRef = useRef(null)
      const dateRef = useRef(null)
      const TimeRef = useRef(null)


     const handleBook = e => {

      e.preventDefault();
      console.log(nameRef.current.value)
      console.log(numRef.current.value)
      console.log(emailRef.current.value)
      console.log(docRef.current.value)
      console.log(dateRef.current.value)
      console.log(TimeRef.current.value)




     }






    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">


           <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-28 bg-[#1a504a] p-10 rounded-xl ">


            <div className=" animate__animated animate__flip animate__repeat-2 flex-col md:flex-row lg:flex-row text-white">
                <h1 className=" text-5xl font-bold">Contact With Us</h1>
                <p className=" mt-5 text-xl text-white">Find the contact information for <br></br>
                the doctor or medical practice.<br></br>
                 This can usually be found on their<br></br>
                  official website, through your<br></br>
                   health insurance provider,<br></br>
                    or via an online directory.</p>
                 <p className=" flex items-center mt-5 gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>
                   <p className=" text-xl">01950374409</p>  
                </p>
                 <p className=" flex items-center mt-5 gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                   <p className=" text-xl">New York, America</p>  
                </p>
            </div>



            <div className=" animate__animated animate__flip animate__repeat-2 flex-col md:flex-row lg:flex-row">
                <form onSubmit={handleBook} >

                  <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5">
                  <input ref={nameRef} className=" p-3 rounded-xl border-[1px] border-blue-900" placeholder="Name" name="name"  type="text" />
                  <input ref={emailRef} className=" p-3 rounded-xl border-[1px] border-blue-900" placeholder="Email" type="email" name="email" id="" />

                  </div>


                  <div className=" flex-col md:flex-row lg:flex-row mt-2 flex items-center gap-5">
                  <input ref={numRef} className=" p-3 rounded-xl border-[1px] border-blue-900" placeholder="Number" type="number" name="phone" id="" />
                   <input ref={docRef} className=" p-3 rounded-xl border-[1px] border-blue-900" type="text" placeholder="Doctor Name" />
                  </div>

                  
                  <div className=" flex-col md:flex-row lg:flex-row mt-2 flex items-center gap-5">
                  <input ref={dateRef} className=" p-3 w-[207px] rounded-xl border-[1px] border-blue-900" placeholder="Date" type="date" name="date" id="" />
                  <input ref={TimeRef} className=" p-3 w-[207px] rounded-xl border-[1px] border-blue-900" placeholder="Time" type="time" name="time" id="" />

                  </div>
                  

                 
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
               
                <input onClick={()=>document.getElementById('my_modal_4').showModal()} className=" animate__animated animate__heartBeat animate__repeat-2  flex-col md:flex-row lg:flex-row btn mt-2   w-[205px] bg-blue-500 text-white " type="submit" value="Book Now" />
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box flex items-center justify-center gap-5 ">
                    <h3 className="font-bold text-blue-500 text-5xl">Book Done</h3>
                    <img className=" h-[100px]" src="https://i.ibb.co/4t6Z8ms/checkmark.png" alt="" />
                 
                   
                  </div>
                </dialog>

                </form>
            </div>















           </div>
            
        </div>
    );
};

export default Contact;