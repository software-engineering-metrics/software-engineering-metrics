# Về dự án này

Tài liệu dự án của cuốn sách: nó được ghép lại như thế nào, cách build và kiểm
tra, và nơi nguồn sự thật nằm. Về nội dung cuốn sách, xem
[mục lục](../index.md).

## Bản đồ dự án

- **Cuốn sách:** được xuất bản bằng bốn locale dưới `locales/`; xem
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Locale này, `en-gb-oxendict/topics/` (63 tệp), `en-gb-oxendict/front-matter/`,
  và các phụ lục ở Phần 9 là nguồn tự biên soạn; `en-001`, `en-gb` và `en-us`
  được suy ra từ nó.
- **Nguồn sự thật:** `spec/` ở gốc kho (không xuất bản lên trang). Cấu trúc được
  khai báo trong `spec/structure.md`, quy tắc viết trong `spec/conventions.md`,
  và chính tả trong `spec/oxford-spelling.md`. Mọi thứ khác được xây cho khớp với
  chúng.
- **Công cụ:** `tools/localize.py` suy ra ba locale còn lại;
  `tools/gen_nav.py` sinh điều hướng; `tests/validate.py` thực thi đặc tả;
  `justfile` nối chúng lại với nhau.
- **Hướng dẫn đóng góp:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  ở gốc kho, và các hướng dẫn trong
  [phần đóng góp](../contributing/index.md).

## Build và kiểm tra

Bộ xác thực chạy trên Python 3, không cần phụ thuộc nào khác và không cần mạng.
Các tác vụ chạy qua [just](https://github.com/casey/just).

```sh
just test    # xác thực cấu trúc, văn phong, liên kết và đặc tả so với đĩa
just nav     # sinh lại các tệp điều hướng được sinh ra
just check   # nav, rồi test
just stats   # số chủ đề và số từ
```

Kho này chứa nội dung và đặc tả của cuốn sách. Nó được kết xuất thành một trang
web bởi kho riêng
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Phát triển dựa trên đặc tả hoạt động ở đây như thế nào

Đặc tả đi trước. `spec/structure.md` nói những chủ đề nào tồn tại và được đánh số
ra sao. `spec/conventions.md` nói chúng phải được viết thế nào. Các chủ đề được
biên soạn để thỏa mãn cả hai. `tools/gen_nav.py` suy ra điều hướng từ các chủ đề,
và `tests/validate.py` kiểm tra lại kết quả so với đặc tả. Nếu các chủ đề và đặc
tả bất đồng, các kiểm thử sẽ thất bại, đó là tín hiệu để đưa chúng về lại cho
khớp.

Điều này ngăn sự trôi lệch: một thay đổi chỉ "xong" khi đặc tả, các chủ đề, điều
hướng được sinh ra và các kiểm thử đều đồng ý.

## Các quyết định thiết kế đáng biết

- **Chủ đề phẳng, đánh số thập phân.** Các tệp là
  `locales/<locale>/topics/PP-CC-slug.md`, cùng slug ở mọi locale. Phần là số
  nguyên; chủ đề là số thập phân; N.0 là phần giới thiệu. Điều này giữ định danh
  ổn định và cho phép công cụ sắp xếp và nhóm mà không cần cây thư mục.
- **Một locale tự biên soạn, ba locale suy ra.** `en-gb-oxendict` dùng chính tả
  Oxford, văn phong của hầu hết các tổ chức tiêu chuẩn quốc tế (xem
  `spec/oxford-spelling.md`); `en-001`, `en-gb` và `en-us` được suy ra từ nó một
  cách cơ học, nên bản dịch không bao giờ trôi khỏi nguồn.
- **Điều hướng được sinh ra.** Mục lục, trang nội dung và chỉ mục chủ đề đều được
  sinh ra, nên không bao giờ trôi khỏi các chủ đề.
- **Kiểm thử ngoại tuyến, không phụ thuộc.** Bộ kiểm thử chỉ dùng thư viện chuẩn
  nên chạy được ở bất kỳ đâu, kể cả CI và các hook pre-commit.
- **Tham chiếu chéo giữ ở dạng văn bản thường.** Văn xuôi nhắc đến chủ đề bằng số
  thập phân ("xem chủ đề 2.1"), như đặc tả yêu cầu; trang kết xuất chịu trách
  nhiệm biến các tham chiếu đó thành liên kết.
- **Không dùng dấu gạch ngang dài, theo quy tắc và theo kiểm thử.** Một lựa chọn
  văn phong có chủ đích, được thực thi để nó luôn đúng khi cuốn sách lớn lên.
- **Mỗi họ chỉ số nêu tên véc-tơ bị lách của chính nó.** Đây là quy tắc duy nhất
  trong mẫu không có tương đương ở dự án anh em `software-engineering-guide`: nó
  tồn tại vì toàn bộ chủ đề của cuốn sách này là đo lường, nên rủi ro của chính
  việc đo lường phải là hạng nhất, không phải ngầm định.

## Đọc thêm

- [Biên soạn](../contributing/authoring.md) : viết và sửa chủ đề.
- [Điều hướng](../contributing/navigation.md) : các tệp được sinh ra hoạt động ra sao.
- [Kiểm thử](../contributing/testing.md) : các kiểm thử kiểm tra gì và cách sửa lỗi.
- [Ví dụ](../examples/index.md) : các ví dụ nhỏ, cụ thể.
- [Nhật ký thay đổi](changelog.md) : lịch sử các thay đổi đáng chú ý.
