import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Category = () => {
    const [type, setType]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=> res.json())
        .then(data=> setType(data))
    },[])
    console.log(type);
    const [selectedTab, setSelectedTab] = useState(0);
    const [allCat, setAllCat]= useState([])
    useEffect(()=>{
     fetch("http://localhost:5000/jobstype")
     .then(res=> res.json())
     .then(data=> setAllCat(data))
    },[])
    return (
        <div className="bg-gray-200">
            <h1 className='text-center text-3xl font-bold mt-10 mb-10 p-5'>Jobs Category</h1>
        <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
          <TabList className="grid grid-cols-5  text-center btn bg-[#1CA774] text-white hover:bg-[#1CA774]" >
            {allCat.map((category, index) => (
              <Tab  key={index} className={selectedTab === index ? 'p-3' : ''}>
                {category.job_type}
              </Tab>
            ))}
          </TabList>
  
          {allCat.map((category, index) => (
            <TabPanel key={index}>
              {category.job_type === 'All jobs' ? (
                <div className="grid grid-cols-3 mt-5 mb-5">
                  {type.map((job, jobIndex) => (
                    <div key={jobIndex} className="grid grid-cols-3">
                      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={job.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{job.job_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                    </div>
                  ))}
                </div>
              ) : (
                // Display jobs for the selected category
                <div className="grid grid-cols-3 mt-5 mb-5">
                  {type
                    .filter(job => job.jb_category === category.job_type)
                    .map((job, jobIndex) => (
                      <div key={jobIndex} className="job-item">
                        <h3></h3>
                        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={job.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex flex-row flex-wrap gap-5 p-3">
    <h2 className="card-title">Role: {job.job_title}</h2>
    <p className='card-title'>Salary Range: ${job.salary_range
}</p>
    <p>Posted Date: {job.jb_post_date}</p>
    <p>Deadline Date: {job.app_deadline
}</p>
    
    <p>Applied:{job.job_applicate_number
}</p>
    <div className="card-actions">
      <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">View Details</button>
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