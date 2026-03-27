export const SITE = {
  name: "Thiago Novato",
  title: "Thiago Novato | Software Engineer & Tech Writer",
  description:
    "Software Engineer com 20 anos de experiência. Blog sobre engenharia de software, carreira tech, React, Python, data engineering e crescimento profissional.",
  url: "https://thiagonovato.dev",
  locale: "pt-BR",
  author: {
    name: "Thiago Novato",
    email: "thiago@thiagonovato.dev",
    jobTitle: "Software Engineer",
    location: "Lakewood Ranch, FL, USA",
    bio: "Software Engineer com 20 anos de experiência construindo software em diversas escalas — de aplicações rurais a sistemas corporativos que processaram mais de 1 milhão de resultados. Especialista em React, Node.js, Python e data engineering. Criador do Logus Academy (700+ usuários, 10.000+ horas transcritas).",
  },
  social: {
    linkedin: "https://linkedin.com/in/thiagonovato",
    github: "https://github.com/thiagonovato",
    email: "mailto:thiago@thiagonovato.dev",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "BigQuery", category: "Database" },
  { name: "Firebase", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Airflow", category: "Data" },
  { name: "Machine Learning", category: "Data" },
  { name: "Kafka", category: "Data" },
  { name: "Git", category: "DevOps" },
] as const;
