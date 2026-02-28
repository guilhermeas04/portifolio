import type { Translations } from "./types";

// Traduções em português
const ptTranslations: Translations = {
  header: {
    about: "SOBRE MIM",
    projects: "PROJETOS",
    experiences: "EXPERIÊNCIAS",
    contactMe: "Fale Comigo →",
  },
  hero: {
    title: "Guilherme Santos",
  subtitle: "Engenheiro de Software e Desenvolvedor Full Stack",
    scrollDown: "Saiba Mais ↓",
  },
  about: {
    title: "SOBRE MIM",
    description:
      "Sou Guilherme Santos, estudante de Engenharia de Software na PUC Minas, com foco em desenvolvimento full stack e maior afinidade pelo back-end. Possuo sólida experiência com linguagens como Java, C++, C#, JavaScript, PHP e Python, além de conhecimentos em HTML, CSS, SQL, Git e Docker. Tenho especialidade no desenvolvimento, consumo e manutenção de APIs RESTful, atuando na modelagem de endpoints, implementação de autenticação e autorização (JWT e OAuth), versionamento de APIs, integração entre sistemas, tratamento de erros, validação de dados e documentação utilizando Swagger/OpenAPI. Ao longo da minha trajetória, desenvolvi projetos com Spring Boot, React, Angular, Laravel, Bootstrap e Django, o que me proporcionou uma visão ampla sobre diferentes arquiteturas e tecnologias do mercado, sempre aplicando boas práticas de programação orientada a objetos, versionamento de código e metodologias ágeis.",
  },
  experience: {
    title: "EXPERIÊNCIAS",
    techCorp: {
      company: "TechCorp Solutions",
      role: "Desenvolvedor Full Stack",
      period: "2023 - Presente",
      description:
        "Desenvolvi e mantive aplicações web responsivas utilizando React, Node.js e MongoDB. Implementei funcionalidades de autenticação, dashboard administrativo e integração com APIs externas. Colaborei com uma equipe de 8 desenvolvedores em metodologias ágeis.",
    },
    startupXYZ: {
      company: "StartupXYZ",
      role: "Desenvolvedor Frontend",
      period: "2022 - 2023",
      description:
        "Criei interfaces de usuário modernas e intuitivas para aplicação mobile-first. Otimizei performance e acessibilidade, implementando design system consistente. Trabalhei com Figma para prototipagem e validação de UX.",
    },
    freelance: {
      company: "Freelance",
      role: "Desenvolvedor Web",
      period: "2021 - 2022",
      description:
        "Desenvolvi sites institucionais e e-commerces para diversos clientes. Implementei SEO, responsividade e integração com sistemas de pagamento. Gerenciamento completo do projeto desde briefing até deploy.",
    },
  },
  projects: {
    title: "PROJETOS",
  },
  contact: {
    title: "CONTATO",
  },
};

// Traduções em inglês atualizadas
const enTranslations: Translations = {
  header: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    experiences: "EXPERIENCE",
    contactMe: "Contact Me →",
  },
  hero: {
    title: "Guilherme Santos",
    subtitle: "Software Engineer and Full Stack Developer",
    scrollDown: "Learn More ↓",
  },
  about: {
    title: "ABOUT ME",
    description: "I am Guilherme Santos, a Software Engineering student at PUC Minas, focused on full-stack development with a stronger affinity for back-end. I have solid experience with languages such as Java, C++, C#, JavaScript, PHP, and Python, as well as knowledge of HTML, CSS, SQL, Git, and Docker. I specialize in the development, consumption, and maintenance of RESTful APIs, working on endpoint modeling, authentication and authorization implementation (JWT and OAuth), API versioning, system integration, error handling, data validation, and documentation using Swagger/OpenAPI. Throughout my journey, I have developed projects using Spring Boot, React, Angular, Laravel, Bootstrap, and Django, which has given me a broad perspective on different architectures and technologies in the market, always applying best practices in object-oriented programming, code versioning, and agile methodologies."  },
  experience: {
    title: "EXPERIENCE",
    techCorp: {
      company: "TechCorp Solutions",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Developed and maintained responsive web applications using React, Node.js, and MongoDB. Implemented authentication features, administrative dashboard, and integration with external APIs. Collaborated with a team of 8 developers using agile methodologies.",
    },
    startupXYZ: {
      company: "StartupXYZ",
      role: "Frontend Developer",
      period: "2022 - 2023",
      description:
        "Created modern and intuitive user interfaces for mobile-first applications. Optimized performance and accessibility, implementing a consistent design system. Worked with Figma for prototyping and UX validation.",
    },
    freelance: {
      company: "Freelance",
      role: "Web Developer",
      period: "2021 - 2022",
      description:
        "Developed institutional websites and e-commerces for various clients. Implemented SEO, responsiveness, and integration with payment systems. Complete project management from briefing to deployment.",
    },
  },
  projects: {
    title: "PROJECTS",
  },
  contact: {
    title: "CONTACT",
  },
};

// Objeto de traduções
export const translations = {
  pt: ptTranslations,
  en: enTranslations,
};

// Re-exportar a interface para manter compatibilidade
export type { Translations };
