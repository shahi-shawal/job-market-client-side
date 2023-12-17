import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Components/Shared/Navbar";

const Allresume = () => {
  const { user } = useContext(AuthContext);
  const resume = useLoaderData();
  const filter = resume.filter((res) => res.userEmail === user.email);
  console.log(filter);
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:w-[800px] mx-auto">
      {filter.length > 0? <><div className="overflow-x-auto mb-10">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Father Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                filter.map((jobtable) => (
                  <tr key={jobtable.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{jobtable.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{jobtable.email}</td>
                    <td>{jobtable.f_name}</td>
                    <th className="text-center">
                      <Link to={`/ResDown/${jobtable._id}`}>
                        {" "}
                        <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774]">
                          Download & preview
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div></>: <h1 className="text-xl font-bold text-center">You are not Create Any Resume</h1>}
        
      </div>
    </div>
  );
};

export default Allresume;
