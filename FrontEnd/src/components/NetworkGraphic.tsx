import { useTranslation } from 'react-i18next';
import { Users, GraduationCap, BarChart3 } from 'lucide-react';

// Abstract "people network" for the hero: the organization at the centre,
// people as nodes on orbits, connections pulsing between them.
const C = 280; // centre of the 560×560 viewBox

const nodes = [
  { x: 280, y: 110, r: 20, ring: 1 },
  { x: 430, y: 200, r: 16, ring: 1 },
  { x: 440, y: 380, r: 22, ring: 1 },
  { x: 290, y: 460, r: 15, ring: 1 },
  { x: 125, y: 390, r: 19, ring: 1 },
  { x: 120, y: 190, r: 16, ring: 1 },
  { x: 520, y: 290, r: 11, ring: 2 },
  { x: 60, y: 290, r: 12, ring: 2 },
  { x: 380, y: 60, r: 10, ring: 2 },
  { x: 175, y: 510, r: 10, ring: 2 },
];

// pairs of node indexes connected to each other (in addition to the hub)
const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 6], [4, 7], [0, 8], [3, 9]];

const Person = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="#0f1e36" stroke="rgba(147,197,253,0.55)" strokeWidth="1.5" />
    <circle cx={x} cy={y - r * 0.22} r={r * 0.28} fill="#93c5fd" />
    <path
      d={`M ${x - r * 0.5} ${y + r * 0.55} Q ${x} ${y - r * 0.05} ${x + r * 0.5} ${y + r * 0.55}`}
      fill="#93c5fd"
    />
  </g>
);

const Chip = ({ icon, label, className, delay }: { icon: React.ReactNode; label: string; className: string; delay: string }) => (
  <div
    className={`absolute flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.07] px-3.5 py-2.5 text-sm font-medium text-white shadow-2xl shadow-black/30 backdrop-blur-md animate-drift ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand text-white">{icon}</span>
    <span className="whitespace-nowrap">{label}</span>
  </div>
);

const NetworkGraphic = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
      {/* glow behind the hub */}
      <div className="absolute inset-[22%] rounded-full bg-brand/40 blur-3xl" />

      <svg viewBox="0 0 560 560" className="relative h-full w-full overflow-visible">
        <defs>
          <radialGradient id="hub" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <linearGradient id="link" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* orbits */}
        <circle cx={C} cy={C} r="175" fill="none" stroke="rgba(255,255,255,0.08)" />
        <g className="animate-spin-slow">
          <circle cx={C} cy={C} r="250" fill="none" stroke="rgba(255,255,255,0.07)" strokeDasharray="2 10" />
        </g>
        <circle cx={C} cy={C} r="95" fill="none" stroke="rgba(255,255,255,0.1)" />

        {/* hub → people */}
        {nodes.filter((n) => n.ring === 1).map((n, i) => (
          <line key={`h${i}`} x1={C} y1={C} x2={n.x} y2={n.y} stroke="url(#link)" strokeWidth="1.5" className="animate-dash" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
        {/* people ↔ people */}
        {links.map(([a, b], i) => (
          <line key={`l${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="rgba(147,197,253,0.18)" strokeWidth="1" />
        ))}

        {/* pulses on a few people */}
        {[0, 2, 4].map((i) => (
          <circle key={`p${i}`} cx={nodes[i].x} cy={nodes[i].y} r={nodes[i].r} fill="none" stroke="#38bdf8" strokeWidth="1.5" className="animate-pulse-ring" style={{ animationDelay: `${i * 0.7}s` }} />
        ))}

        {nodes.map((n, i) => (
          <Person key={i} {...n} />
        ))}

        {/* hub: the organization */}
        <circle cx={C} cy={C} r="58" fill="url(#hub)" />
        <circle cx={C} cy={C} r="58" fill="none" stroke="#bfdbfe" strokeOpacity="0.5" />
        <circle cx={C} cy={C} r="58" fill="none" stroke="#38bdf8" strokeWidth="2" className="animate-pulse-ring" />
        {/* stylised rising "E" bars */}
        <g fill="#fff">
          <rect x={C - 22} y={C + 8} width="12" height="16" rx="3" opacity="0.7" />
          <rect x={C - 6} y={C - 6} width="12" height="30" rx="3" opacity="0.85" />
          <rect x={C + 10} y={C - 22} width="12" height="46" rx="3" />
        </g>
      </svg>

      <Chip icon={<Users size={16} />} label={t('landing.features.talentAcquisition.title')} className="top-[8%] start-0 sm:-start-4" delay="0s" />
      <Chip icon={<GraduationCap size={16} />} label={t('landing.features.training.title')} className="top-[46%] end-0 hidden sm:-end-6 sm:flex" delay="1.5s" />
      <Chip icon={<BarChart3 size={16} />} label={t('landing.features.hrStrategy.title')} className="bottom-[6%] start-[6%]" delay="3s" />
    </div>
  );
};

export default NetworkGraphic;
