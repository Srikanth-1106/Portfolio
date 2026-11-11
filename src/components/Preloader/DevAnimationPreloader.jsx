import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as allAssets from "../../assets";
import { logo } from "../../assets";

const DevAnimationPreloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const updateProgress = (newValue) => {
    setProgress((prevProgress) =>
      Math.min(100, Math.max(prevProgress, newValue))
    );
  };

  useEffect(() => {
    const modelURLs = [
      "./desktop_pc/scene.gltf",
      "./planet/scene.gltf",
      "./astro/scene.gltf",
    ];

    const imageURLs = Object.values(allAssets).filter(
      (url) => typeof url === "string" && (url.includes(".png") || url.includes(".svg") || url.includes(".jpg") || url.includes(".jpeg") || url.includes("/assets/"))
    );

    let loadedCount = 0;
    const totalAssets = modelURLs.length + imageURLs.length;

    const loader = new GLTFLoader();

    modelURLs.forEach((url) => {
      loader.load(
        url,
        () => {
          loadedCount++;
          const newProgress = Math.floor((loadedCount / totalAssets) * 100);
          updateProgress(newProgress);
        },
        (xhr) => {
          const percentComplete = Math.round((xhr.loaded / xhr.total) * 100);
          const overallProgress =
            Math.floor((loadedCount / totalAssets) * 100) +
            percentComplete / totalAssets;
          updateProgress(overallProgress);
        },
        (error) => {
          console.error("Error loading model:", error);
          loadedCount++;
          const newProgress = Math.floor((loadedCount / totalAssets) * 100);
          updateProgress(newProgress);
        }
      );
    });

    imageURLs.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        const newProgress = Math.floor((loadedCount / totalAssets) * 100);
        updateProgress(newProgress);
      };
      img.onerror = () => {
        console.error("Error loading image:", url);
        loadedCount++;
        const newProgress = Math.floor((loadedCount / totalAssets) * 100);
        updateProgress(newProgress);
      };
      img.src = url;
    });

    try {
      if (loadedCount < totalAssets) {
        loadedCount++;
        const newProgress = Math.floor((loadedCount / totalAssets) * 100);
        updateProgress(newProgress);
      }
    } catch (error) {
      console.error("Error loading animations:", error);
    }

    const fallbackTimer = setTimeout(() => {
      if (progress < 100) {
        console.log("Using fallback to complete loading");
        updateProgress(100);
      }
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 800);

      const finalTimer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
        clearTimeout(finalTimer);
      };
    }
  }, [progress, setLoading]);

  // Terminal-style command lines that appear progressively
  const terminalLines = useMemo(
    () => [
      { cmd: "$ initializing portfolio...", color: "#00cea8" },
      { cmd: "$ loading cloud infrastructure...", color: "#6b8aff" },
      { cmd: "$ deploying UI components...", color: "#915eff" },
      { cmd: "$ connecting APIs & services...", color: "#00cea8" },
      { cmd: "$ compiling full-stack modules...", color: "#6b8aff" },
      { cmd: "$ running final checks ✓", color: "#00ff88" },
    ],
    []
  );

  const visibleLines = Math.min(
    terminalLines.length,
    Math.floor((progress / 100) * terminalLines.length) + 1
  );

  // Floating tech icon symbols
  const floatingIcons = useMemo(
    () => ["⚛", "☁", "⚡", "🐳", "⚙", "λ", "{ }", "< />", "📦", "🔗"],
    []
  );

  // Generate particle positions once
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    []
  );

  const floatingItems = useMemo(
    () =>
      floatingIcons.map((icon, i) => ({
        icon,
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 2,
      })),
    [floatingIcons]
  );

  return (
    <AnimatePresence>
      {!animationComplete && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0e1630 40%, #141432 70%, #0a0a1a 100%)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(145, 94, 255, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(145, 94, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating particles */}
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: `rgba(${p.id % 2 === 0 ? "145, 94, 255" : "0, 206, 168"}, 0.4)`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating tech icons */}
          {floatingItems.map((item) => (
            <motion.div
              key={`float-${item.id}`}
              className="absolute text-xl select-none pointer-events-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.08, 0.2, 0.08],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>
          ))}

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(145,94,255,0.12) 0%, transparent 70%)",
              top: "15%",
              right: "10%",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,206,168,0.1) 0%, transparent 70%)",
              bottom: "20%",
              left: "5%",
            }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">

            {/* Profile picture with animated ring */}
            <div className="relative mb-8">
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #915eff, #00cea8, #6b8aff, #915eff)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-[3px] border-[#0e1630]">
                <img
                  src={logo}
                  alt="Srikanth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and title */}
            <motion.h1
              className="text-white text-2xl font-bold tracking-wide mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Srikanth
            </motion.h1>
            <motion.p
              className="text-[#aaa6c3] text-sm tracking-widest uppercase mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Cloud & Full-Stack Engineer
            </motion.p>

            {/* Terminal window */}
            <motion.div
              className="w-full rounded-xl overflow-hidden mb-8"
              style={{
                background: "rgba(10, 10, 30, 0.8)",
                border: "1px solid rgba(145, 94, 255, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 40px rgba(145, 94, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(145, 94, 255, 0.1)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs text-white/30 font-mono">portfolio — bash</span>
              </div>

              {/* Terminal body */}
              <div className="px-4 py-4 font-mono text-sm space-y-2 min-h-[180px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <span style={{ color: line.color }}>{line.cmd}</span>
                    {i === visibleLines - 1 && progress < 100 && (
                      <motion.span
                        className="inline-block w-2 h-4 bg-white/70"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
                {progress >= 100 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#00ff88] mt-2 font-semibold"
                  >
                    ✓ Ready to launch!
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-full mb-3">
              <div className="w-full h-[4px] rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(100, progress)}%`,
                    background: "linear-gradient(90deg, #915eff, #00cea8, #6b8aff)",
                    boxShadow: "0 0 12px rgba(145, 94, 255, 0.5)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Percentage */}
            <div className="flex justify-between w-full items-center">
              <span className="text-white/30 text-xs font-mono">loading assets</span>
              <span className="text-white/70 text-sm font-mono font-semibold">
                {Math.min(100, progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevAnimationPreloader;
