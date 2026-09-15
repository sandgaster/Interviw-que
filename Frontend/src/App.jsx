import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';

// Lightweight placeholder for routes outside the scope of this build.
// Only the Dashboard page below is fully implemented.
function ComingSoon({ label }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-2 rounded-card border border-dashed border-border bg-surface p-10 text-center">
      <h1 className="text-lg font-semibold text-ink">{label}</h1>
      <p className="max-w-sm text-sm text-muted">
        This page isn't part of the current build. Head back to the Dashboard to see
        what's ready.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mock-interview" element={<ComingSoon label="Mock Interview" />} />
        <Route path="/question-bank" element={<ComingSoon label="Question Bank" />} />
        <Route path="/skillgap-ai" element={<ComingSoon label="SkillGap AI" />} />
        <Route path="/resume-analyzer" element={<ComingSoon label="Resume Analyzer" />} />
        <Route path="/progress" element={<ComingSoon label="Progress" />} />
        <Route path="/interview-history" element={<ComingSoon label="Interview History" />} />
        <Route path="/settings" element={<ComingSoon label="Settings" />} />
        <Route path="/help" element={<ComingSoon label="Help & Support" />} />
        <Route path="*" element={<ComingSoon label="Page not found" />} />
      </Routes>
    </DashboardLayout>
  );
}
