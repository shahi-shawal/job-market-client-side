import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ApplyCard from "./ApplyCard";
import img1 from "../../assets/Images/animatepng.png";
import Footer from "../../Components/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";


const AppliedJobs = () => {
    const {user}= useContext(AuthContext)
    const mail = user.email;
    console.log(mail);
    console.log(user);
    const applyJobs = useLoaderData()
    // const [appJobs, setAppJobs]= useState(applyJobs)
    console.log(applyJobs);
    const myJobs = applyJobs.filter(myjob=> myjob.email ===user.email)
    console.log(myJobs);
     

    
    const [allCat, setAllCat] = useState([]);
    const [selected, setSelected] = useState(allCat);
    useEffect(() => {
        fetch("http://localhost:5000/jobstype")
          .then((res) => res.json())
          .then((data) => setAllCat(data));
      }, []);
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  
    return (
        <div className="bg-[#E8F6F1]">
          <Helmet>
        <title>JOBS MARKET | Applied Job</title>
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
          Applied Jobs
        </div>
      </div>
            <select className="select border-[#1CA774] bg-[#1CA774] w-60 text-white  font-bold mt-5 mb-4" value={selected} onChange={handleChange}>
        {allCat.map(option => (
          <option key={option.value} value={option.value}>
            {option.job_type}
          </option>
        ))}
      </select>
            <div className="grid grid-cols-3 p-4">
                {
                   selected ==="All jobs"?(myJobs.map((jobs)=><ApplyCard key={jobs.id} jobs={jobs}></ApplyCard>)):( myJobs.filter((jb)=> jb.jb_category === selected).map((jobs)=><ApplyCard key={jobs.id} jobs={jobs}></ApplyCard>))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;