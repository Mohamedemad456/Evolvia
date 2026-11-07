import { Link } from 'react-router-dom';
import { Gem, ShieldCheck, Lightbulb, Handshake, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Reveal from '../components/motion/Reveal';
import Spotlight from '../components/motion/Spotlight';

const values = [
  { key: 'excellence', icon: Gem },
  { key: 'integrity', icon: ShieldCheck },
  { key: 'innovation', icon: Lightbulb },
  { key: 'partnership', icon: Handshake },
];

const reasons = ['expertTeam', 'customizedSolutions', 'provenResults', 'comprehensiveServices'];

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <PageHero eyebrow={t('about.eyebrow')} title={t('about.title')} subtitle={t('about.subtitle')} />

      {/* Mission */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">{t('about.mission.title')}</span>
          </Reveal>
          <div>
            <Reveal as="p" className="font-display text-3xl font-semibold leading-[1.25] text-ink sm:text-4xl">
              {t('about.mission.paragraph1')}
            </Reveal>
            <Reveal as="p" delay={120} className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/60">
              {t('about.mission.paragraph2')}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t('about.values.eyebrow')}</span>
            <h2 className="font-display mt-4 text-4xl font-bold text-ink sm:text-5xl">{t('about.values.title')}</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 90}>
                <Spotlight className="group h-full rounded-3xl border border-ink/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-30px_rgba(37,99,235,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-8 text-xl font-bold text-ink">{t(`about.values.${key}.title`)}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{t(`about.values.${key}.description`)}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t('about.whyChooseUs.eyebrow')}</span>
            <h2 className="font-display mt-4 text-4xl font-bold text-ink sm:text-5xl">{t('about.whyChooseUs.title')}</h2>
          </Reveal>
          <ol className="mt-14 grid border-t border-ink/10 md:grid-cols-2">
            {reasons.map((key, i) => (
              <Reveal
                as="li"
                key={key}
                delay={(i % 2) * 120}
                className={`group flex gap-6 border-b border-ink/10 py-10 md:px-8 ${i % 2 === 0 ? 'md:border-e md:ps-0' : 'md:pe-0'}`}
              >
                <span className="font-display text-5xl font-extrabold leading-none text-ink/10 transition-colors duration-300 group-hover:text-brand sm:text-6xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">{t(`about.whyChooseUs.${key}.title`)}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{t(`about.whyChooseUs.${key}.description`)}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-16 flex flex-col items-start gap-6 rounded-3xl bg-ink-gradient p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <p className="font-display max-w-xl text-2xl font-bold sm:text-3xl">{t('landing.cta.title')}</p>
            <Link to="/contact" className="btn btn-light shrink-0">
              {t('landing.cta.getStarted')}
              <ArrowRight size={18} className="btn-arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
