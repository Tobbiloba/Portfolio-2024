"use client";
import { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../custom/stickyCursor/magnetic";
import Image from "next/image";
import SpringButton from "../custom/spring button";
import Link from "next/link";
import RoundedButton from "../custom/RoundedButton";
const Header = forwardRef(function index(props, ref) {
  return (
    <div
      className={`${styles.header} flex px-[7.5%] gap-12 w-[100%] relative bottom-[2.5rem] justify-between py-5 items-center`}
    >
       <Magnetic>
        <div className="flex h-[4rem] items-center justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/9169/9169963.png"
            alt="Your Alt Text"
            width={60} // Provide the width property
            height={14} // Provide the height property
          />

          <h1 className="text-3xl major text-white relative bottom-6 right-4">
            o<span className="text-primary">bb</span>ie
          </h1>
        </div>
        </Magnetic>
        <div className="flex pt-7 text-xl h-[3rem] major gap-16 items-center justify-center montserrat">
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
        <RoundedButton >Hire Me</RoundedButton>
    </div>
  );
});

export default Header;
