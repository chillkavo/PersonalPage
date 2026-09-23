import { Github, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../data/profile'
import WaveDivider from './WaveDivider'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-panel/40">
      <WaveDivider tone="calm" />

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-4">
        <div className="glass rounded-[20px] p-8 text-center shadow-glass sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-smoke sm:text-3xl">
            ¿Construimos algo seguro juntos?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Abierto a oportunidades en seguridad de la información, GRC y desarrollo seguro.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-sm text-smoke transition-colors hover:text-cyan-soft"
            >
              <Mail size={16} />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm text-smoke transition-colors hover:text-cyan-soft"
            >
              <Linkedin size={16} />
              {CONTACT.linkedinLabel}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm text-smoke transition-colors hover:text-cyan-soft"
            >
              <Github size={16} />
              {CONTACT.githubLabel}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {CONTACT.name}. Construido con React, Tailwind CSS y
          Framer Motion.
        </p>
      </div>
    </footer>
  )
}
