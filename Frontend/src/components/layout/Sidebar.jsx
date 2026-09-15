import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Video,
  BookOpen,
  Brain,
  FileText,
  TrendingUp,
  History,
  Settings,
  HelpCircle,
  X,
} from 'lucide-react';
import { navItems, secondaryNavItems } from '../../data/dashboardData';

const ICONS = {
  LayoutDashboard,
  Video,
  BookOpen,
  Brain,
  FileText,
  TrendingUp,
  History,
  Settings,
  HelpCircle,
};

function NavList({ items, onNavigate }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <li key={item.label}>
            <NavLink
              to={item.path}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm transition-colors duration-150 ${
                  isActive
                    ? 'bg-primary-light font-semibold text-primary'
                    : 'text-muted hover:bg-primary-light hover:text-primary'
                }`
              }
            >
              <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[250px] shrink-0 flex-col border-r border-border bg-surface transition-transform duration-200 ease-out md:sticky md:top-[70px] md:z-10 md:h-[calc(100vh-70px)] md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: 'var(--sidebar-width)' }}
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between px-4 pt-4 md:hidden">
          <span className="text-sm font-semibold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-primary-light hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-between overflow-y-auto px-3 py-4">
          <NavList items={navItems} onNavigate={onClose} />

          <div className="mt-6 border-t border-border pt-4">
            <NavList items={secondaryNavItems} onNavigate={onClose} />
          </div>
        </nav>
      </aside>
    </>
  );
}
