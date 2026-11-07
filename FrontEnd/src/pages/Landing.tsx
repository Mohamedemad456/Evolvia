import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BarChart3,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Check,
  Sparkles,
  MessagesSquare,
  Compass,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import psIcon from "../assets/psIcon.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Reveal from "../components/motion/Reveal";
import Spotlight from "../components/motion/Spotlight";
import NetworkGraphic from "../components/NetworkGraphic";
import FormStatus, { type Status } from "../components/FormStatus";
import { sendForm } from "../lib/sendForm";

const features = [
  { key: "talentAcquisition", icon: Users },
  { key: "hrStrategy", icon: BarChart3 },
  { key: "training", icon: GraduationCap },
  { key: "consulting", icon: Briefcase },
];

const services = [
  { key: "recruitment", icon: Users, items: ["executiveSearch", "temporaryStaffing", "backgroundVerification"] },
  { key: "strategy", icon: BarChart3, items: ["orgDesign", "workforcePlanning", "performanceManagement"] },
  { key: "learning", icon: GraduationCap, items: ["leadershipTraining", "skillDevelopment", "complianceTraining"] },
  { key: "consulting", icon: Briefcase, items: ["orgDesign", "orgDevelopment", "policyDevelopment", "compensationBenefits", "employeeRelations"] },
  { key: "changeManagement", icon: TrendingUp, items: ["orgTransformation", "maSupport", "cultureIntegration"] },
  { key: "compliance", icon: ShieldCheck, items: ["hrAudits", "legalCompliance", "riskAssessment"] },
];

const steps = [
  { key: "consultation", icon: MessagesSquare },
  { key: "strategy", icon: Compass },
  { key: "implementation", icon: Rocket },
  { key: "support", icon: LifeBuoy },
];

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-mist px-4 py-3 text-base text-ink placeholder:text-ink/40 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/15 disabled:opacity-60";

const SectionHeading = ({ eyebrow, title, subtitle, center = false, light = false }: {
  eyebrow: string; title: string; subtitle?: string; center?: boolean; light?: boolean;
}) => (
  <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    <span className={`eyebrow ${light ? "!text-glow" : ""}`}>{eyebrow}</span>
    <h2 className={`font-display mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    {subtitle && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/65" : "text-ink/60"}`}>{subtitle}</p>}
  </Reveal>
);

const Landing = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendForm({ ...formData, subject: `[Demo request] ${formData.subject}` });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const openDialog = () => {
    setStatus("idle");
    setIsDialogOpen(true);
  };

  const marqueeItems = [...new Set(services.flatMap((s) => s.items.map((i) => t(`landing.services.${s.key}.${i}`))))];

  return (
    <div className="overflow-x-clip bg-white">
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-ink-gradient grain text-white">
        <div className="absolute inset-0 -z-10 bg-grid-dark" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 pt-32 sm:px-6 sm:pb-16 lg:min-h-[100svh] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-36">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-sm text-white/80 backdrop-blur" style={{ ["--delay" as string]: "0ms" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
              </span>
              {t("landing.hero.eyebrow")}
            </div>

            <h1 className="font-display mt-7 text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              <span className="animate-rise block" style={{ ["--delay" as string]: "100ms" }}>
                {t("landing.hero.title1")}
              </span>
              <span className="animate-rise block text-accent" style={{ ["--delay" as string]: "220ms" }}>
                {t("landing.hero.title2")}
              </span>
            </h1>

            <p className="animate-rise font-display mt-6 text-xl font-medium text-white/90 sm:text-2xl" style={{ ["--delay" as string]: "340ms" }}>
              {t("landing.hero.slogan1")} <span className="text-glow">{t("landing.hero.slogan2")}</span>
            </p>

            <p className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-white/65" style={{ ["--delay" as string]: "440ms" }}>
              {t("landing.hero.description")}
            </p>

            <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ ["--delay" as string]: "540ms" }}>
              <Link to="/contact" className="btn btn-primary">
                {t("landing.hero.getStarted")}
                <ArrowRight size={18} className="btn-arrow" />
              </Link>
              <Link to="/about" className="btn btn-ghost">
                {t("landing.hero.learnMore")}
              </Link>
            </div>

            <div className="animate-rise mt-12 flex items-center gap-3 text-sm text-white/55" style={{ ["--delay" as string]: "640ms" }}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5">
                <img src={psIcon} alt="PeopleStrong" className="h-full w-full" />
              </span>
              <span>
                {t("landing.partners.badge")} · <span className="font-semibold text-white/80">PeopleStrong</span>
              </span>
            </div>
          </div>

          <div className="animate-rise px-4 sm:px-8 lg:px-0" style={{ ["--delay" as string]: "300ms" }}>
            <NetworkGraphic />
          </div>
        </div>

        {/* services ticker */}
        <div className="relative border-y border-white/10 bg-white/[0.03] py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display flex items-center gap-10 text-lg font-medium text-white/50">
                {item}
                <Sparkles size={14} className="text-glow/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── What we do ───────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading eyebrow={t("landing.features.eyebrow")} title={t("landing.features.title")} subtitle={t("landing.features.subtitle")} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 90}>
                <Spotlight className="group h-full rounded-3xl border border-ink/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-30px_rgba(37,99,235,0.35)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-sm font-semibold text-ink/25">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-8 text-xl font-bold text-ink">{t(`landing.features.${key}.title`)}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{t(`landing.features.${key}.description`)}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={t("landing.services.eyebrow")} title={t("landing.services.title")} subtitle={t("landing.services.subtitle")} />
            <Reveal delay={150} className="mt-8">
              <Link to="/contact" className="btn btn-secondary">
                {t("landing.cta.getStarted")}
                <ArrowRight size={18} className="btn-arrow" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map(({ key, icon: Icon, items }, i) => (
              <Reveal key={key} delay={(i % 2) * 100}>
                <Spotlight className="group flex h-full flex-col rounded-3xl border border-ink/[0.07] bg-mist/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(37,99,235,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white transition-colors duration-300 group-hover:bg-brand">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-bold text-ink">{t(`landing.services.${key}.title`)}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/60">{t(`landing.services.${key}.description`)}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink/75 ring-1 ring-ink/[0.07]">
                        <Check size={14} className="text-brand" strokeWidth={3} />
                        {t(`landing.services.${key}.${item}`)}
                      </li>
                    ))}
                  </ul>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading center eyebrow={t("landing.howItWorks.eyebrow")} title={t("landing.howItWorks.title")} subtitle={t("landing.howItWorks.subtitle")} />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            {/* connecting line (desktop) */}
            <div className="absolute inset-x-[12.5%] top-8 hidden h-px bg-gradient-to-r from-brand/0 via-brand/40 to-brand/0 md:block" />
            {steps.map(({ key, icon: Icon }, i) => (
              <Reveal as="li" key={key} delay={i * 140} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-[0_12px_30px_-12px_rgba(11,20,36,0.25)] ring-1 ring-ink/[0.06]">
                  <Icon size={26} />
                  <span className="font-display absolute -end-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-ink">{t(`landing.howItWorks.${key}.title`)}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink/60">{t(`landing.howItWorks.${key}.description`)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Partner ───────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading eyebrow={t("landing.partners.eyebrow")} title={t("landing.partners.title")} />
          <Reveal delay={100} className="mt-12 grid overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white shadow-[0_40px_80px_-40px_rgba(11,20,36,0.3)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden bg-ink-gradient grain p-10">
              <div className="absolute inset-0 -z-10 bg-grid-dark" />
              <div className="absolute h-56 w-56 rounded-full bg-brand/40 blur-3xl" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-[1.75rem] bg-white p-6 shadow-2xl shadow-black/40 sm:h-40 sm:w-40">
                <img src={psIcon} alt="PeopleStrong" className="h-full w-full" />
              </div>
              <span className="absolute start-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                <ShieldCheck size={14} className="text-glow" />
                {t("landing.partners.badge")}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl" dir="ltr">{t("landing.partners.tagline")}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink/60">{t("landing.partners.description")}</p>
              <div className="mt-8">
                <button className="btn btn-primary" onClick={openDialog}>
                  {t("landing.partners.requestDemo")}
                  <ArrowRight size={18} className="btn-arrow" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Request demo dialog ───────────── */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="rounded-3xl border-ink/10 p-7 sm:max-w-[520px]">
          <DialogHeader className="text-start">
            <DialogTitle className="font-display text-2xl font-bold text-ink">{t("landing.partners.demoTitle")}</DialogTitle>
            <DialogDescription className="text-ink/60">{t("landing.partners.demoDescription")}</DialogDescription>
          </DialogHeader>
          {status === "success" ? (
            <FormStatus status="success" />
          ) : (
            <form onSubmit={handleSubmit} className="mt-2 space-y-3">
              <input name="name" aria-label={t("landing.partners.name")} placeholder={t("landing.partners.name")} required value={formData.name} onChange={handleChange} disabled={status === "sending"} className={inputClass} />
              <input name="email" type="email" aria-label={t("landing.partners.email")} placeholder={t("landing.partners.email")} required value={formData.email} onChange={handleChange} disabled={status === "sending"} className={inputClass} />
              <input name="subject" aria-label={t("landing.partners.subject")} placeholder={t("landing.partners.subject")} required value={formData.subject} onChange={handleChange} disabled={status === "sending"} className={inputClass} />
              <textarea name="message" aria-label={t("landing.partners.message")} placeholder={t("landing.partners.message")} required value={formData.message} onChange={handleChange} disabled={status === "sending"} rows={4} className={`${inputClass} min-h-[110px] resize-y`} />
              {status === "error" && <FormStatus status="error" />}
              <button type="submit" className="btn btn-primary w-full" disabled={status === "sending"}>
                {status === "sending" ? t("forms.sending") : t("landing.partners.send")}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ───────────── CTA ───────────── */}
      <section className="px-3 pb-24 sm:px-6 sm:pb-32">
        <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-gradient grain px-6 py-20 text-center text-white sm:px-12 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-grid-dark" />
          <div className="absolute left-1/2 top-full -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/50 blur-3xl" />
          <span className="eyebrow !text-glow justify-center">{t("landing.cta.eyebrow")}</span>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">{t("landing.cta.title")}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{t("landing.cta.description")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-light">
              {t("landing.cta.getStarted")}
              <ArrowRight size={18} className="btn-arrow" />
            </Link>
            <Link to="/about" className="btn btn-ghost">
              {t("landing.cta.learnMore")}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Landing;
