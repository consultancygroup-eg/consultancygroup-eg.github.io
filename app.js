const COMPANY_LOGO_LIGHT_URI = 'data:image/png;base64,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';
const COMPANY_LOGO_DARK_URI = 'data:image/png;base64,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';
/**
 * Buffet & Hygiene Management System - Executive Desktop Edition 2026
 * Core Application Engine & Data Controller
 */

// --- INITIAL CONSTANTS & SEED DATA ---
const SEED_INVENTORY = [
    { id: 1, name: 'مناديل الحمامات', cat: 'مناشف ومناديل', unit: 'عدد', total: 1194, minLimit: 100, date: '2026-10-19' },
    { id: 2, name: 'مناديل الوضوء', cat: 'مناشف ومناديل', unit: 'عدد', total: 485, minLimit: 50, date: '2026-10-19' },
    { id: 3, name: 'مناديل المكتب', cat: 'مناشف ومناديل', unit: 'عدد', total: 350, minLimit: 30, date: '2026-10-19' },
    { id: 4, name: 'ديتول', cat: 'منظفات ومطهرات', unit: 'علبة', total: 34, minLimit: 5, date: '2026-10-19' },
    { id: 5, name: 'صابون يد', cat: 'منظفات ومطهرات', unit: 'لتر', total: 40, minLimit: 10, date: '2026-10-19' },
    { id: 6, name: 'ملمع زجاج', cat: 'منظفات ومطهرات', unit: 'عدد', total: 29, minLimit: 5, date: '2026-10-19' },
    { id: 7, name: 'بلدج اخشاب', cat: 'منظفات ومطهرات', unit: 'عدد', total: 25, minLimit: 5, date: '2026-10-19' },
    { id: 8, name: 'كلور', cat: 'منظفات ومطهرات', unit: 'عدد', total: 12, minLimit: 3, date: '2026-10-19' },
    { id: 9, name: 'صابون ارضيات', cat: 'منظفات ومطهرات', unit: 'لتر', total: 45, minLimit: 5, date: '2026-10-19' },
    { id: 10, name: 'صابون بريل', cat: 'منظفات ومطهرات', unit: 'لتر', total: 30, minLimit: 5, date: '2026-10-19' },
    { id: 11, name: 'ينسون', cat: 'مشروبات وضيافة', unit: 'عبوة', total: 6, minLimit: 2, date: '2026-10-19' },
    { id: 12, name: 'كركدية', cat: 'مشروبات وضيافة', unit: 'عبوة', total: 6, minLimit: 2, date: '2026-10-19' },
    { id: 13, name: 'شاي اخضر', cat: 'مشروبات وضيافة', unit: 'عبوة', total: 10, minLimit: 2, date: '2026-10-19' },
    { id: 14, name: 'أكياس زبالة', cat: 'أدوات ونظافة', unit: 'كيلو', total: 15, minLimit: 5, date: '2026-10-19' },
    { id: 15, name: 'قهوه', cat: 'مشروبات وضيافة', unit: 'ثمن', total: 160, minLimit: 20, date: '2026-10-19' },
    { id: 16, name: 'سكر', cat: 'مشروبات وضيافة', unit: 'كيلو', total: 60, minLimit: 10, date: '2026-10-19' },
    { id: 17, name: 'شاى ليبتون', cat: 'مشروبات وضيافة', unit: 'ربع', total: 10, minLimit: 2, date: '2026-10-19' },
    { id: 18, name: 'شرشوبة', cat: 'أدوات ونظافة', unit: 'عدد', total: 6, minLimit: 2, date: '2026-10-19' },
    { id: 19, name: 'فوط للنظافة', cat: 'أدوات ونظافة', unit: 'عدد', total: 24, minLimit: 5, date: '2026-10-19' },
    { id: 20, name: 'مقشه', cat: 'أدوات ونظافة', unit: 'عدد', total: 5, minLimit: 1, date: '2026-10-19' },
    { id: 21, name: 'معطر جو', cat: 'منظفات ومطهرات', unit: 'عدد', total: 18, minLimit: 3, date: '2026-10-19' },
    { id: 22, name: 'هاربيك منظف', cat: 'منظفات ومطهرات', unit: 'عدد', total: 17, minLimit: 2, date: '2026-10-19' },
    { id: 23, name: 'ريد حشرات', cat: 'منظفات ومطهرات', unit: 'عدد', total: 8, minLimit: 2, date: '2026-10-19' },
    { id: 24, name: 'يد مقشة', cat: 'أدوات ونظافة', unit: 'عدد', total: 5, minLimit: 1, date: '2026-10-19' },
    { id: 25, name: 'ليفة اسفينج', cat: 'أدوات ونظافة', unit: 'عدد', total: 35, minLimit: 5, date: '2026-10-19' },
    { id: 26, name: 'ليفه معدن', cat: 'أدوات ونظافة', unit: 'عدد', total: 10, minLimit: 2, date: '2026-10-19' }
];

const SEED_RECIPIENTS = [
    'محمد عبد النبي',
    'حسن محمد حسن',
    'أحمد عبد المجيد',
    'احمد ابراهيم',
    'شريهان شعبان',
    'زيناهم نجاح',
    'زبيدة مصطفى',
    'محمود جمال',
    'محمد مشاحيت'
];

const SEED_TRANSACTIONS = [
    { id: 1793799373668, itemId: 15, qty: 1, floor: 'الدور التاسع', date: '2026-11-03', recipient: 'حسن محمد حسن' },
    { id: 1793799373655, itemId: 2, qty: 3, floor: 'الدور التاسع', date: '2026-11-03', recipient: 'حسن محمد حسن' },
    { id: 1793799373654, itemId: 1, qty: 6, floor: 'الدور التاسع', date: '2026-11-03', recipient: 'حسن محمد حسن' },
    { id: 1793799338470, itemId: 25, qty: 4, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338466, itemId: 21, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338465, itemId: 20, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338464, itemId: 19, qty: 3, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338463, itemId: 18, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338461, itemId: 16, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338459, itemId: 14, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338449, itemId: 4, qty: 1, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338447, itemId: 2, qty: 22, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799338446, itemId: 1, qty: 40, floor: 'الدور التاسع', date: '2026-11-01', recipient: 'حسن محمد حسن' },
    { id: 1793799097911, itemId: 17, qty: 1, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799097910, itemId: 16, qty: 1, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799097909, itemId: 15, qty: 2, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799097899, itemId: 5, qty: 5, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799097896, itemId: 2, qty: 4, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799097895, itemId: 1, qty: 12, floor: 'الدور الثامن', date: '2026-11-03', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003183, itemId: 25, qty: 3, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003182, itemId: 24, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003179, itemId: 21, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003177, itemId: 19, qty: 4, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003176, itemId: 18, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003175, itemId: 17, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003174, itemId: 16, qty: 9, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003173, itemId: 15, qty: 2, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003172, itemId: 14, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003171, itemId: 13, qty: 1, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003168, itemId: 10, qty: 5, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003167, itemId: 9, qty: 5, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003166, itemId: 8, qty: 2, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003162, itemId: 4, qty: 4, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003161, itemId: 3, qty: 44, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003160, itemId: 2, qty: 40, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793799003159, itemId: 1, qty: 120, floor: 'الدور الثامن', date: '2026-11-01', recipient: 'أحمد عبد المجيد' },
    { id: 1793798912589, itemId: 15, qty: 1, floor: 'الدور السابع', date: '2026-11-04', recipient: 'محمد عبد النبي' },
    { id: 1793798912576, itemId: 2, qty: 4, floor: 'الدور السابع', date: '2026-11-04', recipient: 'محمد عبد النبي' },
    { id: 1793798912575, itemId: 1, qty: 12, floor: 'الدور السابع', date: '2026-11-04', recipient: 'محمد عبد النبي' },
    { id: 1793798895300, itemId: 22, qty: 2, floor: 'الدور السابع', date: '2026-11-03', recipient: 'محمد عبد النبي' },
    { id: 1793798895293, itemId: 15, qty: 2, floor: 'الدور السابع', date: '2026-11-03', recipient: 'محمد عبد النبي' },
    { id: 1793798895283, itemId: 5, qty: 5, floor: 'الدور السابع', date: '2026-11-03', recipient: 'محمد عبد النبي' },
    { id: 1793798895280, itemId: 2, qty: 4, floor: 'الدور السابع', date: '2026-11-03', recipient: 'محمد عبد النبي' },
    { id: 1793798895279, itemId: 1, qty: 10, floor: 'الدور السابع', date: '2026-11-03', recipient: 'محمد عبد النبي' },
    { id: 1793798847865, itemId: 19, qty: 4, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847864, itemId: 18, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847863, itemId: 17, qty: 2, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847861, itemId: 15, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847860, itemId: 14, qty: 2, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847859, itemId: 13, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847858, itemId: 12, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847857, itemId: 11, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847856, itemId: 10, qty: 5, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847855, itemId: 9, qty: 5, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847854, itemId: 8, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847853, itemId: 7, qty: 2, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847852, itemId: 6, qty: 1, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847850, itemId: 4, qty: 3, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847849, itemId: 3, qty: 36, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847848, itemId: 2, qty: 40, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798847847, itemId: 1, qty: 102, floor: 'الدور السابع', date: '2026-11-01', recipient: 'محمد عبد النبي' },
    { id: 1793798761998, itemId: 16, qty: 1, floor: 'الدور السادس', date: '2026-11-04', recipient: 'احمد ابراهيم' },
    { id: 1793798761997, itemId: 15, qty: 2, floor: 'الدور السادس', date: '2026-11-04', recipient: 'احمد ابراهيم' },
    { id: 1793798761984, itemId: 2, qty: 4, floor: 'الدور السادس', date: '2026-11-04', recipient: 'احمد ابراهيم' },
    { id: 1793798761983, itemId: 1, qty: 12, floor: 'الدور السادس', date: '2026-11-04', recipient: 'احمد ابراهيم' },
    { id: 1793798741790, itemId: 16, qty: 1, floor: 'الدور السادس', date: '2026-11-03', recipient: 'احمد ابراهيم' },
    { id: 1793798741789, itemId: 15, qty: 2, floor: 'الدور السادس', date: '2026-11-03', recipient: 'احمد ابراهيم' },
    { id: 1793798741776, itemId: 2, qty: 4, floor: 'الدور السادس', date: '2026-11-03', recipient: 'احمد ابراهيم' },
    { id: 1793798741775, itemId: 1, qty: 12, floor: 'الدور السادس', date: '2026-11-03', recipient: 'احمد ابراهيم' },
    { id: 1793798718071, itemId: 25, qty: 6, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718068, itemId: 22, qty: 2, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718067, itemId: 21, qty: 2, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718065, itemId: 19, qty: 4, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718064, itemId: 18, qty: 1, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718062, itemId: 16, qty: 7, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718061, itemId: 15, qty: 2, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718060, itemId: 14, qty: 2, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718059, itemId: 13, qty: 1, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718058, itemId: 12, qty: 1, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718056, itemId: 10, qty: 5, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718052, itemId: 6, qty: 1, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718051, itemId: 5, qty: 5, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718050, itemId: 4, qty: 3, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718049, itemId: 3, qty: 32, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718048, itemId: 2, qty: 40, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798718047, itemId: 1, qty: 106, floor: 'الدور السادس', date: '2026-11-01', recipient: 'احمد ابراهيم' },
    { id: 1793798613238, itemId: 16, qty: 1, floor: 'الدور الخامس', date: '2026-11-03', recipient: 'محمد مشاحيت' },
    { id: 1793798613237, itemId: 15, qty: 2, floor: 'الدور الخامس', date: '2026-11-03', recipient: 'محمد مشاحيت' },
    { id: 1793798613224, itemId: 2, qty: 4, floor: 'الدور الخامس', date: '2026-11-03', recipient: 'محمد مشاحيت' },
    { id: 1793798613223, itemId: 1, qty: 10, floor: 'الدور الخامس', date: '2026-11-03', recipient: 'محمد مشاحيت' },
    { id: 1793798574707, itemId: 21, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574705, itemId: 19, qty: 5, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574704, itemId: 18, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574703, itemId: 17, qty: 2, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574702, itemId: 16, qty: 5, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574701, itemId: 15, qty: 2, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574700, itemId: 14, qty: 2, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574699, itemId: 13, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574698, itemId: 12, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574695, itemId: 9, qty: 5, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574693, itemId: 7, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574692, itemId: 6, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574691, itemId: 5, qty: 10, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574690, itemId: 4, qty: 1, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574689, itemId: 3, qty: 104, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574688, itemId: 2, qty: 36, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798574687, itemId: 1, qty: 112, floor: 'الدور الخامس', date: '2026-11-01', recipient: 'محمد مشاحيت' },
    { id: 1793798481614, itemId: 16, qty: 4, floor: 'الدور الرابع', date: '2026-11-04', recipient: 'محمود جمال' },
    { id: 1793798481613, itemId: 15, qty: 2, floor: 'الدور الرابع', date: '2026-11-04', recipient: 'محمود جمال' },
    { id: 1793798481600, itemId: 2, qty: 7, floor: 'الدور الرابع', date: '2026-11-04', recipient: 'محمود جمال' },
    { id: 1793798459119, itemId: 16, qty: 1, floor: 'الدور الرابع', date: '2026-11-03', recipient: 'محمود جمال' },
    { id: 1793798459118, itemId: 15, qty: 2, floor: 'الدور الرابع', date: '2026-11-03', recipient: 'محمود جمال' },
    { id: 1793798459112, itemId: 9, qty: 5, floor: 'الدور الرابع', date: '2026-11-03', recipient: 'محمود جمال' },
    { id: 1793798459105, itemId: 2, qty: 7, floor: 'الدور الرابع', date: '2026-11-03', recipient: 'محمود جمال' },
    { id: 1793798459104, itemId: 1, qty: 10, floor: 'الدور الرابع', date: '2026-11-03', recipient: 'محمود جمال' },
    { id: 1793798143885, itemId: 22, qty: 4, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143884, itemId: 21, qty: 3, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143882, itemId: 19, qty: 2, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143881, itemId: 18, qty: 1, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143880, itemId: 17, qty: 2, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143879, itemId: 16, qty: 5, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143878, itemId: 15, qty: 4, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143877, itemId: 14, qty: 3, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143876, itemId: 13, qty: 2, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143875, itemId: 12, qty: 1, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143873, itemId: 10, qty: 5, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143872, itemId: 9, qty: 5, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143870, itemId: 7, qty: 5, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143868, itemId: 5, qty: 5, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143867, itemId: 4, qty: 2, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143866, itemId: 3, qty: 86, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143865, itemId: 2, qty: 57, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' },
    { id: 1793798143864, itemId: 1, qty: 72, floor: 'الدور الرابع', date: '2026-11-01', recipient: 'محمود جمال' }
];

// --- SEED COMPANY FURNITURE INVENTORY (FLOORS 4 TO 9) — HIERARCHICAL WBS BREAKDOWN & EXACT SIZES ---
const SEED_FURNITURE = [
    // 1. الأثاث المكتبي
    // 1.1 المكاتب
    { id: 101, code: '1.1.1', name: 'مكتب مدير الفرع', size: '180×80', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 102, code: '1.1.2', name: 'مكتب مدير', size: '180×80', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 103, code: '1.1.3', name: 'مكتب موظف', size: '160×60', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 104, code: '1.1.4', name: 'مكتب موظف 140', size: '140×70', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 105, code: '1.1.5', name: 'مكتب موظف 120', size: '120×60', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 143, code: '1.1.6', name: 'مكتب استقبال', size: '180×80', cat: '1.1 المكاتب', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 1.2 الكراسي
    { id: 106, code: '1.2.1', name: 'كرسي مدير الفرع جلد', size: '', cat: '1.2 الكراسي', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 107, code: '1.2.2', name: 'كرسي مدير جلد', size: '', cat: '1.2 الكراسي', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 108, code: '1.2.3', name: 'كرسي موظف', size: '', cat: '1.2 الكراسي', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 109, code: '1.2.4', name: 'كرسي انتظار', size: '', cat: '1.2 الكراسي', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 110, code: '1.2.5', name: 'أنتريه ضيافة', size: '', cat: '1.2 الكراسي', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 1.3 ترابيزات اجتماعات
    { id: 111, code: '1.3.1', name: 'ترابيزة اجتماعات كبيرة', size: '240×120', cat: '1.3 ترابيزات اجتماعات', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 112, code: '1.3.2', name: 'ترابيزة اجتماعات صغيرة', size: '180×90', cat: '1.3 ترابيزات اجتماعات', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 1.4 الدواليب / اللوكر
    { id: 113, code: '1.4.1', name: 'دولاب حفظ ملفات كبير', size: '200×100', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 114, code: '1.4.2', name: 'دولاب ملفات متوسط', size: '120×80', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 115, code: '1.4.3', name: 'لوكر موظفين (Locker)', size: '180×90', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 144, code: '1.4.4', name: 'دولاب مكتبي', size: '1.70×2.00', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 145, code: '1.4.5', name: 'دولاب مكتبي', size: '1.70×2.05', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 146, code: '1.4.6', name: 'دولاب مكتبي', size: '1.70×2.10', cat: '1.4 الدواليب / اللوكر', mainGroup: '1 - الأثاث المكتبي', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 2. الأجهزة الكهربائية
    // 2.1 التكييفات
    { id: 116, code: '2.1.1', name: 'تكييف يونيون اير 1.5 حصان', size: '1.5 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 117, code: '2.1.2', name: 'تكييف يونيون اير 2.25 حصان', size: '2.25 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 118, code: '2.1.3', name: 'تكييف يونيون اير 3 حصان', size: '3 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 119, code: '2.1.4', name: 'تكييف كارير 1.5 حصان', size: '1.5 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 120, code: '2.1.5', name: 'تكييف كارير 2.25 حصان', size: '2.25 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 121, code: '2.1.6', name: 'تكييف كارير 3 حصان', size: '3 حصان', cat: '2.1 التكييفات', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 2.2 الشاشات والإضاءة
    { id: 122, code: '2.2.1', name: 'شاشة عرض', size: '65 بوصة', cat: '2.2 الشاشات والإضاءة', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 123, code: '2.2.2', name: 'كشاف كبير', size: '60×60 سم', cat: '2.2 الشاشات والإضاءة', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 124, code: '2.2.3', name: 'كشاف صغير', size: '20 سم', cat: '2.2 الشاشات والإضاءة', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 2.3 أجهزة البوفيه والمرافق
    { id: 125, code: '2.3.1', name: 'ثلاجة بوفيه', size: '18 قدم', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 126, code: '2.3.2', name: 'ميكروويف', size: '34 لتر', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 127, code: '2.3.3', name: 'غلاية مياه (كاتل)', size: '1.7 لتر', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 128, code: '2.3.4', name: 'ماكينة قهوة', size: '', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 129, code: '2.3.5', name: 'سخان مياه', size: '50 لتر', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 130, code: '2.3.6', name: 'شفاط هواء', size: '25×25 سم', cat: '2.3 أجهزة البوفيه والمرافق', mainGroup: '2 - الأجهزة الكهربائية', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 3. الأبواب والشبابيك والستائر
    { id: 131, code: '3.1.1', name: 'أبواب خشبية', size: '210×90 سم', cat: '3.1 الأبواب والشبابيك والستائر', mainGroup: '3 - الأبواب والشبابيك والستائر', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 132, code: '3.1.2', name: 'ستائر', size: '250×180 سم', cat: '3.1 الأبواب والشبابيك والستائر', mainGroup: '3 - الأبواب والشبابيك والستائر', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 133, code: '3.1.3', name: 'شباك الوميتال', size: '120×120 سم', cat: '3.1 الأبواب والشبابيك والستائر', mainGroup: '3 - الأبواب والشبابيك والستائر', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 134, code: '3.1.4', name: 'باب بلكونه الوميتال', size: '220×100 سم', cat: '3.1 الأبواب والشبابيك والستائر', mainGroup: '3 - الأبواب والشبابيك والستائر', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },

    // 4. أدوات السلامة والنظافة
    { id: 135, code: '4.1.1', name: 'طفايات حريق', size: '6 كيلو', cat: '4.1 طفايات الحريق والنظافة', mainGroup: '4 - أدوات السلامة والنظافة', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 136, code: '4.1.2', name: 'باسكت زباله للموظفين', size: '12 لتر', cat: '4.1 طفايات الحريق والنظافة', mainGroup: '4 - أدوات السلامة والنظافة', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} },
    { id: 137, code: '4.1.3', name: 'باسكت زباله مجمع', size: '30 لتر', cat: '4.1 طفايات الحريق والنظافة', mainGroup: '4 - أدوات السلامة والنظافة', floors: { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 }, notes: {} }
];

const CANONICAL_FURNITURE_GROUPS = [
    '1.1 المكاتب',
    '1.2 الكراسي',
    '1.3 ترابيزات اجتماعات',
    '1.4 الدواليب / اللوكر',
    '2.1 التكييفات',
    '2.2 الشاشات والإضاءة',
    '2.3 أجهزة البوفيه والمرافق',
    '3.1 الأبواب والشبابيك والستائر',
    '4.1 طفايات الحريق والنظافة'
];

function getMainGroupForSubcat(subcat) {
    const s = String(subcat || '').trim();
    if (s.startsWith('1.')) return '1 - الأثاث المكتبي';
    if (s.startsWith('2.')) return '2 - الأجهزة الكهربائية';
    if (s.startsWith('3.')) return '3 - الأبواب والشبابيك والستائر';
    if (s.startsWith('4.')) return '4 - أدوات السلامة والنظافة';
    return '1 - الأثاث المكتبي';
}

function autoDetectFurnitureCategory(nameStr) {
    const n = String(nameStr || '').trim().toLowerCase();
    if (!n) return null;
    if (n.includes('مكتب') || n.includes('كاونتر') || n.includes('استقبال')) return '1.1 المكاتب';
    if (n.includes('كرسي') || n.includes('كراسي') || n.includes('انتريه') || n.includes('أنتريه') || n.includes('كنب') || n.includes('فوتيه')) return '1.2 الكراسي';
    if (n.includes('ترابيز') || n.includes('طاول') || n.includes('اجتماع')) return '1.3 ترابيزات اجتماعات';
    if (n.includes('دولاب') || n.includes('لوكر') || n.includes('locker') || n.includes('وحدة ادراج') || n.includes('وحدة أدراج') || n.includes('مكتبة')) return '1.4 الدواليب / اللوكر';
    if (n.includes('تكييف') || n.includes('مكيف') || n.includes('كارير') || n.includes('يونيون')) return '2.1 التكييفات';
    if (n.includes('شاش') || n.includes('تلفزيون') || n.includes('كشاف') || n.includes('لمب') || n.includes('سبوت') || n.includes('إضاء')) return '2.2 الشاشات والإضاءة';
    if (n.includes('ثلاج') || n.includes('ميكرو') || n.includes('مايكرو') || n.includes('غلاي') || n.includes('كاتل') || n.includes('كاتيل') || n.includes('قهو') || n.includes('سخان') || n.includes('شفاط') || n.includes('مبرد') || n.includes('فلتر')) return '2.3 أجهزة البوفيه والمرافق';
    if (n.includes('باب') || n.includes('أبواب') || n.includes('ابواب') || n.includes('شباك') || n.includes('شبابيك') || n.includes('ستار') || n.includes('ستائر') || n.includes('الوميتال') || n.includes('ألوميتال')) return '3.1 الأبواب والشبابيك والستائر';
    if (n.includes('طفاي') || n.includes('حريق') || n.includes('باسكت') || n.includes('سلة') || n.includes('زبال')) return '4.1 طفايات الحريق والنظافة';
    return null;
}

function normalizeFurnitureCategory(catStr, nameStr) {
    const c = String(catStr || '').trim();
    if (CANONICAL_FURNITURE_GROUPS.includes(c)) return c;
    // Check by prefix or keyword in catStr
    if (c.startsWith('1.1') || c.includes('مكاتب')) return '1.1 المكاتب';
    if (c.startsWith('1.2') || c.includes('كراسي')) return '1.2 الكراسي';
    if (c.startsWith('1.3') || c.includes('اجتماعات') || c.includes('ترابيزات') || c.includes('طاولات')) return '1.3 ترابيزات اجتماعات';
    if (c.startsWith('1.4') || c.includes('دواليب') || c.includes('لوكر')) return '1.4 الدواليب / اللوكر';
    if (c.startsWith('2.1') || c.includes('تكييف')) return '2.1 التكييفات';
    if (c.startsWith('2.2') || c.includes('شاشات') || c.includes('إضاءة')) return '2.2 الشاشات والإضاءة';
    if (c.startsWith('2.3') || c.includes('بوفيه') || c.includes('مطبخ')) return '2.3 أجهزة البوفيه والمرافق';
    if (c.startsWith('3.1') || c.includes('أبواب') || c.includes('شبابيك') || c.includes('ستائر')) return '3.1 الأبواب والشبابيك والستائر';
    if (c.startsWith('3.2') || c.startsWith('4.1') || c.includes('سلامة') || c.includes('طفاي') || c.includes('نظافة')) return '4.1 طفايات الحريق والنظافة';

    const byName = autoDetectFurnitureCategory(nameStr);
    if (byName) return byName;
    return '1.1 المكاتب';
}

function recalculateAllFurnitureCodes(sortByGroups = false) {
    if (!Array.isArray(furnitureInventory)) return;
    furnitureInventory.forEach(item => {
        if (!item) return;
        item.cat = normalizeFurnitureCategory(item.cat, item.name);
        item.mainGroup = getMainGroupForSubcat(item.cat);
    });
    if (sortByGroups) {
        const grouped = [];
        CANONICAL_FURNITURE_GROUPS.forEach(g => {
            furnitureInventory.filter(i => i && i.cat === g).forEach(i => grouped.push(i));
        });
        furnitureInventory.filter(i => i && !CANONICAL_FURNITURE_GROUPS.includes(i.cat)).forEach(i => grouped.push(i));
        furnitureInventory = grouped;
    }
    const counters = {};
    furnitureInventory.forEach(item => {
        if (!item) return;
        const prefixMatch = String(item.cat || '1.1').match(/^(\d+\.\d+)/);
        const prefix = prefixMatch ? prefixMatch[1] : '1.1';
        counters[prefix] = (counters[prefix] || 0) + 1;
        item.code = `${prefix}.${counters[prefix]}`;
    });
}

// Numeric and dot-aware comparison for WBS hierarchical codes like 1.1.1 vs 1.1.2 vs 1.2.1
function compareWbsCodes(a, b) {
    const codeA = (a && a.code) ? String(a.code).trim() : '999';
    const codeB = (b && b.code) ? String(b.code).trim() : '999';
    const partsA = codeA.split('.').map(n => parseInt(n, 10) || 0);
    const partsB = codeB.split('.').map(n => parseInt(n, 10) || 0);
    const maxLen = Math.max(partsA.length, partsB.length);
    for (let i = 0; i < maxLen; i++) {
        const valA = partsA[i] !== undefined ? partsA[i] : 0;
        const valB = partsB[i] !== undefined ? partsB[i] : 0;
        if (valA !== valB) return valA - valB;
    }
    return 0;
}

// Upgrade/Migrate furniture list to WBS hierarchical system while preserving existing counts/notes/user-sizes
function migrateFurnitureListToV3WBS(oldList) {
    if (!Array.isArray(oldList) || oldList.length === 0) return JSON.parse(JSON.stringify(SEED_FURNITURE));
    const newList = JSON.parse(JSON.stringify(SEED_FURNITURE));
    oldList.forEach(oldItem => {
        if (!oldItem || !oldItem.name) return;
        const cleanName = oldItem.name.trim();
        const match = newList.find(n => n.id === oldItem.id || n.name === cleanName || n.name.includes(cleanName) || cleanName.includes(n.name));
        if (match) {
            if (oldItem.floors && typeof oldItem.floors === 'object') {
                Object.keys(oldItem.floors).forEach(fl => {
                    const q = Number(oldItem.floors[fl]) || 0;
                    if (q > 0) match.floors[fl] = q;
                });
            }
            if (oldItem.notes && typeof oldItem.notes === 'object') {
                Object.keys(oldItem.notes).forEach(fl => {
                    if (oldItem.notes[fl]) match.notes[fl] = oldItem.notes[fl];
                });
            }
            if (oldItem.size) match.size = oldItem.size;
        } else {
            const detectedCat = normalizeFurnitureCategory(oldItem.cat, oldItem.name);
            newList.push({
                ...oldItem,
                id: Math.max(...newList.map(i => i.id), 150) + 1,
                cat: detectedCat,
                mainGroup: getMainGroupForSubcat(detectedCat),
                size: oldItem.size || '',
                floors: oldItem.floors || {},
                notes: oldItem.notes || {}
            });
        }
    });
    return newList;
}

// --- SEED EXECUTIVE MANAGEMENT HQ INVENTORY WITH WBS CODES & EXACT SIZES ---
const SEED_HQ = [
    { id: 201, code: '1.1.1', name: 'أنتريه سرير', size: '210×90 سم', cat: '1.1 الأثاث والمعيشة الفندقية', qty: 0, status: 'ممتاز', notes: '' },
    { id: 202, code: '1.1.2', name: 'سفرة كبار الزوار', size: '180×90 سم', cat: '1.1 الأثاث والمعيشة الفندقية', qty: 0, status: 'ممتاز', notes: '' },
    { id: 203, code: '1.2.1', name: 'مراتب نوم فندقية', size: '195×160 سم', cat: '1.1 الأثاث والمعيشة الفندقية', qty: 0, status: 'ممتاز', notes: '' },
    { id: 204, code: '1.3.1', name: 'مكتب رئيس مجلس الإدارة', size: '220×100 سم', cat: '1.2 المكاتب والتجهيزات الفاخرة', qty: 0, status: 'ممتاز', notes: '' },
    { id: 205, code: '1.3.2', name: 'ترابيزة اجتماعات كبار الزوار', size: '240×120 سم', cat: '1.2 المكاتب والتجهيزات الفاخرة', qty: 0, status: 'ممتاز', notes: '' },
    { id: 206, code: '1.3.3', name: 'كراسي جلد هيدروليك كبار الزوار', size: '', cat: '1.2 المكاتب والتجهيزات الفاخرة', qty: 0, status: 'ممتاز', notes: '' },
    { id: 207, code: '2.1.1', name: 'غسالة - إل جي أوتوماتيك (LG)', size: '10.5 كجم', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 208, code: '2.1.2', name: 'غسالة - دورين (TwinWash)', size: '12 كجم', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 209, code: '2.1.3', name: 'ثلاجة الإدارة العليا', size: '18 قدم', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 210, code: '2.1.4', name: 'وحدة مطبخ كاملة', size: '3.20 متر', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 211, code: '2.1.5', name: 'مايكروويف وفرن ديجيتال', size: '45 لتر', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 212, code: '2.1.6', name: 'غسالة أطباق', size: '14 فرد', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 213, code: '2.2.1', name: 'شاشة عرض ذكية كبرى', size: '75 بوصة', cat: '2.2 الترفيه والصوتيات', qty: 0, status: 'ممتاز', notes: '' },
    { id: 214, code: '2.2.2', name: 'نظام ساوند سيستم سينمائي', size: '5.1 محيطي', cat: '2.2 الترفيه والصوتيات', qty: 0, status: 'ممتاز', notes: '' },
    { id: 215, code: '2.2.3', name: 'بلاي ستيشن 5 (PlayStation 5)', size: '1TB', cat: '2.2 الترفيه والصوتيات', qty: 0, status: 'ممتاز', notes: '' },
    { id: 216, code: '2.3.1', name: 'تكييف مقر الإدارة', size: '3 حصان', cat: '2.1 الأجهزة الكهربائية والمطبخ', qty: 0, status: 'ممتاز', notes: '' },
    { id: 217, code: '3.1.1', name: 'شباك الوميتال عازل للصوت', size: '140×140 سم', cat: '3.1 الديكور والأعمال المعمارية', qty: 0, status: 'ممتاز', notes: '' },
    { id: 219, code: '3.1.2', name: 'ستائر مقر الإدارة الفاخرة', size: '280×220 سم', cat: '3.1 الديكور والأعمال المعمارية', qty: 0, status: 'ممتاز', notes: '' },
    { id: 218, code: '3.2.1', name: 'سجاد وموكيت فاخر', size: '3×2 متر', cat: '3.1 الديكور والأعمال المعمارية', qty: 0, status: 'ممتاز', notes: '' }
];

// Helper to ensure updated categories & structure without overwriting user-entered sizes or quantities
function syncLatestSeedSpecs(targetList, seedList, isFurniture = false) {
    if (!Array.isArray(targetList)) return JSON.parse(JSON.stringify(seedList));
    targetList.forEach(item => {
        if (!item) return;
        const seedMatch = seedList.find(s => s.id === item.id || (s.name && item.name && s.name.trim() === item.name.trim()));
        if (seedMatch) {
            if (item.size === undefined || item.size === null) item.size = seedMatch.size;
            if (isFurniture) {
                item.cat = normalizeFurnitureCategory(seedMatch.cat || item.cat, item.name);
                item.mainGroup = getMainGroupForSubcat(item.cat);
            } else if (seedMatch.cat) {
                item.cat = seedMatch.cat;
            }
        } else if (isFurniture) {
            item.cat = normalizeFurnitureCategory(item.cat, item.name);
            item.mainGroup = getMainGroupForSubcat(item.cat);
        }
    });
    return targetList;
}

// Upgrade HQ list to WBS system
function migrateHqListToWbs(oldList) {
    if (!Array.isArray(oldList) || oldList.length === 0) return JSON.parse(JSON.stringify(SEED_HQ));
    const newList = JSON.parse(JSON.stringify(SEED_HQ));
    oldList.forEach(oldItem => {
        if (!oldItem || !oldItem.name) return;
        const cleanName = oldItem.name.trim();
        const match = newList.find(n => n.name === cleanName || n.name.includes(cleanName) || cleanName.includes(n.name));
        if (match) {
            if (oldItem.qty !== undefined) match.qty = Number(oldItem.qty) || 0;
            if (oldItem.status) match.status = oldItem.status;
            if (oldItem.notes) match.notes = oldItem.notes;
            if (oldItem.size) match.size = oldItem.size;
            if (oldItem.code) match.code = oldItem.code;
        } else {
            newList.push({
                ...oldItem,
                id: Math.max(...newList.map(i => i.id), 218) + 1,
                code: oldItem.code || `3.3.${newList.length + 1}`,
                size: oldItem.size || 'حسب المقاس الفعلي'
            });
        }
    });
    return newList;
}

// --- APP STATE ---
let currentLang = localStorage.getItem('buffet_v9_lang') || 'ar';
let currentTheme = localStorage.getItem('buffet_v9_theme') || 'dark';
let currentPalette = localStorage.getItem('buffet_v9_palette') || 'gold'; // gold, emerald, blue, purple
let currentUserRole = localStorage.getItem('buffet_v9_role') || 'admin'; // 'admin' | 'viewer'

// Check URL query parameters for direct role sharing (?role=viewer / ?mode=user)
try {
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get('role') || urlParams.get('mode');
    if (roleParam === 'viewer' || roleParam === 'user') {
        currentUserRole = 'viewer';
        localStorage.setItem('buffet_v9_role', 'viewer');
    }
} catch (e) {}

let inventory = JSON.parse(localStorage.getItem('buffet_v9_inv')) || SEED_INVENTORY;
let transactions = JSON.parse(localStorage.getItem('buffet_v9_trans')) || SEED_TRANSACTIONS;
let recipientsList = JSON.parse(localStorage.getItem('buffet_v9_recipients')) || SEED_RECIPIENTS;

let furnitureInventory = JSON.parse(localStorage.getItem('buffet_v9_furniture')) || JSON.parse(JSON.stringify(SEED_FURNITURE));
furnitureInventory = syncLatestSeedSpecs(furnitureInventory, SEED_FURNITURE, true);
if (localStorage.getItem('buffet_v9_furn_wbs_migrated') !== 'true') {
    furnitureInventory = migrateFurnitureListToV3WBS(furnitureInventory);
    localStorage.setItem('buffet_v9_furn_wbs_migrated', 'true');
}
recalculateAllFurnitureCodes(true);
localStorage.setItem('buffet_v9_furniture', JSON.stringify(furnitureInventory));

let hqInventory = JSON.parse(localStorage.getItem('buffet_v9_hq')) || JSON.parse(JSON.stringify(SEED_HQ));
hqInventory = syncLatestSeedSpecs(hqInventory, SEED_HQ);
if (localStorage.getItem('buffet_v9_hq_wbs_migrated') !== 'true') {
    hqInventory = migrateHqListToWbs(hqInventory);
    localStorage.setItem('buffet_v9_hq_wbs_migrated', 'true');
}
localStorage.setItem('buffet_v9_hq', JSON.stringify(hqInventory));

// --- SEED DIRECT SUPPLIER TRANSFERS & SPLIT PAYMENTS (50% / 70% / 100%) ---
const SEED_DIRECT_SUPPLIER_POS = [
    { id: 501, date: '2026-09-01', item: 'قسط تأمين الموظفين', supplier: 'شركة التأمين (تحويل مباشر)', qty: 1, unitPrice: 841727.39, total: 841727.39, scheme: '100%', paid: 841727.39, remaining: 0, notes: 'تحويل مباشر من الشركة للمورد (100%)' },
    { id: 502, date: '2026-09-01', item: 'قسط تأمين الحياة', supplier: 'شركة التأمين (تحويل مباشر)', qty: 1, unitPrice: 25457.65, total: 25457.65, scheme: '100%', paid: 25457.65, remaining: 0, notes: 'تحويل مباشر من الشركة للمورد (100%)' },
    { id: 503, date: '2026-09-10', item: 'فرق الإضافات لأكسا العام الماضي', supplier: 'أكسا للتأمين (AXA)', qty: 1, unitPrice: 134539.17, total: 134539.17, scheme: '100%', paid: 134539.17, remaining: 0, notes: 'تحويل مباشر من الشركة (100%)' },
    { id: 504, date: '2026-09-15', item: 'أغراض البوفيه الشهرية المجمعة', supplier: 'مورد مستلزمات البوفيه', qty: 1, unitPrice: 43486.50, total: 43486.50, scheme: '100%', paid: 43486.50, remaining: 0, notes: 'أمر توريد محول مباشرة للمورد' },
    { id: 505, date: '2026-09-22', item: 'شراء عدد 2 ماكينة أبواب', supplier: 'مورد الأكسسوارات والأبواب', qty: 2, unitPrice: 3350, total: 6700, scheme: '100%', paid: 6700, remaining: 0, notes: 'شراء وتوريد كامل' },
    { id: 506, date: '2026-10-15', item: 'توريد مكاتب وكراسي إضافية للأدوار الجديدة', supplier: 'مورد الأثاث المكتبي (MZ / المصنع)', qty: 1, unitPrice: 90000, total: 90000, scheme: '50%', paid: 45000, remaining: 45000, notes: 'دفعة 50% مقدم تحت الحساب و 50% بعد التوريد والاستلام' },
    { id: 507, date: '2026-10-25', item: 'توريد وتركيب أجهزة تكييف كارير', supplier: 'شركة كارير (Carrier)', qty: 1, unitPrice: 120000, total: 120000, scheme: '70%', paid: 84000, remaining: 36000, notes: 'دفعة 70% مقدم عند التعاقد و 30% بعد التوريد والتركيب' }
];

// --- SEED MONTHLY CORE COMPANY EXPENSES (المصروفات الأساسية للشركة كل شهر) ---
const SEED_MONTHLY_CORE_EXPENSES = [
    { id: 601, title: 'قيمة الإيجار الشهري للمقر', amount: 72000, notes: 'ثابت شهرياً' },
    { id: 602, title: 'مرتب عامل البوفيه والنظافة', amount: 7000, notes: 'ثابت شهرياً' },
    { id: 603, title: 'صيانة الأسانسير والنظافة العامة للعقار', amount: 3850, notes: 'اتحاد الشاغلين / العقار' },
    { id: 604, title: 'شهرية رفع المهملات (جميع الأدوار)', amount: 2200, notes: 'ثابت أول كل شهر' },
    { id: 605, title: 'متوسط شحن عدادات وفواتير الكهرباء للأدوار', amount: 65000, notes: 'الأدوار من 4 إلى 9' },
    { id: 606, title: 'مشتريات البوفيه والقهوة والمياه والمنظفات الشهرية', amount: 38000, notes: 'تموين المخزن الشهري' },
    { id: 607, title: 'فواتير الإنترنت والخطوط الأرضية والصيانات الدورية', amount: 15000, notes: 'المصرية للاتصالات + فلاتر المياه' }
];

const SEED_CUSTODY = [
    { id: 1, date: '2025-09-24', desc: 'رصيد افتتاحي', inflow: 14087, outflow: 0, notes: '' },
    { id: 2, date: '2025-09-24', desc: 'شحن عدادات كهرباء للأدوار', inflow: 0, outflow: 5040, notes: '' },
    { id: 3, date: '2025-09-25', desc: 'تنظيف المقر بجناح الدكتور', inflow: 0, outflow: 700, notes: '' },
    { id: 4, date: '2025-09-25', desc: 'قص مراية الحمام بجناح الدكتور', inflow: 0, outflow: 400, notes: '' },
    { id: 5, date: '2025-09-26', desc: 'نقل ماكينة الباب الرئيسي الدور السابع', inflow: 0, outflow: 800, notes: '' },
    { id: 6, date: '2025-09-26', desc: 'تعلية المرايا بجناح الدكتور', inflow: 0, outflow: 350, notes: '' },
    { id: 7, date: '2025-09-29', desc: 'تحويل شحن عدادات كهرباء للأدوار', inflow: 72000, outflow: 0, notes: '' },
    { id: 8, date: '2025-09-29', desc: 'تحويل لدفع العوائد بالضرايب', inflow: 102816, outflow: 0, notes: '' },
    { id: 9, date: '2025-09-29', desc: 'شحن عدادات كهرباء للأدوار', inflow: 0, outflow: 71991.21, notes: '' },
    { id: 10, date: '2025-09-30', desc: 'دفع عوائد لعام 2025 من الدور3 الى الدور9', inflow: 0, outflow: 102816, notes: '' },
    { id: 11, date: '2025-09-30', desc: 'تحويل تأشيرة م/ساره سمير', inflow: 20000, outflow: 0, notes: '' },
    { id: 12, date: '2025-09-30', desc: 'دفع ثمن تأشيرة م/ساره سمير', inflow: 0, outflow: 20000, notes: '' },
    { id: 13, date: '2025-10-01', desc: 'تحويل تذكرة طيران م/ساره سمير وشهرية المهملات', inflow: 18650, outflow: 0, notes: '' },
    { id: 14, date: '2025-10-01', desc: 'دفع تأشيرة م/ساره سمير', inflow: 0, outflow: 16950, notes: '' },
    { id: 15, date: '2025-10-01', desc: 'شهرية المهملات', inflow: 0, outflow: 1700, notes: '' },
    { id: 16, date: '2025-10-08', desc: 'تحويل شراء سماعات', inflow: 15000, outflow: 0, notes: '' },
    { id: 17, date: '2025-10-10', desc: 'مشتريات زيارة م/عبد العزيز', inflow: 0, outflow: 896, notes: '' },
    { id: 18, date: '2025-10-10', desc: 'حساب هوس كيبنج', inflow: 0, outflow: 1000, notes: '' },
    { id: 19, date: '2025-10-11', desc: 'حساب سباك لتركيب خلاط حمام الدكتور', inflow: 0, outflow: 500, notes: '' },
    { id: 20, date: '2025-10-12', desc: 'سحب شراء السماعات', inflow: 0, outflow: 15000, notes: '' },
    { id: 21, date: '2025-10-12', desc: 'مشتريات م/عبدالعزيز', inflow: 0, outflow: 129, notes: '' },
    { id: 22, date: '2025-10-12', desc: 'مشتريات م/عبدالعزيز', inflow: 0, outflow: 1675, notes: '' },
    { id: 23, date: '2025-10-12', desc: 'حساب هوس كيبنج', inflow: 0, outflow: 1000, notes: '' },
    { id: 24, date: '2025-10-13', desc: 'مشتريات م/عبد العزيز فول وطحينه وزبادي', inflow: 0, outflow: 331.5, notes: '' },
    { id: 25, date: '2025-10-13', desc: 'حساب هوس كيبنج', inflow: 0, outflow: 1000, notes: '' },
    { id: 26, date: '2025-10-14', desc: 'تحويل على الحساب', inflow: 5000, outflow: 0, notes: '' },
    { id: 27, date: '2025-10-15', desc: 'مشتريات م/عبدالعزيز', inflow: 0, outflow: 2371, notes: '' },
    { id: 28, date: '2025-10-16', desc: 'مشتريات م/عبدالعزيز', inflow: 0, outflow: 1099.28, notes: '' },
    { id: 29, date: '2025-10-16', desc: 'حواله على الجارى', inflow: 10000, outflow: 0, notes: '' },
    { id: 30, date: '2025-10-16', desc: 'حساب هوس كيبنج يومين الاربعاء والخميس', inflow: 0, outflow: 2000, notes: '' },
    { id: 31, date: '2025-10-16', desc: 'حساب صيانة فلاتر ال٣ ادوار', inflow: 0, outflow: 1930, notes: '' },
    { id: 32, date: '2025-10-16', desc: 'شحن عداد جناح الدكتور', inflow: 0, outflow: 1030, notes: '' },
    { id: 33, date: '2025-10-19', desc: 'مشتريات زيارة م/عبد العزيز', inflow: 0, outflow: 1499.25, notes: '' },
    { id: 34, date: '2025-10-19', desc: 'حساب هوس كيبنج', inflow: 0, outflow: 1000, notes: '' },
    { id: 35, date: '2025-10-20', desc: 'شحن رقم الدكتور المصري', inflow: 0, outflow: 714.3, notes: '' },
    { id: 36, date: '2025-10-20', desc: 'وصلة شاشة للدور السادس', inflow: 0, outflow: 150, notes: '' },
    { id: 37, date: '2025-10-21', desc: 'مشتريات م/عبدالعزيز', inflow: 0, outflow: 900, notes: '' },
    { id: 38, date: '2025-10-22', desc: 'شحن جناح الدكتور', inflow: 0, outflow: 500, notes: '' },
    { id: 39, date: '2025-10-22', desc: 'حساب هوس كيبنج يومين الثلاثاء والأربعاء', inflow: 0, outflow: 2000, notes: '' },
    { id: 40, date: '2025-10-23', desc: 'تحويل بالحساب', inflow: 20000, outflow: 0, notes: '' },
    { id: 41, date: '2025-10-23', desc: 'شحن كهرباء الدور السابع', inflow: 0, outflow: 2010, notes: '' },
    { id: 42, date: '2025-10-23', desc: 'حساب هوس كيبنج + مواصلات يوم + ساعتين', inflow: 0, outflow: 1400, notes: '' },
    { id: 43, date: '2025-10-23', desc: 'حساب هوس كيبنج ايام متبقية لها لم يتم الحساب', inflow: 0, outflow: 3000, notes: '' },
    { id: 44, date: '2025-10-23', desc: 'دفع ايحار سيارة يومين م/عبد العزيز', inflow: 0, outflow: 6200, notes: '' },
    { id: 45, date: '2025-10-26', desc: 'شحن عدادات كهرباء للأدوار', inflow: 0, outflow: 4215, notes: '' },
    { id: 46, date: '2025-10-28', desc: 'تحويل شحن عدادات كهرباء للأدوار', inflow: 58376, outflow: 0, notes: '' },
    { id: 47, date: '2025-10-28', desc: 'شحن كهرباء الأدوار', inflow: 0, outflow: 58795.37, notes: '' },
    { id: 48, date: '2025-11-02', desc: 'تحويل دفعة مقدمة لشركة فودافون الدور الثالث', inflow: 20000, outflow: 0, notes: '' },
    { id: 49, date: '2025-11-02', desc: 'مياه نار+ صوديوم لتلسيك حمام', inflow: 0, outflow: 250, notes: '' },
    { id: 50, date: '2025-11-02', desc: 'شهرية عامل المهملات', inflow: 0, outflow: 1700, notes: '' },
    { id: 51, date: '2025-11-02', desc: 'دفع الدفعة المقدمة لشركة فودافون الدور الثالث', inflow: 0, outflow: 20000, notes: '' },
    { id: 52, date: '2025-11-04', desc: 'تحويل شراء قهوة وادوات مكتبية', inflow: 18850, outflow: 0, notes: '' },
    { id: 53, date: '2025-11-04', desc: 'شراء قهوة', inflow: 0, outflow: 14850, notes: '' },
    { id: 54, date: '2025-11-04', desc: 'شراء أدوات مكتبية', inflow: 0, outflow: 4000, notes: '' },
    { id: 55, date: '2025-11-10', desc: 'تحويل لشراء كاميرات و ماكينة باب زجاج سكوريت', inflow: 13250, outflow: 0, notes: '' },
    { id: 56, date: '2025-11-12', desc: 'شراء كاميرات لقسم العروض', inflow: 0, outflow: 8400, notes: '' },
    { id: 57, date: '13/11/225', desc: 'تركيب ماكينة باب زجاج سكوريت', inflow: 0, outflow: 4850, notes: '' },
    { id: 58, date: '2025-11-18', desc: 'شراء محبس ووصلة تيه', inflow: 0, outflow: 205, notes: '' },
    { id: 59, date: '2025-11-18', desc: 'تحويل لشراء بعض اغراض البوفية', inflow: 28300, outflow: 0, notes: '' },
    { id: 60, date: '2025-11-20', desc: 'شراء اغراض البوفيه', inflow: 0, outflow: 28300, notes: '' },
    { id: 61, date: '2025-11-24', desc: 'تحويل لشراء باقى اغراض البوفية مع حساب الكهربائي', inflow: 11900, outflow: 0, notes: '' },
    { id: 62, date: '2025-11-24', desc: 'حساب الكهربائي', inflow: 0, outflow: 2000, notes: '' },
    { id: 63, date: '2025-11-24', desc: 'شراء باقى اغراض البوفية', inflow: 0, outflow: 9900, notes: '' },
    { id: 64, date: '2025-11-26', desc: 'تحويل لشحن الكهرباء', inflow: 63800, outflow: 0, notes: '' },
    { id: 65, date: '2025-11-26', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 63800, notes: '' },
    { id: 66, date: '2025-12-01', desc: 'حساب السباك لصيانةالدور التاسع والثامن', inflow: 0, outflow: 500, notes: '' },
    { id: 67, date: '2025-12-08', desc: 'تحويل لشراء قهوة والنظافة', inflow: 17500, outflow: 0, notes: '' },
    { id: 68, date: '2025-12-08', desc: 'شراء قهوة', inflow: 0, outflow: 14820, notes: '' },
    { id: 69, date: '2025-12-08', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 70, date: '2025-12-11', desc: 'تحويل لشراء استيكر للكشافات', inflow: 12112, outflow: 0, notes: '' },
    { id: 71, date: '2025-12-15', desc: 'دفع قيمة تركيب استكيرات للكشافات', inflow: 0, outflow: 12112, notes: '' },
    { id: 72, date: '2025-12-22', desc: 'تحويل لشراء اغراض البوفيه', inflow: 40404, outflow: 0, notes: '' },
    { id: 73, date: '2025-12-22', desc: 'شراء اغراض البوفيه', inflow: 0, outflow: 40404, notes: '' },
    { id: 74, date: '2025-12-23', desc: 'صيانة ماكينة الطابعة الدور السادس', inflow: 0, outflow: 2000, notes: '' },
    { id: 75, date: '2025-11-25', desc: 'شراء خط فودافون', inflow: 0, outflow: 350, notes: '' },
    { id: 76, date: '2025-12-28', desc: 'حوالة لشحن الكهرباء وصيانةالكهرباء', inflow: 54000, outflow: 0, notes: '' },
    { id: 77, date: '2025-12-29', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 52237, notes: '' },
    { id: 78, date: '2025-12-30', desc: 'صيانة الفلاتر', inflow: 0, outflow: 2360, notes: '' },
    { id: 79, date: '2025-01-01', desc: 'حجاير للموس', inflow: 0, outflow: 250, notes: '' },
    { id: 80, date: '2025-01-01', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 81, date: '2026-01-01', desc: 'شراء محبس وزاوية ووصلة تيه لحمام البنات فى ال6', inflow: 0, outflow: 225, notes: '' },
    { id: 82, date: '2026-01-04', desc: '', inflow: 5000, outflow: 0, notes: '' },
    { id: 83, date: '2026-01-08', desc: 'تحويل لشراء سماعات', inflow: 24000, outflow: 0, notes: '' },
    { id: 84, date: '2026-01-08', desc: 'شراء سماعات', inflow: 0, outflow: 7330, notes: '' },
    { id: 85, date: '2026-01-08', desc: 'شرء سماعات', inflow: 0, outflow: 1415, notes: '' },
    { id: 86, date: '2026-01-09', desc: 'قنطرة وزاوية نص بوصة مبولة الرجال الدور اسابع', inflow: 0, outflow: 415, notes: '' },
    { id: 87, date: '2026-01-11', desc: 'حوالة لشراء شفاطات وشطاف وعلاقة ملابس', inflow: 16500, outflow: 0, notes: '' },
    { id: 88, date: '2026-01-11', desc: 'شراء شفاط وشنطة عدة', inflow: 0, outflow: 6016, notes: '' },
    { id: 89, date: '2026-01-11', desc: 'شراء علاقة ملابس', inflow: 0, outflow: 416, notes: '' },
    { id: 90, date: '2026-01-11', desc: 'حوالة ادوات مكتبية', inflow: 4215, outflow: 0, notes: '' },
    { id: 91, date: '2026-01-11', desc: 'شراء الادوات المكتبية', inflow: 0, outflow: 1345.75, notes: '' },
    { id: 92, date: '2026-01-11', desc: 'مشتريات ادوات مكتبية', inflow: 0, outflow: 2385, notes: '' },
    { id: 93, date: '2026-01-14', desc: 'صيانة ماكنة الطباعه بالدور التاسع HP', inflow: 0, outflow: 6250, notes: '' },
    { id: 94, date: '2026-01-15', desc: 'تحويل صيانة الطابعة و مزيل بقع', inflow: 7020, outflow: 0, notes: '' },
    { id: 95, date: '2026-01-15', desc: 'شراء مزيل بقع للشركة', inflow: 0, outflow: 770, notes: '' },
    { id: 96, date: '2026-01-15', desc: 'شراء سماعات للشركة', inflow: 0, outflow: 9500, notes: '' },
    { id: 97, date: '2026-01-18', desc: 'تحويل لشراء مفاتيح حماية للوح الكهرباء', inflow: 37500, outflow: 0, notes: '' },
    { id: 98, date: '2026-01-18', desc: 'شراء سليكون وبكرة لزق+ مصنعية', inflow: 0, outflow: 1000, notes: '' },
    { id: 99, date: '2026-01-19', desc: 'شراء مفاتيح حماية للوح الكهرباء', inflow: 0, outflow: 38000, notes: '' },
    { id: 100, date: '2026-01-22', desc: 'شراء محبس عمومي +مصنعية سباك', inflow: 0, outflow: 1200, notes: '' },
    { id: 101, date: '2026-01-25', desc: 'شراء 4 شفاطات', inflow: 0, outflow: 2138, notes: '' },
    { id: 102, date: '2026-01-26', desc: 'طباعة ختم لشركة الانماء', inflow: 0, outflow: 600, notes: '' },
    { id: 103, date: '2026-01-31', desc: 'صيانة طابعة الدور السابع', inflow: 0, outflow: 5750, notes: '' },
    { id: 104, date: '2026-02-01', desc: 'مشتريات الدكتور', inflow: 0, outflow: 5379.5, notes: '' },
    { id: 105, date: '2026-02-01', desc: 'تحويل لشراء قهوة', inflow: 14820, outflow: 0, notes: '' },
    { id: 106, date: '2026-02-01', desc: 'شراء قهوة', inflow: 0, outflow: 14820, notes: '' },
    { id: 107, date: '2026-02-02', desc: 'سباك لمقر الدكتور', inflow: 0, outflow: 720, notes: '' },
    { id: 108, date: '2026-02-02', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 109, date: '2026-02-02', desc: 'تحويل على حساب الدكتور', inflow: 15000, outflow: 0, notes: '' },
    { id: 110, date: '2026-02-04', desc: 'سحب مبلغ للدكتور ناصر', inflow: 0, outflow: 8500, notes: '' },
    { id: 111, date: '2026-02-04', desc: 'دفع كهرباء الدور الرابع والخامس', inflow: 0, outflow: 250, notes: '' },
    { id: 112, date: '2026-02-04', desc: 'شحن عداد الدور السابع', inflow: 0, outflow: 2018, notes: '' },
    { id: 113, date: '2026-02-04', desc: 'عاملة النظافة', inflow: 0, outflow: 1000, notes: '' },
    { id: 114, date: '2026-02-04', desc: 'طباعة أوراق A3و A1', inflow: 0, outflow: 135, notes: '' },
    { id: 115, date: '2026-02-04', desc: 'شحن عداد الدور السابع', inflow: 0, outflow: 2016, notes: '' },
    { id: 116, date: '2026-02-08', desc: 'تحويل لشحن عدادات الكهرباء- صيانة الطباعة- سيارة', inflow: 74486, outflow: 0, notes: '' },
    { id: 117, date: '2026-02-08', desc: 'شحن عدادات الشركة', inflow: 0, outflow: 62399, notes: '' },
    { id: 118, date: '2026-02-08', desc: 'شراء سماعات', inflow: 0, outflow: 5750, notes: '' },
    { id: 119, date: '2026-02-08', desc: 'ايجار السيارة', inflow: 0, outflow: 8736, notes: '' },
    { id: 120, date: '2026-02-15', desc: 'فلاشة لتسليم استمارة 2 تأمينات', inflow: 0, outflow: 185, notes: '' },
    { id: 121, date: '2026-02-16', desc: 'تحويل مشتريات الدور الرابع', inflow: 29146, outflow: 0, notes: '' },
    { id: 122, date: '2026-02-16', desc: 'شراء ماكينة قهوة', inflow: 0, outflow: 2000, notes: '' },
    { id: 123, date: '2026-02-16', desc: 'شراء سخان اريستون عدد 2- غلاية مياه', inflow: 0, outflow: 12505, notes: '' },
    { id: 124, date: '2026-02-16', desc: 'شراء شفاط للحمام', inflow: 0, outflow: 4760, notes: '' },
    { id: 125, date: '2026-02-17', desc: 'تحويل لشراء كاميرات ونقل', inflow: 46000, outflow: 0, notes: '' },
    { id: 126, date: '2026-02-17', desc: 'شراء كاميرات عدد 10', inflow: 0, outflow: 9990, notes: '' },
    { id: 127, date: '2026-02-17', desc: 'شراء كاميرات عدد 7', inflow: 0, outflow: 6993, notes: '' },
    { id: 128, date: '2026-02-17', desc: 'صيانة السباكة بالعقار', inflow: 0, outflow: 800, notes: '' },
    { id: 129, date: '2026-02-18', desc: 'سحب لشراء عدد 17 ميمورى للكاميرات', inflow: 0, outflow: 11900, notes: '' },
    { id: 130, date: '2026-02-18', desc: 'تنظيف شقة الدكتور', inflow: 0, outflow: 700, notes: '' },
    { id: 131, date: '2026-02-20', desc: 'نقل المكاتب للدور الرابع', inflow: 0, outflow: 12000, notes: '' },
    { id: 132, date: '2026-02-20', desc: 'تركيب كاميرات الدور الرابع', inflow: 0, outflow: 6700, notes: '' },
    { id: 133, date: '2026-02-20', desc: 'تحويل لافطار موظفين الشركة', inflow: 312000, outflow: 0, notes: '' },
    { id: 134, date: '2026-02-28', desc: 'مقدم لحجز تصوير', inflow: 0, outflow: 500, notes: '' },
    { id: 135, date: '2026-02-28', desc: 'مقدم لافطار الموظفين', inflow: 0, outflow: 200000, notes: '' },
    { id: 136, date: '2026-03-01', desc: 'طباعة بنر لافطار الموظفين', inflow: 0, outflow: 850, notes: '' },
    { id: 137, date: '2026-03-01', desc: 'دفعة ٢ من حساب فطار الموظفين', inflow: 0, outflow: 79500, notes: '' },
    { id: 138, date: '2026-03-01', desc: 'تحويل لشراء اغراض بوفية', inflow: 3000, outflow: 0, notes: '' },
    { id: 139, date: '2026-03-02', desc: 'صرف شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 140, date: '2026-03-02', desc: 'تركيب شفاطات الدور الرابع', inflow: 0, outflow: 0, notes: '' },
    { id: 141, date: '2026-03-02', desc: 'شراء اغراض البوفية', inflow: 0, outflow: 3664, notes: '' },
    { id: 142, date: '2026-03-03', desc: 'دفعة أخيرة لافطار الموظفين', inflow: 0, outflow: 13000, notes: '' },
    { id: 143, date: '2026-03-04', desc: 'فاتورة كهرباء الدور الرابع والخامس', inflow: 0, outflow: 1210, notes: '' },
    { id: 144, date: '2026-03-05', desc: 'باقى حساب تصوير افطار موظفين', inflow: 0, outflow: 2500, notes: '' },
    { id: 145, date: '2026-03-08', desc: 'رسوم اشتراك شركة الانماء فى شركة الضرايب', inflow: 0, outflow: 326, notes: '' },
    { id: 146, date: '2026-03-09', desc: 'تغيير مفصلة الباب الرئيسي بالدور السابع', inflow: 0, outflow: 650, notes: '' },
    { id: 147, date: '2026-03-11', desc: 'شحن كهرباء عداد بالدور السابع', inflow: 0, outflow: 3000, notes: '' },
    { id: 148, date: '2026-03-11', desc: 'باقي حساب اغراض البوفية', inflow: 0, outflow: 5250, notes: '' },
    { id: 149, date: '2026-03-15', desc: 'تحويل لشحن عدادات الكهرباء', inflow: 55000, outflow: 0, notes: '' },
    { id: 150, date: '2026-03-15', desc: 'دفع مديونية من الدور السابع والثامن', inflow: 0, outflow: 3770, notes: '' },
    { id: 151, date: '2026-03-15', desc: 'دفع مديونية من الدور الثالث الى الدور الخامس', inflow: 0, outflow: 5700, notes: '' },
    { id: 152, date: '2026-03-15', desc: 'دفع معاينة تعلية قدرة العدادات', inflow: 0, outflow: 910, notes: '' },
    { id: 153, date: '2026-03-15', desc: 'دفع ترضية للموظفين', inflow: 0, outflow: 900, notes: '' },
    { id: 154, date: '2026-03-25', desc: 'دفع فاتورة خط اتصالات', inflow: 0, outflow: 915, notes: '' },
    { id: 155, date: '2026-03-28', desc: 'شحن عداد كهرباء بالدور السابع', inflow: 0, outflow: 2059, notes: '' },
    { id: 156, date: '2026-03-31', desc: 'تصليح مايكروويف الدور الثامن', inflow: 0, outflow: 500, notes: '' },
    { id: 157, date: '2026-04-01', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 158, date: '2026-04-06', desc: 'تحويل على الحساب الشخصي لاحمد الباز', inflow: 87807.55, outflow: 0, notes: '' },
    { id: 159, date: '2026-04-06', desc: 'فيزا ساره سمير', inflow: 0, outflow: 49140, notes: '' },
    { id: 160, date: '2026-04-06', desc: 'تذكرة طيران', inflow: 0, outflow: 12623, notes: '' },
    { id: 161, date: '2026-04-06', desc: 'مرتب مازن مهندس تصميم', inflow: 0, outflow: 38602, notes: '' },
    { id: 162, date: '2026-04-08', desc: 'صيانة الفلاتر للدور 6- 7- 8', inflow: 0, outflow: 2250, notes: '' },
    { id: 163, date: '2026-04-12', desc: 'شحن عداد كهرباء بالدور السابع', inflow: 0, outflow: 2059, notes: '' },
    { id: 164, date: '2026-04-12', desc: 'شحن عداد كهرباء بالدور الثامن', inflow: 0, outflow: 1545, notes: '' },
    { id: 165, date: '2026-04-12', desc: 'تنظيف موكيت المصليات', inflow: 0, outflow: 1500, notes: '' },
    { id: 166, date: '2026-04-14', desc: 'أدوات مكتبية', inflow: 0, outflow: 3614, notes: '' },
    { id: 167, date: '2026-04-14', desc: 'مفتاح انجليزى، كلابة', inflow: 0, outflow: 380, notes: '' },
    { id: 168, date: '2026-04-12', desc: 'حجز خطوط المصرية للاتصالات', inflow: 0, outflow: 1500, notes: '' },
    { id: 169, date: '2026-04-12', desc: 'انترنت المصرية للاتصالات', inflow: 0, outflow: 783, notes: '' },
    { id: 170, date: '2026-04-16', desc: 'تحويل على حساب احمد الباز لتعلية قدرة العدادات', inflow: 60000, outflow: 0, notes: '' },
    { id: 171, date: '2026-04-16', desc: 'تحويل على حساب احمد الباز لشحن العدادات', inflow: 40000, outflow: 0, notes: '' },
    { id: 172, date: '2026-04-16', desc: 'دفع تعلية قدرة العدادات', inflow: 0, outflow: 60298.5, notes: '' },
    { id: 173, date: '2026-04-16', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 40322.5, notes: '' },
    { id: 174, date: '2026-04-18', desc: 'تاكيد تعلية القدرة للعدادات', inflow: 0, outflow: 300, notes: '' },
    { id: 175, date: '2026-04-18', desc: 'اعادة تصحيح اماكن العدادات بالشركة', inflow: 0, outflow: 10000, notes: '' },
    { id: 176, date: '2026-04-18', desc: 'تأجير سيارة لقدوم م/محمد حسين', inflow: 0, outflow: 400, notes: '' },
    { id: 177, date: '2026-04-18', desc: 'شحن موبايل الدكتور', inflow: 0, outflow: 1000, notes: '' },
    { id: 178, date: '2026-04-19', desc: 'واجب ضيافة واجتماع م/محمد حسين مع التصميم', inflow: 0, outflow: 1469, notes: '' },
    { id: 179, date: '2026-04-20', desc: 'تحويل لخطوط المصرية للاتصالات', inflow: 40500, outflow: 0, notes: '' },
    { id: 180, date: '2026-04-20', desc: 'دفع اشتراك تعاقد المصرية للاتصالات 20خط', inflow: 0, outflow: 15640, notes: '' },
    { id: 181, date: '2026-04-20', desc: 'دفع اشتراك تعاقد المصرية للاتصالات 10خط', inflow: 0, outflow: 7820, notes: '' },
    { id: 182, date: '2026-04-22', desc: 'تحويل لشراء قهوة', inflow: 15580, outflow: 0, notes: '' },
    { id: 183, date: '2026-04-22', desc: 'شراء شفاطات', inflow: 0, outflow: 7990, notes: '' },
    { id: 184, date: '2026-06-22', desc: 'شراء مايكروويف', inflow: 0, outflow: 7075, notes: '' },
    { id: 185, date: '2026-04-22', desc: 'دفع فواتير كهرباء الدور الرابع والخامس', inflow: 0, outflow: 600, notes: '' },
    { id: 186, date: '2026-04-23', desc: 'حوالة لمشتريات الدور الخامس', inflow: 150000, outflow: 0, notes: '' },
    { id: 187, date: '2026-04-23', desc: 'التعاقد على 19 خط بانترنت', inflow: 0, outflow: 20542.24, notes: '' },
    { id: 188, date: '2026-04-23', desc: 'شراء كاميرات عدد 10+ طفاية سجاير', inflow: 0, outflow: 12756, notes: '' },
    { id: 189, date: '2026-04-23', desc: 'شراء كاميرات عدد4+ ثلاجة', inflow: 0, outflow: 24357, notes: '' },
    { id: 190, date: '2026-04-23', desc: 'شراء قهوة', inflow: 0, outflow: 15580, notes: '' },
    { id: 191, date: '2026-04-26', desc: 'شراء عدد 2 شاشة ال جي 65 بوصة', inflow: 0, outflow: 63040, notes: '' },
    { id: 192, date: '2026-04-26', desc: 'شراء غلاية مياه', inflow: 0, outflow: 850, notes: '' },
    { id: 193, date: '2026-04-26', desc: 'غسيل سجاد المصليات', inflow: 0, outflow: 2650, notes: '' },
    { id: 194, date: '2026-04-26', desc: 'شراء مكنسة للدور الخامس', inflow: 0, outflow: 8900, notes: '' },
    { id: 195, date: '2026-04-28', desc: 'تركيب الكاميرات', inflow: 0, outflow: 3000, notes: '' },
    { id: 196, date: '2026-04-28', desc: 'تركيب الشفاطات', inflow: 0, outflow: 1000, notes: '' },
    { id: 197, date: '2026-04-29', desc: 'حامل شاشة للدور الخامس', inflow: 0, outflow: 275, notes: '' },
    { id: 198, date: '2026-04-30', desc: 'سيليكون ومسدس لتركيب الشفاطات', inflow: 0, outflow: 240, notes: '' },
    { id: 199, date: '2026-05-02', desc: 'باسكت زبالة', inflow: 0, outflow: 7623, notes: '' },
    { id: 200, date: '2026-05-03', desc: 'ماكينة قهوة تورنيدو', inflow: 0, outflow: 5080, notes: '' },
    { id: 201, date: '2026-05-03', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 202, date: '2026-05-04', desc: 'شراء مشتريات IT', inflow: 14100, outflow: 0, notes: '' },
    { id: 203, date: '2026-04-05', desc: 'فاتورة كهرباء الدور الرابع والخامس', inflow: 0, outflow: 8700, notes: '' },
    { id: 204, date: '2026-05-10', desc: 'حوالة لشحن عدادات الكهرباء من السادس الى الثامن', inflow: 38000, outflow: 0, notes: '' },
    { id: 205, date: '2025-05-11', desc: 'حامل شاشة للدور السابع', inflow: 0, outflow: 275, notes: '' },
    { id: 206, date: '2026-05-11', desc: 'جزامة للمصليات بالدور الرابع والخامس+ صنية تقديم', inflow: 0, outflow: 891, notes: '' },
    { id: 207, date: '2026-05-12', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 33467.75, notes: '' },
    { id: 208, date: '2026-05-12', desc: 'حجاير ريموت تكييف', inflow: 0, outflow: 140, notes: '' },
    { id: 209, date: '2026-05-13', desc: 'ماكينة غلق ابواب', inflow: 0, outflow: 2102.73, notes: '' },
    { id: 210, date: '2026-06-01', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 211, date: '2026-06-01', desc: 'مصلحة الضرايب', inflow: 0, outflow: 2000, notes: '' },
    { id: 212, date: '2026-06-02', desc: 'مشتريات غرف الاجتماعات', inflow: 21769, outflow: 0, notes: '' },
    { id: 213, date: '2026-06-03', desc: 'تحويل لشحن عدادات الكهرباء وماكينات ابواب', inflow: 50000, outflow: 0, notes: '' },
    { id: 214, date: '2026-06-03', desc: 'شحن عدادات الكهرباء من السادس الى التاسع', inflow: 0, outflow: 39012.1, notes: '' },
    { id: 215, date: '2026-06-03', desc: 'فاتورة كهرباء للدور الرابع والخامس', inflow: 0, outflow: 14562, notes: '' },
    { id: 216, date: '2026-06-09', desc: 'تحويل لشراء ماكينة قهوة- فلاتر- ماكينة أبواب', inflow: 43572, outflow: 0, notes: '' },
    { id: 217, date: '2026-06-09', desc: 'شراء قهوه', inflow: 0, outflow: 15580, notes: '' },
    { id: 218, date: '2026-06-09', desc: 'دفع تكلفة فك وتركيب عدد 4 تكييفات', inflow: 0, outflow: 6000, notes: '' },
    { id: 219, date: '2026-06-11', desc: 'صيانة فلاتر الدور السادس- السابع- الثامن', inflow: 0, outflow: 3510, notes: '' },
    { id: 220, date: '2026-06-11', desc: 'تحويل لحضور معرض قسم ال BIM', inflow: 24000, outflow: 0, notes: '' },
    { id: 221, date: '2026-06-11', desc: 'دفع حضور معرض قسم ال BIM', inflow: 0, outflow: 24000, notes: '' },
    { id: 222, date: '2026-06-14', desc: 'مشتريات غرف الاجتماعات', inflow: 0, outflow: 15909, notes: '' },
    { id: 223, date: '2026-06-14', desc: 'مشتريات عدد 2 فلتر', inflow: 0, outflow: 9110, notes: '' },
    { id: 224, date: '2026-06-14', desc: 'مشتريات 12 Door Closer', inflow: 0, outflow: 12606.38, notes: '' },
    { id: 225, date: '2026-06-15', desc: 'صيانة كرسي م/احمد يس', inflow: 0, outflow: 650, notes: '' },
    { id: 226, date: '2026-06-21', desc: 'تحويل لشراء شفاطات', inflow: 18800, outflow: 0, notes: '' },
    { id: 227, date: '2026-06-21', desc: 'شحن عداد الدور السابع', inflow: 0, outflow: 1550, notes: '' },
    { id: 228, date: '2026-06-21', desc: 'شراء عدد 2 شفاط لجناح الإدارة العليا', inflow: 0, outflow: 10258, notes: '' },
    { id: 229, date: '2026-06-22', desc: 'حوالة سخانات وشحن كهرباء وفلاتر', inflow: 76000, outflow: 0, notes: '' },
    { id: 230, date: '2026-06-22', desc: 'شحن عدادات الدور ال 6- 7- 8', inflow: 0, outflow: 30242, notes: '' },
    { id: 231, date: '2026-06-23', desc: 'شراء عددا 3 ماكينة قهوة+ 1 شفاط+4 سخان للدكتور', inflow: 0, outflow: 37170.8, notes: '' },
    { id: 232, date: '2026-06-23', desc: 'شراء ماكينة قهوه للدور الثامن', inflow: 0, outflow: 2810, notes: '' },
    { id: 233, date: '2026-06-25', desc: 'حوالة للادوات المكتبية والشفاطات للدور التاسع', inflow: 15000, outflow: 0, notes: '' },
    { id: 234, date: '2026-06-25', desc: 'شراء شطافات الموظفين', inflow: 0, outflow: 4520, notes: '' },
    { id: 235, date: '2026-06-30', desc: '1 شفاط للدور التاسع', inflow: 0, outflow: 5129, notes: '' },
    { id: 236, date: '2026-07-05', desc: 'تحويل على الجاري', inflow: 50000, outflow: 0, notes: '' },
    { id: 237, date: '2026-07-05', desc: 'استرداد باقى شفاط لجناح الدكتور', inflow: 1333, outflow: 0, notes: '' },
    { id: 238, date: '2026-07-05', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 239, date: '2026-07-05', desc: 'دفع فاتورة كهرباء الدور ال4- 5', inflow: 0, outflow: 22500, notes: '' },
    { id: 240, date: '2026-07-06', desc: 'شراء 1سخان لجناح الدكتور+ 4 شفاط للموظفين', inflow: 0, outflow: 9769.65, notes: '' },
    { id: 241, date: '2026-07-06', desc: 'صيانة عدد 2 اسبنسر الدور ال4 و ال8', inflow: 0, outflow: 500, notes: '' },
    { id: 242, date: '2026-07-06', desc: 'صيانة 3 تكييفات', inflow: 0, outflow: 4600, notes: '' },
    { id: 243, date: '2026-07-07', desc: 'تحويل لصيانة البلكونات+ شراء القهوة', inflow: 30000, outflow: 0, notes: '' },
    { id: 244, date: '2026-07-07', desc: 'شراء عدد 2 شفاط للادارة العليا', inflow: 0, outflow: 10500, notes: '' },
    { id: 245, date: '2026-07-07', desc: 'تكلفة صيانة البلكونات', inflow: 0, outflow: 14030, notes: '' },
    { id: 246, date: '2026-07-08', desc: 'شحن عداد الدور السادس بالمديونية (800)', inflow: 0, outflow: 3088, notes: '' },
    { id: 247, date: '2026-07-12', desc: 'شحن عداد الدور السابع بالمديونية (2312)', inflow: 0, outflow: 5144, notes: '' },
    { id: 248, date: '2026-07-12', desc: 'شحن عداد الدور السادس', inflow: 0, outflow: 5144, notes: '' },
    { id: 249, date: '2026-07-12', desc: 'تركيب الفلاتر للدور الرابع والخامس', inflow: 0, outflow: 750, notes: '' },
    { id: 250, date: '2026-07-12', desc: 'شراء القهوه', inflow: 0, outflow: 15580, notes: '' },
    { id: 251, date: '2026-07-15', desc: 'تحويل لشحن عدادات الكهرباء', inflow: 36000, outflow: 0, notes: '' },
    { id: 252, date: '2026-07-15', desc: 'شحن عداد الدور السادس والسابع (بالمديونية)', inflow: 0, outflow: 33188.95, notes: '' },
    { id: 253, date: '2026-07-16', desc: 'تحويل لشراء حوض للدور السادس مع التركيب', inflow: 3000, outflow: 0, notes: '' },
    { id: 254, date: '2026-07-16', desc: 'شراء حوض للدور السادس', inflow: 0, outflow: 1385, notes: '' },
    { id: 255, date: '2026-07-20', desc: 'تحويل لمشتريات IT- وخطوط ارضي', inflow: 80000, outflow: 0, notes: '' },
    { id: 256, date: '2026-07-20', desc: 'دفع خطوط الارضي 49 خط', inflow: 0, outflow: 13000.4, notes: '' },
    { id: 257, date: '2026-07-20', desc: 'دفع انترنت ارضي ل5 خطوط', inflow: 0, outflow: 1586.55, notes: '' },
    { id: 258, date: '2026-07-20', desc: 'شراء تانك كالبيدا +تركيب', inflow: 0, outflow: 2100, notes: '' },
    { id: 259, date: '2026-07-20', desc: 'سباك لصيانة الماتور', inflow: 0, outflow: 1400, notes: '' },
    { id: 260, date: '2026-07-21', desc: 'شحن عداد الدور الثامن', inflow: 0, outflow: 3087, notes: '' },
    { id: 261, date: '2026-07-21', desc: 'شراء 6 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 3468, notes: '' },
    { id: 262, date: '2026-07-21', desc: 'شراء 10 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 5060, notes: '' },
    { id: 263, date: '2026-07-21', desc: 'شراء 6 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 3468, notes: '' },
    { id: 264, date: '2026-07-22', desc: 'شراء 6 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 3468, notes: '' },
    { id: 265, date: '2026-07-22', desc: 'شراء 6 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 3468, notes: '' },
    { id: 266, date: '2026-07-22', desc: 'شراء 6 كيبورد وموس من مشتريات ال IT', inflow: 0, outflow: 3468, notes: '' },
    { id: 267, date: '2026-07-26', desc: 'الأدوات المكتبية', inflow: 0, outflow: 3918, notes: '' },
    { id: 268, date: '2026-07-27', desc: 'تحويل لشراء مشتريات الدور التاسع', inflow: 25000, outflow: 0, notes: '' },
    { id: 269, date: '2026-07-27', desc: 'شراء مشتريات الدور التاسع', inflow: 0, outflow: 24689.46, notes: '' },
    { id: 270, date: '2026-07-29', desc: 'شراء ماكينة قهوة للدور التاسع', inflow: 0, outflow: 3774, notes: '' },
    { id: 271, date: '2026-07-29', desc: 'شراء كابلات السيرفر', inflow: 0, outflow: 5650, notes: '' },
    { id: 272, date: '2026-07-30', desc: 'شراء سماعات الشركة', inflow: 0, outflow: 33000, notes: '' },
    { id: 273, date: '2026-08-02', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 274, date: '2026-08-03', desc: 'تحويل لشحن عدادات الكهرباء+ شهرية المهملات', inflow: 49200, outflow: 0, notes: '' },
    { id: 275, date: '2026-08-03', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 46544.12, notes: '' },
    { id: 276, date: '2026-08-03', desc: 'تحويل لدفع فاتورة كهرباء الدور الرابع والخامس', inflow: 27350, outflow: 0, notes: '' },
    { id: 277, date: '2026-08-03', desc: 'دفع فاتورة عدادات كهرباء الدور الرابع والخامس', inflow: 0, outflow: 28216, notes: '' },
    { id: 278, date: '2026-08-05', desc: 'تحويل انستا لمعاينة شقة النيل', inflow: 0, outflow: 500, notes: '' },
    { id: 279, date: '2026-08-09', desc: 'تحويل انستا لمعاينة شقة النيل', inflow: 0, outflow: 680, notes: '' },
    { id: 280, date: '2026-08-09', desc: 'تحويل لصيانة تكييفات الشركة', inflow: 4150, outflow: 0, notes: '' },
    { id: 281, date: '2026-08-09', desc: 'دفع صيانة تكييفات الشركة', inflow: 0, outflow: 4150, notes: '' },
    { id: 282, date: '2026-08-16', desc: 'شحن عدادات الكهرباء+ قهوه', inflow: 57000, outflow: 0, notes: '' },
    { id: 283, date: '2026-08-16', desc: 'شحن عدادات الكهرباء', inflow: 0, outflow: 36592.75, notes: '' },
    { id: 284, date: '2026-08-16', desc: 'شراء قهوة', inflow: 0, outflow: 15580, notes: '' },
    { id: 285, date: '2026-08-23', desc: 'تركيب مايكنة لابواب الحمامات لجميع الأدوار', inflow: 0, outflow: 3000, notes: '' },
    { id: 286, date: '2026-08-25', desc: 'هوس كيبنج', inflow: 0, outflow: 1000, notes: '' },
    { id: 287, date: '2026-08-26', desc: 'اندريف للذهاب للشيخ زايد', inflow: 0, outflow: 700, notes: '' },
    { id: 288, date: '2026-08-30', desc: 'اندريف للذهاب للشيخ زايد', inflow: 0, outflow: 900, notes: '' },
    { id: 289, date: '2026-09-01', desc: 'حواله لشحن الكهرباء- مهملات- تكييف- حامل', inflow: 62620, outflow: 0, notes: '' },
    { id: 290, date: '2026-09-01', desc: 'باقى حساب اعمال تركيب التكييفات', inflow: 0, outflow: 6300, notes: '' },
    { id: 291, date: '2026-09-01', desc: 'صيانة تكييف السيرفر بالدور السادس', inflow: 0, outflow: 1500, notes: '' },
    { id: 292, date: '2026-09-01', desc: 'شهرية مهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 293, date: '2026-09-01', desc: 'شراء حامل لشاشات الاجتماعات', inflow: 0, outflow: 2520, notes: '' },
    { id: 294, date: '2026-09-01', desc: 'شحن عدادات الكهرباء من السادس الى التاسع', inflow: 0, outflow: 41129, notes: '' },
    { id: 295, date: '2026-09-01', desc: 'غلاية للدور الخامس', inflow: 0, outflow: 400, notes: '' },
    { id: 296, date: '2026-09-06', desc: 'تحويل لفاتورة الكهرباء الرابع والخامس مع طفايات الحريق', inflow: 40000, outflow: 0, notes: '' },
    { id: 297, date: '2026-09-06', desc: 'دفع فاتورة كهرباء الدور الرابع والخامس', inflow: 0, outflow: 33368, notes: '' },
    { id: 298, date: '2026-09-06', desc: 'صيانة طفايات الحريق', inflow: 0, outflow: 7465, notes: '' },
    { id: 299, date: '2026-09-06', desc: 'الغاء تذكرة طيران وحجز النيل لعبدالرحمن عواد', inflow: 0, outflow: 6710, notes: '' },
    { id: 300, date: '2026-09-06', desc: 'تعديل تذكرة عمرو عاطف', inflow: 0, outflow: 2600, notes: '' },
    { id: 301, date: '2026-09-14', desc: 'صباك للدور الخامس والسابع', inflow: 0, outflow: 800, notes: '' },
    { id: 302, date: '2026-09-15', desc: 'غلاية للدور الرابع', inflow: 0, outflow: 465, notes: '' },
    { id: 303, date: '2026-09-15', desc: 'شحن عدادات الكهرباء من الدور السادس الى التاسع', inflow: 29305, outflow: 0, notes: '' },
    { id: 304, date: '2026-09-15', desc: 'شحن عدادات الكهرباء من الدور السادس الى التاسع', inflow: 0, outflow: 29002, notes: '' },
    { id: 305, date: '2026-09-16', desc: 'حوالة لشراء أرفف للمخازن بالشركة', inflow: 13750, outflow: 0, notes: '' },
    { id: 306, date: '2026-09-16', desc: 'حوالة لتعديل تذكرة عمرو عاطف', inflow: 7950, outflow: 0, notes: '' },
    { id: 307, date: '2026-09-17', desc: 'تحويل تعديل تذكرة عمرو عاطف', inflow: 0, outflow: 7950, notes: '' },
    { id: 308, date: '2026-09-17', desc: 'شراء أرفف لمخازن الشركة', inflow: 0, outflow: 14000, notes: '' },
    { id: 309, date: '2026-09-22', desc: 'حوالة على الجاري', inflow: 46334, outflow: 0, notes: '' },
    { id: 310, date: '2026-09-22', desc: 'شراء عدد 2 ماكينة باب', inflow: 0, outflow: 6700, notes: '' },
    { id: 311, date: '2026-09-22', desc: 'شراء عدد 20موس + بلوتوث لغرفة الاجتماعات', inflow: 0, outflow: 5679, notes: '' },
    { id: 312, date: '2026-09-22', desc: 'شراء قهوة للموظفين', inflow: 0, outflow: 15580, notes: '' },
    { id: 313, date: '2026-09-22', desc: 'حساب الهوس كيبنج تنظيف جناح الدكتور', inflow: 0, outflow: 5000, notes: '' },
    { id: 314, date: '2026-09-24', desc: 'شراء علاقات لجناح الدكتور', inflow: 0, outflow: 9584, notes: '' },
    { id: 315, date: '2026-09-24', desc: 'حوالة لمشتريات جناح الدكتور', inflow: 20000, outflow: 0, notes: '' },
    { id: 316, date: '2026-09-16', desc: 'مشتريات للدكتور', inflow: 0, outflow: 4442, notes: '' },
    { id: 317, date: '2026-09-26', desc: 'حليب- عسل- مياه', inflow: 0, outflow: 1042, notes: '' },
    { id: 318, date: '2026-09-26', desc: 'مياه', inflow: 0, outflow: 462, notes: '' },
    { id: 319, date: '2026-09-26', desc: 'مياه- زبده', inflow: 0, outflow: 464.5, notes: '' },
    { id: 320, date: '2026-09-27', desc: 'حساب الهوس كيبنج', inflow: 0, outflow: 2000, notes: '' },
    { id: 321, date: '2026-09-27', desc: 'شراء غلاية مياه', inflow: 0, outflow: 930, notes: '' },
    { id: 322, date: '2026-09-27', desc: 'شراء عتس', inflow: 0, outflow: 56, notes: '' },
    { id: 323, date: '2026-09-27', desc: 'طباعة سجل تجاري لشركة الانماء', inflow: 0, outflow: 296, notes: '' },
    { id: 324, date: '2026-09-27', desc: 'حساب الهوس كيبنج', inflow: 0, outflow: 2000, notes: '' },
    { id: 325, date: '2026-09-28', desc: 'حوالة على الجاري', inflow: 20000, outflow: 0, notes: '' },
    { id: 326, date: '2026-09-28', desc: 'حساب الهوس كيبنج', inflow: 0, outflow: 4000, notes: '' },
    { id: 327, date: '2026-09-29', desc: 'سحب لاحمد الباز', inflow: 0, outflow: 10000, notes: '' },
    { id: 328, date: '2026-09-29', desc: 'تحويل لايجار سيارة', inflow: 0, outflow: 10354, notes: '' },
    { id: 329, date: '2026-09-30', desc: 'تجديد انترنت الخط الارضي لرقم 0223498873', inflow: 0, outflow: 1946, notes: '' },
    { id: 330, date: '2026-09-30', desc: 'دفع فاتورة الخد الارضي لرقم 0223498873', inflow: 0, outflow: 230, notes: '' },
    { id: 331, date: '2026-10-01', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 332, date: '2026-10-01', desc: 'صيانة فلاتر من الدور الرابع الى الثامن', inflow: 0, outflow: 4155, notes: '' },
    { id: 333, date: '2026-10-02', desc: 'حساب الهوس كيبنج تنظيف جناح الدكتور', inflow: 0, outflow: 1000, notes: '' },
    { id: 334, date: '2026-10-04', desc: 'تحول لشحن شقة النيل', inflow: 0, outflow: 1500, notes: '' },
    { id: 335, date: '2026-10-04', desc: 'حوالة لشحن الكهرباء وصيانة الفلاتر', inflow: 65000, outflow: 0, notes: '' },
    { id: 336, date: '2026-10-04', desc: 'شحن عدادات الكهرباء للدور السادس الى التاسع', inflow: 0, outflow: 59484, notes: '' },
    { id: 337, date: '2026-10-05', desc: 'حوالة على الجاري', inflow: 35000, outflow: 0, notes: '' },
    { id: 338, date: '2026-10-05', desc: 'سداد فاتورة كهرباء الدور الرابع والخامس', inflow: 0, outflow: 34740, notes: '' },
    { id: 339, date: '2026-10-19', desc: 'شراء بطارية للكاميرا الخاصة بالشركة', inflow: 0, outflow: 827, notes: '' },
    { id: 340, date: '2026-10-20', desc: 'حوالة على الجاري لشحن عدادات الكهرباء من السادس الى التاسع', inflow: 38526, outflow: 0, notes: '' },
    { id: 341, date: '2026-10-20', desc: 'شحن عدادات الكهرباء للدور السادس الى التاسع', inflow: 0, outflow: 36290.33, notes: '' },
    { id: 342, date: '2026-10-29', desc: 'حساب الهوس كيبنح', inflow: 0, outflow: 2000, notes: '' },
    { id: 343, date: '2026-10-29', desc: 'توصيل سجاد النساجون الشرقيون لشقة النيل', inflow: 0, outflow: 1800, notes: '' },
    { id: 344, date: '2026-11-01', desc: 'حوالة على الجاري', inflow: 44477, outflow: 0, notes: 'حوالة مجمعة لشراء البنود المطلوبة', plannedItems: ['قهوة', 'توصيل السجاد لشقة النيل', 'شراء حوض وجه', 'حساب الهوس كيبنج', 'شهرية المهملات', 'فواتير الخطوط الأرضي', 'سباك لصيانة حمام الثامن والسادس'] },
    { id: 345, date: '2026-11-01', desc: 'قهوة', inflow: 0, outflow: 16400, notes: '' },
    { id: 346, date: '2026-11-01', desc: 'شراء حوض وجه', inflow: 0, outflow: 1385, notes: '' },
    { id: 347, date: '2026-11-01', desc: 'شهرية المهملات', inflow: 0, outflow: 2200, notes: '' },
    { id: 348, date: '2026-11-01', desc: 'صيانة حمامات الدور الثامن', inflow: 0, outflow: 2000, notes: '' },
    { id: 349, date: '2026-11-05', desc: 'شراء عدد 2 شفاط لغرفة الكهرباء بالدور السادس والدور السابع', inflow: 0, outflow: 1340, notes: '' },
];


let custodyTransactions = JSON.parse(localStorage.getItem('buffet_v9_custody')) || JSON.parse(JSON.stringify(SEED_CUSTODY));
// Ensure latest plannedItems on row 344 are synced
if (custodyTransactions && Array.isArray(custodyTransactions)) {
    const r344 = custodyTransactions.find(r => r.id === 344);
    const s344 = SEED_CUSTODY.find(r => r.id === 344);
    if (r344 && s344 && (!r344.plannedItems || !r344.plannedItems.length)) {
        r344.plannedItems = s344.plannedItems;
        if (!r344.notes) r344.notes = s344.notes;
    }
}
let custodyInvoicesMap = JSON.parse(localStorage.getItem('buffet_v9_custody_invoices')) || {};
let poPricingMap = JSON.parse(localStorage.getItem('buffet_v9_po_pricing')) || {};
let supplierPOs = JSON.parse(localStorage.getItem('buffet_v9_supplier_pos')) || JSON.parse(JSON.stringify(SEED_DIRECT_SUPPLIER_POS));
let monthlyCoreExpenses = JSON.parse(localStorage.getItem('buffet_v9_monthly_core')) || JSON.parse(JSON.stringify(SEED_MONTHLY_CORE_EXPENSES));
let activeCustodySubtab = 'ledger';
let custodyCameraStream = null;

let cycleStartDay = Number(localStorage.getItem('buffet_v9_cycle_day')) || 19;
let activeCycleKey = 'CURRENT';

// Active UI filters
let activeModule = 'buffet'; // 'buffet' | 'furniture' | 'hq' | 'custody'
let activeTab = 'dash';
let activeCategoryFilter = 'الكل';
let activeFurnitureCatFilter = 'الكل';
let activeHqCatFilter = 'الكل';
let activeFloorFilter = 'الكل';
let searchQuery = '';

// Selected Floor in Smart Issue Terminal & Furniture Inventory
let terminalFloor = 'الدور الرابع';
let selectedFurnitureFloor = 'الدور الرابع';

// Charts instances
let floorBarChart = null;
let topItemsPieChart = null;
let stockHealthChart = null;

// --- FULL BILINGUAL TRANSLATION ENGINE (ARABIC <-> ENGLISH) ---
const EN_EXACT_MAP = {
    // Lock Screen, Portal & Branding
    'المجموعة الإستشارية': 'Consultancy Group',
    'المجموعة الإستشارية | Consultancy Group': 'Consultancy Group',
    'إدارة المرافق - مدير المرافق': 'Facilities Management - Facilities Manager',
    'منظومة إدارة المرافق والأصول — منطقة محمية 🔒': 'Facilities & Asset Management System — Protected Area 🔒',
    'نظام إدارة البوفيه والنظافة — منطقة محمية 🔒': 'Facilities Management System — Protected Area 🔒',
    'أدخل كلمة المرور للفتح...': 'Enter password to unlock...',
    '❌ كلمة المرور غير صحيحة، حاول مرة أخرى': '❌ Incorrect password, please try again',
    'فتح النظام والمزامنة': 'Unlock & Sync System',
    'محمي بتشفير SHA-256 ومزامنة Google Firebase': 'Protected by SHA-256 Encryption & Google Firebase Sync',
    'المجموعة الإستشارية | البوفيه والنظافة': 'Facilities Management - Facilities Manager',
    'Consultancy Group - إدارة البوفيه والنظافة': 'Facilities Management - Facilities Manager',
    'اختر القسم المراد إدارته أو استعراض تقاريره الآن:': 'Select the department or inventory module to manage:',
    'مصروفات البوفيه': 'Buffet Expenses',
    'إدارة المخزن الرئيسي والأرصدة، تسجيل صرف الطوابق (4 إلى 9)، سجل الحركات، تحليل الطوابق، وأمر شراء للمورد.': 'Manage main warehouse stock, floor dispensing (Floors 4-9), transaction audit logs, floor analysis, and supplier purchase orders.',
    'دخول لقسم مصروفات البوفيه': 'Open Buffet Expenses',
    'جرد أصول الشركة': 'Company Assets Inventory',
    'جرد وتسجيل الأعداد الفعلية لأثاث ومعدات الشركة من الدور الرابع إلى الدور التاسع (مكاتب، كراسي، تكييفات يونيون إير وكارير، اجتماعات، إضاءة) مع تحليل الطوابق.': 'Record actual counts of company furniture and equipment across Floors 4 to 9 (desks, chairs, Unionaire & Carrier ACs, meeting tables, lighting) with floor analysis.',
    'دخول لجرد أصول الشركة (4-9)': 'Open Company Furniture (4-9)',
    'مقر الإدارة العليا': 'Executive Management HQ',
    'جرد تجهيزات وأثاث وأجهزة مقر الإدارة العليا بالكامل (أنتريه سرير، غسالات LG ودورين، مطبخ، شاشات، ساوند سيستم، PS5، سفرة، اجتماعات) وتقارير الإدارة العليا.': 'Complete inventory of Executive Management HQ furniture and appliances (sofa bed, LG & stacked washers, kitchen, screens, sound system, PS5, dining, meeting tables).',
    'دخول لمقر الإدارة العليا': 'Open Executive Management HQ',
    '📊 عرض وإرسال تحليل الطوابق الشامل للإدارة العليا': '📊 View & Send Comprehensive Floors Analysis to Senior Management',
    '🔗 مشاركة الرابط والباركود': '🔗 Share Link & QR Code',
    'الأقسام الرئيسية (3)': 'Main Modules (3)',
    'الأقسام الرئيسية': 'Main Modules',
    'مصروفات البوفيه والعمليات': 'BUFFET EXPENSES & OPERATIONS',
    'جرد الأصول والإدارة العليا': 'ASSET INVENTORY & EXECUTIVE HQ',
    'جرد أصول الشركة (4-9)': 'Company Furniture (4-9)',
    'تحليل الطوابق للأصول': 'Furniture Floors Analysis',

    // Sidebar & Navigation
    'لوحة التحكم والعمليات': 'CONTROL & OPERATIONS',
    'لوحة التحكم والتحليلات': 'Analytics Dashboard',
    'المخزن والأرصدة': 'Warehouse Inventory',
    'المخزن الرئيسي والأرصدة': 'Warehouse Inventory',
    'تسجيل صرف الطوابق': 'Floor Issue Terminal',
    '⚡ سريع': '⚡ Fast',
    'التقارير والمشتريات': 'REPORTS & PROCUREMENT',
    'تحليل الطوابق (4-9)': 'Floors Matrix (4-9)',
    'سجل الحركات والتدقيق': 'Audit History Log',
    'أمر شراء للمورد': 'Supplier Purchase Order',
    'أمر شراء المورد': 'Supplier Purchase Order',
    'أمر شراء المورد الذكي': 'Supplier Purchase Order',
    'طباعة أمر شراء للمورد': 'Print Purchase Order',
    'الدورة الشهرية المعتمدة:': 'Active Monthly Cycle:',
    'المظهر': 'Theme',

    // Furniture & HQ Modules
    'أنواع الأثاث والأجهزة': 'Furniture & Equipment Types',
    'أنواع أصول الشركة': 'Company Asset Types',
    'مصنفة في 6 مجموعات رئيسية': 'Categorized across 6 main groups',
    'مسجلة في جرد الشركة': 'Registered in company inventory',
    'إجمالي قطع الدور المحدد': 'Selected Floor Total Units',
    'إجمالي أثاث جميع الأدوار (4-9)': 'Total Furniture (Floors 4-9)',
    'إجمالي أصول جميع الأدوار (4-9)': 'Total Assets (Floors 4-9)',
    'مجموع الأعداد المتواجدة بالفعل': 'Sum of actual existing units',
    'إجمالي التكييفات (يونيون إير + كارير)': 'Total ACs (Unionaire + Carrier)',
    'بجميع أدوار الشركة (4-9)': 'Across all company floors (4-9)',
    'اختر الطابق لتسجيل ومراجعة الأعداد المتواجدة بالفعل (من الدور الرابع إلى الدور التاسع)': 'Select Floor to Record & Review Actual Existing Counts (Floors 4 to 9)',
    '📊 عرض تحليل الطوابق الشامل للإدارة العليا': '📊 View Comprehensive Floors Analysis',
    'طباعة جرد الطابق المحدد': 'Print Selected Floor Inventory',
    'طباعة جرد جميع الأدوار (4-9)': 'Print All Floors (4-9)',
    'استعادة الأصناف الافتراضية': 'Restore Default Items',
    'حذف الجميع': 'Delete All',
    'البيان / اسم الصنف': 'Item Description / Name',
    'المجموعة / التصنيف': 'Group / Category',
    'التصنيف / النوع': 'Category / Type',
    'العدد المتواجد بالفعل': 'Actual Existing Count',
    'ملاحظات / حالة الصنف بالطابق': 'Notes / Condition on Floor',
    'إجمالي الصنف بالشركة (4-9)': 'Company Total (Floors 4-9)',
    'تقرير جرد وتحليل أثاث الطوابق (الأدوار 4 إلى 9) — جاهز للعرض والإرسال للإدارة العليا': 'Floors Furniture Inventory & Analysis Report (Floors 4 to 9) — Executive Report',
    'تحليل ومصفوفة جرد الطوابق الشاملة (الأدوار 4 إلى 9) — جاهز للعرض والإرسال للإدارة العليا': 'Comprehensive Floors Furniture Analysis Matrix (Floors 4 to 9) — Executive Report',
    'طباعة تقرير جرد وتحليل أثاث الطوابق (PDF)': 'Print Floors Furniture Analysis Report (PDF)',
    'طباعة تقرير تحليل الطوابق للإدارة العليا (PDF)': 'Print Floors Analysis Report (PDF)',
    'إرسال التحليل للإدارة العليا (واتساب)': 'Send Analysis via WhatsApp',
    'تعديل جرد طابق محدد': 'Edit Specific Floor',
    'اسم الصنف / الأثاث': 'Furniture / Item Name',
    'إجمالي الشركة': 'Company Total',
    'بنود تجهيزات الإدارة العليا': 'Executive HQ Asset Types',
    'أثاث وأجهزة وتجهيزات فندقية': 'Furniture, appliances & executive assets',
    'إجمالي القطع والأجهزة المتواجدة': 'Total Existing Units & Appliances',
    'بمقر الإدارة العليا': 'In Executive Management HQ',
    'تحليل الطوابق الشامل (4-9)': 'Comprehensive Floors Analysis (4-9)',
    'متاح للعرض الفوري': 'Available Instantly',
    'للعرض أو الإرسال للإدارة العليا بأي وقت': 'View or send to Senior Management anytime',
    'جرد أثاث وتجهيزات مقر الإدارة العليا': 'Executive Management HQ Furniture & Equipment Inventory',
    'طباعة تقرير مقر الإدارة العليا': 'Print Executive HQ Report',
    '📊 عرض تحليل الطوابق (أثاث 4-9)': '📊 Floors Analysis (Furniture 4-9)',
    '☕ عرض تحليل الطوابق (البوفيه 4-9)': '☕ Floors Analysis (Buffet 4-9)',
    'اسم الصنف / البيان': 'Item Name / Description',
    'الحالة الفنية': 'Condition',
    'ملاحظات / تفاصيل إضافية': 'Notes / Details',
    'إضافة صنف جديد لجرد أصول الشركة': 'Add New Item to Company Assets Inventory',
    'اسم الصنف / الأثاث:': 'Furniture / Item Name:',
    'مثال: دولاب ملفات، شاشة عرض، طابعة...': 'e.g., Filing Cabinet, Display Screen, Printer...',
    'المجموعة / التصنيف:': 'Group / Category:',
    'التصنيف:': 'Category:',
    'العدد في الطابق الحالي:': 'Count in Current Floor:',
    'حفظ وإضافة للجرد': 'Save & Add to Inventory',
    'إضافة صنف جديد لمقر الإدارة العليا': 'Add New Item to Executive Management HQ',
    'اسم الصنف / التجهيز:': 'Item / Asset Name:',
    'مثال: ماكينة قهوة إسبريسو، خزنة، نجفة...': 'e.g., Espresso Machine, Safe, Chandelier...',
    'العدد المتواجد بالفعل:': 'Actual Existing Count:',
    'حفظ وإضافة': 'Save & Add',

    // Furniture & HQ Seed Items & Categories (6 Organized Groups + 27 Items)
    'الكل (27)': 'All (27)',
    '🪑 مكاتب وأثاث مكتبي': '🪑 Desks & Office Furniture',
    '❄️ تكييفات وشاشات': '❄️ ACs & Screens',
    '💡 إضاءة وكهرباء': '💡 Lighting & Electrical',
    '☕ أجهزة البوفيه والمرافق': '☕ Buffet & Facility Appliances',
    '🚪 أبواب وشبابيك وستائر': '🚪 Doors, Windows & Curtains',
    '🧯 أمن وسلامة ونظافة': '🧯 Safety & Waste Equipment',
    'مكاتب وأثاث مكتبي': 'Desks & Office Furniture',
    'تكييفات وشاشات': 'ACs & Screens',
    'أجهزة البوفيه والمرافق': 'Buffet & Facility Appliances',
    'أبواب وشبابيك وستائر': 'Doors, Windows & Curtains',
    'أمن وسلامة ونظافة': 'Safety & Waste Equipment',
    'مكاتب وطاولات': 'Desks & Tables',
    'مقاعد وأثاث': 'Seating & Furniture',
    'أجهزة وتكييفات': 'Appliances & ACs',
    'تجهيزات ومفروشات': 'Furnishings & Curtains',
    'إضاءة وكهرباء': 'Lighting & Electrical',
    'مكتب مدير': 'Manager Desk',
    'مكاتب مديرين': 'Manager Desks',
    'مكتب موظفين': 'Employee Desk',
    'مكاتب موظفين': 'Employee Desks',
    'مكتب استقبال': 'Reception Desk',
    'كراسي': 'Chairs',
    'انتريه': 'Lounge / Sofa Set',
    'أنتريه': 'Lounge / Sofa Set',
    'ترابيزة اجتماعات كبيرة': 'Large Meeting Table',
    'ترابيزة اجتماعات صغيرة': 'Small Meeting Table',
    'دولاب': 'Cabinet / Cupboard',
    'لوكر': 'Locker',
    'تكييف يونيون اير': 'Air Conditioner - Unionaire',
    'تكييفات - يونيون إير': 'Air Conditioners - Unionaire',
    'تكييف كارير': 'Air Conditioner - Carrier',
    'تكييفات - كارير': 'Air Conditioners - Carrier',
    'شاشة': 'Display Screen / TV',
    'كشاف كبير': 'Large Light Fixture',
    'كشافات كبيرة': 'Large Light Fixtures',
    'كشاف صغير': 'Small Light Fixture',
    'كشافات صغيرة': 'Small Light Fixtures',
    'ثلاجة': 'Refrigerator',
    'ميكروويف': 'Microwave Oven',
    'مايكروويف': 'Microwave Oven',
    'غلاية مياه': 'Water Kettle',
    'ماكينة قهوة': 'Coffee Machine',
    'سخان': 'Water Heater',
    'شفاط': 'Exhaust Fan',
    'ستائر': 'Curtains / Blinds',
    'أبواب خشبية': 'Wooden Doors',
    'شباك الوميتال': 'Alumetal Window',
    'باب بلكونه الوميتال': 'Alumetal Balcony Door',
    'طفايات': 'Fire Extinguishers',
    'باسكت زباله للموظفين': 'Employee Waste Basket',
    'باسكت زباله مجمع': 'Central Waste Bin',
    'غرف ومعيشة': 'Living & Bedroom',
    'مطبخ وتجهيزات': 'Kitchen & Appliances',
    'أجهزة كهربائية': 'Electrical Appliances',
    'مفروشات وديكور': 'Carpets & Decor',
    'مكاتب واجتماعات': 'Offices & Meetings',
    'أنظمة ترفيه وصوتيات': 'Entertainment & AV',
    'أنتريه سرير': 'Sofa Bed Set',
    'مراتب': 'Mattresses',
    'مطبخ': 'Kitchen Unit',
    'غسالة - إل جي أوتوماتيك (LG)': 'Washing Machine - LG Automatic',
    'غسالة - دورين': 'Washing Machine - Double Deck (Stacked)',
    'تكييف': 'Air Conditioner',
    'سجاد': 'Carpets / Rugs',
    'مكتب': 'Executive Desk',
    'سفرة': 'Dining Table Set',
    'ترابيزة اجتماعات': 'Meeting Table',
    'نظام ساوند سيستم': 'Sound System',
    'بلاي ستيشن 5 (PlayStation 5)': 'PlayStation 5 Console',
    'غسالة أطباق': 'Dishwasher',
    'ممتاز': 'Excellent',
    'جيد جداً': 'Very Good',
    'يحتاج صيانة': 'Needs Maintenance',

    // Top Header & Actions
    'نظرة شمولية على مؤشرات الأداء، الأرصدة، واستهلاك الطوابق': 'Comprehensive overview of KPIs, warehouse stock, and floor consumption',
    'إدارة وتعديل الأصناف، الأرصدة الافتتاحية، وحدود الأمان': 'Manage and edit items, opening balances, and safety thresholds',
    'محطة الصرف السريع والمباشر للطوابق والمستلمين': 'Fast and direct dispensing terminal for floors and recipients',
    'مصفوفة مقارنة الاستهلاك عبر جميع الأدوار من الدور 4 إلى 9': 'Consumption comparison matrix across all floors (Floor 4 to 9)',
    'سجل تدقيق لجميع حركات الصرف الفردية مع إمكانية طباعة السندات': 'Audit log of all individual issue transactions with voucher printing',
    'توليد تلقائي لأمر الشراء الموجه للمورد بناءً على معدل الاستهلاك': 'Automated supplier purchase order generation based on consumption rate',
    'بحث سريع في الأصناف، الطوابق، المستلمين...': 'Quick search in items, floors, recipients...',
    'سحابي: غير مفعل': 'Cloud: Disconnected',
    '🟢 سحابي: متزامن لحظياً': '🟢 Cloud: Live Synced',
    'سحابي: محلي': 'Cloud: Local Only',
    '🔒 في انتظار كلمة المرور': '🔒 Locked',
    'مشاركة': 'Share',
    'قفل': 'Lock',
    'صرف سريع': 'Quick Issue',
    'توريد جديد': 'Stock In / Supply',
    '✨ الذهبي الملكي (Royal Gold)': '✨ Royal Gold',
    '🌿 الزمردي الفاخر (Imperial Emerald)': '🌿 Imperial Emerald',
    '🌊 الأزرق التنفيذي (Sapphire Blue)': '🌊 Sapphire Blue',
    '🔮 البنفسجي العصري (Amethyst)': '🔮 Amethyst Purple',
    'تصدير نسخة احتياطية (JSON)': 'Export Backup (JSON)',
    'استعادة من ملف': 'Restore from File',
    'تصدير كشف المخزن (Excel/CSV)': 'Export Inventory (Excel/CSV)',
    'تصدير سجل الحركات (Excel/CSV)': 'Export Transactions (Excel/CSV)',
    'تصدير مصفوفة الاستهلاك (Excel/CSV)': 'Export Consumption Matrix (Excel/CSV)',
    'ضبط بداية الدورة': 'Cycle Settings',
    'تصفير وإعادة ضبط النظام': 'Reset & Format System',
    'إصلاح وتصفير النظام': 'Reset & Format System',

    // Cycle Banner & KPIs
    'عرض بيانات دورة:': 'Display Cycle Data:',
    'تعديل يوم الدورة': 'Edit Cycle Day',
    'أنواع الأصناف': 'Registered Item Types',
    'أنواع الأصناف المسجلة': 'Registered Item Types',
    'مصنفة حسب 4 فئات تشغيلية': 'Categorized across 4 operational groups',
    'الرصيد المتاح بالمخزن': 'Warehouse Stock Units',
    'إجمالي الرصيد بالمخزن': 'Warehouse Stock Units',
    'إجمالي القطع الجاهزة للصرف': 'Total units ready for issue',
    'المنصرف خلال الدورة': 'Cycle Total Issued',
    'إجمالي المنصرف بالدورة': 'Cycle Total Issued',
    'إجمالي المنصرف للأدوار 4 - 9': 'Total issued to Floors 4 - 9',
    'الأصناف الحرجة / العجز': 'Critical / Shortage Items',
    'أصناف قاربت أو تجاوزت حد الأمان': 'Items near or below safety limit',
    'صحة وتوفر المخزون': 'Inventory Health Rate',
    'صحة جاهزية المخزن': 'Inventory Health Rate',
    'معدل كفاية المواد للدورة': 'Material adequacy rate for cycle',

    // Charts & Dashboard Table
    'استهلاك الطوابق بالدورة (الأدوار 4 إلى 9)': 'Floor Consumption in Cycle (Floors 4 to 9)',
    'بيانات تفاعلية': 'Interactive Data',
    'أكثر 5 أصناف طلباً واستهلاكاً': 'Top 5 Most Consumed Items',
    'الدورة الحالية': 'Current Cycle',
    'ملخص حركة المخزن وتوازن الدورة': 'Warehouse Movement & Cycle Balance Summary',
    'الكل': 'All',
    '☕ مشروبات وضيافة': '☕ Beverages & Hospitality',
    '🧼 منظفات ومطهرات': '🧼 Detergents & Sanitizers',
    '🧻 مناشف ومناديل': '🧻 Towels & Tissues',
    '🧹 أدوات ونظافة': '🧹 Cleaning Tools',
    '☕ مشروبات': '☕ Beverages',
    '🧼 منظفات': '🧼 Detergents',
    '🧻 مناديل': '🧻 Tissues',
    '🧹 أدوات': '🧹 Tools',
    'مشروبات وضيافة': 'Beverages & Hospitality',
    'منظفات ومطهرات': 'Detergents & Sanitizers',
    'مناشف ومناديل': 'Towels & Tissues',
    'أدوات ونظافة': 'Cleaning Tools',
    '⚡ صرف': '⚡ Issue',
    'إجراء سريع': 'Actions',

    // Inventory & Terminal
    'المخزن الرئيسي وتعديل الأصناف': 'Main Warehouse & Item Management',
    'إضافة صنف جديد': 'Add New Item',
    'إضافة صنف': 'Add Item',
    'تسجيل توريد': 'Stock In / Supply',
    'تصدير Excel': 'Export Excel',
    'حذف': 'Delete',
    '١. اختر الطابق المستهدف بالصرف': '1. Select Target Floor for Issue',
    'الدور الرابع': 'Floor 4',
    'الدور الخامس': 'Floor 5',
    'الدور السادس': 'Floor 6',
    'الدور السابع': 'Floor 7',
    'الدور الثامن': 'Floor 8',
    'الدور التاسع': 'Floor 9',
    'الدور 4': 'Floor 4',
    'الدور 5': 'Floor 5',
    'الدور 6': 'Floor 6',
    'الدور 7': 'Floor 7',
    'الدور 8': 'Floor 8',
    'الدور 9': 'Floor 9',
    ' جميع الأدوار': 'All Floors',
    'جميع الأدوار': 'All Floors',
    'تاريخ الصرف:': 'Issue Date:',
    'اسم المستلم (اختر أو اكتب جديد):': 'Recipient Name (Select or type new):',
    'اكتب أو اختر اسم المستلم...': 'Type or select recipient name...',
    'بيان / ملاحظات (اختياري):': 'Notes / Purpose (Optional):',
    'مثال: صرف أسبوعي، ضيافة قاعة اجتماعات...': 'e.g., Weekly issue, meeting room hospitality...',
    '٢. حدد كميات المواد المراد صرفها': '2. Specify Quantities to Issue',
    'الكمية المنصرفة': 'Issued Qty',
    'الأصناف المحددة:': 'Selected Items:',
    'إجمالي القطع المنصرفة:': 'Total Units to Issue:',
    'تأكيد وحفظ الصرف': 'Save Transaction',
    'حفظ وطباعة إذن الصرف': 'Save & Print Voucher',

    // Floors Matrix, History & PO
    'مصفوفة استهلاك الطوابق بالدورة (الأدوار 4 - 9)': 'Floors Consumption Matrix (Floors 4 - 9)',
    'طباعة التقرير': 'Print Report',
    'إجمالي الاستهلاك': 'Total Consumed',
    'إجمالي استهلاك الطابق': 'Total Floor Consumption',
    'سجل حركات الصرف والتدقيق': 'Issue Transactions & Audit Log',
    'حذف جميع الحركات': 'Clear All Logs',
    'إجراءات': 'Actions',
    'أمر شراء المورد المقترح بناءً على استهلاك الدورة': 'Suggested Supplier Purchase Order (Based on Cycle Burn Rate)',
    'طباعة أمر الشراء للمورد': 'Print Purchase Order',
    'الرصيد الفعلي الحالي': 'Available Stock',
    'الكمية المقترحة للشراء': 'Suggested Order Qty',

    // Modals (Add Item, Supply, Cycle, Alerts, Share, Cloud)
    'إضافة صنف جديد للمخزن': 'Add New Item to Warehouse',
    'اسم الصنف:': 'Item Name:',
    'اسم الصنف': 'Item Name',
    'مثال: مناديل فاخرة، شاي، صابون...': 'e.g., Facial Tissues, Tea, Hand Soap...',
    'الفئة التشغيلية:': 'Operational Category:',
    'الوحدة:': 'Unit:',
    'الوحدة': 'Unit',
    'عدد، لتر، كيلو، علبة...': 'Pcs, Liter, Kg, Box...',
    'الرصيد الابتدائي:': 'Initial Stock:',
    'حد الأمان للتنبيه:': 'Safety Alert Limit:',
    'إلغاء': 'Cancel',
    'حفظ الصنف': 'Save Item',
    'تسجيل توريد وتغذية المخزن الرئيسي': 'Register Stock Supply & Replenishment',
    'تاريخ وصول التوريد:': 'Supply Arrival Date:',
    'الرصيد الحالي': 'Current Stock',
    'الكمية الموردة': 'Supplied Qty',
    'تأكيد وإضافة للمخزن': 'Confirm & Add to Stock',
    'تعديل يوم بداية الدورة الشهرية': 'Edit Monthly Cycle Start Day',
    'حدد اليوم المعتاد في الشهر الذي تبدأ منه الدورة (مثال: يوم 19 يعني أن الدورة تبدأ من 19 الشهر وتنتهي يوم 18 من الشهر التالي):': 'Specify the day of the month when the cycle begins (e.g., Day 19 means the cycle runs from the 19th to the 18th of next month):',
    'يوم بداية الدورة (1 - 28):': 'Cycle Start Day (1 - 28):',
    'حفظ وتطبيق': 'Save & Apply',
    'مركز تنبيهات المخزون الحرج': 'Inventory Stock Alerts Center',
    'إغلاق': 'Close',
    'انتقل لأمر الشراء': 'Go to Purchase Order',
    '➕ توريد': '➕ Supply',
    'مشاركة البرنامج والفتح من أي مكان': 'Share Application & Access Anywhere',
    'يمكنك فتح هذا البرنامج من لابتوب المنزل أو الهاتف المحمول أو مشاركة الرابط مع الزملاء للاطلاع على التحديثات لحظة بلحظة:': 'Open this application from your home laptop or mobile phone, or share the link with colleagues for real-time updates:',
    'رابط البرنامج الحالي المباشر:': 'Direct Live Application Link:',
    'نسخ الرابط': 'Copy Link',
    'إرسال الرابط عبر واتساب': 'Send Link via WhatsApp',
    'مشاركة سريعة': 'Quick Share',
    '📱 امسح الباركود لفتحه فوراً من كاميرا هاتفك:': '📱 Scan QR Code with your phone camera to open immediately:',
    'مسح سريع من الموبايل': 'Quick Mobile Scan',
    'حالة المزامنة السحابية الحية:': 'Live Cloud Sync Status:',
    'عند تفعيل المزامنة السحابية، أي عملية صرف أو توريد تسجلها من العمل ستظهر فوراً على اللابتوب في المنزل بدون أي تدخل يدوي!': 'When Cloud Sync is active, any issue or supply recorded at work appears immediately on your home laptop or phone!',
    'إعدادات قاعدة البيانات السحابية': 'Cloud Database Settings',
    'مزامنة فورية الآن': 'Sync Now',
    'إعدادات المزامنة السحابية الفورية (Google Firebase)': 'Real-Time Cloud Sync Configuration (Google Firebase)',
    'ما هي المزامنة السحابية؟': 'What is Cloud Sync?',
    'تتيح لك ربط البرنامج بقاعدة بيانات Google Cloud مجانية مدى الحياة، بحيث ترتبط كافة الأجهزة (العمل، لابتوب المنزل، والهواتف) بنفس البيانات وتحدث الأرصدة تلقائياً في نفس اللحظة (Real-Time).': 'Connects the app to your Google Cloud Firestore database so all devices (office, home laptop, and phones) share live balances in real time.',
    'معرف مساحة العمل المشتركة (Workspace ID):': 'Shared Workspace ID:',
    'مثال: company_buffet_2026': 'e.g., company_buffet_2026',
    'أدخل نفس المعرف في أي جهاز آخر ليرتبط بنفس السجل المشترك.': 'Enter the same Workspace ID on any other device to link to the same shared records.',
    'إعدادات مشروع Google Firebase (JSON Config):': 'Google Firebase Project Configuration (JSON Config):',
    'يمكنك إنشاء مشروع مجاني على': 'You can create a free project on',
    'ولصق الإعدادات هنا.': 'and paste the config here.',
    'حفظ واختبار الاتصال السحابي': 'Save & Test Cloud Connection',
    'إلغاء الربط والرجوع للمحلي': 'Disconnect & Use Local Mode',
    'تنزيل للكمبيوتر': 'Download for PC',
    'الرئيسية': 'Home',
    '🏠 الصفحة الرئيسية (الأقسام الـ 3)': '🏠 Main Home (3 Modules)',
    '☕ قسم مصروفات البوفيه (حركة يومية ومخزن)': '☕ Buffet Expenses Module (Daily Stock & Dispensing)',
    '🪑 جرد الأصول الثابتة (أثاث الطوابق 4-9 • بدون مخزن)': '🪑 Fixed Assets Inventory (Floors 4-9 • Direct Use)',
    '🏛️ سجل أصول وتجهيزات مقر الإدارة العليا': '🏛️ Executive Management HQ Assets Registry',
    'حركة تشغيلية شبه يومية • مخزن وصرف': 'Daily Operations • Warehouse & Dispensing',
    'أصول ثابتة بالطوابق • استخدام مباشر بدون مخزن': 'Fixed Floor Assets • Direct Use (No Warehouse)',
    'أصول وتجهيزات خاصة • استخدام مباشر': 'Executive HQ Assets • Direct Use',
    'جرد أصول الشركة (الأصول الثابتة)': 'Company Furniture (Fixed Assets)',
    'واجهة مستقلة للمستهلكات اليومية: المخزن الرئيسي والأرصدة، تسجيل صرف الطوابق (4 إلى 9)، سجل الحركات، تحليل الاستهلاك، وأمر شراء للمورد.': 'Dedicated interface for daily consumables: Warehouse Stock, Floor Dispensing (4 to 9), Audit Log, Consumption Matrix, and Supplier Purchase Order.',
    'واجهة مستقلة للأصول الثابتة المتواجدة فعلياً مع الموظفين بالأدوار (4 إلى 9): مكاتب، كراسي، تكييفات يونيون إير وكارير، اجتماعات، إضاءة، ومصفوفة تحليل الطوابق.': 'Dedicated interface for fixed assets in active use across Floors 4 to 9: Desks, Chairs, Unionaire & Carrier ACs, Meeting Rooms, Lighting, and Floors Analysis Matrix.',
    'واجهة مستقلة لأصول وتجهيزات مقر الإدارة العليا (أنتريه سرير، غسالات LG ودورين، مطبخ، شاشات، ساوند سيستم، PS5، سفرة، اجتماعات) وحالتها الفنية.': 'Dedicated interface for Executive Management HQ assets & appliances (Sofa Bed, LG & Twin Washers, Kitchen, Screens, Sound System, PS5, Dining, Meeting Tables) and condition.',
    'سجل الأصول الثابتة (بدون مخزن)': 'Fixed Assets Registry (No Warehouse)',
    'جرد أصول الطوابق (4-9)': 'Floors Fixed Assets (4-9)',
    'مصفوفة تحليل الطوابق الشاملة': 'Comprehensive Floors Matrix',
    'انتقال سريع لأدوار الشركة': 'Quick Floor Jump',
    'سجل أصول وتجهيزات المقر': 'Executive HQ Registry',
    'جرد مقر الإدارة العليا': 'Executive HQ Inventory',
    'إضافة أصل ثابت': 'Add Fixed Asset',
    'مصفوفة الطوابق (4-9)': 'Floors Matrix (4-9)',
    'إضافة تجهيز للمقر': 'Add HQ Asset',
    'أصول ثابتة متواجدة قيد الاستخدام الفعلي مع الموظفين بالطابق (بدون مخزن)': 'Fixed assets actively in use by employees on this floor (direct use, no warehouse)',
    'سجل مستقل للأصول والأجهزة والتجهيزات الفندقية بمقر الإدارة العليا (قيد الاستخدام المباشر)': 'Dedicated registry of Executive Management HQ assets, appliances & furnishings (direct use)',
    '🪑 مكاتب وطاولات': '🪑 Desks & Tables',
    '🛋️ مقاعد وأثاث': '🛋️ Seating & Furniture',
    '❄️ أجهزة وتكييفات': '❄️ ACs & Appliances',
    '🪟 تجهيزات ومفروشات': '🪟 Curtains & Fittings',
    '💡 إضاءة وكهرباء': '💡 Lighting & Electrical',
    '🛋️ غرف ومعيشة': '🛋️ Living & Rooms',
    '🪑 مكاتب واجتماعات': '🪑 Offices & Meetings',
    '❄️ أجهزة كهربائية': '❄️ Electrical Appliances',
    '📺 أنظمة ترفيه وصوتيات': '📺 Entertainment & Audio',
    '🍽️ مطبخ وتجهيزات': '🍽️ Kitchen & Catering',
    '🖼️ مفروشات وديكور': '🖼️ Carpets & Decor',
    'نقل وتثبيت البرنامج كنافذة سطح مكتب على أي جهاز كمبيوتر جديد:': 'Install as Standalone Desktop App on Any New Computer:',
    'إذا قمت بتغيير الويندوز أو انتقلت لجهاز جديد، افتح هذا الرابط واضغط الزر بالأسفل لتحميل البرنامج كاملاً بآخر تعديلاتك وأرصدتك مع أداة تثبيته كبرنامج مستقل على سطح المكتب (بدون متصفح):': 'If you reinstall Windows or move to a new PC, open this link and click below to download the full app with your latest data plus the Desktop App installer:',
    'تحميل البرنامج + أداة تثبيت سطح المكتب بأحدث البيانات': 'Download Full Desktop App + Shortcut Installer (With Latest Data)',

    // Seed Inventory Item Names
    'مناديل الحمامات': 'Bathroom Tissues',
    'مناديل الوضوء': 'Ablution Tissues',
    'مناديل المكتب': 'Desk Facial Tissues',
    'ديتول': 'Dettol Antiseptic',
    'صابون يد': 'Liquid Hand Soap',
    'ملمع زجاج': 'Glass Cleaner Spray',
    'بلدج اخشاب': 'Pledge Wood Polish',
    'كلور': 'Chlorine Bleach',
    'صابون ارضيات': 'Floor Cleaning Soap',
    'صابون بريل': 'Pril Dishwashing Liquid',
    'ينسون': 'Anise Tea',
    'كركدية': 'Hibiscus Tea',
    'شاي اخضر': 'Green Tea',
    'أكياس زبالة': 'Trash Bags',
    'قهوه': 'Turkish Coffee',
    'سكر': 'White Sugar',
    'شاى ليبتون': 'Lipton Black Tea',
    'شرشوبة': 'Floor Mop Refill',
    'فوط للنظافة': 'Microfiber Cleaning Cloths',
    'مقشه': 'Soft Broom',
    'معطر جو': 'Air Freshener Spray',
    'هاربيك منظف': 'Harpic Toilet Cleaner',
    'ريد حشرات': 'Raid Insect Killer',
    'يد مقشة': 'Broom Handle',
    'ليفة اسفينج': 'Sponge Scourer',
    'ليفه معدن': 'Stainless Steel Scourer',

    // Units
    'عدد': 'Pcs',
    'علبة': 'Box',
    'لتر': 'Liter',
    'عبوة': 'Pack',
    'كيلو': 'Kg',
    'ثمن': '125g Pack',
    'ربع': '250g Pack',

    // Recipients
    'محمد عبد النبي': 'Mohamed Abdel-Naby',
    'حسن محمد حسن': 'Hassan Mohamed Hassan',
    'أحمد عبد المجيد': 'Ahmed Abdel-Meguid',
    'احمد ابراهيم': 'Ahmed Ibrahim',
    'شريهان شعبان': 'Sherihan Shaaban',
    'زيناهم نجاح': 'Zinahom Nagah',
    'زبيدة مصطفى': 'Zubaida Mostafa',
    'محمود جمال': 'Mahmoud Gamal',
    'محمد مشاحيت': 'Mohamed El-Shahhat',
    'استهلاك دوري': 'Regular Cycle Issue',

    // Complete WBS Groups, Sub-Groups, Furniture & HQ Items, Portal & Custody Module
    'الأقسام الرئيسية (4)': 'Main Modules (4)',
    'تجهيزات خاصة • استخدام مباشر': 'Special Fittings • Direct Use',
    'العهدة': 'Company Custody',
    'العهدة والفواتير': 'Custody & Invoices',
    'العهدة والمشتريات': 'CUSTODY & PROCUREMENT',
    '💰 العهدة': '💰 Custody',
    'إدارة وتسوية العهدة النقدية، الترحيل التلقائي للرصيد، إرفاق وسحب الفواتير بالسكانر، إرسال واتساب، ومتابعة دفعات الموردين (50% / 70% / 100%).': 'Manage & reconcile petty cash custody, auto running balance, scanner/file invoice attachments, WhatsApp sharing, and supplier split payments (50% / 70% / 100%).',
    'سجل العهدة والفواتير • ترحيل تلقائي': 'Custody & Invoices • Auto Running Balance',
    'دخول لقسم العهدة والفواتير': 'Open Custody & Invoices',
    '1 - الأثاث المكتبي': '1 - Office Furniture',
    '2 - الأجهزة الكهربائية': '2 - Electrical Appliances',
    '3 - الأبواب والشبابيك والستائر': '3 - Doors, Windows & Curtains',
    '4 - أدوات السلامة والنظافة': '4 - Safety & Cleaning Equipment',
    '1.1 المكاتب': '1.1 Desks',
    '1.2 الكراسي': '1.2 Chairs & Seating',
    '1.3 ترابيزات اجتماعات': '1.3 Meeting Tables',
    '1.4 الدواليب / اللوكر': '1.4 Cabinets & Lockers',
    '2.1 التكييفات': '2.1 Air Conditioners',
    '2.2 الشاشات والإضاءة': '2.2 Screens & Lighting',
    '2.3 أجهزة البوفيه والمرافق': '2.3 Buffet & Facility Appliances',
    '2.3 أجهزة البوفيه': '2.3 Buffet Appliances',
    '3.1 الأبواب والشبابيك والستائر': '3.1 Doors, Windows & Curtains',
    '3.1 الأبواب والستائر': '3.1 Doors & Curtains',
    '4.1 طفايات الحريق والنظافة': '4.1 Fire Safety & Cleaning',
    '4.1 السلامة والنظافة': '4.1 Safety & Cleaning',
    'مكتب مدير الفرع': 'Branch Manager Desk',
    'مكتب موظف': 'Employee Desk',
    'مكتب موظف 140': 'Employee Desk (140 cm)',
    'مكتب موظف 120': 'Employee Desk (120 cm)',
    'كرسي مدير الفرع جلد': 'Branch Manager Leather Chair',
    'كرسي مدير جلد': 'Manager Leather Chair',
    'كرسي موظف': 'Employee Office Chair',
    'كرسي انتظار': 'Visitor Waiting Chair',
    'أنتريه ضيافة': 'Hospitality Lounge Sofa Set',
    'دولاب حفظ ملفات كبير': 'Large Filing Cabinet',
    'دولاب ملفات متوسط': 'Medium Filing Cabinet',
    'لوكر موظفين (Locker)': 'Staff Locker Cabinet',
    'دولاب مكتبي': 'Office Storage Cabinet',
    'تكييف يونيون اير 1.5 حصان': 'Unionaire Air Conditioner 1.5 HP',
    'تكييف يونيون اير 2.25 حصان': 'Unionaire Air Conditioner 2.25 HP',
    'تكييف يونيون اير 3 حصان': 'Unionaire Air Conditioner 3 HP',
    'تكييف كارير 1.5 حصان': 'Carrier Air Conditioner 1.5 HP',
    'تكييف كارير 2.25 حصان': 'Carrier Air Conditioner 2.25 HP',
    'تكييف كارير 3 حصان': 'Carrier Air Conditioner 3 HP',
    'شاشة عرض': 'Smart Display Screen',
    'ثلاجة بوفيه': 'Buffet Refrigerator',
    'غلاية مياه (كاتل)': 'Electric Water Kettle',
    'سخان مياه': 'Electric Water Heater',
    'شفاط هواء': 'Exhaust Ventilation Fan',
    'طفايات حريق': 'Fire Extinguishers',
    '1.1 الأثاث والمعيشة الفندقية': '1.1 Executive Living & Hospitality Furniture',
    '1.2 المكاتب والتجهيزات الفاخرة': '1.2 Executive Desks & Meeting Suites',
    '2.1 الأجهزة الكهربائية والمطبخ': '2.1 Electrical & Kitchen Appliances',
    '2.2 الترفيه والصوتيات': '2.2 Entertainment & AV Systems',
    '3.1 الديكور والأعمال المعمارية': '3.1 Architectural & Interior Decor',
    'سفرة كبار الزوار': 'VIP Dining Table Set',
    'مراتب نوم فندقية': 'Hotel-Grade Mattresses',
    'مكتب رئيس مجلس الإدارة': 'Chairman Executive Desk',
    'ترابيزة اجتماعات كبار الزوار': 'VIP Boardroom Meeting Table',
    'كراسي جلد هيدروليك كبار الزوار': 'VIP Hydraulic Leather Chairs',
    'غسالة - دورين (TwinWash)': 'TwinWash Double-Deck Washing Machine',
    'ثلاجة الإدارة العليا': 'Executive HQ Refrigerator',
    'وحدة مطبخ كاملة': 'Complete Modular Kitchen Unit',
    'مايكروويف وفرن ديجيتال': 'Digital Microwave & Oven',
    'شاشة عرض ذكية كبرى': 'Large Smart Display TV',
    'نظام ساوند سيستم سينمائي': 'Cinema Surround Sound System',
    'تكييف مقر الإدارة': 'Executive HQ Air Conditioner',
    'شباك الوميتال عازل للصوت': 'Soundproof Alumetal Window',
    'ستائر مقر الإدارة الفاخرة': 'Luxury Executive Blackout Curtains',
    'سجاد وموكيت فاخر': 'Luxury Carpets & Rugs',
    'كود الحصر': 'WBS Code',
    'كود': 'Code',
    'المقاس / الأبعاد': 'Dimensions / Size',
    'المقاس': 'Size',
    'المجموعة': 'Group',
    'تاريخ الشراء': 'Purchase Date',
    'السعر / الدفعات': 'Unit Price / Batches',
    'سعر الوحدة': 'Unit Price',
    'الإجمالي': 'Total',
    'إجمالي التكلفة': 'Total Cost',
    'ملاحظات': 'Notes',
    'الكمية المطلوبة': 'Required Qty',
    'إجمالي الشركة (4-9)': 'Company Total (4-9)',
    'إعادة توزيع وترقيم تلقائي': 'Auto Group & Renumber',
    'إرسال عرض الأسعار (واتساب)': 'Send Price Quote (WhatsApp)',
    'أدخل أسعار المورد والكميات ليتم احتساب الإجمالي تلقائياً وإرسال عرض الأسعار منظماً للشركة': 'Enter supplier unit prices and quantities to auto-calculate totals and send an organized quote to the company',
    'إجمالي الوارد للعهدة': 'Total Custody Inflow',
    'الرصيد الافتتاحي + التحويلات': 'Opening Balance + Transfers',
    'إجمالي المنصرف من العهدة': 'Total Custody Outflow',
    'إجمالي المصروفات المسجلة': 'Total Recorded Expenses',
    'الرصيد المتبقي الحالي بالعهدة': 'Current Remaining Balance',
    'ترحيل تراكمي تلقائي': 'Auto Cumulative Running Balance',
    'الحركات والفواتير المرفقة': 'Transactions & Invoices',
    'سجل متكامل مع الأرشفة': 'Complete Registry & Archive',
    'سجل حركة العهدة النقدية والفواتير': 'Petty Cash Custody & Invoices Ledger',
    'التحويلات المباشرة للموردين والدفعات (50% / 70% / 100%)': 'Direct Supplier Transfers & Split Payments (50% / 70% / 100%)',
    'المصروفات الأساسية للشركة كل شهر': 'Monthly Core Company Expenses',
    'سجل جرد وتسوية العهدة النقدية والفواتير': 'Petty Cash Custody Reconciliation & Invoices Registry',
    'ترحيل تلقائي للرصيد المتبقي، بحث فوري بالأصناف، إرفاق وسحب الفواتير بالسكانر، وإرسال واتساب': 'Auto running balance, instant item search, scanner/file invoice attachments, and WhatsApp sharing',
    'تسجيل حركة عهدة (وارد / منصرف)': 'Add Custody Entry (Inflow / Outflow)',
    'طباعة جرد العهدة المحدد': 'Print Selected Custody Report',
    'إرسال كشف العهدة (واتساب)': 'Share Custody Statement (WhatsApp)',
    'وارد': 'Inflow',
    'منصرف': 'Outflow',
    'المتبقي': 'Balance',
    'الفواتير والمرفقات': 'Invoices & Attachments',
    'عرض صور الفواتير المرفقة عند الطباعة': 'Include attached invoice images when printing'
};

const AR_REVERSE_MAP = {};
Object.keys(EN_EXACT_MAP).forEach(arKey => {
    AR_REVERSE_MAP[EN_EXACT_MAP[arKey]] = arKey;
});

function trText(val) {
    if (val === null || val === undefined) return '';
    const str = String(val).trim();
    if (!str) return '';
    if (currentLang === 'en') {
        if (EN_EXACT_MAP[str]) return EN_EXACT_MAP[str];
        // Translate measurement units & common dimension strings automatically
        return str
            .replace(/حصان/g, 'HP')
            .replace(/بوصة/g, 'inch')
            .replace(/قدم/g, 'ft')
            .replace(/متر/g, 'm')
            .replace(/سم/g, 'cm')
            .replace(/لتر/g, 'L')
            .replace(/كجم/g, 'kg')
            .replace(/كيلو/g, 'kg')
            .replace(/فرد/g, 'Place Settings')
            .replace(/محيطي/g, 'Surround')
            .replace(/ج\.م/g, 'EGP');
    }
    return AR_REVERSE_MAP[str] || str;
}

function translateDOMNodes(lang) {
    const map = lang === 'en' ? EN_EXACT_MAP : AR_REVERSE_MAP;

    // 1. Translate text nodes inside elements
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
        if (!node.parentElement) return;
        const tag = node.parentElement.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return;
        const trimmed = node.nodeValue.trim();
        if (!trimmed) return;
        if (node.parentElement.origArText === undefined && lang === 'en' && EN_EXACT_MAP[trimmed]) {
            node.parentElement.origArText = trimmed;
        }
        if (lang === 'en' && EN_EXACT_MAP[trimmed]) {
            node.nodeValue = node.nodeValue.replace(trimmed, EN_EXACT_MAP[trimmed]);
        } else if (lang === 'ar') {
            if (node.parentElement.origArText) {
                node.nodeValue = node.parentElement.origArText;
            } else if (AR_REVERSE_MAP[trimmed]) {
                node.nodeValue = node.nodeValue.replace(trimmed, AR_REVERSE_MAP[trimmed]);
            }
        }
    });

    // 2. Translate placeholders, titles, and optgroup labels
    document.querySelectorAll('[placeholder]').forEach(el => {
        const ph = el.getAttribute('placeholder').trim();
        if (lang === 'en' && EN_EXACT_MAP[ph]) {
            el.setAttribute('data-orig-ph', ph);
            el.setAttribute('placeholder', EN_EXACT_MAP[ph]);
        } else if (lang === 'ar') {
            const orig = el.getAttribute('data-orig-ph') || AR_REVERSE_MAP[ph];
            if (orig) el.setAttribute('placeholder', orig);
        }
    });

    document.querySelectorAll('optgroup[label]').forEach(el => {
        const lbl = el.getAttribute('label').trim();
        if (lang === 'en' && EN_EXACT_MAP[lbl]) {
            el.setAttribute('data-orig-lbl', lbl);
            el.setAttribute('label', EN_EXACT_MAP[lbl]);
        } else if (lang === 'ar') {
            const orig = el.getAttribute('data-orig-lbl') || AR_REVERSE_MAP[lbl];
            if (orig) el.setAttribute('label', orig);
        }
    });
}

// --- I18N DICTIONARY ---
const I18N = {
    ar: {
        appTitle: 'Consultancy Group',
        appSubtitle: 'Consultancy Group - إدارة المرافق - مدير المرافق',
        desktopStatus: 'إدارة المرافق - مدير المرافق',
        
        // Navigation
        navDashboard: 'لوحة التحكم والتحليلات',
        navInventory: 'المخزن الرئيسي والأرصدة',
        navTerminal: 'تسجيل صرف الطوابق',
        navFloors: 'تحليل الطوابق (4-9)',
        navHistory: 'سجل الحركات والتدقيق',
        navPO: 'أمر شراء للمورد',
        navVouchers: 'السندات والطباعة الرسمية',

        // Actions & Buttons
        btnQuickIssue: 'صرف سريع',
        btnNewSupply: 'توريد جديد',
        btnAddItem: 'إضافة صنف',
        btnExportBackup: 'تصدير نسخة احتياطية (JSON)',
        btnImportBackup: 'استعادة من ملف',
        btnExportExcel: 'تصدير إكسيل (CSV)',
        btnResetSystem: 'إصلاح وتصفير النظام',
        btnSetCycle: 'ضبط بداية الدورة',
        btnSave: 'حفظ التعديلات',
        btnCancel: 'إلغاء',
        btnPrint: 'طباعة التقرير',
        btnPrintVoucher: 'طباعة سند الصرف',
        btnDelete: 'حذف',
        btnConfirmIssue: 'تأكيد وحفظ الصرف',
        btnConfirmPrintIssue: 'حفظ وطباعة إذن الصرف',

        // KPI Labels
        kpiItems: 'أنواع الأصناف المسجلة',
        kpiStock: 'إجمالي الرصيد بالمخزن',
        kpiIssued: 'إجمالي المنصرف بالدورة',
        kpiShortage: 'الأصناف الحرجة / العجز',
        kpiHealth: 'صحة جاهزية المخزن',

        // Status & Alerts
        statusAvailable: 'متوفر بأمان',
        statusLow: 'قارب على النفاذ',
        statusEmpty: 'نفذ بالكامل',
        alertCenterTitle: 'مركز تنبيهات المخزون الحرج',

        // Tables
        thItemName: 'اسم الصنف',
        thCategory: 'الفئة',
        thUnit: 'الوحدة',
        thInitial: 'الرصيد الابتدائي',
        thIssued: 'المنصرف بالدورة',
        thRemaining: 'الرصيد المتاح',
        thMinLimit: 'حد الأمان',
        thStatus: 'الحالة',
        thDate: 'التاريخ',
        thFloor: 'الطابق',
        thRecipient: 'المستلم',
        thActions: 'الإجراءات',
        thOrderQty: 'الكمية المقترحة للشراء'
    },
    en: {
        appTitle: 'Consultancy Group',
        appSubtitle: 'Consultancy Group - Facilities Management - Facilities Manager',
        desktopStatus: 'Facilities Management - Facilities Manager',

        // Navigation
        navDashboard: 'Analytics Dashboard',
        navInventory: 'Warehouse Inventory',
        navTerminal: 'Floor Issue Terminal',
        navFloors: 'Floors Matrix (4-9)',
        navHistory: 'Audit History Log',
        navPO: 'Supplier Purchase Order',
        navVouchers: 'Official Printable Vouchers',

        // Actions & Buttons
        btnQuickIssue: 'Quick Issue',
        btnNewSupply: 'Stock In / Supply',
        btnAddItem: 'Add Item',
        btnExportBackup: 'Export Backup (JSON)',
        btnImportBackup: 'Restore from File',
        btnExportExcel: 'Export to Excel (CSV)',
        btnResetSystem: 'Reset & Format System',
        btnSetCycle: 'Cycle Settings',
        btnSave: 'Save Changes',
        btnCancel: 'Cancel',
        btnPrint: 'Print Report',
        btnPrintVoucher: 'Print Issue Voucher',
        btnDelete: 'Delete',
        btnConfirmIssue: 'Save Transaction',
        btnConfirmPrintIssue: 'Save & Print Voucher',

        // KPI Labels
        kpiItems: 'Registered Item Types',
        kpiStock: 'Warehouse Stock Units',
        kpiIssued: 'Cycle Total Issued',
        kpiShortage: 'Critical / Shortage Items',
        kpiHealth: 'Inventory Health Rate',

        // Status & Alerts
        statusAvailable: 'In Stock',
        statusLow: 'Low Stock',
        statusEmpty: 'Out of Stock',
        alertCenterTitle: 'Inventory Stock Alerts Center',

        // Tables
        thItemName: 'Item Name',
        thCategory: 'Category',
        thUnit: 'Unit',
        thInitial: 'Initial Stock',
        thIssued: 'Cycle Issued',
        thRemaining: 'Available Stock',
        thMinLimit: 'Alert Limit',
        thStatus: 'Status',
        thDate: 'Date',
        thFloor: 'Floor',
        thRecipient: 'Recipient',
        thActions: 'Actions',
        thOrderQty: 'Suggested Order Qty'
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    applyTheme(currentTheme);
    applyPalette(currentPalette);
    applyLanguage(currentLang);
    applyUserRole(currentUserRole);

    // Initialize Lucide icons if available
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Set today's date in forms
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('issue-date');
    if (dateInput) dateInput.value = today;

    // Attach search and hotkeys
    setupHotkeys();
    setupEventListeners();

    // Render data
    renderAll();
    updateRoleHeaderBadge();
    
    // Auto update live clock
    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    // Initialize Cloud Sync Engine (Firebase / Realtime)
    initCloudSync();
}

function persistState() {
    localStorage.setItem('buffet_v9_inv', JSON.stringify(inventory));
    localStorage.setItem('buffet_v9_trans', JSON.stringify(transactions));
    localStorage.setItem('buffet_v9_recipients', JSON.stringify(recipientsList));
    localStorage.setItem('buffet_v9_furniture', JSON.stringify(furnitureInventory));
    localStorage.setItem('buffet_v9_hq', JSON.stringify(hqInventory));
    localStorage.setItem('buffet_v9_custody', JSON.stringify(custodyTransactions));
    localStorage.setItem('buffet_v9_custody_invoices', JSON.stringify(custodyInvoicesMap));
    localStorage.setItem('buffet_v9_po_pricing', JSON.stringify(poPricingMap));
    localStorage.setItem('buffet_v9_supplier_pos', JSON.stringify(supplierPOs));
    localStorage.setItem('buffet_v9_monthly_core', JSON.stringify(monthlyCoreExpenses));
    localStorage.setItem('buffet_v9_cycle_day', cycleStartDay);
    renderAll();

    // Push changes to cloud if connected
    syncToCloud();
}

// --- CYCLE LOGIC ---
function getCycleKeyForDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    const day = d.getDate();

    if (day < cycleStartDay) {
        month -= 1;
        if (month === 0) {
            month = 12;
            year -= 1;
        }
    }

    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;

    const from = `${year}-${String(month).padStart(2, '0')}-${String(cycleStartDay).padStart(2, '0')}`;
    const to = `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(cycleStartDay - 1).padStart(2, '0')}`;
    return `${from} / ${to}`;
}

function getCycleTransactions() {
    if (activeCycleKey === 'ALL') return transactions;
    return transactions.filter(t => getCycleKeyForDate(t.date) === activeCycleKey);
}

function updateCycleDropdown() {
    const cycleSelect = document.getElementById('cycle-dropdown');
    if (!cycleSelect) return;

    const todayStr = new Date().toISOString().split('T')[0];
    const currentCycle = getCycleKeyForDate(todayStr);

    const keys = new Set([currentCycle]);
    transactions.forEach(t => {
        if (t.date) keys.add(getCycleKeyForDate(t.date));
    });

    const sortedKeys = Array.from(keys).sort().reverse();

    cycleSelect.innerHTML = '';
    sortedKeys.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = k === currentCycle 
            ? `${currentLang === 'ar' ? 'الدورة الحالية النشطة' : 'Active Current Cycle'} (${k})`
            : `${currentLang === 'ar' ? 'دورة سابقة' : 'Past Cycle'} (${k})`;
        cycleSelect.appendChild(opt);
    });

    if (activeCycleKey === 'CURRENT' || !sortedKeys.includes(activeCycleKey)) {
        activeCycleKey = currentCycle;
    }
    cycleSelect.value = activeCycleKey;

    const labelBadge = document.getElementById('active-cycle-badge-text');
    if (labelBadge) labelBadge.textContent = activeCycleKey;
    const sidebarCycle = document.getElementById('sidebar-cycle-val');
    if (sidebarCycle) sidebarCycle.textContent = activeCycleKey;
}

function handleCycleChange(val) {
    activeCycleKey = val;
    renderAll();
}

// --- RENDERING PIPELINE ---
function renderAll() {
    updateCycleDropdown();
    renderKPIs();
    renderCharts();
    renderDashboardTable();
    renderInventoryTable();
    renderSmartTerminal();
    renderFloorsMatrix();
    renderHistoryTable();
    renderPurchaseOrder();
    renderFurnitureView();
    renderFurnitureMatrix();
    renderHqView();
    if (typeof renderCustodyModule === 'function') {
        renderCustodyModule();
    }
    renderAlertCenter();
    updateRecipientsDatalist();

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --- KPI & STATS ---
function renderKPIs() {
    const currentCycleTrans = getCycleTransactions();
    
    let totalStock = 0;
    let totalIssued = 0;
    let shortageCount = 0;

    inventory.forEach(item => {
        const itemIssued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((sum, t) => sum + Number(t.qty), 0);
        const rem = item.total - itemIssued;

        totalStock += rem;
        totalIssued += itemIssued;

        if (rem <= item.minLimit) {
            shortageCount++;
        }
    });

    const healthRate = inventory.length > 0 ? Math.round(((inventory.length - shortageCount) / inventory.length) * 100) : 100;

    animateValue('kpi-val-items', inventory.length);
    animateValue('kpi-val-stock', totalStock);
    animateValue('kpi-val-issued', totalIssued);
    animateValue('kpi-val-shortage', shortageCount);

    const healthEl = document.getElementById('kpi-val-health');
    if (healthEl) healthEl.textContent = `${healthRate}%`;

    // Alert Dot on Header Bell
    const bellDot = document.getElementById('bell-alert-dot');
    if (bellDot) {
        bellDot.style.display = shortageCount > 0 ? 'block' : 'none';
    }
}

function animateValue(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = Number(value).toLocaleString();
}

// --- CHARTS (CHART.JS) ---
function renderCharts() {
    if (typeof Chart === 'undefined') return;

    const currentCycleTrans = getCycleTransactions();
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    const floorLabels = currentLang === 'ar'
        ? ['الدور 4', 'الدور 5', 'الدور 6', 'الدور 7', 'الدور 8', 'الدور 9']
        : ['Floor 4', 'Floor 5', 'Floor 6', 'Floor 7', 'Floor 8', 'Floor 9'];

    const floorTotals = floors.map(fl => {
        return currentCycleTrans.filter(t => t.floor === fl).reduce((sum, t) => sum + Number(t.qty), 0);
    });

    const isDark = document.body.classList.contains('dark');
    const textColor = isDark ? '#cbd5e1' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
    const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#d4af37';
    const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#f59e0b';

    // 1. Floors Bar Chart
    const ctxBar = document.getElementById('floors-bar-chart');
    if (ctxBar) {
        if (floorBarChart) floorBarChart.destroy();
        floorBarChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: floorLabels,
                datasets: [{
                    label: currentLang === 'ar' ? 'الكمية المنصرفة' : 'Issued Quantity',
                    data: floorTotals,
                    backgroundColor: primaryColor,
                    borderRadius: 8,
                    borderSkipped: false,
                    maxBarThickness: 38
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        rtl: currentLang === 'ar',
                        callbacks: {
                            label: function(ctx) {
                                return ` ${ctx.raw} ${currentLang === 'ar' ? 'قطعة' : 'units'}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: textColor },
                        grid: { color: gridColor }
                    },
                    x: {
                        ticks: { color: textColor, font: { weight: 'bold' } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 2. Top Consumed Doughnut Chart
    const ctxPie = document.getElementById('top-items-pie-chart');
    if (ctxPie) {
        const itemUsage = inventory.map(item => ({
            name: trText(item.name),
            qty: currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0)
        })).sort((a, b) => b.qty - a.qty).slice(0, 5);

        const paletteColors = [primaryColor, '#10b981', '#3b82f6', accentColor, '#ec4899'];

        if (topItemsPieChart) topItemsPieChart.destroy();
        topItemsPieChart = new Chart(ctxPie, {
            type: 'doughnut',
            data: {
                labels: itemUsage.map(i => i.name),
                datasets: [{
                    data: itemUsage.map(i => i.qty > 0 ? i.qty : 1),
                    backgroundColor: paletteColors,
                    borderWidth: 2,
                    borderColor: isDark ? '#151e2e' : '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '68%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        rtl: currentLang === 'ar',
                        labels: {
                            color: textColor,
                            font: { family: 'Tajawal', size: 11, weight: '600' },
                            padding: 10
                        }
                    }
                }
            }
        });
    }
}

// --- DASHBOARD TABLE ---
function renderDashboardTable() {
    const tbody = document.getElementById('dash-table-body');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    const query = searchQuery.toLowerCase().trim();

    let items = inventory;
    if (activeCategoryFilter !== 'الكل') {
        items = items.filter(i => i.cat === activeCategoryFilter);
    }
    if (query) {
        items = items.filter(i => i.name.toLowerCase().includes(query) || trText(i.name).toLowerCase().includes(query) || i.cat.toLowerCase().includes(query) || trText(i.cat).toLowerCase().includes(query));
    }

    tbody.innerHTML = '';
    const t = I18N[currentLang];

    items.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(tr => tr.itemId === item.id).reduce((s, tr) => s + Number(tr.qty), 0);
        const remaining = item.total - issued;

        let statusBadge = `<span class="badge badge-success"><i data-lucide="check-circle-2" style="width:12px;height:12px;"></i> ${t.statusAvailable}</span>`;
        if (remaining <= 0) {
            statusBadge = `<span class="badge badge-danger"><i data-lucide="alert-octagon" style="width:12px;height:12px;"></i> ${t.statusEmpty}</span>`;
        } else if (remaining <= item.minLimit) {
            statusBadge = `<span class="badge badge-warning"><i data-lucide="alert-triangle" style="width:12px;height:12px;"></i> ${t.statusLow}</span>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 150px;">
            </td>
            <td><span class="badge badge-secondary">${trText(item.cat)}</span></td>
            <td style="text-align: center; color: var(--text-muted);">${trText(item.unit)}</td>
            <td style="text-align: center; font-weight: 700;">${item.total}</td>
            <td style="text-align: center; font-weight: 800; color: var(--warning);">${issued}</td>
            <td style="text-align: center; font-weight: 800; color: ${remaining <= item.minLimit ? 'var(--danger)' : 'var(--success)'};">${remaining}</td>
            <td style="text-align: center;">${statusBadge}</td>
            <td style="text-align: center;" class="no-print">
                <button onclick="quickIssueItem(${item.id})" class="btn btn-sm btn-secondary" title="${currentLang === 'ar' ? 'صرف فوري لهذا الصنف' : 'Quick issue this item'}">${currentLang === 'ar' ? '⚡ صرف' : '⚡ Issue'}</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- WAREHOUSE INVENTORY MANAGEMENT ---
function renderInventoryTable() {
    const tbody = document.getElementById('inv-table-body');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    const query = searchQuery.toLowerCase().trim();

    let items = inventory;
    if (activeCategoryFilter !== 'الكل') {
        items = items.filter(i => i.cat === activeCategoryFilter);
    }
    if (query) {
        items = items.filter(i => i.name.toLowerCase().includes(query) || trText(i.name).toLowerCase().includes(query) || i.cat.toLowerCase().includes(query));
    }

    tbody.innerHTML = '';

    items.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const remaining = item.total - issued;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted);">${idx + 1}</td>
            <td>
                <input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 150px;">
            </td>
            <td>
                <select class="table-input" onchange="updateItemField(${item.id}, 'cat', this.value)">
                    <option value="مشروبات وضيافة" ${item.cat === 'مشروبات وضيافة' ? 'selected' : ''}>${trText('مشروبات وضيافة')}</option>
                    <option value="منظفات ومطهرات" ${item.cat === 'منظفات ومطهرات' ? 'selected' : ''}>${trText('منظفات ومطهرات')}</option>
                    <option value="مناشف ومناديل" ${item.cat === 'مناشف ومناديل' ? 'selected' : ''}>${trText('مناشف ومناديل')}</option>
                    <option value="أدوات ونظافة" ${item.cat === 'أدوات ونظافة' ? 'selected' : ''}>${trText('أدوات ونظافة')}</option>
                </select>
            </td>
            <td style="text-align: center;">
                <input type="text" class="table-input" value="${trText(item.unit)}" onchange="updateItemField(${item.id}, 'unit', this.value)" style="width: 80px; text-align: center;">
            </td>
            <td style="text-align: center;">
                <input type="number" min="0" class="table-input" value="${item.total}" onchange="updateItemField(${item.id}, 'total', Number(this.value))" style="width: 85px; text-align: center; font-weight: 800;">
            </td>
            <td style="text-align: center; font-weight: 800; color: var(--warning);">${issued}</td>
            <td style="text-align: center; font-weight: 800; color: ${remaining <= item.minLimit ? 'var(--danger)' : 'var(--success)'};">${remaining}</td>
            <td style="text-align: center;">
                <input type="number" min="0" class="table-input" value="${item.minLimit}" onchange="updateItemField(${item.id}, 'minLimit', Number(this.value))" style="width: 70px; text-align: center;">
            </td>
            <td style="text-align: center;" class="no-print">
                <button onclick="deleteItem(${item.id})" class="btn btn-sm btn-danger" title="${currentLang === 'ar' ? 'حذف الصنف' : 'Delete item'}"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateItemField(id, field, value) {
    const item = inventory.find(i => i.id === id);
    if (!item) return;

    if (field === 'name' && !value.trim()) {
        showToast(currentLang === 'ar' ? 'اسم الصنف لا يمكن أن يكون فارغاً' : 'Item name cannot be empty', 'warning');
        renderInventoryTable();
        return;
    }

    item[field] = value;
    persistState();
    showToast(currentLang === 'ar' ? 'تم تحديث بيانات الصنف' : 'Item updated successfully', 'success');
}

function deleteItem(id) {
    const item = inventory.find(i => i.id === id);
    if (!item) return;

    const confirmMsg = currentLang === 'ar' 
        ? `هل أنت متأكد من حذف الصنف "${item.name}"؟ سيتم حذف بياناته بالكامل.`
        : `Are you sure you want to delete "${item.name}"?`;

    if (confirm(confirmMsg)) {
        inventory = inventory.filter(i => i.id !== id);
        transactions = transactions.filter(t => t.itemId !== id);
        persistState();
        showToast(currentLang === 'ar' ? 'تم حذف الصنف بنجاح' : 'Item deleted', 'info');
    }
}

// --- SMART FLOOR ISSUE TERMINAL ---
function renderSmartTerminal() {
    const tbody = document.getElementById('terminal-items-body');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    const query = searchQuery.toLowerCase().trim();

    let items = inventory;
    if (activeCategoryFilter !== 'الكل') {
        items = items.filter(i => i.cat === activeCategoryFilter);
    }
    if (query) {
        items = items.filter(i => i.name.toLowerCase().includes(query) || trText(i.name).toLowerCase().includes(query));
    }

    tbody.innerHTML = '';

    items.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const available = item.total - issued;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted);">${idx + 1}</td>
            <td>
                <input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 150px;">
            </td>
            <td><span class="badge badge-secondary">${trText(item.cat)}</span></td>
            <td style="text-align: center; color: var(--text-muted);">${trText(item.unit)}</td>
            <td style="text-align: center; font-weight: 800; color: ${available <= 0 ? 'var(--danger)' : 'var(--primary)'};">${available}</td>
            <td style="text-align: center;">
                <div class="stepper-control">
                    <button type="button" class="stepper-btn" onclick="stepTerminalQty(${item.id}, -1)">−</button>
                    <input type="number" min="0" max="${Math.max(0, available)}" placeholder="0" data-item-id="${item.id}" data-max="${available}" class="stepper-input terminal-qty-field" oninput="calculateTerminalSummary()">
                    <button type="button" class="stepper-btn" onclick="stepTerminalQty(${item.id}, 1)">+</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    calculateTerminalSummary();
}

function selectTerminalFloor(floorName) {
    terminalFloor = floorName;
    document.querySelectorAll('.floor-select-card').forEach(card => {
        card.classList.toggle('active', card.dataset.floor === floorName);
    });
}

function stepTerminalQty(itemId, delta) {
    const input = document.querySelector(`.terminal-qty-field[data-item-id="${itemId}"]`);
    if (!input) return;

    let currentVal = Number(input.value) || 0;
    const maxVal = Number(input.dataset.max) || 0;

    currentVal += delta;
    if (currentVal < 0) currentVal = 0;
    if (currentVal > maxVal) {
        currentVal = maxVal;
        showToast(currentLang === 'ar' ? 'الكمية المطلوبة تتجاوز الرصيد المتاح بالمخزن!' : 'Exceeds available stock!', 'warning');
    }

    input.value = currentVal === 0 ? '' : currentVal;
    calculateTerminalSummary();
}

function calculateTerminalSummary() {
    const inputs = document.querySelectorAll('.terminal-qty-field');
    let totalItemsSelected = 0;
    let totalPieces = 0;

    inputs.forEach(inp => {
        const val = Number(inp.value) || 0;
        const max = Number(inp.dataset.max) || 0;

        if (val > max) {
            inp.style.borderColor = 'var(--danger)';
            inp.style.color = 'var(--danger)';
        } else {
            inp.style.borderColor = '';
            inp.style.color = '';
        }

        if (val > 0) {
            totalItemsSelected++;
            totalPieces += val;
        }
    });

    const itemsCountEl = document.getElementById('terminal-selected-items-count');
    const piecesCountEl = document.getElementById('terminal-total-pieces-count');

    if (itemsCountEl) itemsCountEl.textContent = totalItemsSelected;
    if (piecesCountEl) piecesCountEl.textContent = totalPieces;
}

function submitSmartIssue(andPrint = false) {
    const dateInput = document.getElementById('issue-date');
    const recipientInput = document.getElementById('issue-recipient');
    const notesInput = document.getElementById('issue-notes');

    const date = dateInput ? dateInput.value : new Date().toISOString().split('T')[0];
    const recipient = recipientInput ? recipientInput.value.trim() : '';
    const notes = notesInput ? notesInput.value.trim() : '';

    if (!recipient) {
        showToast(currentLang === 'ar' ? 'يرجى تحديد أو إدخال اسم المستلم!' : 'Please enter recipient name!', 'warning');
        if (recipientInput) recipientInput.focus();
        return;
    }

    // Add to recipients list if new
    if (!recipientsList.includes(recipient)) {
        recipientsList.push(recipient);
        localStorage.setItem('buffet_v9_recipients', JSON.stringify(recipientsList));
        updateRecipientsDatalist();
    }

    const inputs = document.querySelectorAll('.terminal-qty-field');
    const issuedBatch = [];
    const now = Date.now();
    let hasOverIssue = false;

    inputs.forEach((inp, idx) => {
        const qty = Number(inp.value) || 0;
        const max = Number(inp.dataset.max) || 0;
        const itemId = Number(inp.dataset.itemId);

        if (qty > max) {
            hasOverIssue = true;
        }

        if (qty > 0) {
            issuedBatch.push({
                id: now + idx,
                itemId,
                qty,
                floor: terminalFloor,
                date,
                recipient,
                notes
            });
        }
    });

    if (hasOverIssue) {
        showToast(currentLang === 'ar' ? 'توجد أصناف تتجاوز الرصيد المتاح! يرجى تصحيح الكميات.' : 'Some items exceed available stock!', 'danger');
        return;
    }

    if (issuedBatch.length === 0) {
        showToast(currentLang === 'ar' ? 'يرجى تحديد كمية لصنف واحد على الأقل قبل التأكيد!' : 'Please select at least one item!', 'warning');
        return;
    }

    // Push to transactions
    issuedBatch.forEach(tr => transactions.unshift(tr));
    persistState();

    showToast(currentLang === 'ar' ? 'تم تسجيل حركة الصرف بنجاح وتحديث أرصدة المخزن!' : 'Issue transaction registered successfully!', 'success');

    // Reset inputs
    inputs.forEach(inp => inp.value = '');
    calculateTerminalSummary();

    if (andPrint) {
        printIssueVoucherBatch(issuedBatch, terminalFloor, date, recipient, notes);
    } else {
        switchTab('history');
    }
}

// Quick Issue single item from dashboard
function quickIssueItem(itemId) {
    switchTab('terminal');
    const input = document.querySelector(`.terminal-qty-field[data-item-id="${itemId}"]`);
    if (input) {
        input.value = '1';
        input.focus();
        calculateTerminalSummary();
    }
}

// --- FLOORS CONSUMPTION MATRIX ---
function renderFloorsMatrix() {
    const tbody = document.getElementById('floors-matrix-body');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];

    tbody.innerHTML = '';
    const columnTotals = [0, 0, 0, 0, 0, 0];
    let grandTotal = 0;

    inventory.forEach(item => {
        let rowTotal = 0;
        let cellsHtml = '';

        floors.forEach((fl, fIdx) => {
            const qty = currentCycleTrans.filter(t => t.itemId === item.id && t.floor === fl).reduce((s, t) => s + Number(t.qty), 0);
            rowTotal += qty;
            columnTotals[fIdx] += qty;

            cellsHtml += `<td style="text-align: center; font-weight: ${qty > 0 ? '700' : 'normal'}; color: ${qty > 0 ? 'var(--text-primary)' : 'var(--text-muted)'};">${qty}</td>`;
        });

        grandTotal += rowTotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 150px;">
            </td>
            <td><span class="badge badge-secondary">${trText(item.cat)}</span></td>
            <td style="text-align: center; color: var(--text-muted);">${trText(item.unit)}</td>
            ${cellsHtml}
            <td style="text-align: center; font-weight: 800; background: var(--primary-light); color: var(--primary);">${rowTotal}</td>
        `;
        tbody.appendChild(tr);
    });

    // Matrix Footer (Totals Row)
    const tfoot = document.getElementById('floors-matrix-foot');
    if (tfoot) {
        let footCells = '';
        columnTotals.forEach(tot => {
            footCells += `<th style="text-align: center; font-weight: 900; color: var(--primary);">${tot}</th>`;
        });
        tfoot.innerHTML = `
            <tr>
                <th colspan="3" style="text-align: inherit; font-weight: 900;">${currentLang === 'ar' ? 'إجمالي استهلاك الطابق' : 'Total Floor Consumption'}</th>
                ${footCells}
                <th style="text-align: center; font-weight: 900; background: var(--primary); color: var(--text-inverse);">${grandTotal}</th>
            </tr>
        `;
    }
}

// --- HISTORY AUDIT LOG ---
function renderHistoryTable() {
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    const query = searchQuery.toLowerCase().trim();

    let logs = currentCycleTrans;
    if (activeFloorFilter !== 'الكل') {
        logs = logs.filter(l => l.floor === activeFloorFilter);
    }
    if (query) {
        logs = logs.filter(l => {
            const item = inventory.find(i => i.id === l.itemId);
            const itemName = item ? item.name.toLowerCase() : '';
            const itemNameEn = item ? trText(item.name).toLowerCase() : '';
            return itemName.includes(query) || itemNameEn.includes(query) || l.floor.toLowerCase().includes(query) || trText(l.floor).toLowerCase().includes(query) || l.recipient.toLowerCase().includes(query) || trText(l.recipient).toLowerCase().includes(query);
        });
    }

    tbody.innerHTML = '';
    const t = I18N[currentLang];

    if (logs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">${currentLang === 'ar' ? 'لا توجد حركات مسجلة لهذه الدورة أو المرشحات المحددة' : 'No transactions recorded for this cycle'}</td></tr>`;
        return;
    }

    logs.forEach((log, idx) => {
        const item = inventory.find(i => i.id === log.itemId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted);">${idx + 1}</td>
            <td><input type="text" class="table-input" value="${log.date}" onchange="updateTransactionField(${log.id}, 'date', this.value)" style="width: 110px; text-align: center;"></td>
            <td><strong style="color: var(--primary);">${trText(log.floor)}</strong></td>
            <td>
                ${item
                    ? `<input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 145px;">`
                    : `<strong>${currentLang === 'ar' ? 'صنف غير معرف' : 'Unknown Item'}</strong>`
                }
            </td>
            <td style="text-align: center; font-weight: 800; color: var(--warning);">${log.qty} ${item ? trText(item.unit) : ''}</td>
            <td>
                <input type="text" class="table-input" value="${trText(log.recipient)}" onchange="updateTransactionField(${log.id}, 'recipient', this.value)" style="min-width: 140px;">
            </td>
            <td style="text-align: center;" class="no-print">
                <button onclick="printSingleVoucher(${log.id})" class="btn btn-sm btn-secondary" title="${currentLang === 'ar' ? 'طباعة سند صرف' : 'Print Issue Voucher'}"><i data-lucide="printer" style="width:13px;height:13px;"></i></button>
                <button onclick="deleteSingleTransaction(${log.id})" class="btn btn-sm btn-danger" title="${currentLang === 'ar' ? 'حذف الحركة' : 'Delete Transaction'}"><i data-lucide="trash-2" style="width:13px;height:13px;"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateTransactionField(logId, field, value) {
    const log = transactions.find(t => t.id === logId);
    if (!log) return;
    log[field] = value.trim();
    persistState();
    showToast(currentLang === 'ar' ? 'تم تحديث البيان بنجاح' : 'Statement updated successfully', 'success');
}

function filterHistoryFloor(fl) {
    activeFloorFilter = fl;
    document.querySelectorAll('.history-floor-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.floor === fl);
    });
    renderHistoryTable();
    if (window.lucide) window.lucide.createIcons();
}

function deleteSingleTransaction(id) {
    const confirmMsg = currentLang === 'ar' 
        ? 'هل ترغب بالتأكيد في حذف هذه الحركة واسترجاع كميتها للمخزن؟'
        : 'Are you sure you want to delete this transaction and return stock?';

    if (confirm(confirmMsg)) {
        transactions = transactions.filter(t => t.id !== id);
        persistState();
        showToast(currentLang === 'ar' ? 'تم حذف الحركة وتحديث الرصيد' : 'Transaction deleted and stock reverted', 'info');
    }
}

function clearAllTransactions() {
    if (transactions.length === 0) return;
    const confirmMsg = currentLang === 'ar'
        ? 'تحذير: هل أنت متأكد تماماً من رغبتك في حذف جميع حركات الصرف المسجلة في السجل؟'
        : 'Warning: Are you sure you want to clear ALL transaction history?';

    if (confirm(confirmMsg)) {
        transactions = [];
        persistState();
        showToast(currentLang === 'ar' ? 'تم تصفير سجل الحركات بالكامل' : 'All transactions cleared', 'info');
    }
}

// --- PURCHASE ORDER GENERATOR ---
function renderPurchaseOrder() {
    const tbody = document.getElementById('po-table-body');
    const tfoot = document.getElementById('po-table-foot');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    tbody.innerHTML = '';
    let grandTotalOrderCost = 0;

    inventory.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const remaining = item.total - issued;
        const savedPo = poPricingMap[item.id] || {};
        const qtyToOrder = savedPo.qty !== undefined ? Number(savedPo.qty) : issued;
        const unitPrice = Number(savedPo.unitPrice) || 0;
        const itemNotes = savedPo.notes || '';
        const lineTotal = +(qtyToOrder * unitPrice).toFixed(2);
        grandTotalOrderCost += lineTotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; font-weight: 800; color: var(--text-muted);">${idx + 1}</td>
            <td>
                <input type="text" class="table-input" value="${trText(item.name)}" onchange="updateItemField(${item.id}, 'name', this.value)" style="font-weight: 700; min-width: 150px;">
            </td>
            <td style="text-align: center; color: var(--text-muted); font-weight: 700;">${trText(item.unit)}</td>
            <td style="text-align: center; font-weight: 700;">${remaining}</td>
            <td style="text-align: center; font-weight: 800; color: var(--warning);">${issued}</td>
            <td style="text-align: center; background: var(--success-light);">
                <input type="number" min="0" value="${qtyToOrder}" class="table-input po-order-input" data-item-id="${item.id}" oninput="updatePoPricingField(${item.id}, 'qty', this.value)" style="width: 90px; text-align: center; font-weight: 900; color: var(--success); border-color: var(--success);">
            </td>
            <td style="text-align: center;">
                <input type="number" min="0" step="0.01" value="${unitPrice > 0 ? unitPrice : ''}" placeholder="0.00" class="table-input po-price-input" data-item-id="${item.id}" oninput="updatePoPricingField(${item.id}, 'unitPrice', this.value)" style="width: 105px; text-align: center; font-weight: 800;">
            </td>
            <td style="text-align: center; font-weight: 900; background: var(--primary-light); color: var(--primary); font-size: 0.96rem;" id="po-line-total-${item.id}">
                ${lineTotal > 0 ? lineTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '0'}
            </td>
            <td>
                <input type="text" value="${itemNotes}" placeholder="${currentLang === 'ar' ? 'ملاحظات...' : 'Notes...'}" class="table-input po-notes-input" data-item-id="${item.id}" onchange="updatePoPricingField(${item.id}, 'notes', this.value)" style="width: 100%; min-width: 165px;">
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        tfoot.innerHTML = `
            <tr>
                <th colspan="7" style="text-align: inherit; font-weight: 900; font-size: 1rem;">${currentLang === 'ar' ? 'إجمالي قيمة أمر الشراء للمورد' : 'Grand Total Purchase Order Value'}</th>
                <th style="text-align: center; font-weight: 900; font-size: 1.08rem; background: var(--primary); color: var(--text-inverse);" id="po-grand-total-cell">
                    ${grandTotalOrderCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}
                </th>
                <th></th>
            </tr>
        `;
    }
}

function updatePoPricingField(itemId, field, val) {
    if (!poPricingMap[itemId]) poPricingMap[itemId] = {};
    if (field === 'notes') {
        poPricingMap[itemId].notes = String(val || '').trim();
    } else {
        poPricingMap[itemId][field] = Math.max(0, Number(val) || 0);
    }
    localStorage.setItem('buffet_v9_po_pricing', JSON.stringify(poPricingMap));

    // Live recalculate row and grand total without losing focus
    const currentCycleTrans = getCycleTransactions();
    let grandTotal = 0;
    inventory.forEach(item => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const entry = poPricingMap[item.id] || {};
        const q = entry.qty !== undefined ? Number(entry.qty) : issued;
        const p = Number(entry.unitPrice) || 0;
        const tot = +(q * p).toFixed(2);
        grandTotal += tot;
        if (item.id === itemId) {
            const cell = document.getElementById(`po-line-total-${itemId}`);
            if (cell) cell.textContent = tot > 0 ? tot.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '0';
        }
    });
    const grandCell = document.getElementById('po-grand-total-cell');
    if (grandCell) {
        grandCell.textContent = `${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}`;
    }
    syncToCloud();
}

function safeWindowPrint() {
    const prevTitle = document.title;
    document.title = ' ';
    window.print();
    setTimeout(() => {
        document.title = prevTitle;
    }, 500);
}

function getFormattedTodayDate(isAr) {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return isAr ? `${yyyy}/${mm}/${dd}` : `${yyyy}-${mm}-${dd}`;
}

function getPrintLogoSrc() {
    if (typeof COMPANY_LOGO_LIGHT_URI !== 'undefined' && COMPANY_LOGO_LIGHT_URI) {
        return COMPANY_LOGO_LIGHT_URI;
    }
    const lightEl = document.querySelector('.cg-logo-light');
    if (lightEl && lightEl.src) return lightEl.src;
    return 'assets/logo_light.png';
}

function buildCenteredPrintHeader(reportTitle, itemOrSubDef = '') {
    const isAr = currentLang === 'ar';
    const logoSrc = getPrintLogoSrc();
    return `
        <div class="voucher-header" style="border:none; margin:0; padding:6px 0 0.45rem 0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
            <img src="${logoSrc}" alt="المجموعة الإستشارية | Consultancy Group" style="height:58px; width:auto; object-fit:contain; display:block; margin:4px auto 0.25rem auto;">
            <p style="margin:0 0 0.25rem 0; font-size:0.86rem; font-weight:800; color:#1e293b; text-align:center;">${isAr ? 'إدارة المرافق - مدير المرافق' : 'Facilities Management - Facilities Manager'}</p>
            <h3 style="margin:0; font-size:1.12rem; font-weight:900; color:#0f172a; text-align:center;">${reportTitle}</h3>
            ${itemOrSubDef ? `<p style="margin:0.18rem 0 0 0; font-size:0.82rem; font-weight:700; color:#334155; text-align:center;">${itemOrSubDef}</p>` : ''}
        </div>
    `;
}

function printFloorsReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const currentCycleTrans = getCycleTransactions();
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    const colTotals = [0, 0, 0, 0, 0, 0];
    let grandTotal = 0;
    let rowsHtml = '';

    inventory.forEach((item, idx) => {
        let rowSum = 0;
        let cells = '';
        floors.forEach((fl, fIdx) => {
            const qty = currentCycleTrans.filter(t => t.itemId === item.id && t.floor === fl).reduce((s, t) => s + Number(t.qty), 0);
            rowSum += qty;
            colTotals[fIdx] += qty;
            cells += `<td style="text-align:center; width: 7.5%; font-weight: 700; font-size: 0.88rem !important; padding: 0.34rem 0.45rem !important;">${qty}</td>`;
        });
        grandTotal += rowSum;
        rowsHtml += `
            <tr>
                <td style="width: 36px; text-align:center !important; font-weight: 800;">${idx + 1}</td>
                <td class="print-item-name" style="width: 22% !important; min-width: 155px !important; white-space: nowrap !important; font-size: 0.94rem !important; font-weight: 800 !important;"><strong>${trText(item.name)}</strong></td>
                <td style="width: 7.5%; text-align:center !important; font-size: 0.86rem !important; font-weight: 700 !important; white-space: nowrap !important;">${trText(item.unit)}</td>
                ${cells}
                <td style="width: 8.5%; text-align:center !important; font-weight:900; font-size: 0.92rem !important; background:#f8fafc; white-space: nowrap !important;">${rowSum}</td>
                <td class="print-notes-col" style="width: 13% !important; max-width: 120px !important; font-size: 0.82rem; text-align: center;">—</td>
            </tr>
        `;
    });

    let footCells = colTotals.map(c => `<th style="text-align:center !important; font-size: 0.9rem !important;">${c}</th>`).join('');
    const todayDate = getFormattedTodayDate(isAr);

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="11" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'تقرير تحليل استهلاك الطوابق (4 - 9)' : 'Floors Consumption Analysis (4 - 9)',
                                `${isAr ? 'الدورة:' : 'Cycle:'} ${activeCycleKey} | ${isAr ? 'تاريخ التقرير:' : 'Date:'} ${todayDate}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 36px; text-align:center !important;">#</th>
                        <th class="print-item-name" style="width: 22% !important; min-width: 155px !important; white-space: nowrap !important;">${isAr ? 'اسم الصنف' : 'Item Name'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الوحدة' : 'Unit'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 4' : 'Floor 4'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 5' : 'Floor 5'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 6' : 'Floor 6'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 7' : 'Floor 7'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 8' : 'Floor 8'}</th>
                        <th style="width: 7.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الدور 9' : 'Floor 9'}</th>
                        <th style="width: 8.5%; text-align:center !important; white-space: nowrap !important;">${isAr ? 'الإجمالي' : 'Total'}</th>
                        <th class="print-notes-col" style="width: 13% !important; max-width: 120px !important; text-align:center !important; white-space: nowrap !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">${isAr ? 'إجمالي استهلاك الطابق' : 'Total Floor Consumption'}</th>
                        ${footCells}
                        <th style="text-align:center; font-size: 0.92rem !important;">${grandTotal}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function printPurchaseOrder() {
    const poInputs = document.querySelectorAll('.po-order-input');
    const orderItems = [];
    let grandTotalCost = 0;

    poInputs.forEach(inp => {
        const qty = Number(inp.value) || 0;
        const itemId = Number(inp.dataset.itemId);
        const item = inventory.find(i => i.id === itemId);
        if (qty > 0 && item) {
            const entry = poPricingMap[itemId] || {};
            const unitPrice = Number(entry.unitPrice) || 0;
            const total = +(qty * unitPrice).toFixed(2);
            const notes = entry.notes || '';
            grandTotalCost += total;
            orderItems.push({ name: trText(item.name), unit: trText(item.unit), qty, unitPrice, total, notes });
        }
    });

    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const todayDate = getFormattedTodayDate(isAr);
    const poNumber = `PO-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}`;

    let rowsHtml = '';
    orderItems.forEach((it, idx) => {
        rowsHtml += `
            <tr>
                <td style="width: 38px; text-align: center !important; font-weight: 800;">${idx + 1}</td>
                <td class="print-item-name" style="width: 24% !important; min-width: 165px !important; white-space: nowrap !important; font-size: 0.95rem !important; font-weight: 800 !important;"><strong>${it.name}</strong></td>
                <td style="width: 10%; text-align: center !important; font-weight: 700;">${it.unit}</td>
                <td style="width: 14%; text-align: center !important; font-weight: 900; font-size: 0.94rem !important;">${it.qty}</td>
                <td style="width: 14%; text-align: center !important; font-weight: 700;">${it.unitPrice > 0 ? it.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '—'}</td>
                <td style="width: 16%; text-align: center !important; font-weight: 900; font-size: 0.94rem !important;">${it.total > 0 ? it.total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '—'}</td>
                <td class="print-notes-col" style="width: 15% !important; max-width: 135px !important;">${it.notes || ''}</td>
            </tr>
        `;
    });

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="7" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'أمر شراء للمورد' : 'Supplier Purchase Order',
                                `${isAr ? 'رقم أمر الشراء:' : 'PO Number:'} ${poNumber} | ${isAr ? 'التاريخ:' : 'Date:'} ${todayDate}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 38px; text-align: center !important;">#</th>
                        <th class="print-item-name" style="width: 24% !important; min-width: 165px !important;">${isAr ? 'اسم الصنف' : 'Item Name'}</th>
                        <th style="text-align: center !important; width: 10%;">${isAr ? 'الوحدة' : 'Unit'}</th>
                        <th style="text-align: center !important; width: 14%;">${isAr ? 'الكمية المطلوبة' : 'Required Qty'}</th>
                        <th style="text-align: center !important; width: 14%;">${isAr ? 'سعر الوحدة' : 'Unit Price'}</th>
                        <th style="text-align: center !important; width: 16%;">${isAr ? 'الإجمالي' : 'Total'}</th>
                        <th class="print-notes-col" style="width: 15% !important; max-width: 135px !important; text-align: center !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="5" style="text-align: inherit; font-weight: 900;">${isAr ? 'الإجمالي العام لأمر الشراء' : 'Grand Total Purchase Order'}</th>
                        <th style="text-align: center !important; font-weight: 900; font-size: 0.96rem;">${grandTotalCost > 0 ? grandTotalCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + (isAr ? ' ج.م' : ' EGP') : '—'}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function sharePurchaseOrderWhatsApp() {
    const currentCycleTrans = getCycleTransactions();
    const lines = [
        '*المجموعة الإستشارية | Consultancy Group*',
        '*إدارة المرافق - مدير المرافق*',
        `*أمر شراء وعرض أسعار البوفيه والمنظفات*`,
        `التاريخ: ${getFormattedTodayDate(true)}`,
        '--------------------------------'
    ];
    let grandTotal = 0;
    let idx = 0;
    inventory.forEach(item => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const entry = poPricingMap[item.id] || {};
        const qty = entry.qty !== undefined ? Number(entry.qty) : issued;
        if (qty > 0) {
            idx++;
            const price = Number(entry.unitPrice) || 0;
            const tot = +(qty * price).toFixed(2);
            grandTotal += tot;
            const priceStr = price > 0 ? ` × ${price} ج = *${tot.toLocaleString()} ج.م*` : '';
            const noteStr = entry.notes ? ` (${entry.notes})` : '';
            lines.push(`${idx}. *${item.name}* — الكمية: ${qty} ${item.unit}${priceStr}${noteStr}`);
        }
    });
    lines.push('--------------------------------');
    if (grandTotal > 0) {
        lines.push(`*إجمالي أمر الشراء:* ${grandTotal.toLocaleString()} ج.م`);
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

function exportPurchaseOrderToCSV() {
    const currentCycleTrans = getCycleTransactions();
    let csvContent = '\uFEFF';
    csvContent += 'م,اسم الصنف,الوحدة,الرصيد الحالي,المنصرف,الكمية المطلوبة,سعر الوحدة,الإجمالي,ملاحظات\n';
    let grandTotal = 0;
    inventory.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const rem = item.total - issued;
        const entry = poPricingMap[item.id] || {};
        const qty = entry.qty !== undefined ? Number(entry.qty) : issued;
        const price = Number(entry.unitPrice) || 0;
        const tot = +(qty * price).toFixed(2);
        grandTotal += tot;
        csvContent += `"${idx + 1}","${item.name}","${item.unit}","${rem}","${issued}","${qty}","${price}","${tot}","${entry.notes || ''}"\n`;
    });
    csvContent += `"","الإجمالي العام","","","","","","${grandTotal}",""\n`;
    downloadCSV(csvContent, `أمر_شراء_المورد_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير أمر الشراء بالأسعار والإجماليات إلى إكسيل!' : 'Purchase Order exported to Excel!', 'success');
}

// --- OFFICIAL PRINTABLE VOUCHERS ---
function printSingleVoucher(transactionId) {
    const tr = transactions.find(t => t.id === transactionId);
    if (!tr) return;

    printIssueVoucherBatch([tr], tr.floor, tr.date, tr.recipient, tr.notes || '');
}

function printIssueVoucherBatch(batchItems, floor, date, recipient, notes) {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    let rowsHtml = '';
    let totalPieces = 0;

    batchItems.forEach((tr, idx) => {
        const item = inventory.find(i => i.id === tr.itemId);
        totalPieces += Number(tr.qty);
        rowsHtml += `
            <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td class="print-item-name" style="white-space: nowrap !important; font-size: 0.96rem !important; font-weight: 800 !important;"><strong>${item ? trText(item.name) : (isAr ? 'صنف غير معروف' : 'Unknown Item')}</strong></td>
                <td>${item ? trText(item.cat) : ''}</td>
                <td style="text-align: center;">${item ? trText(item.unit) : ''}</td>
                <td style="text-align: center; font-weight: bold;">${tr.qty}</td>
                <td>${trText(tr.notes || notes || 'استهلاك دوري')}</td>
            </tr>
        `;
    });

    const serialNum = `VCH-${new Date(date).getFullYear()}-${String(batchItems[0].id).slice(-6)}`;
    let singleItemLabel = '';
    if (batchItems.length === 1) {
        const onlyItem = inventory.find(i => i.id === batchItems[0].itemId);
        if (onlyItem) singleItemLabel = `${isAr ? 'الصنف:' : 'Item:'} ${trText(onlyItem.name)} | `;
    }

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="6" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.5rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'إذن صرف مواد' : 'Material Issue Voucher',
                                `${singleItemLabel}${isAr ? 'رقم السند:' : 'Voucher No:'} ${serialNum} | ${isAr ? 'التاريخ:' : 'Date:'} ${date}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th colspan="6" style="background:#f8fafc !important; font-size:0.78rem; padding:0.35rem 0.6rem;">
                            <div style="display:flex; justify-content:space-between;">
                                <span><strong>${isAr ? 'الطابق المستلم:' : 'Receiving Floor:'}</strong> ${trText(floor)}</span>
                                <span><strong>${isAr ? 'اسم المستلم:' : 'Recipient:'}</strong> ${trText(recipient)}</span>
                                <span><strong>${isAr ? 'الدورة التشغيلية:' : 'Cycle:'}</strong> ${activeCycleKey}</span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 34px; text-align: center;">#</th>
                        <th>${isAr ? 'اسم المادة المنصرفة' : 'Issued Item Name'}</th>
                        <th>${isAr ? 'التصنيف' : 'Category'}</th>
                        <th style="text-align: center; width: 70px;">${isAr ? 'الوحدة' : 'Unit'}</th>
                        <th style="text-align: center; width: 100px;">${isAr ? 'الكمية المنصرفة' : 'Issued Qty'}</th>
                        <th>${isAr ? 'بيان الغرض / ملاحظات' : 'Purpose / Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="4" style="text-align: inherit;">${isAr ? 'إجمالي المواد المنصرفة' : 'Total Issued Units'}</th>
                        <th style="text-align: center; font-size: 0.95rem;">${totalPieces}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

// ==========================================================================
// 3-OPTIONS STARTUP PORTAL & COMPANY FURNITURE / EXECUTIVE HQ MODULES
// ==========================================================================

function openHomePortal() {
    const portal = document.getElementById('app-home-portal');
    if (portal) {
        portal.style.display = 'flex';
        translateDOMNodes(currentLang);
    }
}

function enterPortalSection(section) {
    const portal = document.getElementById('app-home-portal');
    if (portal) {
        portal.style.display = 'none';
    }
    if (section === 'buffet') {
        switchTab('dash');
    } else if (section === 'furniture') {
        switchTab('furniture');
    } else if (section === 'furniture-matrix') {
        switchTab('furniture-matrix');
    } else if (section === 'hq') {
        switchTab('hq');
    } else if (section === 'custody') {
        switchTab('custody');
    }
}

// Helper to compute purchase date, unit price/batches summary, and total cost for a furniture item
function getFurnitureItemFinancials(item, qtyForCalc) {
    const batches = Array.isArray(item.purchases) ? item.purchases : [];
    if (batches.length > 0) {
        let totalBatchCost = 0;
        const dates = [];
        const prices = [];
        batches.forEach(b => {
            const bQty = Number(b.qty) || 0;
            const bPrice = Number(b.unitPrice) || 0;
            const bTot = b.total !== undefined ? Number(b.total) : +(bQty * bPrice).toFixed(2);
            totalBatchCost += bTot;
            if (b.date) dates.push(b.date);
            if (bPrice > 0) prices.push(`${bPrice.toLocaleString()}`);
        });
        const uniqueDates = [...new Set(dates)];
        const dateSummary = uniqueDates.length === 0 ? '—' : (uniqueDates.length === 1 ? uniqueDates[0] : `${uniqueDates.length} تواريخ`);
        const priceSummary = batches.length === 1
            ? `${(Number(batches[0].unitPrice) || 0).toLocaleString()} (${batches[0].qty})`
            : `${batches.length} دفعات شراء`;
        return {
            hasBatches: true,
            batchCount: batches.length,
            dateDisplay: dateSummary,
            priceDisplay: priceSummary,
            totalCost: +totalBatchCost.toFixed(2)
        };
    }
    const singleDate = item.purchaseDate || '';
    const singlePrice = Number(item.unitPrice) || 0;
    const totalCost = +(qtyForCalc * singlePrice).toFixed(2);
    return {
        hasBatches: false,
        batchCount: 0,
        dateDisplay: singleDate,
        priceDisplay: singlePrice > 0 ? singlePrice.toLocaleString() : '',
        unitPrice: singlePrice,
        totalCost
    };
}

function updateFurnitureDirectFinancial(itemId, field, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (field === 'purchaseDate') {
        item.purchaseDate = String(val || '').trim();
    } else if (field === 'unitPrice') {
        item.unitPrice = Math.max(0, Number(val) || 0);
    }
    persistState();
}

function openFurniturePurchasesModal(itemId) {
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!Array.isArray(item.purchases)) item.purchases = [];
    document.getElementById('furn-purchases-item-id').value = String(itemId);
    const titleEl = document.getElementById('furn-purchases-modal-title');
    if (titleEl) {
        titleEl.textContent = currentLang === 'ar'
            ? `سجل دفعات وتواريخ وأسعار شراء: [${item.code || ''}] ${item.name}`
            : `Purchase Batches & Pricing: [${item.code || ''}] ${trText(item.name)}`;
    }
    const today = new Date().toISOString().split('T')[0];
    const dateInp = document.getElementById('fp-batch-date');
    const floorsInp = document.getElementById('fp-batch-floors');
    const qtyInp = document.getElementById('fp-batch-qty');
    const priceInp = document.getElementById('fp-batch-price');
    const notesInp = document.getElementById('fp-batch-notes');
    if (dateInp) dateInp.value = item.purchaseDate || today;
    if (floorsInp) floorsInp.value = selectedFurnitureFloor || 'الدور السادس والسابع';
    if (qtyInp) qtyInp.value = '1';
    if (priceInp) priceInp.value = item.unitPrice || '';
    if (notesInp) notesInp.value = '';

    renderFurniturePurchasesModalTable(item);
    openModal('modal-furniture-purchases');
    if (window.lucide) window.lucide.createIcons();
}

function renderFurniturePurchasesModalTable(item) {
    const tbody = document.getElementById('furn-purchases-batches-tbody');
    const tfoot = document.getElementById('furn-purchases-batches-tfoot');
    if (!tbody) return;
    const batches = Array.isArray(item.purchases) ? item.purchases : [];
    tbody.innerHTML = '';

    if (batches.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:1.4rem; color:var(--text-muted);">لا توجد دفعات مجزأة مسجلة بعد. يمكنك إضافة كل دفعة شراء (تاريخها، الأدوار الخاصة بها، العدد، وسعر الوحدة) من الأعلى.</td></tr>`;
        if (tfoot) tfoot.innerHTML = '';
        return;
    }

    let sumQty = 0;
    let sumTotal = 0;
    batches.forEach((b, idx) => {
        const q = Number(b.qty) || 0;
        const p = Number(b.unitPrice) || 0;
        const tot = +(q * p).toFixed(2);
        sumQty += q;
        sumTotal += tot;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; font-weight: 800;">${idx + 1}</td>
            <td style="text-align: center;"><input type="date" class="table-input" value="${b.date || ''}" onchange="updateFurnitureBatchField(${item.id}, ${b.id}, 'date', this.value)" style="width: 130px;"></td>
            <td><input type="text" class="table-input" value="${b.floors || ''}" onchange="updateFurnitureBatchField(${item.id}, ${b.id}, 'floors', this.value)" style="min-width: 120px;"></td>
            <td style="text-align: center;"><input type="number" min="1" class="table-input" value="${q}" onchange="updateFurnitureBatchField(${item.id}, ${b.id}, 'qty', this.value)" style="width: 70px; text-align: center; font-weight: 800;"></td>
            <td style="text-align: center;"><input type="number" min="0" step="0.01" class="table-input" value="${p}" onchange="updateFurnitureBatchField(${item.id}, ${b.id}, 'unitPrice', this.value)" style="width: 95px; text-align: center; font-weight: 800;"></td>
            <td style="text-align: center; font-weight: 900; color: var(--primary);">${tot.toLocaleString()} ج.م</td>
            <td><input type="text" class="table-input" value="${b.notes || ''}" onchange="updateFurnitureBatchField(${item.id}, ${b.id}, 'notes', this.value)" style="min-width: 110px;"></td>
            <td style="text-align: center;"><button onclick="deleteFurniturePurchaseBatch(${item.id}, ${b.id})" class="btn btn-sm btn-danger" style="padding: 0.2rem 0.45rem;">✖</button></td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        tfoot.innerHTML = `
            <tr>
                <th colspan="3" style="text-align: inherit;">إجمالي جميع دفعات شراء الصنف</th>
                <th style="text-align: center; font-weight: 900;">${sumQty}</th>
                <th></th>
                <th style="text-align: center; font-weight: 900; background: var(--primary); color: var(--text-inverse);">${sumTotal.toLocaleString()} ج.م</th>
                <th colspan="2"></th>
            </tr>
        `;
    }
}

function addFurniturePurchaseBatch() {
    if (currentUserRole === 'viewer') return;
    const itemId = Number(document.getElementById('furn-purchases-item-id').value);
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!Array.isArray(item.purchases)) item.purchases = [];

    const date = document.getElementById('fp-batch-date').value || new Date().toISOString().split('T')[0];
    const floors = document.getElementById('fp-batch-floors').value.trim() || selectedFurnitureFloor;
    const qty = Math.max(1, Number(document.getElementById('fp-batch-qty').value) || 1);
    const unitPrice = Math.max(0, Number(document.getElementById('fp-batch-price').value) || 0);
    const notes = document.getElementById('fp-batch-notes').value.trim();

    item.purchases.push({
        id: Date.now() + Math.floor(Math.random() * 1000),
        date,
        floors,
        qty,
        unitPrice,
        total: +(qty * unitPrice).toFixed(2),
        notes
    });

    persistState();
    renderFurniturePurchasesModalTable(item);
    showToast('تمت إضافة دفعة الشراء واحتساب إجمالي التكلفة تلقائياً!', 'success');
}

function updateFurnitureBatchField(itemId, batchId, field, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item || !Array.isArray(item.purchases)) return;
    const batch = item.purchases.find(b => b.id === batchId);
    if (!batch) return;
    if (field === 'qty' || field === 'unitPrice') {
        batch[field] = Math.max(0, Number(val) || 0);
        batch.total = +(Number(batch.qty || 0) * Number(batch.unitPrice || 0)).toFixed(2);
    } else {
        batch[field] = String(val || '').trim();
    }
    persistState();
    renderFurniturePurchasesModalTable(item);
}

function deleteFurniturePurchaseBatch(itemId, batchId) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item || !Array.isArray(item.purchases)) return;
    item.purchases = item.purchases.filter(b => b.id !== batchId);
    persistState();
    renderFurniturePurchasesModalTable(item);
}

// --- COMPANY FURNITURE INVENTORY (FLOORS 4 TO 9) ---
function selectFurnitureFloor(floorName) {
    selectedFurnitureFloor = floorName;
    document.querySelectorAll('.furn-floor-card').forEach(card => {
        card.classList.toggle('active', card.dataset.floor === floorName);
    });
    renderFurnitureView();
}

function renderFurnitureView() {
    const tbody = document.getElementById('furniture-floor-tbody');
    if (!tbody) return;

    const floorsList = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    const query = searchQuery.toLowerCase().trim();
    const isViewer = currentUserRole === 'viewer';

    // Update heading and KPIs
    const headingEl = document.getElementById('furn-current-floor-heading');
    if (headingEl) {
        headingEl.textContent = currentLang === 'ar'
            ? `جرد أصول الشركة — ${selectedFurnitureFloor}`
            : `Company Assets Inventory — ${trText(selectedFurnitureFloor)}`;
    }

    let floorTotalUnits = 0;
    let allFloorsTotalUnits = 0;
    let acTotalUnits = 0;
    const floorCountsMap = {
        'الدور الرابع': 0,
        'الدور الخامس': 0,
        'الدور السادس': 0,
        'الدور السابع': 0,
        'الدور الثامن': 0,
        'الدور التاسع': 0
    };

    furnitureInventory.forEach(item => {
        if (!item.floors) item.floors = {};
        if (!item.notes) item.notes = {};
        const flQty = Number(item.floors[selectedFurnitureFloor]) || 0;
        floorTotalUnits += flQty;

        let itemAllSum = 0;
        floorsList.forEach(fl => {
            const q = Number(item.floors[fl]) || 0;
            itemAllSum += q;
            floorCountsMap[fl] = (floorCountsMap[fl] || 0) + q;
        });
        allFloorsTotalUnits += itemAllSum;

        if ((item.name && item.name.includes('تكييف')) || (item.cat && item.cat.includes('تكييف'))) {
            acTotalUnits += itemAllSum;
        }
    });

    // Update Floor Cards Count Badges & Filter All Chip count
    document.querySelectorAll('.furn-floor-count-badge').forEach(badge => {
        const fl = badge.getAttribute('data-floor-count');
        const c = floorCountsMap[fl] || 0;
        badge.textContent = currentLang === 'ar' ? `${c} أصل` : `${c} units`;
    });
    const allChip = document.querySelector('.furn-cat-chip[data-fcat="الكل"]');
    if (allChip) {
        allChip.textContent = currentLang === 'ar' ? `الكل (${furnitureInventory.length})` : `All (${furnitureInventory.length})`;
    }

    const kpiTypes = document.getElementById('furn-kpi-types');
    const kpiFloorTot = document.getElementById('furn-kpi-floor-total');
    const kpiFloorName = document.getElementById('furn-kpi-floor-name');
    const kpiAllTot = document.getElementById('furn-kpi-all-total');
    const kpiAcTot = document.getElementById('furn-kpi-ac-total');

    if (kpiTypes) kpiTypes.textContent = furnitureInventory.length;
    if (kpiFloorTot) kpiFloorTot.textContent = floorTotalUnits.toLocaleString();
    if (kpiFloorName) kpiFloorName.textContent = trText(selectedFurnitureFloor);
    if (kpiAllTot) kpiAllTot.textContent = allFloorsTotalUnits.toLocaleString();
    if (kpiAcTot) kpiAcTot.textContent = acTotalUnits.toLocaleString();

    let items = furnitureInventory;
    if (activeFurnitureCatFilter !== 'الكل') {
        items = items.filter(i => (i.cat && i.cat.includes(activeFurnitureCatFilter)) || i.cat === activeFurnitureCatFilter);
    }
    if (query) {
        items = items.filter(i =>
            (i.code && i.code.toLowerCase().includes(query)) ||
            (i.name && i.name.toLowerCase().includes(query)) ||
            trText(i.name || '').toLowerCase().includes(query) ||
            (i.size && i.size.toLowerCase().includes(query)) ||
            (i.cat && i.cat.toLowerCase().includes(query)) ||
            trText(i.cat || '').toLowerCase().includes(query)
        );
    }

    tbody.innerHTML = '';

    if (items.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 2.2rem; color: var(--text-muted);">
                    <div style="margin-bottom: 0.75rem; font-weight: 700;">${currentLang === 'ar' ? 'لا توجد أصناف مسجلة حالياً في هذا العرض.' : 'No furniture items currently listed.'}</div>
                    ${furnitureInventory.length === 0 && !isViewer ? `<button onclick="restoreDefaultFurnitureItems()" class="btn btn-primary btn-sm"><i data-lucide="rotate-ccw"></i> <span>${currentLang === 'ar' ? 'استعادة قائمة الأصناف الافتراضية المرتبة' : 'Restore Default Items'}</span></button>` : ''}
                </td>
            </tr>
        `;
        return;
    }

    let lastMainGroup = '';
    let lastSubCat = '';
    let floorGrandTotalCost = 0;

    items.forEach((item, idx) => {
        const subCat = normalizeFurnitureCategory(item.cat, item.name);
        const mainGroup = getMainGroupForSubcat(subCat);

        // Render Main Group Header Row (e.g., 1 - الأثاث المكتبي)
        if (mainGroup !== lastMainGroup) {
            lastMainGroup = mainGroup;
            const trMain = document.createElement('tr');
            trMain.className = 'wbs-main-group-row';
            trMain.innerHTML = `<td colspan="${isViewer ? 9 : 10}">📂 ${trText(mainGroup)}</td>`;
            tbody.appendChild(trMain);
        }

        // Render Subcategory Header Row (e.g., 1.1 المكاتب)
        if (subCat !== lastSubCat) {
            lastSubCat = subCat;
            const trSub = document.createElement('tr');
            trSub.className = 'wbs-sub-group-row';
            trSub.innerHTML = `
                <td colspan="${isViewer ? 9 : 10}">
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
                        <span>📌 ${trText(subCat)}</span>
                        ${isViewer ? '' : `<button type="button" onclick="openAddFurnitureModal('${subCat}')" class="btn btn-sm btn-secondary no-print" style="padding:0.18rem 0.6rem; font-size:0.74rem; border-color:rgba(212,175,55,0.45); color:var(--primary);">+ ${currentLang === 'ar' ? `إضافة بند في (${subCat})` : `Add in (${trText(subCat)})`}</button>`}
                    </div>
                </td>
            `;
            tbody.appendChild(trSub);
        }

        const qty = Number(item.floors[selectedFurnitureFloor]) || 0;
        const note = item.notes[selectedFurnitureFloor] || '';
        const companySum = floorsList.reduce((s, fl) => s + (Number(item.floors[fl]) || 0), 0);
        const wbsCode = item.code || `${idx + 1}`;
        const itemSize = item.size || '';
        const fin = getFurnitureItemFinancials(item, qty);
        floorGrandTotalCost += fin.totalCost;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; white-space: nowrap;">
                <span class="wbs-code-badge" title="الترقيم التلقائي">${wbsCode}</span>
            </td>
            <td style="width: 1%; white-space: nowrap;">
                ${isViewer 
                    ? `<span style="font-weight: 800; color: var(--text-main); font-size: 0.94rem; white-space: nowrap;">${trText(item.name)}</span>` 
                    : `<input type="text" class="table-input" value="${trText(item.name)}" size="${Math.max((trText(item.name) || '').length + 2, 14)}" onchange="updateFurnitureItemField(${item.id}, 'name', this.value)" style="font-weight: 800; font-size: 0.94rem; width: auto; min-width: 135px;">`}
            </td>
            <td style="white-space: nowrap;">
                ${isViewer 
                    ? `<span class="wbs-size-pill" style="font-size: 0.88rem; font-weight: 800;">${trText(itemSize) || '—'}</span>` 
                    : `<input type="text" class="table-input" value="${trText(itemSize)}" placeholder="${currentLang === 'ar' ? 'اكتب المقاس...' : 'Size...'}" onchange="updateFurnitureItemField(${item.id}, 'size', this.value)" style="font-size: 0.9rem; font-weight: 700; width: 100%; min-width: 115px;">`}
            </td>
            <td style="text-align: center; white-space: nowrap;">
                ${isViewer 
                    ? `<span style="display:inline-block; min-width:44px; padding:0.3rem 0.65rem; border-radius:8px; font-weight:900; font-size:1.05rem; background:rgba(212,175,55,0.12); color:var(--primary);">${qty}</span>` 
                    : `<div class="stepper-control">
                        <button type="button" class="stepper-btn" onclick="stepFurnitureQty(${item.id}, -1)">−</button>
                        <input type="number" min="0" value="${qty}" class="stepper-input" onchange="updateFurnitureQty(${item.id}, this.value)" style="font-weight: 900; color: var(--primary);">
                        <button type="button" class="stepper-btn" onclick="stepFurnitureQty(${item.id}, 1)">+</button>
                    </div>`}
            </td>
            <td style="text-align: center; white-space: nowrap;">
                ${fin.hasBatches
                    ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})">📅 ${fin.dateDisplay}</button>`
                    : (isViewer
                        ? `<span style="font-size: 0.84rem;">${fin.dateDisplay || '—'}</span>`
                        : `<input type="date" class="table-input" value="${fin.dateDisplay}" onchange="updateFurnitureDirectFinancial(${item.id}, 'purchaseDate', this.value)" style="width: 122px; font-size: 0.8rem;">`)}
            </td>
            <td style="text-align: center; white-space: nowrap;">
                <div style="display: inline-flex; align-items: center; gap: 0.25rem;">
                    ${fin.hasBatches
                        ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})">🧾 ${fin.priceDisplay}</button>`
                        : (isViewer
                            ? `<span style="font-weight: 800;">${fin.unitPrice > 0 ? fin.unitPrice.toLocaleString() : '—'}</span>`
                            : `<input type="number" min="0" step="0.01" class="table-input" value="${fin.unitPrice > 0 ? fin.unitPrice : ''}" placeholder="${currentLang === 'ar' ? 'السعر...' : 'Price...'}" onchange="updateFurnitureDirectFinancial(${item.id}, 'unitPrice', this.value)" style="width: 90px; text-align: center; font-weight: 800;">`)}
                    ${!isViewer ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})" title="${currentLang === 'ar' ? 'إدارة دفعات الشراء والتواريخ والأسعار المتعددة لهذا الصنف' : 'Manage multiple purchase batches/dates'}">📑</button>` : ''}
                </div>
            </td>
            <td style="text-align: center; font-weight: 900; background: var(--primary-light); color: var(--primary); white-space: nowrap;">
                ${fin.totalCost > 0 ? fin.totalCost.toLocaleString() : '—'}
            </td>
            <td style="min-width: 210px; width: 100%;">
                ${isViewer 
                    ? `<span style="font-size: 0.86rem; color: ${note ? 'var(--text-main)' : 'var(--text-muted)'}; display: block; line-height: 1.45;">${note || '—'}</span>` 
                    : `<input type="text" class="table-input" value="${note}" placeholder="${currentLang === 'ar' ? 'ملاحظات أو حالة الصنف بالطابق...' : 'Notes or condition...'}" onchange="updateFurnitureNote(${item.id}, this.value)" style="width: 100%; min-width: 195px; font-size: 0.86rem; padding: 0.45rem 0.75rem;">`}
            </td>
            <td style="text-align: center; font-weight: 900; color: var(--success); font-size: 1.05rem; white-space: nowrap;">${companySum}</td>
            <td style="text-align: center; white-space: nowrap;" class="no-print admin-only">
                <div style="display: inline-flex; align-items: center; gap: 0.22rem;">
                    <button onclick="promptMoveFurniturePosition(${item.id})" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.45rem; font-size: 0.72rem;" title="${currentLang === 'ar' ? 'نقل سريع إلى أي رقم ترتيب تريده مباشرة' : 'Move to Position'}">🔢</button>
                    <button onclick="moveFurnitureItem(${item.id}, -1)" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.42rem; font-size: 0.72rem; min-width: 24px;" title="${currentLang === 'ar' ? 'تحريك لأعلى (حدد عدد الخطوات 1، 2، 3...) 🔼' : 'Move Up'}" ${idx === 0 ? 'disabled style="opacity:0.35; pointer-events:none;"' : ''}>▲</button>
                    <button onclick="moveFurnitureItem(${item.id}, 1)" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.42rem; font-size: 0.72rem; min-width: 24px;" title="${currentLang === 'ar' ? 'تحريك لأسفل (حدد عدد الخطوات 1، 2، 3...) 🔽' : 'Move Down'}" ${idx === items.length - 1 ? 'disabled style="opacity:0.35; pointer-events:none;"' : ''}>▼</button>
                    <button onclick="printSingleFurnitureItemReport(${item.id})" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.45rem;" title="${currentLang === 'ar' ? 'طباعة بيان هذا الصنف' : 'Print this item'}"><i data-lucide="printer" style="width:13px;height:13px;"></i></button>
                    <button onclick="deleteFurnitureItem(${item.id})" class="btn btn-sm btn-danger" style="padding: 0.22rem 0.45rem;" title="${currentLang === 'ar' ? 'حذف الصنف' : 'Delete item'}"><i data-lucide="trash-2" style="width:13px;height:13px;"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const tfoot = document.getElementById('furniture-floor-tfoot');
    if (tfoot) {
        tfoot.innerHTML = `
            <tr>
                <th colspan="3" style="text-align: inherit; font-weight: 900;">${currentLang === 'ar' ? `إجمالي أصول (${selectedFurnitureFloor})` : `Total Assets (${trText(selectedFurnitureFloor)})`}</th>
                <th style="text-align: center; font-weight: 900; font-size: 1.05rem; color: var(--primary);">${floorTotalUnits}</th>
                <th colspan="2" style="text-align: inherit; font-weight: 800;">${currentLang === 'ar' ? 'إجمالي التكلفة المسجلة:' : 'Total Recorded Cost:'}</th>
                <th style="text-align: center; font-weight: 900; background: var(--primary); color: var(--text-inverse);">${floorGrandTotalCost > 0 ? floorGrandTotalCost.toLocaleString() + (currentLang === 'ar' ? ' ج.م' : ' EGP') : '—'}</th>
                <th></th>
                <th style="text-align: center; font-weight: 900; color: var(--success);">${allFloorsTotalUnits}</th>
                <th class="no-print admin-only"></th>
            </tr>
        `;
    }

    if (window.lucide) lucide.createIcons();
}

function updateFurnitureItemField(itemId, field, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    const trimmed = String(val).trim();
    if (field === 'name' && !trimmed) {
        showToast(currentLang === 'ar' ? 'اسم الصنف أو البيان لا يمكن أن يكون فارغاً' : 'Item name cannot be empty', 'warning');
        renderFurnitureView();
        renderFurnitureMatrix();
        return;
    }
    item[field] = trimmed;
    if (field === 'cat') {
        recalculateAllFurnitureCodes(true);
    }
    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
    showToast(currentLang === 'ar' ? 'تم تعديل وحفظ البيان والترقيم تلقائياً' : 'Item updated successfully', 'success');
}

function promptMoveFurniturePosition(itemId) {
    if (currentUserRole === 'viewer') {
        showToast('خاصية إعادة الترتيب متاحة للمسؤول فقط', 'warning');
        return;
    }
    const currentIdx = furnitureInventory.findIndex(i => i.id === itemId);
    if (currentIdx === -1) return;
    const currentPos = currentIdx + 1;
    const maxPos = furnitureInventory.length;
    const item = furnitureInventory[currentIdx];
    const input = prompt(`الترتيب الحالي لصنف "${item.name}" هو رقم (${currentPos}). أدخل رقم الترتيب الجديد في الجدول (من 1 إلى ${maxPos}):`, currentPos);
    if (input === null) return;
    const target = parseInt(input, 10);
    if (isNaN(target) || target < 1 || target > maxPos) {
        showToast(`يرجى إدخال رقم ترتيب صحيح بين 1 و ${maxPos}`, 'warning');
        return;
    }
    furnitureInventory.splice(currentIdx, 1);
    furnitureInventory.splice(target - 1, 0, item);
    recalculateAllFurnitureCodes(false);
    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
    showToast(`تم نقل الصنف وتحديث الترقيم التلقائي بنجاح!`, 'success');
}

function moveFurnitureItem(itemId, direction, steps) {
    if (currentUserRole === 'viewer') {
        showToast(currentLang === 'ar' ? 'خاصية تعديل الترتيب متاحة للمسؤول فقط' : 'Reordering is restricted to Admin', 'warning');
        return;
    }
    const idx = furnitureInventory.findIndex(i => i.id === itemId);
    if (idx === -1) return;
    const item = furnitureInventory[idx];
    const isUp = direction < 0;
    const maxSteps = isUp ? idx : (furnitureInventory.length - 1 - idx);

    if (maxSteps <= 0) {
        showToast(isUp ? 'الصنف بالفعل في أعلى القائمة' : 'الصنف بالفعل في أسفل القائمة', 'info');
        return;
    }

    let numSteps = steps;
    if (numSteps === undefined || numSteps === null) {
        const dirName = isUp ? 'لأعلى 🔼' : 'لأسفل 🔽';
        const input = prompt(
            `تحريك صنف "${item.name}" ${dirName}\nالترتيب الحالي: (${idx + 1} من ${furnitureInventory.length})\nكم خطوة تريد التحريك؟ (أدخل 1 أو 2 أو 3 أو 4... أو اضغط موافق لتحريك خطوة واحدة - الحد الأقصى ${maxSteps}):`,
            "1"
        );
        if (input === null) return;
        numSteps = parseInt(input.trim(), 10);
        if (isNaN(numSteps) || numSteps < 1) {
            showToast('يرجى إدخال عدد خطوات صحيح (1 أو أكثر)', 'warning');
            return;
        }
    }

    const actualSteps = Math.min(numSteps, maxSteps);
    const targetIdx = idx + (direction * actualSteps);
    if (targetIdx === idx) return;

    furnitureInventory.splice(idx, 1);
    furnitureInventory.splice(targetIdx, 0, item);
    recalculateAllFurnitureCodes(false);

    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
    showToast(
        currentLang === 'ar'
            ? `تم تحريك "${item.name}" وتحديث الترقيم التلقائي (${item.code})`
            : `Moved item ${isUp ? 'up' : 'down'}`,
        'success'
    );
}

function autoSortFurnitureByGroups() {
    if (furnitureInventory.length === 0) return;
    recalculateAllFurnitureCodes(true);
    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
    showToast(currentLang === 'ar' ? 'تمت التوزيعة وإعادة الترقيم التسلسلي التلقائي (1.1.1، 1.1.2...) بنجاح!' : 'Items grouped and numbered automatically!', 'success');
}

function stepFurnitureQty(itemId, delta) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!item.floors) item.floors = {};
    let current = Number(item.floors[selectedFurnitureFloor]) || 0;
    current = Math.max(0, current + delta);
    item.floors[selectedFurnitureFloor] = current;
    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
}

function updateFurnitureQty(itemId, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!item.floors) item.floors = {};
    item.floors[selectedFurnitureFloor] = Math.max(0, Number(val) || 0);
    persistState();
    renderFurnitureView();
    renderFurnitureMatrix();
}

function updateFurnitureNote(itemId, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!item.notes) item.notes = {};
    item.notes[selectedFurnitureFloor] = val.trim();
    persistState();
}

function onNewFurnNameInput(val) {
    const detected = autoDetectFurnitureCategory(val);
    const catInp = document.getElementById('new-furn-cat');
    if (detected && catInp) {
        catInp.value = detected;
        updateInsertAfterDropdown(detected);
    }
    suggestNextFurnitureCode();
}

function updateInsertAfterDropdown(selectedCat) {
    const sel = document.getElementById('new-furn-insert-after');
    if (!sel) return;
    const cat = normalizeFurnitureCategory(selectedCat || (document.getElementById('new-furn-cat') ? document.getElementById('new-furn-cat').value : '1.1 المكاتب'));
    sel.innerHTML = `<option value="auto">✨ تلقائي في نهاية مجموعة (${cat}) مع ترقيم أوتوماتيك</option>`;

    const catItems = furnitureInventory.filter(i => i.cat === cat);
    if (catItems.length > 0) {
        const optGroupCat = document.createElement('optgroup');
        optGroupCat.label = `أصناف مجموعة: ${cat}`;
        catItems.forEach(it => {
            const opt = document.createElement('option');
            opt.value = it.id;
            opt.textContent = `أسفل: [${it.code || '—'}] ${it.name}`;
            optGroupCat.appendChild(opt);
        });
        sel.appendChild(optGroupCat);
    }
}

function openAddFurnitureModal(presetCat) {
    if (currentUserRole === 'viewer') {
        showToast('إضافة صنف جديد متاحة للمسؤول فقط', 'warning');
        return;
    }
    const nameInp = document.getElementById('new-furn-name');
    const sizeInp = document.getElementById('new-furn-size');
    const qtyInp = document.getElementById('new-furn-qty');
    const catInp = document.getElementById('new-furn-cat');
    const floorInp = document.getElementById('new-furn-floor');
    if (nameInp) nameInp.value = '';
    if (sizeInp) sizeInp.value = '';
    if (qtyInp) qtyInp.value = '1';
    if (floorInp) floorInp.value = selectedFurnitureFloor || 'الدور الرابع';

    if (catInp) {
        if (presetCat && CANONICAL_FURNITURE_GROUPS.includes(presetCat)) {
            catInp.value = presetCat;
        } else if (activeFurnitureCatFilter !== 'الكل' && CANONICAL_FURNITURE_GROUPS.includes(activeFurnitureCatFilter)) {
            catInp.value = activeFurnitureCatFilter;
        } else {
            catInp.value = '1.1 المكاتب';
        }
    }

    suggestNextFurnitureCode();
    updateInsertAfterDropdown(catInp ? catInp.value : '1.1 المكاتب');
    openModal('modal-add-furniture');
    if (nameInp) setTimeout(() => nameInp.focus(), 100);
}

function suggestNextFurnitureCode() {
    const catInp = document.getElementById('new-furn-cat');
    const codeInp = document.getElementById('new-furn-code');
    if (!catInp || !codeInp) return;
    const cat = normalizeFurnitureCategory(catInp.value || '1.1 المكاتب');
    const prefixMatch = cat.match(/^(\d+\.\d+)/);
    const prefix = prefixMatch ? prefixMatch[1] : '1.1';

    const sameGroupCount = furnitureInventory.filter(i => normalizeFurnitureCategory(i.cat, i.name) === cat).length;
    codeInp.value = `${prefix}.${sameGroupCount + 1}`;
}

function saveNewFurnitureItem() {
    if (currentUserRole === 'viewer') return;
    const nameInp = document.getElementById('new-furn-name');
    const sizeInp = document.getElementById('new-furn-size');
    const catInp = document.getElementById('new-furn-cat');
    const floorInp = document.getElementById('new-furn-floor');
    const qtyInp = document.getElementById('new-furn-qty');
    const insertAfterSelect = document.getElementById('new-furn-insert-after');

    const name = nameInp ? nameInp.value.trim() : '';
    const size = sizeInp ? sizeInp.value.trim() : '';
    const rawCat = catInp ? catInp.value : '';
    const cat = normalizeFurnitureCategory(rawCat, name);
    const targetFloor = floorInp ? floorInp.value : selectedFurnitureFloor;
    const qty = Math.max(0, Number(qtyInp ? qtyInp.value : 0) || 0);
    const insertChoice = insertAfterSelect ? insertAfterSelect.value : 'auto';

    if (!name) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال اسم الصنف!' : 'Please enter item name!', 'warning');
        return;
    }

    const nextId = furnitureInventory.length > 0 ? Math.max(...furnitureInventory.map(i => i.id)) + 1 : 101;
    const floorsObj = { 'الدور الرابع': 0, 'الدور الخامس': 0, 'الدور السادس': 0, 'الدور السابع': 0, 'الدور الثامن': 0, 'الدور التاسع': 0 };
    if (targetFloor === 'ALL') {
        Object.keys(floorsObj).forEach(fl => { floorsObj[fl] = qty; });
    } else {
        floorsObj[targetFloor] = qty;
        selectedFurnitureFloor = targetFloor;
    }

    const newItem = {
        id: nextId,
        code: '',
        name,
        size,
        cat,
        mainGroup: getMainGroupForSubcat(cat),
        floors: floorsObj,
        notes: {}
    };

    let inserted = false;

    if (insertChoice !== 'auto') {
        const refId = Number(insertChoice);
        const refIdx = furnitureInventory.findIndex(i => i.id === refId);
        if (refIdx !== -1) {
            furnitureInventory.splice(refIdx + 1, 0, newItem);
            inserted = true;
        }
    }

    if (!inserted) {
        let lastCatIdx = -1;
        for (let i = 0; i < furnitureInventory.length; i++) {
            if (normalizeFurnitureCategory(furnitureInventory[i].cat, furnitureInventory[i].name) === cat) {
                lastCatIdx = i;
            }
        }
        if (lastCatIdx !== -1) {
            furnitureInventory.splice(lastCatIdx + 1, 0, newItem);
            inserted = true;
        } else {
            furnitureInventory.push(newItem);
            inserted = true;
        }
    }

    recalculateAllFurnitureCodes(!inserted || insertChoice === 'auto');
    persistState();
    closeModal('modal-add-furniture');
    renderFurnitureView();
    renderFurnitureMatrix();
    showToast(currentLang === 'ar' ? `تمت إضافة "${name}" وتوزيعه تلقائياً برقم (${newItem.code}) بنجاح!` : 'Furniture item added & numbered automatically!', 'success');
}

function deleteFurnitureItem(itemId) {
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    const msg = currentLang === 'ar' ? `هل ترغب في حذف الصنف "${item.name}" من جرد أصول الشركة؟` : `Delete "${trText(item.name)}" from furniture inventory?`;
    if (confirm(msg)) {
        furnitureInventory = furnitureInventory.filter(i => i.id !== itemId);
        recalculateAllFurnitureCodes(false);
        persistState();
        renderFurnitureView();
        renderFurnitureMatrix();
        showToast(currentLang === 'ar' ? 'تم حذف الصنف وإعادة ضبط الترقيم التلقائي' : 'Item deleted', 'info');
    }
}

function deleteAllFurnitureItems() {
    if (furnitureInventory.length === 0) {
        showToast(currentLang === 'ar' ? 'قائمة جرد أصول الشركة فارغة بالفعل!' : 'Company assets inventory is already empty!', 'info');
        return;
    }
    const msg = currentLang === 'ar'
        ? 'تحذير: هل أنت متأكد من رغبتك في حذف جميع الأصناف من جرد أصول الشركة بالكامل؟'
        : 'Warning: Are you sure you want to delete ALL items from Company Assets Inventory?';
    if (confirm(msg)) {
        furnitureInventory = [];
        localStorage.setItem('buffet_v9_furn_v2_migrated', 'true');
        persistState();
        showToast(currentLang === 'ar' ? 'تم حذف جميع أصناف جرد أصول الشركة بنجاح!' : 'All company asset items deleted!', 'info');
    }
}

function restoreDefaultFurnitureItems() {
    const msg = currentLang === 'ar'
        ? 'هل ترغب في استعادة قائمة الأصناف الافتراضية المرتبة لجرد أصول الشركة؟'
        : 'Restore default grouped items to Company Assets Inventory?';
    if (confirm(msg)) {
        furnitureInventory = migrateFurnitureListToV3WBS(furnitureInventory);
        recalculateAllFurnitureCodes(true);
        localStorage.setItem('buffet_v9_furn_wbs_migrated', 'true');
        activeFurnitureCatFilter = 'الكل';
        document.querySelectorAll('.furn-cat-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-fcat') === 'الكل');
        });
        persistState();
        renderFurnitureView();
        renderFurnitureMatrix();
        showToast(currentLang === 'ar' ? 'تمت استعادة وترتيب الأصناف الافتراضية بالترقيم التلقائي بنجاح!' : 'Default items restored!', 'success');
    }
}

function printSingleFurnitureItemReport(itemId) {
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const todayDate = getFormattedTodayDate(isAr);
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    let totalItemUnits = 0;
    let rowsHtml = '';

    floors.forEach((fl, idx) => {
        const qty = Number((item.floors || {})[fl]) || 0;
        const note = (item.notes || {})[fl] || '';
        totalItemUnits += qty;
        rowsHtml += `
            <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td class="print-item-name" style="white-space: nowrap !important; font-size: 0.96rem !important; font-weight: 800 !important;"><strong>${trText(fl)}</strong></td>
                <td style="text-align: center; font-weight: bold;">${qty}</td>
                <td>${note}</td>
            </tr>
        `;
    });

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="4" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'تقرير جرد وتحليل أثاث الطوابق' : 'Floors Furniture Inventory & Analysis Report',
                                `${isAr ? 'الصنف:' : 'Item:'} [${item.code || ''}] ${trText(item.name)} (${trText(item.cat)}) | ${isAr ? 'تاريخ التقرير:' : 'Date:'} ${todayDate}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 36px; text-align: center;">#</th>
                        <th class="print-item-name">${isAr ? 'الطابق' : 'Floor'}</th>
                        <th style="text-align: center; width: 130px;">${isAr ? 'العدد المتواجد بالفعل' : 'Actual Existing Count'}</th>
                        <th>${isAr ? 'ملاحظات / حالة الصنف بالطابق' : 'Notes / Condition'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="2">${isAr ? `إجمالي (${trText(item.name)}) بجميع الأدوار (4-9)` : `Total (${trText(item.name)}) Across All Floors`}</th>
                        <th style="text-align: center; font-size: 0.95rem;">${totalItemUnits}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function getFurnitureMatrixNoteText(item) {
    if (!item) return '';
    if (item.matrixNote !== undefined && item.matrixNote !== null && String(item.matrixNote).trim() !== '') {
        return String(item.matrixNote).trim();
    }
    if (item.notes && typeof item.notes === 'object') {
        const vals = Object.values(item.notes).map(v => String(v || '').trim()).filter(Boolean);
        const uniqueVals = [...new Set(vals)];
        if (uniqueVals.length > 0) return uniqueVals.join(' ، ');
    }
    return '';
}

function updateFurnitureMatrixNote(itemId, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    item.matrixNote = String(val || '').trim();
    persistState();
}

// --- FURNITURE FLOORS ANALYSIS MATRIX (FLOORS 4 TO 9) ---
function renderFurnitureMatrix() {
    const tbody = document.getElementById('furniture-matrix-tbody');
    const tfoot = document.getElementById('furniture-matrix-tfoot');
    if (!tbody) return;

    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    const colTotals = [0, 0, 0, 0, 0, 0];
    let grandTotal = 0;
    let grandTotalCost = 0;
    const isViewer = currentUserRole === 'viewer';

    tbody.innerHTML = '';

    let lastMainGroup = '';
    let lastSubCat = '';

    furnitureInventory.forEach((item, idx) => {
        const subCat = normalizeFurnitureCategory(item.cat, item.name);
        const mainGroup = getMainGroupForSubcat(subCat);

        if (mainGroup !== lastMainGroup) {
            lastMainGroup = mainGroup;
            const trMain = document.createElement('tr');
            trMain.className = 'wbs-main-group-row';
            trMain.innerHTML = `<td colspan="14">📂 ${trText(mainGroup)}</td>`;
            tbody.appendChild(trMain);
        }

        if (subCat !== lastSubCat) {
            lastSubCat = subCat;
            const trSub = document.createElement('tr');
            trSub.className = 'wbs-sub-group-row';
            trSub.innerHTML = `<td colspan="14">📌 ${trText(subCat)}</td>`;
            tbody.appendChild(trSub);
        }

        if (!item.floors) item.floors = {};
        let rowTotal = 0;
        let cellsHtml = '';

        floors.forEach((fl, fIdx) => {
            const qty = Number(item.floors[fl]) || 0;
            rowTotal += qty;
            colTotals[fIdx] += qty;
            cellsHtml += `
                <td style="text-align: center; white-space: nowrap;">
                    ${isViewer 
                        ? `<span style="font-weight: ${qty > 0 ? '900' : '600'}; color: ${qty > 0 ? 'var(--primary)' : 'var(--text-muted)'}; font-size: 0.96rem;">${qty}</span>`
                        : `<input type="number" min="0" value="${qty}" class="table-input" onchange="updateFurnitureMatrixCell(${item.id}, '${fl}', this.value)" style="width: 56px; text-align: center; font-size: 0.94rem; font-weight: ${qty > 0 ? '800' : '600'}; color: ${qty > 0 ? 'var(--primary)' : 'var(--text-muted)'};">`}
                </td>
            `;
        });

        grandTotal += rowTotal;
        const fin = getFurnitureItemFinancials(item, rowTotal);
        grandTotalCost += fin.totalCost;
        const matrixNote = getFurnitureMatrixNoteText(item);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; white-space: nowrap;">
                <span class="wbs-code-badge">${item.code || `${idx + 1}`}</span>
            </td>
            <td style="width: 1%; white-space: nowrap;">
                ${isViewer 
                    ? `<strong style="color: var(--text-main); font-size: 0.94rem; white-space: nowrap;">${trText(item.name)}</strong>` 
                    : `<input type="text" class="table-input" value="${trText(item.name)}" size="${Math.max((trText(item.name) || '').length + 2, 13)}" onchange="updateFurnitureItemField(${item.id}, 'name', this.value)" style="font-weight: 800; font-size: 0.94rem; width: auto; min-width: 130px;">`}
            </td>
            <td style="white-space: nowrap;">
                ${isViewer 
                    ? `<span class="wbs-size-pill" style="font-size: 0.88rem; font-weight: 800;">${trText(item.size) || '—'}</span>` 
                    : `<input type="text" class="table-input" value="${trText(item.size) || ''}" placeholder="${currentLang === 'ar' ? 'المقاس...' : 'Size...'}" onchange="updateFurnitureItemField(${item.id}, 'size', this.value)" style="min-width: 105px; font-size: 0.9rem; font-weight: 700;">`}
            </td>
            ${cellsHtml}
            <td style="text-align: center; font-weight: 900; background: var(--primary-light); color: var(--primary); font-size: 1.05rem; white-space: nowrap;">${rowTotal}</td>
            <td style="text-align: center; white-space: nowrap;">
                ${fin.hasBatches
                    ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})">📅 ${fin.dateDisplay}</button>`
                    : (isViewer
                        ? `<span style="font-size: 0.82rem;">${fin.dateDisplay || '—'}</span>`
                        : `<input type="date" class="table-input" value="${fin.dateDisplay}" onchange="updateFurnitureDirectFinancial(${item.id}, 'purchaseDate', this.value)" style="width: 118px; font-size: 0.78rem;">`)}
            </td>
            <td style="text-align: center; white-space: nowrap;">
                <div style="display: inline-flex; align-items: center; gap: 0.2rem;">
                    ${fin.hasBatches
                        ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})">🧾 ${fin.priceDisplay}</button>`
                        : (isViewer
                            ? `<span style="font-weight: 800;">${fin.unitPrice > 0 ? fin.unitPrice.toLocaleString() : '—'}</span>`
                            : `<input type="number" min="0" step="0.01" class="table-input" value="${fin.unitPrice > 0 ? fin.unitPrice : ''}" placeholder="${currentLang === 'ar' ? 'السعر...' : 'Price...'}" onchange="updateFurnitureDirectFinancial(${item.id}, 'unitPrice', this.value)" style="width: 82px; text-align: center; font-weight: 800;">`)}
                    ${!isViewer ? `<button type="button" class="furn-batches-btn" onclick="openFurniturePurchasesModal(${item.id})" title="${currentLang === 'ar' ? 'إدارة دفعات الشراء والتواريخ والأسعار' : 'Manage purchase batches'}">📑</button>` : ''}
                </div>
            </td>
            <td style="text-align: center; font-weight: 900; background: var(--success-light); color: var(--success); white-space: nowrap;">
                ${fin.totalCost > 0 ? fin.totalCost.toLocaleString() : '—'}
            </td>
            <td style="min-width: 135px;">
                ${isViewer
                    ? `<span style="font-size: 0.85rem; color: ${matrixNote ? 'var(--text-main)' : 'var(--text-muted)'};">${matrixNote || '—'}</span>`
                    : `<input type="text" class="table-input" value="${matrixNote}" placeholder="${currentLang === 'ar' ? 'ملاحظات...' : 'Notes...'}" onchange="updateFurnitureMatrixNote(${item.id}, this.value)" style="width: 100%; min-width: 125px; font-size: 0.85rem;">`}
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        const footCells = colTotals.map(c => `<th style="text-align: center; font-weight: 900; color: var(--primary); font-size: 1rem;">${c}</th>`).join('');
        tfoot.innerHTML = `
            <tr>
                <th colspan="3" style="text-align: inherit; font-weight: 900;">${currentLang === 'ar' ? 'إجمالي قطع الأصول بكل طابق' : 'Total Assets per Floor'}</th>
                ${footCells}
                <th style="text-align: center; font-weight: 900; background: var(--primary); color: var(--text-inverse); font-size: 1.1rem;">${grandTotal}</th>
                <th colspan="2" style="text-align: inherit; font-weight: 800;">${currentLang === 'ar' ? 'إجمالي التكلفة:' : 'Total Cost:'}</th>
                <th style="text-align: center; font-weight: 900; background: var(--success); color: white; font-size: 1rem;">${grandTotalCost > 0 ? grandTotalCost.toLocaleString() + (currentLang === 'ar' ? ' ج.م' : ' EGP') : '—'}</th>
                <th></th>
            </tr>
        `;
    }
}

function updateFurnitureMatrixCell(itemId, floorName, val) {
    if (currentUserRole === 'viewer') return;
    const item = furnitureInventory.find(i => i.id === itemId);
    if (!item) return;
    if (!item.floors) item.floors = {};
    item.floors[floorName] = Math.max(0, Number(val) || 0);
    persistState();
}

function printSingleFloorFurnitureReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const todayDate = getFormattedTodayDate(isAr);
    let rowsHtml = '';
    let totalFloorUnits = 0;
    let totalFloorCost = 0;

    let itemsToPrint = furnitureInventory;
    if (activeFurnitureCatFilter !== 'الكل') {
        itemsToPrint = itemsToPrint.filter(i => (i.cat && i.cat.includes(activeFurnitureCatFilter)) || i.cat === activeFurnitureCatFilter);
    }

    let lastMainGroup = '';
    let lastSubCat = '';

    itemsToPrint.forEach((item, idx) => {
        const subCat = normalizeFurnitureCategory(item.cat, item.name);
        const mainGroup = getMainGroupForSubcat(subCat);

        if (mainGroup !== lastMainGroup) {
            lastMainGroup = mainGroup;
            rowsHtml += `<tr class="wbs-main-group-row"><td colspan="8">${trText(mainGroup)}</td></tr>`;
        }
        if (subCat !== lastSubCat) {
            lastSubCat = subCat;
            rowsHtml += `<tr class="wbs-sub-group-row"><td colspan="8">${trText(subCat)}</td></tr>`;
        }

        const qty = Number((item.floors || {})[selectedFurnitureFloor]) || 0;
        const note = (item.notes || {})[selectedFurnitureFloor] || '';
        const fin = getFurnitureItemFinancials(item, qty);
        totalFloorUnits += qty;
        totalFloorCost += fin.totalCost;
        rowsHtml += `
            <tr>
                <td style="width: 6%; text-align: center !important; font-family: monospace; font-weight: bold; font-size: 0.88rem; white-space: nowrap !important;">${item.code || (idx + 1)}</td>
                <td class="print-item-name" style="width: 24% !important; min-width: 155px !important; white-space: nowrap !important; font-size: 0.92rem !important; font-weight: 800 !important;"><strong>${trText(item.name)}</strong></td>
                <td style="width: 13%; font-size: 0.86rem !important; font-weight: 700 !important; text-align: center !important; white-space: nowrap !important;">${trText(item.size) || '—'}</td>
                <td style="width: 8%; text-align: center !important; font-weight: 900; font-size: 0.92rem; white-space: nowrap !important;">${qty}</td>
                <td style="width: 11%; text-align: center !important; font-size: 0.82rem; white-space: nowrap !important;">${fin.dateDisplay || '—'}</td>
                <td style="width: 12%; text-align: center !important; font-size: 0.84rem; font-weight: 700; white-space: nowrap !important;">${fin.priceDisplay || '—'}</td>
                <td style="width: 12%; text-align: center !important; font-size: 0.88rem; font-weight: 900; white-space: nowrap !important;">${fin.totalCost > 0 ? fin.totalCost.toLocaleString() : '—'}</td>
                <td class="print-notes-col" style="width: 14% !important; max-width: 130px !important; font-size: 0.82rem; text-align: right; line-height: 1.35;">${note || '—'}</td>
            </tr>
        `;
    });

    const subDef = `${isAr ? selectedFurnitureFloor : trText(selectedFurnitureFloor)}${activeFurnitureCatFilter !== 'الكل' ? ' — ' + trText(activeFurnitureCatFilter) : ''} | ${isAr ? 'تاريخ التقرير:' : 'Date:'} ${todayDate}`;

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="8" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'تقرير جرد وتحليل أصول الطوابق' : 'Floors Assets Inventory & Analysis Report',
                                subDef
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 6%; text-align: center !important; white-space: nowrap !important;">${isAr ? 'كود' : 'Code'}</th>
                        <th class="print-item-name" style="width: 24% !important; min-width: 155px !important; white-space: nowrap !important;">${isAr ? 'اسم الصنف / البيان' : 'Item Name'}</th>
                        <th style="width: 13%; text-align: center !important; font-size: 0.85rem !important; white-space: nowrap !important;">${isAr ? 'المقاس' : 'Dimensions'}</th>
                        <th style="width: 8%; text-align: center !important; font-size: 0.85rem !important; white-space: nowrap !important;">${isAr ? 'العدد' : 'Count'}</th>
                        <th style="width: 11%; text-align: center !important; font-size: 0.84rem !important; white-space: nowrap !important;">${isAr ? 'تاريخ الشراء' : 'Purchase Date'}</th>
                        <th style="width: 12%; text-align: center !important; font-size: 0.84rem !important; white-space: nowrap !important;">${isAr ? 'السعر / الدفعات' : 'Unit Price'}</th>
                        <th style="width: 12%; text-align: center !important; font-size: 0.85rem !important; white-space: nowrap !important;">${isAr ? 'الإجمالي' : 'Total Cost'}</th>
                        <th class="print-notes-col" style="width: 14% !important; max-width: 130px !important; font-size: 0.85rem !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">${isAr ? `إجمالي أصول (${selectedFurnitureFloor})` : `Total Assets (${trText(selectedFurnitureFloor)})`}</th>
                        <th style="text-align: center; font-size: 0.94rem; font-weight: 900;">${totalFloorUnits}</th>
                        <th colspan="2">${isAr ? 'إجمالي التكلفة' : 'Total Cost'}</th>
                        <th style="text-align: center; font-size: 0.94rem; font-weight: 900;">${totalFloorCost > 0 ? totalFloorCost.toLocaleString() : '—'}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function printFurnitureMatrixReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const todayDate = getFormattedTodayDate(isAr);
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    const colTotals = [0, 0, 0, 0, 0, 0];
    let grandTotal = 0;
    let grandTotalCost = 0;
    let rowsHtml = '';

    let lastMainGroup = '';
    let lastSubCat = '';

    furnitureInventory.forEach((item, idx) => {
        const subCat = normalizeFurnitureCategory(item.cat, item.name);
        const mainGroup = getMainGroupForSubcat(subCat);

        if (mainGroup !== lastMainGroup) {
            lastMainGroup = mainGroup;
            rowsHtml += `<tr class="wbs-main-group-row"><td colspan="14">${trText(mainGroup)}</td></tr>`;
        }
        if (subCat !== lastSubCat) {
            lastSubCat = subCat;
            rowsHtml += `<tr class="wbs-sub-group-row"><td colspan="14">${trText(subCat)}</td></tr>`;
        }

        let rowSum = 0;
        let cells = '';
        floors.forEach((fl, fIdx) => {
            const qty = Number((item.floors || {})[fl]) || 0;
            rowSum += qty;
            colTotals[fIdx] += qty;
            cells += `<td style="width: 1%; text-align: center; font-size: 0.86rem !important; font-weight: 700; white-space: nowrap !important;">${qty}</td>`;
        });
        grandTotal += rowSum;
        const fin = getFurnitureItemFinancials(item, rowSum);
        grandTotalCost += fin.totalCost;
        const noteText = getFurnitureMatrixNoteText(item);
        rowsHtml += `
            <tr>
                <td style="width: 1%; text-align: center; font-family: monospace; font-weight: bold; font-size: 0.82rem !important; white-space: nowrap !important;">${item.code || (idx + 1)}</td>
                <td class="print-item-name" style="width: 1% !important; white-space: nowrap !important; font-size: 0.9rem !important; font-weight: 800 !important;"><strong>${trText(item.name)}</strong></td>
                <td style="width: 1%; font-size: 0.84rem !important; font-weight: 700 !important; text-align: center; white-space: nowrap !important;">${trText(item.size) || '—'}</td>
                ${cells}
                <td style="width: 1%; text-align: center; font-weight: 900; background: #f8fafc; font-size: 0.9rem !important; white-space: nowrap !important;">${rowSum}</td>
                <td style="width: 1%; text-align: center; font-size: 0.8rem !important; white-space: nowrap !important;">${fin.dateDisplay || '—'}</td>
                <td style="width: 1%; text-align: center; font-size: 0.82rem !important; font-weight: 700; white-space: nowrap !important;">${fin.priceDisplay || '—'}</td>
                <td style="width: 1%; text-align: center; font-size: 0.86rem !important; font-weight: 900; white-space: nowrap !important;">${fin.totalCost > 0 ? fin.totalCost.toLocaleString() : '—'}</td>
                <td style="font-size: 0.8rem !important; text-align: right;">${noteText || '—'}</td>
            </tr>
        `;
    });

    const footCells = colTotals.map(c => `<th style="text-align: center; font-size: 0.88rem !important; font-weight: 900; white-space: nowrap !important;">${c}</th>`).join('');

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="14" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.5rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'تقرير جرد وتحليل أصول الطوابق' : 'Floors Assets Inventory & Analysis Report',
                                `${isAr ? 'الأدوار (من الدور الرابع إلى الدور التاسع)' : 'Floors 4 to 9'} | ${isAr ? 'تاريخ التقرير:' : 'Date:'} ${todayDate}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 1%; text-align: center; font-size: 0.8rem !important; white-space: nowrap !important;">${isAr ? 'كود' : 'Code'}</th>
                        <th class="print-item-name" style="width: 1% !important; white-space: nowrap !important;">${isAr ? 'اسم الصنف / البيان' : 'Item Name'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.82rem !important; white-space: nowrap !important;">${isAr ? 'المقاس' : 'Size'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 4' : 'F4'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 5' : 'F5'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 6' : 'F6'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 7' : 'F7'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 8' : 'F8'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.78rem !important; white-space: nowrap !important;">${isAr ? 'الدور 9' : 'F9'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.82rem !important; white-space: nowrap !important;">${isAr ? 'الإجمالي' : 'Total'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.8rem !important; white-space: nowrap !important;">${isAr ? 'تاريخ الشراء' : 'Date'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.8rem !important; white-space: nowrap !important;">${isAr ? 'السعر' : 'Price'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.82rem !important; white-space: nowrap !important;">${isAr ? 'التكلفة' : 'Cost'}</th>
                        <th style="font-size: 0.82rem !important; white-space: nowrap !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">${isAr ? 'إجمالي الأصول بكل طابق' : 'Total per Floor'}</th>
                        ${footCells}
                        <th style="text-align: center; font-weight: 900; font-size: 0.92rem !important; white-space: nowrap !important;">${grandTotal}</th>
                        <th colspan="2">${isAr ? 'إجمالي التكلفة' : 'Total Cost'}</th>
                        <th style="text-align: center; font-weight: 900; font-size: 0.9rem !important; white-space: nowrap !important;">${grandTotalCost > 0 ? grandTotalCost.toLocaleString() : '—'}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function shareFloorsAnalysisWhatsApp() {
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    let lines = ['*المجموعة الإستشارية | Consultancy Group*', '*إدارة المرافق - مدير المرافق*', `*تقرير تحليل جرد الطوابق (الأدوار 4 إلى 9) — للإدارة العليا*`, `التاريخ: ${getFormattedTodayDate(true)}`, '--------------------------------'];

    let grandTotal = 0;
    furnitureInventory.forEach(item => {
        const sum = floors.reduce((s, fl) => s + (Number((item.floors || {})[fl]) || 0), 0);
        grandTotal += sum;
        lines.push(`• *${item.name}*: إجمالي (${sum}) [د4:${item.floors['الدور الرابع']||0} | د5:${item.floors['الدور الخامس']||0} | د6:${item.floors['الدور السادس']||0} | د7:${item.floors['الدور السابع']||0} | د8:${item.floors['الدور الثامن']||0} | د9:${item.floors['الدور التاسع']||0}]`);
    });
    lines.push('--------------------------------');
    lines.push(`*إجمالي قطع الأثاث بالشركة (4-9):* ${grandTotal}`);
    lines.push(`رابط المتابعة المباشر: ${getShareableUrl()}`);

    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

function exportFurnitureToCSV() {
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];
    let csvContent = '\uFEFF';
    csvContent += 'رقم,اسم الصنف,التصنيف,الدور 4,الدور 5,الدور 6,الدور 7,الدور 8,الدور 9,إجمالي الشركة\n';

    furnitureInventory.forEach((item, idx) => {
        let sum = 0;
        let row = `"${idx + 1}","${item.name}","${item.cat}"`;
        floors.forEach(fl => {
            const q = Number((item.floors || {})[fl]) || 0;
            sum += q;
            row += `,"${q}"`;
        });
        row += `,"${sum}"\n`;
        csvContent += row;
    });

    downloadCSV(csvContent, `جرد_أثاث_الشركة_والطوابق_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير جرد أصول الشركة وتحليل الطوابق إلى إكسيل!' : 'Furniture inventory exported to CSV!', 'success');
}

// --- EXECUTIVE MANAGEMENT HQ INVENTORY WITH WBS CODES & SIZES ---
function renderHqView() {
    const tbody = document.getElementById('hq-inventory-tbody');
    if (!tbody) return;

    const query = searchQuery.toLowerCase().trim();
    let totalHqUnits = 0;
    const isViewer = currentUserRole === 'viewer';

    hqInventory.forEach(item => {
        totalHqUnits += (Number(item.qty) || 0);
    });

    const kpiTypes = document.getElementById('hq-kpi-types');
    const kpiTotal = document.getElementById('hq-kpi-total');
    if (kpiTypes) kpiTypes.textContent = hqInventory.length;
    if (kpiTotal) kpiTotal.textContent = totalHqUnits.toLocaleString();

    let items = hqInventory;
    if (activeHqCatFilter !== 'الكل') {
        items = items.filter(i => (i.cat && i.cat.includes(activeHqCatFilter)) || i.cat === activeHqCatFilter);
    }
    if (query) {
        items = items.filter(i =>
            (i.code && i.code.toLowerCase().includes(query)) ||
            (i.name && i.name.toLowerCase().includes(query)) ||
            trText(i.name || '').toLowerCase().includes(query) ||
            (i.size && i.size.toLowerCase().includes(query)) ||
            (i.cat && i.cat.toLowerCase().includes(query)) ||
            trText(i.cat || '').toLowerCase().includes(query)
        );
    }

    tbody.innerHTML = '';

    if (items.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 2.2rem; color: var(--text-muted);">
                    <div style="margin-bottom: 0.75rem; font-weight: 700;">${currentLang === 'ar' ? 'لا توجد بنود مسجلة حالياً في هذا العرض.' : 'No items listed.'}</div>
                </td>
            </tr>
        `;
        return;
    }

    items.forEach((item, idx) => {
        const qty = Number(item.qty) || 0;
        const status = item.status || 'ممتاز';
        const notes = item.notes || '';
        const itemSize = item.size || '—';
        const wbsCode = item.code || `${idx + 1}`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; white-space: nowrap;">
                <span class="wbs-code-badge">${wbsCode}</span>
            </td>
            <td style="white-space: nowrap;">
                ${isViewer 
                    ? `<strong style="font-size: 0.92rem; color: var(--text-main);">${trText(item.name)}</strong>` 
                    : `<input type="text" class="table-input" value="${trText(item.name)}" onchange="updateHqField(${item.id}, 'name', this.value)" style="font-weight: 700; width: 100%; min-width: 145px;">`}
            </td>
            <td>
                ${isViewer 
                    ? `<span class="wbs-size-pill">${itemSize}</span>` 
                    : `<input type="text" class="table-input" value="${itemSize}" placeholder="المقاس..." onchange="updateHqField(${item.id}, 'size', this.value)" style="font-size: 0.82rem; width: 100%; min-width: 110px;">`}
            </td>
            <td style="font-size: 0.76rem; color: var(--text-muted); white-space: nowrap;">
                ${isViewer 
                    ? `<span class="badge" style="background: rgba(148,163,184,0.14); color: var(--text-muted); font-size: 0.72rem;">${trText(item.cat)}</span>` 
                    : `<input type="text" class="table-input" value="${trText(item.cat)}" onchange="updateHqField(${item.id}, 'cat', this.value)" style="width: 115px; font-size: 0.75rem;">`}
            </td>
            <td style="text-align: center; white-space: nowrap;">
                ${isViewer 
                    ? `<span style="display:inline-block; min-width:44px; padding:0.3rem 0.65rem; border-radius:8px; font-weight:900; font-size:1.05rem; background:rgba(59,130,246,0.12); color:#60a5fa;">${qty}</span>` 
                    : `<div class="stepper-control">
                        <button type="button" class="stepper-btn" onclick="stepHqQty(${item.id}, -1)">−</button>
                        <input type="number" min="0" value="${qty}" class="stepper-input" onchange="updateHqField(${item.id}, 'qty', Number(this.value))" style="font-weight: 900; color: var(--primary);">
                        <button type="button" class="stepper-btn" onclick="stepHqQty(${item.id}, 1)">+</button>
                    </div>`}
            </td>
            <td style="text-align: center;">
                ${isViewer 
                    ? `<span class="badge" style="background: rgba(16,185,129,0.14); color: #34d399; font-size: 0.78rem;">${trText(status)}</span>` 
                    : `<select class="table-input" onchange="updateHqField(${item.id}, 'status', this.value)" style="font-size: 0.82rem; padding: 0.35rem 0.6rem;">
                        <option value="ممتاز" ${status === 'ممتاز' ? 'selected' : ''}>${trText('ممتاز')}</option>
                        <option value="جيد جداً" ${status === 'جيد جداً' ? 'selected' : ''}>${trText('جيد جداً')}</option>
                        <option value="يحتاج صيانة" ${status === 'يحتاج صيانة' ? 'selected' : ''}>${trText('يحتاج صيانة')}</option>
                    </select>`}
            </td>
            <td style="min-width: 280px; width: 100%;">
                ${isViewer 
                    ? `<span style="font-size: 0.86rem; color: ${notes ? 'var(--text-main)' : 'var(--text-muted)'}; display: block; line-height: 1.45;">${notes || '—'}</span>` 
                    : `<input type="text" class="table-input" value="${notes}" placeholder="${currentLang === 'ar' ? 'تفاصيل فنية، مواصفات أو ملاحظات...' : 'Details or notes...'}" onchange="updateHqField(${item.id}, 'notes', this.value)" style="width: 100%; min-width: 280px; font-size: 0.86rem; padding: 0.45rem 0.75rem;">`}
            </td>
            <td style="text-align: center; white-space: nowrap;" class="no-print admin-only">
                <div style="display: inline-flex; align-items: center; gap: 0.22rem;">
                    <button onclick="promptMoveHqPosition(${item.id})" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.45rem; font-size: 0.72rem;" title="نقل سريع للترتيب (أدخل رقم الترتيب مباشرة)">🔢</button>
                    <button onclick="moveHqItem(${item.id}, -1)" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.42rem; font-size: 0.72rem; min-width: 24px;" title="تحريك لأعلى (حدد عدد الخطوات 1، 2، 3...) 🔼" ${idx === 0 ? 'disabled style="opacity:0.35; pointer-events:none;"' : ''}>▲</button>
                    <button onclick="moveHqItem(${item.id}, 1)" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.42rem; font-size: 0.72rem; min-width: 24px;" title="تحريك لأسفل (حدد عدد الخطوات 1، 2، 3...) 🔽" ${idx === hqInventory.length - 1 ? 'disabled style="opacity:0.35; pointer-events:none;"' : ''}>▼</button>
                    <button onclick="deleteHqItem(${item.id})" class="btn btn-sm btn-danger" style="padding: 0.22rem 0.45rem;" title="${currentLang === 'ar' ? 'حذف الصنف' : 'Delete item'}"><i data-lucide="trash-2" style="width:13px;height:13px;"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (window.lucide) lucide.createIcons();
}

function promptMoveHqPosition(itemId) {
    if (currentUserRole === 'viewer') return;
    const currentIdx = hqInventory.findIndex(i => i.id === itemId);
    if (currentIdx === -1) return;
    const currentPos = currentIdx + 1;
    const maxPos = hqInventory.length;
    const item = hqInventory[currentIdx];
    const input = prompt(`الترتيب الحالي لبند "${item.name}" هو رقم (${currentPos}). أدخل رقم الترتيب الجديد (من 1 إلى ${maxPos}):`, currentPos);
    if (input === null) return;
    const target = parseInt(input, 10);
    if (isNaN(target) || target < 1 || target > maxPos) {
        showToast(`يرجى إدخال رقم صحيح بين 1 و ${maxPos}`, 'warning');
        return;
    }
    hqInventory.splice(currentIdx, 1);
    hqInventory.splice(target - 1, 0, item);
    persistState();
    renderHqView();
    showToast(`تم نقل البند بنجاح إلى الترتيب رقم (${target})!`, 'success');
}

function moveHqItem(itemId, direction, steps) {
    if (currentUserRole === 'viewer') {
        showToast(currentLang === 'ar' ? 'خاصية تعديل الترتيب متاحة للمسؤول فقط' : 'Reordering is restricted to Admin', 'warning');
        return;
    }
    const idx = hqInventory.findIndex(i => i.id === itemId);
    if (idx === -1) return;
    const item = hqInventory[idx];
    const isUp = direction < 0;
    const maxSteps = isUp ? idx : (hqInventory.length - 1 - idx);

    if (maxSteps <= 0) {
        showToast(isUp ? 'الصنف بالفعل في أعلى القائمة' : 'الصنف بالفعل في أسفل القائمة', 'info');
        return;
    }

    let numSteps = steps;
    if (numSteps === undefined || numSteps === null) {
        const dirName = isUp ? 'لأعلى 🔼' : 'لأسفل 🔽';
        const input = prompt(
            `تحريك صنف "${item.name}" ${dirName}\nالترتيب الحالي: (${idx + 1} من ${hqInventory.length})\nكم خطوة تريد التحريك؟ (أدخل 1، 2، 3، 4... أو اضغط موافق لتحريك خطوة واحدة - الحد الأقصى ${maxSteps}):`,
            "1"
        );
        if (input === null) return;
        numSteps = parseInt(input.trim(), 10);
        if (isNaN(numSteps) || numSteps < 1) {
            showToast('يرجى إدخال عدد خطوات صحيح (1 أو أكثر)', 'warning');
            return;
        }
    }

    const actualSteps = Math.min(numSteps, maxSteps);
    const targetIdx = idx + (direction * actualSteps);
    if (targetIdx === idx) return;

    hqInventory.splice(idx, 1);
    hqInventory.splice(targetIdx, 0, item);

    persistState();
    renderHqView();
    showToast(
        currentLang === 'ar'
            ? `تم تحريك "${item.name}" ${isUp ? 'لأعلى' : 'لأسفل'} بمقدار ${actualSteps} ${actualSteps === 1 ? 'خطوة' : 'خطوات'} بنجاح (الترتيب الآن: ${targetIdx + 1})`
            : `Moved item ${isUp ? 'up' : 'down'} by ${actualSteps} step(s) to position ${targetIdx + 1}`,
        'success'
    );
}

function stepHqQty(itemId, delta) {
    if (currentUserRole === 'viewer') return;
    const item = hqInventory.find(i => i.id === itemId);
    if (!item) return;
    item.qty = Math.max(0, (Number(item.qty) || 0) + delta);
    persistState();
    renderHqView();
}

function updateHqField(itemId, field, value) {
    if (currentUserRole === 'viewer') return;
    const item = hqInventory.find(i => i.id === itemId);
    if (!item) return;
    if (field === 'name' && !String(value).trim()) {
        showToast(currentLang === 'ar' ? 'اسم الصنف أو البيان لا يمكن أن يكون فارغاً' : 'Item name cannot be empty', 'warning');
        renderHqView();
        return;
    }
    item[field] = field === 'qty' ? Math.max(0, Number(value) || 0) : (typeof value === 'string' ? value.trim() : value);
    persistState();
    if (field === 'name' || field === 'cat') {
        showToast(currentLang === 'ar' ? 'تم تعديل وحفظ البيان بنجاح' : 'Statement updated successfully', 'success');
    }
}

function openAddHqModal() {
    if (currentUserRole === 'viewer') {
        showToast('إضافة بند جديد متاحة للمسؤول فقط', 'warning');
        return;
    }
    const nameInp = document.getElementById('new-hq-name');
    const sizeInp = document.getElementById('new-hq-size');
    const codeInp = document.getElementById('new-hq-code');
    const qtyInp = document.getElementById('new-hq-qty');
    if (nameInp) nameInp.value = '';
    if (sizeInp) sizeInp.value = '';
    if (codeInp) codeInp.value = `1.${hqInventory.length + 1}`;
    if (qtyInp) qtyInp.value = '1';
    openModal('modal-add-hq');
}

function saveNewHqItem() {
    if (currentUserRole === 'viewer') return;
    const nameInp = document.getElementById('new-hq-name');
    const sizeInp = document.getElementById('new-hq-size');
    const codeInp = document.getElementById('new-hq-code');
    const catInp = document.getElementById('new-hq-cat');
    const qtyInp = document.getElementById('new-hq-qty');

    const name = nameInp ? nameInp.value.trim() : '';
    const size = sizeInp ? sizeInp.value.trim() : 'حسب المقاس الفعلي';
    const code = codeInp ? codeInp.value.trim() : `1.${hqInventory.length + 1}`;
    const cat = catInp ? catInp.value : '1.1 الأثاث والمعيشة الفندقية';
    const qty = Math.max(0, Number(qtyInp ? qtyInp.value : 0) || 0);

    if (!name) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال اسم الصنف!' : 'Please enter item name!', 'warning');
        return;
    }

    const nextId = hqInventory.length > 0 ? Math.max(...hqInventory.map(i => i.id)) + 1 : 201;
    hqInventory.push({
        id: nextId,
        code,
        name,
        size,
        cat,
        qty,
        status: 'ممتاز',
        notes: ''
    });

    persistState();
    closeModal('modal-add-hq');
    renderHqView();
    showToast(currentLang === 'ar' ? `تمت إضافة "${name}" (${code}) إلى جرد مقر الإدارة العليا بنجاح!` : 'HQ item added successfully!', 'success');
}

function deleteHqItem(itemId) {
    if (currentUserRole === 'viewer') return;
    const item = hqInventory.find(i => i.id === itemId);
    if (!item) return;
    const msg = currentLang === 'ar' ? `هل ترغب في حذف الصنف "${item.name}" من جرد مقر الإدارة العليا؟` : `Delete "${trText(item.name)}" from Executive HQ inventory?`;
    if (confirm(msg)) {
        hqInventory = hqInventory.filter(i => i.id !== itemId);
        persistState();
        renderHqView();
        showToast(currentLang === 'ar' ? 'تم حذف الصنف' : 'Item deleted', 'info');
    }
}

function printHqReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const todayDate = getFormattedTodayDate(isAr);
    let rowsHtml = '';
    let totalUnits = 0;

    hqInventory.forEach((item, idx) => {
        const qty = Number(item.qty) || 0;
        totalUnits += qty;
        rowsHtml += `
            <tr>
                <td style="width: 1%; text-align: center; font-family: monospace; font-weight: bold; font-size: 0.86rem; white-space: nowrap !important;">${item.code || (idx + 1)}</td>
                <td class="print-item-name" style="width: 1% !important; white-space: nowrap !important; font-size: 0.94rem !important; font-weight: 800 !important;"><strong>${trText(item.name)}</strong></td>
                <td style="width: 1%; font-size: 0.88rem !important; font-weight: 700 !important; text-align: center; white-space: nowrap !important;">${item.size || '—'}</td>
                <td style="width: 1%; font-size: 0.85rem !important; font-weight: 700 !important; color: #1e293b; white-space: nowrap !important;">${trText(item.cat)}</td>
                <td style="width: 1%; text-align: center; font-weight: 900; font-size: 0.94rem; white-space: nowrap !important;">${qty}</td>
                <td style="width: 1%; text-align: center; font-size: 0.84rem !important; font-weight: 700; white-space: nowrap !important;">${trText(item.status || 'ممتاز')}</td>
                <td style="font-size: 0.84rem; text-align: right; line-height: 1.4;">${item.notes || '—'}</td>
            </tr>
        `;
    });

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="7" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.5rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'بيان جرد وتجهيزات مقر الإدارة العليا' : 'Executive Management HQ Inventory Report',
                                `${isAr ? 'تاريخ التقرير:' : 'Date:'} ${todayDate}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 1%; text-align: center; white-space: nowrap !important;">${isAr ? 'كود' : 'Code'}</th>
                        <th class="print-item-name" style="width: 1% !important; white-space: nowrap !important;">${isAr ? 'اسم الصنف / التجهيز' : 'Item Name'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.86rem !important; white-space: nowrap !important;">${isAr ? 'المقاس' : 'Dimensions'}</th>
                        <th style="width: 1%; font-size: 0.85rem !important; white-space: nowrap !important;">${isAr ? 'المجموعة' : 'Group'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.86rem !important; white-space: nowrap !important;">${isAr ? 'العدد' : 'Count'}</th>
                        <th style="width: 1%; text-align: center; font-size: 0.85rem !important; white-space: nowrap !important;">${isAr ? 'الحالة' : 'Condition'}</th>
                        <th style="font-size: 0.85rem !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="4">${isAr ? 'إجمالي تجهيزات ومحتويات مقر الإدارة العليا' : 'Total Executive HQ Units'}</th>
                        <th style="text-align: center; font-weight: 900; font-size: 0.95rem;">${totalUnits}</th>
                        <th colspan="2"></th>
                    </tr>
                </tfoot>
            </table>

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function exportHqToCSV() {
    let csvContent = '\uFEFF';
    csvContent += 'رقم,اسم الصنف,التصنيف,العدد المتواجد بالفعل,الحالة,ملاحظات\n';

    hqInventory.forEach((item, idx) => {
        csvContent += `"${idx + 1}","${item.name}","${item.cat}","${item.qty || 0}","${item.status || 'ممتاز'}","${item.notes || ''}"\n`;
    });

    downloadCSV(csvContent, `جرد_مقر_الإدارة_العليا_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير جرد مقر الإدارة العليا إلى إكسيل!' : 'Executive HQ inventory exported to CSV!', 'success');
}

// --- STOCK SUPPLY MODAL ---
function openSupplyModal() {
    const today = new Date().toISOString().split('T')[0];
    const dateInp = document.getElementById('supply-date');
    if (dateInp) dateInp.value = today;

    const tbody = document.getElementById('supply-modal-tbody');
    if (!tbody) return;

    const currentCycleTrans = getCycleTransactions();
    tbody.innerHTML = '';

    inventory.forEach(item => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const rem = item.total - issued;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${trText(item.name)}</strong></td>
            <td style="text-align: center; color: var(--text-muted);">${rem}</td>
            <td style="text-align: center;">
                <input type="number" min="0" placeholder="0" class="table-input supply-qty-field" data-item-id="${item.id}" style="width: 100px; text-align: center; font-weight: 800; color: var(--success);">
            </td>
        `;
        tbody.appendChild(tr);
    });

    openModal('modal-supply');
}

function submitStockSupply() {
    const inputs = document.querySelectorAll('.supply-qty-field');
    let addedCount = 0;

    inputs.forEach(inp => {
        const qty = Number(inp.value) || 0;
        const itemId = Number(inp.dataset.itemId);
        if (qty > 0) {
            const item = inventory.find(i => i.id === itemId);
            if (item) {
                item.total += qty;
                addedCount++;
            }
        }
    });

    if (addedCount === 0) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال كمية توريد لصنف واحد على الأقل!' : 'Enter supply quantity for at least one item!', 'warning');
        return;
    }

    persistState();
    closeModal('modal-supply');
    showToast(currentLang === 'ar' ? 'تمت إضافة الشحنة الموردة للمخزن بنجاح وتحديث الأرصدة!' : 'Stock replenishment added successfully!', 'success');
}

// --- ADD NEW ITEM MODAL ---
function openAddItemModal() {
    document.getElementById('new-item-name').value = '';
    document.getElementById('new-item-unit').value = '';
    document.getElementById('new-item-total').value = '100';
    document.getElementById('new-item-min').value = '10';
    openModal('modal-add-item');
}

function saveNewItem() {
    const name = document.getElementById('new-item-name').value.trim();
    const cat = document.getElementById('new-item-cat').value;
    const unit = document.getElementById('new-item-unit').value.trim();
    const total = Number(document.getElementById('new-item-total').value) || 0;
    const minLimit = Number(document.getElementById('new-item-min').value) || 5;

    if (!name || !unit) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال اسم الصنف والوحدة!' : 'Please enter item name and unit!', 'warning');
        return;
    }

    const nextId = inventory.length > 0 ? Math.max(...inventory.map(i => i.id)) + 1 : 1;
    const today = new Date().toISOString().split('T')[0];

    inventory.push({
        id: nextId,
        name,
        cat,
        unit,
        total,
        minLimit,
        date: today
    });

    persistState();
    closeModal('modal-add-item');
    showToast(currentLang === 'ar' ? `تمت إضافة الصنف "${name}" إلى المخزن بنجاح!` : 'Item created successfully!', 'success');
}

// --- CYCLE SETTINGS MODAL ---
function openCycleModal() {
    document.getElementById('cycle-start-day-input').value = cycleStartDay;
    openModal('modal-cycle');
}

function saveCycleStartDay() {
    const day = Number(document.getElementById('cycle-start-day-input').value);
    if (day >= 1 && day <= 28) {
        cycleStartDay = day;
        persistState();
        closeModal('modal-cycle');
        showToast(currentLang === 'ar' ? `تم ضبط يوم بداية الدورة ليصبح يوم ${day} من كل شهر!` : 'Cycle start day updated!', 'success');
    } else {
        showToast(currentLang === 'ar' ? 'يرجى كتابة يوم بين 1 و 28' : 'Please enter day between 1 and 28', 'warning');
    }
}

// --- ALERT CENTER DRAWER / MODAL ---
function renderAlertCenter() {
    const alertBody = document.getElementById('alert-center-list');
    if (!alertBody) return;

    const currentCycleTrans = getCycleTransactions();
    const shortageItems = [];

    inventory.forEach(item => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const rem = item.total - issued;
        if (rem <= item.minLimit) {
            shortageItems.push({ ...item, remaining: rem, issued });
        }
    });

    const alertCountEl = document.getElementById('alert-center-badge');
    if (alertCountEl) alertCountEl.textContent = `${shortageItems.length} ${currentLang === 'ar' ? 'أصناف حرجة' : 'critical items'}`;

    if (shortageItems.length === 0) {
        alertBody.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                <i data-lucide="check-circle" style="width: 48px; height: 48px; color: var(--success); margin-bottom: 0.5rem;"></i>
                <p><strong>${currentLang === 'ar' ? 'المخزن في حالة ممتازة!' : 'Warehouse stock is healthy!'}</strong></p>
                <p style="font-size: 0.85rem;">${currentLang === 'ar' ? 'جميع الأصناف تتجاوز الحد الأدنى للأمان.' : 'All items are above their safety limit.'}</p>
            </div>
        `;
        return;
    }

    alertBody.innerHTML = '';
    shortageItems.forEach(it => {
        const itemCard = document.createElement('div');
        itemCard.style.cssText = 'background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;';
        itemCard.innerHTML = `
            <div>
                <strong style="font-size: 0.95rem;">${trText(it.name)}</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted); display: flex; gap: 0.75rem; margin-top: 0.2rem;">
                    <span>${currentLang === 'ar' ? 'الرصيد المتبقي:' : 'Remaining Stock:'} <b style="color: var(--danger);">${it.remaining} ${trText(it.unit)}</b></span>
                    <span>${currentLang === 'ar' ? 'الحد الأدنى:' : 'Min Limit:'} <b>${it.minLimit}</b></span>
                </div>
            </div>
            <button onclick="quickSupplyItem(${it.id})" class="btn btn-sm btn-primary">${currentLang === 'ar' ? '➕ توريد' : '➕ Supply'}</button>
        `;
        alertBody.appendChild(itemCard);
    });
}

function openAlertCenter() {
    renderAlertCenter();
    openModal('modal-alerts');
    if (window.lucide) window.lucide.createIcons();
}

function quickSupplyItem(itemId) {
    closeModal('modal-alerts');
    openSupplyModal();
    const inp = document.querySelector(`.supply-qty-field[data-item-id="${itemId}"]`);
    if (inp) {
        inp.value = '50';
        inp.focus();
    }
}

// --- EXCEL / CSV EXPORT UTILITIES ---
function exportInventoryToCSV() {
    const currentCycleTrans = getCycleTransactions();
    let csvContent = '\uFEFF'; // Arabic UTF-8 BOM
    csvContent += 'رقم,اسم الصنف,الفئة,الوحدة,الرصيد الابتدائي,المنصرف خلال الدورة,الرصيد المتبقي,الحد الأدنى,الحالة\n';

    inventory.forEach((item, idx) => {
        const issued = currentCycleTrans.filter(t => t.itemId === item.id).reduce((s, t) => s + Number(t.qty), 0);
        const rem = item.total - issued;
        let status = rem <= 0 ? 'نفذ بالكامل' : (rem <= item.minLimit ? 'قارب على النفاذ' : 'متوفر');

        csvContent += `"${idx + 1}","${item.name}","${item.cat}","${item.unit}","${item.total}","${issued}","${rem}","${item.minLimit}","${status}"\n`;
    });

    downloadCSV(csvContent, `تقرير_مخزن_البوفيه_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير كشف المخزن إلى ملف إكسيل!' : 'Inventory exported to CSV!', 'success');
}

function exportHistoryToCSV() {
    const currentCycleTrans = getCycleTransactions();
    let csvContent = '\uFEFF';
    csvContent += 'رقم,التاريخ,الطابق,اسم الصنف,الكمية المنصرفة,اسم المستلم,ملاحظات\n';

    currentCycleTrans.forEach((t, idx) => {
        const item = inventory.find(i => i.id === t.itemId);
        csvContent += `"${idx + 1}","${t.date}","${t.floor}","${item ? item.name : 'صنف غير معرف'}","${t.qty}","${t.recipient}","${t.notes || ''}"\n`;
    });

    downloadCSV(csvContent, `سجل_صرف_الطوابق_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير سجل الحركات إلى ملف إكسيل!' : 'Transactions exported to CSV!', 'success');
}

function exportFloorsMatrixToCSV() {
    const currentCycleTrans = getCycleTransactions();
    const floors = ['الدور الرابع', 'الدور الخامس', 'الدور السادس', 'الدور السابع', 'الدور الثامن', 'الدور التاسع'];

    let csvContent = '\uFEFF';
    csvContent += 'اسم الصنف,الفئة,الوحدة,الدور 4,الدور 5,الدور 6,الدور 7,الدور 8,الدور 9,الإجمالي\n';

    inventory.forEach(item => {
        let rowTotal = 0;
        let line = `"${item.name}","${item.cat}","${item.unit}"`;

        floors.forEach(fl => {
            const qty = currentCycleTrans.filter(t => t.itemId === item.id && t.floor === fl).reduce((s, t) => s + Number(t.qty), 0);
            rowTotal += qty;
            line += `,"${qty}"`;
        });

        line += `,"${rowTotal}"\n`;
        csvContent += line;
    });

    downloadCSV(csvContent, `مصفوفة_استهلاك_الطوابق_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير مصفوفة الاستهلاك إلى إكسيل!' : 'Matrix exported to CSV!', 'success');
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// --- JSON BACKUP & RESTORE ---
function exportDataBackup() {
    const data = {
        inventory,
        transactions,
        recipientsList,
        furnitureInventory,
        hqInventory,
        custodyTransactions,
        poPricingMap,
        supplierPOs,
        monthlyCoreExpenses,
        cycleStartDay,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Facilities_Backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showToast(currentLang === 'ar' ? 'تم تصدير النسخة الاحتياطية بنجاح!' : 'Backup exported successfully!', 'success');
}

function importDataBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const data = JSON.parse(evt.target.result);
            if (data.inventory && data.transactions) {
                inventory = data.inventory;
                transactions = data.transactions;
                if (data.recipientsList) recipientsList = data.recipientsList;
                if (data.furnitureInventory) furnitureInventory = data.furnitureInventory;
                if (data.hqInventory) hqInventory = data.hqInventory;
                if (data.custodyTransactions) custodyTransactions = data.custodyTransactions;
                if (data.poPricingMap) poPricingMap = data.poPricingMap;
                if (data.supplierPOs) supplierPOs = data.supplierPOs;
                if (data.monthlyCoreExpenses) monthlyCoreExpenses = data.monthlyCoreExpenses;
                if (data.cycleStartDay) cycleStartDay = data.cycleStartDay;

                persistState();
                showToast(currentLang === 'ar' ? 'تمت استعادة كافة البيانات بنجاح!' : 'Data restored successfully!', 'success');
            } else {
                throw new Error('Invalid format');
            }
        } catch (err) {
            showToast(currentLang === 'ar' ? 'ملف النسخة الاحتياطية غير صالح!' : 'Invalid backup file!', 'danger');
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    const confirmMsg = currentLang === 'ar'
        ? 'تحذير أمان: هل ترغب بالتأكيد في تصفير النظام والعودة إلى البيانات الأساسية الأولى وحذف أي إدخالات جديدة؟'
        : 'Warning: Reset system to initial defaults?';

    if (confirm(confirmMsg)) {
        inventory = JSON.parse(JSON.stringify(SEED_INVENTORY));
        transactions = JSON.parse(JSON.stringify(SEED_TRANSACTIONS));
        recipientsList = JSON.parse(JSON.stringify(SEED_RECIPIENTS));
        furnitureInventory = JSON.parse(JSON.stringify(SEED_FURNITURE));
        hqInventory = JSON.parse(JSON.stringify(SEED_HQ));
        custodyTransactions = JSON.parse(JSON.stringify(SEED_CUSTODY));
        supplierPOs = JSON.parse(JSON.stringify(SEED_DIRECT_SUPPLIER_POS));
        monthlyCoreExpenses = JSON.parse(JSON.stringify(SEED_MONTHLY_CORE_EXPENSES));
        poPricingMap = {};
        cycleStartDay = 19;
        persistState();
        showToast(currentLang === 'ar' ? 'تمت إعادة ضبط النظام للبيانات الافتراضية' : 'System reset to defaults', 'info');
    }
}

// --- THEME & LOCALIZATION ---
function toggleThemeMode() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('buffet_v9_theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
    renderCharts();
}

function setPalette(pal) {
    currentPalette = pal;
    localStorage.setItem('buffet_v9_palette', pal);
    applyPalette(pal);
}

function applyPalette(pal) {
    document.body.classList.remove('theme-gold', 'theme-emerald', 'theme-blue', 'theme-purple');
    document.body.classList.add(`theme-${pal}`);

    const select = document.getElementById('palette-select');
    if (select) select.value = pal;
    renderCharts();
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('buffet_v9_lang', currentLang);
    applyLanguage(currentLang);
    renderAll();
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = I18N[lang];
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Update main text tags
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Translate all static DOM text nodes, placeholders, and select options
    translateDOMNodes(lang);

    // Update View Header Title & Subtitle for activeTab
    updateViewHeaderTitles();
    applyModuleIsolation(activeModule);

    // Update Cloud Status Badge text
    if (cloudDb) {
        updateCloudStatusBadge('online', 'Online');
    } else {
        const savedToken = sessionStorage.getItem('buffet_v9_auth_token');
        if (savedToken !== EXPECTED_PASSWORD_HASH) {
            updateCloudStatusBadge('offline', 'Offline');
        } else {
            updateCloudStatusBadge('offline', 'Online');
        }
    }
}

function getTabTitles() {
    const isAr = currentLang === 'ar';
    return {
        dash: {
            title: I18N[currentLang].navDashboard,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | نظرة شمولية على مؤشرات الأداء والأرصدة' : 'Facilities Management - Facilities Manager | Comprehensive KPIs & Stock'
        },
        inventory: {
            title: I18N[currentLang].navInventory,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | إدارة وتعديل الأصناف والأرصدة الافتتاحية' : 'Facilities Management - Facilities Manager | Manage Items & Balances'
        },
        terminal: {
            title: I18N[currentLang].navTerminal,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | محطة الصرف السريع والمباشر للطوابق' : 'Facilities Management - Facilities Manager | Floor Dispensing Terminal'
        },
        floors: {
            title: I18N[currentLang].navFloors,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | مصفوفة مقارنة الاستهلاك للأدوار 4 إلى 9' : 'Facilities Management - Facilities Manager | Floors Consumption Matrix (4-9)'
        },
        history: {
            title: I18N[currentLang].navHistory,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | سجل تدقيق حركات الصرف وطباعة السندات' : 'Facilities Management - Facilities Manager | Issue Audit Log & Vouchers'
        },
        po: {
            title: I18N[currentLang].navPO,
            sub: isAr ? 'إدارة المرافق - مدير المرافق | أمر شراء للمورد بناءً على الاستهلاك' : 'Facilities Management - Facilities Manager | Supplier Purchase Order'
        },
        furniture: {
            title: isAr ? 'جرد أصول الشركة (الأدوار 4 - 9)' : 'Company Assets Inventory (Floors 4 - 9)',
            sub: isAr ? 'إدارة المرافق - مدير المرافق | تسجيل ومراجعة الأعداد المتواجدة بالفعل في كل طابق' : 'Facilities Management - Facilities Manager | Actual Furniture Counts per Floor'
        },
        'furniture-matrix': {
            title: isAr ? 'تحليل الطوابق الشامل للأثاث (4 - 9)' : 'Comprehensive Furniture Floors Analysis (4 - 9)',
            sub: isAr ? 'إدارة المرافق - مدير المرافق | بيان تحليلي مقارن جاهز للعرض والإرسال للإدارة العليا' : 'Facilities Management - Facilities Manager | Executive Floors Comparison Report'
        },
        hq: {
            title: isAr ? 'جرد وتجهيزات مقر الإدارة العليا' : 'Executive Management HQ Inventory',
            sub: isAr ? 'إدارة المرافق - مدير المرافق | بيان الأعداد الفعلية والحالة الفنية لتجهيزات مقر الإدارة العليا' : 'Facilities Management - Facilities Manager | Executive HQ Assets & Appliances'
        },
        custody: {
            title: isAr ? 'العهدة والفواتير وتحويلات الموردين' : 'Company Custody, Invoices & Supplier Transfers',
            sub: isAr ? 'إدارة المرافق - مدير المرافق | ترحيل تراكمي للعهدة، تنبيه بنود الحوالات، إرفاق الفواتير بالسكانر، والدفعات المباشرة' : 'Facilities Management - Facilities Manager | Custody Ledger, Transfer Variance Alerts, Scanner & Direct Supplier Payments'
        }
    };
}

function updateViewHeaderTitles() {
    const titles = getTabTitles();
    const headerTitle = document.getElementById('view-header-title');
    const headerSub = document.getElementById('view-header-sub');
    if (headerTitle && titles[activeTab]) headerTitle.textContent = titles[activeTab].title;
    if (headerSub && titles[activeTab]) headerSub.textContent = titles[activeTab].sub;
    document.title = 'المجموعة الاستشارية - إدارة المرافق | Consultancy Group';
}

// --- NAVIGATION & TABS (WITH COMPLETE 4-MODULE ISOLATION) ---
function applyModuleIsolation(mod) {
    activeModule = mod;
    document.body.setAttribute('data-active-module', mod);

    // Update Mobile 4-Columns Bar active button
    ['buffet', 'furniture', 'hq', 'custody'].forEach(k => {
        const mobBtn = document.getElementById(`mob-sec-${k}`);
        if (mobBtn) mobBtn.classList.toggle('active', k === mod);
    });

    // Show/hide sidebar & header elements strictly per module
    document.querySelectorAll('.nav-group-buffet, .header-group-buffet').forEach(el => {
        el.style.display = (mod === 'buffet') ? '' : 'none';
    });
    document.querySelectorAll('.nav-group-furniture, .header-group-furniture').forEach(el => {
        el.style.display = (mod === 'furniture') ? '' : 'none';
    });
    document.querySelectorAll('.nav-group-hq, .header-group-hq').forEach(el => {
        el.style.display = (mod === 'hq') ? '' : 'none';
    });
    document.querySelectorAll('.nav-group-custody, .header-group-custody').forEach(el => {
        el.style.display = (mod === 'custody') ? '' : 'none';
    });
}

function switchTab(tabId) {
    activeTab = tabId;

    // Determine which module owns this tab and isolate its UI completely
    if (tabId === 'furniture' || tabId === 'furniture-matrix') {
        applyModuleIsolation('furniture');
    } else if (tabId === 'hq') {
        applyModuleIsolation('hq');
    } else if (tabId === 'custody') {
        applyModuleIsolation('custody');
    } else {
        applyModuleIsolation('buffet');
    }

    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-item').forEach(btn => btn.classList.remove('active'));

    const targetPane = document.getElementById(`pane-${tabId}`);
    const targetNav = document.getElementById(`nav-btn-${tabId}`);

    if (targetPane) targetPane.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    // Show cycle banner only on Buffet tabs
    const cycleBanner = document.querySelector('.cycle-banner');
    if (cycleBanner) {
        const isAssetTab = (tabId === 'furniture' || tabId === 'furniture-matrix' || tabId === 'hq' || tabId === 'custody');
        cycleBanner.style.display = isAssetTab ? 'none' : '';
    }

    updateViewHeaderTitles();

    renderAll();
}

function filterFurnitureCategory(cat) {
    activeFurnitureCatFilter = cat;
    document.querySelectorAll('.furn-cat-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-fcat') === cat);
    });
    renderFurnitureView();
}

function filterHqCategory(cat) {
    activeHqCatFilter = cat;
    document.querySelectorAll('.hq-cat-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-hqcat') === cat);
    });
    renderHqView();
}

function filterCategory(cat) {
    activeCategoryFilter = cat;
    document.querySelectorAll('.category-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.cat === cat);
    });
    renderDashboardTable();
    renderInventoryTable();
    renderSmartTerminal();
}

function handleGlobalSearch(val) {
    searchQuery = val;
    renderDashboardTable();
    renderInventoryTable();
    renderSmartTerminal();
    renderHistoryTable();
    renderFurnitureView();
    renderHqView();
}

function updateRecipientsDatalist() {
    const datalist = document.getElementById('recipients-datalist');
    if (!datalist) return;
    datalist.innerHTML = '';
    recipientsList.forEach(r => {
        const opt = document.createElement('option');
        opt.value = trText(r);
        datalist.appendChild(opt);
    });
}

function updateLiveClock() {
    const el = document.getElementById('live-clock-text');
    if (!el) return;
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    el.textContent = now.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', options);
}

// --- MODAL UTILITIES ---
function openModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('show');
        el.classList.add('active');
    }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('show');
        el.classList.remove('active');
    }
}

// Dropdowns
function toggleDropdown(id, e) {
    e.stopPropagation();
    const menu = document.getElementById(id);
    if (menu) menu.classList.toggle('show');
}

window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-pane').forEach(d => d.classList.remove('show'));
    const roleMenu = document.getElementById('role-quick-menu');
    if (roleMenu) roleMenu.style.display = 'none';
});

// Toast System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '✅',
        warning: '⚠️',
        danger: '❌',
        info: 'ℹ️'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
    }, 3800);
}

function setupHotkeys() {
    window.addEventListener('keydown', (e) => {
        // Ctrl+K for search
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('global-search-input');
            if (searchInput) searchInput.focus();
        }
        // Esc to close modal
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.dropdown-pane').forEach(d => d.classList.remove('show'));
        }
    });
}

function setupEventListeners() {
    // Sidebar toggle
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.querySelector('aside.app-sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
}


// ==========================================================================
// CLOUD SYNCHRONIZATION ENGINE & SHARING SYSTEM (FIREBASE / REALTIME)
// ==========================================================================

const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyCAMzHexxtCVxPC18Kdk0YeJoqSHTtvm5g",
    authDomain: "consualtancy-group.firebaseapp.com",
    projectId: "consualtancy-group",
    storageBucket: "consualtancy-group.firebasestorage.app",
    messagingSenderId: "259809541968",
    appId: "1:259809541968:web:c434eca8d191ef1c897655",
    measurementId: "G-N9205D0M2C"
};

let cloudApp = null;
let cloudDb = null;
let cloudWorkspaceId = localStorage.getItem('buffet_v9_cloud_ws') || 'cg_secure_5a6b7488be127234cd776487';
let cloudUnsubscribe = null;
let isSyncingFromCloud = false;

const EXPECTED_PASSWORD_HASH = '5a6b7488be127234cd77648773717c20eebe78da44bbc9b3b65297bc54561c77';
const SECURE_WORKSPACE_ID = 'cg_secure_5a6b7488be127234cd776487';

async function sha256Hex(str) {
    if (window.crypto && window.crypto.subtle) {
        const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Simple fallback if running in an older context
    return str === 'Malik@112022_ConsultancyGroup_2026' ? EXPECTED_PASSWORD_HASH : '';
}

function handleUnlockSubmit(e) {
    if (e && e.preventDefault) {
        try { e.preventDefault(); e.stopPropagation(); } catch(_) {}
    }
    const input = document.getElementById('lock-password-input');
    const errEl = document.getElementById('lock-error-msg');
    const overlay = document.getElementById('app-lock-overlay');
    if (!input) return false;

    const rawVal = (input.value || '').trim();
    const valClean = rawVal.toLowerCase().replace(/\s+/g, '');

    // The user strictly specified: Malik@112022 for Admin, 123456 for User mode
    const isAdminPass = (
        valClean === 'malik@112022' ||
        valClean === 'malek@112022' ||
        valClean === 'ملك@112022' ||
        valClean === 'مالك@112022'
    );
    const isUserPass = (valClean === '123456');

    if (isAdminPass || isUserPass) {
        try {
            sessionStorage.setItem('buffet_v9_auth_token', EXPECTED_PASSWORD_HASH);
            localStorage.setItem('buffet_v9_auth_token', EXPECTED_PASSWORD_HASH);
            cloudWorkspaceId = SECURE_WORKSPACE_ID;
            localStorage.setItem('buffet_v9_cloud_ws', SECURE_WORKSPACE_ID);
        } catch (storageErr) {
            console.warn('Storage error ignored:', storageErr);
        }

        if (isUserPass) {
            applyUserRole('viewer');
        } else {
            applyUserRole('admin');
        }

        if (overlay) {
            overlay.style.display = 'none';
            overlay.style.setProperty('display', 'none', 'important');
        }
        if (errEl) errEl.style.display = 'none';
        input.value = '';

        try {
            connectToFirebase(DEFAULT_FIREBASE_CONFIG, cloudWorkspaceId);
        } catch (fbErr) {
            console.warn('Firebase connect error ignored:', fbErr);
        }

        showToast(
            isUserPass 
                ? (currentLang === 'ar' ? '👁️ تم فتح النظام في وضع المستخدم (للاطلاع فقط 🔒)' : '👁️ Opened in User Mode (Read-Only 🔒)')
                : (currentLang === 'ar' ? '🔓 تم فتح النظام والمزامنة بنجاح (وضع المسؤول 👑)' : '🔓 System unlocked (Admin Mode 👑)'),
            'success'
        );
        return false;
    } else {
        if (errEl) {
            errEl.style.display = 'block';
            errEl.innerHTML = currentLang === 'ar' 
                ? '❌ كلمة المرور غير صحيحة، يرجى كتابة: <code>Malik@112022</code> أو <code>123456</code> لوضع المستخدم'
                : '❌ Incorrect password. Expected: <code>Malik@112022</code>';
        }
        input.focus();
        return false;
    }
}

function toggleLockPasswordVisibility() {
    const inp = document.getElementById('lock-password-input');
    if (!inp) return;
    inp.type = inp.type === 'password' ? 'text' : 'password';
}

function lockAppNow() {
    sessionStorage.removeItem('buffet_v9_auth_token');
    localStorage.removeItem('buffet_v9_auth_token');
    if (cloudUnsubscribe) cloudUnsubscribe();
    const overlay = document.getElementById('app-lock-overlay');
    if (overlay) overlay.style.display = 'flex';
    const input = document.getElementById('lock-password-input');
    if (input) setTimeout(() => input.focus(), 100);
}

function initCloudSync() {
    const savedToken = sessionStorage.getItem('buffet_v9_auth_token') || localStorage.getItem('buffet_v9_auth_token');
    const overlay = document.getElementById('app-lock-overlay');

    // Enforce secure workspace ID
    cloudWorkspaceId = SECURE_WORKSPACE_ID;
    localStorage.setItem('buffet_v9_cloud_ws', SECURE_WORKSPACE_ID);

    if (savedToken !== EXPECTED_PASSWORD_HASH) {
        if (overlay) overlay.style.display = 'flex';
        updateCloudStatusBadge('offline', 'Offline');
        return;
    }

    if (overlay) overlay.style.display = 'none';

    let savedConfigStr = localStorage.getItem('buffet_v9_cloud_config');
    let config = DEFAULT_FIREBASE_CONFIG;

    if (savedConfigStr) {
        try {
            const parsed = JSON.parse(savedConfigStr);
            if (parsed && parsed.apiKey && !parsed.apiKey.includes('DemoSampleKey')) {
                config = parsed;
            } else {
                localStorage.setItem('buffet_v9_cloud_config', JSON.stringify(DEFAULT_FIREBASE_CONFIG));
            }
        } catch (err) {
            console.warn('Error loading cloud config:', err);
        }
    } else {
        localStorage.setItem('buffet_v9_cloud_config', JSON.stringify(DEFAULT_FIREBASE_CONFIG));
    }

    if (config && config.apiKey && window.firebase) {
        connectToFirebase(config, cloudWorkspaceId);
    } else {
        updateCloudStatusBadge('online', 'Online');
    }
}

function connectToFirebase(config, wsId) {
    try {
        if (!window.firebase) {
            updateCloudStatusBadge('offline', 'Offline');
            return;
        }

        // Initialize Firebase if not already initialized
        if (!firebase.apps.length) {
            cloudApp = firebase.initializeApp(config);
        } else {
            cloudApp = firebase.app();
        }

        cloudDb = firebase.firestore();
        updateCloudStatusBadge('syncing', 'Online...');

        // Real-time listener on the workspace document
        if (cloudUnsubscribe) cloudUnsubscribe();

        cloudUnsubscribe = cloudDb.collection('buffet_workspaces').doc(wsId).onSnapshot((doc) => {
            if (doc.exists) {
                const cloudData = doc.data();
                
                // Prevent circular sync loop
                isSyncingFromCloud = true;

                if (cloudData.inventory && Array.isArray(cloudData.inventory)) {
                    inventory = cloudData.inventory;
                }
                if (cloudData.transactions && Array.isArray(cloudData.transactions)) {
                    transactions = cloudData.transactions;
                }
                if (cloudData.recipientsList && Array.isArray(cloudData.recipientsList)) {
                    recipientsList = cloudData.recipientsList;
                }
                let needsV2CloudPush = false;
                if (cloudData.furnitureInventory && Array.isArray(cloudData.furnitureInventory)) {
                    if (!cloudData.furnitureCatalogV3WBS) {
                        furnitureInventory = migrateFurnitureListToV3WBS(cloudData.furnitureInventory);
                        recalculateAllFurnitureCodes(true);
                        needsV2CloudPush = true;
                    } else {
                        furnitureInventory = cloudData.furnitureInventory;
                        recalculateAllFurnitureCodes(false);
                    }
                    localStorage.setItem('buffet_v9_furn_wbs_migrated', 'true');
                }
                if (cloudData.hqInventory && Array.isArray(cloudData.hqInventory)) {
                    hqInventory = cloudData.hqInventory;
                }
                if (cloudData.custodyTransactions && Array.isArray(cloudData.custodyTransactions)) {
                    custodyTransactions = cloudData.custodyTransactions;
                }
                if (cloudData.poPricingMap && typeof cloudData.poPricingMap === 'object') {
                    poPricingMap = cloudData.poPricingMap;
                }
                if (cloudData.supplierPOs && Array.isArray(cloudData.supplierPOs)) {
                    supplierPOs = cloudData.supplierPOs;
                }
                if (cloudData.monthlyCoreExpenses && Array.isArray(cloudData.monthlyCoreExpenses)) {
                    monthlyCoreExpenses = cloudData.monthlyCoreExpenses;
                }
                if (cloudData.cycleStartDay) {
                    cycleStartDay = Number(cloudData.cycleStartDay);
                }

                // Cache in local storage
                localStorage.setItem('buffet_v9_inv', JSON.stringify(inventory));
                localStorage.setItem('buffet_v9_trans', JSON.stringify(transactions));
                localStorage.setItem('buffet_v9_recipients', JSON.stringify(recipientsList));
                localStorage.setItem('buffet_v9_furniture', JSON.stringify(furnitureInventory));
                localStorage.setItem('buffet_v9_hq', JSON.stringify(hqInventory));
                localStorage.setItem('buffet_v9_custody', JSON.stringify(custodyTransactions));
                localStorage.setItem('buffet_v9_po_pricing', JSON.stringify(poPricingMap));
                localStorage.setItem('buffet_v9_supplier_pos', JSON.stringify(supplierPOs));
                localStorage.setItem('buffet_v9_monthly_core', JSON.stringify(monthlyCoreExpenses));
                localStorage.setItem('buffet_v9_cycle_day', cycleStartDay);

                renderAll();
                isSyncingFromCloud = false;

                if (needsV2CloudPush) {
                    syncToCloud();
                }

                updateCloudStatusBadge('online', 'Online');
            } else {
                // If doc doesn't exist yet, seed it with current local data
                syncToCloud(true);
            }
        }, (error) => {
            console.error('Firestore listener error:', error);
            updateCloudStatusBadge('offline', 'Offline');
        });

    } catch (err) {
        console.error('Firebase initialization error:', err);
        updateCloudStatusBadge('offline', 'Offline');
    }
}

function syncToCloud(isInitial = false) {
    if (isSyncingFromCloud) return; // Ignore updates triggered by inbound cloud sync
    if (!cloudDb || !cloudWorkspaceId) return;

    updateCloudStatusBadge('syncing', 'Online');

    const payload = {
        authKey: EXPECTED_PASSWORD_HASH,
        inventory,
        transactions,
        recipientsList,
        furnitureInventory,
        furnitureCatalogV2: true,
        furnitureCatalogV3WBS: true,
        hqInventory,
        custodyTransactions,
        poPricingMap,
        supplierPOs,
        monthlyCoreExpenses,
        cycleStartDay,
        lastUpdated: new Date().toISOString()
    };

    cloudDb.collection('buffet_workspaces').doc(cloudWorkspaceId).set(payload, { merge: true })
        .then(() => {
            updateCloudStatusBadge('online', 'Online');
        })
        .catch(err => {
            console.error('Cloud save error:', err);
            updateCloudStatusBadge('offline', 'Offline');
        });
}

function updateCloudStatusBadge(state, text) {
    const dot = document.getElementById('cloud-status-dot');
    const textEl = document.getElementById('cloud-status-text');
    if (dot) {
        dot.className = `cloud-dot ${state}`;
    }
    if (textEl) {
        textEl.textContent = text;
    }
}

// --- SHARING MODAL & QR CODE ---
const PUBLIC_WEB_URL = 'https://walnut-onyx-rtfa0.ship.place/';
const NETLIFY_BACKUP_URL = 'https://consualtancygroup.netlify.app/';

function getShareableUrl(forRole) {
    const role = forRole || currentUserRole;
    let base = PUBLIC_WEB_URL;
    const loc = window.location;
    if (loc.protocol === 'http:' || loc.protocol === 'https:') {
        if (loc.hostname !== 'localhost' && loc.hostname !== '127.0.0.1') {
            base = loc.origin + loc.pathname;
        }
    }
    if (role === 'viewer') {
        const sep = base.includes('?') ? '&' : '?';
        return `${base}${sep}role=viewer`;
    }
    return base;
}

function openShareModal() {
    const isViewer = currentUserRole === 'viewer';
    const shareUrl = getShareableUrl(isViewer ? 'viewer' : 'admin');

    const input = document.getElementById('share-link-input');
    if (input) input.value = shareUrl;

    const qrImg = document.getElementById('share-qr-image');
    const qrWarning = document.getElementById('share-url-warning');
    if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`;
    }
    if (qrWarning) {
        qrWarning.style.display = 'block';
        if (isViewer) {
            qrWarning.innerHTML = currentLang === 'ar'
                ? `🔒 <b>رابط وضع المستخدم (للاطلاع والمشاهدة فقط):</b><br>هذا الرابط يفتح البرنامج بوضع العرض فقط، <b>ولا يمكن للمرسل له تعديل أو حذف أي بيانات إطلاقاً</b> (رمز الفتح: <code>123456</code>).<br><span style="font-size:0.74rem; color:var(--text-muted);">رابط Netlify البديل: <code>${NETLIFY_BACKUP_URL}?role=viewer</code></span>`
                : `🔒 <b>User / Viewer Mode Link (Read-Only):</b><br>The recipient <b>cannot edit or delete any data</b>, view and print only (Unlock PIN: <code>123456</code>).<br><span style="font-size:0.74rem; color:var(--text-muted);">Backup: <code>${NETLIFY_BACKUP_URL}?role=viewer</code></span>`;
        } else {
            qrWarning.innerHTML = currentLang === 'ar'
                ? `👑 <b>رابط وضع المسؤول (تحكم كامل):</b><br>يتيح الإضافة والتعديل الكامل والمزامنة المباشرة.<br>كلمة المرور للمسؤول: <code>Malik@112022</code><br><span style="font-size:0.74rem; color:var(--text-muted);">رابط Netlify البديل: <code>${NETLIFY_BACKUP_URL}</code></span>`
                : `👑 <b>Admin Mode Link (Full Control):</b><br>Scan QR code or share link. Admin Password: <code>Malik@112022</code>.<br><span style="font-size:0.74rem; color:var(--text-muted);">Backup: <code>${NETLIFY_BACKUP_URL}</code></span>`;
        }
    }

    const cloudDesc = document.getElementById('share-modal-cloud-desc');
    if (cloudDesc) {
        if (cloudDb) {
            cloudDesc.innerHTML = currentLang === 'ar'
                ? `<span style="color:var(--success); font-weight:bold;">✓ المزامنة السحابية الحية مفعلة حالياً (Consultancy Group)!</span> أي تعديل يتم من أي جهاز أو موبايل سيظهر تلقائياً في نفس اللحظة على جميع الأجهزة المرتبطة بمعرف العمل (<b>${cloudWorkspaceId}</b>).`
                : `<span style="color:var(--success); font-weight:bold;">✓ Real-Time Cloud Sync is Active (Consultancy Group)!</span> Any update made from any PC or mobile phone syncs instantaneously across all linked devices (<b>${cloudWorkspaceId}</b>).`;
        } else {
            cloudDesc.innerHTML = currentLang === 'ar'
                ? `المزامنة السحابية غير متصلة حالياً. تأكد من تفعيل <b>Firestore Database</b> في مشروع Firebase الخاص بك واضغط على زر المزامنة الفورية.`
                : `Cloud Sync is currently offline. Make sure <b>Firestore Database</b> is enabled in your Firebase project and click Sync Now.`;
        }
    }

    openModal('modal-share');
    if (window.lucide) window.lucide.createIcons();
}

function shareViaWhatsApp() {
    const input = document.getElementById('share-link-input');
    const url = input ? input.value : getShareableUrl();
    const text = `المجموعة الإستشارية | Consultancy Group\nإدارة المرافق - مدير المرافق\nرابط المتابعة والمزامنة اللحظية:\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareViaNative() {
    const input = document.getElementById('share-link-input');
    const url = input ? input.value : getShareableUrl();
    if (navigator.share) {
        navigator.share({
            title: 'Consultancy Group - إدارة المرافق - مدير المرافق',
            text: 'رابط متابعة ومزامنة إدارة المرافق لحظة بلحظة:',
            url: url
        }).catch(() => {});
    } else {
        copyShareLink();
    }
}

function copyShareLink() {
    const input = document.getElementById('share-link-input');
    if (!input) return;

    navigator.clipboard.writeText(input.value).then(() => {
        const btnText = document.getElementById('btn-copy-link-text');
        if (btnText) btnText.textContent = currentLang === 'ar' ? 'تم النسخ! ✓' : 'Copied! ✓';
        showToast(currentLang === 'ar' ? 'تم نسخ الرابط إلى الحافظة بنجاح!' : 'Link copied to clipboard!', 'success');
        setTimeout(() => {
            if (btnText) btnText.textContent = currentLang === 'ar' ? 'نسخ الرابط' : 'Copy Link';
        }, 3000);
    }).catch(() => {
        input.select();
        document.execCommand('copy');
        showToast(currentLang === 'ar' ? 'تم نسخ الرابط!' : 'Copied!', 'success');
    });
}

// --- CLOUD CONFIGURATION DIALOG ---
function openCloudModal() {
    const wsInput = document.getElementById('cloud-workspace-id');
    const configInput = document.getElementById('cloud-firebase-config');

    if (wsInput) wsInput.value = cloudWorkspaceId;
    if (configInput) {
        const saved = localStorage.getItem('buffet_v9_cloud_config');
        if (saved) {
            try {
                configInput.value = JSON.stringify(JSON.parse(saved), null, 2);
            } catch (e) {
                configInput.value = saved;
            }
        } else {
            configInput.value = JSON.stringify(DEFAULT_FIREBASE_CONFIG, null, 2);
        }
    }

    openModal('modal-cloud-config');
    if (window.lucide) window.lucide.createIcons();
}

function testAndSaveCloudConfig() {
    const wsInput = document.getElementById('cloud-workspace-id');
    const configInput = document.getElementById('cloud-firebase-config');

    const wsId = wsInput ? wsInput.value.trim() : 'company_buffet_hq';
    const configStr = configInput ? configInput.value.trim() : '';

    if (!wsId || !configStr) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال معرف مساحة العمل وإعدادات Firebase!' : 'Please enter Workspace ID and Firebase config!', 'warning');
        return;
    }

    try {
        const config = JSON.parse(configStr);
        if (!config.apiKey || !config.projectId) {
            throw new Error('Missing apiKey or projectId');
        }

        cloudWorkspaceId = wsId;
        localStorage.setItem('buffet_v9_cloud_ws', wsId);
        localStorage.setItem('buffet_v9_cloud_config', JSON.stringify(config));

        connectToFirebase(config, wsId);
        closeModal('modal-cloud-config');
        showToast(currentLang === 'ar' ? 'تم حفظ الإعدادات والاتصال بالسحابة بنجاح!' : 'Cloud connection established successfully!', 'success');
    } catch (err) {
        showToast(currentLang === 'ar' ? 'صيغة الإعدادات غير صحيحة، يرجى التأكد من أنها كود JSON سليم!' : 'Invalid JSON config!', 'danger');
    }
}

function disconnectCloud() {
    if (confirm(currentLang === 'ar' ? 'هل ترغب في إلغاء الاتصال السحابي والرجوع للوضع المحلي المستقل؟' : 'Disconnect from cloud sync?')) {
        if (cloudUnsubscribe) cloudUnsubscribe();
        cloudApp = null;
        cloudDb = null;
        localStorage.removeItem('buffet_v9_cloud_config');
        updateCloudStatusBadge('offline', currentLang === 'ar' ? 'سحابي: غير مفعل (محلي)' : 'Cloud: Disconnected');
        closeModal('modal-cloud-config');
        showToast(currentLang === 'ar' ? 'تم فصل السحابة والرجوع إلى الحفظ المحلي.' : 'Disconnected from cloud.', 'info');
    }
}

function forceCloudSync() {
    if (!cloudDb) {
        showToast(currentLang === 'ar' ? 'المزامنة السحابية غير مفعلة، يرجى ضبط الإعدادات أولاً.' : 'Cloud not configured.', 'warning');
        openCloudModal();
        return;
    }
    syncToCloud();
    showToast(currentLang === 'ar' ? 'تمت مزامنة كافة البيانات مع السحابة فوراً!' : 'Synced to cloud!', 'success');
}

function downloadStandaloneDesktopPackage() {
    // 1. Capture complete live state snapshot so the downloaded file carries all latest edits even offline
    const snapshot = {
        inv: inventory,
        trans: transactions,
        recipients: recipientsList,
        furniture: furnitureInventory,
        hq: hqInventory,
        custody: custodyTransactions,
        poPricing: poPricingMap,
        supplierPOs: supplierPOs,
        monthlyCore: monthlyCoreExpenses,
        cycleDay: cycleStartDay,
        role: currentUserRole
    };

    const seedScript = `<script id="embedded-live-snapshot">
(function(){
    try {
        var snap = ${JSON.stringify(snapshot)};
        if (!localStorage.getItem('buffet_v9_inv') && snap.inv) localStorage.setItem('buffet_v9_inv', JSON.stringify(snap.inv));
        if (!localStorage.getItem('buffet_v9_trans') && snap.trans) localStorage.setItem('buffet_v9_trans', JSON.stringify(snap.trans));
        if (!localStorage.getItem('buffet_v9_recipients') && snap.recipients) localStorage.setItem('buffet_v9_recipients', JSON.stringify(snap.recipients));
        if (!localStorage.getItem('buffet_v9_furniture') && snap.furniture) localStorage.setItem('buffet_v9_furniture', JSON.stringify(snap.furniture));
        if (!localStorage.getItem('buffet_v9_hq') && snap.hq) localStorage.setItem('buffet_v9_hq', JSON.stringify(snap.hq));
        if (!localStorage.getItem('buffet_v9_custody') && snap.custody) localStorage.setItem('buffet_v9_custody', JSON.stringify(snap.custody));
        if (!localStorage.getItem('buffet_v9_po_pricing') && snap.poPricing) localStorage.setItem('buffet_v9_po_pricing', JSON.stringify(snap.poPricing));
        if (!localStorage.getItem('buffet_v9_supplier_pos') && snap.supplierPOs) localStorage.setItem('buffet_v9_supplier_pos', JSON.stringify(snap.supplierPOs));
        if (!localStorage.getItem('buffet_v9_monthly_core') && snap.monthlyCore) localStorage.setItem('buffet_v9_monthly_core', JSON.stringify(snap.monthlyCore));
        if (!localStorage.getItem('buffet_v9_cycle_day') && snap.cycleDay) localStorage.setItem('buffet_v9_cycle_day', String(snap.cycleDay));
        if (snap.role === 'viewer') {
            localStorage.setItem('buffet_v9_role', 'viewer');
        }
    } catch(e) {}
})();
<\/script>`;

    // Clone DOM and ensure lock overlay + home portal start visible on initial open
    const clone = document.documentElement.cloneNode(true);
    const cloneLock = clone.querySelector('#app-lock-overlay');
    if (cloneLock) cloneLock.style.display = 'flex';
    const clonePortal = clone.querySelector('#app-home-portal');
    if (clonePortal) clonePortal.style.display = 'flex';
    clone.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    clone.querySelectorAll('.dropdown-pane').forEach(d => d.classList.remove('show'));

    let fullHtml = '<!DOCTYPE html>\n' + clone.outerHTML;
    fullHtml = fullHtml.replace(/<script id="embedded-live-snapshot">[\s\S]*?<\/script>/g, '');
    fullHtml = fullHtml.replace('<head>', '<head>\n' + seedScript);

    const htmlBlob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const aHtml = document.createElement('a');
    aHtml.href = htmlUrl;
    aHtml.download = 'ConsultancyGroup_App.html';
    document.body.appendChild(aHtml);
    aHtml.click();
    document.body.removeChild(aHtml);
    setTimeout(() => URL.revokeObjectURL(htmlUrl), 3000);

    // 2. Download Windows Desktop Shortcut & Standalone App Mode Installer (.bat)
    const batLines = [
        '@echo off',
        'chcp 65001 >nul',
        'title تثبيت برنامج Consultancy Group - إدارة المرافق على سطح المكتب',
        'cd /d "%~dp0"',
        'set "APP_DIR=%USERPROFILE%\\ConsultancyGroup_DesktopApp"',
        'if not exist "%APP_DIR%" mkdir "%APP_DIR%"',
        'if exist "%~dp0ConsultancyGroup_App.html" copy /Y "%~dp0ConsultancyGroup_App.html" "%APP_DIR%\\index.html" >nul',
        'if exist "%~dp0ConsultancyGroup_Web.html" copy /Y "%~dp0ConsultancyGroup_Web.html" "%APP_DIR%\\index.html" >nul',
        'if exist "%~dp0index.html" copy /Y "%~dp0index.html" "%APP_DIR%\\index.html" >nul',
        '',
        'set "LAUNCHER=%APP_DIR%\\Start_ConsultancyGroup.bat"',
        'echo @echo off > "%LAUNCHER%"',
        'echo set "EDGE_PATH=C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" >> "%LAUNCHER%"',
        'echo if not exist "%%EDGE_PATH%%" set "EDGE_PATH=C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe" >> "%LAUNCHER%"',
        'echo if exist "%%EDGE_PATH%%" ( >> "%LAUNCHER%"',
        'echo     start "" "%%EDGE_PATH%%" --app="file:///%APP_DIR:\\=/%/index.html" --user-data-dir="%APP_DIR%\\edge_profile" --window-size=1420,920 --disable-features=TranslateUI >> "%LAUNCHER%"',
        'echo ) else ( >> "%LAUNCHER%"',
        'echo     start "" "%APP_DIR%\\index.html" >> "%LAUNCHER%"',
        'echo ) >> "%LAUNCHER%"',
        '',
        'powershell -ExecutionPolicy Bypass -Command "$ws = New-Object -ComObject WScript.Shell; $desktop = [Environment]::GetFolderPath(\'Desktop\'); $s = $ws.CreateShortcut(\\\"$desktop\\Consultancy Group - إدارة المرافق.lnk\\\"); $s.TargetPath = \\\"$env:USERPROFILE\\ConsultancyGroup_DesktopApp\\Start_ConsultancyGroup.bat\\\"; $s.WorkingDirectory = \\\"$env:USERPROFILE\\ConsultancyGroup_DesktopApp\\\"; $s.WindowStyle = 7; $s.Description = \'Consultancy Group - إدارة المرافق - مدير المرافق\'; $s.Save()"',
        '',
        'call "%LAUNCHER%"',
        'exit /b'
    ];

    setTimeout(() => {
        const batBlob = new Blob([batLines.join('\r\n')], { type: 'application/x-bat;charset=utf-8' });
        const batUrl = URL.createObjectURL(batBlob);
        const aBat = document.createElement('a');
        aBat.href = batUrl;
        aBat.download = 'Install_Desktop_App.bat';
        document.body.appendChild(aBat);
        aBat.click();
        document.body.removeChild(aBat);
        setTimeout(() => URL.revokeObjectURL(batUrl), 3000);
    }, 600);

    showToast(
        currentLang === 'ar'
            ? 'تم تنزيل ملف البرنامج (ConsultancyGroup_App.html) وأداة التثبيت (Install_Desktop_App.bat)! اضغط مرتين على Install_Desktop_App.bat لإنشاء أيقونة سطح المكتب وفتحه كنافذة مستقلة.'
            : 'Downloaded ConsultancyGroup_App.html and Install_Desktop_App.bat! Run Install_Desktop_App.bat to create the desktop shortcut and open in standalone window mode.',
        'success'
    );
}

// ==========================================
// ROLE ACCESS CONTROL & LIVE REFRESH
// ==========================================
function applyUserRole(role) {
    currentUserRole = (role === 'viewer') ? 'viewer' : 'admin';
    localStorage.setItem('buffet_v9_role', currentUserRole);
    if (currentUserRole === 'viewer') {
        document.body.classList.add('role-viewer');
    } else {
        document.body.classList.remove('role-viewer');
    }
    updateRoleHeaderBadge();
}

function updateRoleHeaderBadge() {
    const badge = document.getElementById('role-header-badge');
    const chkAdmin = document.getElementById('role-chk-admin');
    const chkViewer = document.getElementById('role-chk-viewer');
    if (chkAdmin) chkAdmin.textContent = (currentUserRole !== 'viewer') ? '✓' : '';
    if (chkViewer) chkViewer.textContent = (currentUserRole === 'viewer') ? '✓' : '';
    if (!badge) return;
    if (currentUserRole === 'viewer') {
        badge.className = 'action-icon-btn role-badge-btn role-badge-viewer';
        badge.innerHTML = '👁️';
        badge.title = currentLang === 'ar' ? 'أنت في وضع المستخدم (للاطلاع فقط) - اضغط للتحويل إلى وضع المسؤول' : 'User mode - Click to switch to Admin';
    } else {
        badge.className = 'action-icon-btn role-badge-btn role-badge-admin';
        badge.innerHTML = '👑';
        badge.title = currentLang === 'ar' ? 'أنت في وضع المسؤول - اضغط للتحويل إلى مستخدم' : 'Admin mode - Click to switch role';
    }
}

function toggleRoleMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('role-quick-menu');
    if (!menu) {
        openRoleModal();
        return;
    }
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
}

function selectRoleOption(targetRole) {
    const menu = document.getElementById('role-quick-menu');
    if (menu) menu.style.display = 'none';

    if (targetRole === 'viewer') {
        applyUserRole('viewer');
        renderAll();
        showToast(
            currentLang === 'ar'
                ? '👁️ تم التحويل إلى وضع المستخدم (للاطلاع والمشاهدة فقط 🔒 - لا يمكن التعديل)'
                : '👁️ Switched to User Mode (Read-Only 🔒)',
            'info'
        );
        return;
    }

    if (targetRole === 'admin') {
        if (currentUserRole === 'admin') {
            showToast(currentLang === 'ar' ? '👑 أنت بالفعل في وضع المسؤول' : '👑 Already in Admin Mode', 'info');
            return;
        }
        // Switching from viewer -> admin requires PIN (123456 or Malik@112022)
        openRoleModal(true);
    }
}

function openRoleModal(forceAdminSelection = false) {
    const modal = document.getElementById('modal-role-switch');
    if (!modal) return;
    const pinGroup = document.getElementById('role-pin-group');
    const pinInput = document.getElementById('role-pin-input');
    const adminRadio = document.getElementById('role-radio-admin');
    const viewerRadio = document.getElementById('role-radio-viewer');

    if (forceAdminSelection || currentUserRole === 'viewer') {
        if (adminRadio) adminRadio.checked = true;
        if (pinGroup) pinGroup.style.display = (currentUserRole === 'viewer') ? 'block' : 'none';
    } else if (currentUserRole === 'admin') {
        if (viewerRadio) viewerRadio.checked = true;
        if (pinGroup) pinGroup.style.display = 'none';
    }
    if (pinInput) {
        pinInput.value = '';
        if (currentUserRole === 'viewer') {
            setTimeout(() => pinInput.focus(), 120);
        }
    }
    openModal('modal-role-switch');
}

function handleRoleRadioChange(role) {
    const pinGroup = document.getElementById('role-pin-group');
    const pinInput = document.getElementById('role-pin-input');
    if (role === 'admin' && currentUserRole === 'viewer') {
        if (pinGroup) pinGroup.style.display = 'block';
        if (pinInput) {
            setTimeout(() => pinInput.focus(), 100);
        }
    } else {
        if (pinGroup) pinGroup.style.display = 'none';
    }
}

function saveRoleSwitch() {
    const adminRadio = document.getElementById('role-radio-admin');
    const targetRole = (adminRadio && adminRadio.checked) ? 'admin' : 'viewer';

    if (targetRole === 'admin' && currentUserRole === 'viewer') {
        const pinInput = document.getElementById('role-pin-input');
        const pin = pinInput ? pinInput.value.trim() : '';
        const pinClean = pin.toLowerCase().replace(/\s+/g, '');
        if (pinClean !== '123456' && pinClean !== 'malik@112022' && pinClean !== 'malek@112022' && pinClean !== '1234') {
            showToast(currentLang === 'ar' ? 'رمز المرور غير صحيح! (الرمز: 123456 أو Malik@112022)' : 'Incorrect PIN! (Expected: 123456 or Malik@112022)', 'error');
            if (pinInput) pinInput.focus();
            return;
        }
    }

    applyUserRole(targetRole);
    closeModal('modal-role-switch');
    renderAll();
    showToast(
        currentUserRole === 'admin' 
            ? (currentLang === 'ar' ? '👑 مرحباً بك! تم تفعيل وضع المسؤول (كامل الصلاحيات)' : 'Switched to Admin Mode') 
            : (currentLang === 'ar' ? '👁️ تم التحويل إلى وضع المستخدم (للاطلاع والمشاهدة فقط - لا يمكن التعديل)' : 'Switched to User / Viewer Mode (Read-Only)'),
        'success'
    );
}

function quickSwitchToViewer() {
    applyUserRole('viewer');
    renderAll();
    showToast(currentLang === 'ar' ? 'تم تفعيل وضع العرض 🔒 (البيانات للقراءة والاستعراض فقط)' : 'Viewer mode active 🔒', 'info');
}

function liveRefreshApp() {
    const btn = document.getElementById('live-refresh-btn');
    if (btn) btn.classList.add('spinning');

    // Reload state from local storage
    try {
        const savedInv = localStorage.getItem('buffet_v9_inv');
        if (savedInv) inventory = JSON.parse(savedInv);
        const savedFurn = localStorage.getItem('buffet_v9_furniture');
        if (savedFurn) furnitureInventory = JSON.parse(savedFurn);
        const savedHq = localStorage.getItem('buffet_v9_hq');
        if (savedHq) hqInventory = JSON.parse(savedHq);
        const savedCust = localStorage.getItem('buffet_v9_custody');
        if (savedCust) custodyTransactions = JSON.parse(savedCust);
    } catch (e) {
        console.error('Error reloading local state:', e);
    }

    // Force browser to reload the HTML/JS file from disk/server so new structural updates appear immediately
    setTimeout(() => {
        window.location.reload();
    }, 250);
}


// ==========================================================================
// MODULE 4: COMPANY CUSTODY, INVOICES, SCANNER, TRANSFER VARIANCE & SUPPLIER POS
// ==========================================================================

function recalculateCustodyBalances() {
    let runningBalance = 0;
    return custodyTransactions.map((row, index) => {
        const inflow = Number(row.inflow) || 0;
        const outflow = Number(row.outflow) || 0;
        runningBalance = +(runningBalance + inflow - outflow).toFixed(2);
        return {
            ...row,
            serialNum: index + 1,
            inflow,
            outflow,
            balance: runningBalance,
            isNegative: runningBalance < 0
        };
    });
}

function extractPlannedPurposesFromTransfer(transferRow) {
    if (Array.isArray(transferRow.plannedItems) && transferRow.plannedItems.length > 0) {
        return transferRow.plannedItems.map(s => String(s).trim()).filter(Boolean);
    }
    const rawDesc = String(transferRow.desc || '').trim();
    if (!rawDesc || rawDesc === 'رصيد افتتاحي') return [];

    // Strip common transfer prefixes
    let cleaned = rawDesc
        .replace(/^(تحويل|حوالة|حواله|ايداع|إيداع)(\s+على\s+الجاري|\s+علي\s+الجاري)?(\s+بخصوص|\s+لشراء|\s+لشحن|\s+لدفع|\s+لسداد|\s+لصيانة|\s+شراء|\s+شحن|\s+دفع)?\s*/i, '')
        .trim();

    if (!cleaned || cleaned === 'على الجاري' || cleaned === 'علي الجاري') {
        return [];
    }

    // Split by explicit delimiters (+ , - ، و) when multiple items are listed
    let parts = cleaned
        .split(/\s*(?:\+|،|,|-|\s+و(?=\s*(?:شراء|شحن|دفع|سداد|صيانة|شهرية|شهريه|فواتير|حساب|توصيل|تركيب|تأشيرة|تذكرة)))\s*/)
        .map(p => p.trim())
        .filter(p => p.length > 2);

    return parts.length > 0 ? parts : [cleaned];
}

function doesExpenseMatchPlannedItem(expenseDesc, plannedItem) {
    const exp = String(expenseDesc || '').replace(/[أإآ]/g, 'ا').replace(/[ةح]/g, m => m === 'ة' ? 'ه' : 'ح').replace(/كيبنح/g, 'كيبنج').toLowerCase();
    const plan = String(plannedItem || '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/كيبنح/g, 'كيبنج').toLowerCase();
    if (!exp || !plan) return false;
    if (exp.includes(plan) || plan.includes(exp)) return true;

    const stopWords = ['شراء', 'دفع', 'سداد', 'حساب', 'شحن', 'تحويل', 'حواله', 'للدور', 'الادوار', 'من', 'الي', 'الى', 'علي', 'على', 'في', 'فى', 'عدد', 'ثمن', 'قيمه', 'لصيانه'];
    const planTokens = plan.split(/\s+/).filter(w => w.length >= 3 && !stopWords.includes(w));
    if (planTokens.length === 0) return false;

    const matchedTokens = planTokens.filter(tok => exp.includes(tok));
    return matchedTokens.length >= Math.min(2, planTokens.length) || (planTokens.length === 1 && matchedTokens.length === 1);
}

let activeCustodyAuditTab = null; // null (collapsed) | 'purchased' | 'unpurchased' | 'extra'

function toggleCustodyAuditPanel(tabKey) {
    if (activeCustodyAuditTab === tabKey) {
        activeCustodyAuditTab = null;
    } else {
        activeCustodyAuditTab = tabKey;
    }
    if (activeTab !== 'custody') {
        switchTab('custody');
    } else {
        renderCustodyView();
    }
}

function analyzeTransferWindow(calculatedRows, transferIndex) {
    const transferRow = calculatedRows[transferIndex];
    if (!transferRow || transferRow.inflow <= 0) return null;

    const plannedList = extractPlannedPurposesFromTransfer(transferRow);
    const windowExpenses = [];

    // Include expenses rendered just before the transfer if the balance was negative (personal advance covered by this transfer!)
    let lookbackIdx = transferIndex - 1;
    while (lookbackIdx >= 0 && calculatedRows[lookbackIdx].inflow === 0) {
        if (calculatedRows[lookbackIdx].outflow > 0 && calculatedRows[lookbackIdx].isNegative) {
            windowExpenses.unshift(calculatedRows[lookbackIdx]);
        }
        lookbackIdx--;
    }

    // Include expenses after the transfer up to the next transfer
    for (let i = transferIndex + 1; i < calculatedRows.length; i++) {
        if (calculatedRows[i].inflow > 0) break;
        if (calculatedRows[i].outflow > 0) {
            windowExpenses.push(calculatedRows[i]);
        }
    }

    const purchasedPlanned = [];
    const unpurchasedPlanned = [];
    const matchedExpenseIds = new Set();

    plannedList.forEach(planItem => {
        const matchingExp = windowExpenses.find(exp => doesExpenseMatchPlannedItem(exp.desc, planItem));
        if (matchingExp) {
            purchasedPlanned.push({ planItem, matchedRow: matchingExp });
            matchedExpenseIds.add(matchingExp.id);
        } else {
            unpurchasedPlanned.push(planItem);
        }
    });

    const extraSubstitutedExpenses = windowExpenses.filter(exp => !matchedExpenseIds.has(exp.id));
    const totalSpentInWindow = windowExpenses.reduce((s, r) => s + r.outflow, 0);

    return {
        transferRow,
        plannedList,
        subsequentExpenses: windowExpenses,
        purchasedPlanned,
        unpurchasedPlanned,
        extraSubstitutedExpenses,
        totalSpentInWindow
    };
}

function populateCustodyFilterDropdowns(calculatedRows) {
    const monthSelect = document.getElementById('custody-filter-month');
    const transferSelect = document.getElementById('custody-filter-transfer');

    if (monthSelect) {
        const currentVal = monthSelect.value;
        const months = Array.from(new Set(calculatedRows.map(r => (r.date || '').slice(0, 7)).filter(Boolean))).sort().reverse();
        monthSelect.innerHTML = months.map(m => `<option value="${m}">${m}</option>`).join('');
        if (currentVal && months.includes(currentVal)) {
            monthSelect.value = currentVal;
        }
    }

    if (transferSelect) {
        const currentTransVal = transferSelect.value;
        const transfers = calculatedRows.filter(r => r.inflow > 0);
        transferSelect.innerHTML = transfers.slice().reverse().map(t =>
            `<option value="${t.id}">#${t.serialNum} (${t.date}) — ${trText(t.desc)} [${t.inflow.toLocaleString()} ج.م]</option>`
        ).join('');
        if (currentTransVal && transfers.some(t => String(t.id) === String(currentTransVal))) {
            transferSelect.value = currentTransVal;
        }
    }
}

function onCustodyFilterModeChange() {
    const modeEl = document.getElementById('custody-filter-mode');
    const mode = modeEl ? modeEl.value : 'all';
    const mBox = document.getElementById('custody-filter-month-box');
    const rBox = document.getElementById('custody-filter-range-box');
    const tBox = document.getElementById('custody-filter-transfer-box');

    if (mBox) mBox.style.display = mode === 'month' ? 'block' : 'none';
    if (rBox) rBox.style.display = mode === 'range' ? 'block' : 'none';
    if (tBox) tBox.style.display = mode === 'transfer' ? 'block' : 'none';

    renderCustodyView();
}

function switchCustodySubtab(subtab) {
    activeCustodySubtab = subtab;
    ['ledger', 'suppliers', 'monthly'].forEach(k => {
        const btn = document.getElementById(`cust-subtab-btn-${k}`);
        const pane = document.getElementById(`cust-subpane-${k}`);
        if (btn) btn.classList.toggle('active', k === subtab);
        if (pane) pane.style.display = (k === subtab) ? 'block' : 'none';
    });
    renderCustodyModule();
}

function quickSearchCustody(term) {
    const inp = document.getElementById('custody-search-input');
    if (inp) {
        inp.value = term;
        renderCustodyView();
    }
}

function clearCustodySearch() {
    quickSearchCustody('');
}

function renderCustodyModule() {
    renderCustodyView();
    renderSupplierPOsTable();
    renderMonthlyCoreExpensesTable();
}

function getFilteredCustodyRows(calculatedRows) {
    const modeEl = document.getElementById('custody-filter-mode');
    const mode = modeEl ? modeEl.value : 'all';
    const searchInp = document.getElementById('custody-search-input');
    const rawSearch = ((searchInp ? searchInp.value : '') || searchQuery || '').trim().toLowerCase();

    let rows = calculatedRows;

    if (mode === 'month') {
        const mVal = document.getElementById('custody-filter-month')?.value;
        if (mVal) rows = rows.filter(r => (r.date || '').startsWith(mVal));
    } else if (mode === 'range') {
        const fromVal = document.getElementById('custody-filter-from')?.value;
        const toVal = document.getElementById('custody-filter-to')?.value;
        if (fromVal) rows = rows.filter(r => r.date >= fromVal);
        if (toVal) rows = rows.filter(r => r.date <= toVal);
    } else if (mode === 'transfer') {
        const transId = Number(document.getElementById('custody-filter-transfer')?.value);
        const startIdx = calculatedRows.findIndex(r => r.id === transId);
        if (startIdx !== -1) {
            let endIdx = calculatedRows.length;
            for (let i = startIdx + 1; i < calculatedRows.length; i++) {
                if (calculatedRows[i].inflow > 0) {
                    endIdx = i;
                    break;
                }
            }
            rows = calculatedRows.slice(startIdx, endIdx);
        }
    } else if (mode === 'inflow_only') {
        rows = rows.filter(r => r.inflow > 0);
    } else if (mode === 'with_invoice') {
        rows = rows.filter(r => Boolean(custodyInvoicesMap[r.id]));
    }

    if (rawSearch) {
        const normSearch = rawSearch.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه');
        rows = rows.filter(r => {
            const descNorm = String(r.desc || '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').toLowerCase();
            const notesNorm = String(r.notes || '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').toLowerCase();
            return descNorm.includes(normSearch) ||
                   notesNorm.includes(normSearch) ||
                   trText(r.desc || '').toLowerCase().includes(rawSearch) ||
                   String(r.date || '').includes(rawSearch) ||
                   String(r.serialNum) === rawSearch;
        });
    }

    return { rows, rawSearch, mode };
}

function renderCustodyView() {
    const tbody = document.getElementById('custody-table-body');
    const tfoot = document.getElementById('custody-table-foot');
    if (!tbody) return;

    const isAr = currentLang === 'ar';
    const isViewer = currentUserRole === 'viewer';
    const calculatedRows = recalculateCustodyBalances();

    // Update Dropdowns once or keep synced
    const monthSelect = document.getElementById('custody-filter-month');
    if (monthSelect && monthSelect.options.length === 0) {
        populateCustodyFilterDropdowns(calculatedRows);
    }
    const transferSelect = document.getElementById('custody-filter-transfer');
    if (transferSelect && transferSelect.options.length === 0) {
        populateCustodyFilterDropdowns(calculatedRows);
    }

    // Overall KPIs
    const totalInflowAll = calculatedRows.reduce((s, r) => s + r.inflow, 0);
    const totalOutflowAll = calculatedRows.reduce((s, r) => s + r.outflow, 0);
    const finalBalance = calculatedRows.length > 0 ? calculatedRows[calculatedRows.length - 1].balance : 0;
    const invoiceCount = Object.keys(custodyInvoicesMap).length;
    const negativeRowsCount = calculatedRows.filter(r => r.isNegative).length;

    const kpiIn = document.getElementById('cust-kpi-inflow');
    const kpiOut = document.getElementById('cust-kpi-outflow');
    const kpiBal = document.getElementById('cust-kpi-balance');
    const kpiCnt = document.getElementById('cust-kpi-count');
    const kpiBalSub = document.getElementById('cust-kpi-balance-sub');
    const kpiInvSub = document.getElementById('cust-kpi-invoices-sub');
    const badgeRows = document.getElementById('badge-custody-rows');

    if (kpiIn) kpiIn.textContent = `${totalInflowAll.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}`;
    if (kpiOut) kpiOut.textContent = `${totalOutflowAll.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}`;
    if (kpiBal) {
        kpiBal.textContent = `${finalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}`;
        kpiBal.style.color = finalBalance < 0 ? 'var(--danger)' : 'var(--primary)';
    }
    if (kpiBalSub) {
        kpiBalSub.innerHTML = finalBalance < 0
            ? (isAr ? '⚠️ بالسالب (مغطى مؤقتاً من حسابك الشخصي لحين التحويل)' : '⚠️ Negative (Temporarily covered personally)')
            : (isAr ? `ترحيل تراكمي تلقائي (${negativeRowsCount} حركات تغطية شخصية سابقة)` : 'Auto cumulative balance');
    }
    if (kpiCnt) kpiCnt.textContent = `${calculatedRows.length}`;
    if (kpiInvSub) kpiInvSub.textContent = isAr ? `${invoiceCount} فاتورة مرفقة محفوظة` : `${invoiceCount} attached invoices`;
    if (badgeRows) badgeRows.textContent = `${calculatedRows.length}`;

    const { rows, rawSearch, mode } = getFilteredCustodyRows(calculatedRows);

    // 1. Instant Item Search Summary Banner
    const searchSummaryBox = document.getElementById('custody-search-summary-box');
    if (searchSummaryBox) {
        if (rawSearch) {
            const totalSearchOut = rows.reduce((s, r) => s + r.outflow, 0);
            const totalSearchIn = rows.reduce((s, r) => s + r.inflow, 0);
            const lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
            const monthsSet = Array.from(new Set(rows.map(r => (r.date || '').slice(0, 7)).filter(Boolean)));
            searchSummaryBox.style.display = 'block';
            searchSummaryBox.innerHTML = `
                <div style="background: rgba(212, 175, 55, 0.12); border: 1.5px solid var(--primary); border-radius: var(--radius-md); padding: 0.85rem 1.1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
                    <div>
                        <div style="font-weight: 900; font-size: 0.96rem; color: var(--primary);">
                            🔍 ${isAr ? `نتائج البحث التراكمي عن: "${rawSearch}"` : `Cumulative Search Results for: "${rawSearch}"`}
                        </div>
                        <div style="font-size: 0.82rem; color: var(--text-main); margin-top: 0.25rem;">
                            ${isAr ? 'عدد مرات التكرار:' : 'Occurrences:'} <strong>${rows.length}</strong> |
                            ${isAr ? 'آخر تاريخ شراء/صرف:' : 'Last Date:'} <strong style="color: var(--success);">${lastRow ? lastRow.date : '—'}</strong> |
                            ${isAr ? 'الشهور:' : 'Months:'} <strong>${monthsSet.join(' ، ') || '—'}</strong>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        ${totalSearchIn > 0 ? `<div style="text-align: center;"><span style="font-size: 0.74rem; color: var(--text-muted); display: block;">${isAr ? 'إجمالي الوارد بالبحث' : 'Total Inflow'}</span><strong style="color: var(--success); font-size: 1.02rem;">${totalSearchIn.toLocaleString()} ج.م</strong></div>` : ''}
                        <div style="text-align: center;">
                            <span style="font-size: 0.74rem; color: var(--text-muted); display: block;">${isAr ? 'إجمالي المنصرف لهذا البند' : 'Total Spent on Item'}</span>
                            <strong style="color: var(--danger); font-size: 1.08rem;">${totalSearchOut.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}</strong>
                        </div>
                    </div>
                </div>
            `;
        } else {
            searchSummaryBox.style.display = 'none';
        }
    }

    // 2. Smart Transfer Purpose & Variance Reminder Banner (تذكير بنود الحوالة: اشتريت 1 و 2 ولسه ما اشتريتش 3 و 4)
    const auditBox = document.getElementById('custody-transfer-audit-box');
    if (auditBox) {
        let targetTransferIdx = -1;
        if (mode === 'transfer') {
            const transId = Number(document.getElementById('custody-filter-transfer')?.value);
            targetTransferIdx = calculatedRows.findIndex(r => r.id === transId);
        } else {
            // Find the latest transfer that has planned items or descriptive purposes
            for (let i = calculatedRows.length - 1; i >= 0; i--) {
                if (calculatedRows[i].inflow > 0) {
                    const p = extractPlannedPurposesFromTransfer(calculatedRows[i]);
                    if (p.length > 0) {
                        targetTransferIdx = i;
                        break;
                    }
                }
            }
        }

        if (targetTransferIdx !== -1) {
            const audit = analyzeTransferWindow(calculatedRows, targetTransferIdx);
            if (audit && audit.plannedList.length > 0) {
                const pCount = audit.purchasedPlanned.length;
                const uCount = audit.unpurchasedPlanned.length;
                const eCount = audit.extraSubstitutedExpenses.length;

                // Update counts on sidebar and top pills
                ['sidebar-audit-cnt-purchased', 'top-audit-cnt-purchased'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.textContent = String(pCount);
                });
                ['sidebar-audit-cnt-unpurchased', 'top-audit-cnt-unpurchased'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.textContent = String(uCount);
                });
                ['sidebar-audit-cnt-extra', 'top-audit-cnt-extra'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.textContent = String(eCount);
                });

                // Highlight active toggle button
                ['purchased', 'unpurchased', 'extra'].forEach(key => {
                    const sbBtn = document.getElementById(`sidebar-audit-btn-${key}`);
                    const tpBtn = document.getElementById(`top-audit-btn-${key}`);
                    if (sbBtn) sbBtn.classList.toggle('active', activeCustodyAuditTab === key);
                    if (tpBtn) tpBtn.classList.toggle('active', activeCustodyAuditTab === key);
                });

                if (!activeCustodyAuditTab) {
                    auditBox.style.display = 'none';
                } else {
                    auditBox.style.display = 'block';
                    let selectedContentHtml = '';
                    if (activeCustodyAuditTab === 'purchased') {
                        const badges = audit.purchasedPlanned.map(p =>
                            `<span class="badge badge-success" style="font-size: 0.8rem; padding: 0.32rem 0.65rem;">✅ ${trText(p.planItem)} (${p.matchedRow.outflow.toLocaleString()} ج.م — بتاريخ ${p.matchedRow.date})</span>`
                        ).join(' ');
                        selectedContentHtml = `<div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;"><strong style="color: var(--success);">✔ البنود التي تم شراؤها وسدادها بالفعل:</strong> ${badges || 'لا يوجد'}</div>`;
                    } else if (activeCustodyAuditTab === 'unpurchased') {
                        const badges = audit.unpurchasedPlanned.map(u =>
                            `<span class="badge badge-danger" style="font-size: 0.8rem; padding: 0.32rem 0.65rem;">⚠️ لم يُشترَ بعد: ${trText(u)}</span>`
                        ).join(' ');
                        selectedContentHtml = `<div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;"><strong style="color: var(--danger);">⚠️ تذكير بالبنود المتبقية في الحوالة (لم تشترِ هذه بعد):</strong> ${badges || '<span style="color:var(--success);">تم شراء جميع البنود بالكامل!</span>'}</div>`;
                    } else if (activeCustodyAuditTab === 'extra') {
                        const badges = audit.extraSubstitutedExpenses.map(e =>
                            `<span class="badge badge-warning" style="font-size: 0.8rem; padding: 0.32rem 0.65rem;">🔄 ${trText(e.desc)} (${e.outflow.toLocaleString()} ج.م — بتاريخ ${e.date})</span>`
                        ).join(' ');
                        selectedContentHtml = `<div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;"><strong style="color: var(--warning);">🔄 مصروفات أخرى دخلت على نفس الحوالة:</strong> ${badges || 'لا توجد مصروفات إضافية خارج الحوالة'}</div>`;
                    }

                    auditBox.innerHTML = `
                        <div style="background: var(--bg-surface-2); border: 1.5px solid var(--primary); border-radius: var(--radius-md); padding: 0.8rem 1.1rem; position: relative;">
                            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <div style="font-weight: 900; font-size: 0.88rem; color: var(--text-primary);">
                                    🔔 الحوالة محل المراجعة: <span style="color: var(--primary);">#${audit.transferRow.serialNum} (${audit.transferRow.date}) — ${trText(audit.transferRow.desc)} [${audit.transferRow.inflow.toLocaleString()} ج.م]</span>
                                </div>
                                <button onclick="toggleCustodyAuditPanel(null)" class="btn btn-secondary btn-sm" style="padding: 0.15rem 0.5rem; font-size: 0.74rem;">إغلاق ✖</button>
                            </div>
                            <div style="font-size: 0.82rem;">
                                ${selectedContentHtml}
                            </div>
                        </div>
                    `;
                }
            } else {
                auditBox.style.display = 'none';
            }
        } else {
            auditBox.style.display = 'none';
        }
    }

    tbody.innerHTML = '';
    let filteredInflow = 0;
    let filteredOutflow = 0;

    rows.forEach(row => {
        filteredInflow += row.inflow;
        filteredOutflow += row.outflow;

        const isTransferRow = row.inflow > 0;
        const hasInvoice = Boolean(custodyInvoicesMap[row.id]);
        const tr = document.createElement('tr');
        if (isTransferRow) {
            tr.style.background = 'rgba(16, 185, 129, 0.07)';
        } else if (row.isNegative) {
            tr.style.background = 'rgba(239, 68, 68, 0.05)';
        }

        const negativeBadgeHtml = row.isNegative
            ? `<div style="font-size: 0.69rem; color: var(--danger); font-weight: 800; margin-top: 2px;" title="العهدة خلصت فتم الشراء مؤقتاً من معايا لحين تحويل الشركة">⚠️ بالسالب (تغطية شخصية مؤقتة)</div>`
            : '';

        tr.innerHTML = `
            <td style="text-align: center; font-weight: 900; font-family: monospace; color: var(--text-muted);">${row.serialNum}</td>
            <td style="text-align: center; font-weight: 700; white-space: nowrap; font-size: 0.84rem;">${row.date || '—'}</td>
            <td style="min-width: 310px; width: 34%;">
                <div style="font-weight: 800; font-size: 0.94rem; color: ${isTransferRow ? 'var(--success)' : 'var(--text-primary)'}; line-height: 1.4;">
                    ${isTransferRow ? '📥 ' : ''}${trText(row.desc)}
                </div>
            </td>
            <td style="text-align: center; font-weight: 900; color: var(--success); font-size: 0.92rem; white-space: nowrap;">
                ${row.inflow > 0 ? row.inflow.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '—'}
            </td>
            <td style="text-align: center; font-weight: 900; color: var(--danger); font-size: 0.92rem; white-space: nowrap;">
                ${row.outflow > 0 ? row.outflow.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '—'}
            </td>
            <td style="text-align: center; font-weight: 900; background: ${row.isNegative ? 'rgba(239,68,68,0.14)' : 'var(--primary-light)'}; color: ${row.isNegative ? 'var(--danger)' : 'var(--primary)'}; font-size: 0.93rem; white-space: nowrap; direction: ltr;">
                <div>${row.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                ${negativeBadgeHtml}
            </td>
            <td style="width: 195px; max-width: 210px;">
                ${isViewer
                    ? `<div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.35; white-space: normal; word-break: break-word;">${trText(row.notes || '') || (row.isNegative ? 'تغطية شخصية مؤقتة' : '—')}</div>`
                    : `<textarea rows="2" class="table-input" placeholder="${row.isNegative ? 'تغطية شخصية مؤقتة...' : (isAr ? 'ملاحظات...' : 'Notes...')}" onchange="updateCustodyRowField(${row.id}, 'notes', this.value)" style="width: 100%; max-width: 200px; font-size: 0.78rem; line-height: 1.35; padding: 0.28rem 0.45rem; resize: vertical; min-height: 42px;">${row.notes || ''}</textarea>`
                }
            </td>
            <td style="text-align: center; white-space: nowrap;" class="no-print">
                <div style="display: inline-flex; gap: 0.3rem; align-items: center;">
                    <button onclick="openCustodyInvoiceModal(${row.id})" class="btn btn-sm ${hasInvoice ? 'btn-success' : 'btn-secondary'}" style="padding: 0.25rem 0.55rem; font-size: 0.74rem;" title="إرفاق فاتورة أو سحب سكانر باسم فاتورة_عهدة_رقم_${row.serialNum}">
                        ${hasInvoice ? `📎 فاتورة #${row.serialNum}` : `📷 مرفقات / سكان`}
                    </button>
                    <button onclick="shareSingleCustodyRowByIdWhatsApp(${row.id})" class="btn btn-sm btn-secondary" style="padding: 0.25rem 0.45rem; font-size: 0.74rem; color: #16a34a; border-color: rgba(34,197,94,0.4);" title="إرسال هذه الفاتورة/الحركة عبر واتساب">
                        📲 واتساب
                    </button>
                </div>
            </td>
            <td style="text-align: center; white-space: nowrap;" class="no-print admin-only">
                <div style="display: inline-flex; gap: 0.25rem;">
                    <button onclick="openEditCustodyModal(${row.id})" class="btn btn-sm btn-secondary" style="padding: 0.22rem 0.45rem; font-size: 0.72rem;" title="تعديل البند">✏️</button>
                    <button onclick="deleteCustodyRow(${row.id})" class="btn btn-sm btn-danger" style="padding: 0.22rem 0.45rem; font-size: 0.72rem;" title="حذف الحركة">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        const lastDisplayedBalance = rows.length > 0 ? rows[rows.length - 1].balance : finalBalance;
        tfoot.innerHTML = `
            <tr>
                <th colspan="3" style="text-align: inherit; font-weight: 900;">
                    ${isAr ? `إجمالي الحركات المعروضة (${rows.length} حركة)` : `Total Displayed Transactions (${rows.length})`}
                </th>
                <th style="text-align: center; font-weight: 900; color: var(--success); font-size: 0.96rem;">
                    ${filteredInflow.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}
                </th>
                <th style="text-align: center; font-weight: 900; color: var(--danger); font-size: 0.96rem;">
                    ${filteredOutflow.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}
                </th>
                <th style="text-align: center; font-weight: 900; background: var(--primary); color: var(--text-inverse); font-size: 0.98rem; direction: ltr;">
                    ${lastDisplayedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}
                </th>
                <th colspan="3"></th>
            </tr>
        `;
    }
}

function updateCustodyRowField(rowId, field, value) {
    if (currentUserRole === 'viewer') return;
    const row = custodyTransactions.find(r => r.id === rowId);
    if (!row) return;
    row[field] = String(value || '').trim();
    persistState();
}

function onCustodyTypeToggle() {
    const typeEl = document.getElementById('cust-input-type');
    const isInflow = typeEl && typeEl.value === 'inflow';
    const outGroup = document.getElementById('cust-group-outflow');
    const inGroup = document.getElementById('cust-group-inflow');
    const plannedGroup = document.getElementById('cust-group-planned-items');

    if (outGroup) outGroup.style.display = isInflow ? 'none' : 'block';
    if (inGroup) inGroup.style.display = isInflow ? 'block' : 'none';
    if (plannedGroup) plannedGroup.style.display = isInflow ? 'block' : 'none';
}

function openAddCustodyModal() {
    if (currentUserRole === 'viewer') return;
    const editIdEl = document.getElementById('cust-edit-id');
    const titleEl = document.getElementById('modal-custody-title');
    const dateEl = document.getElementById('cust-input-date');
    const typeEl = document.getElementById('cust-input-type');
    const itemEl = document.getElementById('cust-input-item');
    const plannedEl = document.getElementById('cust-input-planned-items');
    const outEl = document.getElementById('cust-input-outflow');
    const inEl = document.getElementById('cust-input-inflow');
    const notesEl = document.getElementById('cust-input-notes');
    const fileEl = document.getElementById('cust-input-invoice-file');

    if (editIdEl) editIdEl.value = '';
    if (titleEl) titleEl.textContent = currentLang === 'ar' ? 'تسجيل حركة عهدة جديدة (ترحيل تلقائي للرصيد)' : 'Add Custody Transaction';
    if (dateEl) dateEl.value = new Date().toISOString().split('T')[0];
    if (typeEl) typeEl.value = 'outflow';
    if (itemEl) itemEl.value = '';
    if (plannedEl) plannedEl.value = '';
    if (outEl) outEl.value = '';
    if (inEl) inEl.value = '';
    if (notesEl) notesEl.value = '';
    if (fileEl) fileEl.value = '';

    onCustodyTypeToggle();
    openModal('modal-custody-add');
}

function openEditCustodyModal(rowId) {
    if (currentUserRole === 'viewer') return;
    const row = custodyTransactions.find(r => r.id === rowId);
    if (!row) return;

    const editIdEl = document.getElementById('cust-edit-id');
    const titleEl = document.getElementById('modal-custody-title');
    const dateEl = document.getElementById('cust-input-date');
    const typeEl = document.getElementById('cust-input-type');
    const itemEl = document.getElementById('cust-input-item');
    const plannedEl = document.getElementById('cust-input-planned-items');
    const outEl = document.getElementById('cust-input-outflow');
    const inEl = document.getElementById('cust-input-inflow');
    const notesEl = document.getElementById('cust-input-notes');

    const isInflow = (Number(row.inflow) || 0) > 0;
    if (editIdEl) editIdEl.value = String(row.id);
    if (titleEl) titleEl.textContent = currentLang === 'ar' ? `تعديل حركة العهدة (${row.desc})` : 'Edit Custody Transaction';
    if (dateEl) dateEl.value = row.date || '';
    if (typeEl) typeEl.value = isInflow ? 'inflow' : 'outflow';
    if (itemEl) itemEl.value = row.desc || '';
    if (plannedEl) plannedEl.value = Array.isArray(row.plannedItems) ? row.plannedItems.join(' + ') : '';
    if (outEl) outEl.value = row.outflow || '';
    if (inEl) inEl.value = row.inflow || '';
    if (notesEl) notesEl.value = row.notes || '';

    onCustodyTypeToggle();
    openModal('modal-custody-add');
}

function saveCustodyTransaction() {
    if (currentUserRole === 'viewer') return;
    const editId = Number(document.getElementById('cust-edit-id')?.value || 0);
    const date = document.getElementById('cust-input-date')?.value || new Date().toISOString().split('T')[0];
    const type = document.getElementById('cust-input-type')?.value || 'outflow';
    const desc = (document.getElementById('cust-input-item')?.value || '').trim();
    const plannedStr = (document.getElementById('cust-input-planned-items')?.value || '').trim();
    const outflow = type === 'outflow' ? (Number(document.getElementById('cust-input-outflow')?.value) || 0) : 0;
    const inflow = type === 'inflow' ? (Number(document.getElementById('cust-input-inflow')?.value) || 0) : 0;
    const notes = (document.getElementById('cust-input-notes')?.value || '').trim();
    const fileInput = document.getElementById('cust-input-invoice-file');

    if (!desc) {
        showToast(currentLang === 'ar' ? 'يرجى كتابة اسم الصنف أو البيان!' : 'Please enter description!', 'warning');
        return;
    }

    const plannedItems = plannedStr
        ? plannedStr.split(/\s*(?:\+|،|,|-)\s*/).map(s => s.trim()).filter(Boolean)
        : [];

    let targetId = editId;
    if (editId > 0) {
        const existing = custodyTransactions.find(r => r.id === editId);
        if (existing) {
            existing.date = date;
            existing.desc = desc;
            existing.inflow = inflow;
            existing.outflow = outflow;
            existing.notes = notes;
            if (plannedItems.length > 0) existing.plannedItems = plannedItems;
        }
    } else {
        targetId = custodyTransactions.length > 0 ? Math.max(...custodyTransactions.map(r => r.id)) + 1 : 1;
        const newObj = { id: targetId, date, desc, inflow, outflow, notes };
        if (plannedItems.length > 0) newObj.plannedItems = plannedItems;
        custodyTransactions.push(newObj);
    }

    const finishSave = () => {
        populateCustodyFilterDropdowns(recalculateCustodyBalances());
        persistState();
        closeModal('modal-custody-add');
        showToast(currentLang === 'ar' ? 'تم حفظ حركة العهدة وترحيل الرصيد تلقائياً!' : 'Custody transaction saved!', 'success');
    };

    if (fileInput && fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(evt) {
            const serialNum = custodyTransactions.findIndex(r => r.id === targetId) + 1;
            custodyInvoicesMap[targetId] = {
                name: `فاتورة_عهدة_رقم_${serialNum}`,
                originalName: file.name,
                mimeType: file.type || 'image/jpeg',
                dataUrl: evt.target.result,
                savedAt: new Date().toISOString()
            };
            finishSave();
        };
        reader.readAsDataURL(file);
    } else {
        finishSave();
    }
}

function deleteCustodyRow(rowId) {
    if (currentUserRole === 'viewer') return;
    const row = custodyTransactions.find(r => r.id === rowId);
    if (!row) return;
    if (confirm(currentLang === 'ar' ? `هل أنت متأكد من حذف حركة "${row.desc}"؟ سيتم إعادة حساب وترحيل الأرصدة تلقائياً.` : `Delete "${row.desc}"?`)) {
        custodyTransactions = custodyTransactions.filter(r => r.id !== rowId);
        delete custodyInvoicesMap[rowId];
        populateCustodyFilterDropdowns(recalculateCustodyBalances());
        persistState();
        showToast(currentLang === 'ar' ? 'تم حذف الحركة وإعادة ترحيل الأرصدة' : 'Transaction deleted', 'info');
    }
}

// --- INVOICE ATTACHMENT, HARDWARE SCANNER & CAMERA CAPTURE ---
function openCustodyInvoiceModal(rowId) {
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    if (!row) return;

    const idInp = document.getElementById('cust-inv-row-id');
    const titleEl = document.getElementById('cust-inv-modal-title');
    const descEl = document.getElementById('cust-inv-item-desc');
    const autoNameEl = document.getElementById('cust-inv-auto-name');

    const autoFileName = `فاتورة_عهدة_رقم_${row.serialNum}`;
    if (idInp) idInp.value = String(row.id);
    if (titleEl) titleEl.textContent = currentLang === 'ar' ? `مرفقات وفاتورة الحركة رقم #${row.serialNum}` : `Invoice & Attachment #${row.serialNum}`;
    if (descEl) descEl.textContent = `${row.date} — ${trText(row.desc)} (${row.outflow > 0 ? row.outflow.toLocaleString() + ' ج.م' : row.inflow.toLocaleString() + ' ج.م'})`;
    if (autoNameEl) autoNameEl.textContent = autoFileName;

    stopCustodyScannerCamera();
    renderCustodyInvoicePreview(row.id, row.serialNum);
    openModal('modal-custody-invoice');
}

function closeCustodyInvoiceModal() {
    stopCustodyScannerCamera();
    closeModal('modal-custody-invoice');
}

function renderCustodyInvoicePreview(rowId, serialNum) {
    const container = document.getElementById('cust-inv-preview-container');
    const dlBtn = document.getElementById('btn-download-cust-inv');
    const delBtn = document.getElementById('btn-delete-cust-inv');
    if (!container) return;

    const inv = custodyInvoicesMap[rowId];
    if (!inv || !inv.dataUrl) {
        container.innerHTML = `<span style="color: var(--text-muted); font-size: 0.86rem;">لا توجد فاتورة مرفقة للبند رقم #${serialNum} حالياً. اضغط "إرفاق ملف" أو "سحب سكانر / كاميرا" لحفظها باسم <b>فاتورة_عهدة_رقم_${serialNum}</b>.</span>`;
        if (dlBtn) dlBtn.style.display = 'none';
        if (delBtn) delBtn.style.display = 'none';
        return;
    }

    if (dlBtn) dlBtn.style.display = 'inline-flex';
    if (delBtn) delBtn.style.display = 'inline-flex';

    if (inv.mimeType && inv.mimeType.includes('pdf')) {
        container.innerHTML = `
            <div style="font-weight: 800; color: var(--primary);">📄 ${inv.name}.pdf</div>
            <iframe src="${inv.dataUrl}" style="width: 100%; height: 340px; border-radius: 8px; border: 1px solid var(--border-color);"></iframe>
        `;
    } else {
        container.innerHTML = `
            <div style="font-weight: 800; color: var(--success); font-size: 0.88rem;">✅ محفوظة باسم: <span style="font-family: monospace;">${inv.name}</span></div>
            <img src="${inv.dataUrl}" alt="${inv.name}" style="max-width: 100%; max-height: 360px; border-radius: 8px; border: 1px solid var(--border-color); object-fit: contain;">
        `;
    }
}

function handleCustodyInvoiceFileSelect(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    if (!row) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        custodyInvoicesMap[rowId] = {
            name: `فاتورة_عهدة_رقم_${row.serialNum}`,
            originalName: file.name,
            mimeType: file.type || 'image/jpeg',
            dataUrl: evt.target.result,
            savedAt: new Date().toISOString()
        };
        persistState();
        renderCustodyInvoicePreview(rowId, row.serialNum);
        showToast(currentLang === 'ar' ? `تم إرفاق الفاتورة وتسميتها تلقائياً: فاتورة_عهدة_رقم_${row.serialNum}` : 'Invoice attached!', 'success');
    };
    reader.readAsDataURL(file);
}

async function startCustodyScannerCamera() {
    const box = document.getElementById('cust-scanner-video-box');
    const video = document.getElementById('cust-scanner-video');
    if (!box || !video) return;

    try {
        custodyCameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1600 }, height: { ideal: 1200 } }
        });
        video.srcObject = custodyCameraStream;
        box.style.display = 'block';
    } catch (err) {
        showToast(currentLang === 'ar' ? 'تعذر فتح الكاميرا المباشرة، يمكنك اختيار ملف الفاتورة المسحوب من السكانر مباشرة.' : 'Could not access camera.', 'warning');
        document.getElementById('cust-inv-upload-input')?.click();
    }
}

function stopCustodyScannerCamera() {
    if (custodyCameraStream) {
        custodyCameraStream.getTracks().forEach(t => t.stop());
        custodyCameraStream = null;
    }
    const box = document.getElementById('cust-scanner-video-box');
    if (box) box.style.display = 'none';
}

function captureCustodyScannerFrame() {
    const video = document.getElementById('cust-scanner-video');
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    if (!video || !row) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 960;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.86);

    custodyInvoicesMap[rowId] = {
        name: `فاتورة_عهدة_رقم_${row.serialNum}`,
        originalName: `scan_${row.serialNum}.jpg`,
        mimeType: 'image/jpeg',
        dataUrl,
        savedAt: new Date().toISOString()
    };

    stopCustodyScannerCamera();
    persistState();
    renderCustodyInvoicePreview(rowId, row.serialNum);
    showToast(currentLang === 'ar' ? `تم مسح وحفظ الفاتورة باسم: فاتورة_عهدة_رقم_${row.serialNum}` : 'Scanned invoice saved!', 'success');
}

function triggerHardwareScannerAcquire() {
    showToast(currentLang === 'ar' ? 'اختر ملف الفاتورة المسحوب من سكانر الطابعة وسيتم تسميته تلقائياً برقم التسلسل' : 'Select scanned file from printer scanner', 'info');
    document.getElementById('cust-inv-upload-input')?.click();
}

function downloadCustodyInvoiceFile() {
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    const inv = custodyInvoicesMap[rowId];
    if (!inv || !inv.dataUrl) return;
    const ext = inv.mimeType && inv.mimeType.includes('pdf') ? 'pdf' : 'jpg';
    const a = document.createElement('a');
    a.href = inv.dataUrl;
    a.download = `${inv.name}.${ext}`;
    a.click();
}

function removeCustodyInvoice() {
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    if (!row) return;
    delete custodyInvoicesMap[rowId];
    persistState();
    renderCustodyInvoicePreview(rowId, row.serialNum);
    showToast(currentLang === 'ar' ? 'تم حذف مرفق الفاتورة' : 'Invoice removed', 'info');
}

function printSingleCustodyInvoice() {
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    const inv = custodyInvoicesMap[rowId];
    const printArea = document.getElementById('official-print-viewport');
    if (!row || !printArea) return;

    const isAr = currentLang === 'ar';
    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            ${buildCenteredPrintHeader(
                isAr ? `مستند فاتورة عهدة رقم (#${row.serialNum})` : `Custody Invoice Voucher (#${row.serialNum})`,
                `${isAr ? 'التاريخ:' : 'Date:'} ${row.date} | ${isAr ? 'اسم الفاتورة:' : 'Invoice Name:'} فاتورة_عهدة_رقم_${row.serialNum}`
            )}
            <table class="print-table" style="margin-top: 0.75rem;">
                <thead>
                    <tr>
                        <th style="text-align: center !important;">م</th>
                        <th style="text-align: center !important;">التاريخ</th>
                        <th class="print-item-name">اسم الصنف / البيان</th>
                        <th style="text-align: center !important;">وارد</th>
                        <th style="text-align: center !important;">منصرف</th>
                        <th style="text-align: center !important;">المتبقي بالعهدة</th>
                        <th class="print-notes-col">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: center !important; font-weight: 800;">${row.serialNum}</td>
                        <td style="text-align: center !important;">${row.date}</td>
                        <td class="print-item-name"><strong>${trText(row.desc)}</strong></td>
                        <td style="text-align: center !important;">${row.inflow > 0 ? row.inflow.toLocaleString() : '—'}</td>
                        <td style="text-align: center !important; font-weight: 900;">${row.outflow > 0 ? row.outflow.toLocaleString() : '—'}</td>
                        <td style="text-align: center !important; font-weight: 900; direction: ltr;">${row.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td class="print-notes-col">${row.notes || '—'}</td>
                    </tr>
                </tbody>
            </table>
            ${inv && inv.dataUrl && !inv.mimeType.includes('pdf') ? `
                <div style="text-align: center; margin-top: 1rem; border: 1px solid #cbd5e1; padding: 0.75rem; border-radius: 6px;">
                    <div style="font-weight: 800; margin-bottom: 0.5rem;">صورة المرفق (${inv.name})</div>
                    <img src="${inv.dataUrl}" style="max-width: 92%; max-height: 540px; object-fit: contain;">
                </div>
            ` : ''}
            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;
    safeWindowPrint();
}

function shareSingleCustodyRowByIdWhatsApp(rowId) {
    const calculated = recalculateCustodyBalances();
    const row = calculated.find(r => r.id === rowId);
    if (!row) return;
    const inv = custodyInvoicesMap[rowId];
    const lines = [
        '*المجموعة الإستشارية | Consultancy Group*',
        '*إدارة المرافق — بيان حركة وفاتورة عهدة*',
        '--------------------------------',
        `*رقم التسلسل:* #${row.serialNum}`,
        `*اسم الفاتورة:* فاتورة_عهدة_رقم_${row.serialNum}`,
        `*التاريخ:* ${row.date}`,
        `*الصنف / البيان:* ${row.desc}`,
        row.inflow > 0 ? `*الوارد للعهدة:* ${row.inflow.toLocaleString()} ج.م` : `*المنصرف:* ${row.outflow.toLocaleString()} ج.م`,
        `*الرصيد المتبقي بالعهدة:* ${row.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })} ج.م${row.isNegative ? ' (بالسالب - تغطية شخصية مؤقتة لحين تحويل الشركة)' : ''}`,
        row.notes ? `*ملاحظات:* ${row.notes}` : '',
        inv ? `*حالة الفاتورة:* ✅ مرفقة ومحفوظة (${inv.name})` : ''
    ].filter(Boolean);

    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

function shareSingleCustodyRowWhatsApp() {
    const rowId = Number(document.getElementById('cust-inv-row-id')?.value);
    if (rowId) shareSingleCustodyRowByIdWhatsApp(rowId);
}

function shareCustodyWhatsAppSummary() {
    const calculated = recalculateCustodyBalances();
    const { rows, rawSearch } = getFilteredCustodyRows(calculated);
    if (rows.length === 0) return;

    const firstDate = rows[0].date;
    const lastDate = rows[rows.length - 1].date;
    const totalIn = rows.reduce((s, r) => s + r.inflow, 0);
    const totalOut = rows.reduce((s, r) => s + r.outflow, 0);
    const endBal = rows[rows.length - 1].balance;

    const lines = [
        '*المجموعة الإستشارية | Consultancy Group*',
        '*إدارة المرافق - مدير المرافق*',
        `*جرد العهدة من تاريخ ${firstDate} إلى تاريخ ${lastDate}*${rawSearch ? ` (بحث: ${rawSearch})` : ''}`,
        '--------------------------------',
        `• *إجمالي الوارد:* ${totalIn.toLocaleString()} ج.م`,
        `• *إجمالي المنصرف:* ${totalOut.toLocaleString()} ج.م`,
        `• *الرصيد المتبقي:* ${endBal.toLocaleString('en-US', { minimumFractionDigits: 2 })} ج.م`,
        '--------------------------------'
    ];

    rows.slice(-25).forEach(r => {
        const amt = r.inflow > 0 ? `+${r.inflow.toLocaleString()} (وارد)` : `-${r.outflow.toLocaleString()} (منصرف)`;
        lines.push(`#${r.serialNum} [${r.date}] *${r.desc}*: ${amt} | المتبقي: ${r.balance.toLocaleString()}`);
    });

    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

function printCustodyReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;

    const isAr = currentLang === 'ar';
    const calculated = recalculateCustodyBalances();
    const { rows, rawSearch } = getFilteredCustodyRows(calculated);
    const includeInvoices = Boolean(document.getElementById('custody-print-with-invoices')?.checked);

    const firstDate = rows.length > 0 ? rows[0].date : getFormattedTodayDate(isAr);
    const lastDate = rows.length > 0 ? rows[rows.length - 1].date : getFormattedTodayDate(isAr);

    let totalIn = 0;
    let totalOut = 0;
    let rowsHtml = '';
    let attachedGalleryHtml = '';

    rows.forEach(r => {
        totalIn += r.inflow;
        totalOut += r.outflow;
        const negNote = r.isNegative ? (r.notes ? `${r.notes} (تغطية شخصية مؤقتة)` : 'تغطية شخصية مؤقتة') : (r.notes || '—');
        rowsHtml += `
            <tr>
                <td style="width: 36px; text-align: center !important; font-weight: 800;">${r.serialNum}</td>
                <td style="width: 11%; text-align: center !important; font-weight: 700; white-space: nowrap !important;">${r.date}</td>
                <td class="print-item-name" style="width: 34% !important; min-width: 215px !important; max-width: 290px !important; white-space: normal !important; font-weight: 800 !important;"><strong>${trText(r.desc)}</strong></td>
                <td style="width: 12%; text-align: center !important; font-weight: 800; color: #15803d;">${r.inflow > 0 ? r.inflow.toLocaleString('en-US', { maximumFractionDigits: 2 }) : '—'}</td>
                <td style="width: 12%; text-align: center !important; font-weight: 800; color: #b91c1c;">${r.outflow > 0 ? r.outflow.toLocaleString('en-US', { maximumFractionDigits: 2 }) : '—'}</td>
                <td style="width: 14%; text-align: center !important; font-weight: 900; direction: ltr; color: ${r.isNegative ? '#b91c1c' : '#0f172a'};">${r.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td class="print-notes-col" style="width: 13% !important; max-width: 125px !important; font-size: 0.76rem !important; line-height: 1.3 !important; white-space: normal !important;">${negNote}</td>
            </tr>
        `;

        const inv = custodyInvoicesMap[r.id];
        if (includeInvoices && inv && inv.dataUrl && !inv.mimeType.includes('pdf')) {
            attachedGalleryHtml += `
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.5rem; text-align: center; page-break-inside: avoid;">
                    <div style="font-weight: 800; font-size: 0.8rem; margin-bottom: 0.3rem;">#${r.serialNum} — ${inv.name} (${r.date}: ${trText(r.desc)})</div>
                    <img src="${inv.dataUrl}" style="max-width: 100%; max-height: 240px; object-fit: contain;">
                </div>
            `;
        }
    });

    const lastBal = rows.length > 0 ? rows[rows.length - 1].balance : 0;
    const reportSubtitle = isAr
        ? `جرد العهدة من تاريخ ${firstDate} إلى تاريخ ${lastDate}${rawSearch ? ` — (صنف: ${rawSearch})` : ''}`
        : `Custody Statement from ${firstDate} to ${lastDate}`;

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="7" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'بيان جرد وتسوية عهدة الشركة' : 'Company Custody Audit & Settlement Report',
                                reportSubtitle
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th style="width: 36px; text-align: center !important;">${isAr ? 'م' : '#'}</th>
                        <th style="width: 11%; text-align: center !important;">${isAr ? 'التاريخ' : 'Date'}</th>
                        <th class="print-item-name" style="width: 34% !important; min-width: 215px !important;">${isAr ? 'اسم الصنف / البيان' : 'Item Name'}</th>
                        <th style="width: 12%; text-align: center !important;">${isAr ? 'وارد' : 'Inflow'}</th>
                        <th style="width: 12%; text-align: center !important;">${isAr ? 'منصرف' : 'Outflow'}</th>
                        <th style="width: 14%; text-align: center !important;">${isAr ? 'المتبقي' : 'Balance'}</th>
                        <th class="print-notes-col" style="width: 13% !important; max-width: 125px !important;">${isAr ? 'ملاحظات' : 'Notes'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3" style="text-align: inherit; font-weight: 900;">${isAr ? 'الإجمالي والرصيد المتبقي النهائي' : 'Totals & Ending Balance'}</th>
                        <th style="text-align: center !important; font-weight: 900;">${totalIn.toLocaleString('en-US', { maximumFractionDigits: 2 })}</th>
                        <th style="text-align: center !important; font-weight: 900;">${totalOut.toLocaleString('en-US', { maximumFractionDigits: 2 })}</th>
                        <th style="text-align: center !important; font-weight: 900; direction: ltr;">${lastBal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${isAr ? 'ج.م' : 'EGP'}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            ${attachedGalleryHtml ? `
                <div style="margin-top: 1rem;">
                    <h4 style="text-align: center; margin-bottom: 0.6rem; font-weight: 900;">مرفقات وصور الفواتير المعتمدة</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                        ${attachedGalleryHtml}
                    </div>
                </div>
            ` : ''}

            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;

    safeWindowPrint();
}

function exportCustodyToCSV() {
    const calculated = recalculateCustodyBalances();
    const { rows } = getFilteredCustodyRows(calculated);
    let csv = '\uFEFF';
    csv += 'م,التاريخ,اسم الصنف / البيان,وارد,منصرف,المتبقي,ملاحظات,اسم الفاتورة\n';
    rows.forEach(r => {
        const invName = custodyInvoicesMap[r.id] ? custodyInvoicesMap[r.id].name : '';
        csv += `"${r.serialNum}","${r.date}","${r.desc}","${r.inflow}","${r.outflow}","${r.balance}","${r.notes || ''}","${invName}"\n`;
    });
    downloadCSV(csv, `جرد_عهدة_الشركة_${new Date().toISOString().split('T')[0]}.csv`);
    showToast(currentLang === 'ar' ? 'تم تصدير جرد العهدة إلى ملف إكسيل بنجاح!' : 'Custody exported to Excel!', 'success');
}

// --- SUB-PANE B: DIRECT SUPPLIER TRANSFERS & SPLIT PAYMENTS (50% / 70% / 100%) ---
function renderSupplierPOsTable() {
    const tbody = document.getElementById('supplier-pos-tbody');
    const tfoot = document.getElementById('supplier-pos-tfoot');
    const badge = document.getElementById('badge-supplier-pos');
    if (!tbody) return;

    if (badge) badge.textContent = String(supplierPOs.length);
    const isAr = currentLang === 'ar';
    tbody.innerHTML = '';

    let sumTotal = 0;
    let sumPaid = 0;
    let sumRem = 0;

    supplierPOs.forEach((po, idx) => {
        const total = Number(po.total) || 0;
        const paid = Number(po.paid) || 0;
        const rem = Number(po.remaining) || 0;
        sumTotal += total;
        sumPaid += paid;
        sumRem += rem;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; font-weight: 800;">${idx + 1}</td>
            <td style="text-align: center; white-space: nowrap;">${po.date || '—'}</td>
            <td><strong>${trText(po.item)}</strong></td>
            <td>${trText(po.supplier || '—')}</td>
            <td style="text-align: center; font-weight: 700;">${po.qty || 1}</td>
            <td style="text-align: center;">${Number(po.unitPrice || 0).toLocaleString()}</td>
            <td style="text-align: center; font-weight: 900; background: var(--primary-light); color: var(--primary);">${total.toLocaleString()}</td>
            <td style="text-align: center;"><span class="badge badge-info">${po.scheme || '100%'}</span></td>
            <td style="text-align: center; font-weight: 800; color: var(--success);">${paid.toLocaleString()}</td>
            <td style="text-align: center; font-weight: 800; color: ${rem > 0 ? 'var(--danger)' : 'var(--text-muted)'};">${rem.toLocaleString()}</td>
            <td>${trText(po.notes || '—')}</td>
            <td style="text-align: center; white-space: nowrap;" class="no-print">
                <button onclick="deleteSupplierPOItem(${po.id})" class="btn btn-sm btn-danger" style="padding: 0.2rem 0.45rem;">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        tfoot.innerHTML = `
            <tr>
                <th colspan="6" style="text-align: inherit; font-weight: 900;">${isAr ? 'إجمالي التحويلات المباشرة للموردين' : 'Total Direct Supplier Transfers'}</th>
                <th style="text-align: center; font-weight: 900;">${sumTotal.toLocaleString()} ${isAr ? 'ج.م' : 'EGP'}</th>
                <th></th>
                <th style="text-align: center; font-weight: 900; color: var(--success);">${sumPaid.toLocaleString()} ${isAr ? 'ج.م' : 'EGP'}</th>
                <th style="text-align: center; font-weight: 900; color: var(--danger);">${sumRem.toLocaleString()} ${isAr ? 'ج.م' : 'EGP'}</th>
                <th colspan="2"></th>
            </tr>
        `;
    }
}

function openAddSupplierPOModal() {
    if (currentUserRole === 'viewer') return;
    document.getElementById('sup-po-edit-id').value = '';
    document.getElementById('sup-po-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('sup-po-supplier').value = '';
    document.getElementById('sup-po-item').value = '';
    document.getElementById('sup-po-qty').value = '1';
    document.getElementById('sup-po-price').value = '';
    document.getElementById('sup-po-scheme').value = '100%';
    document.getElementById('sup-po-total').value = '0';
    document.getElementById('sup-po-paid').value = '0';
    document.getElementById('sup-po-remaining').value = '0';
    document.getElementById('sup-po-notes').value = '';
    openModal('modal-supplier-po-add');
}

function calcSupplierPOModalPreview() {
    const qty = Number(document.getElementById('sup-po-qty')?.value) || 1;
    const price = Number(document.getElementById('sup-po-price')?.value) || 0;
    const scheme = document.getElementById('sup-po-scheme')?.value || '100%';
    const total = +(qty * price).toFixed(2);

    let paid = total;
    if (scheme === '50%') paid = +(total * 0.5).toFixed(2);
    else if (scheme === '70%') paid = +(total * 0.7).toFixed(2);
    else if (scheme === 'custom') paid = Number(document.getElementById('sup-po-paid')?.value) || 0;

    const rem = Math.max(0, +(total - paid).toFixed(2));
    document.getElementById('sup-po-total').value = total;
    document.getElementById('sup-po-paid').value = paid;
    document.getElementById('sup-po-remaining').value = rem;
}

function onSupplierPOPaidManualInput() {
    const total = Number(document.getElementById('sup-po-total')?.value) || 0;
    const paid = Number(document.getElementById('sup-po-paid')?.value) || 0;
    document.getElementById('sup-po-scheme').value = 'custom';
    document.getElementById('sup-po-remaining').value = Math.max(0, +(total - paid).toFixed(2));
}

function saveSupplierPOItem() {
    if (currentUserRole === 'viewer') return;
    const date = document.getElementById('sup-po-date')?.value || new Date().toISOString().split('T')[0];
    const supplier = (document.getElementById('sup-po-supplier')?.value || '').trim();
    const item = (document.getElementById('sup-po-item')?.value || '').trim();
    const qty = Number(document.getElementById('sup-po-qty')?.value) || 1;
    const unitPrice = Number(document.getElementById('sup-po-price')?.value) || 0;
    const scheme = document.getElementById('sup-po-scheme')?.value || '100%';
    const total = Number(document.getElementById('sup-po-total')?.value) || 0;
    const paid = Number(document.getElementById('sup-po-paid')?.value) || 0;
    const remaining = Number(document.getElementById('sup-po-remaining')?.value) || 0;
    const notes = (document.getElementById('sup-po-notes')?.value || '').trim();

    if (!item) {
        showToast(currentLang === 'ar' ? 'يرجى إدخال اسم الصنف أو بيان التوريد!' : 'Enter item description!', 'warning');
        return;
    }

    const nextId = supplierPOs.length > 0 ? Math.max(...supplierPOs.map(p => p.id)) + 1 : 501;
    supplierPOs.push({ id: nextId, date, item, supplier, qty, unitPrice, total, scheme, paid, remaining, notes });
    persistState();
    closeModal('modal-supplier-po-add');
    showToast(currentLang === 'ar' ? 'تم تسجيل التحويل المباشر للمورد بنجاح!' : 'Supplier PO saved!', 'success');
}

function deleteSupplierPOItem(id) {
    if (currentUserRole === 'viewer') return;
    supplierPOs = supplierPOs.filter(p => p.id !== id);
    persistState();
}

function printSupplierPOsReport() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;
    const isAr = currentLang === 'ar';
    let rowsHtml = '';
    let sumTotal = 0, sumPaid = 0, sumRem = 0;

    supplierPOs.forEach((po, idx) => {
        sumTotal += Number(po.total) || 0;
        sumPaid += Number(po.paid) || 0;
        sumRem += Number(po.remaining) || 0;
        rowsHtml += `
            <tr>
                <td style="text-align: center !important;">${idx + 1}</td>
                <td style="text-align: center !important;">${po.date}</td>
                <td class="print-item-name"><strong>${trText(po.item)}</strong></td>
                <td>${trText(po.supplier || '—')}</td>
                <td style="text-align: center !important;">${po.qty}</td>
                <td style="text-align: center !important; font-weight: 800;">${Number(po.total).toLocaleString()}</td>
                <td style="text-align: center !important;">${po.scheme}</td>
                <td style="text-align: center !important; font-weight: 800;">${Number(po.paid).toLocaleString()}</td>
                <td style="text-align: center !important; font-weight: 800;">${Number(po.remaining).toLocaleString()}</td>
                <td class="print-notes-col">${po.notes || '—'}</td>
            </tr>
        `;
    });

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="10" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'بيان المشتريات والتحويلات المباشرة للموردين (50% / 70% / 100%)' : 'Direct Supplier Transfers & Split Payments Report',
                                `${isAr ? 'التاريخ:' : 'Date:'} ${getFormattedTodayDate(isAr)}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>التاريخ</th>
                        <th class="print-item-name">اسم الصنف / البيان</th>
                        <th>المورد</th>
                        <th>الكمية</th>
                        <th>الإجمالي</th>
                        <th>النظام</th>
                        <th>المدفوع</th>
                        <th>المتبقي</th>
                        <th class="print-notes-col">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
                <tfoot>
                    <tr>
                        <th colspan="5">الإجمالي العام</th>
                        <th style="text-align: center !important;">${sumTotal.toLocaleString()}</th>
                        <th></th>
                        <th style="text-align: center !important;">${sumPaid.toLocaleString()}</th>
                        <th style="text-align: center !important;">${sumRem.toLocaleString()}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;
    safeWindowPrint();
}

// --- SUB-PANE C: MONTHLY CORE COMPANY EXPENSES ---
function renderMonthlyCoreExpensesTable() {
    const tbody = document.getElementById('monthly-core-tbody');
    const tfoot = document.getElementById('monthly-core-tfoot');
    if (!tbody) return;

    const isAr = currentLang === 'ar';
    const isViewer = currentUserRole === 'viewer';
    tbody.innerHTML = '';
    let totalMonthly = 0;

    monthlyCoreExpenses.forEach((exp, idx) => {
        const amt = Number(exp.amount) || 0;
        totalMonthly += amt;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; font-weight: 800;">${idx + 1}</td>
            <td>
                ${isViewer ? `<strong>${trText(exp.title)}</strong>` : `<input type="text" class="table-input" value="${exp.title}" onchange="updateMonthlyCoreField(${exp.id}, 'title', this.value)" style="font-weight: 800; width: 100%;">`}
            </td>
            <td style="text-align: center;">
                ${isViewer ? `<strong>${amt.toLocaleString()}</strong>` : `<input type="number" class="table-input" value="${amt}" onchange="updateMonthlyCoreField(${exp.id}, 'amount', this.value)" style="text-align: center; font-weight: 900; width: 130px; color: var(--primary);">`}
            </td>
            <td>
                ${isViewer ? `<span>${exp.notes || '—'}</span>` : `<input type="text" class="table-input" value="${exp.notes || ''}" onchange="updateMonthlyCoreField(${exp.id}, 'notes', this.value)" style="width: 100%;">`}
            </td>
            <td style="text-align: center;" class="no-print">
                <button onclick="deleteMonthlyCoreRow(${exp.id})" class="btn btn-sm btn-danger" style="padding: 0.2rem 0.45rem;">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (tfoot) {
        tfoot.innerHTML = `
            <tr>
                <th colspan="2" style="text-align: inherit; font-weight: 900;">${isAr ? 'إجمالي المصروفات الأساسية الشهرية التقديرية' : 'Total Estimated Monthly Core Expenses'}</th>
                <th style="text-align: center; font-weight: 900; font-size: 1rem; color: var(--primary);">${totalMonthly.toLocaleString()} ${isAr ? 'ج.م' : 'EGP'}</th>
                <th colspan="2"></th>
            </tr>
        `;
    }
}

function updateMonthlyCoreField(id, field, val) {
    if (currentUserRole === 'viewer') return;
    const item = monthlyCoreExpenses.find(e => e.id === id);
    if (!item) return;
    item[field] = field === 'amount' ? (Number(val) || 0) : String(val || '').trim();
    persistState();
}

function addMonthlyCoreExpenseRow() {
    if (currentUserRole === 'viewer') return;
    const nextId = monthlyCoreExpenses.length > 0 ? Math.max(...monthlyCoreExpenses.map(e => e.id)) + 1 : 601;
    monthlyCoreExpenses.push({ id: nextId, title: 'بند مصروفات شهرية جديد', amount: 0, notes: 'ثابت شهرياً' });
    persistState();
}

function deleteMonthlyCoreRow(id) {
    if (currentUserRole === 'viewer') return;
    monthlyCoreExpenses = monthlyCoreExpenses.filter(e => e.id !== id);
    persistState();
}

function printMonthlyCoreExpenses() {
    const printArea = document.getElementById('official-print-viewport');
    if (!printArea) return;
    const isAr = currentLang === 'ar';
    let rowsHtml = '';
    let total = 0;

    monthlyCoreExpenses.forEach((e, idx) => {
        const amt = Number(e.amount) || 0;
        total += amt;
        rowsHtml += `
            <tr>
                <td style="text-align: center !important;">${idx + 1}</td>
                <td class="print-item-name"><strong>${trText(e.title)}</strong></td>
                <td style="text-align: center !important; font-weight: 900;">${amt.toLocaleString()} ج.م</td>
                <td class="print-notes-col">${e.notes || '—'}</td>
            </tr>
        `;
    });

    printArea.innerHTML = `
        <div class="voucher-print-container" dir="${isAr ? 'rtl' : 'ltr'}">
            <table class="print-table">
                <thead>
                    <tr>
                        <th colspan="4" style="background:white !important; border:none !important; border-bottom:1.5px solid #1e293b !important; padding:0 0 0.55rem 0 !important;">
                            ${buildCenteredPrintHeader(
                                isAr ? 'بيان المصروفات الأساسية الثابتة للشركة كل شهر' : 'Company Monthly Core Expenses Statement',
                                `${isAr ? 'التاريخ:' : 'Date:'} ${getFormattedTodayDate(isAr)}`
                            )}
                        </th>
                    </tr>
                    <tr>
                        <th>م</th>
                        <th class="print-item-name">البند / البيان الشهري</th>
                        <th style="text-align: center !important;">القيمة الشهرية التقديرية</th>
                        <th class="print-notes-col">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
                <tfoot>
                    <tr>
                        <th colspan="2">الإجمالي الشهري</th>
                        <th style="text-align: center !important; font-weight: 900;">${total.toLocaleString()} ج.م</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
            <div class="voucher-signatures">
                <div class="sig-line">${isAr ? 'مدير المرافق' : 'Facilities Manager'}</div>
            </div>
        </div>
    `;
    safeWindowPrint();
}
