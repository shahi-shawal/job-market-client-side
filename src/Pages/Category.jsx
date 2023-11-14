import { useContext, useEffect, useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Category = () => {
    const {user}=useContext(AuthContext)
  const [type, setType] = useState([]);
  useEffect(() => {
    fetch("https://job-server-as-11.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setType(data));
  }, []);
  console.log(type);
  const [selectedTab, setSelectedTab] = useState(0);
  const [allCat, setAllCat] = useState([]);
  useEffect(() => {
    fetch("https://job-server-as-11.vercel.app/jobstype")
      .then((res) => res.json())
      .then((data) => setAllCat(data));
  }, []);

  const handelDetails=()=>{
    if (!user) {
        
       toast.error("You have to log in first to view details")
    }
  }
  return (
    <div className="bg-[#E8F6F1]">
      <h1 className="text-center text-3xl font-bold mt-5 mb-5 p-5">
        Jobs Category
      </h1>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabList className="grid grid-cols-5  text-center btn bg-[#1CA774] text-white hover:bg-[#1CA774]">
          {allCat.map((category, index) => (
            <Tab key={index} className={selectedTab === index ? "p-3" : ""}>
              {category.job_type}
            </Tab>
          ))}
        </TabList>

        {allCat.map((category, index) => (
          <TabPanel key={index}>
            {category.job_type === "All jobs" ? (
              <div className="grid grid-cols-3 p-5 mt-5 mb-5">
                {type.map((job, jobIndex) => (
                  <div key={jobIndex} className="grid grid-cols-3">
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src={job.image}
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="flex flex-row flex-wrap gap-5 p-3">
                        <h2 className="card-title">Role: {job.job_title}</h2>
                        <p className="card-title">
                          Salary Range: ${job.salary_range}
                        </p>
                        <div className="flex gap-3">
                          <p className="flex justify-center items-center gap-1">
                            <BsCalendar2DateFill />
                            {job.jb_post_date}
                          </p>
                          <p className="flex justify-center items-center gap-1">
                            <GrUpdate /> {job.app_deadline}
                          </p>
                        </div>

                        <p>Applied:{job.job_applicate_number}</p>
                        <div className="card-actions mx-auto">
                        <Link to={`/jobs/${job._id}`}><button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">
                              View Details
                            </button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 p-5 mt-5 mb-5">
                {type
                  .filter((job) => job.jb_category === category.job_type)
                  .map((job, jobIndex) => (
                    <div key={jobIndex} className="job-item">
                      <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img
                            src={job.image}
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
                        <div className="flex flex-row flex-wrap gap-5 p-3">
                          <h2 className="card-title">Role: {job.job_title}</h2>
                          <p className="card-title">
                            Salary Range: ${job.salary_range}
                          </p>
                          <div className="flex gap-3">
                            <p className="flex justify-center items-center gap-1">
                              <BsCalendar2DateFill />
                              {job.jb_post_date}
                            </p>
                            <p className="flex justify-center items-center gap-1">
                              <GrUpdate /> {job.app_deadline}
                            </p>
                          </div>

                          <p>Applied:{job.job_applicate_number}</p>
                          <div className="card-actions mx-auto">
                            <Link to={`/jobs/${job._id}`}><button onClick={handelDetails} className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">
                              View Details
                            </button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
