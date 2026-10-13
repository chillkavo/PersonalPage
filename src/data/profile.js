// Centralized content so contact details and dates stay consistent between
// the Hero, Footer and any future section that references them.
export const CONTACT = {
  name: 'Santiago Contreras Bustos',
  headline: 'Seguridad de la Información · Auditoría de TI · GRC & Gobierno de IA',
  email: 'santocontreras22003@gmail.com',
  phone: '+57 313 403 4303',
  location: 'Bogotá, Colombia',
  linkedin: 'https://linkedin.com/in/santiago-contreras-chillsanto',
  linkedinLabel: 'linkedin.com/in/santiago-contreras-chillsanto',
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
      'Auditoría y activos de información: estandarización de la identificación, levantamiento y clasificación de más de 2.000 activos críticos según su nivel de riesgo, bajo ISO/IEC 27001, ISO/IEC 27005 y NIST; elaboración del manual de procedimientos del área.',
      'Cumplimiento regulatorio (SFC): consolidación de la información para reportes ante la Superintendencia Financiera, en particular la Circular Externa 033 (vulnerabilidades) y los reportes de nivel de madurez de la entidad.',
      'Gestión de vulnerabilidades con Qualys, priorizando por criticidad y dando seguimiento a los planes de remediación con las áreas responsables.',
      'Automatización de más de tres procesos de recolección y consolidación de datos con Python (pandas), macros y Power Automate, reduciendo el trabajo manual y los errores en la reportería.',
      'Informes mensuales, trimestrales y semestrales de riesgos y vulnerabilidades internas, con tableros en Power BI para presentar KPI a la alta gerencia.',
      'Gobierno de IA: construcción de los lineamientos y la política de uso seguro de IA generativa (Microsoft Copilot y Copilot Studio) junto al equipo de ciberseguridad, y actualización de políticas de herramientas colaborativas y emergentes.',
      'Seguridad en LLM y agentes: análisis de riesgos de prompt injection, fuga de información y shadow AI, y desarrollo de un agente en Copilot Studio para generar borradores de conceptos de seguridad, reduciendo los tiempos de respuesta del área.',
      'Apoyo transversal en hardening, seguridad en la nube y controles criptográficos, incluida la exploración de marcos de Criptografía Post-Cuántica (PQC).',
    ],
    tags: ['ISO 27001/27005', 'NIST', 'SFC — CE 033', 'Qualys', 'Python', 'Power BI', 'AI Governance'],
  },
  {
    role: 'Soporte y Seguridad de TI',
    org: 'Innovaser S.A',
    period: 'Jun 2025 — Dic 2025',
    summary: 'Desarrollo y soporte de TI para empresas cliente, con foco en seguridad de infraestructura y endpoints.',
    highlights: [
      'Escaneos de infraestructura con Nmap y Qualys para identificar puertos y servicios expuestos y configuraciones débiles, con apoyo en la mitigación de brechas.',
      'Configuración segura de estaciones y servidores (mínimo privilegio, parches, reglas de firewall) y despliegue de EDR para proteger los endpoints.',
      'Implementación de controles de seguridad física y lógica en equipos tecnológicos, asegurando la integridad de los activos de las empresas cliente.',
    ],
    tags: ['Nmap', 'Qualys', 'Hardening', 'EDR'],
  },
]

export const PROJECTS = [
  {
    title: 'Verifiable Containment for AI Agents',
    subtitle: 'Autor principal · Apart Research · Sep 2026',
    description:
      'Esquema de atestación (execution envelope) para la contención de agentes de IA, con 7 familias de capacidades bajo un modelo default-deny y un verificador de referencia que detecta 11 clases de violación de contención. Trazabilidad del incidente real de escape de sandbox de OpenAI/Hugging Face (jul. 2026) contra el esquema, validado sobre 16 casos sintéticos. Verificador y lógica de telemetría en código abierto.',
    tags: ['AI Safety', 'Agentes de IA', 'Default-deny', 'Atestación', 'Open Source'],
    featured: true,
  },
  {
    title: 'Sistema de Gestión de Alquileres',
    subtitle: 'Proyecto empresarial en producción · 2025',
    description:
      'Plataforma web desplegada en producción para una empresa local, con autenticación JWT, cifrado de contraseñas y control de acceso basado en roles (RBAC) para mitigar accesos no autorizados.',
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'RBAC'],
    featured: false,
  },
  {
    title: 'Auditoría de Credenciales',
    subtitle: 'Seguridad ofensiva · Laboratorio personal',
    description:
      'Pruebas de penetración en un laboratorio propio con THC Hydra, simulando ataques de fuerza bruta y de diccionario contra sistemas de autenticación para evaluar la robustez de las políticas de contraseñas y de los mecanismos de inicio de sesión.',
    tags: ['THC Hydra', 'Pentesting', 'Fuerza bruta', 'Políticas de contraseñas'],
    featured: false,
  },
]

export const SKILLS = [
  {
    category: 'Seguridad & GRC',
    items: [
      'Gestión de vulnerabilidades (Nmap, Qualys)',
      'ISO/IEC 27001 · 27005',
      'ISO/IEC 42001',
      'Hardening y EDR',
      'SFC — CE 033',
      'Red Team / Blue Team (fund.)',
      'Gestión de activos de información',
      'Controles SOX',
      'GRC y Compliance',
    ],
  },
  {
    category: 'Herramientas & Análisis',
    items: [
      'Power Automate',
      'Power Apps',
      'Power BI',
      'Excel avanzado',
      'SonarQube',
      'Microsoft Defender',
    ],
  },
  {
    category: 'IA & Tecnologías emergentes',
    items: [
      'LLMs (GPT, Claude, Copilot)',
      'Prompt injection y riesgos LLM',
      'AI Governance',
      'Criptografía Post-Cuántica (PQC)',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'Cloud Security (fund. AWS/Azure)',
      'GitHub Actions (CI/CD)',
      'Docker (básico)',
      'APIs REST',
      'NestJS',
      'Spring Boot',
    ],
  },
  {
    category: 'Certificaciones',
    items: [
      'Auditor Interno ISO/IEC 27001:2022 — SGS (2026)',
      'Auditor Interno ISO/IEC 27005:2022 — SGS (2026)',
      'TOEFL ITP B2 — Listening & Speaking (2026)',
      'Introduction to Cybersecurity — Cisco (2025)',
    ],
  },
]
