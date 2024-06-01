

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Marquee from "react-fast-marquee";





const Slide = () => {


    return (
        <div className=" mb-10 mt-10 ">
            
             <Marquee>
              <div className=' mb-10 text-center '>
                <h1 className=' text-4xl font-bold text-blue-500 '>Our Gallery</h1>
                <p className=' text-5xl font-bold text-slate-500'>Every Moment Is Life</p>
              </div>
             </Marquee>
            

            <hr className=' mb-10 mt-10'></hr>

            <div className=' bg-blue-100 p-5 rounded-xl '>

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=' h-[400px] w-[600px]' src="https://img.freepik.com/premium-photo/medical-cute-handsome-doctor-working-computer-remotely-lab-coat-smiling_140725-166865.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]'  src="https://img.freepik.com/premium-photo/serious-male-doctor-using-computer-writing-notes-medical-journal-sitting-workplace-clinic_116547-52682.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/premium-photo/handsome-indian-man-doctor-using-computer-writing-notes_116547-69432.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/free-photo/portrait-doctor-looking-camera-using-computer-office-physician-with-face-mask-wearing-white-coat-consultation-appointment-working-with-laptop-health-care-career_482257-36672.jpg?t=st=1717002312~exp=1717005912~hmac=729cd2b54dd195ad413b79495edeeaffe2bd038cb689f085a8b55766b7002d58&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/free-photo/medical-working-computer-remotely-serious-cute-smart-doctor-lab-coat_140725-167010.jpg?t=st=1717002331~exp=1717005931~hmac=0dd5328753c16ad5ffe63fdfcaa6c1fd3ef6ce388bd90826f30efdc2942ac724&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/premium-photo/male-doctor-working-laptop_23-2147941723.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/premium-photo/portrait-elegant-senior-doctor-medical-gown-working-with-documents-laptop-office_506452-3555.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/free-photo/medium-shot-doctor-working_23-2148816196.jpg?t=st=1717002384~exp=1717005984~hmac=a1f83afca0e70549535501b2c81d821599b0e7b902d9a2d5bd97cb381b33a85a&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className=' h-[400px] w-[600px]' src="https://img.freepik.com/premium-photo/diverse-group-three-young-doctors-looking-computer-screen_236854-55801.jpg?w=740" />
        </SwiperSlide>
      </Swiper>









            </div>
            
        </div>
    );
};

export default Slide;