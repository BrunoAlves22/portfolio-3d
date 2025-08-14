import { OrbitingCircles } from "./orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import {
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
} from "@tabler/icons-react";

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        <IconBrandTailwind stroke={2} color="#FFF" width={120} height={120} />
        <IconBrandReact stroke={2} color="#FFF" width={120} height={120} />
        <IconBrandNextjs stroke={2} color="#FFF" width={120} height={120} />
        <IconBrandTypescript stroke={2} color="#FFF" width={120} height={120} />
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
