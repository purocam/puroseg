import { useEffect, useState } from 'react';

const ITEMS = [
  { href: '#top', id: 'top', label: 'Início', icon: 'home' },
  { href: '#documents', id: 'documents', label: 'Documentos', icon: 'description' },
  { href: '#training', id: 'training', label: 'Treinamentos', icon: 'school' },
  { href: '#contact', id: 'contact', label: 'Contato', icon: 'chat' },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const sectionIds = ['documents', 'training', 'outros', 'about', 'contact'];
    const observers = [];

    const onIntersect = (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const id = visible[0].target.id;
      if (id === 'outros' || id === 'about') {
        setActive(id === 'outros' ? 'documents' : 'training');
        return;
      }
      setActive(id);
    };

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: '-40% 0px -45% 0px',
      threshold: [0.1, 0.25, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    const onScrollTop = () => {
      if (window.scrollY < 120) setActive('top');
    };
    window.addEventListener('scroll', onScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollTop);
    };
  }, []);

  return (
    <nav
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-outline-variant/40 bg-white/95 px-2 pt-2 backdrop-blur-lg md:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      aria-label="Navegação principal"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 gap-1">
        {ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[11px] font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-outline hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
