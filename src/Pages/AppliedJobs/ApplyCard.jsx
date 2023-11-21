import { useContext } from 'react';
import { usePDF } from 'react-to-pdf';
import { AuthContext } from '../../Provider/AuthProvider';

const ApplyCard = ({jobs}) => {
  const {user}= useContext(AuthContext)
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const {image, job_title,jb_category,salary_range, app_deadline}= jobs
    return (
        <div>
            <div className="card w-80 h-auto bg-base-100 border">
                <figure className="px-10 pt-10">
                  <img src={image} alt="Shoes" className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                <p>Role: {job_title}</p>
                  <h2 className="card-title">Job Type: {jb_category}</h2>
                  <p className="flex justify-center items-center">Deadline: {app_deadline}</p>
                  <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8F6F1] text-[#1CAE8C] hover:bg-[#E8F6F1] hover:text-[#1CAE8C]">${salary_range}</button>
                  </div>
                  <div className="card-actions">
                  <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Download PDF</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  
  <div className="modal-box">
  <div className="modal-action">
      <form method="dialog">
        <button className="btn">x</button>
      </form>
    </div>
  <div ref={targetRef} className="" >
           <h1 className='card-title'> Name: {user.displayName}</h1>
            <h1 className='card-title'>Job Applied:{job_title}</h1>
            <h1 className='card-title'>Job Applied:{jb_category}</h1>
            <h1 className='card-title'>Salary: ${salary_range}</h1>
         </div>
         <button className="btn btn-xl mt-7 btn-outline bg-black text-white py-4 text-center hover:bg-[#E8F6F1] hover:text-[#1CAE8C]" onClick={() => toPDF()}>Download</button>
    
  </div>
</dialog>



         </div>
         


      
                </div>
              </div>
        </div>
    );
};

export default ApplyCard;