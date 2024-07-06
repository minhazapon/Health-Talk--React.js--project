
import { Link } from 'react-router-dom';
import pic2 from '../assets/image/mental-health.png'
import { useContext } from 'react';
import { fireContext } from '../firebase/AuthContext';


const Login = () => {

	const {signIn, google} = useContext(fireContext)

    const handleIn = e =>{

		e.preventDefault();
		const email = e.target.email.value
		const password = e.target.password.value
		console.log(email, password)

		signIn(email, password)
		.then( result =>{
			console.log(result.user)
		})
		.catch( error =>{
			console.error(error)
		} )
	   }


	const handleGoole = e =>{
		e.preventDefault()

		google()
		.then(result =>{
			console.log(result)
		})
		.catch( error =>{
			console.error(error)
		})
	}   



    

	  


    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

           <div className='  flex-col md:flex-row lg:flex-row flex justify-center items-center gap-28'>
           <div className=' flex-col md:flex-row lg:flex-row '>
            <img className=' animate__animated animate__rotateIn animate__repeat-2 h-[400px] ' src={pic2} alt="" />
           </div>
           <div>
                            <div className="w-full flex-col md:flex-row lg:flex-row max-w-md p-4 rounded-md shadow sm:p-8 bg-[#1a504a]  text-gray-100">
                 	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                 	<p className="text-sm text-center text-gray-400">Dont have account?
					    <Link to="/sign" >
                 		<a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
						 </Link>
                 	</p>
                 	<div className="my-6 space-y-4">
                 		<button onClick={handleGoole} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                 			</svg>
                 			<p>Login with Google</p>
                 		</button>
                 	</div>
                 	<div className="flex items-center w-full my-4">
                 		<hr  className="w-full text-gray-400" />
                 		<p className="px-3 text-gray-400">OR</p>
                 		<hr  className="w-full text-gray-400" />
                 	</div>



                 	<form onSubmit={handleIn}  className="space-y-8">
                 		<div className="space-y-4">
                 			<div className="space-y-2">
                 				<label htmlFor="email" className="block text-sm">Email address</label>
                 				<input type="email" name="email" id="email" placeholder="Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                 			</div>
                 			<div className="space-y-2">
                 				<div className="flex justify-between">
                 					<label htmlFor="password" className="text-sm">Password</label>
                 					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                 				</div>
                 				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                 			</div>
                 		</div>
                 		<input className="w-full px-8 py-3 font-semibold rounded-md bg-white btn text-black" type="submit" value="Sign In" />
                 	</form>




                 </div>

           </div>
           </div>
            
            
        </div>
    );
};

export default Login;