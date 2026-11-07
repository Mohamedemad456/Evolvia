import type { SVGProps } from 'react';

// Brand icons are deprecated in lucide-react (removed in v1.0), so they live here.
// Same 24x24 outline style as Lucide so they match the rest of the UI.
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, strokeWidth: SVGProps<SVGSVGElement>['strokeWidth']) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export const LinkedinIcon = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg {...base(size, strokeWidth)} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const FacebookIcon = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg {...base(size, strokeWidth)} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
