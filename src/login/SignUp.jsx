

const SignUp = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

            <div className='   flex-col md:flex-row lg:flex-row flex justify-center items-center gap-28'>
           <div className=' flex-col md:flex-row lg:flex-row '>
            <img className=' h-[400px] ' src="https://i.ibb.co/37TwGZ8/herbal.png" alt="" />
           </div>
           <div>



           <div className="flex flex-col  w-[380px] p-6 rounded-md sm:p-10 bg-[#1a504a] text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm text-gray-400">Sign Up to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Full Name</label>
				<input placeholder="Full Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" name="name" type="text" />
			</div>


			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
			</div>







			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-white btn text-black">Sign Up</button>
			</div>
			
		</div>
	</form>
</div>

           </div>
           </div>
            












            </div>
            
        </div>
    );
};

export default SignUp;