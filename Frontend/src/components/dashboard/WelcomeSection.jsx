import { PlayCircle, ListChecks } from 'lucide-react';
import Button from '../common/Button';
import { user } from '../../data/dashboardData';

export default function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="flex flex-col gap-4 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 id="welcome-heading" className="text-xl font-bold text-ink sm:text-2xl">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="mt-1.5 text-sm text-muted sm:text-base">
          Continue your interview preparation and improve your skills.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" icon={PlayCircle}>
          Start Mock Interview
        </Button>
        <Button variant="secondary" icon={ListChecks}>
          Practice Questions
        </Button>
      </div>
    </section>
  );
}
