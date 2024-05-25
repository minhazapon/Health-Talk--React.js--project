



const Location = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div className=" flex-col md:flex-row lg:flex-row  ">
              

              <div className=" flex-col md:flex-row lg:flex-row">
                <h1 className=" text-xl font-bold">Location Address</h1>

                <p className=" text-xl mt-5">City: New York, America</p>
                <p className=" text-xl mt-5" >street: 3004 Road New York.</p>
                <p className=" text-xl mt-5" >country: America</p>


              </div>

              <img  className=" flex-col md:flex-row lg:flex-row h-[300px]" src="https://i.ibb.co/s98r76c/location.png" alt="" />

              <div className=" flex-col md:flex-row lg:flex-row mt-20 ">
                <img className=" rounded-xl h-[400px]  " src="https://www.google.com/maps/vt/data=6SQ95JzYVFqCEROIXlRXUW6Mfvro2q3xXjJ9x-ixMNONyOs5P1VNS681RrO88Sit_3eZ9bvqq-czJKithGz1_t_h6Po_9WTxScOBu5YQQPfZ05lxAelPcatePkdlhaz79e7bgonDrvmld7cQmtX-erT6-C4PWPs0_d8y465Iggq-v8KJMqG3jsCKb-q5pwtaNJKG01YQrH712qXUs6xrfBvzlpxWmAWdGCzAgue3uE2v81E4gLhPPypk3bc959TGbOMpRcw6wwELwMawBBKiT5gDS425dtE" alt="" />
              </div>










            </div>
            
        </div>
    );
};

export default Location;