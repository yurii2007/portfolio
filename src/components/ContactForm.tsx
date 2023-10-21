import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import { Title } from "./Title";
import { useViewSection } from "../hooks/useViewSection";
import { DefaultProps } from "./App.types";

import { links } from "../constants/data";
import { sendEmail } from "../helpers/sendEmail";

export const ContactForm = ({ setActive, lastClickTime }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[5].name,
    lastClickTime,
    setActive,
    threshold: 0.8,
  };
  const { ref } = useViewSection(initialViewState);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { email, message } = e.target.elements;

    if (!email || !message) return;

    const emailData = {
      from_email: email.value,
      message: message.value,
    };

    sendEmail(emailData);
    e.target.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100% , 38rem)] text-center"
    >
      <Title text="Contact me" />
      <p className="text-gray-700 -mt-5">
        Please contact me directly at&nbsp;
        <a className="underline" href="mailto:yurash862@gmail.com">
          yurash862@gmail.com
        </a>
        &nbsp;or through this form.
      </p>
      <form onSubmit={onSubmit} className="mt-10 flex flex-col ">
        <input
          className="h-14 px-4 rounded-lg border border-black/[0.1]"
          type="email"
          required
          maxLength={50}
          name="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          placeholder="example@mail.com"
        />
        <textarea
          className="h-52 resize-none my-3 rounded-lg border border-black/[0.1] p-4"
          placeholder="Example message"
          autoComplete="off"
          required
          name="message"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] flex items-center justify-center bg-gray-800 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 outline-none transition-all rounded-full text-white"
        >
          Submit&nbsp;
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};
