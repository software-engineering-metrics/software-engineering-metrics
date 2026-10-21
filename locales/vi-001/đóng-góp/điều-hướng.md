# Điều hướng: các tệp được sinh ra hoạt động như thế nào

Với mỗi locale, bốn sản phẩm điều hướng được sinh ra từ các chủ đề của locale đó,
không viết tay (cộng với `README.md`, sinh một lần cho locale tham chiếu,
`en-gb-oxendict`):

- `README.md` (mục lục trên trang chủ của kho; chỉ locale tham chiếu)
- `locales/<locale>/index.md` (trang chủ của trang đã xuất bản)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (chỉ mục chủ đề, có liên kết)

Chúng được tạo bởi
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Đừng sửa tay, vì lần sinh tiếp theo sẽ ghi đè thay đổi của bạn.

## Khi nào cần sinh lại

Chạy `just nav` (hoặc `python3 tools/gen_nav.py`) bất cứ khi nào bạn:

- thêm, xóa, đổi tên hoặc đánh số lại một chủ đề, hoặc
- đổi tiêu đề `# N.M Title` của một chủ đề (mục lục dùng nó).

Hãy chạy `python3 tools/localize.py` trước nếu bạn đã đổi bất cứ thứ gì dưới
`locales/en-gb-oxendict/`, để các chủ đề của ba locale còn lại (và tiêu đề được
sinh của chúng) được cập nhật trước khi `gen_nav.py` đọc; xem
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Cách hoạt động

Với mỗi locale, `gen_nav.py` đọc mọi tệp `locales/<locale>/topics/*.md`, sắp xếp
theo số thập phân, nhóm theo phần, và:

- dựng mục lục theo từng phần từ tiêu đề H1 của mỗi chủ đề,
- ghi nó vào `locales/<locale>/index.md` và
  `locales/<locale>/front-matter/table-of-contents.md` (và, chỉ với locale tham
  chiếu, `README.md`),
- quét các chủ đề nội dung (Phần 1 đến 8) tìm một danh sách cố định các thuật ngữ
  chính và ghi chỉ mục chủ đề vào `locales/<locale>/topics/09-07-index.md`.

Phần văn bản mẫu dùng chung (đoạn giới thiệu, "Cách đọc cuốn sách này", "Các chủ
đề xuyên suốt" và tiêu đề các phần) được bản địa hóa giống như văn xuôi của chủ
đề, qua các hàm locale của `tools/localize.py`, để các trang được sinh đọc tự
nhiên ở mỗi locale.

Tiêu đề các phần nằm trong từ điển `PART_TITLES` gần đầu tập lệnh. Bộ sinh dùng
tiêu đề phần kiểu dấu hai chấm ("Part 2: Delivery and Flow Metrics"), không bao
giờ dùng dấu gạch ngang dài.

## Những gì nó không đụng đến

Đặc tả ở gốc kho (`spec/index.md`, `spec/structure.md` và các tệp đi kèm) là nguồn
sự thật tự biên soạn. Bộ sinh không ghi vào nó, và nó không thuộc trang đã xuất
bản. Nếu bạn đổi cấu trúc, hãy tự cập nhật `spec/structure.md`, rồi chạy
`just nav` cho các tệp suy ra và `just test` để xác nhận mọi thứ khớp nhau.
