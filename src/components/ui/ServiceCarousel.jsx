import { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const AUTO_INTERVAL_MS = 4000;
const RESUME_DELAY_MS = 6000;

export default function ServiceCarousel({ items, autoPlay = false }) {
  const scrollerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const el = scrollerRef.current;
    if (!el || !items.length) return;
    const slide = el.firstElementChild;
    if (!slide) return;
    const slideWidth = slide.getBoundingClientRect().width;
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '24') || 24;
    const index = Math.round(el.scrollLeft / (slideWidth + gap));
    const next = Math.max(0, Math.min(items.length - 1, index));
    activeIndexRef.current = next;
    setActiveIndex(next);
  };

  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  const scrollByCards = (direction) => {
    const next = Math.max(
      0,
      Math.min(items.length - 1, activeIndexRef.current + direction),
    );
    scrollToIndex(next);
  };

  const pauseAutoPlay = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, RESUME_DELAY_MS);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    updateActiveIndex();
    el.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);
    return () => {
      el.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay || items.length < 2) return undefined;

    const timer = setInterval(() => {
      if (pausedRef.current) return;
      const next = (activeIndexRef.current + 1) % items.length;
      scrollToIndex(next);
    }, AUTO_INTERVAL_MS);

    return () => {
      clearInterval(timer);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [autoPlay, items.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (autoPlay) pausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (autoPlay && !resumeTimeoutRef.current) {
          pausedRef.current = false;
        }
      }}
      onFocusCapture={() => {
        if (autoPlay) pauseAutoPlay();
      }}
      onPointerDown={() => {
        if (autoPlay) pauseAutoPlay();
      }}
    >
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => {
          pauseAutoPlay();
          scrollByCards(-1);
        }}
        className="absolute top-1/2 left-0 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-white text-on-surface shadow-sm transition hover:border-primary hover:text-primary"
      >
        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => {
          pauseAutoPlay();
          scrollByCards(1);
        }}
        className="absolute top-1/2 right-0 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-white text-on-surface shadow-sm transition hover:border-primary hover:text-primary"
      >
        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-12 pb-4"
        onTouchStart={() => {
          if (autoPlay) pauseAutoPlay();
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="w-full shrink-0 snap-center md:w-auto md:snap-start"
          >
            <ServiceCard {...item} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Ir para ${item.title}`}
            onClick={() => {
              pauseAutoPlay();
              scrollToIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? 'w-7 bg-primary'
                : 'w-2.5 bg-outline-variant hover:bg-outline'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
