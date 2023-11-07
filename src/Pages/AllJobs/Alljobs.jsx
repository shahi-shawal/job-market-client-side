import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import img1 from "../../assets/Images/animatepng.png";
import { useState } from "react";
const Alljobs = () => {
    const alljobs= useLoaderData()
    console.log(alljobs);
    const [jobs, setJobs]= useState(alljobs)
   
    // const {job_title, salary_range}= alljobs
    console.log(jobs);
    const handelSearch=(e)=>{
      e.preventDefault()
      const search =e.target.searchInput.value 
      console.log(search);
     const searchjb = jobs.filter((jb)=> jb.job_title=== search)
     setJobs(searchjb);
     console.log(searchjb);
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
        className="mt-5 py-2"
      >
        <div className="py-20 px-20 text-3xl font-bold text-white">
          All Jobs
        </div>
      </div>
      <div className="flex justify-center">
      <div className="form-control mt-5 mb-6 flex">
  <div className="input-group">
    <form onSubmit={handelSearch}>
    <input name="searchInput" type="text" placeholder="Search…" className="input input-bordered border-[#009868] " />
    <input className="btn  bg-[#009868] hover:hover:bg-[#009868] text-white" type="submit" value="Serach" />
    </form>
    
  </div>
</div>
      </div>
            <div className="overflow-x-auto mb-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Posted Name</th>
        <th>Job Title</th>
        <th>Job Post Date</th>
        <th>Job Deadline Date</th>
        <th>Salary Range</th>
      </tr>
    </thead>
    <tbody>
    {
                    jobs.map((jobtable)=> <tr key={jobtable.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{jobtable.posted_name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {jobtable.job_title}
                    </td>
                    <td>{jobtable.jb_post_date}</td>
                    <td>{jobtable.app_deadline}</td>
                    <td>${jobtable.salary_range}</td>
                    <th>
                     <Link to={`/jobs/${jobtable._id}`}> <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">View details</button></Link>
                    </th>
                  </tr>)
    }
     
    </tbody>
    
  </table>
</div>
        <Footer></Footer>   
        </div>
    );
};

export default Alljobs;