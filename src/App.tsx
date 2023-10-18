import { Header } from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="bg-[#fbe2e3] absolute -z-10 -top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div
        className="bg-[#dbd7fb] absolute -z-10 -top-[1rem] -left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:-left-[-33rem] lg:-left-[-28rem] xl:-left-[15rem] 2xl:-left-[5rem]"
      ></div>
      <Header />
      <Main>
        <></>
      </Main>
    </>
  );
};

export default App;
