import type { HTMLAttributes, MouseEvent } from 'react';

/** A div whose background glow follows the cursor (styles: `.spotlight` in index.css). */
const Spotlight = ({ className = '', onMouseMove, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
    onMouseMove?.(e);
  };
  return <div className={`spotlight ${className}`} onMouseMove={handleMove} {...props} />;
};

export default Spotlight;
