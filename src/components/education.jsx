import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./li-icon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ y: 50 }}
      >
        <h3 className="text-2xl font-bold capitalize">{type}</h3>
        <span className="font-medium capitalize text-dark/75">
          {time} | {place}
        </span>
        <p className="w-full font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%]">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            place="Massachusetts Institute Of Technology (MIT)"
          />
          <Details
            type="Master Of Computer Science"
            time="2020-2022"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
            place="Stanford University"
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            place="Massachusetts Institute Of Technology (MIT)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
