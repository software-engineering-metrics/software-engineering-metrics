# 7.0 Giới thiệu Phần 7: Chỉ số trong kỷ nguyên AI

Mọi chỉ số trong cuốn sách này cho đến giờ đều được xây cho một thế giới nơi viết mã là nguồn lực khan hiếm, tốn công sức. Các công cụ
AI sinh tạo đã thay đổi tiền đề đó nhanh hơn hầu hết các chỉ số của các tổ chức theo kịp. Khi một công cụ có thể tạo ra một pull request
trông hợp lý trong vài giây, nhiều chỉ số mà cuốn sách này bàn ở các phần trước, trực tiếp nhất là số đếm hoạt động (chủ đề 3.4), và ở
mức đáng kể là tần suất triển khai thô (chủ đề 2.10) và thậm chí độ bao phủ kiểm thử (chủ đề 4.2) nếu theo đuổi bất cẩn, thôi đo điều
chúng từng đo. Phần này tồn tại vì một chương trình chỉ số không tường minh tính đến sự chuyển dịch này có nguy cơ tự tin báo cáo những
con số đã lặng lẽ trở nên vô nghĩa, hoặc tệ hơn, phản tác dụng một cách chủ động.

Bốn chủ đề của phần này theo một mạch có chủ đích. Chủ đề 7.1 gọi tên trực tiếp sự chuyển dịch và giải thích vì sao đó là một sự thay đổi
mô hình chứ không phải một điều chỉnh từng bước. Chủ đề 7.2 bàn cách thực sự đo xem phát triển có AI hỗ trợ có giúp ích không, dùng kỷ
luật kết quả hơn đầu ra mà chủ đề 1.3 đã xác lập từ rất đầu cuốn sách này. Chủ đề 7.3 gọi tên các rủi ro mới cụ thể mà sự chuyển dịch
này đưa vào: các chỉ số phình lên mà không có giá trị tương ứng, và sự pha loãng chất lượng vượt khả năng phát hiện hiện tại của ngành.
Chủ đề 7.4 khép phần bằng câu trả lời của cuốn sách này cho toàn bộ sự chuyển dịch: một bước chuyển hướng có chủ đích sang dữ liệu viễn
trắc kết quả như những chỉ số quan trọng nhất, chính vì khối lượng đầu ra, như phần này lập luận xuyên suốt, chưa bao giờ là thứ đúng để
tối ưu hóa ngay từ đầu, và AI sinh tạo đơn giản là khiến sự thật đó không thể bỏ qua thêm nữa.

Với các đội lớn, phần này cấp bách chứ không phải suy đoán. Các tổ chức doanh nghiệp áp dụng trợ lý lập trình AI ở quy mô lớn cần biết
nhanh liệu các chỉ số hiện có của họ có còn nghĩa như họ nghĩ không; các tổ chức chính phủ, thường thận trọng hơn khi áp dụng AI nhưng
đối mặt với cùng sự chuyển dịch công cụ nền trong ngành rộng hơn mà họ tuyển dụng và đối chuẩn, cần hướng dẫn của phần này để diễn giải
đúng các chuẩn ngành khi chính những chuẩn đó dịch chuyển dưới cùng áp lực.

## Các chủ đề trong phần này

- **7.1 Sự chuyển dịch mô hình của AI sinh tạo:** Vì sao đây là một thay đổi cơ bản về điều một số chỉ số hiện có đo, không chỉ là một
  công cụ mới để thêm vào hộp đồ nghề.
- **7.2 Đo lường phát triển phần mềm có AI hỗ trợ:** Cách đo xem sự hỗ trợ của AI có thực sự giúp ích không, dùng dữ liệu kết quả thay vì
  khối lượng đầu ra.
- **7.3 Rủi ro thổi phồng chỉ số và pha loãng chất lượng:** Những rủi ro lách chỉ số và chất lượng mới cụ thể mà sự chuyển dịch này đưa
  vào, và cách đề phòng chúng.
- **7.4 Dữ liệu viễn trắc kết quả như kim chỉ nam mới:** Câu trả lời của cuốn sách này cho toàn bộ sự chuyển dịch: một bước chuyển hướng
  có chủ đích, lâu dài sang các chỉ số kết quả khi đầu ra trở nên rẻ.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 7.1 xác lập vì sao phần này tồn tại; chủ đề 7.2 đưa ra hướng dẫn đo lường thực tế mà sự chuyển dịch đòi hỏi; chủ đề 7.3 gọi tên
các kiểu thất bại cụ thể mà một tổ chức cần đề phòng khi áp dụng phát triển có AI hỗ trợ; và chủ đề 7.4 khái quát bài học thành một
nguyên tắc lâu dài sống lâu hơn bất kỳ công cụ hay nhà cung cấp cụ thể nào. Phần này ít là một họ chỉ số độc lập, theo cách các Phần 2
đến 6 mỗi phần bao quát một lĩnh vực riêng, mà giống một thấu kính áp ngược lên toàn bộ cuốn sách hơn: các chỉ số hoạt động, đầu ra, và
thậm chí một số chỉ số kết quả của mọi chủ đề trước cần được xem xét lại qua các câu hỏi của phần này khi phát triển có AI hỗ trợ trở
thành thực hành tiêu chuẩn, không còn là ngoại lệ.

Phần này nối trực tiếp nhất trở lại nguyên tắc kết quả hơn đầu ra của chủ đề 1.3 và lời cảnh báo của chủ đề 3.4 chống lại các chỉ số hoạt
động, cả hai đều được phần này coi là đúng từ đầu, nay được chứng minh một cách cấp bách bởi một sự chuyển dịch công nghệ khiến điều
ngược lại, đo theo khối lượng, trở nên nguy hiểm một cách chủ động thay vì chỉ dưới mức tối ưu. Nó cũng dọn đường cho hướng dẫn thực tế
của Phần 8 về xây dựng một chương trình chỉ số, vì một bảng điều khiển được thiết kế trước sự chuyển dịch này cần được cân nhắc lại có
chủ đích, không chỉ điều chỉnh từng bước, theo những gì phần này bàn.
