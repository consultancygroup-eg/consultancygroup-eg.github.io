# ⏸ On hold: «حركة المستخلصات» (progress invoices) for the project status program

**Status (16 Nov 2026):** on hold until the accountant answers 3 questions. The facilities manager said they'd bring the answers the next day (17 Nov 2026).
**At the start of any new session:** ask the facilities manager for the accountant's answers to the 3 questions below, in Egyptian Arabic, before doing anything else on this.
Nothing in the real program has been changed yet.

## Where things are
- **The program:** repo `consultancygroup-eg/consultancygroup-sa`, a single `index.html` served at https://consultancygroup-eg.github.io/consultancygroup-sa/
  - Data is in Firestore collection `cgsa_projects`.
  - Current projects carry these fields: `value`, `change`, `invoiced` (المستخلصات المرفوعة), `collected` (المبالغ المحصلة).
- **The approved design (mockup):** private artifact https://claude.ai/artifact/8jsaLcEZrAkc1ysRdEjtpU (version 4)
  - Read it with the Artifact tool (`action: "read"`).
  - It has all 64 Rajhi Mosque extracts from the facilities manager's Excel file.
  - The client's numbers are deliberately kept out of this public repo.

## The 3 open questions (for the accountant)
1. What gets added to «المستخلصات المرفوعة»: the amount **before VAT** or the **total including VAT**? Recommended: before VAT, because the contract value is entered before VAT.
2. Old extracts:
   - **(a)** Keep the current `invoiced` number and add each new extract on top of it. This is the facilities manager's own example: 1,000,000 + 500,000 = 1,500,000. The mockup shows this as "X كانت موجودة + Y من هنا".
   - **(b)** Enter all the history, and compute `invoiced` from the table only.
   - Using (a) and then entering the history would count the old extracts twice.
3. Should «المنصرف» (amount paid) also add to «المبالغ المحصلة» on the current project?

## What the facilities manager agreed in the mockup
- **Placement:** a new nav item «حركة المستخلصات», directly under «المشاريع الجارية».
- **Tabs at the top:**
  - «المشاريع»: a list of project names. Click one to open its extracts. «→ رجوع لقايمة المشاريع» goes back to the list.
  - «+ إضافة مشروع», with two choices:
    - «من المشاريع الجارية»: pick from the current projects. Client, contract number, signing date and value fill in automatically, and the project is linked.
    - «مشروع من الخارج»: entered by hand, not linked.
  - The save button is «حفظ وابدأ اكتب المستخلصات»: it opens the project with «إضافة مستخلص» already open.
- **Project page:** the same columns as the Excel file:
  - م، البيان، تاريخ رفع المستخلص، فترة من/إلى
  - المستخلص، الضريبة 15%، الإجمالي، المنصرف، الرصيد
  - تاريخ التحصيل
  - A totals row at the bottom.
  - Info cards: contract signing date, contract value before VAT, and the number of extracts.
  - A box showing the link to the current project and its «المستخلصات المرفوعة».
- **«+ إضافة مستخلص»:**
  - Fields: type (مستخلص شهري / وقت إضافي (أوفر تايم)), statement (auto «مستخلص رقم N+1»), upload date, period, and amount before VAT. VAT and total are calculated automatically. Then paid amount and collection date.
  - A live preview: old invoiced + amount → new invoiced.
  - The «حفظ وإضافة التالي» button moves on to the next number and the next month's period.
- **«اضافى» in the Excel file means overtime (وقت إضافي).** Those rows are shown as «وقت إضافي · أوفر تايم» with no period. Their totals are shown separately from the monthly extracts.
- **⬇ PDF / ⬇ Excel:**
  - Open a picker to choose the format, then one, several or all projects.
  - Layout choice: each project on its own page or sheet with a summary first, or a summary only.
- **Dates:** keep exactly what is in the Excel file and what the facilities manager confirmed. **Never "correct" dates.** The confirmed ones:
  - Extract 20: uploaded 2023/01/11, period 2023/01/10 to 2023/10/31.
  - Extract 22: uploaded 2024/01/01, period 2023/01/12 to 2023/12/31.
  - Extract 23: uploaded 2024/01/02, period 2024/01/01 to 2024/01/31.
  - Extract 24: uploaded 2024/03/03, period 2024/02/01 to 2024/02/29.
  - Extract 34: uploaded 2024/01/27, period 2024/12/01 to 2024/12/31.
- **Brand:** same look as the program (dark rail, gold, Tajawal).

## Access note
- `add_repo` for `consultancygroup-sa` was denied by the permission check on 16 Nov.
- A public clone works for reading. Pushing will need the repo attached, so ask the facilities manager to approve it.
