import { motion } from "framer-motion";
import { FaSquareGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import { projectsData } from "../constants/data";

type Props = (typeof projectsData)[number];

export const Project = ({
  title,
  description,
  imageUrl,
  tags,
  github,
  liveDemo,
}: Props) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 100, opacity: 0.5 }}
      className="group"
    >
      <article className="bg-primary-gradient shadow-2xl max-w-[28rem] lg:h-[20rem]
       overflow-hidden relative group-even:lg:translate-y-[2.5rem] rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-t-lg lg:h-full group-hover:opacity-0 transition-opacity duration-300"
        />
        <div
          className="flex flex-col gap-y-2 py-4 px-5 sm:p-6 sm:gap-y-4 lg:w-full lg:translate-y-[100%]
          group-hover:lg:translate-y-0 lg:h-full lg:absolute top-0 transition duration-300"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-white">{description}</p>
          <div className="flex justify-stretch gap-2 items-center ">
            <a href={github} className="block w-10 h-10" target="_blank" rel="noreferrer">
              <FaSquareGithub size="100%" />
            </a>
            <a
              href={liveDemo}
              className="block w-10 h-10"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink size="100%" />
            </a>
          </div>
          <ul className="flex flex-wrap mt-auto gap-2">
            {tags.map((tag) => (
              <li
                className="bg-black/[0.5] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
};
