type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{text}</h2>;
};
