import { motion } from "framer-motion";
import clsx from "clsx";

import { Link, SetSection } from "./App.types";
import { links } from "../constants/data";

interface Props {
  active: Link;
  setActive: SetSection;
  onLinkClick: React.Dispatch<React.SetStateAction<number>>;
}

export const Header = ({ active, setActive, onLinkClick }: Props) => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full 
        rounded-none bg-primary-gradient bg-opacity-80 
        shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
        sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] 
        font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => {
                onLinkClick(Date.now());
                setActive(link.name);
              }}
            >
              <a
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition`,
                  { "text-slate-950": active === link.name }
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === active ? (
                  <motion.span
                    className="bg-white rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 450, damping: 60 }}
                  ></motion.span>
                ) : null}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
