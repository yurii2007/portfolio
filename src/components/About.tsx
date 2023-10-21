import { motion } from "framer-motion";

import { Title } from "./Title";
import type { DefaultProps } from "./App.types";

import { useViewSection } from "../hooks/useViewSection";
import { links } from "../constants/data";

export const About = ({ setActive, lastClickTime }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[1].name,
    lastClickTime,
    setActive,
    threshold: 0.75,
  };
  const { ref } = useViewSection(initialViewState);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <Title text="About me" />
      <p className="mb-3">
        After completing my<span className="font-medium">&nbsp;Computer Technology</span>
        &nbsp;degree, I decided to follow my passion for programming. I joined a coding
        bootcamp from&nbsp;
        <a
          className="font-bold hover:underline focus:underline transition"
          href="https://goit.global/"
          target="_blank"
          rel="noreferrer"
        >
          GoIT
        </a>
        , where I immersed myself in
        <span className="font-medium">&nbsp;full-stack web development</span>. What truly
        excites me about<span className="font-medium">&nbsp;programming</span>&nbsp;is the
        thrill of solving complex problems, that 'Aha!' moment when everything falls into
        place. My primary tech stack includes&nbsp;
        <span className="font-medium">
          React, Redux, Node.js, and MongoDB, and I'm well-versed in TypeScript, i18n and
          Redux&#47;Redux Toolkit
        </span>
        . I am always looking to learn new technologies. I am currently looking for
        a&nbsp;
        <span className="font-medium">full-time&#47;part-time position</span> as a
        Full-stack developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books and
        watching movies. I also enjoy&nbsp;
        <span className="font-medium">learning new things</span>. I am currently learning
        about <span className="font-medium">Docker and Nest.js</span>.
      </p>
    </motion.section>
  );
};
