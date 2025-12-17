import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => onComplete(), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/60"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -200],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}

          {/* Gradient orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Logo container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Hexagon logo */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-32 h-32 md:w-40 md:h-40"
            >
              {/* Outer glow hexagon */}
              <motion.polygon
                points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                fill="none"
                stroke="hsl(152 100% 50%)"
                strokeWidth="1"
                className="animate-glow"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              {/* Main hexagon */}
              <motion.polygon
                points="50,10 90,30 90,70 50,90 10,70 10,30"
                fill="none"
                stroke="hsl(152 100% 50%)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Inner Z letter */}
              <motion.path
                d="M 30 35 L 70 35 L 35 65 L 70 65"
                fill="none"
                stroke="hsl(152 100% 50%)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: stage >= 1 ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </svg>

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.5], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Company name */}
          <motion.h1
            className="mt-8 font-display text-5xl md:text-7xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <span className="neon-text">ZYNIX</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mt-4 text-muted-foreground text-lg tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 10 }}
            transition={{ duration: 0.6 }}
          >
            Software Solutions
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-8 w-48 h-1 bg-secondary rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-neon-cyan"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 scanline pointer-events-none" />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
