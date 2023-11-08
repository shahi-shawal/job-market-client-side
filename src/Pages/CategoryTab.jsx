import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = ({types}) => {
  console.log(types);
  const {job_title, jb_category}=types
  const [selectedTab, setSelectedTab] = useState(0);
   const [allCat, setAllCat]= useState([])
   useEffect(()=>{
    fetch("http://localhost:5000/jobstype")
    .then(res=> res.json())
    .then(data=> setAllCat(data))
   },[])
  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
        <TabList>
          {allCat.map((category, index) => (
            <Tab key={index} className={selectedTab === index ? 'active' : ''}>
              {category.job_type}
            </Tab>
          ))}
        </TabList>
        {allCat.map((category, index) => (
          <TabPanel key={index}>
            {category.job_type === 'All jobs' ? (
              // Display all jobs
              <div className="job-list">
                
                  <div className="job-item">
                    <h3>{job_title}</h3>
                    {/* Display other job details here */}
                  </div>
       
              </div>
            ) : (
              // Display jobs for the selected category
              <div className="job-list">
              { jb_category === category.job_type?
                <h1>{job_title}</h1>:<>NO Data</>
              }
            </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTab;



