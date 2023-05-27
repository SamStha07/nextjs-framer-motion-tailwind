import AnimatedText from "@/components/animated-text";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/create modal component in react using react portals.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is higher order component in React.jpg";

const FramerImg = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef();

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImg
        style={{
          x: x,
          y: y,
        }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        ref={imgRef}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto w-96 rounded-lg"
        priority
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{
        once: true,
      }}
      className="relative my-4 flex w-full items-center justify-between rounded-xl border border-b-4 border-r-4 border-solid border-dark bg-light p-4 py-6 text-dark first:mt-0"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-4">
      <Link
        href={link}
        target="_blank"
        className="inline-block w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImg
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          src={img}
          alt={title}
          className="h-auto w-full rounded-lg"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 text-2xl font-bold capitalize hover:underline">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary">{time}</span>
    </li>
  );
};

const Articlepage = () => {
  return (
    <>
      <Head>
        <title>Sam | About Page</title>
        <meta name="description" content="description" />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the world!" className="mb-16" />

          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              link="/"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              link="/"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              img={article1}
            />
          </ul>

          <h2 className="my-16 mt-32 w-full text-center text-4xl font-bold">
            All Articles
          </h2>

          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="May 27, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article4}
              date="May 27, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article5}
              date="May 27, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article6}
              date="May 27, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article7}
              date="May 27, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articlepage;

// 3.00
