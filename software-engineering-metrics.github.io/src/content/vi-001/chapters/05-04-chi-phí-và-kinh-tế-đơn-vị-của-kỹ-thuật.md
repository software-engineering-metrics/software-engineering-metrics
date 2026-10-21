# 5.4 Chi phí và kinh tế đơn vị của kỹ thuật

## Tổng quan và động lực

Chủ đề này biến Phần 5 thành tài chính một cách tường minh: cách diễn đạt chi phí kỹ thuật theo thuật ngữ mà một bên liên quan tài chính
dùng trực tiếp được, và cách xây **kinh tế đơn vị (unit economics)**, chi phí được biểu diễn trên mỗi đơn vị đầu ra hay mức sử dụng có
ý nghĩa, thay vì một dòng ngân sách phòng ban gộp, khó hiểu. Chi phí kỹ thuật thường là dòng chi phí kiểm soát được lớn nhất trong một
tổ chức dựa vào phần mềm, vậy mà nó thường là thứ chức năng tài chính hiểu kém nhất, được báo cáo như một con số lớn duy nhất với ít
hiển thị về điều gì thúc đẩy nó hay nó mở rộng thế nào khi tăng trưởng. Chủ đề này tồn tại để đóng khoảng trống đó, vì một lãnh đạo kỹ
thuật không thể trả lời "chúng ta tốn bao nhiêu để vận hành hệ thống này" hay "chi phí của chúng ta mở rộng thế nào khi tăng trưởng"
bằng các thuật ngữ tài chính cụ thể là ở thế bất lợi thật trong mọi cuộc trao đổi ngân sách.

Kỷ luật cụ thể mà chủ đề này khuyến nghị, kinh tế đơn vị, nghĩa là diễn đạt chi phí trên mỗi lần triển khai, mỗi khách hàng được phục vụ,
mỗi giao dịch được xử lý, hay một đơn vị khác thực sự quan trọng với doanh nghiệp, thay vì chỉ là tổng chi phí nhân sự hay tổng chi tiêu
đám mây. Việc định khung lại này nối trực tiếp với nguyên tắc kết quả hơn đầu ra của chủ đề 1.3: một tổng chi phí giảm không tự động là
tốt nếu nó đến từ việc phục vụ ít khách hàng hơn, và một tổng chi phí tăng không tự động là xấu nếu nó đến từ việc phục vụ nhiều hơn
tương ứng. Kinh tế đơn vị là thứ khiến xu hướng chi phí diễn giải được thay vì chỉ nhìn thấy được.

Với các đội lớn, kỷ luật của chủ đề này biến tài chính kỹ thuật từ một hộp đen thành một hệ thống dễ đọc, quản lý được. Các tổ chức
doanh nghiệp dùng kinh tế đơn vị để so sánh hiệu quả chi phí của các sản phẩm, nền tảng hay đội khác nhau trên một cơ sở công bằng; các
tổ chức chính phủ dùng cùng kỷ luật để chứng minh trách nhiệm tài khóa và đưa ra luận cứ dựa trên bằng chứng cho đầu tư hạ tầng sẽ giảm
chi phí trên mỗi công dân được phục vụ theo thời gian.

## Các nguyên tắc chính

- **Tổng chi phí riêng lẻ không diễn giải được nếu không có mẫu số.** Kinh tế đơn vị, chi phí trên mỗi đơn vị có ý nghĩa, biến một con
  số khó hiểu thành một xu hướng hành động được.
- **Hãy chọn một đơn vị phản ánh giá trị kinh doanh hay sứ mệnh thật**, không phải một mẫu số tùy ý hoặc dễ bị lách.
- **Chi phí có nhiều thành phần: nhân sự, hạ tầng và công cụ.** Hãy theo dõi riêng, vì mỗi thành phần có một động lực chi phí khác nhau
  và một đòn bẩy khác nhau để tác động.
- **Thực hành FinOps mang cùng độ chặt chẽ cho chi phí đám mây mà cuốn sách này mang cho các chỉ số phân phối và chất lượng.** Hãy coi
  chi phí là đo được và quản lý được, không phải một cái cho sẵn không tránh được, khó hiểu.
- **Tổng chi phí giảm không tự động là tốt, và tổng chi phí tăng không tự động là xấu**, nếu không kiểm tra điều gì xảy ra với thước đo
  đơn vị cùng lúc.

## Khuyến nghị

### Chọn một đơn vị phản ánh giá trị thật được giao, không phải một mẫu số tùy ý

Hãy chọn cho phép tính kinh tế đơn vị của bạn một đơn vị thực sự theo dõi giá trị kinh doanh hay sứ mệnh: chi phí trên mỗi khách hàng
được phục vụ, trên mỗi giao dịch được xử lý, trên mỗi lần triển khai, hoặc trên mỗi tương tác với công dân được xử lý cho một dịch vụ
khu vực công. Hãy tránh một mẫu số quá dễ bị thổi phồng để làm đẹp tỷ lệ, chẳng hạn một số đếm nội bộ, phần lớn tùy ý, không tương ứng
với bất kỳ đơn vị giá trị bên ngoài thật nào được giao.

### Tách riêng chi phí nhân sự, hạ tầng và công cụ

Chi phí kỹ thuật có ít nhất ba thành phần riêng biệt với động lực và đòn bẩy khác nhau: chi phí nhân sự (lương, phúc lợi, phần lớn cố
định trong ngắn hạn), chi phí hạ tầng (chi tiêu đám mây, phần lớn biến thiên theo mức sử dụng và tối ưu hóa trực tiếp được qua thực hành
kỹ thuật), và chi phí công cụ và giấy phép (thường là chi phí cố định theo ghế hay theo bậc sử dụng). Hãy theo dõi những khoản này riêng
thay vì một tổng gộp, vì một tổng chi phí tăng do hạ tầng mở rộng theo tăng trưởng thật đòi hỏi một phản ứng rất khác so với cùng mức
tăng tổng do công cụ lan tràn không được quản lý.

### Áp dụng kỷ luật FinOps riêng cho chi phí hạ tầng đám mây

**[FinOps](https://en.wikipedia.org/wiki/FinOps)** là kỷ luật mang trách nhiệm tài chính vào chi tiêu đám mây biến thiên thông qua sự
cộng tác liên chức năng giữa các đội kỹ thuật, tài chính và kinh doanh. Hãy áp dụng trực tiếp các thực hành cốt lõi của nó: gắn thẻ tài
nguyên đám mây theo đội và dịch vụ để quy kết chi phí, xem xét chi tiêu so với ngân sách theo nhịp đều đặn, và coi hiệu quả chi phí hạ
tầng (chi phí trên mỗi đơn vị sử dụng thực tế) là một chỉ số kỹ thuật đáng tối ưu một cách chủ đích, không phải một chi phí chung cố
định không tránh được cứ chấp nhận.

### Theo dõi xu hướng chi phí đơn vị theo thời gian, và điều tra tường minh các biến động

Một ảnh chụp chi phí đơn vị riêng lẻ kém hữu ích hơn xu hướng của nó: chi phí trên mỗi khách hàng được phục vụ đang giảm khi nền tảng
trưởng thành và mở rộng (dấu hiệu của lợi ích hiệu quả thật), hay đang tăng (dấu hiệu của sự kém hiệu quả tích tụ, nợ kỹ thuật đẩy chi
phí bảo trì cao hơn, hay sự chuyển dịch cơ cấu khách hàng được phục vụ sang các phân khúc tốn tài nguyên hơn). Hãy điều tra tường minh
một thay đổi xu hướng chi phí đơn vị đáng kể thay vì báo cáo con số mà không giải thích.

### Nối dữ liệu chi phí với nợ kỹ thuật và các chỉ số chất lượng ở nơi khác trong cuốn sách này

Chi phí hạ tầng hay bảo trì trên mỗi đơn vị tăng đôi khi là hệ quả trực tiếp, đo được của nợ kỹ thuật tích tụ (chủ đề 4.5) hay sự gia
tăng các điểm nóng độ phức tạp (chủ đề 4.1, chủ đề 4.3): các đường đi mã kém hiệu quả, hạ tầng dư thừa và truy vấn tối ưu kém cuối cùng
đều hiện ra thành chi phí đơn vị cao. Hãy dùng chi phí đơn vị tăng như một đầu vào, cùng với các tín hiệu mức thay đổi và độ phức tạp từ
Phần 4, cho cuộc thảo luận ưu tiên nợ của bạn, vì một mục nợ có tác động chi phí được chứng minh, đo được tạo ra luận cứ mạnh hơn cho
đầu tư khắc phục so với riêng một lời phàn nàn về chất lượng không được định lượng.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ báo cáo tổng chi phí | Đơn giản, khớp với cách ngân sách thường được phân bổ | Không diễn giải được nếu không có mẫu số; che giấu xu hướng hiệu quả |
| Kinh tế đơn vị với mẫu số được chọn tốt | Diễn giải được, hành động được, so sánh được theo thời gian và giữa các đội | Cần cẩn trọng chọn một đơn vị thực sự có ý nghĩa, khó lách |
| Báo cáo chi phí gộp (nhân sự, hạ tầng, công cụ kết hợp) | Một con số duy nhất đơn giản | Che khuất động lực chi phí cụ thể nào thực sự đang thay đổi và vì sao |
| Các thành phần chi phí tách riêng | Cho thấy đòn bẩy đúng để tác động cho một xu hướng chi phí cụ thể | Cần quy kết chi phí chi tiết hơn và hạ tầng theo dõi |

Sự căng thẳng trung tâm là **sự đơn giản so với khả năng hành động**. Một con số tổng chi phí duy nhất dễ báo cáo và khớp với cách nhiều
tổ chức đã phân bổ ngân sách, nhưng nó che khuất cả điều gì đang thúc đẩy các thay đổi chi phí lẫn việc các thay đổi đó phản ánh hiệu
quả thật hay tăng trưởng thật. Hãy giải quyết sự căng thẳng bằng cách đầu tư vào kinh tế đơn vị và báo cáo tách thành phần phức tạp
hơn đôi chút mà chủ đề này khuyến nghị, vì khả năng hành động thu được, biết chính xác đòn bẩy nào cần kéo khi chi phí dịch chuyển, đáng
với công sức theo dõi thêm khiêm tốn đối với bất kỳ tổ chức nào vượt quy mô nhỏ nhất.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có theo dõi chi phí kỹ thuật trên mỗi đơn vị có ý nghĩa (khách hàng, giao dịch, lần triển khai), hay chỉ như một tổng khó
   hiểu?** Nếu chỉ có tổng, hãy xác định đơn vị nào sẽ khiến xu hướng chi phí của bạn thực sự diễn giải được và thảo luận cần gì để bắt
   đầu theo dõi nó.

2. **Chúng ta có tách được chi phí hiện tại thành các thành phần nhân sự, hạ tầng và công cụ, và có biết thành phần nào đang thúc đẩy
   bất kỳ thay đổi gần đây nào không?** Hãy mở bảng phân tích chi phí thực tế của bạn, nếu có, và kiểm tra xem nó có đủ chi tiết để trả
   lời câu hỏi này một cách tự tin không.

3. **Chúng ta đã áp dụng các thực hành gắn thẻ và quy kết FinOps cho chi phí hạ tầng đám mây, hay nó là một khoản mục đơn lẻ, không quy
   kết?** Nếu chi tiêu không quy kết được cho các đội hay dịch vụ cụ thể, hãy thảo luận bước đầu tiên hướng tới quy kết thật sẽ trông ra
   sao.

4. **Xu hướng chi phí đơn vị của chúng ta có dịch chuyển đáng kể theo hướng nào gần đây không, và chúng ta có biết vì sao không?** Hãy
   điều tra một biến động thật, gần đây, nếu có, và xem bạn có giải thích được nó một cách tự tin hay nó vẫn là một điều bí ẩn.

5. **Xu hướng chi phí hạ tầng hiện tại của chúng ta có tương quan với bất kỳ tín hiệu nợ kỹ thuật hay điểm nóng độ phức tạp nào từ Phần
   4 không?** Hãy đối chiếu tường minh các nguồn dữ liệu này và xem có một mối liên hệ nào nổi lên có thể củng cố một cơ sở kinh doanh
   khắc phục nợ không.

6. **Nếu ngày mai một bên liên quan tài chính hỏi "phục vụ thêm một khách hàng tốn của chúng ta bao nhiêu", chúng ta có trả lời được một
   cách tự tin không?** Câu hỏi cụ thể, thực tế này kiểm tra xem kinh tế đơn vị của bạn đã thực sự được xây và sẵn sàng, hay chỉ là một
   khát vọng lý thuyết.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Kinh tế đơn vị cực kỳ quan trọng sớm, vì cả nhà đầu tư lẫn người sáng lập đều cần biết chi phí phục vụ mỗi khách hàng
bổ sung đang hướng tới sự bền vững hay hướng tới một mô hình kinh doanh không thể mở rộng. Hãy theo dõi điều này từ rất sớm, dù bằng ước
tính thô, thay vì chờ đến khi công ty đủ lớn để biện minh cho công cụ FinOps chính thức.

**Doanh nghiệp nhỏ.** Bảng điều khiển thanh toán của nhà cung cấp đám mây thường cung cấp đủ khả năng hiển thị chi phí cơ bản mà không
cần công cụ FinOps chuyên dụng; kỷ luật chính là chọn một đơn vị hợp lý (chi phí trên mỗi khách hàng hay trên mỗi giao dịch) và kiểm tra
xu hướng định kỳ, thay vì chỉ nhìn tổng hóa đơn một cách cô lập.

**Doanh nghiệp lớn.** Thực hành FinOps và theo dõi thành phần chi phí tách riêng là thiết yếu ở quy mô này, nơi chi tiêu đám mây có thể
là một dòng ngân sách rất lớn, thường ít được soi xét, trải trên nhiều đội. Hãy đầu tư gắn thẻ quy kết chi phí đúng cách và một nhịp xem
xét chi phí chuyên trách, và dùng kinh tế đơn vị để so sánh hiệu quả chi phí công bằng giữa các dòng sản phẩm hay nền tảng khác nhau.

**Chính phủ.** Trách nhiệm tài khóa và hiệu quả chi phí chứng minh được liên quan trực tiếp đến biện minh ngân sách và trách nhiệm giải
trình công. Kinh tế đơn vị diễn đạt bằng chi phí trên mỗi công dân được phục vụ, hay trên mỗi giao dịch được xử lý, thường là một chỉ
số thuyết phục và dễ diễn giải hơn nhiều cho các ủy ban ngân sách so với một con số tổng chi tiêu thô, và nó hỗ trợ trực tiếp cơ sở kinh
doanh cho đầu tư hạ tầng giảm chi phí trên mỗi đơn vị theo thời gian.

## Ví dụ

**Doanh nghiệp lớn.** Nhóm tài chính của một công ty phần mềm dạng dịch vụ đã lo ngại trước tổng chi tiêu hạ tầng đám mây tăng trong
nhiều quý liên tiếp, ban đầu cho rằng đó là sự kém hiệu quả hay lãng phí. Một phân tích kinh tế đơn vị, chi phí trên mỗi khách hàng hoạt
động, cho thấy chi phí đơn vị thực ra đã giảm đều đặn ngay cả khi tổng chi tiêu tăng, vì số khách hàng tăng nhanh hơn chi phí hạ tầng,
một cải thiện hiệu quả thật bị che đi khi chỉ nhìn tổng chi tiêu. Việc định khung lại này chuyển cuộc trao đổi tài chính từ "vì sao kỹ
thuật chi nhiều hơn" sang "làm sao chúng ta duy trì việc mở rộng hiệu quả này", một cuộc thảo luận hiệu quả hơn đáng kể, tránh được một
mệnh lệnh cắt giảm chi phí không cần thiết và có thể gây hại vốn sẽ nhắm vào khoản chi lành mạnh do tăng trưởng thúc đẩy.

**Chính phủ.** Cơ quan dịch vụ số của một chính quyền tiểu bang được yêu cầu biện minh việc tiếp tục đầu tư hạ tầng đám mây với một ủy
ban ngân sách đang so sánh chi phí với hệ thống tại chỗ cũ mà nó thay thế. Một phân tích kinh tế đơn vị, chi phí trên mỗi giao dịch của
công dân được xử lý, cho thấy chi phí đơn vị của hệ thống dựa trên đám mây mới thấp hơn đáng kể so với hệ thống cũ, dù tổng chi tiêu
danh nghĩa cao hơn, vì hệ thống mới xử lý khối lượng giao dịch cao hơn nhiều với cùng hoặc thấp hơn tổng ngân sách hạ tầng. So sánh chi
phí đơn vị này, thay vì một phép so sánh tổng chi tiêu khó diễn giải hơn, đã trở thành bằng chứng trung tâm trong một luận cứ thành công
cho việc tiếp tục và mở rộng đầu tư đám mây.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của kinh tế đơn vị chặt chẽ là một câu trả lời bảo vệ được, diễn giải được cho câu hỏi mà mọi bên liên quan tài chính cuối cùng
đều hỏi: khoản chi này có hiệu quả không, và nó có đang mở rộng bền vững không. Ví dụ doanh nghiệp lớn ở trên cho thấy rủi ro của việc
làm sai điều này: một cái nhìn chỉ có tổng chi tiêu suýt kích hoạt một mệnh lệnh cắt giảm chi phí không cần thiết và phản tác dụng nhắm
vào khoản chi mà, tính trên cơ sở đơn vị, đang trở nên hiệu quả hơn, không phải kém đi.

Tổng chi phí sở hữu gồm công cụ quy kết chi phí (các thực hành gắn thẻ FinOps) và kỷ luật phân tích để tách các thành phần chi phí và
theo dõi xu hướng đơn vị theo thời gian. Khoản đầu tư đó khiêm tốn so với rủi ro đưa ra một quyết định ngân sách quan trọng, cắt khoản
chi thực ra hiệu quả, hay không bắt được khoản chi thực sự đang trở nên kém hiệu quả, chỉ dựa trên một cái nhìn tổng chi phí thiếu thông
tin.

## Phản mẫu và cạm bẫy

- **Báo cáo tổng chi phí không có mẫu số:** không diễn giải được và che giấu việc chi phí đang mở rộng hiệu quả hay kém hiệu quả.
- **Chọn một đơn vị dễ bị lách hay tùy ý cho phép tính chi phí:** tạo ra một tỷ lệ tâng bốc hơn là cung cấp thông tin.
- **Gộp chi phí nhân sự, hạ tầng và công cụ thành một con số:** che khuất động lực cụ thể nào thực sự đang thay đổi và đòn bẩy nào xử lý
  nó.
- **Không quy kết chi phí đám mây (gắn thẻ FinOps):** để chi tiêu hạ tầng thực chất không được quản lý và không có trách nhiệm giải
  trình ở cấp đội hay dịch vụ.
- **Phản ứng với thay đổi tổng chi phí mà không kiểm tra xu hướng đơn vị:** có thể kích hoạt một mệnh lệnh cắt giảm chi phí không cần
  thiết nhắm vào khoản chi hiệu quả thật, do tăng trưởng thúc đẩy.
- **Không bao giờ nối xu hướng chi phí với dữ liệu nợ kỹ thuật hay độ phức tạp:** bỏ lỡ một luận cứ được định lượng, mạnh hơn cho đầu
  tư khắc phục nợ.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Chi phí kỹ thuật chỉ được báo cáo như một tổng khó hiểu, không có kinh tế đơn vị hay tách thành phần.
- **Cấp 2, Phát triển:** Có một số phân tích chi phí, nhưng kinh tế đơn vị không nhất quán và quy kết chi phí đám mây phần lớn vắng mặt.
- **Cấp 3, Chuẩn hóa:** Kinh tế đơn vị với một mẫu số được chọn tốt được theo dõi nhất quán, với chi phí tách thành các thành phần nhân
  sự, hạ tầng và công cụ trên toàn tổ chức.
- **Cấp 4, Quản lý:** Các thực hành quy kết và xem xét FinOps được thiết lập, và xu hướng chi phí đơn vị được điều tra tích cực và nối
  với các tín hiệu nợ kỹ thuật và chất lượng.
- **Cấp 5, Điều phối:** Tổ chức có thể tự tin trả lời các câu hỏi chi phí đơn vị chi tiết từ các bên liên quan tài chính, và dữ liệu
  chi phí trực tiếp thông tin cho cả các quyết định đầu tư kỹ thuật lẫn biện minh ngân sách ở cấp cao nhất.

## Ý tưởng để thảo luận

1. Đơn vị nào sẽ khiến xu hướng chi phí của chúng ta thực sự diễn giải được, và chúng ta có theo dõi nó không?
2. Chúng ta có thể tách một thay đổi chi phí gần đây thành các thành phần nhân sự, hạ tầng và công cụ của nó không?
3. Có phần nào trong chi tiêu hạ tầng của chúng ta hiện chưa được quy kết cho một đội hay dịch vụ cụ thể không?
4. Xu hướng chi phí đơn vị của chúng ta có dịch chuyển gần đây không, và chúng ta có biết vì sao không?
5. Chi phí đơn vị tăng có thể là triệu chứng của nợ kỹ thuật chưa được giải quyết ở đâu?

## Những điểm chính cần nhớ

- **Kinh tế đơn vị**, chi phí trên mỗi đơn vị giá trị có ý nghĩa, biến một con số tổng chi phí khó hiểu thành một xu hướng diễn giải
  được, hành động được.
- Hãy chọn một đơn vị phản ánh **giá trị kinh doanh hay sứ mệnh thật**, và tránh một mẫu số dễ bị lách hay tùy ý.
- Hãy tách chi phí thành các thành phần **nhân sự, hạ tầng và công cụ**, vì mỗi thành phần có một động lực và một đòn bẩy khác nhau.
- Hãy áp dụng **kỷ luật FinOps** riêng cho chi phí hạ tầng đám mây, gồm gắn thẻ quy kết và xem xét đều đặn.
- Tổng chi phí giảm **không tự động là tốt**, và tổng chi phí tăng **không tự động là xấu**, nếu không kiểm tra xu hướng đơn vị đi kèm.

## Tài liệu tham khảo và đọc thêm

- *Cloud FinOps*, của J.R. Storment và Mike Fuller (văn bản nền tảng về thực hành FinOps cho quản lý chi phí đám mây).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (mối quan hệ giữa hiệu quả phân
  phối và chi phí).
- *Site Reliability Engineering*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard Murphy biên tập (chi phí như một đánh
  đổi tường minh của kỹ thuật độ tin cậy).
- Khung FinOps của FinOps Foundation, [finops.org](https://www.finops.org/) (hướng dẫn thực hành và mô hình trưởng thành cho quản lý
  tài chính đám mây).
