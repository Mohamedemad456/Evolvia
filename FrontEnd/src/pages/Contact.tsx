import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = {
    email: "info@evolvia-hr.com",
    phone: ["01211101625","01040000178"]
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contact.form.successMessage'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-white/10 to-transparent animate-rotate" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 relative z-10 animate-fade-in-up">
          {t('contact.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('contact.subtitle')}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-6">{t('contact.letsWorkTogether')}</h2>
            <p className="text-slate-700 leading-relaxed mb-12 text-lg">
              {t('contact.description')}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">{t('contact.email')}</h3>
                  <p className="text-slate-700">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">{t('contact.phone')}</h3>
                  <p className="text-slate-700">+02 {contactInfo.phone[0]}</p>
                  <p className="text-slate-700">+02 {contactInfo.phone[1]}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md shadow-blue-900/10 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af] flex-shrink-0">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e40af] mb-2">{t('contact.address')}</h3>
                  <p className="text-slate-700">
                  {t('contact.addressHolder')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-900/10" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phonePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-[#1e40af] font-semibold text-sm">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 resize-y min-h-[120px]"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-4 text-lg mt-4">
                {t('contact.form.sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

