import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
}

export const AnimateOnScroll = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
