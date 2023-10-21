import { motion } from "framer-motion";

import { useViewSection } from "../hooks/useViewSection";
import { Title } from "./Title";

import { DefaultProps } from "./App.types";
import { links, skillsData } from "../constants/data";

const animationDefault = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * idx,
    },
  }),
};

export const Skills = ({ lastClickTime, setActive }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[3].name,
    lastClickTime,
    setActive,
    threshold: 0.5,
  };
  const { ref } = useViewSection(initialViewState);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Title text="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-4 py-2"
            key={skill}
            variants={animationDefault}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
