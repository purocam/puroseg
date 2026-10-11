import { useEffect, useRef, useState } from 'react';

export default function ServiceCard({
  title,
  description,
  tag,
  image,
  imageAlt = '',
}) {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return undefined;

    const measure = () => {
      if (expanded) return;
      setTruncated(el.scrollHeight > el.clientHeight + 1);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [description, expanded]);

  const showToggle = expanded || truncated;

  return (
    <article
      className={`service-card flex h-full w-full max-w-none shrink-0 flex-col overflow-hidden rounded-2xl border border-outline-variant/40 bg-white shadow-sm md:min-w-[280px] md:max-w-[340px] ${
        expanded ? 'active' : ''
      }`}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-surface-container">
        <img
          src={image || '/Lateral1.jpeg'}
          alt={imageAlt || title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {tag ? (
          <span className="absolute top-3 left-3 rounded-md bg-on-surface/90 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-white uppercase">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 pt-4 pb-4 text-left">
        <h3 className="mb-2 text-lg font-bold tracking-[-0.015em] text-on-surface">
          {title}
        </h3>
        <p
          ref={descriptionRef}
          className="service-description text-sm leading-5 text-on-surface-variant"
        >
          {description}
        </p>
        {showToggle ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            {expanded ? 'Ver menos' : 'Ver mais'}
          </button>
        ) : null}
      </div>
    </article>
  );
}
