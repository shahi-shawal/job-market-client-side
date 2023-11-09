import { Helmet } from "react-helmet-async";
import OurTrustsection from "../../Components/Section/OurTrustsection";
import TopCompanis from "../../Components/Section/TopCompanis";
import Banner from "../../Components/Shared/Banner/Banner";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";
import Category from "../Category";


const Home = () => {
    return (
        <div className="bg-[#E8F6F1]">
            <Helmet>
        <title>JOBS MARKET | HOME</title>
        
      </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopCompanis></TopCompanis>
            <Category></Category>
            <OurTrustsection></OurTrustsection>
            <Footer></Footer>
        </div>
    );
};

export default Home;