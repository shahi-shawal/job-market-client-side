import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import Footer from "../../Components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Viewdetails = () => {
  const {user}= useContext(AuthContext)
    const details = useLoaderData()
    console.log(details);
    const {_id,image,jb_dsc,job_title, salary_range,job_applicate_number}= details
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
    <form>
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