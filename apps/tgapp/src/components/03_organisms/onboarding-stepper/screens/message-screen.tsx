interface MessageScreenProps {
  title: string;
  message: string[];
  icon: React.ReactNode;
}
export const MessageScreen: React.FunctionComponent<MessageScreenProps> = ({
  title,
  message,
  icon,
}) => {
  return (
    <>
      <div className="relative w-30 aspect-square flex  items-center justify-center mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0">
          <div className="w-30 aspect-square bg-black rounded-full opacity-30"></div>
        </div>
        <div className="z-10">{icon}</div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex flex-col ">
        {message.map((line, index) => (
          <span key={index} className="text-xl text-center">
            {line}
          </span>
        ))}
      </div>
    </>
  );
};
