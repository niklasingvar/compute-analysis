import { notFound } from "next/navigation";
import { isValidLocale, t } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";
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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-base/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight">
            <span className="text-text-primary">{t(locale, "navTitle1")}</span>{" "}
            <span className="text-accent-gold">{t(locale, "navTitle2")}</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden hero-grid pt-16 pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                <span className="text-text-primary">
                  {t(locale, "heroTitle1")}
                </span>
                <br />
                <span className="text-accent-gold">
                  {t(locale, "heroTitle2")}
                </span>
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
                {t(locale, "heroLead")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`${REPO_URL}/pulls`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-gold text-bg-base font-semibold text-sm hover:bg-accent-gold-dim transition-colors"
                >
                  {t(locale, "ctaPrimary")}
                  <ExternalIcon />
                </a>
                <a
                  href="#narrative"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border-light text-text-secondary font-semibold text-sm hover:bg-bg-surface hover:text-text-primary transition-colors"
                >
                  {t(locale, "ctaSecondary")}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Widget card */}
            <div className="rounded-2xl border border-border bg-bg-surface/50 p-6 md:p-8">
              <ComputeWidget locale={locale} />
            </div>

            <p className="text-center text-xs text-text-muted mt-6">
              {t(locale, "ctaExplainer")}
            </p>
          </div>
        </section>

        {/* Narrative */}
        <section id="narrative" className="py-16 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-10">
              {t(locale, "narrativeTitle")}
            </h2>
            <div className="space-y-8">
              <NarrativeCard
                n="1"
                title={t(locale, "conclusion1Title")}
                text={t(locale, "conclusion1Text")}
              />
              <NarrativeCard
                n="2"
                title={t(locale, "conclusion2Title")}
                text={t(locale, "conclusion2Text")}
              />
              <NarrativeCard
                n="3"
                title={t(locale, "conclusion3Title")}
                text={t(locale, "conclusion3Text")}
              />
              <NarrativeCard
                n="4"
                title={t(locale, "conclusion4Title")}
                text={t(locale, "conclusion4Text")}
              />
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-16 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-accent-gold mb-4">
              {t(locale, "whyNowTitle")}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t(locale, "whyNowText")}
            </p>
          </div>
        </section>

        {/* Risks */}
        <section className="py-16 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-8">
              {t(locale, "riskTitle")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <RiskCard
                title={t(locale, "riskNoFunding")}
                desc={t(locale, "riskNoFundingDesc")}
              />
              <RiskCard
                title={t(locale, "riskLowAdoption")}
                desc={t(locale, "riskLowAdoptionDesc")}
              />
              <RiskCard
                title={t(locale, "riskFastAgents")}
                desc={t(locale, "riskFastAgentsDesc")}
              />
              <RiskCard
                title={t(locale, "riskSupply")}
                desc={t(locale, "riskSupplyDesc")}
              />
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-8">
              {t(locale, "recsTitle")}
            </h2>
            <div className="space-y-4">
              <RecCard
                n="1"
                title={t(locale, "rec1Title")}
                text={t(locale, "rec1Text")}
              />
              <RecCard
                n="2"
                title={t(locale, "rec2Title")}
                text={t(locale, "rec2Text")}
              />
              <RecCard
                n="3"
                title={t(locale, "rec3Title")}
                text={t(locale, "rec3Text")}
              />
            </div>
          </div>
        </section>

        {/* In-content CTA */}
        <section className="py-12 px-4 bg-accent-gold">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-semibold text-bg-base mb-4">
              {t(locale, "ctaExplainer")}
            </p>
            <a
              href={`${REPO_URL}/pulls`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-bg-base text-accent-gold font-semibold hover:bg-bg-surface transition-colors"
            >
              {t(locale, "ctaPrimary")}
              <ExternalIcon />
            </a>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="py-16 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">
              {t(locale, "sourcesTitle")}
            </h2>
            <p className="text-text-secondary mb-6">
              {t(locale, "sourcesIntro")}
            </p>

            <div className="mb-8 p-4 rounded-xl bg-bg-surface border border-border">
              <h3 className="font-semibold text-text-primary mb-2">
                {t(locale, "sourcesMethodTitle")}
              </h3>
              <p className="text-sm text-text-secondary">
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
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-bg-surface border border-border/50 transition-colors group"
                >
                  <span className="text-sm text-text-secondary group-hover:text-text-primary">
                    <span className="font-mono text-xs text-text-muted mr-2">
                      {file.split("-")[0]}
                    </span>
                    {t(locale, key)}
                  </span>
                  <ExternalIcon className="text-text-muted group-hover:text-text-secondary" />
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-accent-gold"
              >
                {t(locale, "sourcesRepo")}
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-bg-surface">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <span>{t(locale, "footerText")}</span>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-accent-gold transition-colors"
          >
            {t(locale, "footerLicense")}
          </a>
        </div>
      </footer>
    </>
  );
}

// --- Sub-components ---

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

function NarrativeCard({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-sm font-bold">
        {n}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function RiskCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl border border-border bg-bg-surface">
      <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-text-secondary">{desc}</p>
    </div>
  );
}

function RecCard({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-bg-elevated border border-border">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-sm font-bold">
        {n}
      </div>
      <div>
        <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary">{text}</p>
      </div>
    </div>
  );
}

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`ml-2 w-4 h-4 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
