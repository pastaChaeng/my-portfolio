import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Arlene Joy Nacion | Portfolio</title>
        <meta
          name="description"
          content="Arlene Joy Nacion is a Full-stack web developer with 2+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="" />
        <meta name="theme-color" content="#d580ff" />
      </Head>

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
