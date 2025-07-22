import Image from "next/image";
import { OrbitingCircles } from "./orbiting-circles";

export function Frameworks() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}></OrbitingCircles>
      <OrbitingCircles
        iconSize={30}
        radius={100}
        reverse
        speed={2}
      ></OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: { src: string }) => {
  return (
    <div className="flex size-full items-center justify-center">
      <Image
        src={src}
        alt="Framework Icon"
        width={40}
        height={40}
        className="duration-200 hover:scale-110 rounded-sm"
      />
    </div>
  );
};
