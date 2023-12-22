"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                We are a team of passionate people whose goal is to improve
                everyone's life through disruptive products.
              </p>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap gap-16 ">
            <TeamCard
              name="Harshdeep Singh"
              profession="Masters in Management Analytics- Founder & Principal Consultant"
              imageSrc="/assets/images/team/harsh.jpg"
            />
            <TeamCard
              name="⁠Mikhail Nediak"
              profession="PhD in Operations Research & Distinguished Professor of Operations Management- Principal Consultant              "
              imageSrc="/assets/images/team/images1.jpg"
            />
            <TeamCard
              name="Fraser Gray Smith"
              profession="MIB, MSc- Analytics & Data Science Advisor"
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
              imageSrc="/assets/images/team/me.jpg"
            />
            <TeamCard
              name="Arunim Chaudhary"
              profession="Technical Consultant & Software Developer"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-52-19.jpg"
            />

            <TeamCard
              name="Chanddeep Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-53-28.jpg"
            />
            <TeamCard
              name="tanishq Malik"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/Tanishq Malik.jpg"
            />
            <TeamCard
              name="Stavya Singh"
              profession="Analytics Consultant"
              imageSrc="/assets/images/team/PHOTO-2023-11-25-00-51-03.jpg"
            />
          </div>
        </div>
        <Link href={"/about"} className="w-full flex justify-end">
          <Button>Show More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Team;

// const TeamCard = ({
//   imageSrc,
//   name,
//   profession,
// }: {
//   imageSrc: string;
//   name: string;
//   profession: string;
// }) => {
//   return (
//     <>
//       <div className="w-64  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
//         <div className="relative overflow-hidden rounded-lg">
//           <Image
//             width={100}
//             height={100}
//             src={imageSrc}
//             alt=""
//             className="w-full"
//           />
//           <div className="absolute -bottom-5 left-0 w-full text-center">
//             <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
//               <h3 className="text-base font-semibold text-dark dark:text-white">
//                 {name}
//               </h3>
//               <p className="text-xs text-body-color dark:text-dark-6">
//                 {profession}
//               </p>
//               <div>
//                 <span className="absolute bottom-0 left-0">
//                   <svg
//                     width={61}
//                     height={30}
//                     viewBox="0 0 61 30"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx={16}
//                       cy={45}
//                       r={45}
//                       fill="#13C296"
//                       fillOpacity="0.11"
//                     />
//                   </svg>
//                 </span>
//                 <span className="absolute right-0 top-0">
//                   <svg
//                     width={20}
//                     height={25}
//                     viewBox="0 0 20 25"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx="0.706257"
//                       cy="24.3533"
//                       r="0.646687"
//                       transform="rotate(-90 0.706257 24.3533)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="6.39669"
//                       cy="24.3533"
//                       r="0.646687"
//                       transform="rotate(-90 6.39669 24.3533)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="12.0881"
//                       cy="24.3533"
//                       r="0.646687"
//                       transform="rotate(-90 12.0881 24.3533)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="17.7785"
//                       cy="24.3533"
//                       r="0.646687"
//                       transform="rotate(-90 17.7785 24.3533)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="0.706257"
//                       cy="18.6624"
//                       r="0.646687"
//                       transform="rotate(-90 0.706257 18.6624)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="6.39669"
//                       cy="18.6624"
//                       r="0.646687"
//                       transform="rotate(-90 6.39669 18.6624)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="12.0881"
//                       cy="18.6624"
//                       r="0.646687"
//                       transform="rotate(-90 12.0881 18.6624)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="17.7785"
//                       cy="18.6624"
//                       r="0.646687"
//                       transform="rotate(-90 17.7785 18.6624)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="0.706257"
//                       cy="12.9717"
//                       r="0.646687"
//                       transform="rotate(-90 0.706257 12.9717)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="6.39669"
//                       cy="12.9717"
//                       r="0.646687"
//                       transform="rotate(-90 6.39669 12.9717)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="12.0881"
//                       cy="12.9717"
//                       r="0.646687"
//                       transform="rotate(-90 12.0881 12.9717)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="17.7785"
//                       cy="12.9717"
//                       r="0.646687"
//                       transform="rotate(-90 17.7785 12.9717)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="0.706257"
//                       cy="7.28077"
//                       r="0.646687"
//                       transform="rotate(-90 0.706257 7.28077)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="6.39669"
//                       cy="7.28077"
//                       r="0.646687"
//                       transform="rotate(-90 6.39669 7.28077)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="12.0881"
//                       cy="7.28077"
//                       r="0.646687"
//                       transform="rotate(-90 12.0881 7.28077)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="17.7785"
//                       cy="7.28077"
//                       r="0.646687"
//                       transform="rotate(-90 17.7785 7.28077)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="0.706257"
//                       cy="1.58989"
//                       r="0.646687"
//                       transform="rotate(-90 0.706257 1.58989)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="6.39669"
//                       cy="1.58989"
//                       r="0.646687"
//                       transform="rotate(-90 6.39669 1.58989)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="12.0881"
//                       cy="1.58989"
//                       r="0.646687"
//                       transform="rotate(-90 12.0881 1.58989)"
//                       fill="#3056D3"
//                     />
//                     <circle
//                       cx="17.7785"
//                       cy="1.58989"
//                       r="0.646687"
//                       transform="rotate(-90 17.7785 1.58989)"
//                       fill="#3056D3"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
    <div>
      <div className="w-64 relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded"
          src={imageSrc}
          alt="Person"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-5 text-xs text-gray-800">{profession}</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
