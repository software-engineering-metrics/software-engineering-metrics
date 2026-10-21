# 5.0 Giới thiệu Phần 5: Chỉ số sản phẩm và kinh doanh

Bốn phần đầu của cuốn sách này đo thế giới nội bộ của kỹ thuật: phân phối, trải nghiệm lập trình viên và chất lượng mã. Phần này bước
ra ngoài ranh giới đó và đặt câu hỏi mà mọi chỉ số kỹ thuật rốt cuộc tồn tại để phục vụ, dù trực tiếp hay qua nhiều bước: công việc
này có thực sự giúp ích cho doanh nghiệp và những người dùng thứ nó xây ra hay không. Chủ đề 1.3 đã xác lập kết quả hơn đầu ra như một
nguyên tắc chi phối ngay từ đầu cuốn sách; phần này là nơi nguyên tắc đó gặp phép thử sắc nhất của nó, vì kết quả sản phẩm và kinh
doanh xa nhất với sự kiểm soát trực tiếp của bất kỳ kỹ sư đơn lẻ nào và khó quy rõ ràng nhất về công sức kỹ thuật.

Chính sự khó khăn đó là lý do phần này quan trọng. Một tổ chức không bao giờ nối các chỉ số phân phối và chất lượng của mình với kết
quả sản phẩm và kinh doanh có nguy cơ tối ưu hóa tuyệt đẹp cho điều sai: giao nhanh, với độ bao phủ kiểm thử xuất sắc, một tính năng
không ai dùng, hoặc duy trì chất lượng mã hoàn hảo trong một hệ thống mà giá trị cốt lõi đã lặng lẽ thôi còn quan trọng với khách hàng.
Năm chủ đề của phần này, lỗi lọt, mức áp dụng tính năng, kết quả khách hàng và kinh doanh, kinh tế đơn vị, và lợi tức đầu tư, cho lãnh
đạo kỹ thuật một vốn từ cho sự kết nối đó, và cho lãnh đạo kinh doanh một cách đánh giá đầu tư kỹ thuật theo những điều kiện thực sự
quan trọng với họ.

Với các đội lớn, phần này thường là nơi uy tín của cả một chương trình chỉ số được giành hoặc mất với các bên liên quan cấp điều hành.
Lãnh đạo doanh nghiệp phê duyệt các khoản đầu tư nền tảng hàng triệu đô la, và các cơ quan giám sát chính phủ phê duyệt ngân sách công
nghệ công, đều cần câu trả lời được diễn đạt theo kết quả kinh doanh hay kết quả của công dân, không phải tần suất triển khai hay độ bao
phủ kiểm thử, dù các chỉ số nội bộ đó được quản lý tốt đến đâu. Phần này là nơi các chỉ số cẩn thận, có rào chắn của phần còn lại cuốn
sách cuối cùng nối với cuộc trò chuyện hướng ra ngoài, hướng đến kết quả đó.

## Các chủ đề trong phần này

- **5.1 Tỷ lệ lỗi lọt và lỗi chất lượng thoát:** Chỉ số chất lượng phản ánh trực tiếp nhất điều khách hàng thực sự trải nghiệm, khác với
  các chỉ số chất lượng nội bộ ở Phần 4.
- **5.2 Chỉ số áp dụng và sử dụng tính năng:** Liệu thứ kỹ thuật xây ra có thực sự được dùng không, và những cách cụ thể dữ liệu áp dụng
  bị hiểu sai.
- **5.3 Chỉ số kết quả khách hàng và kinh doanh:** Nối công việc kỹ thuật với những kết quả mà một doanh nghiệp hay một sứ mệnh công thực
  sự quan tâm.
- **5.4 Chi phí và kinh tế đơn vị của kỹ thuật:** Diễn đạt chi phí kỹ thuật theo thuật ngữ mà một bên liên quan tài chính dùng trực tiếp
  được.
- **5.5 Lợi tức đầu tư cho các sáng kiến kỹ thuật:** Xây một luận cứ ROI bảo vệ được, trung thực cho một khoản đầu tư kỹ thuật lớn, và
  trung thực không kém khi luận cứ không đứng vững.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 5.1 bắt đầu gần nhà nhất, chất lượng như khách hàng trực tiếp trải nghiệm, và là cầu nối tự nhiên từ các chỉ số chất lượng nội bộ
của Phần 4. Chủ đề 5.2 đặt câu hỏi tiếp theo khi chất lượng đã được tính đến: có ai thực sự dùng thứ đã xây không. Chủ đề 5.3 mở rộng
ống kính hơn nữa ra toàn bộ phạm vi kết quả khách hàng và kinh doanh mà một tổ chức quan tâm, trong đó mức sử dụng chỉ là một tín hiệu
trong số nhiều. Các chủ đề 5.4 và 5.5 sau đó biến cả phần thành tài chính: diễn đạt chi phí và lợi tức kỹ thuật theo thuật ngữ nối trực
tiếp với các quyết định ngân sách và đầu tư, khép vòng mà phần này mở ra bằng việc hỏi liệu công sức kỹ thuật có thực sự giúp ích không.

Các chủ đề của phần này dựa đặc biệt nặng vào hiểu biết thống kê của chủ đề 1.6, vì kết quả sản phẩm và kinh doanh thường nhiễu, bị
nhiễu bởi điều kiện thị trường, và chậm xác nhận, chính xác những điều kiện mà các sai lầm chủ đề 1.6 cảnh báo dễ tạo ra một kết luận
tự tin nhưng sai nhất. Hãy đọc phần này cùng Phần 7, nơi bước chuyển sang AI sinh tạo nâng mức cược của việc đo kết quả đúng chính vì
khối lượng đầu ra, như các chủ đề của phần này lập luận xuyên suốt, chưa bao giờ là thứ đúng để tối ưu hóa ngay từ đầu.
