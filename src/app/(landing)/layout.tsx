import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Header from "@/components/Navigation/Header";
import Head from "next/head";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Grainanalytics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative w-screen h-[600px] md:h-screen overflow-hidden">
        <Header />
        {children}
      </div>
      <Home />
      <Footer />
    </>
  );
};

export default LandingLayout;
