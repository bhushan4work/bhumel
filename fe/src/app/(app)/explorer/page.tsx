"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ExplorerPage() {
  const [selectedFeature, setSelectedFeature] = useState<boolean>(true);

  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6 h-full min-h-[calc(100vh-8rem)]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">GIS Explorer</h1>
          <p className="text-body-md text-neutral mt-1 max-w-2xl">
            Explore harmonized spatial data, interrogate source layers, and review cross-layer alignment.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="secondary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">share</span>
            Share View
          </Button>
          <Button variant="primary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Selection
          </Button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[650px] relative">
        
        {/* Map Container */}
        <div className="flex-1 bg-surface border border-border rounded-xl shadow-tier-1 relative overflow-hidden flex flex-col">
          
          {/* Top Left: Floating Layer Control */}
          <div className="absolute top-4 left-4 z-20 bg-surface/95 backdrop-blur border border-border rounded-lg shadow-sm p-3 w-56 flex flex-col gap-2">
            <div className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-2 mb-1 flex items-center justify-between">
              Active Layers
              <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary transition-colors">filter_list</span>
            </div>
            
            {/* Layer Toggles */}
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-primary bg-primary/20"></div>
              <span className="text-body-sm font-medium text-primary transition-colors">Harmonized Data (Final)</span>
            </label>
            <div className="w-full h-px bg-border my-1"></div>
            
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-cadastral-emerald w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-cadastral-emerald bg-cadastral-emerald/10"></div>
              <span className="text-body-sm font-medium text-primary transition-colors">Cadastral Survey</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-secondary w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-secondary bg-secondary/10"></div>
              <span className="text-body-sm font-medium text-primary transition-colors">Municipal GIS</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="accent-blueprint-blue w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-blueprint-border bg-blueprint-blue/30"></div>
              <span className="text-body-sm font-medium text-neutral transition-colors">Buildings (Drone)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" defaultChecked className="accent-conflict-rose w-4 h-4" />
              <div className="w-3 h-3 rounded-sm border-[1.5px] border-conflict-rose bg-conflict-rose/30"></div>
              <span className="text-body-sm font-medium text-primary transition-colors">Conflicts &amp; Hotspots</span>
            </label>
          </div>

          {/* Bottom Left: Map Legend & Context */}
          <div className="absolute bottom-4 left-4 z-20 bg-surface/95 backdrop-blur border border-border rounded-lg shadow-sm p-3 w-64 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-label-spatial-header text-neutral uppercase font-bold">Extent</span>
              <span className="font-mono text-[10px] text-primary bg-background border border-border px-1 rounded">1:2,500</span>
            </div>
            <div className="flex flex-col gap-1 text-[11px] font-mono text-neutral">
              <div className="flex justify-between">
                <span>Lat:</span>
                <span className="text-primary font-bold">28.6139° N</span>
              </div>
              <div className="flex justify-between">
                <span>Lng:</span>
                <span className="text-primary font-bold">77.2090° E</span>
              </div>
            </div>
          </div>

          {/* Top Right: Tools */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors group" title="Zoom In">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors group" title="Zoom Out">
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors group mt-2" title="Fit to Extent">
              <span className="material-symbols-outlined text-[18px]">fit_screen</span>
            </button>
            <button className="w-8 h-8 bg-surface border border-border rounded-md flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-low transition-colors group" title="Measure Tool">
              <span className="material-symbols-outlined text-[18px]">straighten</span>
            </button>
          </div>

          {/* Interactive Map Visuals (SVG Grid & Vectors) */}
          <div className="absolute inset-0 bg-[#F8FAFC]">
            <svg className="w-full h-full text-border opacity-70" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="explorer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"></path>
                  <circle cx="0" cy="0" r="1.5" fill="currentColor"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#explorer-grid)"></rect>
            </svg>
          </div>

          {/* SVG Map Data */}
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Plot 1 (Matched/Harmonized) */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <polygon points="100,100 350,80 380,300 120,320" fill="#0F172A" fillOpacity="0.04" stroke="#0F172A" strokeWidth="2"></polygon>
              <polygon points="105,105 345,85 375,295 125,315" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1" strokeDasharray="4 2"></polygon>
              <circle cx="240" cy="200" r="4" fill="#059669"></circle>
              <foreignObject x="210" y="210" width="100" height="20">
                <div className="text-[10px] font-mono font-bold text-cadastral-emerald drop-shadow-md">H-9921</div>
              </foreignObject>
            </g>

            {/* Plot 2 (Selected Plot with Conflict) */}
            <g className="cursor-pointer" onClick={() => setSelectedFeature(true)}>
              {/* Cadastral Layer */}
              <polygon points="400,70 700,50 720,280 430,300" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="2.5"></polygon>
              {/* Municipal Layer Divergence */}
              <polygon points="390,60 690,40 730,290 410,290" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4"></polygon>
              
              {/* Conflict Highlights */}
              <polygon points="400,70 390,60 690,40 700,50" fill="#E11D48" fillOpacity="0.25" stroke="#E11D48" strokeWidth="1.5"></polygon>
              
              {/* Selection Border (if active) */}
              {selectedFeature && (
                <>
                  <polygon points="400,70 700,50 720,280 430,300" fill="none" stroke="#D97706" strokeWidth="3" strokeDasharray="8 4"></polygon>
                  <circle cx="560" cy="170" r="6" fill="#D97706" stroke="#fff" strokeWidth="2"></circle>
                  <foreignObject x="530" y="185" width="100" height="30">
                    <div className="bg-primary text-surface rounded shadow-md px-2 py-1 font-mono text-[11px] text-center font-bold">
                      KHASRA-4482
                    </div>
                  </foreignObject>
                </>
              )}
            </g>

            {/* Plot 3 (Unmatched Municipal Data) */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <polygon points="130,350 400,320 420,550 150,570" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="5 5"></polygon>
              <foreignObject x="250" y="440" width="100" height="30">
                <div className="text-[10px] font-mono font-bold text-secondary bg-surface/50 rounded px-1 w-fit">
                  MCD-781 (Unmatched)
                </div>
              </foreignObject>
            </g>

          </svg>
        </div>

        {/* Right: Contextual Inspection Panel (Shown only when feature is selected) */}
        {selectedFeature && (
          <div className="w-full lg:w-[400px] flex flex-col shrink-0 gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
            
            {/* Entity Context Card */}
            <div className="bg-surface border border-border rounded-xl shadow-tier-1 flex flex-col">
              <div className="p-4 border-b border-border bg-background/50 rounded-t-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[12px] bg-primary text-surface px-2 py-0.5 rounded font-bold w-fit mb-1">KHASRA-4482</span>
                  <span className="text-body-sm text-neutral font-medium">Plot 88-A, Phase II</span>
                </div>
                <button 
                  className="w-8 h-8 rounded-md flex items-center justify-center text-neutral hover:bg-surface-container-low transition-colors"
                  onClick={() => setSelectedFeature(false)}
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="p-4 flex flex-col gap-4">
                
                {/* State Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-variance-amber-subtle text-variance-amber border border-variance-amber-border flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Conflict Detected
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cadastral-emerald-subtle text-cadastral-emerald border border-cadastral-emerald-border">
                    Cadastral Baseline
                  </span>
                </div>

                {/* Geometry Data */}
                <div className="bg-background border border-border rounded-lg p-3 text-body-sm flex flex-col gap-2">
                  <div className="flex justify-between border-b border-border pb-1.5">
                    <span className="text-neutral font-medium">Area (Baseline)</span>
                    <span className="font-mono text-primary font-bold">1,240 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-1.5">
                    <span className="text-neutral font-medium">Perimeter</span>
                    <span className="font-mono text-primary font-bold">148.5 m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral font-medium">Vertices</span>
                    <span className="font-mono text-primary font-bold">8 Nodes</span>
                  </div>
                </div>

                {/* Conflict Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-1">Related Harmonization Data</h3>
                  <div className="flex items-start gap-3 bg-conflict-rose-subtle/30 p-2.5 rounded border border-conflict-rose-border/50 mt-1">
                    <span className="material-symbols-outlined text-conflict-rose text-[18px] mt-0.5 shrink-0">emergency</span>
                    <div className="flex flex-col">
                      <span className="text-body-sm font-bold text-primary">Boundary Divergence</span>
                      <span className="text-[11px] text-neutral mt-0.5">Municipal overlap (MCD-781) exceeds cadastral boundary by 14.2 m² on northern edge.</span>
                      <button className="text-[11px] font-bold text-secondary mt-1 text-left hover:underline">View in Harmonization Workspace →</button>
                    </div>
                  </div>
                </div>

                {/* Attributes Table */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-label-spatial-header text-neutral uppercase font-bold border-b border-border pb-1">Entity Attributes</h3>
                  <div className="bg-surface border border-border rounded-md overflow-hidden flex flex-col font-mono text-[11px]">
                    <div className="flex justify-between p-2 border-b border-border bg-background/50">
                      <span className="text-neutral font-bold">Owner_ID</span>
                      <span className="text-primary">OW-99812</span>
                    </div>
                    <div className="flex justify-between p-2 border-b border-border">
                      <span className="text-neutral font-bold">Land_Use</span>
                      <span className="text-primary">Commercial</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background/50">
                      <span className="text-neutral font-bold">Last_Audit</span>
                      <span className="text-primary">2023-10-15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Actions */}
            <div className="bg-surface border border-border rounded-xl shadow-tier-1 p-4 flex flex-col gap-2">
              <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">edit</span>
                Edit Geometry
              </button>
              <button className="bg-surface border border-border hover:bg-surface-container-low text-primary font-semibold text-body-sm py-2 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">map</span>
                Open in Google Earth
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
