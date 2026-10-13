import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { CONTACT } from '../data/profile'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* The wave — Santiago's own "Kanagawa at night" artwork, drifting
          slowly behind the content instead of sitting as a static banner. */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <picture className="block h-full w-full">
          <source
            media="(max-width: 640px)"
            srcSet="./images/kanagawa-banner-mobile.webp"
            type="image/webp"
          />
          <source srcSet="./images/kanagawa-banner.webp" type="image/webp" />
          <img
            src="./images/kanagawa-banner.jpg"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="h-full w-full origin-center object-cover object-[22%_35%] animate-wave-drift sm:object-[85%_38%]"
          />
        </picture>
      </div>

      {/* Scrim: on mobile the text spans full width, so a flat wash keeps it
          legible; from sm up, a directional gradient darkens only the text
          column and leaves the wave and moon uncovered on the right. */}
      <div className="absolute inset-0 -z-10 bg-abyss/75 sm:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-abyss via-abyss/75 to-transparent sm:block" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-abyss/55 via-transparent to-transparent" />
      {/* Seam into the section below */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-abyss to-transparent" />

      <motion.div
        className="relative mx-auto max-w-6xl px-6 pt-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="font-mono text-sm font-medium tracking-wide text-cyan-soft [text-shadow:0_1px_12px_rgba(11,19,43,0.9)]">
          {CONTACT.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-smoke [text-shadow:0_2px_24px_rgba(11,19,43,0.85)] sm:text-5xl lg:text-6xl"
        >
          {CONTACT.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-lg font-medium text-cyan-soft [text-shadow:0_1px_16px_rgba(11,19,43,0.9)] sm:text-xl">
          {CONTACT.headline}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-smoke [text-shadow:0_1px_12px_rgba(11,19,43,0.9)] sm:text-lg">
          Experiencia en el sector bancario en auditoría de TI, gestión de vulnerabilidades y
          cumplimiento bajo ISO/IEC 27001, 27005 y NIST. Investigo la seguridad y gobernanza de
          agentes de IA, y respaldo los controles con automatización en Python y desarrollo seguro.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-[10px] bg-cyan px-6 py-3 text-sm font-medium text-abyss transition-transform hover:-translate-y-0.5 hover:bg-cyan-soft"
          >
            Ver proyectos
          </a>
          <a
            href={CONTACT.cv}
            download
            className="glass flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium text-smoke transition-colors hover:border-cyan-soft hover:text-cyan-soft"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-5">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn de Santiago Contreras"
            className="text-smoke transition-colors hover:text-cyan-soft"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub de Santiago Contreras"
            className="text-smoke transition-colors hover:text-cyan-soft"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Ir a la sección Perfil"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-smoke transition-colors hover:text-cyan-soft"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
