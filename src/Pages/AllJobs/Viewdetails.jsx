import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import Footer from "../../Components/Shared/Footer/Footer";

const Viewdetails = () => {
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
      <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">Apply Now</button>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Viewdetails;