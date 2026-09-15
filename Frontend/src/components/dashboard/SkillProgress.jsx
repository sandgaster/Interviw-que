import ProgressBar from '../common/ProgressBar';
import Badge from '../common/Badge';
import { skillsData, getSkillStatus } from '../../data/dashboardData';

export default function SkillProgress() {
  return (
    <article className="flex h-full flex-col gap-5 rounded-card border border-border bg-surface p-5 shadow-card sm:p-6">
      <div>
        <h2 className="text-base font-semibold text-ink">Skill Progress</h2>
        <p className="mt-1 text-sm text-muted">Your current preparation level</p>
      </div>

      <ul className="flex flex-col gap-4">
        {skillsData.map((skill) => {
          const status = getSkillStatus(skill.percentage);
          return (
            <li key={skill.id}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-ink">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <Badge tone={status.tone}>{status.label}</Badge>
                  <span className="w-10 text-right text-sm font-semibold text-ink">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <ProgressBar
                percentage={skill.percentage}
                tone={status.tone}
                label={`${skill.name} proficiency`}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
}
