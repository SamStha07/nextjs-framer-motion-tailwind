import AnimatedText from "@/components/animated-text";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";

// 1.54

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Sam | About Page</title>
        <meta name="description" content="description" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16 mt-10">
            <div className="flex flex-col items-start justify-start col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                {`Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.`}
              </p>
              <p className="my-4 font-medium">
                {`I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.`}
              </p>
              <p className="font-medium">
                {`Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
              </p>
            </div>
            <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="sam"
                className="w-full h-auto rounded-2xl"
                priority={true}
              />
            </div>
            <div className="flex flex-col items-end justify-between col-span-2">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/2">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/2">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/2">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
