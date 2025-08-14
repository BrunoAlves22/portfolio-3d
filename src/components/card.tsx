import { motion } from "motion/react";

interface CardProps {
  text: string;
  style: React.CSSProperties;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}
export function Card({ text, style, containerRef }: CardProps) {
  return (
    <motion.div
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      className="absolute px-1 py-4 text-xl text-center rounded-full font-bold ring ring-gray-700 bg-[#282b4b] w-[12rem] cursor-grab text-white font-dm-sans"
    >
      {text}
    </motion.div>
  );
}
