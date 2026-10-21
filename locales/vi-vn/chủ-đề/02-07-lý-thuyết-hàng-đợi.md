# 2.7 Lý thuyết hàng đợi

## Tổng quan và động lực

**[Lý thuyết hàng đợi](https://en.wikipedia.org/wiki/Queueing_theory)** là ngành nghiên cứu toán
học về các hàng chờ. Nghe có vẻ lạc quẻ với một cuốn sách về chỉ số kỹ thuật phần mềm, cho đến khi
bạn nhận ra một đường ống phân phối thực chất có bao nhiêu phần là một hàng đợi: một pull request
chờ người đánh giá, một commit chờ một CI runner, một phiếu chờ được nhận, một tin nhắn hỗ trợ
khách hàng chờ phản hồi. Chủ đề 2.4 đã giới thiệu tải luồng và thời gian luồng và cho thấy rằng
quá tải một chuỗi giá trị làm phân phối chậm đi mạnh, còn các chủ đề 2.5 và 2.6 cho thấy phần lớn
thời gian phân phối là thời gian chờ, không phải thời gian làm việc. Lý thuyết hàng đợi là toán
học nền tảng giải thích vì sao tất cả những điều đó đúng, không chỉ là một kiểu mẫu quan sát được.

Kết quả hữu ích nhất là **[định luật Little](https://en.wikipedia.org/wiki/Little%27s_law)**, một
định lý do nhà nghiên cứu vận hành John Little chứng minh năm 1961: số mục trung bình trong một hệ
thống ổn định bằng tốc độ đến trung bình của các mục nhân với thời gian trung bình mỗi mục ở trong
hệ thống. Chủ đề 2.4 đã dùng kết quả này dưới tên riêng của Flow Framework, tải luồng bằng tốc độ
đến nhân thời gian luồng. Trong bộ từ vựng rộng hơn của cuốn sách này, nó cũng đọc là công việc
đang thực hiện (chủ đề 2.5) bằng tốc độ đến của công việc mới nhân thời gian chu kỳ (chủ đề 2.6).
Đây không phải quy tắc ngón tay cái hay tương quan quan sát được trong vài nghiên cứu. Đó là một
chứng minh đúng với mọi hàng đợi ổn định, bất kể hàng đợi xử lý gì hay quyết định làm gì tiếp theo
bằng cách nào.

Với một đội lớn, tính tổng quát đó chính là điểm mấu chốt. Định luật Little cho bạn một phép kiểm
tra tính hợp lý hoạt động y hệt dù hàng đợi là một bảng kanban, một message broker, hay một đường
ống CI dùng chung. Nếu công việc đang thực hiện, tốc độ đến và thời gian chu kỳ bạn đo được không
xấp xỉ thỏa phương trình, một trong ba con số của bạn sai, thường do định nghĩa không nhất quán
về cái gì tính là "đang tiến hành" hay "đã đến". Các tổ chức doanh nghiệp và chính phủ vận hành
hàng chục hàng đợi như vậy cùng lúc, các nhóm đánh giá mã dùng chung, môi trường kiểm thử dùng
chung, hội đồng phê duyệt dùng chung, và định luật Little là công cụ rẻ nhất hiện có để bắt một
định nghĩa chỉ số tồi trước khi nó dẫn đến một quyết định nhân sự hay quy trình tồi.

## Các nguyên tắc chính

- **Định luật Little là một chứng minh, không phải một heuristic.** Công việc đang thực hiện bằng
  tốc độ đến nhân thời gian chu kỳ, với mọi hàng đợi ổn định, và đó là một phép kiểm tra nhanh xem
  các chỉ số phân phối của bạn có nhất quán nội tại không.
- **Mức sử dụng không tỷ lệ tuyến tính với thời gian chờ.** Khi một tài nguyên dùng chung tiến gần
  đến mức sử dụng đầy đủ, độ trễ xếp hàng tăng mạnh, không dần dần. Một tài nguyên bận 95% thường
  chờ lâu gấp nhiều lần một tài nguyên bận 80%, không chỉ "tệ hơn một chút".
- **Giá trị trung bình của một hàng đợi giấu trường hợp xấu nhất.** Báo cáo chỉ thời gian chờ trung
  bình che giấu cái đuôi dài, đau đớn gần mức công suất, chính xác là điều chủ đề 1.6 cảnh báo khi
  nói về việc dùng phân vị thay vì giá trị trung bình.
- **Cách một hàng đợi được định nghĩa có thể bị lách dễ như mọi chỉ số khác.** Việc một thứ có tính
  là "đã đến", "đang tiến hành" hay "đã được phục vụ" là một lựa chọn, và có thể được tinh chỉnh để
  làm đẹp bảng điều khiển mà không thay đổi điều thực sự xảy ra với công việc.
- **Một đường ống thường là một hàng đợi của các hàng đợi.** Một đường ống phân phối nối nhiều giai
  đoạn lại với nhau, và giai đoạn chậm nhất đặt nhịp cho cả chuỗi bất kể các giai đoạn khác chạy
  nhanh đến đâu.

## Khuyến nghị

### Dùng định luật Little để kiểm tra các con số của chính bạn trước khi tin chúng

Lấy công việc đang thực hiện trung bình đo được của đội, tốc độ đến trung bình của các mục mới mỗi
tuần, và thời gian chu kỳ trung bình, rồi kiểm tra xem công việc đang thực hiện có xấp xỉ bằng tốc
độ đến nhân thời gian chu kỳ không. Khi không, đừng cho rằng lý thuyết sai. Hãy tìm nguyên nhân
thực: một ranh giới giai đoạn được đếm không nhất quán, công việc nằm "bị chặn" nhưng vẫn được
tính là đang thực hiện, hay tốc độ đến được đo trên một cửa sổ khác với thời gian chu kỳ. Phép
kiểm tra đơn lẻ này bắt được nhiều đo đạc tồi hơn bất kỳ cách nào khác mà phần lớn các đội tìm
thấy.

### Theo dõi trực tiếp mức sử dụng cho mọi tài nguyên dùng chung bị giới hạn năng lực

Hãy xác định các tài nguyên mà đường ống phân phối của bạn dùng chung qua nhiều đội, một nhóm đánh
giá mã, một cụm CI, một môi trường staging, và đo mỗi cái chạy bận đến đâu theo tỷ lệ năng lực khả
dụng của nó, trước khi bạn lên kế hoạch chạy nó gần giới hạn. Một nhóm người đánh giá dùng chung
chạy gần hết công suất tạo ra thời gian chờ hàng đợi đánh giá tăng nhanh hơn nhiều so với mức tăng
nhu cầu khiêm tốn gây ra nó, chính là động lực đằng sau lời khuyên của chủ đề 2.9 về việc theo dõi
thời gian đến lần đánh giá đầu tiên như một chỉ báo dẫn.

### Tách riêng tốc độ đến, tỷ lệ thành công, tỷ lệ thất bại và tỷ lệ bỏ qua

Hãy cưỡng lại việc gộp mọi thứ rời khỏi một hàng đợi thành một con số "thông lượng" hay "tốc độ
phục vụ". Hãy theo dõi riêng bốn thứ: công việc đến nhanh thế nào, bao nhiêu phần hoàn thành thành
công, bao nhiêu phần thất bại và cần làm lại, và bao nhiêu phần bị bỏ rơi hoặc lặng lẽ bị bỏ trước
khi ai hoàn thành. Một đường ống trông nhanh vì tỷ lệ bỏ qua của nó lặng lẽ tăng thì thực ra không
giao nhiều hơn, và chỉ việc theo dõi riêng bốn tỷ lệ này mới cho bạn thấy điều đó.

### Mô hình hóa các đường ống nhiều giai đoạn như một hàng đợi của các hàng đợi

Hãy coi một đường ống phân phối, hay bất kỳ quy trình nhiều giai đoạn nào, một vòng đời sự cố, một
đường ống tuyển dụng, như một chuỗi hàng đợi thay vì một khối "thời gian" không phân biệt. Tốc độ đến
tổng thể do giai đoạn đầu đặt ra, tốc độ hoàn thành tổng thể do giai đoạn cuối, và tổng số lỗi và
số bỏ qua của đường ống là tổng của riêng từng giai đoạn. Cách định khung này cho bạn biết ngay giai
đoạn nào đáng đầu tư: giai đoạn có sự kết hợp tệ nhất giữa mức sử dụng cao và tỷ lệ thất bại hoặc
bỏ qua cao, không phải giai đoạn tình cờ dễ đo đạc nhất.

### Đặt định biên nhân sự và giới hạn WIP với mức sử dụng trong tâm trí, không chỉ thông lượng

Khi bạn quyết định một đội cần bao nhiêu người đánh giá hay CI runner, đừng định cỡ năng lực khớp
chính xác với tốc độ đến trung bình. Một hàng đợi chạy ở mức sử dụng 100% trung bình thực tế có
thời gian chờ vô hạn, vì các lần đến thực không đều, không hoàn toàn mượt. Hãy chủ động lên kế hoạch
có dư địa, và coi "người đánh giá của chúng ta gần như luôn bận" là dấu hiệu cảnh báo về thời gian
chờ sắp đến, không phải bằng chứng của việc phân bổ nguồn lực hiệu quả.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không có mô hình hàng đợi chính thức, định biên theo cảm tính | Nhanh để bắt đầu; không có từ vựng mới cho đội | Liên tục đánh giá thấp việc thời gian chờ bùng nổ gần công suất đầy đủ |
| Định luật Little như phép kiểm tra tính hợp lý cho chỉ số sẵn có | Rẻ, không cần công cụ mới, bắt nhanh các định nghĩa tồi | Chỉ kiểm tra tính nhất quán, tự nó không chẩn đoán nguyên nhân |
| Mô phỏng hàng đợi đầy đủ (phân phối đến, nhiều máy chủ) | Dự đoán chính xác nhất hành vi thời gian chờ dưới tải | Cần kỹ năng thống kê thật và bảo trì mà hầu hết các đội sẽ không duy trì |
| Theo dõi mức sử dụng trên tài nguyên dùng chung mà không mô hình hóa sâu hơn | Đơn giản, hành động được, bắt nguyên nhân lớn nhất duy nhất của thời gian chờ mất kiểm soát | Không nói gì về vì sao mức sử dụng cao hoặc cần làm gì với nguyên nhân nền tảng |

Mâu thuẫn trung tâm là **sự nghiêm ngặt so với khả năng áp dụng**. Một mô phỏng hàng đợi đầy đủ cho
câu trả lời chính xác nhất, nhưng hầu như không đội kỹ thuật nào sẽ xây và duy trì nó, và một mô
hình không ai tin hay cập nhật còn tệ hơn không có mô hình. Định luật Little và theo dõi mức sử
dụng cơ bản từ bỏ một phần độ chính xác nhưng không cần kỹ năng thống kê chuyên biệt và khớp thẳng
vào các chỉ số mà một đội vốn đã thu thập cho các chủ đề 2.4 đến 2.6. Hãy mặc định dùng những phép
kiểm tra rẻ, áp dụng được đó, và dành mô phỏng đầy đủ cho trường hợp hiếm hoi khi một tài nguyên
dùng chung đơn lẻ, một đội CI lớn, một nhóm đánh giá chuyên biệt, đủ đắt để biện minh cho khoản đầu
tư.

## Câu hỏi để thảo luận với đội của bạn

1. **Công việc đang thực hiện, tốc độ đến và thời gian chu kỳ đo được của chúng ta có thực sự thỏa
   định luật Little không, và nếu không thì vì sao?** Đây là chẩn đoán nhanh nhất hiện có cho một
   định nghĩa chỉ số tồi. Hãy cùng đi qua các con số thật, và nếu phương trình không xấp xỉ đúng,
   hãy lần sự không khớp về một sự không nhất quán định nghĩa cụ thể thay vì gạt phép kiểm tra đi.

2. **Tài nguyên dùng chung nào trong đường ống phân phối của chúng ta đang chạy gần mức sử dụng đầy
   đủ, và chúng ta có thực sự biết con số mức sử dụng của chúng không?** Phần lớn các đội gọi được
   tên một tài nguyên "luôn có cảm giác bận" nhưng chưa bao giờ đo trực tiếp mức sử dụng của nó. Hãy
   xác định hai hoặc ba tài nguyên dùng chung bị ràng buộc nhất và lấy một con số thật cho mỗi cái.

3. **Chúng ta có đang gộp thành công, thất bại và bỏ qua vào một con số thông lượng không, và chúng
   ta sẽ thấy gì nếu tách chúng ra?** Một số đếm "mục đã hoàn thành" duy nhất có thể tăng ngay cả khi
   chất lượng giảm hay công việc bị lặng lẽ bỏ rơi. Hãy tính lại thông lượng của một giai đoạn gần
   đây thành ba con số riêng và bàn xem sự chia tách cho thấy điều gì mà con số gộp đã giấu.

4. **Ở đâu trong đường ống của chúng ta là nút thắt thật, giai đoạn chậm nhất đặt nhịp cho mọi thứ
   ở hạ nguồn của nó?** Các đội thường đầu tư vào việc tăng tốc giai đoạn dễ cải thiện nhất thay vì
   giai đoạn thực sự ràng buộc tổng thông lượng. Hãy xác định giai đoạn có sự kết hợp tệ nhất giữa
   mức sử dụng cao và tỷ lệ thất bại hoặc bỏ qua cao.

5. **Nếu chúng ta thêm năng lực cho tài nguyên dùng chung bị ràng buộc nhất, thời gian chờ có thực sự
   cải thiện, hay nhu cầu sẽ đơn giản nở ra để lấp đầy nó?** Câu hỏi này tách một sự thiếu hụt năng
   lực thật khỏi một vấn đề nhu cầu, và câu trả lời quyết định cách sửa đúng là thêm nhân sự, một giới
   hạn WIP, hay thay đổi cách ưu tiên hóa công việc trước khi nó vào hàng đợi.

6. **Chúng ta đã bao giờ định nghĩa lại điều gì tính là "đang tiến hành" hay "đã đến" theo cách làm
   bảng điều khiển trông đẹp hơn mà không thay đổi điều thực sự xảy ra với công việc chưa?** Điều này
   đáng hỏi một cách trung thực và cụ thể, với ví dụ thật từ năm vừa qua, thay vì coi nó như một mối
   lo giả định.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Với một nhúm kỹ sư, phần lớn hàng đợi đủ ngắn để phân tích hàng đợi chính thức là
thừa. Thói quen hữu ích nhỏ hơn: nhận ra khi một người, thường là kỹ sư cao cấp nhất, đã thành một
tài nguyên dùng chung trên thực tế mà mọi thứ khác phải chờ, và coi đó là một vấn đề mức sử dụng đáng
gọi tên ngay cả khi không có mô hình chính thức nào đằng sau.

**Doanh nghiệp nhỏ.** Một đội doanh nghiệp nhỏ hiếm khi cần thứ gì tinh vi hơn việc theo dõi mức sử
dụng trên một hoặc hai tài nguyên thực sự dùng chung của mình, thường là một người đánh giá duy nhất
hay một đường ống triển khai duy nhất, và để ý điểm mà "thường rảnh" lặng lẽ trở thành "thường là
nút thắt". Một bảng tính là đủ; công cụ chuyên dụng không cần thiết ở quy mô này.

**Doanh nghiệp lớn.** Tài nguyên dùng chung nhân lên nhanh ở quy mô doanh nghiệp: một đội nền tảng
trung tâm, một hội đồng rà soát bảo mật dùng chung, một đội CI dùng chung phục vụ hàng chục đội sản
phẩm. Đây chính là những tài nguyên mà việc theo dõi mức sử dụng phát huy giá trị, vì một tài nguyên
dùng chung quá tải đơn lẻ có thể lặng lẽ làm suy giảm thời gian phân phối của mọi đội phụ thuộc vào
nó, và chỉ số riêng của không đội nào sẽ lộ ra một nguyên nhân nằm ngoài đường ống của chính họ.

**Chính phủ.** Các chương trình phân phối đa cơ quan và đa nhà cung cấp thường chuyển công việc qua
các hội đồng phê duyệt dùng chung, quy trình cấp phép bảo mật dùng chung, và môi trường kiểm thử
dùng chung mà không đội nào kiểm soát hoặc tự điều chỉnh kích thước được. Phân tích hàng đợi các
cổng dùng chung này, tốc độ đến, năng lực, mức sử dụng, thường là bằng chứng rõ ràng nhất hiện có
cho một hồ sơ kinh doanh để thêm năng lực hoặc thay đổi cách gom lô công việc trước khi nó đến cổng.

## Ví dụ

**Doanh nghiệp lớn.** Đội nền tảng nội bộ của một nhà cung cấp hạ tầng đám mây nhận thấy thời gian dẫn
của thay đổi (chủ đề 2.10) đã nhích lên ở mọi đội sản phẩm phụ thuộc vào đội CI dùng chung của nó,
dù không đội nào thay đổi cách làm việc. Một phân tích mức sử dụng thấy đội CI chạy bận trên 90%
trong giờ cao điểm, vượt xa điểm mà lý thuyết hàng đợi dự đoán thời gian chờ tăng mạnh thay vì dần
dần. Đội nền tảng thêm năng lực CI và đưa vào một chính sách lập lịch chia đều để không đợt hoạt
động bùng phát của một đội nào độc chiếm hàng đợi. Thời gian chờ CI trung vị giảm hơn một nửa trong
một tháng, bằng chứng rằng nút thắt đã luôn là một hàng đợi dùng chung, vô hình.

**Chính phủ.** Đội dịch vụ số của một cơ quan cấp phép quốc gia theo dõi việc xử lý hồ sơ như một
con số thông lượng "hồ sơ đóng mỗi tuần" duy nhất trong hai năm, và con số trông ổn định. Một phân
tích kỹ hơn, tách con số đó thành hồ sơ được duyệt, bị từ chối, và bị người nộp đơn bỏ sau những lần
chậm trễ dài, thấy tỷ lệ bỏ cuộc đã tăng gần gấp ba trong cùng giai đoạn trong khi tỷ lệ duyệt đi
ngang. Định luật Little, áp dụng cho hàng đợi nhân viên xử lý, cho thấy công việc đang thực hiện đã
tăng vượt xa so với thời gian xử lý trung bình đã nêu ngụ ý, nghĩa là các hồ sơ lặng lẽ chất đống
trong một trạng thái không được tính là "đang chờ". Cơ quan tái cấu trúc định nghĩa theo dõi hồ sơ
để đếm trung thực mọi hồ sơ đang mở và thêm năng lực nhân viên xử lý được định cỡ để giữ mức sử dụng
dưới 85%, nay được theo dõi như một mục tiêu vận hành thường trực bên cạnh con số thông lượng.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng phân tích hàng đợi cơ bản là nó biến "đường ống có cảm giác chậm" thành một
quyết định cụ thể, bảo vệ được, thêm dư địa cho tài nguyên dùng chung này, tách chỉ số gộp này thành
các thành phần thật của nó, thay vì một lời thúc giục mơ hồ "làm nhanh hơn" bỏ sót nguyên nhân thực.
Ví dụ hạ tầng đám mây ở trên, giảm một nửa thời gian chờ nhờ một cách sửa về năng lực và lập lịch
thay vì bất kỳ thay đổi nào trong hành vi của từng đội, là kiểu mẫu mà phân tích này tạo ra một cách
đáng tin: cách sửa hầu như luôn rẻ hơn việc yêu cầu mọi đội ở hạ nguồn di chuyển nhanh hơn quanh một
nút thắt mà họ không thấy.

Tổng chi phí áp dụng thực sự thấp. Định luật Little và theo dõi mức sử dụng không cần công cụ mới nào
ngoài những gì các chủ đề 2.4 đến 2.6 đã yêu cầu bạn thu thập: tốc độ đến, công việc đang thực hiện
và thời gian chu kỳ. Khoản đầu tư chủ yếu là kỷ luật phân tích, đối chiếu các con số với nhau và định
kỳ rà soát mức sử dụng trên các tài nguyên dùng chung trước khi chúng thành sự suy giảm thời gian dẫn
không giải thích được tiếp theo của tổ chức.

## Phản mẫu và cạm bẫy

- **Định cỡ năng lực của một tài nguyên dùng chung khớp chính xác với tốc độ đến trung bình của nó:**
  đảm bảo mức sử dụng cao và thời gian chờ mất kiểm soát bất cứ khi nào nhu cầu dù chỉ thoáng không
  đều.
- **Chỉ báo cáo thời gian chờ trung bình, không bao giờ một phân vị:** giấu cái đuôi dài quan trọng
  nhất với những người đang chờ trong đó.
- **Gộp thành công, thất bại và bỏ qua vào một con số thông lượng:** véc-tơ bị lách ở trung tâm của
  chủ đề này. Một đội dưới áp lực có thể làm thông lượng trông khỏe mạnh bằng cách lặng lẽ để tỷ lệ
  bỏ qua tăng, phiếu bị bỏ rơi, yêu cầu bị lặng lẽ bỏ, công việc không bao giờ được tính là thất bại.
  Rào chắn là theo dõi tốc độ đến, tỷ lệ thành công, thất bại và bỏ qua như bốn con số riêng, nhìn
  thấy được, cùng kỷ luật mà chủ đề 1.2 yêu cầu với mọi chỉ số trong cuốn sách này, để một tỷ lệ bỏ
  qua đang tăng không thể ẩn sau một biểu đồ thông lượng đi ngang.
- **Coi "người của chúng ta luôn bận" là một lời khen:** đó là triệu chứng của mức sử dụng cao,
  nguyên nhân hàng đầu của thời gian chờ dài, khó đoán.
- **Định nghĩa lại "đang tiến hành" để lặng lẽ thu nhỏ công việc đang thực hiện:** chuyển công việc
  sang một trạng thái không được đếm, "bị chặn", "tạm hoãn", mà không đổi thời gian hoàn thành, và phá
  vỡ phép kiểm tra định luật Little vốn sẽ bắt được nó.
- **Cho rằng một mô hình hàng đợi không cần bảo trì sau khi xây:** các kiểu đến và năng lực thay đổi
  liên tục, và một mô hình lỗi thời tạo ra những dự đoán sai một cách tự tin.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Không hàng đợi nào được đo tường minh; thời gian chờ được bàn mang tính giai
  thoại là "mọi thứ có cảm giác chậm".
- **Mức 2, Phát triển:** Tốc độ đến, công việc đang thực hiện và thời gian chu kỳ được theo dõi cho
  ít nhất một đường ống, nhưng không bao giờ được kiểm tra với định luật Little hay mức sử dụng trên
  các tài nguyên dùng chung.
- **Mức 3, Chuẩn hóa:** Định luật Little là phép kiểm tra tính nhất quán thường lệ qua các đường ống
  phân phối, và mức sử dụng được theo dõi tường minh cho các tài nguyên dùng chung quan trọng nhất.
- **Mức 4, Quản lý:** Tỷ lệ thành công, thất bại và bỏ qua được theo dõi riêng cho mọi hàng đợi quan
  trọng, và các quyết định về năng lực dùng mục tiêu mức sử dụng, không chỉ nhu cầu trung bình.
- **Mức 5, Điều phối:** Tổ chức mô hình hóa các đường ống chính như hàng đợi của các hàng đợi, xác
  định các nút thắt thật một cách có hệ thống, và có thể chỉ ra các thay đổi cụ thể về năng lực hay
  quy trình được thực hiện nhờ phân tích hàng đợi, với cải thiện thời gian chờ đo được để chứng minh.

## Ý tưởng để thảo luận

1. Hãy chọn một đường ống phân phối của chúng ta và kiểm tra xem hôm nay các con số của nó có thỏa định luật Little không.
2. Hãy gọi tên tài nguyên dùng chung duy nhất trong tổ chức mà hầu hết mọi người đồng ý là "luôn bận", và tìm con số mức sử dụng thực của nó.
3. Biểu đồ thông lượng của chúng ta sẽ trông ra sao nếu tách nó thành tỷ lệ thành công, thất bại và bỏ qua của quý vừa rồi?
4. Nếu chúng ta phải thêm năng lực cho đúng một tài nguyên dùng chung trong năm nay, đó là cái nào, và bằng chứng nào sẽ biện minh cho điều đó?

## Điểm chính cần nhớ

- **Định luật Little**, công việc đang thực hiện bằng tốc độ đến nhân thời gian chu kỳ, là một chứng
  minh, không phải heuristic, và là phép kiểm tra rẻ nhất hiện có xem các chỉ số phân phối của bạn có
  nhất quán nội tại không.
- **Thời gian chờ tăng mạnh, không dần dần, khi mức sử dụng tiến gần công suất đầy đủ.** Hãy coi "luôn
  bận" là dấu hiệu cảnh báo, không phải lời khen.
- Hãy theo dõi riêng **tốc độ đến, tỷ lệ thành công, thất bại và bỏ qua**; gộp chúng vào một con số
  thông lượng là véc-tơ bị lách trung tâm của chủ đề này.
- Hãy mô hình hóa một đường ống nhiều giai đoạn như một **hàng đợi của các hàng đợi**, và đầu tư vào
  giai đoạn có sự kết hợp tệ nhất giữa mức sử dụng cao và tỷ lệ thất bại hoặc bỏ qua cao, không phải
  giai đoạn dễ cải thiện nhất.
- Ưu tiên các phép kiểm tra rẻ, áp dụng được, **định luật Little và theo dõi mức sử dụng**, hơn một mô
  phỏng hàng đợi đầy đủ mà ít đội sẽ duy trì.

## Tài liệu tham khảo và đọc thêm

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on
  the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product
  Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
