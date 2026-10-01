import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/20">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-surface shadow-sm">
              <span className="material-symbols-outlined text-[20px]">layers</span>
            </div>
            <span className="font-bold text-headline-sm tracking-tight text-primary">GeoSync</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-body-sm font-medium text-neutral">
            <Link href="#problem" className="hover:text-primary transition-colors">The Problem</Link>
            <Link href="#solution" className="hover:text-primary transition-colors">How It Works</Link>
            <Link href="#engine" className="hover:text-primary transition-colors">Reconciliation Engine</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hidden sm:block text-body-sm font-medium text-primary hover:text-secondary transition-colors">
              Command Center
            </Link>
            <Link href="/workspace" className="bg-primary text-surface px-4 py-2 rounded-md text-body-sm font-semibold shadow-sm hover:bg-primary/90 transition-all flex items-center gap-2">
              Open Workspace
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full pt-16">
        
        {/* HERO SECTION - Centered, bold, map mockup below */}
        <section className="relative w-full pt-24 pb-16 overflow-hidden">
          {/* Subtle background grid */}
          <div className="absolute inset-0 z-0 bg-[#F8FAFC]">
            <svg className="absolute inset-0 w-full h-full text-border opacity-50" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)"></rect>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm mb-6 text-[11px] font-bold uppercase tracking-wider text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              GeoSync Recon Engine v4.8 Live
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Establish a single spatial truth for institutional land data.
            </h1>
            <p className="text-lg md:text-xl text-neutral max-w-2xl mb-10 leading-relaxed">
              Automatically harmonize conflicting cadastral surveys, municipal records, and drone registries into a cryptographically auditable canonical baseline.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/workspace" className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-on-secondary rounded-lg font-semibold text-body-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                Launch Workspace
                <span className="material-symbols-outlined text-[20px]">explore</span>
              </Link>
              <Link href="#solution" className="w-full sm:w-auto px-8 py-3.5 bg-surface text-primary border border-border rounded-lg font-semibold text-body-md hover:bg-surface-container-low transition-all">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10 perspective-1000">
            <div className="w-full h-[400px] md:h-[500px] bg-surface rounded-t-2xl border-x border-t border-border shadow-2xl overflow-hidden flex flex-col relative transform transition-transform hover:-translate-y-2 duration-500">
              
              {/* Fake Window Header */}
              <div className="h-10 bg-surface border-b border-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-conflict-rose"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-variance-amber"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cadastral-emerald"></div>
                </div>
                <div className="mx-auto bg-background border border-border rounded text-[10px] font-mono px-4 py-0.5 text-neutral">
                  geosync.gov.in/workspace/KHASRA-4482
                </div>
              </div>

              {/* Map UI Mockup */}
              <div className="flex-1 relative flex">
                <div className="flex-1 bg-[#F8FAFC] relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full text-border/80" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mock-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mock-grid)"></rect>
                  </svg>
                  
                  {/* Geometry */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="200,100 500,80 550,300 250,320" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="2"></polygon>
                    <polygon points="180,90 490,70 560,290 230,310" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4"></polygon>
                    {/* Hotspot */}
                    <polygon points="200,100 180,90 490,70 500,80" fill="#E11D48" fillOpacity="0.3" stroke="#E11D48" strokeWidth="1.5"></polygon>
                    
                    <foreignObject x="300" y="150" width="200" height="100">
                      <div className="bg-surface/90 border border-variance-amber-border rounded shadow-md p-2 flex flex-col font-mono text-[10px]">
                        <span className="text-variance-amber font-bold mb-1 border-b border-border pb-1">CONFLICT DETECTED</span>
                        <div className="flex justify-between text-neutral"><span className="font-bold text-primary">Baseline:</span> 1,240 m²</div>
                        <div className="flex justify-between text-neutral"><span className="font-bold text-primary">Municipal:</span> 1,254 m²</div>
                        <div className="mt-1 text-conflict-rose text-right">Δ 14.2 m² Variance</div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Mock Right Panel */}
                <div className="w-64 border-l border-border bg-surface p-4 flex flex-col gap-3">
                  <div className="h-6 w-1/2 bg-surface-container-low rounded"></div>
                  <div className="h-4 w-3/4 bg-background border border-border rounded mt-2"></div>
                  <div className="h-20 w-full bg-background border border-border rounded mt-4"></div>
                  <div className="h-10 w-full bg-cadastral-emerald rounded mt-auto opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: The Problem (Zig Zag - Image Right) */}
        <section id="problem" className="w-full py-24 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <div className="flex-1">
                <span className="text-label-spatial-header text-secondary font-bold uppercase tracking-wider mb-2 block">The Challenge</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
                  Siloed datasets breed spatial chaos.
                </h2>
                <p className="text-body-lg text-neutral mb-6 leading-relaxed">
                  When the State Cadastre, Municipal Tax GIS, and Drone registries operate in isolation, overlapping boundaries and conflicting attributes create massive administrative overhead and legal disputes.
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-conflict-rose shrink-0 mt-0.5">cancel</span>
                    <span className="text-body-md text-primary font-medium">Overlapping geometries cause property tax leakage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-conflict-rose shrink-0 mt-0.5">cancel</span>
                    <span className="text-body-md text-primary font-medium">Mismatched coordinate reference systems (CRS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-conflict-rose shrink-0 mt-0.5">cancel</span>
                    <span className="text-body-md text-primary font-medium">No verifiable audit trail for conflict resolution.</span>
                  </li>
                </ul>
              </div>

              <div className="flex-1 relative w-full h-[400px]">
                {/* Layer Stack Illustration */}
                <div className="absolute inset-0 flex flex-col items-center justify-center perspective-1000">
                  <div className="w-64 h-40 bg-surface border border-border shadow-lg rounded-xl absolute transform rotate-x-60 -translate-y-16 flex items-center justify-center font-mono text-sm text-primary font-bold">
                    <span className="material-symbols-outlined text-cadastral-emerald absolute top-2 left-2">description</span>
                    State Cadastre
                  </div>
                  <div className="w-64 h-40 bg-surface border border-border shadow-lg rounded-xl absolute transform rotate-x-60 flex items-center justify-center font-mono text-sm text-primary font-bold">
                    <span className="material-symbols-outlined text-secondary absolute top-2 left-2">location_city</span>
                    Municipal GIS
                  </div>
                  <div className="w-64 h-40 bg-surface border border-border shadow-lg rounded-xl absolute transform rotate-x-60 translate-y-16 flex items-center justify-center font-mono text-sm text-primary font-bold">
                    <span className="material-symbols-outlined text-blueprint-blue absolute top-2 left-2">flight</span>
                    Drone Vectors
                  </div>
                  {/* Connecting Line indicating clash */}
                  <div className="absolute w-1 h-32 bg-conflict-rose blur-[2px] opacity-50"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Intelligent Reconcile (Zig Zag - Image Left) */}
        <section id="solution" className="w-full py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              
              <div className="flex-1 w-full bg-surface rounded-2xl border border-border shadow-tier-1 p-6 relative overflow-hidden h-[400px]">
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-background border border-border rounded text-[10px] font-mono text-neutral">Auto-Match</span>
                  <span className="px-2 py-1 bg-cadastral-emerald-subtle text-cadastral-emerald border border-cadastral-emerald-border rounded text-[10px] font-mono font-bold">Confidence: 98%</span>
                </div>
                {/* SVG Merge graphic */}
                <svg className="w-full h-full mt-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100 50 L 200 50 L 200 150 L 100 150 Z" fill="#059669" fillOpacity="0.2" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 120 70 L 220 70 L 220 170 L 120 170 Z" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 250 110 L 280 110 L 270 100 M 280 110 L 270 120" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 300 80 L 380 80 L 380 160 L 300 160 Z" fill="#059669" stroke="#059669" strokeWidth="2" />
                  <circle cx="380" cy="80" r="4" fill="#0F172A" />
                  <circle cx="380" cy="160" r="4" fill="#0F172A" />
                  <circle cx="300" cy="80" r="4" fill="#0F172A" />
                  <circle cx="300" cy="160" r="4" fill="#0F172A" />
                </svg>
              </div>

              <div className="flex-1">
                <span className="text-label-spatial-header text-secondary font-bold uppercase tracking-wider mb-2 block">The Solution</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
                  Deterministic spatial reconciliation.
                </h2>
                <p className="text-body-lg text-neutral mb-6 leading-relaxed">
                  GeoSync parses complex multi-format inputs (SHP, KML, GeoJSON) and automatically aligns them using a robust Intersection-over-Union (IoU) engine.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="bg-surface p-4 border border-border rounded-lg shadow-sm">
                    <span className="font-bold text-primary block mb-1 text-body-md">Topology enforcement</span>
                    <span className="text-body-sm text-neutral">Snaps floating vertices and eliminates micro-slivers automatically based on defined rulesets.</span>
                  </div>
                  <div className="bg-surface p-4 border border-border rounded-lg shadow-sm">
                    <span className="font-bold text-primary block mb-1 text-body-md">Attribute merging</span>
                    <span className="text-body-sm text-neutral">Merges tax data with legal baseline boundaries without corrupting original source histories.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Bento Box Core Benefits */}
        <section id="engine" className="w-full py-24 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">Built for institutional rigor.</h2>
              <p className="text-body-md text-neutral">
                GeoSync doesn't just guess; it provides transparent scoring, explainable rules, and complete human-in-the-loop oversight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {/* Box 1 - Wide */}
              <div className="md:col-span-2 bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-tier-2 transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary mb-4 border border-border">
                    <span className="material-symbols-outlined text-[24px]">analytics</span>
                  </div>
                  <h3 className="text-headline-sm font-bold text-primary mb-2">Multimodal Evidence Scoring</h3>
                  <p className="text-body-md text-neutral max-w-md">
                    Matches aren't black boxes. Every pair generates a confidence score derived from Area Overlap (IoU), Centroid proximity, and attribute string distance.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="w-[88%] h-full bg-cadastral-emerald"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-mono text-neutral font-bold uppercase">
                    <span>Confidence Score</span>
                    <span className="text-cadastral-emerald">88%</span>
                  </div>
                </div>
              </div>

              {/* Box 2 - Tall/Square */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col hover:shadow-tier-2 transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary mb-4 border border-border">
                  <span className="material-symbols-outlined text-[24px]">gavel</span>
                </div>
                <h3 className="text-headline-sm font-bold text-primary mb-2">Canonical Rules</h3>
                <p className="text-body-md text-neutral flex-1">
                  Enforce strict logic priorities. Always preserve the legal baseline geometry while appending secondary attributes.
                </p>
              </div>

              {/* Box 3 - Square */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col hover:shadow-tier-2 transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary mb-4 border border-border">
                  <span className="material-symbols-outlined text-[24px]">how_to_reg</span>
                </div>
                <h3 className="text-headline-sm font-bold text-primary mb-2">Human Oversight</h3>
                <p className="text-body-md text-neutral flex-1">
                  Flag discrepancies below tolerance for manual officer review and sign-off.
                </p>
              </div>

              {/* Box 4 - Wide */}
              <div className="md:col-span-2 bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-8 hover:shadow-tier-2 transition-shadow">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary mb-4 border border-border">
                    <span className="material-symbols-outlined text-[24px]">download</span>
                  </div>
                  <h3 className="text-headline-sm font-bold text-primary mb-2">Standard Output</h3>
                  <p className="text-body-md text-neutral">
                    Export production-ready, clean datasets conforming to OGC standards. Instantly deployable to national GIS gateways.
                  </p>
                </div>
                <div className="w-full md:w-48 flex flex-col gap-2 shrink-0">
                  <div className="px-3 py-2 bg-surface border border-border rounded font-mono text-[11px] text-primary font-bold text-center">GeoJSON</div>
                  <div className="px-3 py-2 bg-surface border border-border rounded font-mono text-[11px] text-primary font-bold text-center">ESRI Shapefile</div>
                  <div className="px-3 py-2 bg-surface border border-border rounded font-mono text-[11px] text-primary font-bold text-center">KML</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="w-full py-24 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Ready to unify your land data?
            </h2>
            <p className="text-body-lg text-neutral mb-8">
              Experience the reconciliation engine in action. Open the workstation to review active spatial discrepancies.
            </p>
            <Link href="/workspace" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-surface rounded-lg font-bold text-body-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Launch GeoSync Workstation
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-surface shadow-sm">
              <span className="material-symbols-outlined text-[14px]">layers</span>
            </div>
            <span className="font-bold text-body-md text-primary">GeoSync Core</span>
          </div>
          <div className="text-body-sm text-neutral font-medium">
            © 2026 GeoSync Land Data Intelligence Platform. All sovereign rights reserved.
          </div>
          <div className="flex gap-4 text-body-sm font-medium text-neutral">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
