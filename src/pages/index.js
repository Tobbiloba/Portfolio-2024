
import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import HeroCard from "@/components/custom/hero card/HeroCard";
import Preloader from "@/components/custom/Preloader";
import { useEffect, useState } from "react";
import Magnetic from "@/components/custom/stickyCursor/magnetic";
import { HomeHero } from "@/components/custom/Home/Hero";
import AudioPlayer from "@/components/audio/AudioPlayer";
// import Landing from "@/components/testing/src/components/Landing";
// import Description from "@/components/testing/src/components/Description";
// import Projects from "@/components/testing/src/components/Projects";
// import SlidingImages from "@/components/testing/src/components/SlidingImages";
import styles from "../components/custom/Preloader/style.module.scss"
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
      }
    )()
  }, [])
  let name = "tobi"
  return (
    <div className="max-h-[100vh] h-[100vh] overflow-hidden">
      <Head>
        <title>Tobbie</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {isLoading ? <Preloader /> : 
      <Curve backgroundColor="#0f172a">
        <div className={styles.wrapper}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={`dot-${index + 1}`}></div>
      ))}
    </div>
        <div className=" h-[100vh] w-[100%] flex items- justify-between">
           <HomeHero />
        
            {/* <div className="lines">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div>  */}

        </div>
        
      </Curve>
      }
    </div>
  );
}




















// import Head from "next/head";
// import Curve from "@/components/Layout/Curve";
// import HeroCard from "@/components/custom/hero card/HeroCard";
// import Preloader from "@/components/custom/Preloader";
// import { useEffect, useState } from "react";
// import Home2 from "@/components/testing/test2/src/pages";
// import Home3 from "@/components/testing/src/app/page";

// export default function Home() {

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect( () => {
//     (
//       async () => {
//           const LocomotiveScroll = (await import('locomotive-scroll')).default
//           const locomotiveScroll = new LocomotiveScroll();

//           setTimeout( () => {
//             setIsLoading(false);
//             document.body.style.cursor = 'default'
//             window.scrollTo(0,0);
//           }, 10000)
//       }
//     )()
//   }, [])
//   return (
//     <>
//       <Head>
//         <title>Tobbie</title>
//         <meta name="description" content="Portfolio" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//      <Home3 />
//     </>
//   );
// }










// import Head from "next/head";
// import Curve from "@/components/Layout/Curve";
// import HeroCard from "@/components/custom/hero card/HeroCard";
// import Preloader from "@/components/custom/Preloader";
// import { useEffect, useState } from "react";
// import Home2 from "@/components/testing/test2/src/pages";
// import Home3 from "@/components/testing/src/app/page";

// export default function Home() {

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect( () => {
//     (
//       async () => {
//           const LocomotiveScroll = (await import('locomotive-scroll')).default
//           const locomotiveScroll = new LocomotiveScroll();

//           setTimeout( () => {
//             setIsLoading(false);
//             document.body.style.cursor = 'default'
//             window.scrollTo(0,0);
//           }, 10000)
//       }
//     )()
//   }, [])
//   return (
//     <>
//       <Head>
//         <title>Tobbie</title>
//         <meta name="description" content="Portfolio" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//      <Home2 />
//     </>
//   );
// }











