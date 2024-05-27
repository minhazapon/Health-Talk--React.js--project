import { Link, NavLink } from "react-router-dom";





const Nav = () => {

    const links = <>
    
         <li><NavLink to="/" >Home</NavLink></li>
         <li><NavLink to="/about" >About</NavLink></li>
         <li><NavLink to="/appo" >Appointment</NavLink></li>
         <li><NavLink to="/ser" >Service</NavLink></li>
         <li><NavLink to="/doc" >Doctor</NavLink></li>
         <li><NavLink to="/dep" >Departments</NavLink></li>
         <li><NavLink to="/blog" >Blog</NavLink></li>
        
    
    
    
    </>



    return (
        <div>

<div className="navbar  shadow-lg bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {links}


      </ul>
    </div>

    <div className=" flex items-center gap-1">
    <img className=" h-[40px]" src="https://i.ibb.co/nPHNzLj/diabetes.png" alt="" />
    <a className=" text-2xl font-bold    text-blue-500"><span className=" text-red-500">Health</span> Talk</a>
    </div>
    {/* text-[#1a504a] */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
      {links}

    </ul>
  </div>
  <div className="navbar-end">
    <Link  to="/login" >
    <a className="btn  bg-blue-500 text-white ">Login</a>
    </Link>
  </div>
</div>
            
        </div>
    );
};

export default Nav;