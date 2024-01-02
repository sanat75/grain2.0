import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Header from "@/components/Navigation/Header";

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
