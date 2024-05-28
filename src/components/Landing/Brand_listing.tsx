
import React from "react";

const brands = [
    "/assets/images/grain-client-logos/KPMG.svg",
    "/assets/images/grain-client-logos/Allstream.svg",
    "/assets/images/grain-client-logos/aldo.svg",
    "/assets/images/grain-client-logos/Bell.svg",
    "/assets/images/grain-client-logos/zayo.svg",
    "/assets/images/grain-client-logos/Brookfield.svg",
    "/assets/images/grain-client-logos/canadian-tire.svg",
    "/assets/images/grain-client-logos/Deloitte.svg",
    "/assets/images/grain-client-logos/homesquare.svg",
    "/assets/images/grain-client-logos/Queens.svg",
    "/assets/images/grain-client-logos/SportChek.png",
    "/assets/images/grain-client-logos/TDbank.svg",
    "/assets/images/grain-client-logos/toronto.png",
    "/assets/images/grain-client-logos/vale.svg",
    "/assets/images/grain-client-logos/smith.png",
  ];

  const Brand_listing=()=>{

    return (
        <div className="flex flex-col  items-center p-6 mt-10">
            
        <div className="font-bold text-2xl mb-6">
            Our Clients
        </div>
        <div className="flex flex-row flex-wrap p-4 justify-center">
            {brands.map((b,index)=>(
                <div>
                    <Brand_card src={b}></Brand_card>
                </div>
            )

            )}


        </div>
        </div>

    )

  };

  const Brand_card=({src})=>{
    return(
    <div>
        <div className="">
            <img src={src} height={80} width={80} className="m-8"></img>
        </div>
    </div>)
    
    
  }

  export default Brand_listing;