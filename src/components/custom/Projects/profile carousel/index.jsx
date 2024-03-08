import React from "react";
import styles from "./style.module.scss";

const ProfileSlider = () => {
  return (
    <div className={styles.body}>
      <div className={`${styles.container} madimi`}>
        <div className="">
          <div className={`${styles.content} relative`}>
          <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/20"></div>
            <h2>Matriculation Day</h2>
            <span>MIVA UNIVERSITY</span>
          </div>
        </div>
        <div>
        <div className={`${styles.content} relative`}>
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/20"></div>
            <h2>OSCA FEST</h2>
          </div>
        </div>
        <div>
        <div className={`${styles.content} relative`}>
            <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/20"></div>
            <h2>"Summer LOL😂😂"</h2>
          </div>
        </div>
        <div>
        <div className={`${styles.content} relative`}>
          <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/20"></div>
            <h2 className="text-center">"Capturing a photo alongside SIM SHAGAYA, the founder of MIVA UNIVERSITY."</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSlider;
