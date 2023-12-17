import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';
import { FaDownload } from "react-icons/fa";
import Navbar from "../../Components/Shared/Navbar";
const ResDownload = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const preR = useLoaderData()
    console.log(preR);
    const {name, email,skills,education, experience,address, f_name, m_name}= preR
    return (
        <div>
            <Navbar></Navbar>
           <div className="text-right px-52 py-5">
           <button className="btn btn-xl  btn-outline bg-black text-white  hover:bg-[#E8F6F1] hover:text-[#1CAE8C]" onClick={() => toPDF()}><FaDownload /></button>
           </div>
             <div  ref={targetRef} className="p-2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h1 className="text-2xl font-bold">Frontend Developer</h1>
                </div>
                <hr className="mt-4 lg:w-[800px] mx-auto" />
                <div className="lg:ml-80 mt-4">
                    <h1>Email: {email}</h1>
                    <h1>Address: {address}</h1>
                    <div>
                        <h1 className="font-bold text-2xl mt-4">OBJECTIVE</h1>
                        <p className="lg:w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas maiores eaque rerum quasi doloribus temporibus optio ea facilis totam velit, dignissimos nam suscipit perspiciatis qui ipsa est tempora eum quia quaerat laudantium dolorem iste in. Illum nesciunt commodi alias! Rerum possimus quisquam nam odio qui non dolores cum doloremque!</p>
                        <h1 className="font-bold text-2xl mt-4">Skill</h1>
                        <p className="lg:w-[800px]">
                          {skills}
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Experience</h1>
                        <p className="lg:w-[800px]">
                         {experience}
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Education</h1>
                        <p className="lg:w-[800px]">
                         {education}
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Parents</h1>
                        <p className="lg:w-[800px]">
                          <h1>Father name: {f_name}</h1>
                          <h1>Mother name: {m_name}</h1>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ResDownload;