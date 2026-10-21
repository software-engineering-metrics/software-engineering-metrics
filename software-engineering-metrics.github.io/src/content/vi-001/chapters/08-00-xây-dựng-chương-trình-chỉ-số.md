# 8.0 Giới thiệu Phần 8: Xây dựng chương trình chỉ số

Mỗi phần trước của cuốn sách này đã bao quát một họ chỉ số một cách chuyên sâu: đo gì, nó bị lách thế nào, và rào chắn nào bắt được việc
lách đó. Phần nội dung chính cuối cùng này chuyển từ việc đo *gì* sang *cách* xây dựng và vận hành chương trình tổ chức đưa tất cả vào
thực hành. Một tổ chức đã đọc mọi chủ đề của cuốn sách này nhưng không bao giờ xây bảng điều khiển, quyết định về công cụ, kế hoạch triển
khai và lộ trình trưởng thành mà phần này bàn thì có kiến thức xuất sắc mà không có chương trình chỉ số nào vận hành được. Phần này tồn
tại để đóng khoảng trống đó.

Năm chủ đề ở đây theo trình tự tự nhiên của việc thực sự xây một chương trình chỉ số từ đầu, hoặc sửa một chương trình đã trôi xa khỏi
các nguyên tắc của cuốn sách này. Chủ đề 8.1 bàn riêng thiết kế bảng điều khiển, biến nhiều chỉ số từ Phần 1 đến 7 thành một bộ góc
nhìn mạch lạc, trung thực, dùng được. Chủ đề 8.2 bàn quyết định tự xây hay mua mà mọi tổ chức rốt cuộc đều đối mặt cho công cụ chỉ số của
mình. Chủ đề 8.3 là chủ đề hướng về con người nhất của cuốn sách này, bàn trực tiếp nỗi sợ mà việc triển khai chỉ số có thể gây ra và
cách ngăn nỗi sợ đó làm hỏng chính dữ liệu mà chương trình phụ thuộc vào, vang lại các lời cảnh báo của chủ đề 1.2 xuyên suốt cuốn sách.
Chủ đề 8.4 hợp nhất mô hình trưởng thành năm cấp của mọi chủ đề thành một khung mạch lạc duy nhất để tổ chức tự đánh giá. Chủ đề 8.5 khép
nội dung chính của cuốn sách bằng một lộ trình áp dụng cụ thể, có trình tự.

Với các đội lớn, phần này là nơi các ý tưởng của cuốn sách này hoặc trở thành thực hành tổ chức bền vững hoặc vẫn là một tài liệu thỏa
mãn trí tuệ mà không ai thực sự triển khai. Các tổ chức doanh nghiệp và chính phủ, với quy mô của mình và rủi ro thật rằng các biện pháp
nửa vời tạo ra kết quả tệ hơn không có chương trình chỉ số nào (cảnh báo trung tâm của chủ đề 8.3), dựa vào hướng dẫn thực tế của phần
này để chuyển các nguyên tắc của cuốn sách thành một đợt triển khai thực sự hiệu quả, thay vì một đợt gây nỗi sợ, tạo ra dữ liệu bị
lách, và xác nhận giả định tệ nhất của mọi người hoài nghi về điều một chương trình chỉ số làm với một đội.

## Các chủ đề trong phần này

- **8.1 Thiết kế bảng điều khiển chỉ số kỹ thuật:** Biến nhiều chỉ số của cuốn sách này thành một bộ góc nhìn mạch lạc, trung thực, hành
  động được cho các đối tượng khác nhau.
- **8.2 Bức tranh công cụ: tự xây hay mua:** Các đánh đổi thật trong việc chọn hay xây công cụ chỉ số, và cách quyết định.
- **8.3 Triển khai chỉ số mà không gây nỗi sợ:** Chủ đề thực tế quan trọng nhất của phần này, về việc ngăn một chương trình chỉ số gây ra
  chính hành vi lách mà cuốn sách này đã cảnh báo xuyên suốt.
- **8.4 Mô hình trưởng thành cho các chương trình chỉ số kỹ thuật:** Một khung trưởng thành năm cấp hợp nhất, tổng hợp mô hình riêng của
  từng chủ đề.
- **8.5 Lộ trình áp dụng từng bước:** Một con đường cụ thể, theo giai đoạn, có trình tự từ nơi tổ chức của bạn hiện đứng đến một chương
  trình chỉ số trưởng thành.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 8.1 là nơi các họ chỉ số trừu tượng từ Phần 1 đến 7 trở thành một sản phẩm cụ thể, một bảng điều khiển, mà người thật thực sự nhìn
vào. Chủ đề 8.2 bàn quyết định công cụ mà bảng điều khiển đó phụ thuộc vào. Chủ đề 8.3 là chủ đề bản lề của phần này: nó bàn các động lực
con người và tổ chức quyết định liệu mọi thứ cuốn sách này khuyến nghị có tạo ra dữ liệu đáng tin hay bị nỗi sợ lặng lẽ làm hỏng, nối
trực tiếp trở lại lời cảnh báo định luật Goodhart của chủ đề 1.2 đã mở đầu cả cuốn sách này. Chủ đề 8.4 hợp nhất khung đánh giá mà mỗi chủ
đề trước đã đưa ra riêng lẻ, và chủ đề 8.5 biến đánh giá hợp nhất đó thành một kế hoạch thật, có trình tự.

Phần này cũng là nơi các phụ lục của cuốn sách này (Phần 9) hữu ích trực tiếp nhất: các mẫu (chủ đề 9.4) và danh sách kiểm tra (chủ đề
9.3) mà cuốn sách này cung cấp được xây riêng để hỗ trợ công việc triển khai mà phần này mô tả, và bản tự đánh giá trưởng thành hợp nhất
(chủ đề 9.5) là bạn đồng hành trực tiếp của khung chủ đề 8.4. Hãy đọc phần này như câu trả lời của cuốn sách này cho câu hỏi mà mọi phần
trước đã ngầm nêu: giờ bạn đã biết đo gì và đo nó trung thực thế nào, làm sao bạn thực sự xây tổ chức làm được điều đó, bền vững, ở quy
mô lớn, mà không để cả nỗ lực sụp đổ dưới chính áp lực lách mà chủ đề 1.2 đã cảnh báo từ trang đầu tiên.
