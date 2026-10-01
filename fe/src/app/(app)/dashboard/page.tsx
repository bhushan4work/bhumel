import React from "react";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">BhuDrishti Overview</h1>
          <p className="text-body-md text-neutral mt-2 max-w-2xl">
            Monitor datasets, spatial coverage, harmonization progress, and officer review priorities.
          </p>
        </div>
        <Button variant="primary" className="shrink-0 flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">layers</span>
          Open Harmonization Workspace
        </Button>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-surface border border-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-neutral uppercase font-bold tracking-wider mb-1">Data Sources</span>
          <span className="text-headline-md font-bold text-primary mt-1">3</span>
          <span className="text-[11px] text-cadastral-emerald font-mono font-semibold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            All Synced
          </span>
        </div>
        <div className="bg-surface border border-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-neutral uppercase font-bold tracking-wider mb-1">Feature Pairs</span>
          <span className="text-headline-md font-bold text-primary mt-1">1,248</span>
          <span className="text-[11px] text-neutral font-mono font-medium mt-2">
            Overlapping bounds
          </span>
        </div>
        <div className="bg-surface border border-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-neutral uppercase font-bold tracking-wider mb-1">Auto-Matched</span>
          <span className="text-headline-md font-bold text-cadastral-emerald mt-1">1,192</span>
          <span className="text-[11px] text-cadastral-emerald font-mono font-semibold mt-2">
            95.5% Confidence
          </span>
        </div>
        <div className="bg-variance-amber-subtle border border-variance-amber-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-variance-amber uppercase font-bold tracking-wider mb-1">Needs Review</span>
          <span className="text-headline-md font-bold text-variance-amber mt-1">45</span>
          <span className="text-[11px] text-variance-amber font-mono font-semibold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Area mismatch
          </span>
        </div>
        <div className="bg-conflict-rose-subtle border border-conflict-rose-border p-4 rounded-lg shadow-sm flex flex-col">
          <span className="text-label-spatial-header text-conflict-rose uppercase font-bold tracking-wider mb-1">Conflicts</span>
          <span className="text-headline-md font-bold text-conflict-rose mt-1">11</span>
          <span className="text-[11px] text-conflict-rose font-mono font-semibold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">error</span>
            Topology failure
          </span>
        </div>
      </div>

      {/* Coverage Map Panel */}
      <div className="bg-surface border border-border rounded-xl shadow-tier-1 overflow-hidden flex flex-col h-[480px]">
        <div className="px-5 py-3 border-b border-border bg-background flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-semibold text-body-md text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-neutral">public</span>
            Spatial Coverage Map
          </h2>
          {/* Legend */}
          <div className="flex items-center gap-4 text-label-badge font-mono text-neutral">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm border-[1.5px] border-cadastral-emerald bg-cadastral-emerald/10"></span>
              Cadastral Survey
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm border-[1.5px] border-secondary bg-secondary/10"></span>
              Municipal GIS
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm border-[1.5px] border-conflict-rose bg-conflict-rose/20"></span>
              Conflicts
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-variance-amber/40 shadow-[0_0_0_2px_rgba(217,119,6,0.8)]"></span>
              Hotspots
            </div>
          </div>
        </div>
        
        {/* Map Visualization Area */}
        <div className="flex-1 relative bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full text-border opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dashboard-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                <circle cx="0" cy="0" r="1" fill="currentColor"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dashboard-grid)"></rect>
          </svg>

          {/* Geometric Vectors representing map data */}
          <svg className="relative w-full max-w-4xl h-full z-10" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base block 1 */}
            <polygon points="150,80 320,60 340,220 180,250" fill="#059669" fillOpacity="0.08" stroke="#059669" strokeWidth="1.5"></polygon>
            <polygon points="140,70 330,55 350,230 170,240" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4"></polygon>
            
            {/* Base block 2 (Matched) */}
            <polygon points="360,60 520,45 540,190 380,210" fill="#059669" fillOpacity="0.15" stroke="#059669" strokeWidth="2"></polygon>
            
            {/* Base block 3 (Conflict) */}
            <polygon points="560,40 720,25 730,160 580,180" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1.5"></polygon>
            <polygon points="550,55 690,15 700,180 540,150" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4"></polygon>
            {/* Conflict area fill */}
            <polygon points="560,40 690,15 700,160 580,180" fill="#E11D48" fillOpacity="0.25" stroke="#E11D48" strokeWidth="1.5"></polygon>

            {/* Hotspots */}
            <circle cx="250" cy="150" r="8" fill="#D97706" fillOpacity="0.5" stroke="#D97706" strokeWidth="2"></circle>
            <circle cx="640" cy="100" r="12" fill="#E11D48" fillOpacity="0.4" stroke="#E11D48" strokeWidth="2"></circle>

            {/* Annotations */}
            <foreignObject x="390" y="110" width="100" height="40">
              <div className="bg-surface/90 border border-cadastral-emerald-border px-2 py-1 rounded text-[10px] font-mono text-cadastral-emerald shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span>
                MATCHED
              </div>
            </foreignObject>
            
            <foreignObject x="180" y="270" width="130" height="40">
              <div className="bg-surface/90 border border-variance-amber-border px-2 py-1 rounded text-[10px] font-mono text-variance-amber shadow-sm flex flex-col">
                <span className="font-bold">SLIVER DETECTED</span>
                <span>Δ 14.2 m²</span>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* Bottom Section: Priority Discrepancy Review & Active Data Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        {/* Priority Discrepancy Review */}
        <div className="bg-surface border border-border rounded-xl shadow-tier-1 flex flex-col">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-body-md text-primary">Priority Discrepancy Review</h3>
            <button className="text-body-sm text-secondary font-medium hover:underline">View All</button>
          </div>
          <div className="flex flex-col p-2">
            {[
              { id: "P-4482", type: "Topology Overlap", area: "128 m²", severity: "High", color: "conflict-rose" },
              { id: "P-1993", type: "Area Mismatch", area: "45 m²", severity: "Medium", color: "variance-amber" },
              { id: "P-8821", type: "Missing Boundary", area: "N/A", severity: "Medium", color: "variance-amber" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-background rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md bg-${item.color}-subtle text-${item.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[18px]">
                      {item.severity === "High" ? "error" : "warning"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-label-data-mono font-bold text-primary">{item.id}</span>
                    <span className="text-[12px] text-neutral">{item.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-neutral">{item.area}</span>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-${item.color}-subtle text-${item.color} border border-${item.color}-border`}>
                    {item.severity}
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-neutral opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Data Sources */}
        <div className="bg-surface border border-border rounded-xl shadow-tier-1 flex flex-col">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-body-md text-primary">Active Data Sources</h3>
            <button className="text-body-sm text-secondary font-medium hover:underline">Manage</button>
          </div>
          <div className="flex flex-col p-2">
            {[
              { name: "State Revenue Cadastre", format: "SHP", date: "Updated 2h ago", status: "Synced", color: "cadastral-emerald" },
              { name: "Municipal Tax GIS", format: "GeoJSON", date: "Updated 5h ago", status: "Synced", color: "cadastral-emerald" },
              { name: "Drone Orthomosaic Vectors", format: "KML", date: "Updated 1d ago", status: "Processing", color: "blueprint-blue" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-background rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-surface-container-low border border-border flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-body-sm text-primary">{item.name}</span>
                    <span className="text-[12px] text-neutral">Format: {item.format} • {item.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${item.status === 'Synced' ? 'bg-cadastral-emerald-subtle text-cadastral-emerald border border-cadastral-emerald-border' : 'bg-blueprint-blue text-secondary border border-blueprint-border'}`}>
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
