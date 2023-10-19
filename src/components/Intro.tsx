import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import myPortrait from "../images/myphoto.jpg";

const Intro = () => {
  return (
    <section className="relative mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
              src={myPortrait}
              alt="My portrait"
              width={192}
              height={192}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            &#128075;
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5]"
      >
        <span className="font-bold">Hello, I'm Yurii.</span>&nbsp;I'm a
        <span className="font-bold">&nbsp;Full-stack developer.</span>&nbsp;I enjoy
        building
        <span className="italic">&nbsp;sites &amp; apps</span>.&nbsp;My focus is&nbsp;
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
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
