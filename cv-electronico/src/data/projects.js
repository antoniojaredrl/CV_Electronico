export const projectCategories = ["Todos", "Profesionales", "Personales", "Experimentales"];

export const projects = [
  {
    id: "project-01",
    title: "Sistema de Control de Obra & Gestión Operativa",
    shortTitle: "Control de Obra Odoo ERP",
    featured: true,
    category: "Profesionales",
    tagline: "Sistema empresarial integral desarrollado sobre Odoo para administrar servicios, tareas, avances, costos y seguimiento operativo en tiempo real.",
    problem: "Las empresas de construcción y servicios sufrían falta de visibilidad en costos reales, desfases entre avance físico y financiero, y fragmentación de datos en hojas de cálculo.",
    solution: "Se diseñó e implementó un módulo nativo en Odoo ERP que unifica presupuestos, estimaciones de avance, control de inventario en obra y costos contables automáticos.",
    myRole: "Arquitecto de Solución & Desarrollador Principal de Módulo Odoo (Backend Python + Vistas XML + PostgreSQL).",
    results: [
      "Visibilidad del 100% en costos de obra en tiempo real.",
      "Reducción del 60% en errores de estimaciones y captura manual.",
      "Integración directa con facturación y compras automáticas."
    ],
    technologies: ["Odoo ERP", "Python", "PostgreSQL", "XML Views", "JavaScript", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "",
    image: null
  },
  {
    id: "project-02",
    title: "Dashboard de Inteligencia de Negocios & Métricas",
    shortTitle: "SaaS Business Dashboard",
    featured: false,
    category: "Profesionales",
    tagline: "Panel interactivo en React para la visualización de KPIs empresariales, ventas, rendimiento de servidores y reportes ejecutivos.",
    problem: "Falta de una interfaz rápida e intuitiva para consultar métricas consolidadas provenientes de distintas bases de datos y servicios.",
    solution: "Desarrollo de un dashboard React SPA ultrarrápido con microinteracciones, gráficos en tiempo real y soporte para temas oscuro/claro.",
    myRole: "Desarrollador Frontend React & Maquetación con Tailwind CSS.",
    results: [
      "Carga instantánea de reportes en menos de 1 segundo.",
      "Interfaz adaptable a dispositivos móviles para directivos."
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons", "REST API"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    image: null
  },
  {
    id: "project-03",
    title: "Módulo de Automatización de Inventarios & Alertas",
    shortTitle: "Auto Stock Alert Odoo",
    featured: false,
    category: "Profesionales",
    tagline: "Motor de automatización y notificaciones inteligentes para prevención de desabasto en almacenes centrales.",
    problem: "Perdidas económicas por faltantes de insumos críticos al no contar con reordenamiento automatizado.",
    solution: "Implementación de un motor en Python ejecutado en segundo plano que calcula stock mínimo dinámico según demanda histórica y envía alertas webhooks a Telegram/Email.",
    myRole: "Desarrollador Backend Python & Programador de Tareas Cron en Server.",
    results: [
      "Cero paros de producción por desabasto en 6 meses de uso.",
      "Automatización de compras bajo demanda con 1-clic."
    ],
    technologies: ["Python", "Odoo ORM", "PostgreSQL", "Linux Cron", "Webhooks"],
    githubUrl: "https://github.com",
    demoUrl: "",
    image: null
  },
  {
    id: "project-04",
    title: "Portfolio Web Interactivo & Terminal CLI",
    shortTitle: "Interactive Developer Portfolio",
    featured: false,
    category: "Personales",
    tagline: "Plataforma personal de presentación profesional inspirada en interfaces tecnológicas, IDEs y terminales modernas.",
    problem: "Los currículums en PDF tradicionales no transmiten eficazmente la capacidad técnica, la atención al detalle ni las habilidades interactivas de un ingeniero.",
    solution: "Creación de una experiencia digital inmersiva con React, Vite, Tailwind CSS y Framer Motion respetando accesibilidad y optimización visual.",
    myRole: "Diseño, Arquitectura y Desarrollo Integral.",
    results: [
      "100/100 en rendimiento y buenas prácticas en pruebas de auditoría.",
      "Presentación memorable ante reclutadores y clientes."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://portfolio.example.com",
    image: null
  },
  {
    id: "project-05",
    title: "Monitor de Servidores & Logs en Tiempo Real",
    shortTitle: "Server Status CLI Monitor",
    featured: false,
    category: "Experimentales",
    tagline: "Herramienta experimental CLI y Dashboard ligero para monitorear el consumo de CPU, RAM y estado de contenedores Docker.",
    problem: "Necesidad de una herramienta minimalista de monitoreo sin la sobrecarga de soluciones empresariales complejas.",
    solution: "Script en Python con API REST en FastAPI conectada a un visor en React de bajo consumo de recursos.",
    myRole: "Creador y Desarrollador Full-Stack.",
    results: [
      "Uso de memoria inferior a 30MB en servidor.",
      "Detección instantánea de caídas de contenedores."
    ],
    technologies: ["Python", "FastAPI", "React", "Docker API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "",
    image: null
  }
];
