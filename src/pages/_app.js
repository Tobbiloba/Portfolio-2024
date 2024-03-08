import "@/styles/globals.css";
import './index.css'
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
// import Header from "@/components/header";
// import StickyCursor from "@/components/custom/stickyCursor/stickyCursor";
export default function App({ Component, pageProps, router }) {

  return (
    <div className="main">

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

