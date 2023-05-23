import classNames from "classnames";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import Logo from "./logo";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={classNames(
          `absolute -bottom-0.5 left-0 block h-[1px] bg-dark transition-[width] duration-300 ease-in group-hover:w-full`,
          {
            "w-full": router.asPath === href,
            "w-0": router.asPath !== href,
          }
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{
            scale: 0.9,
          }}
          className="mr-3 w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{
            scale: 0.9,
          }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="ml-3 w-6"
          whileHover={{ y: -2 }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
