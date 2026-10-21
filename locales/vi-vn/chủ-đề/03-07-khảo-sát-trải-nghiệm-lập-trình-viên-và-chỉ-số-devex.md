# 3.7 Khảo sát trải nghiệm lập trình viên và chỉ số DevEx

## Tổng quan và động lực

Chủ đề này khép Phần 3 với cơ chế thực tế làm cho dữ liệu tự báo cáo của mọi chủ đề trước đó đáng tin: cách thiết kế một khảo sát
trải nghiệm lập trình viên (DevEx) tạo ra tín hiệu thật thay vì một cuộc thi nổi tiếng, và cách kết hợp dữ liệu khảo sát với đo đạc
khách quan thành một bộ chỉ số mà tổ chức có thể thực sự hành động theo. Mọi chủ đề trong phần này đều dựa vào một dạng tự báo cáo
nào đó, sự hài lòng và phúc lợi (chủ đề 3.2) trực tiếp nhất, nhưng hiệu suất, giao tiếp và luồng cũng đều hưởng lợi từ một khảo sát
thiết kế tốt, và một khảo sát thiết kế tồi làm suy yếu giá trị của tất cả chúng cùng một lúc.

**Trải nghiệm lập trình viên (developer experience, DevEx)** là cách định khung rộng hơn, gần đây hơn nổi lên quanh cùng ý tưởng cốt
lõi mà SPACE đã chính thức hóa: trải nghiệm thực tế, hằng ngày của kỹ sư khi hoàn thành công việc, ma sát, công cụ, tải nhận thức,
vòng phản hồi, tự nó là một thứ đo được, cải thiện được, không chỉ là mối quan tâm văn hóa mềm. Nghiên cứu về DevEx, đáng chú ý là
khung do Abi Noda, Margaret-Anne Storey, Nicole Forsgren và Michaela Greiler đề xuất, tổ chức trải nghiệm này quanh ba chiều: vòng
phản hồi, tải nhận thức và trạng thái luồng, vốn ánh xạ sát và mở rộng các chiều SPACE mà phần này đã bao quát sâu.

Với các đội lớn, sự khác biệt giữa một khảo sát tạo ra tín hiệu đáng tin và một khảo sát tạo ra nhiễu hay, tệ hơn, dữ liệu gây hiểu
lầm chủ động hoàn toàn nằm ở các chi tiết thiết kế mà chủ đề này bao quát: cách diễn đạt câu hỏi, lựa chọn thang trả lời, lấy mẫu và
nhịp, và cách truyền đạt kết quả trở lại người trả lời. Các tổ chức doanh nghiệp và chính phủ chạy các khảo sát này ở quy mô lớn, trên
hàng nghìn kỹ sư, không thể để sai, vì một công cụ có lỗi ở quy mô đó tạo ra những kết luận sai một cách tự tin, định hình các quyết
định nguồn lực thật.

## Các nguyên tắc chính

- **Chất lượng thiết kế khảo sát quyết định độ đáng tin của dữ liệu nhiều hơn hẳn độ dài hay độ tinh vi của khảo sát.** Một khảo sát
  ngắn, thiết kế tốt luôn thắng một khảo sát dài, thiết kế tồi.
- **Tỷ lệ phản hồi tự nó là một tín hiệu,** không chỉ là một chỉ số thu thập dữ liệu; một tỷ lệ giảm thường cho thấy niềm tin vào quy
  trình đang xói mòn.
- **Kết hợp dữ liệu khảo sát với đo đạc khách quan** bất cứ khi nào có thể, theo nguyên tắc đo đạc của chủ đề 1.5; dùng dữ liệu khảo
  sát cụ thể cho những gì dữ liệu khách quan không nắm bắt được.
- **Khép vòng với người trả lời.** Một khảo sát không bao giờ dẫn đến thay đổi nhìn thấy được nào dạy mọi người thôi nghiêm túc với
  nó.
- **DevEx và SPACE là những cách định khung bổ sung cho nhau của cùng một mối quan tâm nền tảng,** không phải các khung cạnh tranh để
  chọn một.

## Khuyến nghị

### Thiết kế câu hỏi rõ ràng và tránh cách diễn đạt dẫn dắt hay hai-ý-trong-một

Hãy viết các câu hỏi khảo sát hỏi về đúng một thứ, bằng ngôn ngữ giản dị, không nhúng một giả định vào chính câu hỏi. "Bạn hài lòng
đến đâu với công cụ và tài liệu của chúng ta?" là một câu hỏi hai-ý-trong-một gộp hai câu trả lời có thể rất khác nhau vào một phản
hồi gây nhầm lẫn. Hãy tách nó thành hai câu hỏi riêng. Hãy tránh cách diễn đạt dẫn dắt như "khoản đầu tư gần đây vào công cụ của chúng
ta đã cải thiện trải nghiệm của bạn bao nhiêu?" vốn giả định rằng sự cải thiện đã xảy ra thay vì hỏi trung lập liệu nó có xảy ra không.

### Dùng thang trả lời nhất quán và thử nghiệm câu hỏi mới trước khi triển khai rộng

Hãy chuẩn hóa một thang trả lời nhất quán (thang [Likert](https://en.wikipedia.org/wiki/Likert_scale) năm hay bảy điểm là phổ biến và
được nghiên cứu kỹ) xuyên công cụ khảo sát của bạn, để các câu trả lời so sánh được giữa các câu hỏi và theo thời gian. Hãy thử
nghiệm mọi câu hỏi mới với một nhóm nhỏ trước khi triển khai toàn tổ chức, để bắt cách diễn đạt mơ hồ hay cách hiểu bất ngờ trước khi
nó làm hỏng cả tập dữ liệu.

### Coi tỷ lệ phản hồi là một tín hiệu chẩn đoán tự thân

Hãy theo dõi tỷ lệ phản hồi khảo sát qua các chu kỳ liên tiếp, và coi một tỷ lệ giảm là dấu hiệu cảnh báo đáng điều tra trực tiếp, tương
tự tín hiệu niềm tin đã bàn ở chủ đề 3.2. Một tỷ lệ phản hồi giảm thường cho thấy mệt mỏi vì khảo sát, niềm tin rằng kết quả dẫn đến
hành động đang xói mòn, hoặc sự nghi ngờ ngày càng tăng rằng ẩn danh không thực sự được bảo vệ, bất kỳ điều nào cũng đáng được điều tra
trực tiếp thay vì bị gạt đi như một phiền toái thu thập dữ liệu đơn thuần.

### Kết hợp dữ liệu khảo sát với đo đạc DevEx khách quan

Hãy ghép các phản hồi khảo sát chủ quan với các tín hiệu khách quan khi có: thời gian build, thời gian chạy bộ kiểm thử, thời gian thiết
lập môi trường phát triển cục bộ, và dữ liệu thời gian luồng và gián đoạn từ chủ đề 3.6. Một phản hồi khảo sát nói "bản build của chúng
ta quá chậm" trở nên hành động được hơn nhiều khi ghép với xu hướng thời gian build đo được thực tế, và sự kết hợp bắt được các trường
hợp cảm nhận và thực tế khách quan lệch nhau theo cả hai hướng, đáng điều tra riêng.

### Khép vòng: công bố kết quả và hành động tiếp theo nhìn thấy được

Sau mỗi chu kỳ khảo sát, hãy công bố một bản tóm tắt kết quả trung thực, kể cả những kết quả mà lãnh đạo có thể muốn không nhấn mạnh, và
công khai cam kết ít nhất một hành động cụ thể đã thực hiện để đáp lại. Một khảo sát không tạo ra hành động tiếp theo nhìn thấy được
nào dạy người trả lời rằng ý kiến trung thực của họ không quan trọng, điều làm suy giảm cả tỷ lệ phản hồi lẫn tính trung thực của phản
hồi ở mọi chu kỳ sau. Kỷ luật khép vòng này thường là yếu tố quyết định lớn nhất việc một chương trình khảo sát DevEx còn hữu ích qua
nhiều năm hay dần thoái hóa thành một bài tập đánh dấu ô.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Khảo sát dài, toàn diện | Dữ liệu phong phú, chi tiết qua nhiều chủ đề | Tỷ lệ phản hồi thấp hơn, mệt mỏi cao hơn, nhiều chỗ hơn cho câu hỏi thiết kế tồi |
| Khảo sát ngắn, tập trung | Tỷ lệ phản hồi cao hơn, dễ thiết kế tốt hơn | Ít bao phủ hơn; có thể bỏ sót vấn đề đang nổi lên ngoài trọng tâm đã chọn |
| Chỉ dữ liệu khảo sát | Nắm bắt trực tiếp trải nghiệm chủ quan | Dễ bị thiên kiến và không thể đối chiếu với thực tế khách quan |
| Khảo sát kết hợp đo đạc khách quan | Bắt được sự lệch giữa cảm nhận và thực tế, hành động được hơn | Cần nhiều công sức tích hợp dữ liệu hơn |

Mâu thuẫn trung tâm là **độ bao phủ so với chất lượng phản hồi**. Một khảo sát dài hơn, toàn diện hơn bao quát nhiều nội dung hơn nhưng
làm giảm tỷ lệ phản hồi và tăng nguy cơ câu hỏi thiết kế tồi lọt qua; một khảo sát ngắn, tập trung có phản hồi chất lượng tốt hơn
nhưng có nguy cơ bỏ sót điều quan trọng ngoài phạm vi. Hãy giải quyết bằng cách giữ khảo sát lõi, định kỳ ngắn và được thử nghiệm kỹ,
và dùng các khảo sát đi sâu thỉnh thoảng, được dán nhãn rõ ràng cho các chủ đề cụ thể cần khám phá chi tiết hơn, thay vì cố bao quát
mọi thứ ở mỗi chu kỳ.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta đã bao giờ thử nghiệm một câu hỏi khảo sát mới với một nhóm nhỏ trước khi triển khai rộng, hay câu hỏi mới đi thẳng vào
   khảo sát đầy đủ?** Bỏ qua bước thử nghiệm là cách phổ biến khiến các câu hỏi mơ hồ hay hai-ý-trong-một làm hỏng cả tập dữ liệu
   trước khi ai nhận ra cách diễn đạt không rõ.

2. **Tỷ lệ phản hồi của chúng ta đã thay đổi thế nào qua vài chu kỳ khảo sát gần đây, và chúng ta có điều tra một sự suy giảm nếu có
   không?** Hãy coi xu hướng này là một tín hiệu thật đáng bàn, không chỉ một phiền toái thu thập dữ liệu để ghi nhận qua loa.

3. **Chúng ta có kết hợp dữ liệu khảo sát với bất kỳ đo đạc khách quan nào, hay cảm nhận chủ quan đứng hoàn toàn một mình trong báo
   cáo?** Hãy xác định ít nhất một nơi mà việc ghép một câu hỏi khảo sát với dữ liệu khách quan, thời gian build, tần suất triển khai,
   có thể làm kết quả hành động được hơn.

4. **Chúng ta đã thực hiện hành động cụ thể nào như kết quả trực tiếp, nhìn thấy được của chu kỳ khảo sát gần nhất, và chúng ta có
   truyền đạt hành động đó cho người trả lời không?** Nếu câu trả lời trung thực là "không có gì nhìn thấy được", khoảng trống đó có
   lẽ đã đang xói mòn niềm tin vào công cụ, dù nó đã hiện ra trong tỷ lệ phản hồi hay chưa.

5. **Có câu hỏi khảo sát hiện tại nào của chúng ta mang tính dẫn dắt hoặc hai-ý-trong-một không, và chúng ta có nhận ra nếu có không?**
   Hãy rà soát các câu hỏi hiện tại thực tế của bạn so với phép thử cụ thể này như một bài tập nhóm.

6. **Dữ liệu khảo sát DevEx hoặc SPACE của chúng ta so với các tín hiệu khách quan thế nào khi hai bên có vẻ bất đồng, và sự bất
   đồng đó nói gì với chúng ta?** Một trường hợp cảm nhận và dữ liệu khách quan lệch nhau thường có giá trị chẩn đoán hơn một trường
   hợp chúng khớp, vì bản thân khoảng cách là thông tin.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Một khảo sát nhanh đơn giản, rất ngắn, đôi khi chỉ một hai câu hỏi, chạy không chính thức và thường xuyên, thường là
đủ ở quy mô này, và sự nghiêm ngặt thiết kế công cụ chính thức ít quan trọng hơn khi một nhà sáng lập vẫn có thể trò chuyện trực tiếp
với gần như mọi người đều đặn.

**Doanh nghiệp nhỏ.** Một công cụ khảo sát miễn phí hoặc chi phí thấp với một bộ câu hỏi ngắn, được điều chỉnh, chạy hằng quý, nắm bắt
phần lớn giá trị ở đây mà không cần chuyên môn thiết kế khảo sát chuyên dụng. Hãy ưu tiên kỷ luật khép vòng hơn độ tinh vi; ngay cả một
đội nhỏ cũng hưởng lợi từ việc hành động nhìn thấy được theo những gì một khảo sát ngắn lộ ra.

**Doanh nghiệp lớn.** Chất lượng thiết kế khảo sát cực kỳ quan trọng ở quy mô lớn, vì một câu hỏi có lỗi hay một đảm bảo ẩn danh bị phá
vỡ làm hỏng dữ liệu trên hàng nghìn người trả lời cùng lúc, và những kết luận sai một cách tự tin có thể chuyển hướng sai các quyết
định nguồn lực quan trọng. Hãy đầu tư vào chuyên môn thiết kế khảo sát thật, hoặc hợp tác với một nền tảng đo lường DevEx đã được thiết
lập, thay vì tự xây một công cụ tùy hứng nội bộ.

**Chính phủ.** Tỷ lệ phản hồi và niềm tin đặc biệt mong manh ở các tổ chức nơi nhân viên có thể vốn đã dè dặt về cách dữ liệu được dùng
nội bộ. Hãy đầu tư quá mức vào các đảm bảo ẩn danh minh bạch và hành động tiếp theo nhìn thấy được cụ thể để xây niềm tin làm cho một tỷ
lệ phản hồi trung thực khả thi trong bối cảnh mà sự hoài nghi về cách dùng dữ liệu có thể vốn đã cao hơn một môi trường khu vực tư điển
hình.

## Ví dụ

**Doanh nghiệp lớn.** Khảo sát DevEx đầu tiên của một công ty phần mềm có một câu hỏi yêu cầu kỹ sư đánh giá "sự hài lòng với công cụ và
quy trình", một câu hỏi hai-ý-trong-một gộp hai mối quan tâm rất khác nhau. Khi điểm gộp trở về ở mức tầm thường, ban lãnh đạo không biết
vấn đề là công cụ, quy trình, hay cả hai, và các nỗ lực khắc phục ban đầu nhắm sai khu vực trong hai quý. Tách câu hỏi trong một bản
sửa đổi tiếp theo cho thấy điểm công cụ thực ra mạnh và điểm quy trình tệ, chuyển hướng đầu tư sang đơn giản hóa một quy trình phê duyệt
phát hành rườm rà, tạo ra một cải thiện hài lòng đo được trong một quý, không như nỗ lực tập trung vào công cụ trước đó vốn cho thấy ít
tác dụng.

**Chính phủ.** Khảo sát DevEx đầu tiên của một cơ quan số quốc gia có tỷ lệ phản hồi dưới 30%, và một cuộc rà soát nội bộ thấy nhân viên
tin rộng rãi, và hóa ra đúng, rằng từng quản lý có thể thấy ai đã và chưa trả lời, dù kết quả tổng hợp được cho là ẩn danh. Cơ quan chuyển
sang một nền tảng khảo sát bên thứ ba thực sự độc lập với ẩn danh được xác minh, truyền đạt tường minh và nhiều lần sự thay đổi, và công bố
một bản tóm tắt rõ ràng về kết quả chu kỳ trước kèm ba hành động cụ thể đã thực hiện để đáp lại. Tỷ lệ phản hồi tăng lên hơn 70% trong hai
chu kỳ, và ban lãnh đạo cơ quan cụ thể ghi công sự kết hợp giữa ẩn danh thật và hành động tiếp theo nhìn thấy được là lý do niềm tin vào
công cụ phục hồi.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của một chương trình khảo sát DevEx thiết kế tốt là dữ liệu đáng tin, hành động được về một chiều, trải nghiệm lập trình viên, vốn
nếu không sẽ vô hình cho đến khi nó hiện ra như nghỉ việc hay phân phối chậm lại. Ví dụ công ty phần mềm ở trên cho thấy cái giá của thiết
kế sai: hai quý nỗ lực khắc phục đi sai hướng vì một câu hỏi diễn đạt tồi đơn lẻ gộp hai mối quan tâm riêng biệt.

Tổng chi phí sở hữu gồm công cụ khảo sát, kỷ luật thiết kế và thử nghiệm mà chủ đề này khuyến nghị, và cam kết liên tục khép vòng bằng
hành động tiếp theo nhìn thấy được ở mỗi chu kỳ. Cam kết đó, hơn bất kỳ chi phí công cụ nào, là yếu tố quyết định việc một chương trình khảo
sát còn hữu ích nhiều năm hay thoái hóa thành một bài tập đánh dấu ô tạo ra dữ liệu ngày càng kém đáng tin theo thời gian.

## Phản mẫu và cạm bẫy

- **Câu hỏi hai-ý-trong-một hoặc dẫn dắt:** gộp các mối quan tâm riêng biệt hoặc làm lệch phản hồi, và thường không bị phát hiện nếu không
  thử nghiệm.
- **Bỏ qua bước thử nghiệm cho các câu hỏi mới:** để cách diễn đạt mơ hồ làm hỏng một tập dữ liệu quy mô đầy đủ.
- **Phớt lờ tỷ lệ phản hồi giảm:** bỏ sót một tín hiệu niềm tin quan trọng tự thân.
- **Không bao giờ khép vòng bằng hành động tiếp theo nhìn thấy được:** dạy người trả lời rằng ý kiến trung thực không quan trọng, làm suy
  giảm chất lượng dữ liệu tương lai.
- **Coi dữ liệu khảo sát là đủ một mình, không có sự củng cố khách quan:** bỏ sót các trường hợp cảm nhận và thực tế lệch nhau theo cả hai
  hướng.
- **Đảm bảo ẩn danh yếu hoặc không kiểm chứng được:** cách nhanh nhất làm sụp đổ cả tỷ lệ phản hồi lẫn tính trung thực của phản hồi.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Câu hỏi khảo sát tùy hứng và chưa thử nghiệm, tỷ lệ phản hồi không được theo dõi như một tín hiệu, và kết quả hiếm
  khi dẫn đến hành động nhìn thấy được.
- **Mức 2, Phát triển:** Có một chút kỷ luật thiết kế khảo sát, nhưng việc thử nghiệm không nhất quán và vòng không được khép đáng tin với
  người trả lời.
- **Mức 3, Chuẩn hóa:** Câu hỏi được thử nghiệm trước khi triển khai, tỷ lệ phản hồi được theo dõi và điều tra khi nó giảm, và kết quả được
  công bố nhất quán kèm ít nhất một hành động tiếp theo cụ thể.
- **Mức 4, Quản lý:** Dữ liệu khảo sát được kết hợp có hệ thống với đo đạc khách quan, và sự lệch giữa hai bên được điều tra chủ động như
  một tín hiệu chẩn đoán.
- **Mức 5, Điều phối:** Tổ chức có một chương trình khảo sát trưởng thành, đáng tin, nhiều năm với tỷ lệ phản hồi cao nhất quán, hành động
  nhìn thấy được chứng minh được từ mọi chu kỳ, và thành tích bắt và sửa các câu hỏi thiết kế tồi trước khi chúng làm hỏng dữ liệu.

## Ý tưởng để thảo luận

1. Có câu hỏi khảo sát hiện tại nào trong công cụ của chúng ta từng làm người trả lời bối rối hay hiểu sai không?
2. Hành động cụ thể cuối cùng chúng ta thực hiện như kết quả trực tiếp của dữ liệu khảo sát là gì?
3. Làm sao chúng ta biết nếu đảm bảo ẩn danh của mình đã bị phá vỡ, dù tình cờ?
4. Ở đâu dữ liệu khảo sát của chúng ta khớp hay bất đồng với đo đạc khách quan, và điều đó cho chúng ta biết gì?
5. Cần gì để nhân đôi tỷ lệ phản hồi hiện tại của chúng ta?

## Điểm chính cần nhớ

- **Chất lượng thiết kế** khảo sát, câu hỏi rõ ràng, một khái niệm, không thiên kiến, quan trọng hơn độ dài hay độ tinh vi.
- **Tỷ lệ phản hồi là một tín hiệu tự thân**; hãy điều tra một sự suy giảm thay vì coi nó như một phiền toái.
- **Kết hợp dữ liệu khảo sát với đo đạc khách quan** để bắt sự lệch giữa cảm nhận và thực tế.
- **Khép vòng**: công bố kết quả và hành động tiếp theo nhìn thấy được ở mỗi chu kỳ, nếu không niềm tin vào công cụ sẽ xói mòn.
- **DevEx và SPACE bổ sung cho nhau**, không cạnh tranh, là những cách định khung của cùng một mối quan tâm nền tảng về trải nghiệm lập
  trình viên.

## Tài liệu tham khảo và đọc thêm

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, và Michaela Greiler, "DevEx: What Actually Drives Productivity," *ACM Queue*
  (2023): khung DevEx về vòng phản hồi, tải nhận thức và trạng thái luồng.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century*, của Jeff Lawson (đầu tư của tổ
  chức vào trải nghiệm lập trình viên).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, của Louis M. Rea và Richard A. Parker (phương pháp luận thiết kế
  khảo sát chung áp dụng cho các công cụ DevEx).
