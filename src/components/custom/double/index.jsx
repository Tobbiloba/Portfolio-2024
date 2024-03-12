"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import Magnetic from "../stickyCursor/magnetic";
import { useMediaQuery } from 'react-responsive';
const Double = ({ projects, reversed }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    firstImage.current.style.width = isMobile ? `100%` : `${firstImagePercent}%`;
    secondImage.current.style.width = isMobile ? `100%` : `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };
  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={`${styles.double} flex-col lg:flex-row lg:gap-[3rem]`}
    >
      <div ref={firstImage} className={`${styles.imageContainer} mt-8 lg:mt-0`}>
        <div className={`${styles.stretchyWrapper} relative`}>
          <Image
            src={`/${projects[0].src}`}
            fill={true}
            alt={"image"}
            className="h-[20rem]"
          />
          {
            projects[0].url &&
          <div className="w-14 h-14 cursor-pointer bg-white absolute flex items-center justify-center right-0 -bottom-4 rounded-full lg:-right-4">
            <a target="_blank" href={projects[0].url} className=" items-center justify-center px-4">
              <Image
                src={`/right-arrow.png`}
                // fill={true}
                alt={"image"}
                width={32}
                height={20}
                className=" -rotate-45"
              />
            </a>
          </div>}
          {
            projects[0].github && 
          <div className="w-14 h-14 cursor-pointer bg-white absolute flex items-center justify-center right-16 -bottom-4 rounded-full lg:right-14">
            <a href={projects[0].github} target="_blank" className=" items-center justify-center">
              <Image
                src={`https://cdn-icons-png.flaticon.com/128/270/270798.png`}
                // fill={true}
                alt={"image"}
                width={32}
                height={20}
                className=""
              />
            </a>
          </div> }
        </div>
        <div className={`${styles.body} py-[1rem] px-[1rem] lg:px-[2rem]`}>
          <h3 className="text- mt-4 text-center text-2xl major text-white">
            {projects[0].name}
          </h3>
          <p className="lg:text-center mt-2 major text-slate-300 text-[14px]">
            {projects[0].description}
          </p>
          <div className="flex flex-col lg:flex-row flex-wrap gap-x-12 gap-y-4 mt-6 text-white lg:text-center text-[16px]">
            <p className="gap-4 lg:gap-8 flex  flex-col lg:flex-row">
              Role: <span className="major">{projects[0].role}</span>
            </p>
            <p className="gap-4 lg:gap-8 flex  flex-col lg:flex-row">
              Type:
              <span className="major">
                {projects[0].personal ? "Personal Project" : "Work "}
              </span>
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-fit">
              <p className="text-white">Tools:</p>
              <div className="flex flex-row flex-wrap items-center gap-4 gap-y-2 lg:gap-x-8">
                {projects[0].programmingLanguages.map((item, index) => (
                  <Magnetic key={index}>
                    <p className="text-white text-[14px] major border-b w-fit">
                      {item}
                    </p>
                  </Magnetic>
                ))}
              </div>
            </div>
            <p className="gap-4 lg:gap-8 flex  flex-col lg:flex-row">
              Duration:
              <span className="major">
                {projects[0].duration}
              </span>
            </p>
            <p className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
              Functionalities:
              <ul className="major flex flex-col text-start">
                {projects[0].functionalities.map((item, index) => <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-white"></div>
                  <li className="flex-1">{item}</li>
                </div>)}
              </ul>
            </p>
          </div>
        </div>
      </div>



      <div ref={secondImage} className={`${styles.imageContainer} mt-20 lg:mt-0`}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/${projects[1].src}`} fill={true} alt={"image"} />
          {
            projects[1].url && <div className="w-14 h-14 bg-white cursor-pointer absolute flex items-center justify-center  -bottom-4 rounded-full left-1 lg:-left-4">
            <a target="_blank" href={projects[1].url} className=" items-center justify-center px-4">
              <Image
                src={`/right-arrow.png`}
                // fill={true}
                alt={"image"}
                width={32}
                height={20}
                className=" -rotate-45"
              />
            </a>
          </div>
          }
  {
            projects[1].github && 
          <div className="w-14 h-14 bg-white absolute cursor-pointer flex items-center justify-center  -bottom-4 rounded-full left-16 lg:left-14">
            <a href={projects.github} target="_blank" className=" items-center justify-center">
              <Image
                src={`https://cdn-icons-png.flaticon.com/128/270/270798.png`}
                // fill={true}
                alt={"image"}
                width={32}
                height={20}
                className=""
              />
            </a>
          </div>
}
        </div>
        <div className={`${styles.body} py-[1rem] px-[1rem] lg:px-[2rem]`}>
          <h3 className="text- mt-4 lg:text-center text-2xl major text-white">
            {projects[1].name}
          </h3>
          <p className="lg:text-center mt-2 major text-slate-300 text-[14px]">
            {projects[1].description}
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 mt-6 text-white lg:text-center text-[16px]">
            <p className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
              Role: <span className="major">{projects[0].role}</span>
            </p>
            <p className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
              Type:
              <span className="major">
                {projects[1].personal ? "Personal Project" : "Work "}
              </span>
            </p>
            <div className="flex flec-col lg:flex-row gap-4 lg:gap-8 h-fit">
              <p className="text-white">Tools:</p>
              <div className="flex flex-row flex-wrap items-center gap-4 gap-y-2 lg:gap-x-8">
                {projects[1].programmingLanguages.map((item, index) => (
                  <Magnetic key={index}>
                    <p className="text-white text-[14px] major border-b w-fit">
                      {item}
                    </p>
                  </Magnetic>
                ))}
              </div>
            </div>
            <p className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
              Duration:
              <span className="major">
                {projects[1].duration}
              </span>
            </p>
            <p className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
              Functionalities:
              <ul className="major flex flex-col text-start">
                {projects[1].functionalities.map((item, index) => <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-white"></div>
                  <li className="flex-1">{item}</li>
                </div>)}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Double;
