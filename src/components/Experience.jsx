import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-smoke sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experiencia
        </motion.h2>

        <div className="relative mt-14 space-y-14 border-l border-cyan-soft/20 pl-8 sm:pl-10">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.org}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            >
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-cyan shadow-glow sm:-left-[49px]" />

              <p className="font-mono text-xs text-cyan-soft">{job.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-smoke">{job.role}</h3>
              <p className="text-sm text-cyan">{job.org}</p>
              {job.summary && (
                <p className="mt-3 text-sm italic leading-relaxed text-muted">{job.summary}</p>
              )}

              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-soft/60" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-soft/20 px-3 py-1 font-mono text-xs text-cyan-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
