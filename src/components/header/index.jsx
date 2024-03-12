"use client";
import { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../custom/stickyCursor/magnetic";
import Image from "next/image";
import SpringButton from "../custom/spring button";
import Link from "next/link";
import RoundedButton from "../custom/RoundedButton";
import { useMediaQuery } from "react-responsive";
const Header = forwardRef(function index(props, ref) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={`${styles.header} flex flex-col lg:flex-row px-[1rem] lg:px-[7.5%] gap-2 lg:gap-12 w-[100%] relative bottom-[2.5rem] justify-between lg:py-5 lg:items-center`}
    >
      <Magnetic>
        <div className="flex h-[4rem] items-center just0fy-start lg:justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/9169/9169963.png"
            alt="Your Alt Text"
            width={isMobile ? 40 : 60} // Provide the width property
            height={isMobile ? 10 : 14} // Provide the height property
          />

          <h1 className="text-2xl ml-2 lg:ml-0 lg:text-3xl major text-white relative bottom-6 right-4">
            o<span className="text-primary">bb</span>ie
          </h1>
        </div>
      </Magnetic>
      <div className="flex flex-wrap lg:flex-nowrap lg:pt-7 mt-5 lg:mt-0 pt-3 text-[16px] lg:text-xl lg:h-[3rem] major gap-4 lg:gap-16 items-center justify-end lg:justify-center montserrat">
        <Magnetic>
          <div className="relative z-100">
            <div className="text-white relative z-[100]">
              <Link href="/">Home</Link>
            </div>
            <div ref={ref} className={`${styles.bounds}`}></div>
          </div>
        </Magnetic>

        <Magnetic>
          <div className="relative z-100">
            <div className="text-white relative  z-[100]">
              <Link href="/about">About</Link>
            </div>

            <div ref={props.secondRef} className={`${styles.bounds}`}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="relative z-100">
            <div className="text-white relative z-[100]">
              <Link href="/portfolio">Portfolio</Link>
            </div>

            <div ref={props.thirdRef} className={`${styles.bounds}`}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="relative z-100">
            <div className="text-white relative z-[100]">
              <Link href="/contact">Contact</Link>
            </div>
            <div ref={props.fourthRef} className={`${styles.bounds}`}></div>
          </div>
        </Magnetic>
      </div>
      {/* <SpringButton >Hire Me</SpringButton> */}
     {
      !isMobile &&  <div className="flex justify-end">
      <RoundedButton>Hire Me</RoundedButton>
      </div>
     }
    </div>
  );
});

export default Header;
