import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-radial-gradient from-white/10 to-transparent animate-rotate" style={{ animationDuration: '20s' }}></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 relative z-10 animate-fade-in-up">
          {t('about.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('about.subtitle')}
        </p>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Section */}
        <section className="mb-16 animate-fade-in-up">
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/15 hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-6 pb-3 border-b-4 border-[#2563eb] inline-block">
              {t('about.mission.title')}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">
              {t('about.mission.paragraph1')}
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t('about.mission.paragraph2')}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/15 hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-6 pb-3 border-b-4 border-[#2563eb] inline-block">
              {t('about.values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-l-4 border-[#2563eb] transition-all duration-300 hover:translate-x-2 hover:shadow-md hover:shadow-blue-900/20">
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.values.excellence.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.values.excellence.description')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-l-4 border-[#2563eb] transition-all duration-300 hover:translate-x-2 hover:shadow-md hover:shadow-blue-900/20">
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.values.integrity.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.values.integrity.description')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-l-4 border-[#2563eb] transition-all duration-300 hover:translate-x-2 hover:shadow-md hover:shadow-blue-900/20">
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.values.innovation.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.values.innovation.description')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-l-4 border-[#2563eb] transition-all duration-300 hover:translate-x-2 hover:shadow-md hover:shadow-blue-900/20">
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.values.partnership.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.values.partnership.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/15 hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-6 pb-3 border-b-4 border-[#2563eb] inline-block">
              {t('about.whyChooseUs.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="p-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-5xl font-extrabold bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent mb-4 opacity-30">
                  01
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.whyChooseUs.expertTeam.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.whyChooseUs.expertTeam.description')}
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-5xl font-extrabold bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent mb-4 opacity-30">
                  02
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.whyChooseUs.customizedSolutions.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.whyChooseUs.customizedSolutions.description')}
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-5xl font-extrabold bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent mb-4 opacity-30">
                  03
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.whyChooseUs.provenResults.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.whyChooseUs.provenResults.description')}
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-5xl font-extrabold bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent mb-4 opacity-30">
                  04
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">{t('about.whyChooseUs.comprehensiveServices.title')}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.whyChooseUs.comprehensiveServices.description')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
