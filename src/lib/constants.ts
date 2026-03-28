export const SITE = {
  name: "Thiago Novato",
  url: "https://thiagonovato.dev",
  author: {
    name: "Thiago Novato",
    email: "thiago@thiagonovato.dev",
    jobTitle: "Software Engineer",
  },
  social: {
    linkedin: "https://linkedin.com/in/thiagonovato",
    github: "https://github.com/thiagonovato",
    email: "mailto:thiago@thiagonovato.dev",
  },
  nav: [
    { key: "home", href: "/" },
    { key: "blog", href: "/blog" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
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

export const DATE_LOCALES: Record<string, string> = {
  en: "en-US",
  pt: "pt-BR",
};
