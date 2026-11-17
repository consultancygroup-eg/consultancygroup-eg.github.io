# Project status program (`consultancygroup-sa`): handover

Latest status: **17 Nov 2026, end of session.** Nothing is pending or waiting on anyone.

## Where things are
- **Repo:** `consultancygroup-eg/consultancygroup-sa`.
  - It is a single `index.html`, served by GitHub Pages from `main` at https://consultancygroup-eg.github.io/consultancygroup-sa/
  - Every change is pushed to `main`, then wait for the "pages build and deployment" run to finish.
  - Attach it with `add_repo` (push access was approved on 17 Nov).
- **Data:** Firestore project `consualtancy-group`.
  - Collection `cgsa_projects` holds the projects; `cgsa_settings/lists` holds the lists.
  - There is no login, so test pages write to the real data. Test with a fake `firebase` (see "Testing").
- **Desktop copy («نسخة سطح المكتب»):** `index.html` with `const ADMIN = true;`.
  - The facilities manager keeps it in `C:\Users\adm.001\General`, and it does **not** update by itself.
  - After every program change, regenerate it and send it with SendUserFile. Tell them to save it in General over the old file, and to pass it on to any colleague who works from a copy of the file.
- **Colleagues:** a colleague works from a copy of this file in his Downloads.
  - Data edits reach everyone instantly. Program changes reach his copy only through a new file.
  - Don't let anyone use a "Save page as" copy of the website. It shows all zeros and «تعذّر الوصول للبيانات», because it can't connect.
- **Where files go:** every file for this program (the desktop copy, exports, backups) goes in the General folder.

## Done on 17 Nov 2026 (commits 3c484dc → ff6b4a1)
1. **«حركة المستخلصات»** is a new menu item under «المشاريع الجارية» (`#extracts`).
   - **Project list:**
     - A tab to add a project, either from Current Projects (linked) or an external one.
     - A per-project table: م, البيان, تاريخ رفع المستخلص, الفترة من/إلى, المستخلص, الضريبة 15%, الإجمالي, المنصرف, الرصيد, تاريخ التحصيل, with a totals row.
     - Info cards, a box showing the link to the current project, and separate totals for monthly and overtime («وقت إضافي · أوفر تايم») invoices.
   - **Adding and editing invoices:**
     - «+ إضافة مستخلص» opens a form with live VAT and total, and a preview of what changes in Current Projects.
     - «حفظ وإضافة التالي» moves on to the next number and month.
     - Click any invoice row to edit or delete it.
   - **Managing a project:** edit an external project's details, or remove a project from the list.
   - **⬇ PDF / ⬇ Excel:** choose the projects; the layout is either each project separately with a summary first, or a summary only.
     - `pdfRender(sections, filename)` now builds multi-section PDFs. `exportPdf()` uses it too.
2. **The accountant's rules** (confirmed 17 Nov):
   - «المستخلصات المرفوعة» and «المبالغ المحصلة» are both **before VAT**.
   - «الضريبة 15%» and «الإجمالي بالضريبة» are shown beside them in Current Projects, the dashboard, the project drawer and backups.
   - «المبالغ غير المحصلة» = invoiced − collected. The collection rate = collected ÷ invoiced.
   - «المنصرف» is entered **incl. VAT**, as in their Excel. The project's `collected` = Σpaid ÷ 1.15. Proof: Rajhi 6,733,784 ÷ 1.15 = 5,855,464, which is the figure the accountant has.
   - **Option (b):** once a project has at least one invoice, its `invoiced` and `collected` come from the table only. They are read-only in the project form, and `save()` doesn't overwrite them.
3. **Rajhi Mosque** (`cgsa_projects/c2`): with approval, the 64 invoices from the Excel were written to the real Firestore (row ids x001–x064).
   - Dates are exactly as in the Excel and as confirmed. **Never "correct" dates.**
   - The project now shows invoiced 7,045,605.60 and collected 5,855,464.35, the same as before apart from cents. The contract value is 6,974,000. The 3,792,000 in the old mockup was wrong.
   - The doc as it was before the write was saved only in the session scratchpad, which is temporary.
4. **Layout:**
   - Tables scroll inside their own box, so the gold header and the totals row stay in view.
   - Date columns are centred everywhere, Excel included.
   - Project lists (`table.list`) fit the screen width like the PDF: headers wrap and cells are compact. Horizontal scroll is kept only below 860px.

## How the invoices are stored
- Each project doc has an `extracts` array and `exAdded`. A row is `{id, ot, b, up, from, to, amt, paid, coll}`.
  - Dates are `YYYY-MM-DD`.
  - `coll` can also be text («تم التحصيل»). The edit form keeps the text unless a date is entered.
  - For overtime rows, `ot:true`, and `b`, `from` and `to` are empty.
- External projects are docs with `stage:'external'`, so they don't appear in the 3 lists or the dashboard. Backup and restore include them.
- Removing a linked project deletes `extracts` and `exAdded` with `FieldValue.delete()`, and keeps the invoiced and collected figures. Removing an external project sets `deleted:true`.

## Testing (never touch the real data)
- Serve the repo over `http://localhost`.
- In Playwright:
  - Route `**/firebase-app-compat.js` to a fake in-memory `firebase`, and seed it with a read-only REST copy of `cgsa_projects`.
  - Route `firebase-firestore-compat.js` to an empty body.
  - Abort `firestore.googleapis.com`.
- cdnjs and gstatic are blocked in the cloud container. Route them to local npm copies: `jspdf@2.5.1`, `html2canvas@1.4.1`, `exceljs@4.4.0`, `firebase@10.12.2`.
- Reading the real data through the real SDK works with `chromium.launch({proxy:{server:HTTPS_PROXY}})` and `ignoreHTTPSErrors`. Only read.

## Ideas not requested yet
- The desktop copy could just open the website, so it updates by itself; it was offered to the facilities manager on 17 Nov, with no answer yet. A colleague also uses a file copy.
- An «المحصل بالضريبة» column in Current Projects, if they ever want collections shown incl. VAT too.
