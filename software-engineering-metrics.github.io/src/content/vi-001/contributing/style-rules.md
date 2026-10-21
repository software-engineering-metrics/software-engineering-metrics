# Quy tắc văn phong (dùng chung, có thể thực thi)

Văn phong của nhà xuất bản gom ở một chỗ. Các mục đánh dấu "(test)" được
`tests/validate.py` thực thi; vi phạm sẽ làm hỏng bản build. Bản kể đầy đủ là
`spec/conventions.md` ở gốc kho.

## Quy tắc cứng

- **Không dùng dấu gạch ngang dài.** Không bao giờ dùng "—" (U+2014). Hãy dùng
  dấu phẩy, dấu hai chấm, dấu ngoặc đơn hoặc hai câu. Dấu gạch ngang ngắn "–" chỉ
  được phép trong khoảng số như `1–9` hay `2.1–2.8`. (test)
- **Không dùng lối nói sáo rỗng.** Không dùng "not only ... but also", "but also"
  hay "load-bearing". Tránh "It's important to note", "In today's fast-paced
  world", "It's crucial to consider", "It appears that", "One could argue", và
  công thức "it's not just X, it's Y". (test, với ba cụm đầu)
- **Định nghĩa thuật ngữ ngay lần đầu dùng.** Viết rõ từ viết tắt và định nghĩa
  biệt ngữ ở lần đầu mỗi chủ đề dùng chúng, ví dụ "thời gian trung bình để phục
  hồi (MTTR)."
- **Liên kết khái niệm chính đến Wikipedia** ở lần nhắc đầu tiên, một lần cho mỗi
  chủ đề, chỉ trong văn xuôi. Dạng: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Không bao giờ trong tiêu đề, bảng, mã, hay mục tài liệu tham khảo. (dạng liên
  kết là một test)
- **Chỉ dùng tài liệu tham khảo có thật.** Tác giả và tựa đề của các tác phẩm
  thật. Không tựa đề, tác giả hay URL bịa đặt.
- **Nêu tên véc-tơ bị lách.** Một chủ đề về họ chỉ số nêu chỉ số bị lách thế nào
  và rào chắn nào bắt được điều đó (chủ đề 1.2).

## Giọng văn

- Ấm áp, trực tiếp, khích lệ. Gọi người đọc là "bạn." Câu ngắn, từ giản dị. Nêu
  ý chính trước.
- Có chính kiến và thực tế. Trung lập với nhà cung cấp. Chỉ nêu tên sản phẩm như
  ví dụ thực tế.

## Cấu trúc (test)

- Các chủ đề nội dung dùng đúng thứ tự mục trong
  [`mẫu-chủ-đề.md`](chapter-template.md).
- Tiêu đề đầu tiên là `# N.M Title` (số chủ đề có dấu chấm), và nó khớp với tiền
  tố `PP-CC` đệm số không của tệp.
- Việc đánh số trong mỗi phần liên tục và bắt đầu từ N.0.

## Sau khi sửa

- Nếu bạn đã đổi tập hợp chủ đề, hãy cập nhật `spec/structure.md` và chạy
  `just nav`.
- Luôn chạy `just test`.
