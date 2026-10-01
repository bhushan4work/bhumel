"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const mockHarmonizedData = [
  {
    id: "HD-101",
    name: "Unified Ward 14 Cadastre",
    coverage: ["State Cadastre", "Municipal GIS"],
    count: "4,120",
    matchStatus: "99.2%",
    conflictStatus: 0,
    version: "v4.8.2",
    lastUpdated: "2 hours ago",
    status: "published",
    history: [
      { version: "v4.8.2", date: "Today, 08:30 AM", author: "Auto-Engine", note: "Merged 154 auto-resolved slivers." },
      { version: "v4.8.1", date: "Yesterday, 14:15 PM", author: "Officer Sharma", note: "Manual review of P-4482." },
    ]
  },
  {
    id: "HD-102",
    name: "Sector 7 Commercial Zone",
    coverage: ["Municipal GIS", "Drone Ortho"],
    count: "845",
    matchStatus: "95.5%",
    conflictStatus: 12,
    version: "v2.1.0",
    lastUpdated: "5 hours ago",
    status: "review",
    history: [
      { version: "v2.1.0", date: "Today, 05:00 AM", author: "Topology Job", note: "Detected 12 unresolved building overlaps." },
    ]
  },
  {
    id: "HD-103",
    name: "Rural Fringe Boundaries",
    coverage: ["State Cadastre"],
    count: "12,400",
    matchStatus: "100%",
    conflictStatus: 0,
    version: "v1.0.5",
    lastUpdated: "3 days ago",
    status: "published",
    history: [
      { version: "v1.0.5", date: "Oct 12, 10:00 AM", author: "System", note: "Initial import validated." },
    ]
  },
  {
    id: "HD-104",
    name: "Phase II Residential Setup",
    coverage: ["Drone Ortho", "Title Registry"],
    count: "3,210",
    matchStatus: "82.4%",
    conflictStatus: 28,
    version: "v0.9.1",
    lastUpdated: "1 week ago",
    status: "conflict",
    history: [
      { version: "v0.9.1", date: "Sep 24, 16:45 PM", author: "System", note: "Critical topology failure on block C." },
      { version: "v0.9.0", date: "Sep 24, 16:00 PM", author: "Officer Singh", note: "Draft creation." },
    ]
  },
  {
    id: "HD-105",
    name: "Upcoming Industrial Park",
    coverage: ["State Cadastre"],
    count: "420",
    matchStatus: "Pending",
    conflictStatus: 0,
    version: "v0.1.0",
    lastUpdated: "10 mins ago",
    status: "draft",
    history: [
      { version: "v0.1.0", date: "Today, 10:20 AM", author: "Officer Sharma", note: "Draft topology creation." },
    ]
  }
];

export default function HarmonizedPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">Harmonized Data</h1>
          <p className="text-body-md text-neutral mt-2 max-w-2xl">
            Access finalized and approved technical datasets produced after spatial conflict reconciliation.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Button variant="secondary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">publish</span>
            Push to Gateway
          </Button>
          <Button variant="primary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Harmonized Data
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface border border-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-neutral uppercase font-bold tracking-wider mb-1">Harmonized Datasets</span>
          <span className="text-headline-md font-bold text-primary mt-1">12</span>
        </div>
        <div className="bg-cadastral-emerald-subtle border border-cadastral-emerald-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-cadastral-emerald uppercase font-bold tracking-wider mb-1">Matched Features</span>
          <span className="text-headline-md font-bold text-cadastral-emerald mt-1">21,005</span>
        </div>
        <div className="bg-variance-amber-subtle border border-variance-amber-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-variance-amber uppercase font-bold tracking-wider mb-1">Unresolved Cases</span>
          <span className="text-headline-md font-bold text-variance-amber mt-1">45</span>
        </div>
        <div className="bg-conflict-rose-subtle border border-conflict-rose-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-conflict-rose uppercase font-bold tracking-wider mb-1">Conflicts</span>
          <span className="text-headline-md font-bold text-conflict-rose mt-1">28</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-surface border border-border p-3 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-neutral">search</span>
          <input 
            type="text" 
            placeholder="Search layer name or version..." 
            className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-body-sm font-medium text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Status: All
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Coverage: Any
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
        </div>
      </div>

      {/* Datasets List */}
      <div className="flex flex-col gap-3 pb-8">
        {mockHarmonizedData.map((data) => {
          const isExpanded = expandedId === data.id;
          
          let statusStyles = "";
          let statusIcon = "";
          let statusText = "";

          switch (data.status) {
            case "published":
              statusStyles = "bg-cadastral-emerald-subtle text-cadastral-emerald border-cadastral-emerald-border";
              statusIcon = "verified";
              statusText = "Published";
              break;
            case "review":
              statusStyles = "bg-variance-amber-subtle text-variance-amber border-variance-amber-border";
              statusIcon = "warning";
              statusText = "Review Req";
              break;
            case "conflict":
              statusStyles = "bg-conflict-rose-subtle text-conflict-rose border-conflict-rose-border";
              statusIcon = "error";
              statusText = "Conflict";
              break;
            case "draft":
              statusStyles = "bg-blueprint-blue text-secondary border-blueprint-border";
              statusIcon = "edit_document";
              statusText = "Draft";
              break;
          }

          return (
            <div key={data.id} className="bg-surface border border-border rounded-xl shadow-tier-1 hover:shadow-tier-2 transition-shadow overflow-hidden flex flex-col">
              
              {/* Row Header */}
              <div 
                className="p-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleExpand(data.id)}
              >
                
                {/* Identifier & Name */}
                <div className="flex items-center gap-6 xl:w-[35%]">
                  <div className="flex flex-col gap-1 w-20 shrink-0">
                    <span className="font-mono text-label-data-mono text-neutral">ID</span>
                    <span className="font-mono font-bold text-body-sm text-primary">{data.id}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-neutral">Layer Name</span>
                    <span className="font-bold text-body-sm text-primary">{data.name}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-6 xl:w-[45%] justify-between xl:justify-start">
                  
                  <div className="hidden sm:flex flex-col w-32">
                    <span className="text-[10px] uppercase font-bold text-neutral">Coverage</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {data.coverage.map((src, i) => (
                        <span key={i} className="text-[9px] font-mono bg-background border border-border px-1 rounded text-neutral">{src}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center w-16">
                    <span className="text-[10px] uppercase font-bold text-neutral">Features</span>
                    <span className="text-body-sm font-mono font-bold text-primary mt-1">{data.count}</span>
                  </div>

                  <div className="flex flex-col items-center w-16">
                    <span className="text-[10px] uppercase font-bold text-neutral">Matched</span>
                    <span className={`text-body-sm font-mono font-bold mt-1 ${data.matchStatus === '100%' || data.matchStatus === '99.2%' ? 'text-cadastral-emerald' : data.status === 'draft' ? 'text-secondary' : 'text-variance-amber'}`}>{data.matchStatus}</span>
                  </div>

                  <div className="flex flex-col items-center w-20">
                    <span className="text-[10px] uppercase font-bold text-neutral">Conflicts</span>
                    <span className={`text-body-sm font-mono font-bold mt-1 ${data.conflictStatus > 0 ? 'text-conflict-rose' : 'text-cadastral-emerald'}`}>{data.conflictStatus}</span>
                  </div>
                  
                  <div className="hidden md:flex flex-col items-center w-16">
                    <span className="text-[10px] uppercase font-bold text-neutral">Version</span>
                    <span className="text-body-sm font-mono font-bold text-primary mt-1">{data.version}</span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-4 xl:w-[20%] justify-end">
                  <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border flex items-center gap-1 ${statusStyles}`}>
                    <span className="material-symbols-outlined text-[14px]">{statusIcon}</span>
                    {statusText}
                  </div>
                  <button className="w-8 h-8 rounded flex items-center justify-center text-neutral hover:bg-surface-container-low transition-colors border border-border" onClick={(e) => e.stopPropagation()}>
                    <span className="material-symbols-outlined text-[18px]">download</span>
                  </button>
                  <button className="w-8 h-8 rounded flex items-center justify-center text-neutral hover:bg-surface-container-low transition-colors border border-transparent hover:border-border">
                    <span className="material-symbols-outlined text-[20px] transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Expanded Area: Version History & Technical Details */}
              {isExpanded && (
                <div className="border-t border-border bg-background p-5 flex flex-col lg:flex-row gap-6">
                  
                  {/* Left: Summary Data */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm flex flex-col gap-3">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2">Technical Metadata</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral uppercase font-bold">CRS Encoding</span>
                          <span className="font-mono text-body-sm text-primary font-medium mt-1">EPSG:4326</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral uppercase font-bold">Geometry Type</span>
                          <span className="font-mono text-body-sm text-primary font-medium mt-1">MultiPolygon</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral uppercase font-bold">Last Updated</span>
                          <span className="font-mono text-body-sm text-primary font-medium mt-1">{data.lastUpdated}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral uppercase font-bold">Filesize (Est)</span>
                          <span className="font-mono text-body-sm text-primary font-medium mt-1">4.2 MB</span>
                        </div>
                        <div className="flex flex-col col-span-2">
                          <span className="text-[10px] text-neutral uppercase font-bold">Data Integrity Hash</span>
                          <span className="font-mono text-[11px] text-neutral mt-1">0x8a9b2c...df4e1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Version History */}
                  <div className="w-full lg:w-[400px] flex flex-col shrink-0">
                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm h-full">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2 mb-3">Version History</h4>
                      <div className="flex flex-col gap-4 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1.5 top-2 bottom-2 w-px bg-border"></div>
                        
                        {data.history.map((hist, idx) => (
                          <div key={idx} className="flex gap-3 relative z-10">
                            <div className="w-3 h-3 mt-1 rounded-full bg-surface border-2 border-primary shrink-0"></div>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-body-sm text-primary">{hist.version}</span>
                                <span className="font-mono text-[10px] text-neutral">{hist.date}</span>
                              </div>
                              <span className="text-[11px] font-bold text-secondary mt-0.5">{hist.author}</span>
                              <p className="text-body-sm text-neutral mt-1">{hist.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border flex justify-end">
                        <button className="text-body-sm text-secondary font-bold hover:underline">View Full Audit Log</button>
                      </div>
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
