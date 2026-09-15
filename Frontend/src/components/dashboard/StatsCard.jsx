import { ArrowUpRight } from 'lucide-react';

export default function StatsCard({ icon: Icon, label, value, trend, description }) {
  return (
    <article className="flex flex-col gap-4 rounded-card border border-border bg-surface p-5 shadow-card transition-shadow duration-150 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary-light text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-success">
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          {trend}
        </span>
      </div>

      <div>
        <p className="text-sm text-muted">{label}</p>
        <p className="mt-1 text-2xl font-bold text-ink sm:text-[28px]">{value}</p>
      </div>

      <p className="text-xs text-muted">{description}</p>
    </article>
  );
}
