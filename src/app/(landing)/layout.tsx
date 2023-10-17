import Wrapper from "@/components/Container/Wrapper";
import Brands from "@/components/Landing/Brands";
import CaseStudy from "@/components/Landing/CaseStudy";
import Customer from "@/components/Landing/Services/Customer";
import Operational from "@/components/Landing/Services/Operational";
import WhoWeAre from "@/components/Landing/WhoWeAre";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper> {children}</Wrapper>

      <Brands />
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
        Who We Are as a Company:
      </h1>
      <Wrapper>
        <WhoWeAre />
      </Wrapper>
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
