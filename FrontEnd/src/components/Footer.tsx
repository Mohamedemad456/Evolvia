import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-[#1e293b] to-[#1e3a8a] text-white py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#0ea5e9] bg-clip-text text-transparent">
              Evolvia HR
            </h3>
            <p className="text-white/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">{t('footer.services')}</h4>
            <ul className="space-y-2 text-white/80">
              <li>{t('landing.features.consulting.title')}</li>
              <li>{t('landing.features.talentAcquisition.title')}</li>
              <li>{t('landing.features.training.title')}</li>
              <li>{t('landing.features.hrStrategy.title')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">{t('footer.connectWithUs')}</h4>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
