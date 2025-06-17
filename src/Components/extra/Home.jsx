import HomeLayout from '../../Layout/HomeLayout';
import SecondLayout from '../../Layout/SecondLayout.JSX';
import ThirdLayout from '../../Layout/ThirdLayout';
import AnimatedSection from './AnimatedSection';
import { fadeInLeft, fadeInRight, zoomIn } from './animations';

const Home = () => {
  return (
    <div>
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