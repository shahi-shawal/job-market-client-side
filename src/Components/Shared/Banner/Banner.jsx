import banner from "../../../assets/Images/undraw_interview_re_e5jn.svg";
import ava1 from "../../../assets/Images/avatar-1.jpg";
import ava2 from "../../../assets/Images/avatar-2.jpg";
import ava3 from "../../../assets/Images/avatar-3.jpg";
import { FaShare } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-xl rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold text-[#009868]">
              Your Job Here
            </h1>
            <p className="py-6 text-6xl font-bold text-[#05264E]">
              Discover & Find Your <br></br>
              Dream Companies
            </p>
            <div className="form-control">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="input input-bordered border-[#009868]"
                />
                <button className="bg-[#009868] text-white btn">Find Job</button>
              </label>
            </div>
            <div className="flex flex-row gap-3 items-center mt-6">
                <div>
                <h1 className=" font-bold flex items-center gap-2">
                <FaShare className="text-[#009868] text-xl" /> <span>4.9 reviews on</span> </h1>
                </div>
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src={ava2} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={ava3} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={ava1} />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-[#009868] text-white">
                  <span>12k</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
