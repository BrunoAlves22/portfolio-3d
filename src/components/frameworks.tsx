import { OrbitingCircles } from "./orbiting-circles";
import { File, Settings, Search } from "lucide-react";

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles className="text-white">
        <File />
        <Settings />
        <File />
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse className="text-white">
        <File />
        <Settings />
        <File />
        <Search />
      </OrbitingCircles>
    </div>
  );
}
