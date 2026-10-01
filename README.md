# GeoSync

**Institutional Cadastral Precision Platform**  
*Providing automated spatial polygon harmonization, multi-tier survey discrepancy resolution, and cryptographic auditability for national land registries.*

GeoSync is an integration and reconciliation engine designed to resolve the disjointed nature of modern land data. By intelligently merging State Cadastre baselines, Municipal Tax GIS records, and Drone Registries, GeoSync establishes a single, conflict-free spatial truth without ever overwriting authoritative historical records.

---

## The Challenge

Urban and rural land registries, utility networks, and municipal databases are often maintained in isolation. This leads to:
- Overlapping geometries and mismatched coordinate reference systems (CRS).
- Administrative bottlenecks and property tax leakage.
- A lack of traceable, auditable history for boundary adjustments.

## Our Approach

GeoSync ingests diverse geospatial formats (SHP, KML, GeoJSON) and normalizes them into a unified schema. It utilizes deterministic geometric matching and advanced topological calculations (like Intersection-over-Union) to identify conflicts.

We prioritize **accountable administration** over black-box automation. GeoSync acts as a technical advisor—not a legal adjudicator.

### Key Capabilities

*   **Intake & Normalization:** Robust validation, schema mapping, and coordinate projection handling.
*   **Confidence-Aware Matching:** Every matched geometry receives a transparent heuristic evidence score based on overlap, centroid proximity, and metadata similarity.
*   **Conflict & Topology Handling:** Automatically flags overlapping structures, missing records, area discrepancies, and micro-slivers. Applies bounded, reversible repairs based on defined institutional rules.
*   **Expert-in-the-Loop Review:** Low-confidence matches and severe rights conflicts are automatically isolated for manual review by authorized personnel.
*   **Temporal & Provenance Tracking:** Maintains strict lineage for every integrated output, preserving original source IDs, dates, CRS checkpoints, and operator decisions.
*   **Standardized Output:** Generates clean, topologically sound datasets ready for OGC-compliant deployment to state GIS portals.

---

## System Architecture (Proposed)

GeoSync is designed to operate as a scalable pipeline:

1.  **Immutable Intake:** Parses geometry, extracts manifests, and normalizes CRS.
2.  **Candidate Generation & Matching:** Employs spatial indexing and evaluated matching models (e.g., XGBoost) to pair corresponding features.
3.  **Policy Engine:** Filters matches through quality, temporal, and ambiguity gates. 
4.  **Decision Layer:** Manages manual review queues, optimistic version checks, and conflict resolution.
5.  **Versioned Storage:** Commits finalized technical outputs to PostGIS with complete cryptographic lineage.

### Recommended Stack
*   **Frontend:** Next.js (React), TypeScript, Tailwind CSS
*   **Web Map:** OpenLayers / Mapbox GL (SVG prototypes currently implemented)
*   **Backend:** FastAPI
*   **Database:** PostgreSQL + PostGIS
*   **Geospatial Processing:** GDAL / OGR, PROJ, Rasterio, GeoPandas, Shapely
*   **Machine Learning (Optional):** XGBoost, PyTorch (U-Net for building footprint extraction)

---

## Prototype Context & Truthfulness Statement

This repository contains the **Frontend MVP** developed for the SIH26013 problem statement. 

**Important Disclaimers:**
*   **Data Usage:** Because authoritative government datasets are not available, this prototype uses **strictly synthetic, fictitious data** (e.g., bounding boxes over SpaceNet imagery) to demonstrate pipeline behavior and error recovery. 
*   **Operational Scope:** GeoSync does **not** adjudicate ownership, automatically approve legal boundaries, or silently overwrite source geometries. It provides a technical, evidence-based integration proposal for human review.
*   **Status:** The frontend UI (Command Center, GIS Explorer, Harmonization Workspace, Reports) is currently implemented with static data to validate the user experience, spatial logic hierarchy, and reconciliation workflows.

---

## Local Development

The frontend is built with Next.js 16 (App Router) and Tailwind CSS v4.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
