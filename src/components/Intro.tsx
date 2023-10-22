import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import myPortrait from "../images/myphoto.jpg";
import waveHand from "../images/animation/waving.json";

import { DefaultProps } from "./App.types";
import { useViewSection } from "../hooks/useViewSection";
import { links } from "../constants/data";
import Lottie from "lottie-react";

const Intro = ({ setActive, lastClickTime }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[0].name,
    lastClickTime,
    setActive,
    threshold: 0.5,
  };
  const { ref } = useViewSection(initialViewState);

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              className="h-40 w-40 rounded-full object-cover shadow-xl border-[0.35rem] border-gray-950"
              src={myPortrait}
              alt="My portrait"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            className="absolute bottom-0 -right-1"
          >
            <Lottie animationData={waveHand} style={{ width: "70px", height: "70px" }} />
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5]"
      >
        <span className="font-bold">Hello, I'm Yurii.</span>&nbsp;I'm a
        <span className="font-bold">&nbsp;Full-stack developer.</span>&nbsp;I take
        pleasure in creating
        <span className="italic">&nbsp;websites &amp; applications</span>,&nbsp;with my
        primary focus being on&nbsp;
        <span className="underline">Node.js</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <a
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me&nbsp;
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </a>
        <a
          href="../additionalFiles/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV&nbsp;
          <HiDownload className="group-hover:translate-y-1 opacity-60 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/yurii-shymanskyi-313640278/"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/yurii2007"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
