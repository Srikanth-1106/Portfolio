import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

import { CanvasLoader } from "../Loader";

const Ticofab = () => {
  const tico = useGLTF("./astro/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={tico.scene}
        scale={2.5}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const ErrorFallback = () => (
  <div className="flex justify-center items-center h-full">
    <p className="text-red-500">Error loading 3D model</p>
  </div>
);

const TicofabCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Ticofab />
        </Suspense>
      </ErrorBoundary>
      <Preload all />
    </Canvas>
  );
};

export default TicofabCanvas;
