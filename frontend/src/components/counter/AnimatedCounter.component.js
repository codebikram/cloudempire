import React, { useLayoutEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const AnimatedCounter = ({ from, to, animationOption, className, sign }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useLayoutEffect(() => {
    if (!inView) return;
    const element = ref.current;
    element.textContent = String(from);
    const controls = animate(from, to, {
      duration: 1.8,
      ease: "easeOut",
      ...animationOption,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });
    return () => {
      controls.stop();
    };
  }, [ref, from, to, animationOption, inView]);
  return (
    <div className={className}>
      <span ref={ref} className='font-mono' />
      <span>{sign}</span>
    </div>
  );
};

export default AnimatedCounter;
