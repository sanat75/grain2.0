"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
interface ScreenTextProps {
  screen: {
    heading: string;
    description: string;
    mobile_img: string;
  };
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
  i: number;
}
const ScreenText = ({ screen, setCurrentImg, i }: ScreenTextProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e: { isIntersecting: any }[]) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
  });

  return (
    <div
      className={`screen-text  ${showAnimation ? "text-visible" : ""}  `}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <Image
              width={100}
              height={100}
              src={screen.mobile_img}
              alt=""
              className="mobile-screen-image"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
