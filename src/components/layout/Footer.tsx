"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-card-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">
                TN
              </div>
              <span className="font-medium text-foreground">Thiago Novato</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("social")}
            </h3>
            <div className="flex gap-3">
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-card-border p-2.5 text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-card-border p-2.5 text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.email}
                className="rounded-lg border border-card-border p-2.5 text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-6 text-center text-xs text-muted">
          <p>
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
