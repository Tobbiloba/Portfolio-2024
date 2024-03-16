"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import Magnetic from "../stickyCursor/magnetic";
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");
export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });

    tl.to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  }, []);

  return (
    <div className=" h-fit px-[1rem] w-[100%] relative major text-light">
      <div className="min-h-[40rem] h-[80vh] w-[100%] font_apoc flex flex-col items-center  px-2">
        <div className="w-[100%] flex-1 flex lg:text-[7rem] flex-col items-center justify-center">
          <h1 className="text-4xl">Welcome</h1>
        </div>

        <h1 className="h_title mt-8 mb-[10vh] lg:mb-0 lg:top-4 flex w-full flex-col lg:items-center justify- lg:text-center text-[15vw] font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
          <Magnetic>
            <div
              ref={heroInfiniteRef}
              className="font_aeonik flex justify-center text-[17px] items-center bottom-[-25vw] left-[35%] ml-10 -mr-10 w-72 overflow-hidden rounded-full border border-primary font-normal uppercase opacity-0 lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] h-12 lg:h-14 lg:w-[16vw] lg:leading-10 "
            >
              <marquee direction="left" behavior="scroll" scrollamount="5">
                <div className="group mont flex gap-8 h-full cursor-pointer items-center whitespace-nowrap">
                  <span className="group-hover:pause animate-loopL">
                    Frontend Developer &nbsp;
                  </span>
                  <img
                    src="/right-arrow.png"
                    alt="arrow"
                    className="w-6 lg:w-8 -rotate-45 h-6 lg:h-8"
                  />
                  <span className="group-hover:pause animate-loopL">
                    Backend Developer &nbsp;
                  </span>
                  <img
                    src="/right-arrow.png"
                    alt="arrow"
                    className="w-6 lg:w-8 -rotate-45 h-6 lg:h-8"
                  />
                  <span className="group-hover:pause animate-loopL">
                    Mobile Developer &nbsp;
                  </span>
                  <img
                    src="/right-arrow.png"
                    alt="arrow"
                    className="w-6 lg:w-8 -rotate-45 h-6 lg:h-8"
                  />
                </div>
              </marquee>
            </div>
          </Magnetic>
        </h1>
      </div>
    </div>
  );
};
