// React functional component for the main index page
// Purpose: Showcase all custom components with example usage
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import CopilotDashboard from './CopilotDashboard';
import { SectionTitle } from './components/SectionTitle';
import { Subtitle } from './components/Subtitle';
import { TabBar } from './components/TabBar';
import { SearchInput } from './components/SearchInput';
import { ReportCard } from './components/ReportCard';
import ReportPage from './ReportPage';

const reports = [
  {
    title: 'Microsoft 365 Copilot adoption',
    author: 'Viva Insights',
    updated: '2 min ago',
    description: 'Accelerate adoption and help people transform their work with Microsoft 365 Copilot.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#E0E7FF"/><rect x="8" y="8" width="16" height="16" rx="4" fill="#C7D2FE"/><path d="M12 20h8M16 12v8" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'M365 Copilot impact FY25',
    author: 'Aadi Kapoor',
    updated: '4 hours ago',
    description: 'Measure the impact Microsoft 365 Copilot on your organization',
    savedBy: '4 hours ago',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#F3E8FF"/><polygon points="16,8 24,24 8,24" fill="#A78BFA"/><polygon points="16,12 21,22 11,22" fill="#C4B5FD"/></svg>
    ),
  },
  {
    title: 'Sales agent adoption Contoso',
    author: 'Allan Munger',
    updated: 'yesterday',
    description: 'Explore the adoption of custom agents and their impact on business outcomes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#F3E8FF"/><path d="M16 10a6 6 0 100 12 6 6 0 000-12z" fill="#A78BFA"/><circle cx="16" cy="16" r="3" fill="#C4B5FD"/></svg>
    ),
  },
];

export default function IndexPage() {
  const [search, setSearch] = useState('');
  const [activeSection, setActiveSection] = useState('Copilot dashboard');
  const [selectedReport, setSelectedReport] = useState(null);
  // simple slug generator for URLs
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const filteredReports = reports.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

  React.useEffect(() => {
    const handleHash = () => {
      const h = (window.location.hash || '').replace(/^#\/?/, '');
      const parts = h.split('/');
      if (parts[0] === 'reports' && parts[1]) {
        const slug = parts[1];
        const found = reports.find(r => slugify(r.title) === slug);
        if (found) {
          setSelectedReport(found);
          return;
        }
      }
      setSelectedReport(null);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-purple-50 flex flex-col" style={{fontFamily:'Segoe UI, Arial, sans-serif'}}>
      <Navbar userName="User" />
      <div className="flex flex-1 min-h-0">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 px-12 py-10 overflow-auto">
          {activeSection === 'Copilot dashboard' ? (
            <CopilotDashboard />
          ) : selectedReport ? (
            <ReportPage report={selectedReport} onClose={() => { window.location.hash = ''; }} />
          ) : (
            <>
              <SectionTitle>Reports</SectionTitle>
              <Subtitle>A centralized collection of reports from your organization.</Subtitle>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                <TabBar />
                <SearchInput value={search} onChange={setSearch} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 w-full max-w-[1200px] mx-auto">
                {filteredReports.map((report, i) => (
                  <div className="flex" key={i}>
                    <ReportCard {...report} onView={() => { window.location.hash = `#/reports/${slugify(report.title)}` }} className="flex-1 w-full min-w-0" />
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
