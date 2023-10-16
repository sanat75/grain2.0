import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Wrapper from "../Container/Wrapper";

const Header = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <div className="md:px-10 px-2.5">
        <Wrapper>
          <div className="flex h-14 items-center justify-between border-b ">
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
