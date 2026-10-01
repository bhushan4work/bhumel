# SIH26013 project context

## project

- **problem statement:** SIH26013
- **title:** Automated Integration and Intelligent Harmonization of Multi-source Geospatial Data for Urban Land Record Management
- **organization:** Ministry of Rural Development
- **department:** Department of Land Resources (DoLR)
- **category / theme:** Software / Smart Automation
- **source status:** the supplied research is a proposed design; it records no acquired government dataset, trained model, benchmark result, deployment, or government partnership.

## problem

urban land data comes from multiple sources and can differ in coordinates, geometry, topology, schema, units, identifiers, dates, authority, completeness, and quality.

the core problem is **spatial entity resolution under positional, semantic, and temporal uncertainty**.

important rules:

- building-to-parcel and utility-to-parcel are relationships, not proof of same-entity identity or ownership.
- tax, survey, registration, and parcel identifiers must remain separate namespaces.
- a spatial/database join is not a legal conclusion.
- conflicting observations must remain visible rather than being silently forced into agreement.
- cadastral finalization and rights determination remain with the competent authority.

## required system

build an evidence-aware geospatial reconciliation system that:

1. ingests heterogeneous geospatial and tabular data
2. preserves original records and metadata
3. normalizes coordinates, schemas, units, and geometry
4. generates candidate counterparts
5. scores plausible matches using multiple evidence features
6. handles unmatched, ambiguous, split, and merge cases
7. harmonizes attributes with versioned mappings
8. detects topology and geometry defects
9. detects and routes spatial, semantic, temporal, and authority conflicts
10. supports confidence, abstention, and reason-coded human review
11. creates versioned technical outputs with full lineage
12. supports replay from frozen inputs
13. exports technical data through GeoPackage and a bounded feature API

## input sources

- cadastral feature outputs
- drone / ORI imagery
- DSM / DTM
- cadastral maps
- revenue records
- municipal records
- utility networks
- ground truth / checkpoints
- GNSS / CORS observations
- building footprints

## core processing

### intake and metadata

support raster, vector, table, and survey inputs.

each dataset should retain key metadata such as source organization/namespace, product type, content hash, access/license status, acquisition or validity time, schema/profile version, CRS, vertical/horizontal reference, units, scale/resolution, positional uncertainty, and geographic extent.

unknown metadata must remain explicit and may trigger a quality gate.

### normalization

- validate CRS and coordinate metadata
- use GDAL / PROJ-based transformations
- preserve native metadata
- record transformation pipelines
- use control/checkpoint information where required
- compare geometry before/after alignment changes
- never treat raster pixel size as positional accuracy

### matching

use indexed candidate generation plus evidence from:

- distance
- overlap
- shape / geometry similarity
- topology/context
- attributes
- temporal compatibility
- source quality
- authority eligibility
- ambiguity margin

matching progression:

1. nearest-neighbor / spatial-join baseline
2. explicit rules + global assignment where 1:1 is valid
3. calibrated XGBoost pair classifier when valid labels exist
4. graph / neural matching only as future work if justified

1:1 assignment must not be forced onto building-to-parcel or utility-to-parcel relationships.

## confidence and abstention

confidence must be treated as structured evidence, including:

- calibrated match probability, when supported
- geometry validity
- registration quality
- metadata completeness
- temporal consistency
- authority eligibility
- ambiguity margin
- unresolved conflicts

before calibration, use the term **heuristic evidence score**, not probability of correctness.

behavior:

- high confidence + all quality gates pass -> reversible technical link may be accepted
- medium confidence / incomplete evidence -> review with alternatives
- low confidence / unknown CRS / out-of-domain -> abstain, reject, or quarantine with explanation
- rights conflicts, authoritative boundary changes, and unresolved split/merge cases -> mandatory authority/evidence review

any confidence thresholds in the research are illustrative planning values, not measured operational thresholds.

## attribute harmonization

use versioned mapping profiles and preserve original fields and values.

retain source namespace, type, code list, language, unit, validity, and transformation rule.

examples:

- `tax_account_number` -> `municipal_account_id`
- `building_use` -> `observed_building_use`

never map a tax account directly to `parcel_id`.

missing fields are missing, not zero. contradictory assertions remain separate until resolved by policy.

## conflict and topology handling

conflict sequence:

`detect -> classify -> gather evidence -> check time/authority -> assess quality -> propose -> review -> validate -> commit`

handle at least:

- building-outline differences
- parcel-boundary discrepancies
- area disagreements
- party/right assertion conflicts
- invalid geometry
- overlap and slivers
- duplicates / bow-ties
- neighbor inconsistencies
- split / merge cases

repairs must be bounded, auditable, derived, neighbor-checked, and reversible. never silently overwrite source geometry.

## temporal and provenance model

different dates may represent real change, not error.

support valid time, system time, source-vintage comparison, versioned records, split/merge events, and change-triggered recomputation.

do not mutate past decisions in place. imports should be idempotent using source namespace plus content/version keys.

for each integrated output retain lineage to source dataset/feature ids, hashes, dates, CRS/transformations, checkpoints, model/profile/code versions, candidates/alternatives, evidence, calibration, policy gates, topology checks, reviewer decision/reason, predecessor version, valid/system time, and license/access classification.

## architecture

```text
sources
  -> immutable intake + manifest
  -> gis normalization + quality
  -> observations / imported features / optional cv
  -> candidate generation
  -> rules + ml + assignment
  -> quality / authority / temporal / ambiguity gates
  -> technical decision or unresolved case
  -> versioned postgis + lineage
  -> export / api
```

services:

- **intake:** validation, permissions, file checks, quotas, source storage
- **gis worker:** inventory, geometry checks, transformations, quality reports
- **optional cv worker:** building extraction with model/raster lineage
- **matcher:** candidates, evidence features, matching score/probability
- **policy engine:** gates, conflicts, repair proposals, abstention
- **decision layer:** reason-coded review, optimistic version checks, decision history
- **commit/export:** versioned technical output and exchange formats

## ai / ml

use ai only for uncertain observational tasks with suitable labels.

deterministic handling remains responsible for coordinate math, geometry validity, permissions, units, schema validation, authority rules, and commits.

**optional building cv:** compact U-Net with PyTorch; tiled inference, polygonization, model/version lineage, touching-object ambiguity handling.

**matching model:** XGBoost binary pair classifier using spatial, geometric, attribute, and contextual evidence; calibrate on held-out target-domain labels.

do not claim foreign benchmark performance as Indian cadastral accuracy, and do not present an unvalidated model as operationally authoritative.

## prototype data strategy

because government datasets are not currently available to the team, use public + synthetic data without presenting it as authoritative cadastral truth.

proposed bounded demo:

- one ~400 m × 400 m SpaceNet 5 Mumbai image tile
- dated OpenStreetMap context
- ~60 clearly labeled fictitious parcels
- synthetic revenue/tax records
- synthetic utility network
- synthetic survey checkpoints
- synthetic DSM/DTM fixtures
- small manually annotated building subset
- optional U-Net inference

use controlled corruptions such as CRS mismatch, unknown CRS, displacement, semantic mismatch, duplicates, invalid geometry, overlap/slivers, split/merge, temporal ambiguity, and rights conflicts.

synthetic results can demonstrate pipeline behavior and known-error recovery, not real ownership matching, survey accuracy, institutional adoption, or field generalization.

## mvp

### must have

- raster/vector/csv/survey intake
- source manifest
- CRS and schema normalization
- quality reporting
- rule baseline + evaluated XGBoost matching path when labels permit
- candidate ranking and unmatched cases
- attribute harmonization
- topology/conflict detection
- bounded repair proposals
- confidence / abstention
- human review
- versioned technical database and provenance
- search, map/evidence access, export, replay/version history

### should have

- small U-Net inference demo
- split/merge grouping
- OGC API Features validation
- cross-AOI evaluation
- operator study
- larger-image COG/tile support

### future

- raw drone photogrammetry
- 3D/LiDAR pipelines
- state-specific production connectors
- graph matching
- extensive temporal image learning
- nationwide production capacity
- offline field application
- registered rights adjudication workflows

## non-goals

- ownership adjudication
- automatic legal boundary approval
- silent boundary overwrites
- forced 100% reconciliation
- nationwide production claims
- fabricated government access, partnerships, metrics, or model results
- scope-expanding components without a demonstrated requirement

## evaluation

no team evaluation results currently exist.

freeze source hashes, splits, profiles, thresholds, and hardware description before testing. use geographic holdouts and keep all corruption variants of the same source entity in one split.

evaluate both positive and negative cases, including unknown CRS, missing fields, duplicates, invalid geometry, splits/merges, no-match cases, and rights conflicts.

key metrics:

- candidate recall
- matching precision / recall / F1
- accepted false-link fraction
- mapping accuracy and unresolved rate
- topology violations and repair damage
- checkpoint RMSE
- Brier score, reliability, risk-coverage
- change-event accuracy and replay integrity
- system latency / memory / throughput
- correct-case operator time

compare against nearest-neighbor, spatial/IoU rules, rule + assignment, learned matching, and gated variants.

## recommended stack

- frontend: React + TypeScript
- web map: OpenLayers
- backend: FastAPI
- database: PostgreSQL + PostGIS
- geospatial processing: GDAL / OGR, PROJ / pyproj, Rasterio, GeoPandas, Shapely
- matching: XGBoost
- optional cv: PyTorch + U-Net
- exchange: GeoPackage, GeoJSON, bounded feature API
- deployment: containerized single application + background worker

## truthfulness rule

until something is implemented and measured, describe it as proposed/planned.

never invent government datasets, partnerships, accuracy, runtime, trained-model results, legal workflows, or production capability.

keep these distinctions explicit:

- verified fact
- existing system
- research finding
- proposed solution
- expected outcome
- assumption
- future work
- synthesis
