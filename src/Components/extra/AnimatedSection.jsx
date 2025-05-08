// AnimatedSection.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center" // Ensure it's large enough to observe
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
