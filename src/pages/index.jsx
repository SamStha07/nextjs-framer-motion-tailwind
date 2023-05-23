import AnimatedText from "@/components/animated-text";
import { LinkArrow } from "@/components/icons";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import HireMe from "@/components/hire-me";

const imageMotion = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const groupedLinkMotion = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};
const linkMotion = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center text-dark">
      <Layout className="pt-0">
        <div className="flex w-full items-center justify-between">
          <motion.div
            className="w-1/2"
            variants={imageMotion}
            initial="initial"
            animate="animate"
          >
            <Image src={profilePic} alt="sam" className="h-auto w-full" />
          </motion.div>
          <motion.div className="flex w-1/2 flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-left !text-6xl"
            />

            <motion.div
              variants={groupedLinkMotion}
              initial="initial"
              animate="animate"
            >
              <motion.p
                className="my-4 text-base font-medium"
                variants={linkMotion}
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications.
              </motion.p>

              <motion.div className="mt-2 flex items-center self-start">
                <motion.a
                  href="/dummy.pdf"
                  target="_blank"
                  className="text-ligh flex items-center rounded-lg border border-solid border-transparent bg-dark p-2.5 px-6 font-semibold text-light hover:border-dark hover:bg-light hover:text-dark"
                  download={true}
                  variants={linkMotion}
                >
                  Resume <LinkArrow className="ml-1 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:samshrestha85@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                  variants={linkMotion}
                >
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Layout>

      <HireMe />

      <div className="absolute bottom-8 right-8 w-24">
        <Image src={lightBulb} alt="sam" classname="w-full h-auto" />
      </div>
    </main>
  );
}
