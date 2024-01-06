import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header TextColor="black" />
      {children}
      <Footer />
    </>
  );
};

export default layout;
