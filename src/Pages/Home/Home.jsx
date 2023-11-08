import TopCompanis from "../../Components/Section/TopCompanis";
import Banner from "../../Components/Shared/Banner/Banner";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";
import Category from "../Category";


const Home = () => {
    return (
        <div className="bg-[#E8F6F1]">
            <Navbar></Navbar>
            <Banner></Banner>
            <TopCompanis></TopCompanis>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;