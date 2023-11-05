import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import { AiOutlineGoogle } from "react-icons/ai";
import Footer from "../../Components/Shared/Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast"; 


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
   const {login, googlelogin} = useContext(AuthContext)

  const handelLogin=e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const logindata= { email, password}
    console.log(logindata);


    if (password.length < 6) {
        return toast.error("Password should be at least 6 characters");
      } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
         return toast.error("Password should contain at least one uppercase letter and one special character");
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return  toast.error("Please check your email and provide a valid email address");
      }

    login(email,password)
    .then(result=>{
        console.log(result.user);
        navigate(location?.state? location.state :"/")
        return  toast.success("Log in successfully")
    })
    .catch(error=>{
        console.error(error);
        return toast.error("Check your Email and Password")
    })
    form.reset()
  }

  const handelGooglelog=()=>{
    googlelogin()
    navigate(location?.state? location.state :"/")
    toast.success("Log in successfully")
    return
   }


  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "30vh",
        }}
      >
        <div className="py-20 px-20 text-3xl font-bold text-white">
          Log in Your Account
          <p className="text-xl font-semibold mt-2">Login or Social Media Login</p>
        </div>
       
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" flex-col">
          <div className="card flex-shrink-0 w-full max-w-xl bg-base-100">
            <form onSubmit={handelLogin} className="w-96 p-5">
                <div className="text-center">
                <p className="mb-4">You Don't have an Account?</p>
                <Link to="/signup"><button className="btn bg-base-200 text-[#009868] hover:bg-[#1CA774] hover:text-white mb-6">Create Your Account</button></Link>
                </div>
                <hr></hr>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1CA774] text-white hover:text-[#1CA774]">Login</button>
              </div>
            </form>
            <button onClick={handelGooglelog} className="btn text-white text-xl bg-[#DE4302] hover:bg-[#DE4302] hover:text-white mb-10"><AiOutlineGoogle />Google+</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
