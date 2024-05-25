


const DoctorAbout = () => {
    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">

            <div>

            <div className=" border-[1px] border-b-slate-500 p-5 rounded-xl bg-slate-100 ">
              <div className="hero-content flex-col lg:flex-row">
                <img className=" h-[220px] rounded-xl" src="https://img.freepik.com/premium-photo/dentist-doing-check-up-patient_23-2149206262.jpg?w=740" />
                <div>
                  <h1 className="text-5xl font-bold">Dr. Oren john</h1>
                  <p className=" mt-2 text-xl text-slate-500">Teeth Expert Dental</p>
                  <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>

                 <div className=" mt-5 flex items-center gap-2">

                    <button className=" btn bg-blue-500  text-white ">Dental Filling</button>
                    <button className=" btn bg-blue-500  text-white ">Teeth Whitneing</button>
                 </div>
                  


                </div>
              </div>
            </div>




            </div>
            
        </div>
    );
};

export default DoctorAbout;