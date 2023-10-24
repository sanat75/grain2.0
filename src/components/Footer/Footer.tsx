import {
  Globe,
  Linkedin,
  LocateFixedIcon,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-secondary text-white mt-10 px-4 md:px-0">
        <div className=" px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl  flex gap-x-2  uppercase  mb-2  font-main font-semi-bold items-center cursor-pointer">
                Grain Analytics
              </h1>
              <p className="text-sm leading-relaxed">
                Revitalizing Data Insights with Innovation.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-sm md:text-base leading-relaxed">
                <li className="flex items-center mb-2  text-sm">
                  <Phone className="mr-2  text-sm" />
                  +1 (647) 819-6399
                </li>
                <li className="flex items-center mb-2  text-sm">
                  <Mail className="mr-2  text-sm" />
                  hsingh@grainanalytics.ca
                </li>
                <li className="flex items-center  text-sm">
                  <LocateFixedIcon className="mr-2  text-sm" />
                  Suite 2902, 33 Elm Drive, Mississauga, Ontario, L5B 4M2
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <div className="flex gap-4">
                <Link
                  className="cursor-pointer"
                  href="https://twitter.com/_Harsh_raghav_"
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://harshraghav.tech"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Globe />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 flex justify-center items-center bg-gradient-emerald text-white shadow-light-shadow text-center">
        <p className="text-sm ">
          &copy; 2023 Grain Analytics. All Rights Reserved by Grain Analytics
          Software Pvt Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
