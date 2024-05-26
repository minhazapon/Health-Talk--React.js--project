




const Date = () => {


  
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

              

              <div className=" flex justify-center  items-center gap-10">

              <div>
                   <form>
                   <h1 className="  text-4xl font-semibold text-blue-500 ">Select Your Appointment date:</h1>
                   <input className=" mt-5  w-[300px] p-5 border-[1px] border-[#1a504a] " type="date" name="AppointmentDate" id="" />
                   <br></br>
                   <input className=" mt-5 btn w-[300px] bg-[#1a504a] text-white " type="submit" value="Book" />
                   </form>

              </div>


              <div>
                <img className=" h-[400px]" src="https://img.freepik.com/premium-vector/patient-having-consultation-about-disease-symptoms-with-doctor-therapist-hospital_566886-12459.jpg?w=740" alt="" />
              </div>



              </div>
     
            
        </div>
    );
};

export default Date;