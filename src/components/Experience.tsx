import { Timeline } from "./timeline";
import { experiences } from "@/constants";

export function Experience() {
  return (
    <section className="w-full">
      <Timeline data={experiences} />
    </section>
  );
}
