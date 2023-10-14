import Wrapper from "@/components/Container/Wrapper";
import Brands from "@/components/Landing/Brands";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Brands />
    </>
  );
};

export default LandingLayout;
