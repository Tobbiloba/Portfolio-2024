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
      <h2 className="text-2xl major">{title}</h2>
    </div>
  );
}
