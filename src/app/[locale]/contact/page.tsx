import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return generatePageMetadata(t("title"), t("metaDescription"), "/contact", locale);
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: SITE.social.linkedin,
    icon: LinkedInIcon,
    handle: "/in/thiagonovato",
  },
  {
    label: "GitHub",
    href: SITE.social.github,
    icon: GitHubIcon,
    handle: "@thiagonovato",
  },
  {
    label: "Email",
    href: SITE.social.email,
    icon: Mail,
    handle: "thiago@thiagonovato.dev",
  },
];

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: SITE.url },
          { name: tNav("contact") },
        ])}
      />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Breadcrumbs items={[{ label: tNav("home"), href: "/" }, { label: tNav("contact") }]} />

        <div className="mt-8">
          <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
            {t("title")}
          </GradientText>
          <p className="mt-3 max-w-xl text-lg text-muted">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{link.label}</p>
                  <p className="text-sm text-muted">{link.handle}</p>
                </div>
              </a>
            ))}

          </div>

          <div className="rounded-xl border border-card-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              {t("formTitle")}
            </h2>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  {t("formName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  {t("formEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  {t("formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-accent px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent-light hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                {t("formSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
