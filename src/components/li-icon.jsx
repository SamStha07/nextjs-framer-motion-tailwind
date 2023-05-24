import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg
        className="-mt-[2px] -rotate-90"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 fill-none stroke-primary"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light stroke-[5px]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 animate-pulse fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
