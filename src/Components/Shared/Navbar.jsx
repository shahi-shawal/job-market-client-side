import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/Images/logo.png"
const Navbar = () => {

    const navlinks = <>
       
       <NavLink  to="/"><li><a>Home</a></li></NavLink>
       <NavLink to="/blog"><li><a>Blogs</a></li></NavLink>
       <NavLink to="/alljobs"><li><a>All Jobs</a></li></NavLink>
       <NavLink to="/myjobs"><li><a>My Jobs</a></li></NavLink>
       <NavLink to="/appliedjobs"><li><a>Applied Jobs</a></li></NavLink>
       <NavLink to="/addjob"><li><a>Add a job</a></li></NavLink>
    </>
    return (
        <div>
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar">
      <div className="max-w-7xl mx-auto ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-bold text-xl">
        Jobs Market</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal" >
          {/* Navbar menu content here */}
          {navlinks}
        </ul>
      </div>
      </div>
      <div className="navbar-end px-6">
        <button className="btn bg-[#1CA774] text-white font-bold hover:bg-[#1CA774]">Login</button>
      </div>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
     {navlinks}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;