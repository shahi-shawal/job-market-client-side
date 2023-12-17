import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { usePDF } from 'react-to-pdf';


const Builder = () => {
    const resume = useLoaderData()
    console.log(resume);
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Shawal Ahmed S.k</h1>
                    <h1 className="text-2xl font-bold">Frontend Developer</h1>
                </div>
                <hr className="mt-4 lg:w-[800px] mx-auto" />
                <div className="lg:ml-80 mt-4">
                    <h1>Email: <span className="font-semibold">shahishawal@gmail.com</span></h1>
                    <h1>Address: Chattogram, Bangladesh</h1>
                    <div>
                        <h1 className="font-bold text-2xl mt-4">OBJECTIVE</h1>
                        <p className="lg:w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas maiores eaque rerum quasi doloribus temporibus optio ea facilis totam velit, dignissimos nam suscipit perspiciatis qui ipsa est tempora eum quia quaerat laudantium dolorem iste in. Illum nesciunt commodi alias! Rerum possimus quisquam nam odio qui non dolores cum doloremque!</p>
                        <h1 className="font-bold text-2xl mt-4">Skill</h1>
                        <p className="lg:w-[800px]">
                          React, Tailwind Css, MongoDb, Express js, Node js, Daisy Ui,Javascript ,Mysql
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Experience</h1>
                        <p className="lg:w-[800px]">
                         Working MERN project about 1 year 
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Address</h1>
                        <p className="lg:w-[800px]">
                         Chattogram, Bangladesh
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Education</h1>
                        <p className="lg:w-[800px]">
                          B.sc in Zoology
                        </p>
                        <h1 className="font-bold text-2xl mt-4">Parents</h1>
                        <p className="lg:w-[800px]">
                          <h1>Father name: XXXXXXXXXXX</h1>
                          <h1>Mother name: XXXXXXXXXXX</h1>
                        </p>
                    </div>
                </div>
            </div>
            {/* {
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
            } */}
        </div>
    );
};

export default Builder;