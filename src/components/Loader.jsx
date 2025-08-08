import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center className="flex justify-center items-center flex-col">
      <div className="w-20 h-20 rounded-full border-4 border-gray-200/20 border-t-white animate-spin" />
      <p className="mt-8 text-sm font-bold text-white tracking-wider">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export { CanvasLoader };