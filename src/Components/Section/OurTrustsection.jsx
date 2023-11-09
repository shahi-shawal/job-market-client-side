import ourimg from "../../assets/Images/img1_files/team-1.jpg"
import { FcApproval } from 'react-icons/fc';
const OurTrustsection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ourimg} className=" rounded-lg shadow-2xl" />
    <div>
    <button className="btn btn-sm  bg-[#FFF4E2] text-[#FFAC10] hover:bg-[#FFF4E2] hover:text-[#FFAC10]">Advanced Features</button>
      <h1 className="text-5xl font-bold">Our Trusted & Popular
      Job Portal</h1>
      <p className="py-6">Join over 2,000 companies around the world that trust the  platforms</p>
      <div>
      <ul className="menu  rounded-box">
  <li className="text-2xl font-bold ">
    <a>
    <FcApproval className="" />
      #1 Quality Job
    </a>
  </li>
  <li className="text-2xl font-bold">
    <a>
    <FcApproval />
    Top Companies
    </a>
  </li>
  <li className="text-2xl font-bold">
    <a>
    <FcApproval />
    International Jobs
    </a>
  </li>
  <li className="text-2xl font-bold">
    <a>
    <FcApproval />
    No Extra Charges
    <p></p>
    </a>
  </li>
</ul>
        <h1></h1>
      </div>
      
      <button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774] hover:text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurTrustsection;