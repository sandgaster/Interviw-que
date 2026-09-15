import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="grid min-h-screen grid-cols-1 md:grid-cols-[var(--sidebar-width)_1fr]"
      style={{
        gridTemplateAreas: "'header header' 'sidebar main' 'footer footer'",
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <div style={{ gridArea: 'header' }} className="col-span-full">
        <Header onMenuToggle={() => setSidebarOpen(true)} />
      </div>

      <div style={{ gridArea: 'sidebar' }}>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <main
        style={{ gridArea: 'main' }}
        className="min-w-0 bg-bg px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >
        {children}
      </main>

      <div style={{ gridArea: 'footer' }} className="col-span-full">
        <Footer />
      </div>
    </div>
  );
}
