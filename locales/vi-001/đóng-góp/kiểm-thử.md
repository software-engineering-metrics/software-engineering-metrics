# Kiểm thử: bộ xác thực

## Chạy nó

```sh
just test
# hoặc
python3 tests/validate.py
```

Nó chạy từ bất kỳ đâu và chỉ cần Python 3 (không gói bên thứ ba, không cần mạng).
Nó in một dòng cho mỗi kiểm tra và thoát với mã khác không nếu bất kỳ kiểm tra
nào thất bại, nên dùng được trong CI và như một hook pre-commit.

## Nó kiểm tra gì

- **Số chủ đề mong đợi** (hằng số ở đầu tập lệnh).
- **Đánh số liên tục** trong mỗi phần, bắt đầu từ N.0.
- **H1 khớp với tên tệp** về số thập phân ở mọi chủ đề.
- **Tiêu đề H1 khớp với `spec/structure.md`** từng ký tự, không chỉ số thập phân
  đứng đầu.
- **Các mục bắt buộc** có mặt trong mọi chủ đề nội dung (Phần 1 đến 8, chủ đề N.1
  trở lên), **đúng theo thứ tự của mẫu**.
- **Số từ tối thiểu** cho mọi chủ đề nội dung (1.500 từ), với một danh sách cho
  phép trong tập lệnh cho các ngoại lệ có chủ đích.
- **Không có dấu gạch ngang dài** trong bất kỳ tệp Markdown nào.
- **Dấu gạch ngang ngắn chỉ giữa các chữ số**, nên "2.1–2.8" đạt còn mọi thứ khác
  thất bại.
- **Không có cụm từ bị cấm** ("not only", "but also", "load-bearing").
- **Mọi liên kết `.md` nội bộ phân giải được.**
- **Tham chiếu chéo trong văn xuôi trỏ đến các chủ đề có thật**: một tham chiếu
  đến số chủ đề không có tệp tương ứng trên đĩa sẽ thất bại, dùng cùng mẫu tham
  chiếu mà tính năng tự động liên kết chủ đề của trang đã xuất bản dùng.
- **Liên kết Wikipedia đúng dạng** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` khớp với các tệp trên đĩa**, theo cả hai chiều.
- **README, trang chủ và trang nội dung liên kết đến mọi chủ đề.**

## Khi một kiểm tra thất bại

Dòng thất bại nêu tên tệp và vấn đề. Các cách sửa thường gặp:

- Tìm thấy dấu gạch ngang dài: viết lại câu để bỏ "—". Đừng chỉ xóa nó.
- Thiếu mục: thêm mục `##` còn thiếu từ mẫu chủ đề.
- Cấu trúc không khớp: bạn đã thêm hoặc đổi tên một chủ đề mà không cập nhật
  `spec/structure.md`, hoặc ngược lại. Hãy đưa chúng về lại cho khớp.
- Liên kết hỏng: sửa đường dẫn, hoặc cập nhật sau khi đổi tên.
- Khoảng hở trong đánh số: đánh số lại để phần liên tục từ N.0.

## Ngoài bộ xác thực

- `just spell` chạy [codespell](https://github.com/codespell-project/codespell)
  trên toàn kho. Cấu hình, gồm danh sách bỏ qua các dương tính giả, là mục
  `[tool.codespell]` trong `pyproject.toml`.
- `just stats` in một báo cáo Markdown (số từ theo chủ đề, các chủ đề mỏng, liên
  kết Wikipedia, các mục tài liệu tham khảo) từ `tools/stats.py`.

## Tích hợp liên tục

- `.github/workflows/test.yml` chạy ở mọi pull request và ở các lần push lên nhánh
  không phải main: bộ xác thực và codespell. Kho này không build hay triển khai
  trang; việc kết xuất diễn ra ở kho riêng `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` kiểm tra liên kết ngoài hằng tuần bằng
  [lychee](https://github.com/lycheeverse/lychee) (các mẫu bỏ qua trong
  `.lycheeignore`) và giữ kết quả trong một issue "Link checker report" duy nhất.
  Liên kết ngoài cố ý không nằm trong đường đi của PR.

## Những gì các kiểm thử không bao phủ

Bộ kiểm thử kiểm tra cấu trúc và văn phong, không kiểm tra sự thật. Nó không thể
biết một tài liệu tham khảo có thật hay không hay văn xuôi có chính xác không. Hãy
kiểm chứng trích dẫn và sự kiện bằng tay hoặc bằng một lượt nghiên cứu. Việc liên
kết Wikipedia có tồn tại hay không (khác với dạng liên kết) cũng cần kiểm tra qua
mạng, điều mà bộ kiểm thử cố ý bỏ ra ngoài để chạy được ngoại tuyến.
