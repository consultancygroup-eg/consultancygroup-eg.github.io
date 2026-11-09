# Consultancy Group – Facilities Management app

The user is the facilities manager, not a developer. Reply in Egyptian Arabic, in plain language.

## What it is
A single-page app with no build tooling: `index.html` + `style.css` + `app.js` (about 7.5k lines, Arabic/English).
Data lives in browser `localStorage` (`buffet_v9_*` keys). After login it also syncs to Firebase Firestore (`initCloudSync` / `syncToCloud` in app.js).
`HANDOVER.md` is the full functional handover (in Arabic) and has the latest status at the top.

## Build / run
- `update_bundle.ps1` inlines css/js into `ConsultancyGroup_Web.html` and `ConsultancyGroup_App.html`, rebuilds `Desktop\ConsultancyGroup_App.zip` and recreates `Desktop\Consultancy Group.lnk`. Run it after every change to index.html/style.css/app.js, and commit the bundled HTML too.
- `BuffetManager.exe` = `Program.cs` + `ScanServer.cs`, built with .NET Framework csc (exact command in HANDOVER.md). It opens Edge in app mode with the profile in `app_data/edge_profile` (gitignored; holds the user's real data) and runs a localhost-only WIA scan helper on 127.0.0.1:47321 (`/status`, `/scan?id=`) while the window is open.
- Testing: serve the folder over http://localhost and open it in the built-in browser. The lock screen is `#app-lock-overlay`. Do not log in from a test browser: login turns on cloud sync and would write to the real Firestore workspace.

## Gotchas
- Re-rendering while the user types drops focus. Cloud snapshot renders go through `renderAllWhenNotTyping`.
- `--bg-surface` is not defined in style.css; use `--bg-card` for solid panels.
- The repo is public, and secrets are present in the docs and app.js. Don't add more.
