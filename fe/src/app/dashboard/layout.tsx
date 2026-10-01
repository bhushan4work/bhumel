import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[220px] fixed inset-y-0 left-0 bg-surface border-r border-border flex flex-col z-20">
          <div className="h-14 flex items-center px-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <span className="w-2 h-2 bg-surface rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-headline-sm tracking-tight text-primary leading-none">BhuDrishti</span>
                <span className="text-[10px] text-neutral uppercase font-bold tracking-wider mt-0.5">Land Data Intelligence</span>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            <div>
              <div className="text-label-spatial-header text-neutral uppercase mb-2">Overview</div>
              <div className="flex flex-col gap-1">
                <Link href="/dashboard" className="px-3 py-1.5 bg-surface-container-low text-primary font-semibold text-body-sm rounded-md transition-colors">
                  Dashboard
                </Link>
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors">
                  Reports
                </Link>
              </div>
            </div>

            <div>
              <div className="text-label-spatial-header text-neutral uppercase mb-2">Data</div>
              <div className="flex flex-col gap-1">
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors">
                  Data Sources
                </Link>
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors">
                  Harmonized Data
                </Link>
              </div>
            </div>

            <div>
              <div className="text-label-spatial-header text-neutral uppercase mb-2">Harmonization</div>
              <div className="flex flex-col gap-1">
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors">
                  Workspace
                </Link>
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors flex justify-between items-center">
                  Match Review
                  <span className="bg-variance-amber-subtle text-variance-amber text-[10px] px-1.5 rounded-sm font-bold">12</span>
                </Link>
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors flex justify-between items-center">
                  Conflicts
                  <span className="bg-conflict-rose-subtle text-conflict-rose text-[10px] px-1.5 rounded-sm font-bold">3</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-label-spatial-header text-neutral uppercase mb-2">Output</div>
              <div className="flex flex-col gap-1">
                <Link href="#" className="px-3 py-1.5 text-neutral hover:bg-surface-container-low hover:text-primary font-medium text-body-sm rounded-md transition-colors">
                  GIS Explorer
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="ml-[220px] flex-1 flex flex-col min-w-0 min-h-screen">
          {/* Top Header */}
          <header className="h-14 bg-surface border-b border-border flex items-center justify-between px-6 z-10 sticky top-0">
            <div className="flex items-center gap-2">
              <span className="text-label-spatial-header text-neutral uppercase font-bold">Spatial Extent:</span>
              <button className="flex items-center gap-1 font-mono text-label-data-mono text-primary bg-background border border-border px-2 py-1 rounded hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[16px]">map</span>
                District 4, Urban Zone
                <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-body-sm font-medium text-primary hover:text-secondary transition-colors underline decoration-border underline-offset-4">
                Load Sample Datasets
              </button>
              <div className="flex items-center gap-2 border-l border-border pl-4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-cadastral-emerald-subtle text-cadastral-emerald border border-cadastral-emerald-border font-label-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-cadastral-emerald animate-pulse"></span>
                  SYSTEM ONLINE
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-blueprint-blue text-secondary border border-blueprint-border font-label-badge">
                  DEMO MODE
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
