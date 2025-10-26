import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MatrixRain } from "./MatrixRain";
import { Typewriter } from "react-simple-typewriter";

const ScrollScene = ({ onRedPill }) => {
  const [showContent, setShowContent] = useState(false);
  const [welcomeStage, setWelcomeStage] = useState(false);
  const [startZoom, setStartZoom] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [pillClicked, setPillClicked] = useState(false);

  const glyphs = "01ψ∑µΩæ₪$#@&".split("");
  const enterSoundRef = useRef(null);
  const whooshSoundRef = useRef(null);

const handleRedPill = () => {
  if (pillClicked) return;
  setPillClicked(true);

  // 🔊 Play first sound
  if (enterSoundRef.current) {
    enterSoundRef.current.volume = 0.7;
    enterSoundRef.current.currentTime = 0;
    enterSoundRef.current
      .play()
      .catch((err) => console.warn("Enter sound failed:", err));
  }

  // ⏱️ Play whoosh after a short delay
  setTimeout(() => {
    if (whooshSoundRef.current) {
      whooshSoundRef.current.volume = 0.7;
      whooshSoundRef.current.currentTime = 0;
      whooshSoundRef.current
        .play()
        .catch((err) => console.warn("Whoosh sound failed:", err));
    }
  }, 1200); 

  // Start Matrix animation chain
  setTimeout(() => {
    setWelcomeStage(true);
    setTimeout(() => {
      setStartZoom(true);
      setTimeout(() => {
        setShowFlash(true);
        setTimeout(() => {
          setShowContent(true);
          setWelcomeStage(false);
          if (onRedPill) onRedPill();
        }, 400);
      }, 800);
    }, 1000);
  }, 700);
};


  const handleMouseMove = (e) => {
    const ripple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 500);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black font-mono text-green-400"
      onMouseMove={handleMouseMove}
    >
      <MatrixRain reverse={startZoom || showFlash} />

      {/* 🌀 Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none rounded-full border border-green-400/60 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]"
          style={{
            top: ripple.y - 8,
            left: ripple.x - 8,
            width: "16px",
            height: "16px",
            animation: "matrixRipple 0.6s ease-out forwards",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(34,197,94,0.15)",
          }}
        />
      ))}

      {/* 🔊 Matrix enter sound */}
      <audio ref={enterSoundRef} src="/sounds/enter.mp3" preload="auto" />
      <audio ref={whooshSoundRef} src="/sounds/whoosh.mp3" preload="auto" />

      {/* Pill + Typewriter */}
      <motion.div
        initial={{ scale: 1 }}
        animate={startZoom ? { scale: 2 } : { scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="text-center px-6">
          <AnimatePresence>
            {!showContent && !welcomeStage && (
              <>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                >
                  <Typewriter
                    words={["./KUSH DASTANE..."]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={0}
                    delaySpeed={1000}
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-4 text-sm sm:text-base md:text-lg text-green-300"
                >
                  The Matrix has you.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="flex justify-center mt-6 relative"
                >
                  {!pillClicked ? (
                    <motion.button
                      onClick={handleRedPill}
                      whileTap={{ scale: 0.9 }}
                      className="backdrop-blur-sm bg-red-600/40 hover:bg-red-500/40 px-8 py-3 rounded-full text-white text-sm tracking-widest z-10"
                    >
                      Enter inside
                    </motion.button>
                  ) : (
                    <div className="relative w-[150px] h-[40px] flex flex-wrap justify-center items-center">
                      {glyphs.map((glyph, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                          animate={{
                            opacity: 0,
                            scale: [1, 1.5],
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100,
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          className="text-green-400 text-sm absolute"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {glyph}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {welcomeStage && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold glitch-text"
            >
              Welcome to the Portfolio
            </motion.h2>
          )}

          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white mt-10"
            >
              <h2 className="text-xl font-bold">
                Welcome to the Real Website.
              </h2>
              {/* Real site content */}
            </motion.div>
          )}
        </div>
      </motion.div>

      {showFlash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white z-50"
        />
      )}
    </div>
  );
};

export default ScrollScene;
