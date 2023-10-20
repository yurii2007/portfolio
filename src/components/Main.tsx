type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className="flex flex-col items-center px-4">{children}</main>;
};

export default Main;
