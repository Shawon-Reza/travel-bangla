import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Particles from '../Animated/particles';



const HomeLayout = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Particle Background */}
            {/* <div className="absolute inset-0 -z-10 ">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={300}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div> */}

            {/* Page Content */}
            {/* <Background /> */}
            <Navbar />
            <Header />
            {/* <Footer /> */}
        </div>
    );
};

export default HomeLayout;

