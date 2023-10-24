import { motion } from "framer-motion";

import { projectsData } from "../constants/data";

type Props = (typeof projectsData)[number];

export const Project = ({ title, description, imageUrl, tags }: Props) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 100, opacity: 0.5 }}
      className="group"
    >
      <article className="bg-primary-gradient shadow-2xl max-w-[28rem] lg:h-[20rem] border border-black/5 overflow-hidden relative group-even:lg:translate-y-[3rem] rounded-lg">
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
