"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
const words = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACTJS",
  "TAILWIND CSS",
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESS",
  "MONGO DB",
  "POSTMAN",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 100 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      background: "white",
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      background: "white",
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <div className={styles.wrapper}>
            {[...Array(15)].map((_, index) => (
              <div key={index} className={`dot-${index + 1}`}></div>
            ))}
          </div>

          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="rubik text-white"
          >
            <span className="bg-primary"></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;

// import { useLayoutEffect, useRef } from "react"
// import gsap from "gsap"

// const Preloader = () => {
//   const comp = useRef(null)

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const t1 = gsap.timeline()
//       t1.from("#intro-slider", {
//         xPercent: "-100",
//         duration: 1.3,
//         delay: 0.3,
//       })
//         .from(["#title-1", "#title-2", "#title-3"], {
//           opacity: 0,
//           y: "+=30",
//           stagger: 0.5,
//         })
//         .to(["#title-1", "#title-2", "#title-3"], {
//           opacity: 0,
//           y: "-=30",
//           delay: 0.3,
//           stagger: 0.5,
//         })
//         .to("#intro-slider", {
//           xPercent: "-100",
//           duration: 1.3,
//         })
//         .from("#welcome", {
//           opacity: 0,
//           duration: 0.5,
//         })
//     }, comp)

//     return () => ctx.revert()
//   }, [])
//   return (
//     <div className="relative" ref={comp}>
//       <div
//         id="intro-slider"
//         className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
//       >
//         <h1 className="text-9xl" id="title-1">
//           Software Engineer
//         </h1>
//         <h1 className="text-9xl" id="title-2">
//           Designer
//         </h1>
//         <h1 className="text-9xl" id="title-3">
//           Freelancer
//         </h1>
//       </div>
//       <div className="h-screen flex bg-gray-950 justify-center place-items-center">
//         <h1
//           id="welcome"
//           className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
//         >
//           Welcome.
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default Preloader
