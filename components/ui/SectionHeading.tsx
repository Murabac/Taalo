type SectionHeadingProps = {
  label: string;
  title: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
        {label}
      </p>
      <h2
        className={`text-2xl font-bold leading-tight break-words sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
