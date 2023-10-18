import Image from "next/image";

const Brands = () => {
  return (
    <main className="flex overflow-x-scroll  hide-scroll-bar">
      <div className="flex flex-nowrap ">
        <div className="w-64 h-64 flex items-center justify-center  hover:bg-secondary hover:shadow-2xl transition-all border">
          <Image
            src={"/assets/images/grain-client-logos/aldo.svg"}
            alt="aldo"
            width={"100"}
            height={"100"}
            className=" transition ease-in-out "
          />
        </div>
        <div className="w-64 flex items-center justify-center h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/Bell.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/zayo.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/Brookfield.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/canadian-tire.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/Deloitte.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/homesquare.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/Queens.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="   transition ease-in-out  p-2 "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/SportChek.png"}
            alt="aldo"
            width={150}
            height={150}
            className="   transition ease-in-out  p-2 "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/TDbank.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out   "
          />
        </div>
        <div className="w-64 flex items-center justify-center h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/toronto.png"}
            alt="aldo"
            width={150}
            height={150}
            className="   transition ease-in-out  p-2 "
          />
        </div>
        <div className="w-64 flex items-center justify-center   h-64 hover:bg-secondary hover:shadow-2xl transition-all border ">
          <Image
            src={"/assets/images/grain-client-logos/vale.svg"}
            alt="aldo"
            width={150}
            height={150}
            className="  transition ease-in-out  "
          />
        </div>
      </div>
    </main>
  );
};

export default Brands;
