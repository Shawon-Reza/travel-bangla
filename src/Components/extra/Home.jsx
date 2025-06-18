import Particles from '../../Animated/particles';
import HomeLayout from '../../Layout/HomeLayout';
import SecondLayout from '../../Layout/SecondLayout.JSX';
import ThirdLayout from '../../Layout/ThirdLayout';
import AnimatedSection from './AnimatedSection';
import { fadeInLeft, fadeInRight, zoomIn } from './animations';

const Home = () => {
  return (
    <div className='relative'>
       <div className="absolute inset-0 -z-10 ">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={400}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={300}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
      <AnimatedSection variants={fadeInLeft}>
        <HomeLayout></HomeLayout>
      </AnimatedSection>

      <AnimatedSection variants={zoomIn}>
        <SecondLayout></SecondLayout>
      </AnimatedSection>

      <AnimatedSection variants={fadeInRight}>
        <ThirdLayout></ThirdLayout>
      </AnimatedSection>
    </div>
  );
};
export default Home