import Head from "next/head";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="p-2 font-roboto-mono">
      <Head>
        <title>Abdullah Siddiqui - Software Engineer</title>
        <meta
          name="description"
          content="Software developer portfolio using Next.js & tailwind CSS."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Experiences />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
