


const OurDoctor = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row bg-blue-100 p-3 rounded-xl mb-10 ml-10 mr-10 text-center">
                <h1 className=" text-5xl font-bold text-blue-500">Our Best Doctor </h1>
                <p className=" text-xl text-slate-500 mt-5">"Wherever the art of Medicine is loved, there is also a love of Humanity."</p>
            </div>


           <div className=" flex justify-center items-center">
           <div  className=" grid  md:grid-cols-3 gap-5">



<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/cheerful-doctor-making-notes-looking-away_23-2147896151.jpg?t=st=1716817442~exp=1716821042~hmac=834bf220ab4882930ff10cafee3b18f8582efe164e0f8cf96316317a49a6cc42&w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. John Smith</h1>
        <p className=" text-slate-400 ">BTP -  Senior General Surgeon</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}


<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/pleased-young-male-doctor-with-medical-glasses-wearing-medical-robe-with-stethoscope-standing-front-desk_141793-98689.jpg?t=st=1716817557~exp=1716821157~hmac=28a6ab986e4d7abddc453913b64005756ed844b4b172d9836e2c7d764ef7f682&w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. Emily Johnson</h1>
        <p className=" text-slate-400 ">BTP -  Senior Orthopedic Surgeon</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}



<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg?t=st=1716817619~exp=1716821219~hmac=bdea0620a04b7a081a7d418073b9d51ce8ab24bfc723076c597a2f9b5b4eb568&w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. Michael Brown</h1>
        <p className=" text-slate-400 ">BTP -  Senior Cardiothoracic Surgeon</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}



<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17819.jpg?t=st=1716817676~exp=1716821276~hmac=76a251fb8a4305ba81e71a45933566d0519dcaf1c649dff246cb963d3170152c&w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. Laura</h1>
        <p className=" text-slate-400 ">BTP -  Senior Neurosurgeon</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}



<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/portrait-man-standing-against-white-background_1048944-8953746.jpg?w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. Sarah White</h1>
        <p className=" text-slate-400 ">BTP -  Senior Cardiologist</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}



<div className=" border-[1px]  border-b-slate-500   rounded-xl p-5 ">
         <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/handsome-young-doctor-isolated-white_488220-49442.jpg?w=740" alt="" />
        <h1 className=" text-xl font-bold mt-3">Dr. David Green</h1>
        <p className=" text-slate-400 ">BTP -  Senior Endocrinologist</p>
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
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
         </svg>
            <h1 className="  text-slate-500">Available On Mon, 22 December</h1>
         </div>
         <div className=" flex items-center gap-2 mt-3">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
            <h1 className="  text-slate-500">$20</h1>
         </div>

         <button className=" btn bg-blue-500 text-white mt-5">View profile</button>
       </div>

{/* ------------------------------------------------------------------------- */}






</div>

           </div>
       
            
        </div>
    );
};

export default OurDoctor;