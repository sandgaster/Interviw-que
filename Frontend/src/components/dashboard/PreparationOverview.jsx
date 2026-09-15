import { Sparkles } from 'lucide-react';
import ProgressBar from '../common/ProgressBar';
import { preparationMetrics, preparationMessage } from '../../data/dashboardData';

export default function PreparationOverview() {
  return (
    <article className="flex flex-col gap-6 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6">
      <h2 className="text-base font-semibold text-ink">Preparation Overview</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {preparationMetrics.map((metric) => (
          <div key={metric.id}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-muted">{metric.label}</span>
              <span className="text-sm font-semibold text-ink">{metric.percentage}%</span>
            </div>
            <ProgressBar
              percentage={metric.percentage}
              tone="primary"
              label={metric.label}
            />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-[10px] bg-primary-light p-4">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm text-primary">{preparationMessage}</p>
      </div>
    </article>
  );
}
