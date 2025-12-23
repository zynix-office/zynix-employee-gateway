import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2000),
      setTimeout(() => setStage(4), 2800),
      setTimeout(() => onComplete(), 3800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Deep dark background */}
        <div className="absolute inset-0 bg-[hsl(220,25%,2%)]">
          {/* Radial gradient center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(45,100%,60%,0.08)_0%,transparent_60%)]" />
          
          {/* Diamond pattern overlay */}
          <div className="absolute inset-0 diamond-pattern opacity-30" />
          
          {/* Animated golden orbs */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(45,100%,60%,0.1) 0%, transparent 70%)',
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Rotating ring */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating golden particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsla(45, 100%, ${60 + Math.random() * 20}%, ${0.4 + Math.random() * 0.4})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100 - Math.random() * 100],
              }}
              transition={{ 
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Crown emblem */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 -m-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsla(45,100%,60%,0.3) 0%, transparent 70%)',
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Logo container */}
            <div className="relative w-36 h-36 md:w-44 md:h-44">
              {/* Hexagonal frame */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
              >
                {/* Outer hexagon with glow */}
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(45 100% 70%)" />
                    <stop offset="50%" stopColor="hsl(45 100% 55%)" />
                    <stop offset="100%" stopColor="hsl(35 100% 50%)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background hexagon */}
                <motion.polygon
                  points="50,3 97,28 97,72 50,97 3,72 3,28"
                  fill="hsla(220, 25%, 5%, 0.8)"
                  stroke="url(#goldGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
                
                {/* Inner hexagon */}
                <motion.polygon
                  points="50,12 88,32 88,68 50,88 12,68 12,32"
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                {/* Z letter - bold and elegant */}
                <motion.path
                  d="M 28 32 L 72 32 L 72 38 L 42 62 L 72 62 L 72 68 L 28 68 L 28 62 L 58 38 L 28 38 Z"
                  fill="url(#goldGradient)"
                  filter="url(#glow)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: stage >= 1 ? 1 : 0, scale: stage >= 1 ? 1 : 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </svg>
              
              {/* Pulsing rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-primary/30"
                  style={{ margin: `-${(i + 1) * 12}px` }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.5 + i * 0.2], 
                    opacity: [0.6, 0] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Company name with staggered letters */}
          <motion.div
            className="overflow-hidden mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 2 ? 1 : 0 }}
          >
            <motion.h1
              className="font-display text-6xl md:text-8xl font-bold tracking-[0.2em] text-gradient-gold"
              initial={{ y: 100 }}
              animate={{ y: stage >= 2 ? 0 : 100 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              ZYNIX
            </motion.h1>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: stage >= 3 ? 1 : 0, opacity: stage >= 3 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Tagline */}
          <motion.p
            className="text-platinum text-sm md:text-base tracking-[0.4em] uppercase font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Software Excellence
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 4 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress dots */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary/40"
                  animate={{
                    backgroundColor: ['hsla(45,100%,60%,0.4)', 'hsla(45,100%,60%,1)', 'hsla(45,100%,60%,0.4)'],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              Loading Experience
            </p>
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20" />

        {/* Subtle scanline */}
        <div className="absolute inset-0 scanline pointer-events-none opacity-50" />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
