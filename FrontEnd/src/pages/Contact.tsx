import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Reveal from '../components/motion/Reveal';
import FormStatus, { type Status } from '../components/FormStatus';
import { sendForm } from '../lib/sendForm';

const EMAIL = 'info@evolvia-hr.com';
// Egyptian mobiles: +20, then the number without its leading 0
const PHONES = [
  { display: '+20 121 110 1625', tel: '+201211101625' },
  { display: '+20 104 000 0178', tel: '+201040000178' },
];

const inputClass =
  'w-full rounded-xl border border-ink/10 bg-mist px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/15 disabled:opacity-60';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendForm({
        name: formData.name,
        email: formData.email,
        subject: `[Website contact] ${formData.name}`,
        message: formData.phone ? `Phone: ${formData.phone}\n\n${formData.message}` : formData.message,
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const address = t('contact.addressHolder');
  const channels = [
    { icon: Mail, label: t('contact.email'), lines: [{ text: EMAIL, href: `mailto:${EMAIL}` }] },
    { icon: Phone, label: t('contact.phone'), lines: PHONES.map((p) => ({ text: p.display, href: `tel:${p.tel}` })) },
    {
      icon: MapPin,
      label: t('contact.address'),
      lines: [{ text: address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, external: true }],
    },
  ];

  const sending = status === 'sending';

  return (
    <div className="bg-white">
      <PageHero eyebrow={t('contact.eyebrow')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Info */}
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">{t('contact.letsWorkTogether')}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/60">{t('contact.description')}</p>
            </Reveal>

            <ul className="mt-10 space-y-4">
              {channels.map(({ icon: Icon, label, lines }, i) => (
                <Reveal as="li" key={label} delay={i * 90} className="flex gap-5 rounded-3xl border border-ink/[0.07] bg-mist/60 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/45 rtl:tracking-normal">{label}</h3>
                    {lines.map((line) => (
                      <a
                        key={line.text}
                        href={line.href}
                        {...('external' in line ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group mt-1.5 flex items-center gap-1.5 break-words font-display text-lg font-semibold text-ink transition-colors hover:text-brand"
                        dir={Icon === Phone ? 'ltr' : undefined}
                      >
                        <span className={Icon === Phone ? 'rtl:text-end' : ''}>{line.text}</span>
                        <ArrowUpRight size={16} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-ink/[0.07] bg-white p-6 shadow-[0_40px_80px_-40px_rgba(11,20,36,0.3)] sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    {t('contact.form.name')} <span className="text-brand">*</span>
                  </label>
                  <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required disabled={sending} placeholder={t('contact.form.namePlaceholder')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    {t('contact.form.email')} <span className="text-brand">*</span>
                  </label>
                  <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required disabled={sending} placeholder={t('contact.form.emailPlaceholder')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
                    {t('contact.form.phone')}
                  </label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" dir="ltr" value={formData.phone} onChange={handleChange} disabled={sending} placeholder={t('contact.form.phonePlaceholder')} className={`${inputClass} rtl:text-end`} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                    {t('contact.form.message')} <span className="text-brand">*</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required disabled={sending} rows={6} placeholder={t('contact.form.messagePlaceholder')} className={`${inputClass} min-h-[140px] resize-y`} />
                </div>
              </div>

              {(status === 'success' || status === 'error') && (
                <div className="mt-5">
                  <FormStatus status={status} errorText={status === 'error' ? t('contact.form.error') : undefined} />
                </div>
              )}

              <button type="submit" className="btn btn-primary mt-6 w-full !py-4 text-lg" disabled={sending}>
                {sending ? t('forms.sending') : t('contact.form.sendMessage')}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
