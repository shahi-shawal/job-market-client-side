import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/Images/logo.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const Navbar = () => {
      const [fix, setfix] = useState(false)
      const {user, logout}= useContext(AuthContext)
      const strick= ()=>{
         if (window.scrollY >=150) {
          setfix(true)
         }
         else{
          setfix(false)
         }      
      }

      useEffect(() => {
        console.log("hello");
        window.addEventListener("scroll",strick)
      }, []);

      const handellogOut=()=>{
        logout()
        toast.success("Log Out successfully")
      }
      
    const navlinks = <>
       
       <NavLink  to="/"><li><a>Home</a></li></NavLink>
       <NavLink to="/blog"><li><a>Blogs</a></li></NavLink>
       <NavLink to="/alljobs"><li><a>All Jobs</a></li></NavLink>
       {
        user && <>
       
       <NavLink to="/myjobs"><li><a>My Jobs</a></li></NavLink>
       <NavLink to="/appliedjobs"><li><a>Applied Jobs</a></li></NavLink>
       <NavLink to="/addjob"><li><a>Add a job</a></li></NavLink>
       </>
       }
    </>
    return (
        <div>
          
            <div className={`drawer ${fix}`}>
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={`w-full navbar `}>
    <Toaster />
      <div className=" ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-4 mx-2">
        <img className="w-[150px] h-[120px]" src={logo} />
        </div>
      
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal" >
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