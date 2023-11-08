import { Link } from "react-router-dom";
import error from "../../assets/Images/404.png"

const Error = () => {
    return (
        <div className="text-center">
            <img className="mx-auto h-[80vh]" src={error} alt=""  />
            <Link to="/"><button className="btn bg-[#1CA774] text-white hover:bg-[#1CA774] ">BACK TO HOME</button></Link>
        </div>
    );
};

export default Error;