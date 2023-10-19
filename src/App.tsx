import { Header } from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36">
      <div className="bg-[#fbe2e3] absolute z-0 -top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div
        className="bg-[#dbd7fb] absolute z-0 -top-[1rem] -left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:-left-[-33rem] lg:-left-[-28rem] xl:-left-[15rem] 2xl:-left-[5rem]"
      ></div>
      <Header />
      <Main>
      <Intro />
      </Main>
    </div>
  );
};

export default App;
