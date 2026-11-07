import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Languages, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
];

const Navigation = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu whenever the page changes
  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  // Every page starts with a dark hero, so the bar is light-on-dark until you scroll.
  const solid = scrolled && !isMenuOpen;
  const dark = !solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? 'bg-ink'
          : solid
            ? 'bg-white/80 shadow-[0_1px_0_rgba(11,20,36,0.08),0_10px_30px_-20px_rgba(11,20,36,0.4)] backdrop-blur-xl'
            : 'bg-transparent'
      }`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 transition-all duration-300 ${solid ? 'h-16' : 'h-20'}`}>
        <Link to="/" className="flex items-center gap-2.5" aria-label="Evolvia HR — home">
          <img src={logo} alt="" className="h-9 w-9 rounded-lg" />
          <span className={`font-display text-xl font-bold ${dark ? 'text-white' : 'text-ink'}`}>Evolvia HR</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <ul className={`flex items-center gap-1 rounded-full p-1 ${dark ? 'bg-white/[0.06] ring-1 ring-white/10' : 'bg-ink/[0.04] ring-1 ring-ink/5'}`}>
            {links.map((l) => (
              <li key={l.to}>
                <RouterNavLink
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? dark ? 'bg-white text-ink' : 'bg-ink text-white'
                        : dark ? 'text-white/75 hover:text-white' : 'text-ink/70 hover:text-ink'
                    }`
                  }
                >
                  {t(l.key)}
                </RouterNavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${dark ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink'}`}
            aria-label="Toggle language"
          >
            <Languages size={18} />
            {i18n.language === 'en' ? 'عربي' : 'EN'}
          </button>
          <Link to="/contact" className="btn btn-primary !px-5 !py-2.5 text-sm">
            {t('nav.letsTalk')}
            <ArrowRight size={16} className="btn-arrow" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((o) => !o)}
          className={`rounded-full p-2.5 transition-colors md:hidden ${dark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/5'}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`grid overflow-hidden bg-ink transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {links.map((l) => (
              <li key={l.to}>
                <RouterNavLink
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-semibold transition-colors ${
                      isActive ? 'bg-white/[0.08] text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {t(l.key)}
                  <ArrowRight size={20} className="opacity-50 rtl:-scale-x-100" />
                </RouterNavLink>
              </li>
            ))}
            <li className="mt-3 flex gap-3">
              <button
                onClick={toggleLanguage}
                className="btn btn-ghost flex-1"
                aria-label="Toggle language"
              >
                <Languages size={18} />
                {i18n.language === 'en' ? 'عربي' : 'English'}
              </button>
              <Link to="/contact" className="btn btn-primary flex-1">
                {t('nav.letsTalk')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
