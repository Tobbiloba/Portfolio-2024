"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
export default function index({
  index,
  title,
  manageModal,
  company,
  duration,
}) {
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
      <div className="flex items- gap-6">
        <p className="text-[15px] lg:text-[17px]">{duration}</p>
        <div>
          <h2 className="text-2xl lg:text-4xl major">{title}</h2>
          <p className="mt-4 major">{company}</p>
        </div>
      </div>
    </div>
  );
}
