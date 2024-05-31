

import Marquee from "react-fast-marquee";


const Please = () => {
    return (
        <div className=" mb-10 mt-10 mr-10 ml-10">


            <div>
                 

                 <div className=" text-center">
                    <p className=" mt-5 text-5xl font-bold">Please select a service.</p>
                 </div>

                 {/* category field ------------------------------------------------------------------ */}


                 <Marquee>

                 <div className=" flex justify-center mt-10">
                 <div className=" grid  md:grid-cols-3 gap-5">
                 
                 <div className=" flex items-center gap-5 bg-blue-100  p-2 rounded-xl ">
                    <img className=" h-[80px]" src="https://i.ibb.co/MDJ3xQq/cardiology.png" alt="" />
                    <p className=" text-2xl font-bold ">Cardiology</p>
                 </div>
                 
                 
                 
                 <div className=" flex items-center gap-5 bg-blue-100  p-2 rounded-xl ">
                    <img className=" h-[80px]" src="https://i.ibb.co/XCCFgYp/neurology.png" alt="" />
                    <p className=" text-2xl font-bold ">neurology</p>
                 </div>
                 
                 
                 <div className=" flex items-center gap-5 bg-blue-100  p-2 rounded-xl ">
                    <img className=" h-[80px]" src="https://i.ibb.co/1vT2q0g/arthritis.png" alt="" />
                    <p className=" text-2xl font-bold ">orthopedics</p>
                 </div>
                 
                 
                 <div className=" flex items-center gap-5  bg-blue-100  p-2 rounded-xl ">
                    <img className=" h-[80px]" src="https://i.ibb.co/XjyXSJb/pediatrics.png" alt="" />
                    <p className=" text-2xl font-bold ">pediatrics</p>
                 </div>
                 
                 
                 <div className=" flex items-center gap-5  bg-blue-100  p-2 rounded-xl ">
                    <img className=" h-[80px]" src="https://i.ibb.co/JskJCKH/bowel-cancer.png" alt="" />
                    <p className=" text-2xl font-bold ">oncology</p>
                 </div>
                 
                 
                 <div className=" flex items-center gap-5 bg-blue-100  p-2 rounded-xl  ">
                    <img className=" h-[80px]" src="https://i.ibb.co/HzmvsDY/dermatology.png" alt="" />
                    <p className=" text-2xl font-bold ">dermatology</p>
                 </div>
                 
                 </div>
                 
                 </div>



                 </Marquee>
                 











            </div>
            
        </div>
    );
};

export default Please;