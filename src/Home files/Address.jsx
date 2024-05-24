




const Address = () => {
    return (
        <div className=" mb-10  mt-20 ml-10 mr-10">

            <div className=" flex justify-center items-center  gap-10 bg-slate-200 p-4 rounded-xl flex-col md:flex-row lg:flex-row ">
                

                <div className=" flex justify-center items-center gap-5 bg-[#1a504a]  h-[170px] w-[300px]  rounded-xl text-white  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                 <div>
                     <h1 className=" text-xl font-bold">Opening Hours</h1>
                     <p className=" text-xl mt-3">Open 9.00 am to<br></br> 5.00pm Everyday</p>
                 </div>
                </div>


                <div className=" flex justify-center items-center gap-5 bg-blue-500 h-[170px] w-[300px] rounded-xl text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                 <div>
                     <h1 className=" text-xl font-bold">Our Locations</h1>
                     <p className=" text-xl mt-3">Dhanmondi 17,<br></br> Dhaka -1200, Bangladesh</p>
                 </div>
                </div>



                <div className=" flex justify-center items-center gap-5 bg-[#1a504a]  h-[170px] w-[300px] rounded-xl text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>

                 <div>
                     <h1 className=" text-xl font-bold">Contact Us</h1>
                     <p className=" text-xl mt-3">+88 01750 00 00 00 <br></br>
                          +88 01750 00 00 00</p>
                 </div>
                </div>








            </div>
            
        </div>
    );
};

export default Address;