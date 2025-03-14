"use client";
import React from "react";
import {markdownstr} from "../markdown/markdown"


const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="mx-4 md:grid md:grid-cols-6 lg:mx-24">
        <div className="p-4 col-span-2 md:center">
        
   
          <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">Adivsory Board</h1>
          <p className="text-base text-body-color dark:text-dark-6">Our team includes some of the most experienced data scientists, modelling experts, statisticians and marketing experts in North
            America.</p>
        </div>
        <div className="flex flex-col m-4 md:col-span-4 grid md:grid-cols-2  ">
        {/* <TeamCard
              name="Yuri Levin"
              profession="Professor of Management Analytics and Senior Advisor"
              imageSrc="/assets/images/team/images3.jpeg"
              role=""

            />
            <TeamCard
              name="⁠Mikhail Nediak (PHD)"
              profession="Professor of Management Analytics and Principal Consultant"
              imageSrc="/assets/images/team/images1.jpg"
              role=""

            />
            <TeamCard
              name="Anton Ovchinnikov"
              profession="Professor of Management Analytics and Consultant"
              imageSrc="/assets/images/team/Anton.jpeg"
              role=""

            />
            <TeamCard
              name="Fraser Gray Smith (MIB, MSc)"
              profession="Analytics & Data Science Advisor"
              imageSrc="/assets/images/team/john.jpeg"
              role=""

            />
            <TeamCard
              name="Joe Quaresima"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/joe2.jpeg"
              role=""

            />
            <TeamCard
              name="Michael Tang"
              profession="Analytics & Business Advisor"
              imageSrc="/assets/images/team/images2.jpeg"
              role=""
            />
           */}

        </div>
      </div>



      <div className="mx-4 flex-col lg:mx-24">
        {/* <div className="p-4 col-span-1 md:center">       
   
          <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">Our Team</h1>
          <p className="text-base text-body-color dark:text-dark-6">Our team includes some of the most experienced data scientists, modelling experts, statisticians and marketing experts in North
            America.</p>
        </div> */}
        {/* <div className="flex flex-col m-4 md:flex-row"> */}
        
            {/* <OurTeamCard
              name="Lokesh Verma"
              profession="Senior Design Consultant and Advisor"
              imageSrc="/assets/images/team/design.jpeg"
            />

            <OurTeamCard
              name="Chandeep Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
            />
            <OurTeamCard
              name="Tanishq Malik"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/Tanishq Malik.jpg"
            />
            <OurTeamCard
              name="Stavya Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
            />
            <OurTeamCard  
              name="Arunim Chaudhary"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg"/> */}

        {/* </div> */}
      </div>
      

      
    </section>
//     <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               {/* <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">
//                 Our Team
//               </h1> */}
//               <h1 className="text-xl font-extrabold text-black uppercase mb-2">
//               Business Advisories
// </h1>


//               <p className="text-base text-body-color dark:text-dark-6">
//                 Our team includes some of the most experienced data scientists,
//                 modelling experts, statisticians and marketing experts in North
//                 America.
                


//               </p>
             
//             </div>
//           </div>
//         </div>
        
            
          
      
//          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
//           <div className="flex flex-nowrap gap-8 md:gap-16 ">

//             {/* <TeamCard
//               name="Harshdeep Singh (MMA)"
//               profession="Founder & Principal Consultant"
//               imageSrc="/assets/images/team/harsh.jpg"
//             /> */}
            // <TeamCard
            //   name="Yuri Levin"
            //   profession="Professor of Management Analytics and Senior Advisor"
            //   imageSrc="/assets/images/team/images3.jpeg"
            // />
            // <TeamCard
            //   name="⁠Mikhail Nediak (PHD)"
            //   profession="Professor of Management Analytics and Principal Consultant"
            //   imageSrc="/assets/images/team/images1.jpg"
            // />
            // <TeamCard
            //   name="Fraser Gray Smith (MIB, MSc)"
            //   profession="Analytics & Data Science Advisor"
            //   imageSrc="/assets/images/team/john.jpeg"
            // />
            // <TeamCard
            //   name="Joe Quaresima"
            //   profession="Analytics & Business Advisor"
            //   imageSrc="/assets/images/team/joe2.jpeg"
            // />
            // <TeamCard
            //   name="Michael Tang"
            //   profession="Analytics & Business Advisor"
            //   imageSrc="/assets/images/team/images2.jpeg"
            // />
            // {/* <TeamCard
            //   name="Harsh Raghav"
            //   profession="Technical Consultant & Software Developer"
            //   imageSrc="/assets/images/team/hraghav.jpeg"
            // />
            // <TeamCard
            //   name="Lokesh Verma"
            //   profession="Senior Design Consultant and Advisor"
            //   imageSrc="/assets/images/team/design.jpeg"
            // />

            // <TeamCard
            //   name="Chandeep Singh"
            //   profession="Analytics Consultant"
            //   imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
            // />
            // <TeamCard
            //   name="Tanishq Malik"
            //   profession="Analytics Consultant"
            //   imageSrc="/assets/images/team/Tanishq Malik.jpg"
            // />
            // <TeamCard
            //   name="Stavya Singh"
            //   profession="Analytics Consultant"
            //   imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
            // />
            // <TeamCard
            //   name="Arunim Chaudhary"
            //   profession="Technical Consultant & Software Developer"
            //   imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg" */}
            
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               {/* <h1 className="text-xl font-extrabold  text-primary uppercase mb-2">
//                 Our Team
//               </h1> */}
//               <h1 className="text-xl font-extrabold text-black uppercase mb-2">
//               Other Members
// </h1>


//               <p className="text-base text-body-color dark:text-dark-6">
//                 Our team includes some of the most experienced data scientists,
//                 modelling experts, statisticians and marketing experts in North
//                 America.
                


//               </p>
             
//             </div>
//           </div>
//         </div>
        
            
          
      

//         <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
//           <div className="flex flex-nowrap gap-8 md:gap-16">
          
//             {/* <TeamCard
//               name="Harshdeep Singh (MMA)"
//               profession="Founder & Principal Consultant"
//               imageSrc="/assets/images/team/harsh.jpg"
//             /> */}
//             {/* <TeamCard
//               name="Yuri Levin"
//               profession="Professor of Management Analytics and Senior Advisor"
//               imageSrc="/assets/images/team/images3.jpeg"
//             />
//             <TeamCard
//               name="⁠Mikhail Nediak (PHD)"
//               profession="Professor of Management Analytics and Principal Consultant"
//               imageSrc="/assets/images/team/images1.jpg"
//             />
//             <TeamCard
//               name="Fraser Gray Smith (MIB, MSc)"
//               profession="Analytics & Data Science Advisor"
//               imageSrc="/assets/images/team/john.jpeg"
//             />
//             <TeamCard
//               name="Joe Quaresima"
//               profession="Analytics & Business Advisor"
//               imageSrc="/assets/images/team/joe2.jpeg"
//             />
//             <TeamCard
//               name="Michael Tang"
//               profession="Analytics & Business Advisor"
//               imageSrc="/assets/images/team/images2.jpeg"
//             />
//             <TeamCard
//               name="Harsh Raghav"
//               profession="Technical Consultant & Software Developer"
//               imageSrc="/assets/images/team/hraghav.jpeg"
//             /> */}
//             <TeamCard
//               name="Lokesh Verma"
//               profession="Senior Design Consultant and Advisor"
//               imageSrc="/assets/images/team/design.jpeg"
//             />

//             <TeamCard
//               name="Chandeep Singh"
//               profession="Analytics Consultant"
//               imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
//             />
//             <TeamCard
//               name="Tanishq Malik"
//               profession="Analytics Consultant"
//               imageSrc="/assets/images/team/Tanishq Malik.jpg"
//             />
//             <TeamCard
//               name="Stavya Singh"
//               profession="Analytics Consultant"
//               imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
//             />
//             <TeamCard
//               name="Arunim Chaudhary"
//               profession="Technical Consultant & Software Developer"
//               imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg"
//               />
            
//           </div>
//         </div>
//       </div>
//       {/* <div>
//       <Markdown
//       // remarkPlugins={[remarkGfm, remarkMarkmap]}
//       >{markdownstr}</Markdown>
//       </div> */}     
            
           
        
      
    // </section>
    
  );
};

export default Team;


// export const TeamCard = ({
//   imageSrc,
//   name,
//   profession,
//   role,
// }: {
//   imageSrc: string;
//   name: string;
//   profession: string;
//   role:string;
// }) => {
//   return (
//     // <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 lg:mb-0">
//     //   <div className="relative pb-64 mb-4 rounded shadow lg:pb-80">
//     //     <img
//     //       className="absolute object-cover w-full h-full rounded"
//     //       src={imageSrc}
//     //       alt="Person"
//     //     />
//     //   </div>
//     //   <div className="flex flex-col items-start">
//     //     <p className="text-sm font-semibold">{name}</p>
//     //     <p className="text-xs text-gray-800">{profession}</p>
//     //   </div>
//     // </div>
//     <div className="py-4 w-full grid grid-cols-3 md:grid md:grid-cols-1  md:w-5/6  md:h-full md:px-2 md:py-2 md:mb-8 lg:mb-0 md:my-2">
//     <div className="grid-col-span-1 md:relative md:pb-64 md:mb-4 md:rounded md:shadow  lg:pb-56 ">
      
//       <img
//         className="md:absolute md:object-cover md:w-full md:h-full rounded-full md:rounded"
//         src={imageSrc}
//         alt="Person"
//       />
//     </div>
//     <div className=" px-2 col-span-2 flex flex-col justify-items-center justify-center md:items-start">
//       <p className="text-sm md:text-lg font-semibold">{name}</p>
//       <p className="text-sm md:text-base text-gray-800">{profession}</p>
//       <p className="text-xs text-gray-800 py-2 hidden md:block">{role}</p>
//     </div>
//   </div>
//   //   <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 lg:mb-0">
//   //   <div className="relative pb-64 mb-4 rounded shadow lg:pb-80">
//   //     <img
//   //       className=" "
//   //       src={imageSrc}
//   //       alt="Person"
//   //     />
//   //   </div>
//   //   <div className="flex flex-col items-start">
//   //     <p className="text-sm font-semibold">{name}</p>
//   //     <p className="text-xs text-gray-800">{profession}</p>
//   //   </div>
//   // </div>
//   );
// };


// export const OurTeamCard = ({
//   imageSrc,
//   name,
//   profession,
// }: {
//   imageSrc: string;
//   name: string;
//   profession: string;
// }) => {
//   return (
//     // <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 lg:mb-0">
//     //   <div className="relative pb-64 mb-4 rounded shadow lg:pb-80">
//     //     <img
//     //       className="absolute object-cover w-full h-full rounded"
//     //       src={imageSrc}
//     //       alt="Person"
//     //     />
//     //   </div>
//     //   <div className="flex flex-col items-start">
//     //     <p className="text-sm font-semibold">{name}</p>
//     //     <p className="text-xs text-gray-800">{profession}</p>
//     //   </div>
//     // </div>
//     <div className="w-full md:w-1/3  md:h-full px-2 mb-8 lg:mb-0 md:my-4 md:m-2">
//     <div className="relative pb-64 mb-4  lg:pb-56 ">
//       <img
//         className="absolute object-cover w-full h-full rounded md:rounded-full"
//         src={imageSrc}
//         alt="Person"
//       />
//     </div>
//     <div className="flex flex-col">
//       <div className="md:flex items-center justify-center h-full w-full"><p className="text-sm font-semibold ">{name}</p></div>
//       <div className="md:flex items-center justify-center h-full w-full"><p className="text-xs text-gray-800 ">{profession}</p></div>
      
      
//     </div>
//   </div>

//   );
// };
