interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  accent = true,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {accent && (
        <div className="w-12 h-1 bg-pats-red rounded-full mb-4" />
      )}
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-pats-silver/70 text-lg mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
