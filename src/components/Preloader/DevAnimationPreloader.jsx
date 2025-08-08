import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import devAnimationData from "../../assets/animations/developer-animation.json";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

    const imageURLs = [
      "/src/assets/project/assistiveGlasses.png",
      "/src/assets/project/boneFracture.png",
      "/src/assets/project/internshipPortal.png",
      "/src/assets/project/jobconnect.png",
      "/src/assets/project/nextgenChatbot.png",

      "/src/assets/skills/html.png",
      "/src/assets/skills/css.png",
      "/src/assets/skills/javascript.png",
      "/src/assets/skills/typescript.png",
      "/src/assets/skills/python.png",
      "/src/assets/skills/c.svg",
      "/src/assets/skills/java.svg",
      "/src/assets/skills/Cplusplus.png",
      "/src/assets/skills/reactjs.png",
      "/src/assets/skills/tailwind.png",
      "/src/assets/skills/nodejs.png",
      "/src/assets/skills/mongodb.png",
      "/src/assets/skills/postgres.png",
      "/src/assets/skills/docker.png",
      "/src/assets/skills/figma.png",
      "/src/assets/skills/git.png",
      "/src/assets/skills/threejs.svg",
      "/src/assets/skills/flutter.svg",
      "/src/assets/skills/postman.svg",
      "/src/assets/skills/expressjs.png",
      "/src/assets/skills/gcp.png",
      "/src/assets/skills/colab.png",

      "/src/assets/education/ssnLogo.png",

      "/src/assets/service/backend.png",
      "/src/assets/service/creator.png",
      "/src/assets/service/mobile.png",
      "/src/assets/service/web.png",

      "/src/assets/social_media/github.png",
      "/src/assets/social_media/instagram.png",
      "/src/assets/social_media/linkedin.svg",

      "/src/assets/general/sri.png",
      "/src/assets/general/menu.svg",
      "/src/assets/general/close.svg",

    ];

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
      }, 500);

      const finalTimer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(finalTimer);
      };
    }
  }, [progress, setLoading]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: devAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const quotes = [
    "Turning coffee into code...",
    "Crafting pixels into experiences...",
    "Converting imagination into reality...",
    "Transforming ideas into innovation...",
  ];

  const quoteIndex = Math.min(3, Math.floor(progress / 25));
  const currentQuote = quotes[quoteIndex];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0e1630] to-[#1a1a2e] flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 0.8 }}>
      <img
        src="/src/assets/general/sri.png"
        alt="Site icon"
        className="w-14 h-14 rounded-full object-cover mb-4"
      />
      <div className="w-[280px] h-[280px] mb-8">
        <Lottie options={defaultOptions} />
      </div>

      <motion.div
        className="text-white text-xl font-medium tracking-wide mb-10 text-center px-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-[#915eff]">{currentQuote}</span>
      </motion.div>

      <div className="w-64 h-[3px] bg-gray-800/30 rounded-full">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#915eff] via-[#6b8aff] to-[#915eff]"
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>

      <p className="mt-4 text-white/70 text-sm">{Math.min(100, progress)}%</p>
    </motion.div>
  );
};

export default DevAnimationPreloader;