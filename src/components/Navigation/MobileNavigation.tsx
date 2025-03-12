"use client";

import { useEffect, useState } from "react";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

import { components, ListItem } from "./Navigation";

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <>
        {isOpen ? (
          <X
            onClick={toggleOpen}
            className={`relative z-50 h-5 w-5 text-white`}
          />
        ) : (
          <Menu onClick={toggleOpen} className={`relative z-50 h-5 w-5`} />
        )}
      </>

      {isOpen ? (
        <div className="fixed  animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-gray-900/95 text-white shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            <>
              <NavigationMenu>
                <NavigationMenuItem className="list-none">
                  {/* <NavigationMenuTrigger className="flex items-center w-full font-semibold m-0 p-o bg-transparent">
                    Services
                  </NavigationMenuTrigger> */}
                  <NavigationMenuContent>
                    <ul className="grid w-[370px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          onClick={() => closeOnCurrent(component.href)}
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {/* {component.description} */}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              {/* <li>
                <Link
                  className="flex items-center w-full font-semibold"
                  href="/services/pricinganalytics"
                >
                  Customer Analytics
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => closeOnCurrent("/services/pricinganalytics")}
                  className="flex items-center w-full font-semibold"
                  href="/services/customeranalytics"
                >
                  Pricing Analytics
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => closeOnCurrent("/services/retailanalytics")}
                  className="flex items-center w-full font-semibold"
                  href="/services/retailanalytics"
                >
                  Retail Analytics
                </Link>
              </li> */}

              {/* <li>
                <Link
                  onClick={() => closeOnCurrent("#sucess-stories")}
                  className="flex items-center w-full font-semibold"
                  href="#sucess-stories"
                  scroll={true}
                >
                  Success Stories
                </Link>
              </li> */}
            </>
            <>
               
              <li>
                <Link
                  className="flex items-center w-full font-semibold text-primary"
                  href={"https://calendly.com/grainanalytics1/30min"}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </li>
            </>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavigation;
