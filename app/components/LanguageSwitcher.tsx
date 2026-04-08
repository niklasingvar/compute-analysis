"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const otherLocale = locale === "sv" ? "en" : "sv";
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      className="text-sm font-medium px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      hrefLang={otherLocale}
    >
      {t(locale, "langSwitch")}
    </Link>
  );
}
