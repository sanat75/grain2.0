import React from "react";

import Footer from "@/components/Footer/Footer";
import Seprator from "@/components/Landing/Seprator";
import Header from "@/components/Navigation/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header TextColor="black" />
      <main>{children}</main>
      <Seprator />
      <Footer />
    </>
  );
};

export default layout;
