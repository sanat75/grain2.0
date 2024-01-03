import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Header from "@/components/Navigation/Header";
import type { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Grainanalytics",
  description:
    "Grain Analytics is a data and analytics consulting firm that helps organizations use data to make better decisions. We work with companies to build data-driven cultures, develop data strategies, and create data products.",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
