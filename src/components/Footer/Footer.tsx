import { SendIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <>
      <footer className="bg-black/80 text-white mt-10 px-2 md:px-0 ">
        <div className=" px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-2/5">
              <h1 className="text-xl  text-primary font-extrabold  flex gap-x-2  uppercase  font-main font-semi-bold items-center cursor-pointer">
                Grain Analytics
              </h1>
              <p className="text-sm leading-relaxed my-3">
                Headquartered in Toronto, Canada.
              </p>
              <p className="text-sm">
                Grain Analytics inc is a data company that guides clients to
                achieve the promise of todays technological revolution. We
                accelerate clients to their full analytical potential by
                understanding the intricacies of their businesses, creating
                solid data foundations, and deploying custom solutions.
              </p>
              <p className="text-sm leading-relaxed my-3 font-semibold">
                Uncover the true value of your data.
              </p>
              <div>
                <Link
                  target="_blank"
                  href={"https://calendly.com/grainanalytics1/30min"}
                >
                  <Button className="bg-primary text-white px-8 py-2  mt-4">
                    Get in touch <SendIcon className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col ">
              <div className="w-full flex flex-col md:flex-row gap-4">
                {/* <div className="w-full md:w-1/3">
                  <h2 className="text-lg font-semibold mb-4 text-primary">
                    EXPERTISE
                  </h2>
                  <ul className="text-sm md:text-base leading-relaxed flex flex-col gap-3">
                    <li className="flex items-center text-sm">
                      Customer Analytics
                    </li>
                    <li className="flex items-center text-sm">
                      Supply Chain Analytics
                    </li>
                    <li className="flex items-center text-sm">
                      Pricing Analytics
                    </li>
                  </ul>
                </div> */}
                {/* <div className="w-full md:w-1/3">
                  <h2 className="text-lg font-semibold mb-4 text-primary">
                    PARTNERS
                  </h2>
                  <ul className="text-sm md:text-base leading-relaxed flex flex-col gap-3">
                    <li className="flex items-center text-sm">Bell</li>
                    <li className="flex items-center text-sm">TD Bank</li>
                    <li className="flex items-center text-sm">ALDO</li>
                    <li className="flex items-center text-sm">Canadian Tire</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3">
                  <h2 className="text-lg font-semibold mb-4 text-primary">
                    MORE INFORMATION
                  </h2>
                  <ul className="text-sm md:text-base leading-relaxed flex flex-col gap-3">
                    <li className="flex items-center text-sm">
                      Privacy Policy
                    </li>
                    <li className="flex items-center text-sm">
                      Terms and Conditions
                    </li>
                    <li className="flex items-center text-sm">
                      Acceptable use of policy
                    </li>
                    <li className="flex items-center text-sm">About Us</li>
                    <li className="flex items-center text-sm">FAQs</li>
                    <li className="flex items-center text-sm">Contact Us</li>
                  </ul>
                </div> */}
              </div>
              {/* <div className="w-full h-[2px] bg-primary my-10" /> */}

              {/* <div>
                <h1 className="text-lg text-primary-secondary font-semibold mb-4">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h1>
                <Input
                  className="w-full md:w-3/5 rounded-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-secondary focus:border-transparent"
                  placeholder="Enter your email address"
                />
                <Button className="bg-primary-secondary text-white px-8 py-2  mt-4">
                  Subscribe
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="w-full h-10 flex justify-center items-center bg-primary-secondary text-white shadow-light-shadow text-center">
        <p className="text-sm ">
          &copy; 2023 Grain Analytics. All Rights Reserved by Grain Analytics
          Software Pvt Ltd
        </p>
      </div> */}
    </>
  );
};

export default Footer;
