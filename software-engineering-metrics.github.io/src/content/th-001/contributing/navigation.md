# การนำทาง: ไฟล์ที่สร้างอัตโนมัติทำงานอย่างไร

ในแต่ละ locale มีไฟล์นำทางสี่ไฟล์ที่สร้างจากหัวข้อของ locale นั้น ไม่ได้เขียนด้วยมือ
(บวก `README.md` ซึ่งสร้างครั้งเดียวสำหรับ locale อ้างอิง `en-gb-oxendict`):

- `README.md` (สารบัญบนหน้าแรกของ repository เฉพาะ locale อ้างอิง)
- `locales/<locale>/index.md` (หน้าแรกของเว็บไซต์ที่เผยแพร่)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (ดัชนีเรื่อง พร้อมลิงก์)

สร้างโดย
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)
อย่าแก้ด้วยมือ เพราะการสร้างครั้งต่อไปจะเขียนทับการแก้ของคุณ

## เมื่อไรควรสร้างใหม่

รัน `just nav` (หรือ `python3 tools/gen_nav.py`) ทุกครั้งที่คุณ:

- เพิ่ม ลบ เปลี่ยนชื่อ หรือเปลี่ยนเลขหัวข้อ หรือ
- เปลี่ยนหัวเรื่อง `# N.M Title` ของหัวข้อ (สารบัญใช้ข้อความนี้)

รัน `python3 tools/localize.py` ก่อน หากคุณแก้อะไรก็ตามใต้ `locales/en-gb-oxendict/`
เพื่อให้หัวข้อของอีกสาม locale (และชื่อเรื่องที่สร้างอัตโนมัติ) เป็นปัจจุบันก่อนที่ `gen_nav.py` จะอ่าน
ดู [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)

## วิธีทำงาน

สำหรับแต่ละ locale `gen_nav.py` อ่านไฟล์ `locales/<locale>/topics/*.md` ทุกไฟล์
เรียงตามเลขทศนิยม จัดกลุ่มตามส่วน แล้ว:

- สร้างสารบัญแยกตามส่วนจากชื่อเรื่อง H1 ของแต่ละหัวข้อ
- เขียนลงใน `locales/<locale>/index.md` และ
  `locales/<locale>/front-matter/table-of-contents.md` (และ `README.md` เฉพาะ locale อ้างอิง)
- สแกนหัวข้อเนื้อหา (ส่วนที่ 1 ถึง 8) เพื่อหาคำสำคัญตามรายการที่กำหนด
  และเขียนดัชนีเรื่องลงใน `locales/<locale>/topics/09-07-index.md`

ข้อความแม่แบบที่ใช้ร่วมกัน (ย่อหน้านำ "วิธีอ่านหนังสือเล่มนี้" "ธีมที่ทุกหัวข้อมีร่วมกัน"
และชื่อส่วน) ถูกแปลงเป็นภาษาของ locale ด้วยวิธีเดียวกับเนื้อหาของหัวข้อ ผ่านฟังก์ชัน locale ของ
`tools/localize.py` หน้าที่สร้างจึงอ่านเป็นธรรมชาติในแต่ละ locale

ชื่อส่วนอยู่ในดิกชันนารี `PART_TITLES` ใกล้ต้นสคริปต์
ตัวสร้างใช้หัวเรื่องส่วนแบบมีมหัพภาคคู่ ("Part 2: Delivery and Flow
Metrics") ไม่ใช้เส้นประยาวเลย

## สิ่งที่มันไม่แตะ

ข้อกำหนดที่ราก repository (`spec/index.md`, `spec/structure.md`
และไฟล์คู่กัน) เขียนด้วยมือและเป็นแหล่งความจริง ตัวสร้างไม่เขียนทับมัน
และมันไม่ได้อยู่ในเว็บไซต์ที่เผยแพร่ หากคุณเปลี่ยนโครงสร้าง ให้แก้
`spec/structure.md` เอง แล้วรัน `just nav` สำหรับไฟล์ที่สร้างตามมา
และ `just test` เพื่อยืนยันว่าทุกอย่างตรงกัน
