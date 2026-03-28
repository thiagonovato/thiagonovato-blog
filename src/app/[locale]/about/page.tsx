import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata, personSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { AboutTimeline } from "@/components/home/AboutTimeline";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return generatePageMetadata(t("title"), t("metaDescription"), "/about", locale);
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const highlights = [
    { number: "20+", label: t("experienceLabel") },
    { number: "1M+", label: t("resultsLabel") },
    { number: "700+", label: t("usersLabel") },
    { number: "10k+", label: t("hoursLabel") },
  ];

  const bold = (chunks: React.ReactNode) => <strong>{chunks}</strong>;

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: SITE.url },
          { name: tNav("about") },
        ])}
      />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Breadcrumbs items={[{ label: tNav("home"), href: "/" }, { label: tNav("about") }]} />

        <div className="mt-8">
          <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
            {t("title")}
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
            {t.rich("intro", { bold })}
          </p>

          <h2>{t("journeyTitle")}</h2>
          <p>{t.rich("journeyText", { bold })}</p>

          <h2>{t("todayTitle")}</h2>
          <p>{t.rich("todayText", { bold })}</p>

          <h2>{t("whyTitle")}</h2>
          <p>{t("whyText1")}</p>
          <p>{t("whyText2")}</p>
        </div>

        <div className="mt-16">
          <GradientText as="h2" className="mb-8 text-2xl font-bold sm:text-3xl">
            {t("timelineTitle")}
          </GradientText>
          <AboutTimeline />
        </div>
      </div>
    </>
  );
}
