import "@/styles/globals.css";
import "./index.css";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
import AudioPlayer from "@/components/audio/AudioPlayer";
// import Header from "@/components/header";
// import StickyCursor from "@/components/custom/stickyCursor/stickyCursor";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <ToastContainer />
      <div className="fixed z-[100] top-[90vh] right-[1rem] lg:right-[3rem]">
        <AudioPlayer src="/lofi.mp3" />
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
// --bs-blue: #0d6efd;
// --bs-indigo: #6610f2;
// --bs-purple: #6f42c1;
// --bs-pink: #d63384;
// --bs-red: #dc3545;
// --bs-orange: #fd7e14;
// --bs-yellow: #ffc107;
// --bs-green: #198754;
// --bs-teal: #20c997;
// --bs-cyan: #0dcaf0;
// --bs-black: #000;
