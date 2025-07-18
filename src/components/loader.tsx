import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-bold text-center">
      {progress} % Loaded
    </Html>
  );
}
