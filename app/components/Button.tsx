import React, { useEffect } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { PiStarFour } from "react-icons/pi";

const CustomButton: React.FC = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    const tl = gsap.timeline({ paused: true });

    tl.to(stars, {
      opacity: 1,
      translateX: () => Math.random() * 50 - 25,
      translateY: () => Math.random() * 50 - 25,
      scale: 1,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.1,
    });

    document
      .querySelector(".button-wrapper")
      ?.addEventListener("mouseenter", () => {
        tl.play();
      });

    document
      .querySelector(".button-wrapper")
      ?.addEventListener("mouseleave", () => {
        tl.reverse();
      });
  }, []);

  return (
    <div className="relative bottom-40 flex items-center justify-center">
      <a
        href="#"
        className="button-wrapper relative transition-transform duration-400 hover:rotate-[-9deg] hover:scale-110">
        <div className="peer relative z-10 bg-white py-5 px-8 rounded-full border-3 border-black text-black flex items-center overflow-hidden">
          <span className="font-medium z-10 flex items-center justify-center gap-1">
            Try Ovadrive <GoArrowUpRight />
          </span>
        </div>

        {/* Reflection shapes */}
        <div className="absolute py-5 px-8 rounded-full border-3 hidden border-black text-black z-0 peer-hover:block peer-hover:-translate-x-2 peer-hover:translate-y-2 overflow-hidden inset-0 w-full h-full bg-black m-auto transition-left duration-600 ease-[.2,.5,.2,1.2]"></div>

        {/* Geometric shapes */}
        <PiStarFour className="star font-bold absolute top-[5%] right-0 text-white w-[20%] z-50 opacity-0" />
        <PiStarFour className="star font-bold absolute top-0 right-[40%] text-white w-[20%] z-50 opacity-0" />
        <PiStarFour className="star font-bold absolute top-[100%] left-[40%] text-white w-[40%] z-50 opacity-0" />
        <PiStarFour className="star font-bold absolute top-[100%] right-[90%] text-white w-[40%] z-50 opacity-0" />
        <PiStarFour className="star font-bold absolute top-0 left-[10%] text-white w-[40%] z-50 opacity-0" />
        {/* <Image
          src={img1}
          alt=""
          className="star absolute bottom-[90%] left-[90%] text-white w-[40%] z-50 opacity-0"
        />
        <Image
          src={img1}
          alt=""
          className="star absolute bottom-[90%] left-[90%] text-white w-[40%] z-50 opacity-0"
        /> */}

        {/* Gradient shadow */}
        {/* <div className="absolute inset-0 w-full h-full bg-gray-800 py-5 px-12 rounded-full border-3 border-black z-[-1] transition-transform duration-300 hover:translate-x-[-0.5rem] hover:translate-y-[0.5rem]"></div> */}
      </a>
    </div>
  );
};

export default CustomButton;
