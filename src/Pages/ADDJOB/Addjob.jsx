import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";

const Addjob = () => {
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
          Add a Job
        </div>
      </div>
      <div className="w-full lg:w-1/2 mx-auto">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card  w-full ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">JOB TITLE</span>
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
                  <span className="label-text">POSTED BY</span>
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
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                  <option value="part-time">Part Time</option>
                  <option value="hybrid">Hybrid</option>
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
                <input
                  type="date"
                  name="jb_post+_date"
                  placeholder="Job Posting Date"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Application Deadline</span>
                </label>
                <input
                  type="date"
                  name="app_deadline"
                  placeholder="Application Deadline"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Applicants Number</span>
                </label>
                <input
                  type=""
                  name="job_applocate_number"
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

export default Addjob;
