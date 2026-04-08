import { notFound } from "next/navigation";
import { isValidLocale, t } from "@/lib/i18n";
import { REPO_URL } from "@/lib/data";
import ComputeWidget from "@/components/ComputeWidget";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
            AI Compute Sverige
          </span>
          <div className="flex items-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-12 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                {t(locale, "heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                {t(locale, "heroLead")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <a
                  href={`${REPO_URL}/pulls`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                >
                  {t(locale, "ctaPrimary")}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="#narrative"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {t(locale, "ctaSecondary")}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
            <ComputeWidget locale={locale} />
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
              {t(locale, "ctaExplainer")}
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section id="narrative" className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-10">
              {t(locale, "narrativeTitle")}
            </h2>

            <div className="space-y-8">
              <NarrativeCard
                number="1"
                title={t(locale, "conclusion1Title")}
                text={t(locale, "conclusion1Text")}
              />
              <NarrativeCard
                number="2"
                title={t(locale, "conclusion2Title")}
                text={t(locale, "conclusion2Text")}
              />
              <NarrativeCard
                number="3"
                title={t(locale, "conclusion3Title")}
                text={t(locale, "conclusion3Text")}
              />
              <NarrativeCard
                number="4"
                title={t(locale, "conclusion4Title")}
                text={t(locale, "conclusion4Text")}
              />
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-16 px-4 bg-amber-50 dark:bg-amber-950/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
              {t(locale, "whyNowTitle")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(locale, "whyNowText")}
            </p>
          </div>
        </section>

        {/* Risks */}
        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-8">
              {t(locale, "riskTitle")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <RiskCard title={t(locale, "riskNoFunding")} desc={t(locale, "riskNoFundingDesc")} />
              <RiskCard title={t(locale, "riskLowAdoption")} desc={t(locale, "riskLowAdoptionDesc")} />
              <RiskCard title={t(locale, "riskFastAgents")} desc={t(locale, "riskFastAgentsDesc")} />
              <RiskCard title={t(locale, "riskSupply")} desc={t(locale, "riskSupplyDesc")} />
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-8">
              {t(locale, "recsTitle")}
            </h2>
            <div className="space-y-6">
              <RecCard number="1" title={t(locale, "rec1Title")} text={t(locale, "rec1Text")} />
              <RecCard number="2" title={t(locale, "rec2Title")} text={t(locale, "rec2Text")} />
              <RecCard number="3" title={t(locale, "rec3Title")} text={t(locale, "rec3Text")} />
            </div>
          </div>
        </section>

        {/* In-content CTA */}
        <section className="py-12 px-4 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-4">{t(locale, "ctaExplainer")}</p>
            <a
              href={`${REPO_URL}/pulls`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {t(locale, "ctaPrimary")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Sources & Methodology */}
        <section id="sources" className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
              {t(locale, "sourcesTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t(locale, "sourcesIntro")}
            </p>

            <div className="mb-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t(locale, "sourcesMethodTitle")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t(locale, "sourcesMethod")}
              </p>
            </div>

            <div className="grid gap-2">
              {docLinks.map(({ file, key }) => (
                <a
                  key={file}
                  href={`${REPO_URL}/blob/main/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-colors group"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-mono text-xs text-gray-400 mr-2">{file.split("-")[0]}</span>
                    {t(locale, key)}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {t(locale, "sourcesRepo")}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>{t(locale, "footerText")}</span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {t(locale, "footerLicense")}
          </a>
        </div>
      </footer>
    </>
  );
}

// --- Sub-components ---

import type { TranslationKey } from "@/lib/i18n";

const docLinks: { file: string; key: TranslationKey }[] = [
  { file: "01-ramverk.md", key: "docFramework" },
  { file: "02-antaganden-och-data.md", key: "docAssumptions" },
  { file: "03-berakningsmodell.md", key: "docModel" },
  { file: "04-internationella-jamforelser.md", key: "docInternational" },
  { file: "05-kallor-och-resurser.md", key: "docSources" },
  { file: "06-sammanfattning.md", key: "docSummary" },
  { file: "07-teknisk-bilaga.md", key: "docTechnical" },
  { file: "08-suveranitet.md", key: "docSovereignty" },
  { file: "09-tanke-exempel.md", key: "docThoughtExperiment" },
  { file: "10-kan-vi-vanta.md", key: "docCanWeWait" },
  { file: "11-kompletterande-perspektiv.md", key: "docPractitioner" },
  { file: "12-upprevidering-utmaning.md", key: "docStressTest" },
  { file: "13-sjukvard-compute-per-vardkedja.md", key: "docHealthcare" },
];

function NarrativeCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function RiskCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}

function RecCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
}
