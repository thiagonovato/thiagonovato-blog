"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2006",
    title: "Primeiros Passos",
    description:
      "Início na programação com Java e automação industrial (CLPs Siemens/Rockwell).",
  },
  {
    year: "2016",
    title: "Logus Academy",
    description:
      "Criação da plataforma de transcrição de áudio. Hoje com 700+ usuários e 10.000+ horas transcritas.",
  },
  {
    year: "2018",
    title: "Full-Stack React",
    description:
      "Mergulho profundo em React, React Native e Node.js. Múltiplos apps publicados na Play Store.",
  },
  {
    year: "2020",
    title: "Cooperativismo Digital",
    description:
      "Desenvolvimento do Portal InovaCoop Goiás e integração com PagSeguro para campanhas sociais.",
  },
  {
    year: "2023",
    title: "Mercado Americano",
    description:
      "Mudança para os EUA. Início na Enolytics (wine + data/AI) e Intuit Mailchimp.",
  },
  {
    year: "2026",
    title: "Tech Writing",
    description:
      "Lançamento deste blog. Compartilhando 20 anos de aprendizados com a comunidade.",
  },
];

export function AboutTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[18px] w-px bg-card-border sm:left-1/2 sm:-translate-x-px" />

      <div className="space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 sm:gap-0 ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="absolute left-[14px] z-10 h-[10px] w-[10px] rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2" />

            <div className={`flex-1 pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
              <span className="font-mono text-sm text-accent">{item.year}</span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>

            <div className="hidden flex-1 sm:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
