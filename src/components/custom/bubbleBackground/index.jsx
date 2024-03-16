import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const InteractiveComponent = () => {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const interBubble = document.querySelector(".interactive");

    const move = () => {
      setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
      setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [curX, curY, tgX, tgY]);

  return (
    <div className="text-container border w-40 h-40">
      <div className="gradient-bg">
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default InteractiveComponent;
