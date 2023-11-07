import { useContext, useState } from "react";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { toast } from "react-hot-toast";

const Update = () => {
    const {user}= useContext(AuthContext)
    console.log(user.displayName);
    const [startDate, setStartDate] = useState(new Date());
    const handelAddjob=e=>{
        e.preventDefault()
        const form = e.target
        const job_title= form.job_title.value
        const posted_name= form.posted_name.value
        const image= form.image.value
        const jb_category= form.jb_category.value
        const salary_range= form.salary_range.value
        const jb_dsc= form.jb_dsc.value
        const jb_post_date= startDate
        const app_deadline = startDate
        const job_applicate_number= form.job_applocate_number.value

        const jobData ={job_title,salary_range,posted_name, job_applicate_number, jb_dsc,jb_category,jb_post_date,app_deadline, image}

        console.log(jobData);

        // fetch("http://localhost:5000/jobs", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(jobData),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.insertedId) {
        //        toast.success("Your Job Post successFully")
        //     }
        //   });
      };
        
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
          Update Job
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto bg-[#E8F6F1]">
        <div className="flex-col lg:flex-row">
          <div className="card  w-full ">
            <form onSubmit={handelAddjob} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">JOB TITLE</span>
                </label>
                <input
                  type="text"
                  name="job_title"
                  placeholder="JOB TITLE"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">POSTED BY</span>
                </label>
                <input
                  type="text"
                  name="posted_name"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="mt-2">
                <select
                  name="jb_category"
                  className="select select-bordered w-full bg-gray-200"
                >
                  <option disabled selected>
                    Job Category
                  </option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Salary Range</span>
                </label>
                <input
                  type="number"
                  name="salary_range"
                  placeholder="Salary Range"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <input
                  type="text"
                  name="jb_dsc"
                  placeholder="Job Description"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Posting Date</span>
                </label>
                <DatePicker  className="input input-bordered bg-gray-200"
                  required selected={startDate} onChange={(date) => setStartDate(date)} />
                {/* <input
                  type="date"
                  name="jb_post_date"
                  placeholder="Job Posting Date"
                  className="input input-bordered bg-gray-200"
                  required
                /> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Application Deadline</span>
                </label>
                <DatePicker  className="input input-bordered bg-gray-200"
                  required selected={startDate} onChange={(date) => setStartDate(date)} />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Applicants Number</span>
                </label>
                <input
                  type="text"
                  name="job_applocate_number"
                  defaultValue={0}
                  placeholder="Job Applicants Number"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]"
                  type="submit"
                  value="ADD PRODUCT"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Update;