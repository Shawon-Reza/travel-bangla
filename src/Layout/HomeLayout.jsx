import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    
    return (
        <div className="container mx-auto">
            <Navbar />
            <Header></Header>
           
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;
