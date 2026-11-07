import { type ElementType, type ReactNode, type CSSProperties } from 'react';
import { useInView } from "./useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** Fades + lifts its children in when they scroll into view. */
const Reveal = ({ children, as: Tag = 'div', delay = 0, className = '', style }: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ...style, ['--delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
