// components/AudioPlayer.js
import React, { useState, useRef, useEffect } from "react";
// import styles from "./style.module.scss";
import Image from "next/image";
import Magnetic from "../custom/stickyCursor/magnetic";
const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    // When the audio ends, replay it
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  useEffect(() => {
    // Set up the event listener for the 'ended' event
    audioRef?.current?.addEventListener("ended", handleAudioEnd);

    // Clean up the event listener on component unmount
    return () => {
      audioRef?.current?.removeEventListener("ended", handleAudioEnd);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
   <Magnetic>
     <div>
      <audio ref={audioRef} src="/lofi.mp3" />
      <button
        onClick={togglePlayPause}
        className=" rounded-full"
        style={{
          boxShadow: "0 0 50px #fd7e14",
        }}
      >
        <Image
          className=""
          src={
            !isPlaying
              ? "https://cdn-icons-png.flaticon.com/128/10257/10257610.png"
              : "https://cdn-icons-png.flaticon.com/128/10346/10346974.png"
          }
          width={50}
          height={50}
          alt=""
        />
      </button>
    </div>
   </Magnetic>
  );
};

export default AudioPlayer;
