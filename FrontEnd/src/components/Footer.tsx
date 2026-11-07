import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LinkedinIcon, FacebookIcon } from './icons/SocialIcons';
import logo from '../assets/logo.svg';

const socials = [
  { href: 'https://www.linkedin.com/company/evolvia-consulting-development/', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://www.facebook.com/share/1Cg5osi32u/', label: 'Facebook', Icon: FacebookIcon },
];

const Footer = () => {
  const { t } = useTranslation();
  const linkClass = 'text-white/60 transition-colors duration-200 hover:text-white';

  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-50" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* top call-out */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display max-w-xl text-3xl font-bold leading-tight sm:text-4xl">{t('footer.cta')}</p>
          <Link to="/contact" className="btn btn-primary shrink-0">
            {t('nav.letsTalk')}
            <ArrowRight size={18} className="btn-arrow" />
          </Link>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="" className="h-10 w-10 rounded-lg ring-1 ring-white/10" />
              <span className="font-display text-xl font-bold">Evolvia HR</span>
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-white/60">{t('footer.description')}</p>
            <p className="font-display mt-4 text-sm font-medium text-glow">
              {t('landing.hero.slogan1')} {t('landing.hero.slogan2')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 rtl:tracking-normal">{t('footer.quickLinks')}</h4>
            <ul className="mt-5 space-y-3">
              <li><Link to="/" className={linkClass}>{t('nav.home')}</Link></li>
              <li><Link to="/about" className={linkClass}>{t('nav.about')}</Link></li>
              <li><Link to="/contact" className={linkClass}>{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 rtl:tracking-normal">{t('footer.services')}</h4>
            <ul className="mt-5 space-y-3 text-white/60">
              <li>{t('landing.features.consulting.title')}</li>
              <li>{t('landing.features.talentAcquisition.title')}</li>
              <li>{t('landing.features.training.title')}</li>
              <li>{t('landing.features.hrStrategy.title')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 rtl:tracking-normal">{t('footer.connectWithUs')}</h4>
            <a href="mailto:info@evolvia-hr.com" className={`mt-5 flex items-center gap-2 ${linkClass}`}>
              <Mail size={16} />
              info@evolvia-hr.com
            </a>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:ring-brand"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-sm text-white/40">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
