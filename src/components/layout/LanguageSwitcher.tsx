"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale: Locale = locale === "en" ? "pt" : "en";
  const label = locale === "en" ? "PT" : "EN";

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="rounded-lg border border-card-border px-2.5 py-1.5 font-mono text-xs font-medium text-muted transition-all hover:border-accent/30 hover:text-accent disabled:opacity-50"
      aria-label={`Switch to ${targetLocale === "en" ? "English" : "Portuguese"}`}
    >
      {label}
    </button>
  );
}
