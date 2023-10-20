import { useState } from "react";

import { Link } from "./App.types";

import { About } from "./About";
import { Divider } from "./Divider";
import { Header } from "./Header";
import Intro from "./Intro";
import Main from "./Main";
import { Projects } from "./Projects";

const App = () => {
  const [activeSection, setActiveSection] = useState<Link>("Home");
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36">
      <div className="bg-[#fbe2e3] absolute z-0 -top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div
        className="bg-[#dbd7fb] absolute z-0 -top-[1rem] -left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:-left-[-33rem] lg:-left-[-28rem] xl:-left-[15rem] 2xl:-left-[5rem]"
      ></div>
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
      </Main>
    </div>
  );
};

export default App;
