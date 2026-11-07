import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top whenever the route changes (desktop and mobile).
// 'instant' overrides the global `scroll-behavior: smooth` so the new page
// doesn't visibly scroll up from where the previous page was.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
