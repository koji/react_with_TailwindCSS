type Props = {
  text: string;
};

export const GradientText = ({ text }: Props) => {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">
      <h1 className="text-9xl font-black text-white text-center">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
          {text}
        </span>
      </h1>
    </div>
  );
};
