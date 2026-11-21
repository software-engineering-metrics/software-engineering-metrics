# ניווט: איך הקבצים שנוצרים אוטומטית עובדים

בכל לוקאל נוצרים ארבעה פריטי ניווט מתוך הנושאים של אותו לוקאל, ולא נכתבים ביד (ובנוסף `README.md`, שנוצר פעם אחת בלבד עבור לוקאל הייחוס `en-gb-oxendict`):

- `README.md` (תוכן העניינים בדף הבית של המאגר; לוקאל הייחוס בלבד)
- `locales/<locale>/index.md` (דף הבית של האתר המפורסם)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (מפתח הנושאים, עם קישורים)

הם נוצרים בעזרת [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). אל תערכו אותם ביד, כי הייצור הבא ידרוס את השינוי שלכם.

## מתי להריץ מחדש

הריצו `just nav` (או `python3 tools/gen_nav.py`) בכל פעם ש:

- אתם מוסיפים, מסירים, משנים שם או משנים מספר של נושא, או
- משנים את כותרת `# N.M Title` של נושא (תוכן העניינים משתמש בה).

הריצו קודם `python3 tools/localize.py` אם שיניתם משהו תחת `locales/en-gb-oxendict/`, כדי ששלושת הלוקאלים האחרים (והכותרות שנוצרו שלהם) יהיו מעודכנים לפני ש-`gen_nav.py` קורא אותם; ראו [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## איך זה עובד

לכל לוקאל, `gen_nav.py` קורא כל קובץ `locales/<locale>/topics/*.md`, ממיין לפי המספר העשרוני, מקבץ לפי חלק, ו:

- בונה את תוכן העניינים לפי חלקים מתוך כותרת H1 של כל נושא,
- כותב אותו אל `locales/<locale>/index.md` ואל `locales/<locale>/front-matter/table-of-contents.md` (ולמען לוקאל הייחוס בלבד, אל `README.md`),
- סורק את הנושאים המהותיים (חלקים 1 עד 8) אחר רשימה קבועה של מונחי מפתח וכותב את מפתח הנושאים אל `locales/<locale>/topics/09-07-index.md`.

טקסט התבנית המשותף (פסקת הפתיחה, "איך לקרוא את הספר", "נושאים רוחביים" ושמות החלקים) עובר לוקליזציה באותו אופן כמו פרוזת הנושאים, דרך פונקציות הלוקאל של `tools/localize.py`, כך שהדפים שנוצרים נקראים טבעי בכל לוקאל.

שמות החלקים נמצאים במילון `PART_TITLES` בראש הסקריפט. הסקריפט משתמש בכותרות חלקים בסגנון נקודתיים ("Part 2: Delivery and Flow Metrics"), לעולם לא במקפים ארוכים.

## מה הוא לא נוגע בו

המפרט בשורש המאגר (`spec/index.md`, `spec/structure.md` ובני לוויתם) הוא מקור האמת הערוך ביד. הסקריפט לא כותב אותו, והוא לא חלק מהאתר המפורסם. אם שיניתם את המבנה, עדכנו את `spec/structure.md` בעצמכם, ואז הריצו `just nav` לקבצים הנגזרים ו-`just test` כדי לוודא שהכול מתיישר.
