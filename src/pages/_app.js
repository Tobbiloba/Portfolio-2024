import "@/styles/globals.css";
import "./index.css";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
import AudioPlayer from "@/components/audio/AudioPlayer";import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <ToastContainer />
      <div className="fixed z-[200] top-[90vh] right-[1rem] lg:right-[3rem]">
        <AudioPlayer src="/lofi.mp3" />
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
