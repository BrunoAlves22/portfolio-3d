import {
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
} from "@tabler/icons-react";

export function Frameworks() {
  return (
    <div className="flex items-center justify-center gap-4 px-5 sm:px-0">
      <IconBrandTailwind
        stroke={1.5}
        color="#38BDF8"
        width={100}
        height={100}
      />
      <IconBrandReact stroke={1.5} color="#61DAFB" width={100} height={100} />
      <IconBrandNextjs stroke={1.5} color="#FFF" width={100} height={100} />
      <IconBrandTypescript
        stroke={1.5}
        color="#3178C6"
        width={100}
        height={100}
      />
      <IconBrandJavascript
        stroke={1.5}
        color="#F7DF1E"
        width={100}
        height={100}
      />
    </div>
  );
}
