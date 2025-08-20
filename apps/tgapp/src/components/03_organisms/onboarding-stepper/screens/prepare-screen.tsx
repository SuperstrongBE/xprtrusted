import {LucideLoaderCircle} from "lucide-react";

export const PrepareScreen = () => {
  return (
    <div className="flex flex-col gap-4 items-center flex-col justify-center relative">
      <LucideLoaderCircle className="w-48 h-48 animate-spin " />
      <h1 className="text-2xl font-bold">Checking your account...</h1>
    </div>
  );
};
