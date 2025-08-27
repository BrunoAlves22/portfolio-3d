"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  job: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 🔥 função para calcular altura certinha
  const updateHeight = () => {
    if (lastItemRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const lastItemRect = lastItemRef.current.getBoundingClientRect();

      // garante que a linha azul desça até o último item, mesmo no mobile
      setHeight(lastItemRect.bottom - containerRect.top);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight); // 🔥 recalcula quando mudar tela
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30"
      ref={containerRef}
    >
      <h2 className="font-bold text-3xl md:text-4xl font-poppins text-white">
        Experiências
      </h2>
      <div className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            ref={index === data.length - 1 ? lastItemRef : null}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Linha + datas */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px]">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-200 border-neutral-500" />
              </div>
              {/* Desktop */}
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3 className="font-dm-sans">{item.date}</h3>
                <h3 className="text-3xl text-neutral-400 font-poppins">
                  {item.title}
                </h3>
                <h3 className="text-3xl text-neutral-500 font-dm-sans">
                  {item.job}
                </h3>
              </div>
            </div>

            {/* Mobile */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                <h3 className="font-dm-sans">{item.date}</h3>
                <h3 className="font-poppins">{item.job}</h3>
              </div>
              {Array.isArray(item.content) &&
                item.content.map((content, index) => (
                  <p
                    className="mb-3 font-normal text-neutral-400 font-dm-sans"
                    key={index}
                  >
                    {content}
                  </p>
                ))}
            </div>
          </div>
        ))}

        {/* Linha azul */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] 
            bg-gradient-to-t from-blue-500 via-blue-400 to-transparent 
            from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
