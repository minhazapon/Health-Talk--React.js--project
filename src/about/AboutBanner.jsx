



const AboutBanner = () => {
    return (
        <div className=" mb-10  mt-10 ml-10 mr-10">

           
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-24 bg-[#1a504a] rounded-xl p-10 ">
            <div className=" text-white">
               <h1 className=" text-xl">Home/Doctor Profile</h1>
               <p className=" text-5xl font-bold">Doctor Profile</p>
            </div>

            <div>
              <img className=" h-[300px]" src="https://i.ibb.co/59mWVVh/medical-report.png" alt="" />

            </div>
            </div>
            
        </div>
    );
};

export default AboutBanner;