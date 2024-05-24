


const Service = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center  gap-10">

                  
                    <div>

                       <img className=" flex-col md:flex-row lg:flex-row h-[820px] w-[500px] rounded-xl" src="https://img.freepik.com/premium-photo/doctor-st-svukt-rsyzsefd_727289-22.jpg?w=360" alt="" />

                    </div>

                     

                     <div>



                        <div>
                          
                          <h1 className="  text-4xl font-bold">Our Service</h1>
                          <p className=" text-xl text-slate-500">Doctor services encompass a wide<br></br>
                             range of medical care provided<br></br>
                              by physicians and healthcare<br></br>
                               professionals to diagnose,<br></br>
                                treat, and prevent<br></br> illnesses and injuries.</p>
                        </div>


                        <div className=" flex-col md:flex-row lg:flex-row mt-3 flex  gap-2    rounded-xl">
                         <button className=" text-white bg-blue-500 rounded-xl btn">Protection</button>
                         <button className=" text-white bg-blue-500 rounded-xl btn">Dentisty</button>
                         <button className=" text-white bg-blue-500 rounded-xl btn">Surgery</button>
                        </div>


                        <div>
                          <img className=" mt-5 h-[200px] w-[450px] rounded-xl " src="https://img.freepik.com/premium-photo/male-dentist-with-plastic-jaw-model-light-background_265022-22058.jpg?w=996" alt="" />
                        </div>


                        <div className=" mt-5">

                           <h1 className=" text-2xl font-bold">Dental Teeth Therapy</h1>
                           <p className=" text-xl text-slate-500 mt-3">These services can be <br></br>
                           delivered in various <br></br>
                            settings, including hospitals, <br></br>
                             clinics, private practices, <br></br>
                              and via telemedicine. Here's an <br></br>
                               overview of the key <br></br>
                                aspects of doctor services:</p>

                            <button className=" mt-5 btn  border-[1px] border-blue-500 text-blue-500">More Details</button>



                        </div>


                     </div>



            </div>
            
        </div>
    );
};

export default Service;