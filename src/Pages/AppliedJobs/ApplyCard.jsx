

const ApplyCard = ({jobs}) => {
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
                </div>
              </div>
        </div>
    );
};

export default ApplyCard;