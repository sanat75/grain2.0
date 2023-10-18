"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { buttonVariants } from "../ui/button";
import Wrapper from "../Container/Wrapper";

const Header = () => {
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
    scrolled ? "bg-primary text-white" : "text-white"
  }`;

  return (
    <nav className={headerClasses}>
      <div className="md:px-10 px-2.5 ">
        <Wrapper>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex z-40 font-semibold">
              <span>GRAIN ANALYTICS.</span>
            </Link>

            <div className="hidden items-center space-x-2 sm:flex">
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Managed Analytics
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Services
              </Link>
              <Link
                href="/dna"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Our DNA
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                About
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
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
