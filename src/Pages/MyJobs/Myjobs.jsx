import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import img1 from "../../assets/Images/animatepng.png";
import Footer from "../../Components/Shared/Footer/Footer";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Myjobs = () => {
  const { user } = useContext(AuthContext);
  const myname = user.displayName;
  console.log(myname);
  const myjobs = useLoaderData();
  const [jobsstate, setJobsState]= useState(myjobs)
  console.log(myjobs);
  const myfilterJob = jobsstate.filter((myjob) => myjob.posted_name === myname);
  console.log(myfilterJob);

  const handelDelete=(_id)=>{
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result)=>{
      if(result.isConfirmed){
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: "DELETE",
        })
  
  .then((res) => res.json())
   
  .then((data) => {
      if (data.deletedCount > 0) {
        
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
       
      });
      const remaing = jobsstate.filter((jobdelete)=> jobdelete._id !==_id)
      setJobsState(remaing)
    }
   
  });
      }
    })

   

  }
  return (
    <div>
      <Helmet>
        <title>JOBS MARKET | MY JOBS</title>
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
        <div className="py-20 px-20 text-3xl font-bold text-white">My Jobs</div>
        <div className="grid grid-cols-3 gap-5 mb-5 mt-4">
         {
          myfilterJob.length>0? <>{myfilterJob.map((myj) => (
            <div key={myj.id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={myj.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Role: {myj.job_title}</h2>
                <h2 className="card-title">Salary: ${myj.salary_range}</h2>
                <h2 className="card-title">Job Type: {myj.jb_category}</h2>
                <h2 className="card-title">Job post Date:{myj.jb_post_date}</h2>
                <h2 className="card-title">Deadline Date:{myj.app_deadline}</h2>
                <p>{myj.jb_dsc}</p>
                <div className="card-actions">
                  <Link to={`update/${myj._id}`}>
                  <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">
                    Update
                  </button>
                  </Link>
                  <button onClick={()=>handelDelete(`${myj._id}`)} className="btn btn-error text-white hover:bg-[#1e7e5b]">
                    Delete
                  </button>
                </div>
              </div>
            </div>

          ))}</>

          : <div className="flex items-center justify-center mt-10"><h1 className=" text-[#1e7e5b] text-3xl font-bold"> you have no  Job Post</h1></div>
          
          
         }
        </div>
        <Footer></Footer>
      </div>
     
    </div>
  );
};

export default Myjobs;
