import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { usePDF } from 'react-to-pdf';
import { FaDownload } from "react-icons/fa";


const Builder = () => {
    const resume = useLoaderData()
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    console.log(resume);
    return (
        <div>
            <Navbar></Navbar>
            {
                resume.map(res=><div ref={targetRef} key={res.id}>
                    <div className="flex border w-96 mx-auto mt-10">
                         <div className="flex flex-col p-4">
                         <h1 className="text-center font-bold">Name: {res.name}</h1>
                         <h1 className="text-center font-semibold">Email: {res.email}</h1>
                         <h1 className="">Father Name: {res.f_name}</h1>
                         <h1 className="">Mother Name: {res.m_name}</h1>
                         <h1 className="">Address: {res.address}</h1>
                         <h1 className="">Education: {res.education}</h1>
                         <h1 className="">Skill: {res.skills}</h1>
                         <h1 className="">Experience: {res.experience}</h1>
                         </div>
                         <button className="btn btn-xl  btn-outline bg-black text-white  text-center hover:bg-[#E8F6F1] hover:text-[#1CAE8C]" onClick={() => toPDF()}><FaDownload /></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Builder;