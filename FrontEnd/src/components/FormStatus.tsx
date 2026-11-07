import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export type Status = 'idle' | 'sending' | 'success' | 'error';

/** Inline success / error message shown in place of browser alerts. */
const FormStatus = ({ status, errorText }: { status: 'success' | 'error'; errorText?: string }) => {
  const { t } = useTranslation();
  const ok = status === 'success';
  return (
    <div
      role={ok ? 'status' : 'alert'}
      className={`animate-rise flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed ${
        ok ? 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200' : 'bg-red-50 text-red-900 ring-1 ring-red-200'
      }`}
    >
      {ok ? <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" /> : <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-600" />}
      <p>{ok ? t('forms.success') : errorText ?? t('forms.error')}</p>
    </div>
  );
};

export default FormStatus;
