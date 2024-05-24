


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Review = () => {
    return (
        <div className=' mb-10  mt-28 ml-10 mr-10'>


            <div className=' flex-col md:flex-row lg:flex-row text-center'>

              <h1 className=' text-2xl font-bold'>What Our Patients Says</h1>
              <p className=' mt-5 text-xl text-slate-400'>Patients' interactions with doctors, often referred to as "patient experiences"<br></br> or "patient satisfaction," are critical aspects of healthcare delivery.</p>

            </div>




            <div className=' mt-20'>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


               <SwiperSlide>
                  
                  <div>

                  <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#1a504a] text-gray-100">
	              <div className="flex justify-between p-4">
	              <div className="flex space-x-4">
			      <div>
				  <img src="https://img.freepik.com/free-photo/side-view-doctor-writing-prescription_23-2148231339.jpg?t=st=1716546147~exp=1716549747~hmac=6fb780cc3fa751a24649905ddfb55fc010e97d79e8a61986062a7460e1aee310&w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
	              </div>
	              <div>
	              <h4 className="font-bold">larry Rose</h4>
	              <span className="text-xs text-gray-400">2 days ago</span>
	              </div>
	              	</div>
	              	<div className="flex items-center space-x-2 text-yellow-500">
	              		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
	              			<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
	              		</svg>
	              		<span className="text-xl font-bold">4.5</span>
	              	</div>
	              </div>
	              <div className="p-4 space-y-2 text-sm text-gray-400">
                   <ul>
                       <li>Quality of Care</li>
                       <li>Medical Staff Expertise: Describe the competence and professionalism of doctors, nurses, and other healthcare providers.</li>
                       <li>Attention to Patient Needs: Note how well the staff listens and responds to patient concerns and symptoms.</li>
                       <li>Success of Treatments: Share your outcomes and how well the treatments worked.</li>
		           </ul>
                  </div>
                  </div>
                  </div>


               </SwiperSlide>


               <SwiperSlide>
			   <div>

<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#1a504a] text-gray-100">
<div className="flex justify-between p-4">
<div className="flex space-x-4">
<div>
<img
 src="https://img.freepik.com/free-photo/medical-expert-talking-with-medical-staff-healthcare-meeting-hospital-conference-room-explaining-radiographys-clinic-therapist-talking-with-colleagues-about-disease-medicine-professional_482257-3965.jpg?t=st=1716546464~exp=1716550064~hmac=8f692fcd6d376a581a14234b17079a1aff4ed533360b5aaa41251d69ab096130&w=826" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
</div>
<div>
<h4 className="font-bold">misses patty</h4>
<span className="text-xs text-gray-400">2 days ago</span>
</div>
	</div>
	<div className="flex items-center space-x-2 text-yellow-500">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
			<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
		</svg>
		<span className="text-xl font-bold">4.5</span>
	</div>
</div>
<div className="p-4 space-y-2 text-sm text-gray-400">
 <ul>
	 <li>Quality of Care</li>
	 <li>Medical Staff Expertise: Describe the competence and professionalism of doctors, nurses, and other healthcare providers.</li>
	 <li>Attention to Patient Needs: Note how well the staff listens and responds to patient concerns and symptoms.</li>
	 <li>Success of Treatments: Share your outcomes and how well the treatments worked.</li>
 </ul>
</div>
</div>
</div>


			   </SwiperSlide>
               <SwiperSlide>


			   <div>

<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-[#1a504a] text-gray-100">
<div className="flex justify-between p-4">
<div className="flex space-x-4">
<div>
<img
 src="https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321630.jpg?t=st=1716546641~exp=1716550241~hmac=2f2752b9b9fe0ed690208d0d5e38bb12b264c2430a4c91a6acce6aa2751fcd6c&w=740" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
</div>
<div>
<h4 className="font-bold">Thomas lire</h4>
<span className="text-xs text-gray-400">2 days ago</span>
</div>
	</div>
	<div className="flex items-center space-x-2 text-yellow-500">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
			<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
		</svg>
		<span className="text-xl font-bold">4.5</span>
	</div>
</div>
<div className="p-4 space-y-2 text-sm text-gray-400">
 <ul>
	 <li>Quality of Care</li>
	 <li>Medical Staff Expertise: Describe the competence and professionalism of doctors, nurses, and other healthcare providers.</li>
	 <li>Attention to Patient Needs: Note how well the staff listens and responds to patient concerns and symptoms.</li>
	 <li>Success of Treatments: Share your outcomes and how well the treatments worked.</li>
 </ul>
</div>
</div>
</div>






			   </SwiperSlide>
         
      
             </Swiper>










            </div>
            
        </div>
    );
};

export default Review;