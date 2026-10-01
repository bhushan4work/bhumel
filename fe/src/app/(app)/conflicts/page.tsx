"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const mockConflicts = [
  {
    id: "C-9102",
    parcelId: "P-4482",
    type: "Topology Overlap",
    sources: ["Cadastral Baseline", "Municipal GIS"],
    severity: "High",
    evidence: "Area variance of +14.2 m²",
    detected: "2 hours ago",
    status: "open",
    details: {
      description: "Municipal record exceeds cadastral baseline geometry by 14.2 m². Topologically intersecting but non-conforming.",
      cadastralVal: "1,240 m²",
      municipalVal: "1,254 m²",
    }
  },
  {
    id: "C-9103",
    parcelId: "P-1993",
    type: "Attribute Mismatch",
    sources: ["Municipal GIS", "Title Registry"],
    severity: "Medium",
    evidence: "Owner name conflict",
    detected: "5 hours ago",
    status: "review",
    details: {
      description: "Title registry lists 'Ramesh Sharma' while Municipal Tax GIS lists 'R.K. Sharma & Sons'.",
      cadastralVal: "R.K. Sharma & Sons",
      municipalVal: "Ramesh Sharma",
    }
  },
  {
    id: "C-9104",
    parcelId: "P-8821",
    type: "Missing Boundary",
    sources: ["Drone Ortho Vectors"],
    severity: "High",
    evidence: "Feature missing in baseline",
    detected: "1 day ago",
    status: "open",
    details: {
      description: "Drone footprint detects a permanent concrete structure (45 m²) not present in any official registry.",
      cadastralVal: "No Record",
      municipalVal: "Structure Detected",
    }
  },
  {
    id: "C-9055",
    parcelId: "P-2210",
    type: "Sliver Polygon",
    sources: ["Cadastral Baseline", "Municipal GIS"],
    severity: "Low",
    evidence: "Δ 0.4 m² sliver",
    detected: "2 days ago",
    status: "resolved",
    details: {
      description: "Micro-sliver detected during topology check. Automatically merged into baseline per Ruleset v4.",
      cadastralVal: "Resolved",
      municipalVal: "Resolved",
    }
  }
];

export default function ConflictsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">Conflicts</h1>
          <p className="text-body-md text-neutral mt-2 max-w-2xl">
            Review spatial and data discrepancies requiring administrative attention, field checks, or distinct classification.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Button variant="secondary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
            Batch Resolve
          </Button>
          <Button variant="primary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">explore</span>
            Generate Field Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface border border-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-neutral uppercase font-bold tracking-wider mb-1">Total Conflicts</span>
          <span className="text-headline-md font-bold text-primary mt-1">28</span>
        </div>
        <div className="bg-conflict-rose-subtle border border-conflict-rose-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-conflict-rose uppercase font-bold tracking-wider mb-1">High Priority</span>
          <span className="text-headline-md font-bold text-conflict-rose mt-1">12</span>
        </div>
        <div className="bg-variance-amber-subtle border border-variance-amber-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-variance-amber uppercase font-bold tracking-wider mb-1">Needs Review</span>
          <span className="text-headline-md font-bold text-variance-amber mt-1">9</span>
        </div>
        <div className="bg-cadastral-emerald-subtle border border-cadastral-emerald-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-cadastral-emerald uppercase font-bold tracking-wider mb-1">Resolved</span>
          <span className="text-headline-md font-bold text-cadastral-emerald mt-1">154</span>
        </div>
      </div>

      {/* Toolbar (Search & Filter) */}
      <div className="bg-surface border border-border p-3 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-neutral">search</span>
          <input 
            type="text" 
            placeholder="Search conflict ID or parcel ID..." 
            className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-body-sm font-medium text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Severity: High
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Type: All
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            Status: Open
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>
        </div>
      </div>

      {/* Conflicts List */}
      <div className="flex flex-col gap-3 pb-8">
        {mockConflicts.map((conflict) => {
          const isExpanded = expandedId === conflict.id;
          
          let severityStyles = "";
          switch (conflict.severity) {
            case "High":
              severityStyles = "bg-conflict-rose-subtle text-conflict-rose border-conflict-rose-border";
              break;
            case "Medium":
              severityStyles = "bg-variance-amber-subtle text-variance-amber border-variance-amber-border";
              break;
            case "Low":
              severityStyles = "bg-blueprint-blue text-secondary border-blueprint-border";
              break;
          }

          let statusStyles = "";
          let statusIcon = "";
          switch (conflict.status) {
            case "open":
              statusStyles = "bg-conflict-rose-subtle text-conflict-rose border-conflict-rose-border";
              statusIcon = "error";
              break;
            case "review":
              statusStyles = "bg-variance-amber-subtle text-variance-amber border-variance-amber-border";
              statusIcon = "pending_actions";
              break;
            case "resolved":
              statusStyles = "bg-cadastral-emerald-subtle text-cadastral-emerald border-cadastral-emerald-border";
              statusIcon = "check_circle";
              break;
          }

          return (
            <div key={conflict.id} className="bg-surface border border-border rounded-xl shadow-tier-1 hover:shadow-tier-2 transition-shadow overflow-hidden flex flex-col">
              {/* Row Header / Summary */}
              <div 
                className="p-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleExpand(conflict.id)}
              >
                
                {/* Identifier & Type */}
                <div className="flex items-center gap-6 xl:w-2/5">
                  <div className="flex flex-col gap-1 w-20 shrink-0">
                    <span className="font-mono text-label-data-mono text-neutral">ID</span>
                    <span className="font-mono font-bold text-body-sm text-primary">{conflict.id}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-neutral">Parcel Ref</span>
                    <span className="font-bold text-body-sm text-primary">{conflict.parcelId}</span>
                  </div>

                  <div className="hidden sm:flex flex-col gap-1 border-l border-border pl-6">
                    <span className="text-[10px] uppercase font-bold text-neutral">Conflict Type</span>
                    <span className="font-medium text-body-sm text-primary">{conflict.type}</span>
                  </div>
                </div>

                {/* Metrics & Evidence */}
                <div className="flex items-center gap-6 xl:w-2/5 justify-between xl:justify-start">
                  <div className="flex flex-col items-start w-24">
                    <span className="text-[10px] uppercase font-bold text-neutral mb-1">Severity</span>
                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${severityStyles}`}>
                      {conflict.severity}
                    </div>
                  </div>
                  
                  <div className="hidden md:flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-bold text-neutral">Key Evidence</span>
                    <span className="font-mono text-[11px] text-primary mt-1">{conflict.evidence}</span>
                  </div>

                  <div className="hidden lg:flex flex-col items-end w-32 text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral">Detected</span>
                    <span className="text-[11px] text-neutral font-medium mt-1">{conflict.detected}</span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-4 xl:w-1/5 justify-end">
                  <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border flex items-center gap-1 ${statusStyles}`}>
                    <span className="material-symbols-outlined text-[14px]">{statusIcon}</span>
                    {conflict.status}
                  </div>
                  <button className="w-8 h-8 rounded flex items-center justify-center text-neutral hover:bg-surface-container-low transition-colors border border-border">
                    <span className="material-symbols-outlined text-[20px] transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Expanded Detail Area */}
              {isExpanded && (
                <div className="border-t border-border bg-background p-4 flex flex-col lg:flex-row gap-6">
                  
                  {/* Left: Context & Evidence */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold mb-2">Context &amp; Reasoning</h4>
                      <p className="text-body-sm text-primary leading-relaxed">
                        {conflict.details.description}
                      </p>
                    </div>

                    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm flex flex-col">
                      <h4 className="text-label-spatial-header text-neutral uppercase font-bold mb-3">Source Comparison</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1 border-r border-border pr-4">
                          <span className="text-[10px] text-cadastral-emerald font-bold uppercase">{conflict.sources[0]}</span>
                          <span className="font-mono text-body-sm text-primary font-bold">{conflict.details.cadastralVal}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-secondary font-bold uppercase">{conflict.sources[1] || 'Secondary Source'}</span>
                          <span className="font-mono text-body-sm text-primary font-bold">{conflict.details.municipalVal}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="w-full lg:w-80 flex flex-col gap-3 shrink-0">
                    <h4 className="text-label-spatial-header text-neutral uppercase font-bold">Resolution Actions</h4>
                    
                    {conflict.status !== 'resolved' ? (
                      <>
                        <button className="w-full bg-cadastral-emerald hover:bg-[#047857] text-surface font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                          Resolve (Merge Baseline)
                        </button>
                        
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm">
                            Mark Distinct
                          </button>
                          <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm">
                            Review Later
                          </button>
                        </div>
                        
                        <div className="w-full h-px bg-border my-1"></div>
                        
                        <button className="bg-variance-amber-subtle text-variance-amber border border-variance-amber-border hover:bg-[#FDE68A] font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">explore</span>
                          Request Field Check
                        </button>
                      </>
                    ) : (
                      <div className="bg-surface border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 h-full">
                        <span className="material-symbols-outlined text-[32px] text-cadastral-emerald">check_circle</span>
                        <span className="text-body-sm font-bold text-primary">Conflict Resolved</span>
                        <span className="text-[11px] text-neutral">Action taken by Auto-Engine v4</span>
                      </div>
                    )}
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
