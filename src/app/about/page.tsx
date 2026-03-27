import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata, personSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { AboutTimeline } from "@/components/home/AboutTimeline";

export const metadata: Metadata = generatePageMetadata(
  "About",
  "Conheça Thiago Novato: 20 anos de experiência como Software Engineer, de automação industrial a Machine Learning para a indústria de vinhos.",
  "/about"
);

const highlights = [
  { number: "20+", label: "Anos de experiência" },
  { number: "1M+", label: "Resultados processados" },
  { number: "700+", label: "Usuários Logus Academy" },
  { number: "10k+", label: "Horas transcritas" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "About" },
        ])}
      />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <div className="mt-8">
          <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
            Sobre Mim
          </GradientText>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-card-border bg-card p-4 text-center"
            >
              <p className="text-2xl font-bold text-accent">{h.number}</p>
              <p className="mt-1 text-xs text-muted">{h.label}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          <p className="text-lg leading-relaxed">
            Meu nome é <strong>Thiago Novato</strong>, e há 20 anos eu construo software. 
            Não comecei na programação — comecei na automação industrial, programando CLPs 
            Siemens e Rockwell. De lá para cá, passei por cooperativismo, educação, saúde, 
            e hoje trabalho na intersecção de dados e inteligência artificial para a indústria 
            de vinhos.
          </p>

          <h2>A Jornada</h2>
          <p>
            Em 2006, dei meus primeiros passos com Java e sistemas web. Nos anos seguintes, 
            mergulhei em JavaScript, construindo desde CRMs até portais de cooperativismo. 
            Criei o <strong>Logus Academy</strong>, uma plataforma de transcrição de áudio 
            que hoje tem mais de 700 usuários e mais de 10.000 horas transcritas — um projeto 
            que nasceu para resolver um problema real de estudantes e pesquisadores.
          </p>

          <h2>Hoje</h2>
          <p>
            Atualmente moro na Flórida, EUA, e trabalho como Software Engineer na{" "}
            <strong>Enolytics</strong>, onde uso Python, BigQuery, Airflow e Machine Learning 
            para transformar dados da indústria de vinhos em insights acionáveis. Também atuo 
            na <strong>Intuit Mailchimp</strong>, resolvendo desafios técnicos de integração 
            de API e email delivery para milhares de clientes.
          </p>

          <h2>Por Que Este Blog</h2>
          <p>
            Depois de 20 anos acumulando experiências, erros e aprendizados, decidi que era 
            hora de compartilhar. Não tutoriais rasos ou listas genéricas — mas reflexões 
            reais sobre o que significa construir software por duas décadas, navegar uma 
            carreira internacional, e continuar aprendendo todos os dias.
          </p>
          <p>
            Se você é desenvolvedor, engenheiro de software, ou alguém que usa tecnologia 
            para construir coisas que importam — este espaço é para você.
          </p>
        </div>

        <div className="mt-16">
          <GradientText as="h2" className="mb-8 text-2xl font-bold sm:text-3xl">
            Timeline
          </GradientText>
          <AboutTimeline />
        </div>
      </div>
    </>
  );
}
