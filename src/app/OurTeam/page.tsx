"use client";
import React from "react";
import Markdown from 'react-markdown'
import {markdownstr} from "../markdown/markdown"


const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              {/* <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">
                Our Team
              </h1> */}
              <h1 className="text-xl font-extrabold text-black uppercase mb-2">
              Business Advisories
</h1>


              <p className="text-base text-body-color dark:text-dark-6">
                Our team includes some of the most experienced data scientists,
                modelling experts, statisticians and marketing experts in North
                America.
                


              </p>
             
            </div>
          </div>
        </div>
        
            
          
      
         <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap gap-8 md:gap-16">

            {/* <TeamCard
              name="Harshdeep Singh (MMA)"
              profession="Founder & Principal Consultant"
              imageSrc="/assets/images/team/harsh.jpg"
            /> */}
            <TeamCard
              name="Yuri Levin"
              profession="Professor of Management Analytics and Senior Advisor"
              imageSrc="/assets/images/team/images3.jpeg"
            />
            <TeamCard
              name="⁠Mikhail Nediak (PHD)"
              profession="Professor of Management Analytics and Principal Consultant"
              imageSrc="/assets/images/team/images1.jpg"
            />
            <TeamCard
              name="Fraser Gray Smith (MIB, MSc)"
              profession="Analytics & Data Science Advisor"
              imageSrc="/assets/images/team/john.jpeg"
            />
            <TeamCard
              name="Joe Quaresima"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/joe2.jpeg"
            />
            <TeamCard
              name="Michael Tang"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/images2.jpeg"
            />
            {/* <TeamCard
              name="Harsh Raghav"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/hraghav.jpeg"
            />
            <TeamCard
              name="Lokesh Verma"
              profession="Senior Design Consultant and Advisor"
              imageSrc="/assets/images/team/design.jpeg"
            />

            <TeamCard
              name="Chandeep Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
            />
            <TeamCard
              name="Tanishq Malik"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/Tanishq Malik.jpg"
            />
            <TeamCard
              name="Stavya Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
            />
            <TeamCard
              name="Arunim Chaudhary"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg" */}
            
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              {/* <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">
                Our Team
              </h1> */}
              <h1 className="text-xl font-extrabold text-black uppercase mb-2">
              Other Members
</h1>


              <p className="text-base text-body-color dark:text-dark-6">
                Our team includes some of the most experienced data scientists,
                modelling experts, statisticians and marketing experts in North
                America.
                


              </p>
             
            </div>
          </div>
        </div>
        
            
          
      

        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap gap-8 md:gap-16">
          
            {/* <TeamCard
              name="Harshdeep Singh (MMA)"
              profession="Founder & Principal Consultant"
              imageSrc="/assets/images/team/harsh.jpg"
            /> */}
            {/* <TeamCard
              name="Yuri Levin"
              profession="Professor of Management Analytics and Senior Advisor"
              imageSrc="/assets/images/team/images3.jpeg"
            />
            <TeamCard
              name="⁠Mikhail Nediak (PHD)"
              profession="Professor of Management Analytics and Principal Consultant"
              imageSrc="/assets/images/team/images1.jpg"
            />
            <TeamCard
              name="Fraser Gray Smith (MIB, MSc)"
              profession="Analytics & Data Science Advisor"
              imageSrc="/assets/images/team/john.jpeg"
            />
            <TeamCard
              name="Joe Quaresima"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/joe2.jpeg"
            />
            <TeamCard
              name="Michael Tang"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/images2.jpeg"
            />
            <TeamCard
              name="Harsh Raghav"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/hraghav.jpeg"
            /> */}
            <TeamCard
              name="Lokesh Verma"
              profession="Senior Design Consultant and Advisor"
              imageSrc="/assets/images/team/design.jpeg"
            />

            <TeamCard
              name="Chandeep Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
            />
            <TeamCard
              name="Tanishq Malik"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/Tanishq Malik.jpg"
            />
            <TeamCard
              name="Stavya Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
            />
            <TeamCard
              name="Arunim Chaudhary"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg"
              />
            
          </div>
        </div>
      </div>
      {/* <div>
      <Markdown
      // remarkPlugins={[remarkGfm, remarkMarkmap]}
      >{markdownstr}</Markdown>
      </div> */}
     
      
     
      
      
            
          
      


        

      
      
            
            
            
           
        
      
    </section>
    
  );
};

export default Team;

// export const TeamCard = ({
//   imageSrc,
//   name,
//   profession,
// }: {
//   imageSrc: string;
//   name: string;
//   profession: string;
// }) => {
//   return (
//     <div>
//       <div className="w-48 md:w-64 relative pb-56 mb-4 rounded shadow lg:pb-64">
//         <img
//           className="absolute object-cover w-full h-full rounded"
//           src={imageSrc}
//           alt="Person"
//         />
//       </div>
//       <div className="flex flex-col sm:text-center">
//         <p className="text-sm font-semibold">{name}</p>
//         <p className="mb-5 text-xs text-gray-800">{profession}</p>
//       </div>
//     </div>
//   );
// };
// 
export const TeamCard = ({
  imageSrc,
  name,
  profession,
}: {
  imageSrc: string;
  name: string;
  profession: string;
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 lg:mb-0">
      <div className="relative pb-64 mb-4 rounded shadow lg:pb-80">
        <img
          className="absolute object-cover w-full h-full rounded"
          src={imageSrc}
          alt="Person"
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-800">{profession}</p>
      </div>
    </div>
  );
};
