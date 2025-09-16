import React from 'react';
import InfoCard from './components/InfoCard';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
import { SectionTitle } from './components/SectionTitle';
import ReportHeader from './components/ReportHeader';
import FiltersBar from './components/FiltersBar';
import ChartCard from './components/ChartCard';
import GlossaryLink from './components/GlossaryLink';

/**
 * ReportPage
 * Props:
 *  - report: { title, author, updated, description }
 *  - onClose: function
 *
 * This component renders a detailed report view with metric cards and
 * native SVG charts styled with a Fluent-like visual language.
 */
export default function ReportPage({ report, onClose }) {
  // For the demo we use lightweight mock data — in a real app this
  // would be driven from the report's dataset or an API call.
  const adoptionPercent = 62; // percent
  const activeUsers = 1243;
  const weeklyUse = '3.8 hrs';

  const topScenarios = [
    { label: 'Code generation', value: 520, max: 800, color: '#6b64d8', bgColor: '#ece9ff' },
    { label: 'Drafting emails', value: 380, max: 800, color: '#4f46e5', bgColor: '#ece9ff' },
    { label: 'Meeting summaries', value: 260, max: 800, color: '#8b5cf6', bgColor: '#f5eefc' },
  ];

  const deptAdoption = [
    { label: 'Engineering', value: 78, max: 100, valueLabel: '78%' , color: '#0f766e', bgColor: '#ecfdf5' },
    { label: 'Marketing', value: 64, max: 100, valueLabel: '64%', color: '#0ea5a4', bgColor: '#ecfdf5' },
    { label: 'Sales', value: 55, max: 100, valueLabel: '55%', color: '#06b6d4', bgColor: '#ecfeff' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <ReportHeader
        title={report?.title || 'Report'}
        author={report?.author}
        updated={report?.updated}
        onBack={onClose}
        actions={(
          <>
            <button className="inline-flex items-center rounded-md px-3 py-2 bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:bg-gray-50" aria-label="Save report">Save</button>
            <button className="inline-flex items-center rounded-md px-3 py-2 bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:bg-gray-50" aria-label="Export report">Export</button>
          </>
        )}
      />

      <FiltersBar dateFrom="2025-08-01" dateTo="2025-09-01" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Active users" value={activeUsers} subtitle="Users active in the last 30 days" research="High usage correlates with higher productivity in measured teams." colorClass="text-slate-900" />
        <InfoCard title="Weekly usage" value={weeklyUse} subtitle="Average time per user" research="Steady weekly usage indicates healthy integration into workflows." colorClass="text-slate-900" />
        <InfoCard title="Adoption rate" value={`${adoptionPercent}%`} subtitle="Percent of users who adopted Copilot" research="Adoption differs by department — targeted training raises usage." colorClass="text-slate-900" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <ChartCard title="Overall adoption" subtitle="Last 30 days">
            <div className="flex items-center gap-6">
              <DonutChart percent={adoptionPercent} size={140} strokeWidth={12} color="#6b64d8" bgColor="#ebe9ff">
                <div className="text-center" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                  <div className="text-sm text-gray-500">Adopted</div>
                  <div className="text-lg font-semibold text-gray-900">{adoptionPercent}%</div>
                </div>
              </DonutChart>
              <div className="flex-1">
                <div className="text-sm text-gray-600 mb-3">Key notes</div>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Adoption is strongest in engineering and product teams.</li>
                  <li>Top use-cases are code generation and email drafting.</li>
                  <li>Monthly trainings increased adoption by ~8%.</li>
                </ul>
              </div>
            </div>
          </ChartCard>
        </div>

        <div className="col-span-2">
          <ChartCard title="Top scenarios by usage" subtitle="Last 30 days">
            <BarChart data={topScenarios} />
          </ChartCard>

          <div className="mt-6">
            <ChartCard title="Adoption by department" subtitle="Percent of users">
              <BarChart data={deptAdoption} />
            </ChartCard>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow p-6">
        <div className="font-medium mb-2">Activity over time</div>
        <div className="text-sm text-gray-500 mb-4">Daily active users and interactions (sample data)</div>
        {/* lightweight inline chart — simple bars implemented with divs to keep native rendering */}
        <div className="w-full flex items-end gap-2 h-40">
          {Array.from({ length: 30 }).map((_, i) => {
            // mock pattern for variation
            const value = Math.floor(20 + 60 * Math.abs(Math.sin(i / 4)) + (i % 5) * 3);
            const height = Math.max(2, Math.round((value / 100) * 160));
            return (
              <div key={i} className="flex-1 bg-gray-100 rounded-sm flex items-end" style={{ height: '100%', minWidth: 2 }}>
                <div className="bg-indigo-300 rounded-sm w-full" style={{ height }} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">Terms: <GlossaryLink href="https://example.com/glossary" label="View glossary" /></div>
        <div className="text-sm text-gray-500">Last updated: {report?.updated}</div>
      </div>
    </div>
  );
}
