import { motion } from 'framer-motion'
import { ShieldCheck, Code2, BadgeCheck } from 'lucide-react'

const CREDENTIALS = [
  { icon: ShieldCheck, label: 'Auditor Interno ISO/IEC 27001:2022' },
  { icon: ShieldCheck, label: 'Auditor Interno ISO/IEC 27005:2022' },
  { icon: Code2, label: 'Python · React · Spring Boot · CI/CD' },
  { icon: BadgeCheck, label: 'Ingeniería de Sistemas — Univ. Libre (2026)' },
]

export default function About() {
  return (
    <section id="about" className="bg-panel/40 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-5">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl font-semibold text-smoke sm:text-4xl">
            El puente entre negocio y tecnología
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Soy estudiante de Ingeniería de Sistemas con experiencia práctica en seguridad de la
            información, auditoría de TI y riesgo tecnológico en el sector bancario. Trabajo
            directamente en gestión y clasificación de activos de información, gestión de
            vulnerabilidades, evaluación de controles y cumplimiento de los lineamientos de la
            Superintendencia Financiera de Colombia.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            En GRC documento procedimientos de auditoría interna, elaboro políticas y estándares
            de seguridad, analizo riesgos y reporto indicadores a la alta gerencia — incluyendo
            los lineamientos de uso seguro de IA generativa y la identificación de riesgos
            emergentes como prompt injection, fuga de información y shadow AI.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Ese perfil se complementa con una base sólida en ingeniería de software, lo que me
            permite evaluar controles desde la perspectiva técnica y de negocio, y comunicar
            hallazgos con claridad tanto a equipos técnicos como a directivos.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="glass rounded-[20px] p-6 shadow-glass">
            <ul className="space-y-4">
              {CREDENTIALS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-cyan-soft" />
                  <span className="text-sm text-smoke">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
