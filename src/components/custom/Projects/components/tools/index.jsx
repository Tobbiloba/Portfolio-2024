"use client";
import styles from "../../style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./tools";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
const tools = [
  {
    title: "HTML",
    src: "html.webp",
    color: "#64748b",
  },
  {
    title: "CSS",
    src: "css.webp",
    color: "#f9fafb",
  },
  {
    title: "JAVASCRIPT",
    src: "javascript.webp",
    color: "#facc15",
  },
  {
    title: "TAILWIND CSS",
    src: "tailwind.png",
    color: "#000000",
  },
  {
    title: "REACTJS",
    src: "reactjs.webp",
    color: "#2563eb",
  },
  {
    title: "NODEJS",
    src: "nodejs.webp",
    color: "#16a34a",
  },
  {
    title: "REACT NATIVE",
    src: "reactNative.png",
    color: "#3b82f6",
  },
  {
    title: "TYPESCRIPT",
    src: "typesc5ript.png",
    color: "#1e3a8a",
  },
  {
    title: "EXPRESS",
    src: "express.png",
    color: "#475569",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Experience = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={`${styles.projects} madimi text-white`}
    >
      <div className={styles.body}>
        {tools.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {tools.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={`${styles.cursorLabel} major`}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
};

export default Experience;
