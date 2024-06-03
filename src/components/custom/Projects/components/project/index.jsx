"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
export default function index({ index, title, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <p className="absolute left-4 text-md lg:text-xl  top-[50px]">
        0{index + 1}
        <span className="ml-2 text-primary">/</span>
      </p>
      <h2 className="madimi text-2xl lg:text-[40px]">{title}</h2>
      <img src="/right-arrow.png" alt="" className="-rotate-45 w-10" />
    </div>
  );
}
