import {LucideLoaderCircle} from "lucide-react";

interface ProcessingScreenProps {
  message?: string;
}
export const ProcessingScreen: React.FunctionComponent<
  ProcessingScreenProps
> = ({message}) => {
  return (
    <div className="flex gap-4 items-center flex-col justify-center relative">
      <LucideLoaderCircle className="w-24 h-24 animate-spin " />
      {message && <h1 className="text-2xl font-bold text-center">{message}</h1>}
    </div>
  );
};
