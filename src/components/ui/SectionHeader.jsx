export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'start',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-start items-start';

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[28px] leading-9 font-bold tracking-[-0.02em] text-on-surface md:text-[40px] md:leading-12">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
