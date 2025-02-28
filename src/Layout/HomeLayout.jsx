import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;