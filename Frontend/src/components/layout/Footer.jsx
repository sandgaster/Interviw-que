export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-5 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-muted">© 2026 InterviewHub</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <li>
              <a href="/privacy" className="hover:text-primary">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary">
                Terms
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-primary">
                Help
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-sm text-muted">Built for better interview preparation.</p>
      </div>
    </footer>
  );
}
