"use client";
import Curve from "@/components/Layout/Curve";
import Description from "@/components/testing/src/components/Description";
import Projects from "@/components/custom/Projects";
import Head from "next/head";
import Experience from "@/components/custom/Projects/components/experiences";
import Tool from "@/components/custom/Projects/components/tools";
import Image from "next/image";
import ProfileSlider from "@/components/custom/Projects/profile carousel";
import RoundedButton from "@/components/custom/RoundedButton";
const RoundedText = ({ text }) => {
  const svgStyles = {
    width: "100px", // Set the width and height as needed
    height: "100px",
    position: "absolute",
    top: "0px",
    right: "20px",
    padding: "5px",
  };

  const pathStyles = {
    fill: "none",
    // stroke: 'white',
    strokeWidth: "1",
  };

  const textPathStyles = {
    fontSize: "17px",
    fill: "white",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyles}
      className="madimi"
    >
      <path
        id="circlePath"
        d="
          M 10, 50
          a 40,40 0 1,1 80,0
          40,40 0 1,1 -80,0
        "
        style={pathStyles}
      />
      <text>
        <textPath href="#circlePath" style={textPathStyles} className="">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor={"#0f172a"}>
     
        <section className="relative w-[100vw] h-[100vh] overflow-hidden">
          <div className="w-[100%] h-[100%] bg-black/50 z-20 absolute top-0 left-0"></div>
          <img src="/images/pic5.jpeg" alt="" className="w-[100%] h-[100vh] object-cover relative" />
          <article>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </section>
        <div className="flex  justify-center madimi px-[1rem]">
          <div className="relative z-10 container flex flex-col gap-12">
            <div className="relative w-fit h-4">
              <Image
                src="/images/tag.svg"
                alt=""
                width={60}
                height={60}
                className="absolute rotate-45 -right-5"
              />
              <h1 className="major border text-white py-2 px-10 rounded-full text-2xl">
                Hello
              </h1>
            </div>

            <h1 className="text-white major flex text-[3rem] text-wrap flex-wrap leading-[5rem] mt-6">
              I&apos;m Oluwatobiloba, A Fullstack Developer
            </h1>
          </div>
        </div>
        {/* <ProfileSlider /> */}
        <div className="flex mt-24 justify-center px-[1rem] rubik">
          <div className="relative z-10 container flex flex-col xl:flex-row gap-12">
            <div className="xl:w-4/12 relative">
              <p className="text-primary absolute -left-2 lg:-left-12 -rotate-45 top-12 madimi">
                Services
              </p>
              <h1 className="text-[3.5rem] md:text-[5rem] ml-[2rem] lg:ml-0 text-primary">
                Services I <br />
                Offer
              </h1>
              <p className="mt-6 text-white major">
                We help ambitious business like you generate more profits by
                building awareness, driving web traffic, connecting with
                customers and growing sales.
              </p>
              <div className="relative h-40">
                <RoundedText text="- services - services - services -" />
              </div>
            </div>
            <div className=" xl:w-8/12">
              <Projects />
            </div>
          </div>
        </div>

        <div className="flex justify-center madimi mt-20 lg:mt-40">
          <div className="relative z-10 container flex gap-12 flex-col xl:flex-row ">
            <div className="xl:w-4/12 relative">
              {/* <div> */}
              <p className="text-primary absolute -left-2 lg:-left-12 -rotate-45 top-12 major">
                Experience
              </p>
              <h1 className="text-[3.5rem] md:text-[5rem] ml-[2rem] lg:ml-0 text-primary rubik">
                Job
                <br />
                Experience
              </h1>
              <p className="mt-6 text-white major">
                A specialist in UI/UX design. A passion of mine is designing and
                solving problems through user experience, primarily on modern
                UI.
              </p>
              {/* </div> */}
              <div className="relative h-32 lg:h-40">
                <RoundedText text="- experience - experience - experience" />
              </div>
            </div>
            <div className=" xl:w-8/12">
              <Experience />
            </div>
          </div>
        </div>

        <div className="flex justify-center madimi mt-20 lg:mt-40">
          <div className="relative z-10 container flex flex-col xl:flex-row gap-12">
            <div className="xl:w-4/12 relative">
              <p className="text-primary absolute -left-2 lg:-left-12 -rotate-45 top-12 madimi">
                Tools
              </p>
              <h1 className="text-[3.5rem] md:text-[5rem] ml-[2rem] lg:ml-0 text-primary rubik">
                Tools I
                <br />
                Use
              </h1>
              <p className="mt-6 text-white major">
                A specialist in UI/UX design. A passion of mine is designing and
                solving problems through user experience, primarily on modern
                UI.
              </p>
              <div className="relative h-40">
                <RoundedText />
              </div>
            </div>
            <div className=" xl:w-8/12">
              <p className="text-white madimi text-4xl mb-8">Experience</p>
              <Tool />
            </div>
          </div>
        </div>
      </Curve>
    </>
  );
}
