"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const mockReports = [
  {
    id: "REP-2023-11A",
    name: "Ward 14 Cadastral Harmonization Summary",
    type: "Harmonization Summary",
    dataset: "Unified Ward 14 Cadastre",
    date: "Oct 1, 2026",
    status: "ready",
    version: "v4.8.2",
    metrics: {
      totalFeatures: 4120,
      matched: 3950,
      unresolved: 170,
      confidence: "95.8%",
    },
    findings: [
      "Significant boundary alignment issues resolved in Northern Commercial District.",
      "14 manual overrides applied for legacy property lines.",
      "12 active hotspots identified for field team verification."
    ]
  },
  {
    id: "REP-2023-11B",
    name: "Sector 7 Quality Audit",
    type: "Quality Report",
    dataset: "Sector 7 Commercial Zone",
    date: "Sep 30, 2026",
    status: "review",
    version: "v2.1.0",
    metrics: {
      totalFeatures: 845,
      matched: 806,
      unresolved: 39,
      confidence: "95.5%",
    },
    findings: [
      "Topology rules flagged 12 overlapping structures.",
      "Incomplete geometry recorded for 5 properties; needs surveyor intervention.",
      "Area variance exceeds 5% threshold in 22 parcels."
    ]
  },
  {
    id: "REP-2023-10C",
    name: "Phase II Discrepancy Escapements",
    type: "Conflict Report",
    dataset: "Phase II Residential Setup",
    date: "Sep 24, 2026",
    status: "failed",
    version: "v0.9.1",
    metrics: {
      totalFeatures: 3210,
      matched: 2645,
      unresolved: 565,
      confidence: "82.4%",
    },
    findings: [
      "Critical topology failure on block C causing massive shift errors.",
      "Missing municipal records for 144 registered tax parcels.",
      "Data pipeline aborted to prevent cascading geometry corruption."
    ]
  },
  {
    id: "REP-2023-10A",
    name: "Monthly Match Review Log",
    type: "Match Review Report",
    dataset: "Rural Fringe Boundaries",
    date: "Sep 15, 2026",
    status: "ready",
    version: "v1.0.5",
    metrics: {
      totalFeatures: 12400,
      matched: 12400,
      unresolved: 0,
      confidence: "100%",
    },
    findings: [
      "Initial import sequence executed perfectly.",
      "Zero spatial deviation from state baseline."
    ]
  },
  {
    id: "REP-2023-09Z",
    name: "Draft Industrial Park Sync",
    type: "Harmonization Summary",
    dataset: "Upcoming Industrial Park",
    date: "Sep 10, 2026",
    status: "processing",
    version: "v0.1.0",
    metrics: {
      totalFeatures: 420,
      matched: 0,
      unresolved: 420,
      confidence: "Pending",
    },
    findings: [
      "Pipeline currently generating spatial indexes.",
      "Initial topology validation passed."
    ]
  }
];

export default function ReportsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">Reports</h1>
          <p className="text-body-md text-neutral mt-2 max-w-2xl">
            Access generated reconciliation, quality, conflict, and harmonization reports for auditing and compliance.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Button variant="primary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">add_chart</span>
            Generate Report
          </Button>
        </div>
      </div>

      {/* Toolbar (Search & Filter) */}
      <div className="bg-surface border border-border p-3 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-neutral">search</span>
          <input 
            type="text" 
            placeholder="Search report name or ID..." 
            className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-body-sm font-medium text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Type: All
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Status: Any
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Dataset: All
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="flex flex-col gap-3 pb-8">
        {mockReports.map((report) => {
          const isExpanded = expandedId === report.id;
          
          let statusStyles = "";
          let statusIcon = "";
          let statusText = "";

          switch (report.status) {
            case "ready":
              statusStyles = "bg-cadastral-emerald-subtle text-cadastral-emerald border-cadastral-emerald-border";
              statusIcon = "check_circle";
              statusText = "Ready";
              break;
            case "review":
              statusStyles = "bg-variance-amber-subtle text-variance-amber border-variance-amber-border";
              statusIcon = "warning";
              statusText = "Review Req";
              break;
            case "failed":
              statusStyles = "bg-conflict-rose-subtle text-conflict-rose border-conflict-rose-border";
              statusIcon = "error";
              statusText = "Failed";
              break;
            case "processing":
              statusStyles = "bg-blueprint-blue text-secondary border-blueprint-border";
              statusIcon = "sync";
              statusText = "Generating";
              break;
          }

          return (
            <div key={report.id} className="bg-surface border border-border rounded-xl shadow-tier-1 hover:shadow-tier-2 transition-shadow overflow-hidden flex flex-col">
              
              {/* Row Header */}
              <div 
                className="p-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleExpand(report.id)}
              >
                
                {/* Identifier & Name */}
                <div className="flex items-center gap-4 xl:w-[40%]">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-low border border-border flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      {report.type === 'Harmonization Summary' ? 'pie_chart' : report.type === 'Quality Report' ? 'analytics' : report.type === 'Conflict Report' ? 'gavel' : 'rule'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-body-sm text-primary">{report.name}</span>
                      <span className="font-mono text-[10px] bg-background border border-border px-1.5 py-0.5 rounded text-neutral">{report.version}</span>
                    </div>
                    <span className="text-[11px] text-neutral font-medium">{report.type} • {report.dataset}</span>
                  </div>
                </div>

                {/* Metrics & Date */}
                <div className="flex items-center gap-6 xl:w-[40%] justify-between xl:justify-start">
                  
                  <div className="hidden sm:flex flex-col w-32 border-r border-border pr-4">
                    <span className="text-[10px] uppercase font-bold text-neutral">Generated On</span>
                    <span className="font-mono text-body-sm text-primary font-medium mt-1">{report.date}</span>
                  </div>

                  <div className="flex flex-col items-center w-20 border-r border-border pr-4">
                    <span className="text-[10px] uppercase font-bold text-neutral">Features</span>
                    <span className="text-body-sm font-mono font-bold text-primary mt-1">{report.metrics.totalFeatures}</span>
                  </div>

                  <div className="flex flex-col items-center w-16 border-r border-border pr-4">
                    <span className="text-[10px] uppercase font-bold text-neutral">Score</span>
                    <span className={`text-body-sm font-mono font-bold mt-1 ${report.metrics.confidence === '100%' || parseFloat(report.metrics.confidence) >= 95 ? 'text-cadastral-emerald' : report.status === 'processing' ? 'text-secondary' : 'text-conflict-rose'}`}>
                      {report.metrics.confidence}
                    </span>
                  </div>

                  <div className="hidden md:flex flex-col items-center w-24">
                    <span className="text-[10px] uppercase font-bold text-neutral">Report ID</span>
                    <span className="text-[11px] font-mono font-medium text-neutral mt-1">{report.id}</span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-4 xl:w-[20%] justify-end">
                  <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border flex items-center gap-1 ${statusStyles}`}>
                    <span className={`material-symbols-outlined text-[14px] ${report.status === 'processing' ? 'animate-spin' : ''}`}>{statusIcon}</span>
                    {statusText}
                  </div>
                  <button className="w-8 h-8 rounded flex items-center justify-center text-neutral hover:bg-surface-container-low transition-colors border border-transparent hover:border-border">
                    <span className="material-symbols-outlined text-[20px] transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="border-t border-border bg-background p-5 flex flex-col lg:flex-row gap-6">
                  
                  {/* Left: Summary Metrics & Findings */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-surface border border-border rounded-lg p-4 shadow-sm flex flex-col">
                        <span className="text-label-spatial-header text-neutral uppercase font-bold mb-1">Total Processed</span>
                        <span className="text-headline-sm font-bold text-primary font-mono">{report.metrics.totalFeatures}</span>
                      </div>
                      <div className="bg-cadastral-emerald-subtle/30 border border-cadastral-emerald-border rounded-lg p-4 shadow-sm flex flex-col">
                        <span className="text-label-spatial-header text-cadastral-emerald uppercase font-bold mb-1">Matched Baseline</span>
                        <span className="text-headline-sm font-bold text-cadastral-emerald font-mono">{report.metrics.matched}</span>
                      </div>
                      <div className="bg-variance-amber-subtle/30 border border-variance-amber-border rounded-lg p-4 shadow-sm flex flex-col">
                        <span className="text-label-spatial-header text-variance-amber uppercase font-bold mb-1">Unresolved Escapements</span>
                        <span className="text-headline-sm font-bold text-variance-amber font-mono">{report.metrics.unresolved}</span>
                      </div>
                    </div>

                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm flex flex-col">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2 mb-3">Executive Summary &amp; Findings</h4>
                      <ul className="flex flex-col gap-2">
                        {report.findings.map((finding, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-body-sm text-primary">
                            <span className="material-symbols-outlined text-[16px] text-neutral shrink-0 mt-0.5">adjust</span>
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="w-full lg:w-72 flex flex-col shrink-0">
                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm h-full flex flex-col">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2 mb-3">Export &amp; Share</h4>
                      
                      <div className="flex flex-col gap-2 flex-1">
                        <button className="w-full bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                          Download PDF Report
                        </button>
                        <button className="w-full bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">table</span>
                          Export CSV Data
                        </button>
                        <button className="w-full bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">mail</span>
                          Email to Stakeholders
                        </button>
                      </div>

                      {report.status === 'review' || report.status === 'failed' ? (
                        <div className="mt-4 pt-4 border-t border-border flex flex-col">
                          <button className="bg-conflict-rose hover:bg-[#BE123C] text-surface font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">rule</span>
                            Audit Discrepancies
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
