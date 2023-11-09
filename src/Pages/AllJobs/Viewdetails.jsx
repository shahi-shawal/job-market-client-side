import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import Footer from "../../Components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";
const Viewdetails = () => {
  const form = useRef();
  const {user}= useContext(AuthContext)
    const details = useLoaderData()
    console.log(details);
    const {_id,image,jb_dsc,job_title,jb_category, salary_range,app_deadline,job_applicate_number}= details
    
    const handelSubmit=e=>{
      e.preventDefault()
      const form = e.target
      const email = form.email.value 
      const name = form.name.value 
      const resume = form.resume.value
      const jobId = form.jobPostingId.value
      const job_title = form.job_title.value
      const jb_category = form.jb_category.value
      const salary_range = form.salary_range.value
      const app_deadline = form.app_deadline.value
      const  image= form.image.value
     
      




      const applyData = {email,name,resume,jobId,job_title, jb_category,image, app_deadline, salary_range}
      console.log(applyData);
      console.log(Date.now());
      const times = Date.now()
      const applyDate = new Date(times)
      console.log(applyDate);
      const deadlineDate=new Date(app_deadline)
      console.log(deadlineDate);

  
      
     if (email===user.email){
       toast.error("You apply your Own post")
     }
    else if(applyDate<deadlineDate) {
      fetch("http://localhost:5000/applyJobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applyData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
               toast.success("You Are SuccessFully Apply")
            }
            emailjs.sendForm('service_qwfkttg', 'template_di0ek5p', form.current, 'tUlX156MUYOs2Sp12')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
          });



      
          // fetch(`http://localhost:5000/jobs/${_id}`, {
          //   method: "PATCH",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(job_applicate_number),
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     console.log(data);

          //   });


        
     }
     else{
      toast.error("Deadline is Over")
     }

      

    }
   

 

    return (
        <div>
        <Helmet>
        <title>JOBS MARKET | View Details</title>
      </Helmet>
            <Navbar></Navbar>
            <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "30vh",
        }}
        className="mt-5 py-2"
      >
        <div className="py-20 px-20 text-3xl font-bold text-white">
          {job_title}
        </div>
      </div>
      <div className="card max-w-5xl mx-auto bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt={job_title} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Role:{job_title}</h2>
    <p>Salary: ${salary_range}</p>
    <p>{job_applicate_number}</p>
    <p>{jb_dsc}</p>
    <div className="card-actions">
      <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">Apply Now</button>
    </div>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Apply Now!</h3>
    <form  ref={form}  onSubmit={handelSubmit}>
    <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Email"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
    <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="User name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
    <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume Link</span>
                </label>
                <input
                  type="text"
                  name="resume"
                  placeholder="Your Resume"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
    
                <input
                  type="hidden"
                  name="jobPostingId"
                  value={_id}
                />
                <input
                  type="hidden"
                  name="job_title"
                  value={job_title}
                />
                <input
                  type="hidden"
                  name="jb_category"
                  value={jb_category}
                />
                <input
                  type="hidden"
                  name="salary_range"
                  value={salary_range}
                />
                <input
                  type="hidden"
                  name="app_deadline"
                  value={app_deadline}
                />
                <input
                  type="hidden"
                  name="image"
                  value={image}
                />


          <input className="btn bg-[#1CA774] text-white hover:bg-[#1CA774] mt-6" type="submit" value="Submit" />
    </form>
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Viewdetails;