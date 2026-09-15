import Badge from '../common/Badge';
import { recentInterviews } from '../../data/dashboardData';

const STATUS_TONE = {
  Completed: 'success',
  'In Progress': 'warning',
  Failed: 'danger',
};

const COLUMNS = [
  'Interview',
  'Technology',
  'Date',
  'Score',
  'Difficulty',
  'Status',
  'Action',
];

export default function RecentInterviews() {
  return (
    <article className="flex flex-col gap-5 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-ink">Recent Interviews</h2>
        <button
          type="button"
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          View All
        </button>
      </div>

      <div className="scrollbar-thin -mx-1 overflow-x-auto px-1">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
              {COLUMNS.map((column) => (
                <th key={column} scope="col" className="px-3 py-2 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentInterviews.map((interview) => (
              <tr
                key={interview.id}
                className="border-b border-border last:border-0 hover:bg-bg"
              >
                <td className="px-3 py-3 font-medium text-ink">{interview.title}</td>
                <td className="px-3 py-3 text-muted">{interview.technology}</td>
                <td className="px-3 py-3 text-muted">{interview.date}</td>
                <td className="px-3 py-3 font-semibold text-ink">{interview.score}</td>
                <td className="px-3 py-3 text-muted">{interview.difficulty}</td>
                <td className="px-3 py-3">
                  <Badge tone={STATUS_TONE[interview.status] ?? 'neutral'}>
                    {interview.status}
                  </Badge>
                </td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    className="text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
