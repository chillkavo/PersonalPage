import { motion } from 'framer-motion'
import { SKILLS } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-smoke sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Habilidades
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-semibold text-cyan-soft">
                {group.category}
              </h3>
              <div className="mt-4 h-px w-12 bg-cyan-soft/30" />
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-soft/15 bg-panel/60 px-3 py-1.5 font-mono text-xs text-smoke"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
