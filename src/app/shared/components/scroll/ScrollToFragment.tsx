import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToFragment = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToFragment = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const timeout = setTimeout(scrollToFragment, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

export default ScrollToFragment;