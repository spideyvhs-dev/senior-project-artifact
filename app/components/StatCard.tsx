interface StatCardProps {
  label: string;
  value: string;
  subtitle?: string;
  highlight?: boolean;
}

export default function StatCard({
  label,
  value,
  subtitle,
  highlight = false,
}: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-5 border transition-all card-hover ${
        highlight
          ? "bg-pats-red/15 border-pats-red/40"
          : "bg-pats-navy/30 border-pats-navy/50"
      }`}
    >
      <p className="text-pats-silver text-xs uppercase tracking-widest font-semibold mb-1">
        {label}
      </p>
      <p
        className={`text-3xl font-black ${
          highlight ? "text-pats-red" : "text-white"
        }`}
      >
        {value}
      </p>
      {subtitle && (
        <p className="text-pats-silver/60 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
}
