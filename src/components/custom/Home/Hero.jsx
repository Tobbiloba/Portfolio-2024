"use client";
import React, { useEffect, useRef } from "react";
// import { FlowerLogo } from '../../components/Icons';
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import Magnetic from "../stickyCursor/magnetic";
// import TextScrollAnimation from "../text animation/TextAnimation";
// import Image from 'next/image';
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");
// import './home.css'
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
        {/* <h1 className="h_title  relative w-full text- text-[3.5rem] font-light uppercase leading-[4rem] lg:leading-[100%] lg:text-[7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block translate-y-full pb-1.5 pt-6 will-change-transform ">
              GR33<span className="madimi text-primary">T</span>1<span className="madimi text-primary">N</span>G$!&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]"></span>
          </span>
          <br />
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block flex translate-y-full pb-1.5 pt-6 will-change-transform">
              <span className="hidden lg:flex">&nbsp;</span>W3<span className="madimi text-primary">LC</span>0M<span className="madimi text-primary"></span>3
            </span>
          </span>
          <br className="flex lg:hidden"/>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block flex translate-y-full pb-1.5 pt-6 will-change-transform">
            <span className="hidden lg:flex">&nbsp;</span><span className="madimi text-primary">T</span>0
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block flex  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;<span className="">M</span><span className="madimi text-primary">Y</span>
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block flex translate-y-full pb-1.5 pt-6 will-change-transform">
            <span className="hidden lg:flex">&nbsp;</span><span className="madimi text-primary">PE</span>r$0<span className="madimi text-primary">n</span>a<span className="madimi">L</span>
            </span>
          </span>
          <br />
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block flex translate-y-full pb-1.5 pt-6 will-change-transform">
            <span className="hidden lg:flex">&nbsp;</span>p0r<span className="madimi text-primary">TF</span>0<span className="madimi text-primary">L</span>10
            </span>
          </span>


        </h1> */}
       
       <div className="w-[100%] flex-1 flex lg:text-[7rem] flex-col items-center justify-center">
        {/* <span className=" text-center ">
              <span className="hidden lg:flex">&nbsp;</span>W3<span className="madimi">LC</span>0M3 <span className="madimi">T</span>0 M<span className="madimi">Y</span> <span className="madimi">P</span>3RS0NA<span className="madimi">L</span>
               <br /> P0R<span className="madimi">T</span>F0<span className="madimi">L</span>1O
            </span> */}
            
          <h1 className="text-4xl">Welcome</h1>
         </div>

        <h1 className="h_title mt-8 top-4 flex w-full flex-col lg:items-center justify- lg:text-center text-[15vw] font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
          <Magnetic>
            <div
              ref={heroInfiniteRef}
              className="font_aeonik flex justify-center text-[15px] items-center bottom-[-25vw] left-[35%] ml-10 -mr-10 w-72 overflow-hidden rounded-full border border-primary font-normal uppercase opacity-0 lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] h-10 lg:h-14 lg:w-[16vw] lg:leading-10 "
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
