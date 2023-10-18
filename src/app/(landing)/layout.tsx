import Wrapper from "@/components/Container/Wrapper";
import Brands from "@/components/Landing/Brands";
import CaseStudy from "@/components/Landing/CaseStudy";
import Customer from "@/components/Landing/Services/Customer";
import Operational from "@/components/Landing/Services/Operational";
import WhatWeDo from "@/components/Landing/WhatWeDo";
import WhoWeAre from "@/components/Landing/WhoWeAre";
import Header from "@/components/Navigation/Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-screen h-[600px] md:h-screen">
        <Header />
        {children}
      </div>

      <WhoWeAre />
      <Brands />

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        What We Do
      </h1>
      <WhatWeDo />
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        Our DNA
      </h1>
      <Wrapper>
        <Customer />
      </Wrapper>
      <Wrapper className="pt-10">
        <Operational />
      </Wrapper>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        Spotlight: Data-driven Client Stories
      </h1>

      <CaseStudy />
    </>
  );
};

export default LandingLayout;
