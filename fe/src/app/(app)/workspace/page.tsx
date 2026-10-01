import React from "react";
import { Button } from "@/components/ui/Button";

export default function WorkspacePage() {
  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6 h-full min-h-[calc(100vh-8rem)]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">Harmonization Workspace</h1>
          <p className="text-body-md text-neutral mt-1 max-w-2xl">
            Review and reconcile multi-source spatial geometries, resolve boundary conflicts, and certify canonical records.
          </p>
        </div>
        <div className="flex items-center gap-4 text-label-badge font-mono text-neutral bg-surface border border-border px-4 py-2 rounded-lg shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase">Unresolved</span>
            <span className="text-body-md font-bold text-conflict-rose">12</span>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase">Processing</span>
            <span className="text-body-md font-bold text-secondary">4</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[600px]">
        {/* Left: Map Area */}
        <div className="flex-1 bg-surface border border-border rounded-xl shadow-tier-1 relative overflow-hidden flex flex-col">
          {/* Floating Layer Control */}
          <div className="absolute top-4 left-4 z-20 bg-surface/95 backdrop-blur border border-border rounded-lg shadow-sm p-3 w-56 flex flex-col gap-2">
            <div className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2 mb-1">Active Layers</div>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-cadastral-emerald w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-cadastral-emerald bg-cadastral-emerald/10"></div>
              <span className="text-body-sm font-medium text-primary group-hover:text-cadastral-emerald transition-colors">Cadastral Baseline</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-secondary w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-secondary bg-secondary/10"></div>
              <span className="text-body-sm font-medium text-primary group-hover:text-secondary transition-colors">Municipal GIS</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-variance-amber w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-variance-amber bg-variance-amber/20"></div>
              <span className="text-body-sm font-medium text-primary group-hover:text-variance-amber transition-colors">Hotspots / Deltas</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="accent-blueprint-blue w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-blueprint-border bg-blueprint-blue/50"></div>
              <span className="text-body-sm font-medium text-neutral group-hover:text-primary transition-colors">Drone Ortho Vectors</span>
            </label>
          </div>

          {/* Floating Action Tools */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors mt-2">
              <span className="material-symbols-outlined text-[18px]">my_location</span>
            </button>
          </div>

          {/* Map Grid Background */}
          <div className="absolute inset-0 bg-[#F8FAFC]">
            <svg className="w-full h-full text-border opacity-70 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="workspace-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                  <circle cx="0" cy="0" r="1.5" fill="currentColor"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#workspace-grid)"></rect>
            </svg>
          </div>

          {/* Vector Geometry (Focused on a conflict area) */}
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cadastral Polygon (Legal Baseline) */}
            <polygon points="200,150 550,120 600,450 250,500" fill="#059669" fillOpacity="0.08" stroke="#059669" strokeWidth="2.5"></polygon>
            
            {/* Municipal GIS Polygon (Slightly Divergent) */}
            <polygon points="180,140 540,90 620,440 230,480" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4"></polygon>

            {/* Top Hotspot (Area of mismatch) */}
            <polygon points="200,150 180,140 540,90 550,120" fill="#D97706" fillOpacity="0.3" stroke="#D97706" strokeWidth="1.5"></polygon>
            
            {/* Bottom Hotspot (Area of mismatch) */}
            <polygon points="600,450 620,440 230,480 250,500" fill="#E11D48" fillOpacity="0.15" stroke="#E11D48" strokeWidth="1.5"></polygon>

            {/* Vertices/Nodes for the active selection */}
            <circle cx="200" cy="150" r="5" fill="#059669" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="550" cy="120" r="5" fill="#059669" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="600" cy="450" r="5" fill="#059669" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="250" cy="500" r="5" fill="#059669" stroke="#fff" strokeWidth="1.5"></circle>
            
            <circle cx="180" cy="140" r="5" fill="#2563EB" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="540" cy="90" r="5" fill="#2563EB" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="620" cy="440" r="5" fill="#2563EB" stroke="#fff" strokeWidth="1.5"></circle>
            <circle cx="230" cy="480" r="5" fill="#2563EB" stroke="#fff" strokeWidth="1.5"></circle>

            {/* UI Markers/Callouts embedded in SVG */}
            <foreignObject x="350" y="80" width="180" height="50">
              <div className="bg-variance-amber-subtle border border-variance-amber-border rounded shadow-sm p-1.5 flex flex-col font-mono text-[10px]">
                <span className="text-variance-amber font-bold">Δ UPPER SLIVER</span>
                <span className="text-primary">+14.2 m² Variance</span>
              </div>
            </foreignObject>

            <foreignObject x="400" y="470" width="180" height="50">
              <div className="bg-conflict-rose-subtle border border-conflict-rose-border rounded shadow-sm p-1.5 flex flex-col font-mono text-[10px]">
                <span className="text-conflict-rose font-bold">Δ LOWER SLIVER</span>
                <span className="text-primary">-22.8 m² Variance</span>
              </div>
            </foreignObject>
            
            {/* Centroid / Selection Target */}
            <circle cx="400" cy="280" r="4" fill="#0F172A"></circle>
            <line x1="400" y1="280" x2="400" y2="295" stroke="#0F172A" strokeWidth="1.5"></line>
            <foreignObject x="350" y="295" width="100" height="30">
              <div className="bg-primary text-surface rounded shadow-sm px-2 py-1 font-mono text-[11px] text-center font-bold">
                P-4482
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Right: Inspection Panel */}
        <div className="w-full lg:w-[400px] flex flex-col shrink-0 gap-4">
          
          {/* Main Entity Card */}
          <div className="bg-surface border border-border rounded-xl shadow-tier-1 flex flex-col">
            <div className="p-5 border-b border-border bg-background/50 rounded-t-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[12px] bg-primary text-surface px-2 py-0.5 rounded font-bold">KHASRA-P-4482</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-variance-amber-subtle text-variance-amber border border-variance-amber-border">
                  Conflict Detected
                </span>
              </div>
              <h2 className="text-headline-sm font-bold text-primary tracking-tight">Plot 88-A, Phase II</h2>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral uppercase font-bold">Match Confidence</span>
                  <span className="text-body-md font-bold text-variance-amber font-mono">82.4%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral uppercase font-bold">IoU Overlay</span>
                  <span className="text-body-md font-bold text-variance-amber font-mono">88.1%</span>
                </div>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-5">
              {/* Data Sources Context */}
              <div className="flex flex-col gap-3">
                <h3 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-1">Source Evidence</h3>
                
                <div className="flex items-start gap-3 bg-cadastral-emerald-subtle/30 p-2.5 rounded border border-cadastral-emerald-border/50">
                  <span className="material-symbols-outlined text-cadastral-emerald text-[18px] mt-0.5">verified</span>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-body-sm font-bold text-primary">State Cadastre</span>
                      <span className="font-mono text-[11px] text-neutral">4,120 m²</span>
                    </div>
                    <span className="text-[11px] text-neutral">Weight: 0.95 (Legal Baseline)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-blueprint-blue/30 p-2.5 rounded border border-blueprint-border/50">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">location_city</span>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-body-sm font-bold text-primary">Municipal GIS</span>
                      <span className="font-mono text-[11px] text-neutral">4,157 m²</span>
                    </div>
                    <span className="text-[11px] text-neutral">Weight: 0.85 (Tax Assessed)</span>
                  </div>
                </div>
              </div>

              {/* Detected Conflicts */}
              <div className="flex flex-col gap-2">
                <h3 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-1">Detected Discrepancies</h3>
                <ul className="list-none flex flex-col gap-2 mt-1">
                  <li className="flex items-start gap-2 text-body-sm text-primary">
                    <span className="material-symbols-outlined text-conflict-rose text-[16px] mt-0.5 shrink-0">emergency</span>
                    <span><strong>Area Delta:</strong> Municipal record exceeds cadastral baseline by 37 m² (Δ 0.9%).</span>
                  </li>
                  <li className="flex items-start gap-2 text-body-sm text-primary">
                    <span className="material-symbols-outlined text-variance-amber text-[16px] mt-0.5 shrink-0">timeline</span>
                    <span><strong>Topology Shift:</strong> Southern boundary vertex shifted 1.2m SE.</span>
                  </li>
                </ul>
              </div>

              {/* Metadata / Timestamps */}
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral bg-background p-2 rounded border border-border">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">history</span>
                  Updated 2h ago
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">person</span>
                  Auto-Engine v4
                </div>
              </div>
            </div>
          </div>

          {/* Action / Review Buttons */}
          <div className="bg-surface border border-border rounded-xl shadow-tier-1 p-5 flex flex-col gap-3">
            <h3 className="text-label-spatial-header text-neutral uppercase font-bold mb-1">Reconciliation Actions</h3>
            
            <button className="w-full bg-cadastral-emerald hover:bg-[#047857] text-surface font-semibold text-body-sm py-2.5 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Accept Baseline Geometry
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">call_split</span>
                Use Alternative
              </button>
              <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">content_cut</span>
                Mark Distinct
              </button>
            </div>

            <div className="w-full h-px bg-border my-1"></div>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-variance-amber-subtle text-variance-amber border border-variance-amber-border hover:bg-[#FDE68A] font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">explore</span>
                Field Check
              </button>
              <button className="bg-conflict-rose-subtle text-conflict-rose border border-conflict-rose-border hover:bg-[#FECDD3] font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">flag</span>
                Escalate
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
