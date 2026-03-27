import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata(
  "Contact",
  "Entre em contato com Thiago Novato. Software Engineer disponível para projetos, colaborações e oportunidades.",
  "/contact"
);

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

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Contact" },
        ])}
      />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <div className="mt-8">
          <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
            Contato
          </GradientText>
          <p className="mt-3 max-w-xl text-lg text-muted">
            Quer conversar sobre tecnologia, colaborar em um projeto ou apenas
            trocar uma ideia? Me manda uma mensagem.
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

            <div className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Localização</p>
                <p className="text-sm text-muted">{SITE.author.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-card-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Envie uma mensagem
            </h2>
            <form
              action={`https://formspree.io/f/placeholder`}
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Nome
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
                  Email
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
                  Mensagem
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
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
