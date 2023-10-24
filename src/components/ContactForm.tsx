import Lottie from "lottie-react";
import { motion } from "framer-motion";
import sendBtn from "../images/animation/sendBtn.json";

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
      <p className="text-slate-300 -mt-5">
        Feel free to get in touch with us at&nbsp;
        <a className="underline" href="mailto:yurash862@gmail.com">
          yurash862@gmail.com
        </a>
        &nbsp;or use the form below to reach out.
      </p>
      <form onSubmit={onSubmit} className="mt-7 flex flex-col ">
        <input
          className="h-14 px-4 rounded-lg text-slate-950 outline-[#029cdc]"
          type="email"
          required
          name="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          placeholder="example@mail.com"
        />
        <textarea
          className="h-52 resize-none text-slate-950 my-3 rounded-lg p-4 outline-[#029cdc]"
          placeholder="Example message"
          autoComplete="off"
          minLength={10}
          required
          name="message"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] flex items-center justify-center bg-gray-800 focus:scale-110 hover:scale-110 hover:bg-gray-700 active:scale-105 outline-none transition-all rounded-full text-white"
        >
          Submit&nbsp;
          <Lottie animationData={sendBtn} style={{ width: "2.4rem", height: "2.4rem" }} />
        </button>
      </form>
    </motion.section>
  );
};
