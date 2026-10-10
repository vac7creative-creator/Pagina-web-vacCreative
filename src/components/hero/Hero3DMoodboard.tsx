import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import { useIsDesktop } from '../../hooks/useMediaQuery';

export const Hero3DMoodboard: React.FC = () => {
  const isDesktop = useIsDesktop();
  const [cycle, setCycle] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Continuously alive depth shift cycle every 2000ms (1.8s - 2.2s range)
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCycle((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Subtle mouse parallax handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Depth states for cycle transitions (Layer positions continuously exchange depth)
  // Continuous fluid transitions across 4 organic steps
  const getDepthStyle = (layerIndex: number) => {
    if (!isDesktop) {
      return { zIndex: 10 - layerIndex, translateZ: 0, scale: 1 };
    }

    const configurations = [
      // Cycle 0: Portrait forward right, Brand mid left, Landscape top left, Camera lower right, Plaque center
      [
        { zIndex: 40, z: 48, scale: 1.04, rotX: -2, rotY: 3, xOffset: 0, yOffset: 0, opacity: 1 }, // 0: Portrait
        { zIndex: 35, z: 20, scale: 0.99, rotX: 3, rotY: -6, xOffset: -8, yOffset: 8, opacity: 0.96 }, // 1: Brand Card
        { zIndex: 25, z: -15, scale: 0.95, rotX: -4, rotY: 5, xOffset: 12, yOffset: -12, opacity: 0.92 }, // 2: Landscape
        { zIndex: 30, z: 12, scale: 0.98, rotX: 2, rotY: -3, xOffset: 8, yOffset: 16, opacity: 0.95 }, // 3: Camera Rig
        { zIndex: 45, z: 62, scale: 1.05, rotX: 1, rotY: 2, xOffset: -4, yOffset: 4, opacity: 1 }, // 4: Plaque
      ],
      // Cycle 1: Brand Card floats to foreground, Portrait softens depth, Plaque glides gently
      [
        { zIndex: 32, z: 14, scale: 0.98, rotX: 2, rotY: -2, xOffset: 4, yOffset: -4, opacity: 0.95 }, // Portrait
        { zIndex: 45, z: 52, scale: 1.05, rotX: -2, rotY: 4, xOffset: 4, yOffset: -4, opacity: 1 }, // Brand Card
        { zIndex: 35, z: 18, scale: 1.01, rotX: 3, rotY: -4, xOffset: -4, yOffset: 4, opacity: 0.96 }, // Landscape
        { zIndex: 28, z: -10, scale: 0.95, rotX: -3, rotY: 4, xOffset: -8, yOffset: -8, opacity: 0.92 }, // Camera Rig
        { zIndex: 42, z: 46, scale: 1.02, rotX: -1, rotY: -2, xOffset: 6, yOffset: -6, opacity: 1 }, // Plaque
      ],
      // Cycle 2: Landscape & Cinema camera advance to the foreground, Brand card settles
      [
        { zIndex: 36, z: 28, scale: 1.01, rotX: -1, rotY: 1, xOffset: -4, yOffset: 4, opacity: 0.98 }, // Portrait
        { zIndex: 28, z: -8, scale: 0.96, rotX: 4, rotY: -5, xOffset: -12, yOffset: 12, opacity: 0.93 }, // Brand Card
        { zIndex: 45, z: 48, scale: 1.04, rotX: -3, rotY: 5, xOffset: 8, yOffset: -8, opacity: 1 }, // Landscape
        { zIndex: 42, z: 38, scale: 1.03, rotX: 1, rotY: -2, xOffset: 4, yOffset: 8, opacity: 1 }, // Camera Rig
        { zIndex: 34, z: 20, scale: 0.98, rotX: 2, rotY: 3, xOffset: -8, yOffset: 10, opacity: 0.98 }, // Plaque
      ],
      // Cycle 3: Cinema rig & Portrait harmonize in depth, Brand card re-emerges, landscape recedes
      [
        { zIndex: 42, z: 40, scale: 1.03, rotX: -1.5, rotY: 2, xOffset: 2, yOffset: -2, opacity: 1 }, // Portrait
        { zIndex: 38, z: 32, scale: 1.01, rotX: 1, rotY: -3, xOffset: 2, yOffset: 2, opacity: 0.98 }, // Brand Card
        { zIndex: 30, z: 5, scale: 0.97, rotX: 2, rotY: -2, xOffset: 2, yOffset: 2, opacity: 0.94 }, // Landscape
        { zIndex: 45, z: 44, scale: 1.04, rotX: -2, rotY: 2, xOffset: -4, yOffset: 4, opacity: 1 }, // Camera Rig
        { zIndex: 40, z: 36, scale: 1.01, rotX: 0, rotY: 0, xOffset: 0, yOffset: 0, opacity: 1 }, // Plaque
      ],
    ];

    const config = configurations[cycle][layerIndex];
    const parallaxFactor = (layerIndex + 1) * 6;

    return {
      zIndex: config.zIndex,
      opacity: config.opacity,
      transform: `perspective(1200px) translate3d(${
        config.xOffset + mousePos.x * parallaxFactor
      }px, ${config.yOffset + mousePos.y * parallaxFactor}px, ${config.z}px) rotateX(${
        config.rotX - mousePos.y * 3
      }deg) rotateY(${config.rotY + mousePos.x * 4}deg) scale(${config.scale})`,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] max-w-2xl mx-auto perspective-1200 transform-style-3d select-none"
    >
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#C5A059]/15 via-[#ECC880]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Layer 1: Core Portrait Layer (Cinematic Creative Visionary with golden lighting) */}
      <motion.div
        style={getDepthStyle(0)}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[5%] right-[10%] w-[58%] sm:w-[54%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-[#C5A059]/30 bg-black"
      >
        <img
          src="/images/hero_visionary_portrait_1791593233381.jpg"
          alt="Dirección de Arte V.A.C."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#ECC880]">
            <Sparkles size={11} />
            <span>DIRECCIÓN DE ARTE</span>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Luxury Brand Stationery Card (Matte black + gold embossed V.A.C.) */}
      <motion.div
        style={getDepthStyle(1)}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[10%] left-[2%] w-[48%] sm:w-[45%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#0E0F13]"
      >
        <img
          src="/images/hero_vac_luxury_card_1791593251773.jpg"
          alt="Identidad de marca V.A.C. Creative"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
      </motion.div>

      {/* Layer 3: Andean Landscape Drone View (Cinematic high production) */}
      <motion.div
        style={getDepthStyle(2)}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[8%] left-[6%] w-[42%] sm:w-[40%] aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-white/10 dark:border-white/10 bg-neutral-900"
      >
        <img
          src="/images/hero_cinematic_landscape_1791593242266.jpg"
          alt="Cinematografía documental de paisaje"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2.5 left-3 text-[9px] font-mono uppercase tracking-wider text-white/90">
          DOCUMENTAL 4K
        </div>
      </motion.div>

      {/* Layer 4: Cinema Camera Production Rig */}
      <motion.div
        style={getDepthStyle(3)}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[4%] right-[4%] w-[46%] sm:w-[42%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-white/10 bg-black"
      >
        <img
          src="/images/editorial_audiovisual_production_1790817294196.jpg"
          alt="Producción cinematográfica V.A.C."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 text-[9px] font-mono uppercase tracking-wider text-white/90">
          CINE & AUDIOVISUAL
        </div>
      </motion.div>

      {/* Layer 5: Luxury Gold Plaque ("CREACIÓN QUE INSPIRA" - Reference exact motif!) */}
      <motion.div
        style={getDepthStyle(4)}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[48%] left-[28%] sm:left-[32%] px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#121318]/90 dark:bg-[#121318]/95 backdrop-blur-md border border-[#C5A059]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(197,160,89,0.2)] text-white select-none pointer-events-none"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ECC880] animate-pulse" />
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#ECC880]">
            ESTUDIO
          </span>
        </div>
        <p className="font-sans text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-white">
          CREACIÓN QUE INSPIRA
        </p>
      </motion.div>

      {/* Layer 6: Floating Play / Reel Pill (Reference feature bottom-right) */}
      <div className="absolute -bottom-3 sm:bottom-0 right-[25%] sm:right-[30%] z-50 flex items-center gap-3 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#1C1E26]/90 border border-[#E7E1D4] dark:border-white/10 backdrop-blur-md shadow-lg text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
        <span className="w-6 h-6 rounded-full bg-[#C5A059] text-black flex items-center justify-center">
          <Play size={10} className="fill-black translate-x-0.5" />
        </span>
        <span className="font-mono tracking-widest uppercase text-[9px] hidden sm:inline">
          REEL DE PRODUCCIÓN
        </span>
      </div>
    </div>
  );
};
