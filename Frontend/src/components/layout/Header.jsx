import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { user } from '../../data/dashboardData';

export default function Header({ onMenuToggle }) {
  return (
    <header
      className="sticky top-0 z-30 flex h-[70px] items-center justify-between gap-4 border-b border-border bg-surface px-4 sm:px-6"
      style={{ height: 'var(--header-height)' }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-primary-light hover:text-primary md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            IH
          </span>
          <span className="hidden text-lg font-bold tracking-tight text-ink sm:inline">
            InterviewHub
          </span>
        </a>
      </div>

      <div className="hidden max-w-md flex-1 md:block">
        <label htmlFor="global-search" className="sr-only">
          Search questions, skills, interviews
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="global-search"
            type="search"
            placeholder="Search questions, skills, interviews..."
            className="w-full rounded-lg border border-border bg-bg py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:border-primary focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-primary-light hover:text-primary"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg py-1.5 pl-1.5 pr-2 hover:bg-primary-light"
          aria-label={`Account menu for ${user.name}, ${user.role}`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary">
            {user.avatarInitials}
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-semibold text-ink">{user.name}</span>
            <span className="block text-xs text-muted">{user.role}</span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-muted sm:block" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
