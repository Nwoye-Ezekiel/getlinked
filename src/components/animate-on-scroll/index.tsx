import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  refIndex?: number;
  children: JSX.Element;
  lastElement?: boolean;
}

const AnimateOnScroll = ({ children, refIndex, lastElement }: Props) => {
  const ref = useRef(null);
  const defaultDelay = 0.2;
  const additionalDelay = 0.17;
  const mainControls = useAnimation();
  const [isInInitialView, setIsInInitialView] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: isInInitialView ? '0px' : lastElement ? '-50px' : '-100px',
  });

  useEffect(() => {
    const checkInView = () => {
      if (ref.current) {
        const element = ref.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = rect.top;
        const isInInitialView = offset >= 0 && offset <= windowHeight;
        setIsInInitialView(isInInitialView);
      }
    };
    checkInView();
  }, []);

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
        transition={{
          duration: 0.55,
          delay: refIndex
            ? isInInitialView
              ? defaultDelay + additionalDelay * refIndex
              : defaultDelay
            : defaultDelay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
