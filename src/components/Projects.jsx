import { motion } from 'framer-motion'
import { ShieldAlert, KeyRound } from 'lucide-react'
import { PROJECTS } from '../data/profile'

const ICONS = [ShieldAlert, KeyRound]

export default function Projects() {
  return (
    <section id="projects" className="bg-panel/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-smoke sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Proyectos destacados
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {PROJECTS.map((project, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.article
                key={project.title}
                className={`glass group relative overflow-hidden rounded-[20px] p-8 shadow-glass transition-shadow hover:shadow-glow ${
                  project.featured ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              >
                <Icon
                  size={22}
                  className="text-cyan-soft transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-5 font-display text-xl font-semibold text-smoke">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-cyan">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-soft/20 px-3 py-1 font-mono text-xs text-cyan-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
