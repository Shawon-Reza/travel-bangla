import Background from "../Components/Background";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {

    return (
        <div className="">

            <Background></Background>
            <Navbar />
            <Header></Header>

           
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;
