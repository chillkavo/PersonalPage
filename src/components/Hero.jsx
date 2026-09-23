import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { CONTACT } from '../data/profile'
import KanagawaContour from './KanagawaContour'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-radial-fade pt-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-5">
        <motion.div
          className="md:col-span-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="font-mono text-sm text-cyan-soft">
            {CONTACT.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl font-semibold leading-tight text-smoke sm:text-5xl lg:text-6xl"
          >
            {CONTACT.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-cyan sm:text-xl">
            Information Security Analyst · GRC &amp; AI Governance · DevSecOps
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            No solo evalúo controles; construyo soluciones seguras. Uniendo la estrategia de la
            auditoría ISO 27001 con la ejecución técnica en Python, React y entornos cloud.
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
              className="flex items-center gap-2 rounded-[10px] border border-cyan-soft/30 px-6 py-3 text-sm font-medium text-smoke transition-colors hover:border-cyan-soft hover:text-cyan-soft"
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
              className="text-muted transition-colors hover:text-cyan-soft"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub de Santiago Contreras"
              className="text-muted transition-colors hover:text-cyan-soft"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:col-span-2 md:block" aria-hidden="true">
          <KanagawaContour />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Ir a la sección Perfil"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-cyan-soft"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
