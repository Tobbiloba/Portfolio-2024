"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import StickyCursor from "@/components/custom/stickyCursor/stickyCursor";
import Header from "@/components/header";
import AudioPlayer from "@/components/audio/AudioPlayer";
const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function resize() {
      setLoading(false);
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stickyElement1 = useRef(null);
  const stickyElement2 = useRef(null);
  const stickyElement3 = useRef(null);
  const stickyElement4 = useRef(null);

  return (
    <div
      className="page curve z-100 p-0 h-[100%] relative min-h-[100vh] max-w-[100vw] overflow-hidden"
      style={{ backgroundColor }}
    >
      {loading && (
        <div className="fixed top-0 z-[100] left-0 bg-black w-[100vw] h-[100vh]"></div>
      )}
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background border z-100"
      />

      <div className="relative z-[100]">
        {dimensions.width != null && <SVG {...dimensions} />}
      </div>
      {!loading && (
        <>
          <div className="relative z-50 w-[100vw] lg:w-[100%] right-[2.5rem] lg:right-0">
            <Header
              ref={stickyElement1}
              secondRef={stickyElement2}
              thirdRef={stickyElement3}
              fourthRef={stickyElement4}
            />
          </div>
          <StickyCursor stickyElement={stickyElement1} />
          <StickyCursor stickyElement={stickyElement2} />
          <StickyCursor stickyElement={stickyElement3} />
          <StickyCursor stickyElement={stickyElement4} />

          <div className="p-0 relative w-[100vw] right-[2.65rem]">
            {children}
          </div>
        </>
      )}
      {/* <div className="fixed z-[100] top-[90vh] right-[3rem]">
          <AudioPlayer src="/lofi.mp3"/>
          </div> */}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
