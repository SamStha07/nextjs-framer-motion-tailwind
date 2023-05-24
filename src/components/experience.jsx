import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./li-icon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="text-2xl font-bold capitalize">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
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
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
