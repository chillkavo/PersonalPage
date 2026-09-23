// Centralized content so contact details and dates stay consistent between
// the Hero, Footer and any future section that references them.
export const CONTACT = {
  name: 'Santiago Contreras Bustos',
  email: 'santocontreras22003@gmail.com',
  phone: '+57 313 403 4303',
  location: 'Bogotá, Colombia',
  linkedin: 'https://linkedin.com/in/santiago-contreraschillsanto',
  linkedinLabel: 'linkedin.com/in/santiago-contreraschillsanto',
  github: 'https://github.com/chillkavo',
  githubLabel: 'github.com/chillkavo',
  cv: './Santiago_Contreras_CV.pdf',
}

export const EXPERIENCE = [
  {
    role: 'Practicante en Seguridad de la Información',
    org: 'Banco AV Villas (Grupo Aval)',
    period: 'Ene 2026 — Jul 2026',
    highlights: [
      'Estandarización de la identificación, levantamiento y clasificación de más de 2.000 activos críticos según ISO/IEC 27001, ISO/IEC 27005 y NIST; elaboración del manual de procedimientos del área.',
      'Gestión y seguimiento de vulnerabilidades con Qualys, priorizando por criticidad y coordinando planes de remediación con las áreas responsables.',
      'Automatización con Python (pandas) y Power Automate de más de tres procesos de recolección y consolidación de datos, reduciendo el trabajo manual en la reportería.',
      'Consolidación de reportes regulatorios para la Superintendencia Financiera (Circular Externa 033) y de nivel de madurez de la entidad.',
      'Construcción de los lineamientos de Gobierno de IA para el uso seguro de IA generativa (Copilot y Copilot Studio), con análisis de riesgos de prompt injection, fuga de información y shadow AI.',
      'Desarrollo de un agente en Copilot Studio para la generación de borradores de conceptos de seguridad, reduciendo los tiempos de respuesta del área.',
    ],
    tags: ['ISO 27001/27005', 'Qualys', 'Python', 'AI Governance', 'Power BI'],
  },
  {
    role: 'Desarrollador & Técnico de Sistemas',
    org: 'Innovaser S.A',
    period: 'Jun 2025 — Dic 2025',
    highlights: [
      'Desarrollo e implementación en producción de una plataforma web de gestión de alquileres (Spring Boot, React, MySQL), con autenticación JWT y cifrado de credenciales.',
      'Soporte técnico a empresas cliente: diagnóstico de equipos, gestión de inventario tecnológico y atención de requerimientos de usuario final.',
    ],
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT'],
  },
]

export const PROJECTS = [
  {
    title: 'Chatbot Automatizado con IA',
    subtitle: 'N8n + LLM',
    description:
      'Flujos conversacionales automatizados con N8n e integración de modelos de lenguaje para clasificar solicitudes, aplicando prompt engineering, validación de salidas y control de información sensible.',
    tags: ['N8n', 'LLM', 'Prompt Engineering', 'Data Governance'],
    featured: true,
  },
  {
    title: 'Sistema de Gestión de Alquileres',
    subtitle: 'Proyecto empresarial en producción',
    description:
      'Plataforma web desplegada para una empresa local: backend en Spring Boot, frontend en React, autenticación JWT, cifrado de contraseñas y control de acceso por roles.',
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'RBAC'],
    featured: false,
  },
]

export const SKILLS = [
  {
    category: 'GRC & Seguridad',
    items: [
      'Gestión de vulnerabilidades',
      'ISO/IEC 27001 · 27005',
      'ISO/IEC 42001',
      'AI Governance',
      'Hardening',
      'SFC — CE 033',
      'Red Team / Blue Team (fund.)',
      'Gestión de activos de información',
      'Controles SOX',
    ],
  },
  {
    category: 'Desarrollo & Automatización',
    items: [
      'Python',
      'React',
      'Spring Boot',
      'NestJS',
      'APIs REST',
      'CI/CD — GitHub Actions',
      'SonarQube',
      'Docker (básico)',
      'Power Automate',
    ],
  },
  {
    category: 'Certificaciones',
    items: [
      'Auditor Interno ISO/IEC 27001:2022 — SGS',
      'Auditor Interno ISO/IEC 27005:2022 — SGS',
      'TOEFL ITP B2 — Listening & Speaking',
      'Introduction to Cybersecurity — Cisco',
    ],
  },
]
