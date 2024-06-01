import { useRef } from "react";





const Date = () => {

      const bookRef = useRef(null)
        

     const handleB = e => {
       
      e.preventDefault();
      console.log(bookRef.current.value);


     }
    
  
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

              

              <div className=" flex-col md:flex-row lg:flex-row flex justify-center  items-center gap-10">

              <div className="  animate__animated animate__fadeInLeftBig animate__repeat-2  flex-col md:flex-row lg:flex-row">
                   <form onSubmit={handleB} >
                   <h1 className="  text-4xl font-semibold text-blue-500 ">Select Your Appointment date:</h1>
                   <input  ref={bookRef} className=" mt-5  w-[300px] p-5 border-[1px] border-[#1a504a] " type="date" name="AppointmentDate" id="" />
                   <br></br>
                   {/* You can open the modal using document.getElementById('ID').showModal() method */}
                   <input onClick={()=>document.getElementById('my_modal_4').showModal()} className=" mt-5 btn w-[300px] bg-[#1a504a] text-white " type="submit" value="Book" />

                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box flex items-center justify-center gap-5 ">
                    <h3 className="font-bold text-blue-500 text-5xl">Book Done</h3>
                    <img className=" h-[100px]" src="https://i.ibb.co/4t6Z8ms/checkmark.png" alt="" />
                 
                   
                  </div>
                </dialog>
                   </form>

              </div>


              <div className=" animate__animated animate__fadeInRightBig animate__repeat-2 flex-col md:flex-row lg:flex-row">
                <img className=" flex-col md:flex-row lg:flex-row h-[400px]" src="https://img.freepik.com/premium-vector/patient-having-consultation-about-disease-symptoms-with-doctor-therapist-hospital_566886-12459.jpg?w=740" alt="" />
              </div>



              </div>
     
            
        </div>
    );
};

export default Date;