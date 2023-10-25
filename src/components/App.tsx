import { useState } from "react";

import { Link } from "./App.types";

import { About } from "./About";
import { Divider } from "./Divider";
import { Header } from "./Header";
import Intro from "./Intro";
import Main from "./Main";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState<Link>("Home");
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <div className="text-white relative pt-28 sm:pt-36">
      <div className="bg-[#fbe2e3] absolute z-0 top-[6rem] left-[50%] -translate-x-[50%] h-[28rem] 
      w-full rounded-full sm:blur-[10rem] blur-[8rem]"></div>
      <Header
        active={activeSection}
        setActive={setActiveSection}
        onLinkClick={setLastClickTime}
      />
      <Main>
        <Intro setActive={setActiveSection} lastClickTime={lastClickTime} />
        <Divider />
        <About setActive={setActiveSection} lastClickTime={lastClickTime} />
        <Projects setActive={setActiveSection} lastClickTime={lastClickTime} />
        <Skills setActive={setActiveSection} lastClickTime={lastClickTime} />
        <Experience setActive={setActiveSection} lastClickTime={lastClickTime} />
        <ContactForm setActive={setActiveSection} lastClickTime={lastClickTime} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
