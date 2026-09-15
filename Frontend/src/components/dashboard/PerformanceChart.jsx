import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { performanceData, performanceSummary } from '../../data/dashboardData';

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 text-xs shadow-card">
      <p className="font-semibold text-ink">{label}</p>
      <p className="text-muted">Score: {payload[0].value}%</p>
    </div>
  );
}

export default function PerformanceChart() {
  return (
    <article className="flex h-full flex-col gap-5 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-ink">Interview Performance</h2>
          <p className="mt-1 text-sm text-muted">
            Your interview scores over the last 7 attempts
          </p>
        </div>
        <div className="flex gap-4 sm:text-right">
          <div>
            <p className="text-xs text-muted">Average Score</p>
            <p className="text-lg font-bold text-ink">{performanceSummary.averageScore}%</p>
          </div>
          <div>
            <p className="text-xs text-muted">Trend</p>
            <p className="text-lg font-bold text-success">{performanceSummary.trend}</p>
          </div>
        </div>
      </div>

      <div className="h-64 w-full sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="name"
              tickFormatter={(value) => value.replace('Interview ', '#')}
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltip />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#4f46e5"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#4f46e5', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
