export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    description: "Interfaces modernas, dinámicas y orientadas a la experiencia de usuario.",
    skills: [
      { name: "React", icon: "Code", level: "Avanzado", hoverInfo: "Desarrollo de SPAs interactivas, hooks personalizados, gestión de estado y optimización." },
      { name: "JavaScript (ES6+)", icon: "FileCode", level: "Avanzado", hoverInfo: "Programación asíncrona, manipulación DOM, closures y patrones de diseño." },
      { name: "Tailwind CSS", icon: "Palette", level: "Avanzado", hoverInfo: "Diseño responsive, utility-first, animaciones y sistemas de diseño a medida." },
      { name: "HTML5 / CSS3", icon: "Globe", level: "Avanzado", hoverInfo: "Estructura semántica, accesibilidad (a11y), flexbox, CSS grid y animaciones." }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    description: "Lógica de negocio robusta, APIs RESTful y servicios escalables.",
    skills: [
      { name: "Python", icon: "Terminal", level: "Avanzado", hoverInfo: "Desarrollo backend, personalización en Odoo, scripts de automatización y manipulación de datos." },
      { name: "Node.js", icon: "Cpu", level: "Intermedio-Avanzado", hoverInfo: "Construcción de microservicios, APIs REST asíncronas y tooling en JS." },
      { name: "APIs RESTful", icon: "Workflow", level: "Avanzado", hoverInfo: "Diseño, documentación e integración de servicios REST JSON con autenticación segura." }
    ]
  },
  {
    id: "erp",
    title: "Sistemas ERP",
    icon: "Building2",
    description: "Personalización y desarrollo de arquitectura empresarial en Odoo.",
    skills: [
      { name: "Odoo ERP", icon: "Box", level: "Especialista", hoverInfo: "Desarrollo de módulos personalizados (ORM, Vistas XML, QWeb, Controladores y workflows)." },
      { name: "Odoo ORM & XML", icon: "Layers", level: "Especialista", hoverInfo: "Definición de modelos relacionales, herencia, vistas dinámicas y wizards empresariales." },
      { name: "Procesos Empresariales", icon: "Briefcase", level: "Avanzado", hoverInfo: "Módulos de compras, ventas, inventario, facturación y control de proyectos/obras." }
    ]
  },
  {
    id: "database",
    title: "Bases de Datos",
    icon: "Database",
    description: "Modelado relacional, optimización de consultas y persistencia.",
    skills: [
      { name: "PostgreSQL", icon: "Database", level: "Avanzado", hoverInfo: "Administración, modelado relacional, índices, triggers y soporte nativo para Odoo." },
      { name: "SQL", icon: "Table", level: "Avanzado", hoverInfo: "Consultas complejas, optimización de ejecuciones, vistas y funciones almacenadas." }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Herramientas",
    icon: "GitBranch",
    description: "Control de versiones, contenedorización y flujo de trabajo moderno.",
    skills: [
      { name: "Git", icon: "GitCommit", level: "Avanzado", hoverInfo: "Flujos de trabajo GitFlow, rebase, branching estratégico y resolución de conflictos." },
      { name: "GitHub", icon: "Github", level: "Avanzado", hoverInfo: "Gestión de código, GitHub Actions, pull requests y code reviews." },
      { name: "Docker", icon: "Container", level: "Intermedio-Avanzado", hoverInfo: "Contenedores para entornos de desarrollo y despliegue homogéneo de Odoo y apps." },
      { name: "Linux", icon: "Terminal", level: "Intermedio-Avanzado", hoverInfo: "Administración de servidores Linux (Ubuntu/Debian), SSH, systemd y scripting Bash." },
      { name: "Vercel / Cloud", icon: "Cloud", level: "Avanzado", hoverInfo: "Despliegue continuo de aplicaciones frontend y configuración de dominios." }
    ]
  },
  {
    id: "infrastructure",
    title: "Infraestructura & Otros",
    icon: "Network",
    description: "Automatización de procesos, redes e infraestructura computacional.",
    skills: [
      { name: "Automatización", icon: "Zap", level: "Avanzado", hoverInfo: "Creación de scripts de integración, webhooks y tareas programadas (cron jobs)." },
      { name: "Redes & Seguridad", icon: "ShieldCheck", level: "Intermedio", hoverInfo: "Conceptos de networking, protocolos HTTP/HTTPS, proxies inversos (Nginx) y VPNs." },
      { name: "Infraestructura IT", icon: "HardDrive", level: "Avanzado", hoverInfo: "Diagnóstico, mantenimiento de servidores y configuración de entornos productivos." }
    ]
  }
];
