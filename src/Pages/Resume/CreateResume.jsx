import { toast } from "react-hot-toast";
import Navbar from "../../Components/Shared/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CreateResume = () => {
  const {user} = useContext(AuthContext)
    const handelResume=(e)=>{
       e.preventDefault()
       const form = e.target
       const userEmail = user.email
       const name= form.name.value
        const email= form.email.value
        const image= form.image.value
        const f_name= form.f_name.value
        const m_name= form.m_name.value
        const address= form.p_address.value
        const education= form.education.value
        const experience = form.experience.value
        const skills = form.skills.value

    const resume = {
        name,userEmail,email,image,f_name,m_name,address,education,experience,skills
    }
    console.log(resume);

  fetch("https://job-server-as-11.vercel.app/resume",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(resume)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if (data.insertedId) {
        toast.success("Your Resume Create successfully")
     }
  })
    
    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="w-full lg:w-1/2 mx-auto bg-[#E8F6F1]">
            <h1 className="text-center font-bold text-2xl">Add your information</h1>
        <div className="flex-col lg:flex-row">
          <div className="card  w-full ">
            <form onSubmit={handelResume} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Father Name</span>
                </label>
                <input
                  type="text"
                  name="f_name"
                  placeholder="Father Name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mother Name</span>
                </label>
                <input
                  type="text"
                  name="m_name"
                  placeholder="Mother Name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Ex: B.sc in Abc (2023)"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Present Address</span>
                </label>
                <input
                  type="text"
                  name="p_address"
                  placeholder="Present Address"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Experience</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Your Experience"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Skills</span>
                </label>
                <input
                  type="text"
                  name="skills"
                  placeholder="Skills"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]"
                  type="submit"
                  value="Submit"
                />
              </div>
              <Link to="/builder"><p className=" text-red hover:text-[#1CA774]">click & watch Resume</p></Link>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CreateResume;