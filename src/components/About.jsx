import { motion } from 'framer-motion'
import { ShieldCheck, Code2, BadgeCheck, FileText } from 'lucide-react'

const CREDENTIALS = [
  { icon: ShieldCheck, label: 'Auditor Interno ISO/IEC 27001:2022' },
  { icon: ShieldCheck, label: 'Auditor Interno ISO/IEC 27005:2022' },
  { icon: FileText, label: 'Autor principal — Apart Research (2026)' },
  { icon: Code2, label: 'Java/Spring Boot · Python · React · CI/CD' },
  { icon: BadgeCheck, label: 'Ingeniería de Sistemas — Univ. Libre (8.º semestre, 2026)' },
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
            información, auditoría de TI y riesgo tecnológico en el sector bancario. Certificado
            como auditor interno ISO/IEC 27001 e ISO/IEC 27005, he trabajado directamente en gestión
            y clasificación de activos de información, gestión de vulnerabilidades, evaluación de
            controles y cumplimiento de los lineamientos de la Superintendencia Financiera de
            Colombia.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            En GRC documento procedimientos de auditoría interna, elaboro políticas de seguridad,
            analizo riesgos y reporto indicadores a la alta gerencia. He participado en los
            lineamientos de uso seguro de IA generativa e investigo la seguridad y gobernanza de
            agentes de IA, con una publicación como autor principal junto a Apart Research sobre
            esquemas de atestación para la contención de agentes autónomos.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Ese perfil se complementa con una base sólida en ingeniería de software (Java/Spring
            Boot, Python, React, bases de datos relacionales, CI/CD) y práctica en seguridad
            ofensiva y hardening de infraestructura (Nmap, Qualys, THC Hydra), lo que me permite
            evaluar controles desde la perspectiva técnica, ofensiva y de negocio, y comunicar
            hallazgos con claridad a equipos técnicos y directivos.
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
