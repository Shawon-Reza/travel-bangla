import HomeLayout from '../../Layout/HomeLayout';
import AnimatedSection from './AnimatedSection';
import { fadeInLeft, fadeInRight, zoomIn } from './animations';

const Home = () => {
  return (
    <div>
      <AnimatedSection variants={fadeInLeft}>
        <HomeLayout></HomeLayout>
      </AnimatedSection>

      <AnimatedSection variants={zoomIn}>
        <div className="text-3xl">Adventure in the Mountains</div>
      </AnimatedSection>

      <AnimatedSection variants={fadeInRight}>
        <div className="text-2xl">Plan Your Trip Now</div>
      </AnimatedSection>
    </div>
  );
};
export default Home