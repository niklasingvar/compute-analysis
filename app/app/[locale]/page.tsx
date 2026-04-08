import { notFound } from "next/navigation";
import { isValidLocale, t } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";
import { REPO_URL, footnoteUrl, euComparisons, formatNumber, defaultAssumptions, computeHealthcareJobs2029 } from "@/lib/data";
import ComputeWidget from "@/components/ComputeWidget";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const jobs2029 = computeHealthcareJobs2029(defaultAssumptions);

  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-base/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight">
            <span className="text-text-primary">{t(locale, "navTitle1")}</span>{" "}
            <span className="text-accent-gold">{t(locale, "navTitle2")}</span>
          </span>
          <div className="flex items-center gap-3">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden hero-grid pt-10 pb-6 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2">
              <span className="text-text-primary">{t(locale, "heroTitle1")}</span><br />
              <span className="text-accent-gold">{t(locale, "heroTitle2")}</span>
            </h1>
            <p className="text-base text-text-secondary max-w-xl mx-auto mb-5">{t(locale, "heroLead")}</p>
            <div className="flex justify-center mb-2">
              <a href={`${REPO_URL}/pulls`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 rounded-full bg-accent-gold text-bg-base font-semibold text-sm hover:bg-accent-gold-dim transition-colors">
                {t(locale, "ctaPrimary")} <Ext />
              </a>
              <a href="#narrative" className="inline-flex items-center px-5 py-2 rounded-full border border-border-light text-text-secondary font-semibold text-sm hover:bg-bg-surface transition-colors">
                {t(locale, "ctaSecondary")} ↓
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <ComputeWidget locale={locale} />
            <p className="text-center text-xs text-text-muted mt-4">
              {t(locale, "ctaExplainer")}{" "}
              <a
                href={`${REPO_URL}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline font-semibold"
              >
                {t(locale, "ctaPrimary")}
              </a>
            </p>
          </div>
        </section>

        {/* === BELOW THE FOLD === */}

        {/* Blog intro */}
        <section className="py-10 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{t(locale, "blogLead1")}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{t(locale, "blogLead2")}</p>
          </div>
        </section>

        {/* EU Benchmark */}
        <section className="py-12 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1">{t(locale, "euTitle")}</div>
            <p className="text-sm text-text-secondary mb-6">{t(locale, "euSubtitle")}</p>
            <div className="space-y-2.5">
              {euComparisons.map((c) => (
                <div key={c.key} className="flex items-center gap-3">
                  <div className="w-44 text-xs text-text-secondary truncate shrink-0">{c.label} ({c.country})</div>
                  <div className="flex-1 bg-bg-elevated rounded-full h-5 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500 bg-text-muted" style={{ width: `${Math.min((c.h100eq / 50000) * 100, 100)}%` }} />
                  </div>
                  <div className="w-16 text-right text-xs font-mono font-semibold text-text-primary tabular-nums">{formatNumber(c.h100eq)}</div>
                </div>
              ))}
            </div>
            <Fn href={footnoteUrl("euContext")} label="04-internationella-jamforelser.md" />
          </div>
        </section>

        {/* Narrative / Blog */}
        <section id="narrative" className="py-14 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-8">{t(locale, "narrativeTitle")}</h2>
            <div className="space-y-8">
              <Article n="1" title={t(locale, "conclusion1Title")} text={t(locale, "conclusion1Text")} fn="03-berakningsmodell.md" fnUrl={footnoteUrl("tier1Calc")} />
              <Article n="2" title={t(locale, "conclusion2Title")} text={t(locale, "conclusion2Text")} fn="08-suveranitet.md" fnUrl={footnoteUrl("tier4Policy")} />
              <Article n="3" title={t(locale, "conclusion3Title")} text={t(locale, "conclusion3Text")} fn="03-berakningsmodell.md" fnUrl={footnoteUrl("budgetGap")} />
              <Article n="4" title={t(locale, "conclusion4Title")} text={t(locale, "conclusion4Text")} fn="11-kompletterande-perspektiv.md" fnUrl={footnoteUrl("tokensPerCapita")} />
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-12 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-accent-gold mb-3">{t(locale, "whyNowTitle")}</h2>
            <p className="text-text-secondary leading-relaxed">{t(locale, "whyNowText")}</p>
            <Fn href={footnoteUrl("whyNow")} label="10-kan-vi-vanta.md" />
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-14 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">{t(locale, "recsTitle")}</h2>
            <div className="space-y-3">
              <RecCard n="1" title={t(locale, "rec1Title")} text={t(locale, "rec1Text")} />
              <RecCard n="2" title={t(locale, "rec2Title")} text={t(locale, "rec2Text")} />
              <RecCard n="3" title={t(locale, "rec3Title")} text={t(locale, "rec3Text")} />
            </div>
          </div>
        </section>

        {/* Jobs created */}
        <section className="py-14 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-2">{t(locale, "jobsTitle")}</h2>
            <p className="text-sm text-text-secondary mb-6">{t(locale, "jobsSubtitle")}</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black tabular-nums text-accent-gold">~{formatNumber(jobs2029.total)}</span>
              <span className="text-sm text-text-secondary">{t(locale, "jobsTotal")}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-3 rounded-lg border border-border bg-bg-elevated">
                <div className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">{t(locale, "jobsDirect")}</div>
                <p className="text-xs text-text-secondary leading-relaxed">{t(locale, "jobsDirectList")}</p>
              </div>
              <div className="p-3 rounded-lg border border-border bg-bg-elevated">
                <div className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">{t(locale, "jobsIndirect")}</div>
                <p className="text-xs text-text-secondary leading-relaxed">{t(locale, "jobsIndirectList")}</p>
              </div>
            </div>
            <p className="text-[11px] text-text-muted italic">{t(locale, "jobsNote")}</p>
            <Fn href={`${REPO_URL}/blob/main/14-jobb.md`} label="14-jobb.md" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-4 bg-accent-gold">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-bg-base mb-3">{t(locale, "ctaExplainer")}</p>
            <a href={`${REPO_URL}/pulls`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2.5 rounded-full bg-bg-base text-accent-gold font-semibold text-sm hover:bg-bg-surface transition-colors">
              {t(locale, "ctaPrimary")} <Ext />
            </a>
          </div>
        </section>

        {/* Risks — LAST, plain language, multiple perspectives */}
        <section className="py-14 px-4 bg-bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-8">{t(locale, "riskTitle")}</h2>
            <div className="space-y-6">
              <RiskBlock title={t(locale, "risk1Title")} minister={t(locale, "risk1Minister")} hospital={t(locale, "risk1Hospital")} citizen={t(locale, "risk1Citizen")} locale={locale} />
              <RiskBlock title={t(locale, "risk2Title")} minister={t(locale, "risk2Minister")} hospital={t(locale, "risk2Hospital")} citizen={t(locale, "risk2Citizen")} locale={locale} />
              <RiskBlock title={t(locale, "risk3Title")} minister={t(locale, "risk3Minister")} hospital={t(locale, "risk3Hospital")} citizen={t(locale, "risk3Citizen")} locale={locale} />
              <RiskBlock title={t(locale, "risk4Title")} minister={t(locale, "risk4Minister")} hospital={t(locale, "risk4Hospital")} citizen={t(locale, "risk4Citizen")} locale={locale} />
            </div>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="py-14 px-4 bg-bg-base">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-3">{t(locale, "sourcesTitle")}</h2>
            <p className="text-sm text-text-secondary mb-4">{t(locale, "sourcesIntro")}</p>
            <div className="mb-6 p-3 rounded-lg bg-bg-surface border border-border">
              <h3 className="text-sm font-semibold text-text-primary mb-1">{t(locale, "sourcesMethodTitle")}</h3>
              <p className="text-xs text-text-secondary">{t(locale, "sourcesMethod")}</p>
              <Fn href={footnoteUrl("triangulation")} label="01-ramverk.md" />
            </div>
            <div className="grid gap-1.5">
              {docLinks.map(({ file, key }) => (
                <a key={file} href={`${REPO_URL}/blob/main/${file}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-bg-surface border border-border/50 transition-colors group">
                  <span className="text-xs text-text-secondary group-hover:text-text-primary">
                    <span className="font-mono text-text-muted mr-2">{file.split("-")[0]}</span>
                    {t(locale, key)}
                  </span>
                  <Ext className="text-text-muted group-hover:text-text-secondary" />
                </a>
              ))}
              {/* Assumption files */}
              {assumptionLinks.map(({ file, label }) => (
                <a key={file} href={`${REPO_URL}/blob/main/${file}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-bg-surface border border-accent-blue/20 transition-colors group">
                  <span className="text-xs text-accent-blue group-hover:text-accent-blue-light">
                    <span className="font-mono text-text-muted mr-2">A</span>
                    {label}
                  </span>
                  <Ext className="text-text-muted group-hover:text-accent-blue" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium text-text-secondary hover:text-accent-gold">
                {t(locale, "sourcesRepo")} <Ext />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4 bg-bg-surface">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>{t(locale, "footerText")}</span>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-gold transition-colors">{t(locale, "footerLicense")}</a>
        </div>
      </footer>
    </>
  );
}

// --- Data ---

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

const assumptionLinks = [
  { file: "assumptions/adoption-rate.md", label: "Adoptionsgrad (A14–A17, A59)" },
  { file: "assumptions/agent-share.md", label: "Agentandel (A51–A56)" },
  { file: "assumptions/healthcare-ai.md", label: "Sjukvårdens AI (A22–A27, A87–A90)" },
  { file: "assumptions/fine-tuning.md", label: "Finjustering (A28–A32)" },
  { file: "assumptions/sovereign-training.md", label: "Suverän träning (A33–A39, A62)" },
];

// --- Components ---

function Article({ n, title, text, fn, fnUrl }: { n: string; title: string; text: string; fn: string; fnUrl: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">{n}</div>
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
        <Fn href={fnUrl} label={fn} />
      </div>
    </div>
  );
}

function RiskBlock({ title, minister, hospital, citizen, locale }: { title: string; minister: string; hospital: string; citizen: string; locale: string }) {
  const labels = locale === "sv"
    ? { m: "Beslutsfattare", h: "Sjukvård", c: "Medborgare" }
    : { m: "Decision-maker", h: "Healthcare", c: "Citizen" };
  return (
    <div className="rounded-xl border border-border bg-bg-elevated p-4">
      <h3 className="text-sm font-bold text-text-primary mb-3">{title}</h3>
      <div className="space-y-2">
        <Perspective emoji="🏛" label={labels.m} text={minister} />
        <Perspective emoji="🏥" label={labels.h} text={hospital} />
        <Perspective emoji="👤" label={labels.c} text={citizen} />
      </div>
    </div>
  );
}

function Perspective({ emoji, label, text }: { emoji: string; label: string; text: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-sm shrink-0">{emoji}</span>
      <div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">{label}</span>
        <p className="text-xs text-text-secondary leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function RecCard({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3 p-3 rounded-lg bg-bg-elevated border border-border">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-xs font-bold">{n}</div>
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-0.5">{title}</h3>
        <p className="text-xs text-text-secondary">{text}</p>
      </div>
    </div>
  );
}

function Fn({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono text-accent-blue hover:underline">
      → {label}
    </a>
  );
}

function Ext({ className = "" }: { className?: string }) {
  return (
    <svg className={`ml-1.5 w-3.5 h-3.5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
