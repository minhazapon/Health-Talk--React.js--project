

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const MedicalMechine = () => {


    return (
        <div className=" animate__animated animate__flip animate__repeat-2 border-[1px]  border-black p-5  rounded-xl  bg-slate-100 mb-10 mt-10 ml-10 mr-10">

            <div className=" mb-10 mt-10 text-center">

              <h1 className=" text-5xl font-bold">Our Machine</h1>


            </div>





            <div>

                


            <Carousel>
                <div>
                    <img className="" src="https://img.freepik.com/premium-photo/medical-illustration-vector-isolated-background_854605-29084.jpg?w=826" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/life-support-equipment-incubators_145644-12510.jpg?w=826" />
                
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/x-ray-machine_11208-1856.jpg?w=740" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/modern-hospital-medical-equipment-anesthesia-machines_145644-12726.jpg?w=826" />
                
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/picture-medical-room-with-ventilator-table-this-image-can-be-used-depict-hospital-setting-healthcare-facilities_153912-276285.jpg?w=740" />
                
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/medical-devices-industrial-lamps-surgery-room-modern-hospital-interior-hospital-design-concept_116317-23056.jpg?w=740" />
                  
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/modern-healthcare-equipment-illuminates-empty-hospital-ward-generated-by-ai_188544-20212.jpg?t=st=1717163564~exp=1717167164~hmac=51e2376372f267e97ed7cbfc8a41061516c1e29c03c6dfff31325924f9f3e668&w=826" />
              
                </div>
               
            </Carousel>


           








            </div>
            
        </div>
    );
};

export default MedicalMechine;