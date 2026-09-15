import { Clock } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { recommendedPractice } from '../../data/dashboardData';

const DIFFICULTY_TONE = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'danger',
};

export default function RecommendedPractice() {
  return (
    <section aria-labelledby="recommended-practice-heading" className="flex flex-col gap-5">
      <div>
        <h2 id="recommended-practice-heading" className="text-base font-semibold text-ink">
          Recommended Practice
        </h2>
        <p className="mt-1 text-sm text-muted">
          Topics selected based on your preparation progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recommendedPractice.map((topic) => (
          <article
            key={topic.id}
            className="flex flex-col gap-3 rounded-card border border-border bg-surface p-5 shadow-card transition-shadow duration-150 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <Badge tone={DIFFICULTY_TONE[topic.difficulty] ?? 'neutral'}>
                {topic.difficulty}
              </Badge>
              <span className="inline-flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {topic.time}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-ink">{topic.title}</h3>
            <p className="flex-1 text-sm text-muted">{topic.description}</p>

            <Button variant="secondary" className="w-full justify-center">
              Practice Now
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
