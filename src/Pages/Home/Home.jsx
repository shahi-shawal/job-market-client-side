import Banner from "../../Components/Shared/Banner/Banner";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";


const Home = () => {
    return (
        <div className="bg-[#E8F6F1]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;