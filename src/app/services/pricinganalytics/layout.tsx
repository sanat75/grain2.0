import Footer from "@/components/Footer/Footer";
import Seprator from "@/components/Landing/Seprator";
import Header from "@/components/Navigation/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Seprator />
      <Footer />
    </>
  );
};

export default layout;
