import { Video, Award, BookOpen, Brain } from 'lucide-react';

export const user = {
  name: 'Dharmendra',
  role: 'Student',
  avatarInitials: 'DK',
};

export const navItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/', end: true },
  { label: 'Mock Interview', icon: 'Video', path: '/mock-interview' },
  { label: 'Question Bank', icon: 'BookOpen', path: '/question-bank' },
  { label: 'SkillGap AI', icon: 'Brain', path: '/skillgap-ai' },
  { label: 'Resume Analyzer', icon: 'FileText', path: '/resume-analyzer' },
  { label: 'Progress', icon: 'TrendingUp', path: '/progress' },
  { label: 'Interview History', icon: 'History', path: '/interview-history' },
];

export const secondaryNavItems = [
  { label: 'Settings', icon: 'Settings', path: '/settings' },
  { label: 'Help & Support', icon: 'HelpCircle', path: '/help' },
];

export const statsData = [
  {
    id: 'total-interviews',
    icon: Video,
    label: 'Total Interviews',
    value: '24',
    trend: '+12%',
    trendDirection: 'up',
    description: 'This month',
  },
  {
    id: 'average-score',
    icon: Award,
    label: 'Average Score',
    value: '82%',
    trend: '+8%',
    trendDirection: 'up',
    description: 'vs last month',
  },
  {
    id: 'questions-solved',
    icon: BookOpen,
    label: 'Questions Solved',
    value: '156',
    trend: '+24',
    trendDirection: 'up',
    description: 'This week',
  },
  {
    id: 'skills-improved',
    icon: Brain,
    label: 'Skills Improved',
    value: '12',
    trend: '+3',
    trendDirection: 'up',
    description: 'This month',
  },
];

export const performanceData = [
  { name: 'Interview 1', score: 65 },
  { name: 'Interview 2', score: 72 },
  { name: 'Interview 3', score: 68 },
  { name: 'Interview 4', score: 78 },
  { name: 'Interview 5', score: 75 },
  { name: 'Interview 6', score: 84 },
  { name: 'Interview 7', score: 88 },
];

export const performanceSummary = {
  averageScore: 78,
  trend: '+12% improvement',
};

export const skillsData = [
  { id: 'javascript', name: 'JavaScript', percentage: 82 },
  { id: 'react', name: 'React', percentage: 76 },
  { id: 'dsa', name: 'DSA', percentage: 68 },
  { id: 'communication', name: 'Communication', percentage: 61 },
  { id: 'system-design', name: 'System Design', percentage: 45 },
];

export function getSkillStatus(percentage) {
  if (percentage >= 80) return { label: 'Strong', tone: 'success' };
  if (percentage >= 60) return { label: 'Good', tone: 'warning' };
  return { label: 'Needs Improvement', tone: 'danger' };
}

export const recentInterviews = [
  {
    id: 'int-1',
    title: 'Technical Interview',
    technology: 'React',
    date: 'Sep 5, 2026',
    score: '88%',
    difficulty: 'Medium',
    status: 'Completed',
  },
  {
    id: 'int-2',
    title: 'Technical Interview',
    technology: 'JavaScript',
    date: 'Sep 3, 2026',
    score: '81%',
    difficulty: 'Hard',
    status: 'Completed',
  },
  {
    id: 'int-3',
    title: 'HR Interview',
    technology: 'General',
    date: 'Sep 1, 2026',
    score: '76%',
    difficulty: 'Easy',
    status: 'Completed',
  },
  {
    id: 'int-4',
    title: 'Frontend Interview',
    technology: 'HTML/CSS',
    date: 'Aug 29, 2026',
    score: '84%',
    difficulty: 'Medium',
    status: 'Completed',
  },
];

export const recommendedPractice = [
  {
    id: 'closures',
    title: 'JavaScript Closures',
    difficulty: 'Medium',
    time: '15 min',
    description: 'Master lexical scope, closures and common interview patterns.',
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    difficulty: 'Medium',
    time: '20 min',
    description: 'Practice useState, useEffect and custom hooks interview questions.',
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Easy',
    time: '15 min',
    description: 'Strengthen your binary search problem-solving skills.',
  },
  {
    id: 'system-design-basics',
    title: 'System Design Basics',
    difficulty: 'Hard',
    time: '30 min',
    description: 'Learn the fundamentals of designing scalable applications.',
  },
];

export const preparationMetrics = [
  { id: 'technical', label: 'Technical Skills', percentage: 78 },
  { id: 'problem-solving', label: 'Problem Solving', percentage: 72 },
  { id: 'communication', label: 'Communication', percentage: 61 },
  { id: 'confidence', label: 'Interview Confidence', percentage: 75 },
];

export const preparationMessage =
  "You're making good progress. Focus on Communication and System Design this week.";
