import Wrapper from "@/components/Container/Wrapper";
import Brands from "@/components/Landing/Brands";
import Customer from "@/components/Landing/Services/Customer";
import Operational from "@/components/Landing/Services/Operational";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Brands />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-center text-primary p-20">
        Our DNA
      </h1>
      <Wrapper>
        <Customer />
      </Wrapper>
      <Wrapper className="pt-10">
        <Operational />
      </Wrapper>
    </>
  );
};

export default LandingLayout;
