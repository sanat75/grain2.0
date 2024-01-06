"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Wrapper from "../Container/Wrapper";
import { buttonVariants } from "../ui/button";
import MobileNavigation from "./MobileNavigation";
import { components, ListItem } from "./Navigation";

const Header = ({ TextColor }: { TextColor: string }) => {
  // State to track whether the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      // User has scrolled, update the state
      setScrolled(true);
    } else {
      // User is at the top of the page, reset the state
      setScrolled(false);
    }
  };

  // Add an event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the header classes based on the scroll state
  const headerClasses = `fixed h-14 inset-x-0 top-0 z-30 w-full transition-all ${
    scrolled ? "bg-gradient-emerald text-white" : `text-${TextColor}`
  }`;

  return (
    <nav className={headerClasses}>
      <div className="md:px-10 px-2.5 ">
        <Wrapper>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex z-40 font-semibold">
              <span>GRAIN ANALYTICS.</span>
            </Link>
            <MobileNavigation />
            <div className="hidden items-center space-x-2 sm:flex font-bold">
              <NavigationMenu>
                <NavigationMenuItem className="list-none">
                  <NavigationMenuTrigger className="bg-transparent ">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Managed Analytics
              </Link>

              <Link
                href="/dna"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Our DNA
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                About
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Contact US
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
};

export default Header;
