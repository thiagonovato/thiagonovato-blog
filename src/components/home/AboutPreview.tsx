"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GradientText } from "@/components/ui/GradientText";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 to-accent-dark/20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card p-8">
              <div className="mb-4 font-mono text-xs text-muted">
                <span className="text-accent">const</span> engineer ={" "}
                <span className="text-accent">{"{"}</span>
              </div>
              <div className="space-y-1 pl-4 font-mono text-xs">
                <p>
                  <span className="text-muted">name:</span>{" "}
                  <span className="text-emerald-400">&quot;Thiago Novato&quot;</span>,
                </p>
                <p>
                  <span className="text-muted">experience:</span>{" "}
                  <span className="text-amber-400">&quot;20 years&quot;</span>,
                </p>
                <p>
                  <span className="text-muted">location:</span>{" "}
                  <span className="text-emerald-400">&quot;Florida, USA&quot;</span>,
                </p>
                <p>
                  <span className="text-muted">passion:</span>{" "}
                  <span className="text-emerald-400">&quot;Building things that matter&quot;</span>,
                </p>
                <p>
                  <span className="text-muted">usersImpacted:</span>{" "}
                  <span className="text-violet-400">1_000_000</span>+,
                </p>
              </div>
              <div className="mt-1 font-mono text-xs text-accent">{"}"}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GradientText as="h2" className="text-3xl font-bold sm:text-4xl">
            Sobre Mim
          </GradientText>
          <p className="mt-4 leading-relaxed text-muted">
            De automação industrial a Machine Learning para a indústria de
            vinhos. Em 20 anos de carreira, construí sistemas que processaram
            mais de 1 milhão de resultados, criei produtos usados por centenas de
            pessoas, e aprendi que as melhores soluções vêm de quem entende
            tanto o código quanto o problema.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Hoje, além de engenheiro, estou compartilhando tudo que aprendi nessa
            jornada.
          </p>
          <div className="mt-6">
            <GlowButton href="/about" variant="secondary">
              Conhecer minha história <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
