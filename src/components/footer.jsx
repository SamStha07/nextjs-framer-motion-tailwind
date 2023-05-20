import React from "react";
import Layout from "./layout";
import Link from "next/link";
import HireMe from "./hire-me";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium">
      <Layout className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="p px-1 text-2xl text-primary">&#9825;</span> by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Sam
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
