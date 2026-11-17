# Consultancy Group – Facilities Management app

The user is the facilities manager, not a developer. Reply in Egyptian Arabic, in plain language.

## Project status program (`consultancygroup-sa`)
Full handover (latest status, how things are stored, how to test safely): `PROJECT_STATUS_HANDOVER.md`. Read it before working on this program.
- **Where files go:** anything for the project status program is saved in the facilities manager's `C:\Users\adm.001\General` folder. That includes the desktop copy, exports and backups. When sending them a file, tell them to save it there.
- **The desktop copy** («نسخة سطح المكتب») is `index.html` from `consultancygroup-sa` with `const ADMIN = true;`.
  - It lives in the General folder, and it does **not** update by itself.
  - After every change to the program, regenerate it and send it to them to save in General, replacing the old file.

## What it is
A single-page app with no build tooling: `index.html` + `style.css` + `app.js` (about 7.5k lines, Arabic/English).
Data lives in browser `localStorage` (`buffet_v9_*` keys). After login it also syncs to Firebase Firestore (`initCloudSync` / `syncToCloud` in app.js).
`HANDOVER.md` is the full functional handover (in Arabic) and has the latest status at the top.

## Build / run
- `update_bundle.ps1` inlines css/js into `ConsultancyGroup_Web.html` and `ConsultancyGroup_App.html`, rebuilds `Desktop\ConsultancyGroup_App.zip` and recreates `Desktop\Consultancy Group.lnk`. Run it after every change to index.html/style.css/app.js, and commit the bundled HTML too.
- `BuffetManager.exe` = `Program.cs` + `ScanServer.cs`, built with .NET Framework csc (exact command in HANDOVER.md). It opens Edge in app mode with the profile in `app_data/edge_profile` (gitignored; holds the user's real data) and runs a localhost-only WIA scan helper on 127.0.0.1:47321 (`/status`, `/scan?id=`) while the window is open.
- **The facilities manager's program folder (work computer):** `C:\Users\adm.001\BuffetManager` (BuffetManager.exe + `ConsultancyGroup_Web.html` + `assets`). Any file for this program that they must save on the computer goes there.
- **Desktop copy updates itself (since 17 Nov 2026):** when `ConsultancyGroup_Web.html` is opened as a file, a small script at the top of `<head>` fetches the live `https://consultancygroup-eg.github.io/ConsultancyGroup_Web.html` and runs it in place (same file address, so the data in that Edge profile stays). No internet → it opens the saved copy (`?local=1`). So pushing to `main` (with the bundled HTML rebuilt) updates the computer too; no need to send the file again. Keep `ConsultancyGroup_Web.html` a full bundle containing `initApp`, or the computer falls back to its old copy.
- Testing: serve the folder over http://localhost and open it in the built-in browser. The lock screen is `#app-lock-overlay`. Do not log in from a test browser: login turns on cloud sync and would write to the real Firestore workspace.

## Live site
GitHub Pages serves `main` (repo root) at https://consultancygroup-eg.github.io/. The QR/share link (`PUBLIC_WEB_URL`) points there, and that is what the user opens on their phone and home laptop.
Every change must be committed and pushed to `main`, or the phone keeps showing the old version. The user expects this without being asked. After pushing, wait for the "pages build and deployment" run to finish. The old ship.place and netlify copies are stale and unused.

## Gotchas
- Re-rendering while the user types drops focus. Cloud snapshot renders go through `renderAllWhenNotTyping`.
- `--bg-surface` is not defined in style.css; use `--bg-card` for solid panels.
- The repo is public, and secrets are present in the docs and app.js. Don't add more.
- Brand: every visual change follows the CG brand (tokens at the top of style.css; the only source is `C:\Users\adm.001\General\CG - Brand Guidelines.pdf`, not the consultancygroup-sa site). Design uses brand colors only; green/red only for data values. Solid gold surfaces use `--primary-fill`; `--primary` is gold text (darker in light mode).
