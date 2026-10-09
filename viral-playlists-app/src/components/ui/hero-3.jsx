"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Reusable Action Button component
const ActionButton = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    aria-label="Submit your viral playlist site"
    className="mt-5 px-7 py-2.5 rounded-full bg-[#2489d3] text-white font-bold shadow-xl transition-all hover:bg-[#1f7fc7] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2489d3] focus:ring-opacity-75 cursor-pointer flex items-center gap-2"
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero = ({
  tagline,
  title,
  description,
  ctaText,
  images = [],
  names = [],
  className,
  onCtaClick,
  onImageClick,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const reduceMotion = useReducedMotion();

  // Two identical halves in a content-sized track (w-max) with per-item margins (no flex gap),
  // so translating by exactly -50% moves one full copy and the loop has no seam
  const duplicatedImages = React.useMemo(() => {
    if (!images || images.length === 0) return [];
    return [...images, ...images];
  }, [images]);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex flex-col items-center justify-start text-center px-4 pt-2 sm:pt-4 pb-8 sm:pb-10",
        className
      )}
    >
      <div className="z-20 flex flex-col items-center max-w-4xl mx-auto">
        {/* Tagline Badge */}
        {tagline && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-4 inline-block rounded-full border border-[#dcd8cc] bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#334155] backdrop-blur-md shadow-xs font-mono2"
          >
            {tagline}
          </motion.div>
        )}

        {/* Main Title - Restored Yatra One / Display Font */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-[#17212b] leading-tight tracking-tight"
        >
          {typeof title === "string" ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.4 }}
            className="mt-3 max-w-2xl text-base sm:text-lg font-medium text-[#334155] leading-relaxed font-sans"
          >
            {description}
          </motion.p>
        )}

        {/* Call to Action Button */}
        {ctaText && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.5 }}
          >
            <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
          </motion.div>
        )}
      </div>

      {/* Animated Image Marquee Carousel at bottom with performance lazy loading */}
      <div className="w-full mt-6 md:mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max py-6"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: Math.max(20, images.length * 4), repeat: Infinity }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.button
              type="button"
              key={index}
              aria-label={`Show ${names?.[index % images.length] || "site"} in the directory`}
              whileHover={{ scale: 1.05, rotate: 0 }}
              onClick={() => onImageClick && onImageClick(index % images.length)}
              className="relative aspect-[16/10] h-36 sm:h-48 md:h-56 w-56 sm:w-[300px] md:w-[360px] mr-6 sm:mr-8 flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-all duration-300"
              style={{
                rotate: `${(index % images.length) % 2 === 0 ? -3 : 4}deg`,
              }}
            >
              <img
                src={src}
                alt=""
                loading={index < 3 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                decoding="async"
                width="450"
                height="280"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.style.visibility = 'hidden'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono2 text-xs text-white/90 bg-black/60 px-3 py-1 rounded-full border border-white/20">
                  ♫ {names?.[index % images.length] || 'Preview'}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedMarqueeHero;
