# «حركة المستخلصات» (progress invoices) in the project status program: done (17 Nov 2026)

Shipped to `consultancygroup-eg/consultancygroup-sa` `main` (commit 3c484dc). Live at https://consultancygroup-eg.github.io/consultancygroup-sa/#extracts

## The accountant's answers (17 Nov)
1. «المستخلصات المرفوعة» is the amount **before VAT**. Current Projects shows «الضريبة 15%» and «الإجمالي بالضريبة» next to it, then «المبالغ المحصلة».
   - **Correction (17 Nov, later):** the accountant confirmed that «المبالغ المحصلة» is stored **before VAT** too. For Rajhi, 6,733,784 paid incl. VAT ÷ 1.15 = 5,855,464 collected.
   - So «المبالغ غير المحصلة» = invoiced − collected (both before VAT). The collection rate = collected ÷ invoiced.
2. Option (b): enter all the old invoices. Once a project has at least one invoice, its `invoiced` (sum before VAT) and `collected` (sum of «المنصرف») come from the table only, and are read-only in the project form.
3. «المنصرف» adds to «المبالغ المحصلة».
   - It is entered **including VAT**, as in the Excel. The project's `collected` = sum of paid ÷ 1.15.
- Also requested and built: click any invoice to edit or delete it; the table header and totals row stay in view while scrolling.

## How it is stored
- The invoices sit in the project's own Firestore doc (`cgsa_projects`) as an `extracts` array, plus `exAdded`. Each row has `{id, ot, b, up, from, to, amt, paid, coll}`. Dates are `YYYY-MM-DD`; `coll` can also be text such as «تم التحصيل».
- External projects are docs with `stage:'external'`, so they never appear in the 3 project lists. Backup and restore include them automatically.

## Open
- The Rajhi Mosque history (64 invoices) has not been entered yet. It is in the mockup artifact https://claude.ai/artifact/8jsaLcEZrAkc1ysRdEjtpU. Ask the facilities manager before writing it to the real Firestore.
- Entering all 64 Rajhi invoices gives invoiced 7,045,605.60 and collected 5,855,464.35. Both are the same as the program's current figures, so entering them doesn't change the totals (tested on a fake copy).
- The contract value is read from the project itself (Rajhi = 6,974,000). The 3,792,000 in the mockup was wrong.
