import WelcomeSection from '../components/dashboard/WelcomeSection';
import StatsCard from '../components/dashboard/StatsCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import SkillProgress from '../components/dashboard/SkillProgress';
import RecentInterviews from '../components/dashboard/RecentInterviews';
import RecommendedPractice from '../components/dashboard/RecommendedPractice';
import PreparationOverview from '../components/dashboard/PreparationOverview';
import { statsData } from '../data/dashboardData';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <WelcomeSection />

      <section aria-label="Key statistics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.id}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            description={stat.description}
          />
        ))}
      </section>

      <section aria-label="Performance and skills" className="grid grid-cols-1 gap-6 lg:grid-cols-[65fr_35fr]">
        <PerformanceChart />
        <SkillProgress />
      </section>

      <RecentInterviews />

      <RecommendedPractice />

      <PreparationOverview />
    </div>
  );
}
