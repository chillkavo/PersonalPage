import { motion } from 'framer-motion'

// The hero's signature visual: the Great Wave's crest redrawn as layered
// contour lines — half topographic map, half circuit trace — fusing the
// "night wave" art direction with the security/engineering subject matter.
// This is the one place the page spends its motion budget: each line draws
// itself in once on load, then drifts almost imperceptibly.
const LINES = [
  { d: 'M10,260 C60,180 90,300 140,220 C190,140 230,260 280,190 C320,130 350,210 390,150', delay: 0 },
  { d: 'M0,300 C50,240 100,340 150,270 C210,190 250,300 310,230 C350,180 380,240 400,200', delay: 0.15 },
  { d: 'M0,340 C60,300 110,380 170,320 C230,250 270,340 330,290 C365,255 390,290 410,265', delay: 0.3 },
  { d: 'M20,220 C70,160 100,240 150,180 C200,110 240,210 290,150 C325,105 355,150 385,110', delay: 0.45 },
]

export default function KanagawaContour() {
  return (
    <svg
      viewBox="0 0 420 400"
      className="h-full w-full animate-drift"
      role="img"
      aria-label="Ilustración abstracta de una ola nocturna, inspirada en la Gran Ola de Kanagawa, representada como líneas de contorno"
    >
      <defs>
        <radialGradient id="glow" cx="70%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6FFFE9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6FFFE9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="110" r="160" fill="url(#glow)" />

      {LINES.map((line, i) => (
        <motion.path
          key={i}
          d={line.d}
          fill="none"
          stroke={i % 2 === 0 ? '#00B4D8' : '#6FFFE9'}
          strokeWidth={i === 0 ? 2.5 : 1.5}
          strokeOpacity={i === 0 ? 0.9 : 0.5 - i * 0.05}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: line.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Scattered points evoking the wave's spray / a signal trace */}
      {[
        [100, 200], [180, 160], [260, 140], [60, 260], [340, 120],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={cx}
          cy={cy}
          r="2.2"
          fill="#6FFFE9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 + i * 0.1 }}
        />
      ))}
    </svg>
  )
}
