import Wrapper from "@/components/Container/Wrapper";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Landing/Brands";
import CaseStudy from "@/components/Landing/CaseStudy";
import OurDNA from "@/components/Landing/OurDNA";
import DNATimeLine from "@/components/Landing/Services/DNATimeLine";
import TimeLine from "@/components/Landing/Services/TimeLine";
import Studies from "@/components/Landing/Studies";
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
      <Brands />

      <WhoWeAre />

      {/* <WhatWeDo /> */}

      {/* <OurDNA /> */}
      <div className="bg-gray-100">
        <div className=" md:p-10 py-10 px-3 text-center">
          <h1 className="text-xl font-extrabold  text-primary ">
            LET&apos;S TAP INTO YOUR DATA
          </h1>
          <p className="text-sm text-gray-600">
            Our approach starts with understanding your data evolution stage.
          </p>
        </div>
        <TimeLine />
      </div>
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        YOUR ANALYTICS JOURNEY BEGINS HERE
      </h1> */}
      {/* <DNATimeLine /> */}
      <h1 className="uppercase block text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        Spotlight: Data-driven Client Stories
      </h1>
      <CaseStudy />
      <h1 className="uppercase block text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        Spotlight: Data-driven Client Stories
      </h1>
      <Studies />
      <Footer />
    </>
  );
};

export default LandingLayout;
