import swap from "../../assets/Images/l-4.png"
import swap2 from "../../assets/Images/l-5.png"
import swap3 from "../../assets/Images/l-6.png"
import swap4 from "../../assets/Images/l-7.png"
import swap5 from "../../assets/Images/l-8.png"
import swap6 from "../../assets/Images/l-9.png"
import { GrLocation } from 'react-icons/gr';
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const TopCompanis = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div data-aos="fade-up" className="bg-white">
             <div  className="mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2">Broswe Top Companies</h1>
                <p>Explore Top Companies and find your job</p>
                </div>
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="p-4 mx-auto grid grid-cols-1 lg:grid-cols-3 mb-3">
                <div className="card w-80 h-auto bg-base-100 border mb-3">
                <figure className="px-10 pt-10">
                  <img src={swap} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Software & Consultancy</p>
                  <h2 className="card-title">Swap Technology</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">O6 Open position</button>
                  </div>
                </div>
              </div>
                <div  className="card w-80 h-auto bg-base-100 border mb-3">
                <figure className="px-10 pt-10">
                  <img src={swap2} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Photo Edditing Tools</p>
                  <h2 className="card-title">Photoshop</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">16 Open position</button>
                  </div>
                </div>
              </div>
                <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="card w-80 h-auto bg-base-100 border mb-3">
                <figure className="px-10 pt-10">
                  <img src={swap3} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Web Browser & Tech</p>
                  <h2 className="card-title">Fire Fox</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">26 Open position</button>
                  </div>
                </div>
              </div>
                <div  className="card w-80 h-auto bg-base-100 border">
                <figure className="px-10 pt-10">
                  <img src={swap4} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Business Directory</p>
                  <h2 className="card-title">Airbnb</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">O6 Open position</button>
                  </div>
                </div>
              </div>
                <div  className="card w-80 h-auto bg-base-100 border">
                <figure className="px-10 pt-10">
                  <img src={swap5} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Message & Video Reelas</p>
                  <h2 className="card-title">Sanp Chat</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">O6 Open position</button>
                  </div>
                </div>
              </div>
                <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="card w-80 h-auto bg-base-100 border">
                <figure className="px-10 pt-10">
                  <img src={swap6} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Portfolio Showcase</p>
                  <h2 className="card-title">Dribbble Inc</h2>
                  <p className="flex justify-center items-center"><GrLocation />California, USA</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">10 Open position</button>
                  </div>
                </div>
              </div>
                
                </div>
        </div>
    );
};

export default TopCompanis;