import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/Images/LOGO2.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Navbar = () => {
      const {user, logout}= useContext(AuthContext)


      const handellogOut=()=>{
        logout()
        toast.success("Log Out successfully")
      }
      
    const navlinks = <>
       
       <NavLink  to="/"><li><a className="hover:text-[#1CA774]">Home</a></li></NavLink>
       <NavLink to="/blog"><li><a className="hover:text-[#1CA774]">Blogs</a></li></NavLink>
       <NavLink to="/alljobs"><li><a className="hover:text-[#1CA774]">All Jobs</a></li></NavLink>
       <NavLink to="/builder"><li><a className="hover:text-[#1CA774]">Builder</a></li></NavLink>
       {
        user && <>
       
       <NavLink to="/myjobs"><li><a className="hover:text-[#1CA774]">My Jobs</a></li></NavLink>
       <NavLink to="/allresume"><li><a className="hover:text-[#1CA774]">My Builder</a></li></NavLink>
       <NavLink to="/appliedjobs"><li><a className="hover:text-[#1CA774]">Applied Jobs</a></li></NavLink>
       <NavLink to="/addjob"><li><a className="hover:text-[#1CA774]">Add a job</a></li></NavLink>
       </>
       }
    </>
    return (
        <div className="">
          
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={`w-full navbar h-20 `}>
      <div className=" ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-4 mx-2">
        <img className="" src={logo} />
        </div>
      
      <div className="flex-none hidden text-center lg:block">
        <ul className="menu-horizontal gap-3 " >
          {/* Navbar menu content here */}
          {navlinks}
        </ul>
      </div>
      </div>
      <div className="navbar-end px-6">
      {
      user? <>
       <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={user?.photoURL? user.photoURL : "None"} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#1CA774] rounded-box w-52 text-white font-bold">
        <li>
          <a className="justify-between">
            {
              user?.displayName? user.displayName :"Your Name"
            }
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handellogOut} ><a>Logout</a></li>
      </ul>
    </div>
   

      </>
      :
      <Link to="/login">
    <Link to="/login"> <button className="btn bg-[#1CA774] text-white font-bold hover:bg-[#1CA774]">Login</button></Link>
    </Link>
    }
         <Link to="/resume"> <button className="btn text-[#1CA774] bg-white font-bold hover:bg-[#1CA774] hover:text-white lg:mx-2">Create Resume</button></Link>
      </div>
    
    </div>
  </div> 
  <div className="drawer-side z-[1]">
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