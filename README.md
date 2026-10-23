# The Wandering Journal

A desktop-first, responsive shared road-trip notebook. Static HTML, CSS, native JavaScript modules and Leaflet; no build or package installation needed. Google Maps links provide driving directions. Long trips are split into overlapping segments with at most three intermediate waypoints to accommodate mobile browsers.

## Preview

From this directory run `python -m http.server 4173` and open http://localhost:4173. Use the bundled Python executable if Python is not on PATH. ES modules require an HTTP server; do not double-click index.html.

Without Supabase configuration, edits persist in this browser's local storage. This is a local preview, not shared access. Export backups from Journal settings. No account credentials are needed for local preview.

## Shared private access

1. Create a Supabase project. Run `supabase/schema.sql` once in its SQL editor.
2. Create or invite the two users under Authentication. Add their UUIDs to `journal_members` using the example SQL. Disable public sign-ups. Membership cannot be granted from the app.
3. Set the project URL and **publishable / anon key** in `config.js`. These are public browser configuration. Never use a secret or service-role key. Row-level security protects journal reads and writes; only listed members can access them.
4. Sign in through Journal settings. For the initial empty journal, use the starter collection button in the destination library. Both members then work on the same journal. Reload to receive the other person's changes.
5. Concurrent edits use a revision check. A stale update is rejected rather than overwriting another person's work. Export unsaved changes and reload if a conflict occurs. Automatic live merging is not implemented.

The destination research leads in data.js are bundled public content. Private trip edits and notes are in Supabase. If the initial research collection itself must be private, move that dataset behind the authenticated backend before deploying. GitHub Pages serves public HTML and JavaScript even from a private repository.

## GitHub Pages

Create/select a GitHub repository, add these files and push to `main`. In Settings > Pages select **GitHub Actions** as the source. The included workflow tests and deploys only the six app files. Relative paths support repository subdirectory URLs. No repository has been created or deployed yet.

## Imported data & limits

18 gravestone entries plus Hex Hollow were transcribed as research leads from the supplied 44-page PDF. Separate family markers share approximate cemetery-area pins. The PDF's general “look up” links without a named gravestone remain research leads rather than invented destinations. The Minnesota trip also uses the supplied handoff.

All seed coordinates are approximate and not independently geocoded. Stamps Cemetery in particular is only a county-level approximation. The map clearly labels that status. Refine destination locations to record an entrance and navigation query; exact grave instructions belong in notes. Source text, aliases and historic claims require verification. No invented grave photographs are used; the headstone art is a labeled CSS illustration.

Custom stops accept addresses and optional coordinate pairs. Addresses are passed to Google Maps; they are not automatically geocoded. Dashed lines show stop order, not road geometry or driving times. Basemap uses OpenStreetMap standard tiles with attribution; follow its tile usage policy and change providers if traffic grows. Leaflet, map tiles, fonts and Supabase require internet access. If Leaflet fails to load, the notebook and directions remain usable.

## Checks

Run `node --test tests/*.test.js`. Tests cover long-trip segmentation, cemetery-specific directions, seed references, and escaping. Cloud authentication, SQL policies and concurrent saves need integration testing after a real Supabase project is configured.

References: [Leaflet](https://leafletjs.com/examples/quick-start/), [Google Maps URLs](https://developers.google.com/maps/documentation/urls/get-started), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).
