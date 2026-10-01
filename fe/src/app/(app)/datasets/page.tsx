import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const mockDatasets = [
  {
    id: "DS-7892",
    name: "State Revenue Cadastre",
    type: "Legal Baseline",
    format: "SHP",
    count: "42,850",
    crs: "EPSG:4326",
    status: "ready",
    lastUpdated: "2 hours ago"
  },
  {
    id: "DS-7893",
    name: "Municipal Tax GIS",
    type: "Property Assessment",
    format: "GeoJSON",
    count: "44,120",
    crs: "EPSG:4326",
    status: "ready",
    lastUpdated: "5 hours ago"
  },
  {
    id: "DS-7894",
    name: "Drone Orthomosaic Vectors",
    type: "Building Footprints",
    format: "KML",
    count: "8,940",
    crs: "EPSG:3857",
    status: "processing",
    lastUpdated: "1 day ago"
  },
  {
    id: "DS-7895",
    name: "Ward 14 Infrastructure",
    type: "Utility Layer",
    format: "GeoJSON",
    count: "1,204",
    crs: "EPSG:4326",
    status: "warning",
    lastUpdated: "3 days ago",
    warning: "CRS Mismatch Detected"
  },
  {
    id: "DS-7896",
    name: "Historical Title Registry",
    type: "Tabular Records",
    format: "CSV",
    count: "15,000",
    crs: "None",
    status: "error",
    lastUpdated: "1 week ago",
    error: "Missing Geometry"
  }
];

export default function DatasetsPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">Data Sources</h1>
          <p className="text-body-md text-neutral mt-2 max-w-2xl">
            Manage imported institutional datasets, monitor coordinate synchronization, and review spatial processing quality.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Button variant="secondary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">sync</span>
            Sync API
          </Button>
          <Button variant="primary" className="flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add Data Source
          </Button>
        </div>
      </div>

      {/* Toolbar (Search & Filter) */}
      <div className="bg-surface border border-border p-3 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-neutral">search</span>
          <input 
            type="text" 
            placeholder="Search dataset name, type, or ID..." 
            className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-body-sm font-medium text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px]">filter_list</span>
            Status: All
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px]">layers</span>
            Format: All
          </button>
          <button className="flex items-center gap-1.5 text-body-sm font-medium text-neutral hover:text-primary transition-colors bg-background border border-border px-3 py-1.5 rounded-md whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px]">sort</span>
            Sort: Last Updated
          </button>
        </div>
      </div>

      {/* Dataset List */}
      <div className="flex flex-col gap-3">
        {mockDatasets.map((dataset) => (
          <div key={dataset.id} className="bg-surface border border-border p-4 rounded-xl shadow-tier-1 hover:shadow-tier-2 transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left: Info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 mt-1 shrink-0 rounded-lg bg-surface-container-low border border-border flex items-center justify-center text-primary group-hover:bg-blueprint-blue group-hover:text-secondary group-hover:border-blueprint-border transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  {dataset.format === 'SHP' || dataset.format === 'GeoJSON' ? 'public' : dataset.format === 'CSV' ? 'table' : 'map'}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-body-md text-primary">{dataset.name}</span>
                  <span className="font-mono text-[10px] text-neutral px-1.5 py-0.5 bg-background border border-border rounded">{dataset.id}</span>
                </div>
                <div className="text-body-sm text-neutral mt-1">
                  {dataset.type} • Updated {dataset.lastUpdated}
                </div>
                
                {/* Error/Warning Context */}
                {dataset.status === 'warning' && (
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-variance-amber bg-variance-amber-subtle px-2 py-1 rounded w-fit">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    {dataset.warning}
                  </div>
                )}
                {dataset.status === 'error' && (
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-conflict-rose bg-conflict-rose-subtle px-2 py-1 rounded w-fit">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {dataset.error}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Metrics & Actions */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:ml-auto">
              {/* Properties Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                <div className="flex flex-col">
                  <span className="text-label-spatial-header text-neutral uppercase">Format</span>
                  <span className="font-mono text-label-data-mono text-primary font-bold mt-0.5">{dataset.format}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-spatial-header text-neutral uppercase">Records</span>
                  <span className="font-mono text-label-data-mono text-primary font-bold mt-0.5">{dataset.count}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-spatial-header text-neutral uppercase">CRS</span>
                  <span className="font-mono text-label-data-mono text-primary font-bold mt-0.5">{dataset.crs}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="w-28 flex justify-end">
                {dataset.status === 'ready' && (
                  <div className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border bg-cadastral-emerald-subtle text-cadastral-emerald border-cadastral-emerald-border flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Ready
                  </div>
                )}
                {dataset.status === 'processing' && (
                  <div className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border bg-blueprint-blue text-secondary border-blueprint-border flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                    Processing
                  </div>
                )}
                {dataset.status === 'warning' && (
                  <div className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border bg-variance-amber-subtle text-variance-amber border-variance-amber-border flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Needs Fix
                  </div>
                )}
                {dataset.status === 'error' && (
                  <div className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border bg-conflict-rose-subtle text-conflict-rose border-conflict-rose-border flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    Failed
                  </div>
                )}
              </div>

              {/* Action Menu */}
              <button className="w-8 h-8 rounded-md flex items-center justify-center text-neutral hover:bg-surface-container-low hover:text-primary transition-colors border border-transparent hover:border-border">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
