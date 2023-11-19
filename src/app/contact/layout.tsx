import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
