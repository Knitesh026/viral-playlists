'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Cta } from '@/components/ui/hero-10-utils/cta'

const variantStyles = {
  standard: {
    section: 'pt-1 pb-4 sm:pt-2 sm:pb-6', // Reduced top padding
    title: 'text-4xl sm:text-6xl md:text-7xl font-black leading-tight',
    description: 'max-w-2xl text-base sm:text-xl font-semibold',
    header: 'gap-3',
    content: 'gap-4 sm:gap-6',
    fan: 'max-w-full px-2 sm:px-6', // Increased max-width to full
    fanCard: 'aspect-16/9',
  },
  compact: {
    section: 'pt-1 pb-3 sm:pt-1 sm:pb-4',
    title: 'text-3xl sm:text-5xl md:text-6xl font-black leading-tight',
    description: 'max-w-xl text-sm sm:text-lg font-medium',
    header: 'gap-2',
    content: 'gap-3 sm:gap-4',
    fan: 'max-w-full px-2',
    fanCard: 'aspect-16/9',
  },
}

// Increased card width slots (~75% - 85% width)
const fanSlots = [
  { width: 'w-[72%] sm:w-[76%]', layout: '-mr-28 sm:-mr-48 z-10', rotate: -5, x: 80, ty: 28 },
  { width: 'w-[78%] sm:w-[84%]', layout: 'z-20', rotate: 0, x: 0, ty: -12 },
  { width: 'w-[72%] sm:w-[76%]', layout: '-ml-28 sm:-ml-24 z-10', rotate: 5, x: -80, ty: 28 },
]

const fanContainer = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const fanCard = {
  hidden: (slot) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty,
  }),
  visible: (slot) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ImageFan({
  images,
  imageAlts,
  cardAspect,
  animate,
  onImageClick,
}) {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center py-4 overflow-visible"
      variants={fanContainer}
      initial={animate ? 'hidden' : false}
      whileInView={animate ? 'visible' : undefined}
      animate={animate ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1]
        return (
          <motion.div
            key={src + i}
            custom={slot}
            variants={fanCard}
            onClick={() => onImageClick && onImageClick(i)}
            className={cn(
              'relative shrink-0 overflow-hidden rounded-3xl shadow-2xl outline outline-black/10 dark:outline-white/10 cursor-pointer hover:scale-[1.03] transition-all duration-500 border-4 border-white/90 bg-slate-900',
              cardAspect,
              slot.width,
              slot.layout,
            )}
          >
            <img
              src={src}
              alt={imageAlts?.[i] ?? ''}
              decoding="async"
              className="size-full object-cover object-top transition-all duration-700 opacity-90 hover:opacity-100"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=900&auto=format&fit=crop'
              }}
            />
            {/* Soft dark overlay gradient so text over card reads perfectly */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-black/30" />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function Hero10({
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  socialProof,
  images = [],
  imageAlts = [],
  animation = 'subtle',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
  onImageClick,
}) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant] || variantStyles.standard

  // Auto swipe card state (rotates images array every 3.5 seconds)
  const [cardOffset, setCardOffset] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (isHovered || images.length <= 1) return

    const interval = setInterval(() => {
      setCardOffset((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isHovered, images.length])

  // Rotated images array for 2x cards based on cardOffset
  const rotatedImages = React.useMemo(() => {
    if (!images.length) return []
    const offset = cardOffset % images.length
    return [...images.slice(offset), ...images.slice(0, offset)]
  }, [images, cardOffset])

  const rotatedAlts = React.useMemo(() => {
    if (!imageAlts.length) return []
    const offset = cardOffset % images.length
    return [...imageAlts.slice(offset), ...imageAlts.slice(0, offset)]
  }, [imageAlts, cardOffset])

  const titleElement = title && (
    <h1
      className={cn(
        'font-display tracking-tight text-balance text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
      {(titleLine2Prefix || titleHighlight) && (
        <>
          <br />
          <Balancer>
            {titleLine2Prefix && <span className="text-white">{titleLine2Prefix} </span>}
            {titleHighlight && (
              <span className="text-[#38bdf8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-black">{titleHighlight}</span>
            )}
          </Balancer>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-slate-100 font-sans leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pt-1">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'outline' }}
        />
      )}
    </div>
  )

  const socialProofElement = socialProof && (
    <p className="text-[#17212b] text-xs font-mono2 font-bold bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-white shadow-lg">
      {socialProof}
    </p>
  )

  return (
    <section 
      className="relative isolate w-full overflow-hidden pt-1 pb-4 sm:pt-2 sm:pb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mx-auto w-full max-w-[95vw] px-2 sm:px-4">
        
        {/* Background 2x Width Cards Showcase */}
        <div className={cn('mx-auto w-full relative z-0', vs.fan)}>
          <ImageFan
            images={rotatedImages}
            imageAlts={rotatedAlts}
            cardAspect={vs.fanCard}
            animate={animate}
            onImageClick={(i) => {
              const actualIdx = (cardOffset + i) % images.length
              if (onImageClick) onImageClick(actualIdx)
            }}
          />
        </div>

        {/* Seamless Content Overlapped Directly over Cards (No Background Box) */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
          <div className="max-w-4xl pointer-events-auto flex flex-col items-center gap-4">
            <div className={cn('flex w-full flex-col items-center', vs.header)}>
              {titleElement}
              {descriptionElement}
            </div>

            <div className="flex flex-col items-center gap-3 mt-1">
              {ctasElement}
              {socialProofElement}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero10;
