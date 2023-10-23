import { motion } from "framer-motion";
import { useRef } from "react";

import { projectsData } from "../constants/data";

type Props = (typeof projectsData)[number];

export const Project = ({ title, description, imageUrl, tags }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 100, opacity: 0.5 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-[28rem] h-[28rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] group-even:sm:translate-y-[3rem] hover:bg-gray-200 transition rounded-lg">
        <div className="flex flex-col py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-auto gap-2">
            {tags.map((tag) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition"
        />
      </article>
    </motion.div>
  );
};
