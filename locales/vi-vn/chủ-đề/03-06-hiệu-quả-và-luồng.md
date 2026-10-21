# 3.6 Hiệu quả và luồng: làm việc sâu và gián đoạn

## Tổng quan và động lực

**Hiệu quả và luồng (efficiency and flow)**, chiều cuối cùng của SPACE (chủ đề 3.1), đo sự vắng mặt của ma sát và khả năng duy
trì công việc tập trung, không bị gián đoạn. Chiều này nằm ở ranh giới giữa các chỉ số luồng phân phối của Phần 2 (hiệu suất luồng
ở chủ đề 2.5 đo công việc di chuyển qua một hệ thống đội ra sao) và một thứ cá nhân hơn: trải nghiệm nhận thức của từng cá nhân về
công việc kỹ thuật sâu, tập trung, và việc trải nghiệm đó bị gián đoạn làm vỡ vụn thường xuyên đến đâu. Kỹ thuật phần mềm, hơn hầu
hết các công việc tri thức, phụ thuộc vào việc giữ một lượng ngữ cảnh lớn trong bộ nhớ làm việc cùng lúc, khiến nó đặc biệt dễ bị
tổn thương bởi cái giá của sự gián đoạn.

Nghiên cứu về cái giá này nhất quán và đáng suy nghĩ: tập trung lại sau một lần gián đoạn của công việc sâu, phức tạp không mất vài
giây, mà thường mất nhiều phút, đôi khi gần nửa giờ, để xây dựng lại hoàn toàn [bộ nhớ làm việc](https://en.wikipedia.org/wiki/Working_memory)
mà một kỹ sư đang giữ trước khi sự gián đoạn xảy ra. Một kỹ sư có ngày làm việc bị chia thành các khối mười lăm phút bởi họp,
thông báo và chuyển đổi ngữ cảnh có thể cho thấy nhiều hoạt động (chủ đề 3.4) trong khi hoàn thành ít công việc thực sự khó hơn
nhiều so với cùng kỹ sư đó với hai giờ được bảo vệ, không bị gián đoạn. Chiều này tồn tại cụ thể để làm cái giá vô hình đó nhìn
thấy được.

Với các đội lớn, cái giá của sự gián đoạn cộng dồn về mặt cấu trúc: nhiều cuộc họp hơn, nhiều chi phí phối hợp xuyên đội hơn, nhiều
kênh Slack và thông báo hơn, nhiều điểm kiểm soát quy trình hơn, tất cả đều riêng lẻ có vẻ hợp lý nhưng cùng nhau làm vỡ vụn ngày
làm việc nặng nề. Các tổ chức doanh nghiệp và chính phủ, với nhu cầu quản trị và phối hợp nặng hơn, đặc biệt dễ bị phân mảnh này,
và chiều này cho lãnh đạo một cách cụ thể để đo và phòng vệ, thay vì coi "thời gian tập trung" như một khát vọng văn hóa mơ hồ mà
không ai thực sự bảo vệ.

## Các nguyên tắc chính

- **Chuyển đổi ngữ cảnh có một cái giá thật, đo được, không chỉ là cảm nhận.** Tập trung lại sau một lần gián đoạn thường mất nhiều
  phút, không phải vài giây.
- **Khối lượng họp và tần suất gián đoạn đo được, không chỉ là giai thoại.** Dữ liệu lịch và công cụ có thể làm lộ cả hai trực
  tiếp.
- **Thời gian được bảo vệ, không bị gián đoạn là một nguồn lực khan hiếm phải được bảo vệ có chủ đích,** không phải thứ tự động
  sống sót khi tổ chức lớn lên.
- **Chiều này thường giải thích khoảng cách giữa hoạt động và hiệu suất** (chủ đề 3.3 và 3.4): hoạt động cao với hiệu suất thấp
  đôi khi truy ngược về những ngày làm việc phân mảnh, nhiều gián đoạn.
- **Sự khác biệt cá nhân về nhu cầu tập trung là có thật,** và chiều này nên thông tin cho chuẩn mực của đội, không ép một lịch
  trình cứng nhắc, giống hệt lên mọi người.

## Khuyến nghị

### Đo khối lượng họp và sự phân mảnh trực tiếp từ dữ liệu lịch

Hãy tính số lượng và thời lượng các khối hai giờ trở lên không bị gián đoạn có trong tuần điển hình của một kỹ sư, dùng dữ liệu
lịch. Con số đơn lẻ này, đôi khi gọi là **thời gian tập trung (focus time)** hay **thời gian người tạo (maker time)**, là một đại
diện trực tiếp, đo đạc được cho chiều này, và thường thấy rằng một kỹ sư danh nghĩa làm toàn thời gian gần như không có khối nào như
vậy trong một tuần điển hình một khi tính cả các cuộc họp, một phát hiện thường làm lãnh đạo ngạc nhiên hơn chính các kỹ sư.

### Theo dõi tần suất gián đoạn từ dữ liệu công cụ khi có

Khối lượng thông báo, tần suất tin nhắn đến trong giờ làm việc, và tốc độ chuyển đổi ngữ cảnh giữa các tác vụ đều có thể ước tính
từ các công cụ cộng tác sẵn có. Hãy dùng dữ liệu này ở dạng tổng hợp, cấp đội, theo cùng nguyên tắc với dữ liệu hoạt động (chủ đề
3.4): không bao giờ như một cơ chế giám sát cá nhân, luôn như một tín hiệu cấp đội về việc chi phí phối hợp của tổ chức đã lớn quá
mức bảo vệ sự tập trung thực sự hay chưa.

### Bảo vệ các khối thời gian tập trung tường minh như một chuẩn mực của đội hay tổ chức

Can thiệp hiệu quả nhất mà chiều này chỉ tới là đơn giản và chi phí thấp: chỉ định các khối thời gian cụ thể, được bảo vệ, thường
là một buổi sáng hay buổi chiều vào những ngày nhất định, trong đó các cuộc họp không được lên lịch theo mặc định. Điều này cần sự
đồng thuận của tổ chức vượt quá tầm kiểm soát của một đội đơn lẻ, vì các cuộc họp thường được lên lịch xuyên ranh giới đội, nhưng
khi được thực hiện nhất quán, đó là một trong những can thiệp có lợi tức cao nhất, chi phí thấp nhất trong toàn bộ cuốn sách này.

### Tương quan dữ liệu luồng với khoảng cách hoạt động-hiệu suất

Khi một đội cho thấy hoạt động cao (chủ đề 3.4) nhưng hiệu suất đi ngang hoặc giảm (chủ đề 3.3), hãy kiểm tra dữ liệu luồng và gián
đoạn trước khi cho rằng khoảng cách phản ánh vấn đề năng lực của cá nhân hay đội. Một lịch trình bị phân mảnh nặng có thể tạo ra
đúng kiểu mẫu này: nhiều chuyển động nhìn thấy được, ít công việc thực sự khó được hoàn thành, vì công việc khó đòi hỏi cụ thể sự
tập trung bền vững mà sự phân mảnh phá hủy.

### Tôn trọng sự khác biệt cá nhân thay vì áp đặt một lịch trình cứng nhắc duy nhất

Không phải kỹ sư nào cũng cần, hay làm việc tốt nhất với, các kiểu mẫu thời gian tập trung giống hệt nhau; một số thực sự suy nghĩ
tốt nhất trong các đợt ngắn hơn, người khác cần những khoảng dài, không gián đoạn. Hãy dùng dữ liệu của chiều này để thông tin cho
chuẩn mực và mặc định cấp đội, các khối được bảo vệ mà người ta có thể chọn không tham gia thay vì bắt buộc, thay vì một lịch trình
cưỡng chế duy nhất giả định nhu cầu đồng đều ở mọi người.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không bảo vệ thời gian tập trung | Tính linh hoạt lịch trình tối đa cho các cuộc họp | Những ngày bị phân mảnh làm giảm năng lực cho công việc thực sự khó |
| Khối tập trung được bảo vệ cấp đội | Chi phí thấp, lợi tức cao, bảo vệ trực tiếp công việc sâu | Cần sự đồng thuận phối hợp vượt quá một đội đơn lẻ |
| Khoảng thời gian không họp toàn tổ chức | Bảo vệ mạnh nhất, khó bị xói mòn nhất | Cần cam kết rộng của tổ chức và có thể gây cảm giác cứng nhắc với các vai trò cần phối hợp nhiều hơn |
| Lập lịch tập trung cá nhân tự chọn tham gia | Tôn trọng sự khác biệt cá nhân về phong cách làm việc | Bảo vệ mặc định yếu hơn; dễ bị xói mòn dưới áp lực lịch trình |

Mâu thuẫn trung tâm là **nhu cầu phối hợp so với bảo vệ sự tập trung**. Các tổ chức lớn thực sự cần họp và phối hợp xuyên đội để vận
hành, và nhu cầu đó kéo trực tiếp ngược lại với thời gian không gián đoạn mà công việc kỹ thuật sâu đòi hỏi. Hãy giải quyết không
phải bằng cách loại bỏ sự phối hợp mà bằng cách làm thời gian tập trung thành một mặc định tường minh, được bảo vệ thay vì bất cứ
thời gian nào tình cờ còn lại sau khi mọi yêu cầu họp được chấp nhận, coi việc bảo vệ sự tập trung là một nguồn lực cần phòng vệ có
chủ đích thay vì phần dư.

## Câu hỏi để thảo luận với đội của bạn

1. **Một kỹ sư điển hình ở đội chúng ta thực sự có bao nhiêu khối hai giờ không bị gián đoạn trong một tuần, đo từ dữ liệu lịch
   thật?** Phần lớn các đội chưa bao giờ kiểm tra điều này trực tiếp, và câu trả lời, khi đo, thường thấp hơn bất kỳ ai đoán từ ấn
   tượng một mình.

2. **Chúng ta đã bao giờ thấy một khoảng cách giữa hoạt động và hiệu suất mà dữ liệu luồng có thể giải thích không?** Hãy nhìn vào
   một giai đoạn một đội có vẻ bận nhưng giao thiếu công việc thực sự khó, và kiểm tra xem khối lượng họp hay sự phân mảnh có thể giải
   thích khoảng cách không.

3. **Cần gì để thiết lập một khối tập trung không họp, được bảo vệ cho đội của chúng ta, và hôm nay điều gì đang cản trở?** Hãy gọi
   tên trở ngại cụ thể, thói quen lên lịch xuyên đội, kỳ vọng của lãnh đạo về sự sẵn sàng liên tục, và bàn xem nó có thực sự cố định
   như cảm giác không.

4. **Chúng ta có tôn trọng sự khác biệt cá nhân về nhu cầu tập trung, hay lịch trình hiện tại giả định mọi người làm việc như nhau?**
   Hãy hỏi trực tiếp các thành viên đội họ thực sự thích tổ chức công việc tập trung ra sao, thay vì giả định một kiểu mẫu một cỡ
   vừa mọi người.

5. **Khối lượng họp của chúng ta đã thay đổi thế nào trong năm qua, và có ai nhận ra xu hướng trước buổi thảo luận này không?** Sự
   phân mảnh thường len vào từ từ, từng cuộc họp định kỳ có vẻ hợp lý một, và hiếm khi là kết quả của một quyết định có chủ đích đơn
   lẻ.

6. **Nếu chúng ta bảo vệ hai buổi chiều đầy đủ mỗi tuần cho công việc sâu trên toàn tổ chức, chúng ta sẽ phải nói không với điều gì,
   và có đáng không?** Câu hỏi đánh đổi cụ thể này buộc sự căng thẳng giữa phối hợp và tập trung ra ánh sáng thay vì để nó như một
   khát vọng trừu tượng.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Khối lượng họp thường thấp một cách tự nhiên với một đội nhỏ, và rủi ro thay vào đó là chuyển đổi ngữ cảnh do đội
nhiều vai trò cùng lúc hơn là do các cuộc họp được lên lịch cụ thể. Hãy bảo vệ thời gian tập trung có chủ đích ngay cả ở quy mô nhỏ,
vì thói quen này dễ thiết lập sớm hơn là bổ sung về sau.

**Doanh nghiệp nhỏ.** Một chuẩn mực đơn giản, không chính thức, không họp nội bộ trước buổi trưa chẳng hạn, có thể nắm bắt phần lớn
lợi ích của chiều này mà không cần công cụ phân tích lịch. Kỷ luật quan trọng hơn phép đo ở quy mô này.

**Doanh nghiệp lớn.** Khối lượng họp và chi phí phối hợp xuyên đội mở rộng tệ ở đây, và sự phân mảnh thường len vào qua nhiều cuộc
họp định kỳ riêng lẻ hợp lý mà không ai xem xét tổng thể. Hãy đo trực tiếp khả năng có thời gian tập trung bằng dữ liệu lịch trên
toàn tổ chức, và coi các khối tập trung được bảo vệ là chính sách toàn tổ chức, không phải một lựa chọn từng đội bị ghi đè bởi thói
quen lên lịch xuyên đội.

**Chính phủ.** Các yêu cầu quản trị và phối hợp nặng phổ biến ở các tổ chức khu vực công khiến chiều này đặc biệt quan trọng để bảo
vệ có chủ đích, vì lực kéo tự nhiên về nhiều quy trình và nhiều cuộc họp rà soát hơn là mạnh. Hãy định khung việc bảo vệ thời gian
tập trung tường minh như một khoản đầu tư năng suất khi trình bày với các bên liên quan có thể coi việc giảm họp là giảm giám sát
thay vì bảo vệ năng lực kỹ thuật thực sự.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty công nghệ tài chính nhận thấy một khoảng cách dai dẳng giữa hoạt động
commit và khả năng của đội phát hành đúng hạn các tính năng thực sự phức tạp. Phân tích lịch thấy kỹ sư trung vị có chưa đến ba giờ
các khối hai giờ không bị gián đoạn mỗi tuần, bị phân mảnh qua một lịch trình các cuộc họp trạng thái định kỳ, nhiều cuộc được thêm
dần trong hai năm mà không có quyết định đơn lẻ nào thêm vào ngần ấy tổng khối lượng họp. Công ty đưa ra hai buổi chiều không họp
bắt buộc, toàn tổ chức mỗi tuần, và một khảo sát tiếp theo cùng rà soát chỉ số phân phối sáu tháng sau cho thấy cả điểm hài lòng
được cải thiện lẫn thời gian chu kỳ (chủ đề 2.6) giảm đo được riêng cho các tính năng phức tạp, nhiều ngày.

**Chính phủ.** Đội kỹ thuật của một cơ quan liên bang, hoạt động dưới các yêu cầu quản trị nặng, thấy rằng kỹ sư đang dành gần 40%
giờ làm việc trong các cuộc họp trạng thái và rà soát tuân thủ, dựa trên một cuộc kiểm toán lịch tiến hành sau khi nhiều kỹ sư nêu
mối lo trong phỏng vấn thôi việc. Thay vì loại bỏ các yêu cầu quản trị, vốn phục vụ các mục đích giám sát thật, đội hợp nhất các cuộc
họp trạng thái thừa thành một buổi rà soát hằng tuần duy nhất và chuyển các kiểm tra tuân thủ thường lệ sang rà soát tài liệu bất
đồng bộ thay vì họp trực tiếp, cắt giảm khối lượng họp gần một nửa trong khi giữ chức năng giám sát nền tảng, và dữ liệu khảo sát sau
đó cho thấy một cải thiện có ý nghĩa về thời gian tập trung được báo cáo.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc bảo vệ thời gian tập trung không cân xứng với chi phí của nó: ví dụ công ty công nghệ tài chính ở trên cho thấy một
cải thiện phân phối đo được từ một thay đổi không tốn gì ngoài kỷ luật lịch trình, hai buổi chiều không họp mỗi tuần. Vì công việc
sâu, phức tạp phụ thuộc cụ thể vào sự chú ý bền vững, không bị gián đoạn, ngay cả một sự tăng khiêm tốn về thời gian tập trung thực
sự cũng có thể tạo ra một cải thiện quá cỡ về năng lực của tổ chức cho công việc khó nhất, giá trị cao nhất của nó.

Tổng chi phí sở hữu gần như hoàn toàn là kỷ luật tổ chức hơn là đầu tư công cụ: dữ liệu lịch thường đã có sẵn, và bản thân can thiệp,
bảo vệ các khối cụ thể, không tốn gì để thực hiện ngoài sự sẵn lòng nói không với việc lên lịch họp trong các khối đó. Chi phí liên
tục chính là bảo vệ thời gian được bảo vệ khỏi sự xói mòn dần khi những nhu cầu phối hợp mới chắc chắn nảy sinh.

## Phản mẫu và cạm bẫy

- **Coi những ngày bị phân mảnh là cái giá không thể tránh của quy mô:** nó cộng dồn dần dần và hiếm khi là kết quả của một quyết định
  có chủ đích, điều khiến nó dễ bị bỏ mặc.
- **Nhầm hoạt động cao với hiệu suất cao mà không kiểm tra dữ liệu luồng:** một lịch trình phân mảnh có thể tạo ra đúng kiểu mẫu
  gây hiểu lầm này.
- **Áp đặt một lịch trình thời gian tập trung cứng nhắc duy nhất lên mọi người:** bỏ qua sự khác biệt cá nhân thật về cách mọi người
  làm việc tốt nhất.
- **Dùng dữ liệu gián đoạn hay thông báo như giám sát cá nhân:** lặp lại đúng rủi ro dùng sai mà chủ đề 3.4 cảnh báo cho dữ liệu hoạt
  động.
- **Để thời gian tập trung được bảo vệ xói mòn dần qua các ngoại lệ:** cùng rủi ro xói mòn mà chủ đề 2.5 cảnh báo cho giới hạn WIP,
  áp dụng cho việc bảo vệ thời gian tập trung.
- **Thêm yêu cầu quản trị hay phối hợp mà không bao giờ đo chi phí khối lượng họp tích lũy của chúng:** sự phân mảnh len vào từng
  bổ sung có vẻ hợp lý một.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Thời gian tập trung và chi phí gián đoạn không được đo hay bảo vệ; khối lượng họp tăng mà không ai theo dõi
  tác động tích lũy của nó.
- **Mức 2, Phát triển:** Có một chút nhận thức không chính thức về sự phân mảnh, nhưng không dữ liệu lịch nào được phân tích và
  không thời gian được bảo vệ nào được thiết lập chính thức.
- **Mức 3, Chuẩn hóa:** Khả năng có thời gian tập trung được đo từ dữ liệu lịch, và các khối không họp, được bảo vệ được thiết lập
  như một chuẩn mực của đội hay tổ chức.
- **Mức 4, Quản lý:** Dữ liệu luồng được tương quan chủ động với các khoảng cách hoạt động-hiệu suất để chẩn đoán hiệu suất kém do
  phân mảnh, và thời gian được bảo vệ được giám sát về sự xói mòn.
- **Mức 5, Điều phối:** Tổ chức coi việc bảo vệ thời gian tập trung là một khoản đầu tư năng suất hạng nhất, có thể chỉ ra các cải
  thiện phân phối và hài lòng cụ thể truy ngược về nó, và phòng vệ nó chủ động trước áp lực dần dần, tăng thêm mà nếu không sẽ làm
  nó xói mòn.

## Ý tưởng để thảo luận

1. Mỗi chúng ta thực sự có bao nhiêu giờ không bị gián đoạn tuần trước?
2. Khối lượng họp của chúng ta có tăng dần mà không ai quyết định điều đó một cách có chủ đích không?
3. Ở đâu một khoảng cách hoạt động-hiệu suất gần đây có thể thực sự là một vấn đề luồng?
4. Cuộc họp định kỳ đơn lẻ nào chúng ta sẽ cắt trước nhất nếu được yêu cầu giảm sự phân mảnh?
5. Hai buổi chiều không họp, được bảo vệ mỗi tuần sẽ thực sự tốn gì để thiết lập?

## Điểm chính cần nhớ

- Hiệu quả và luồng đo **sự vắng mặt của ma sát** và khả năng duy trì **công việc tập trung, không bị gián đoạn**, thứ mà kỹ thuật
  phần mềm phụ thuộc đặc biệt nặng.
- **Chuyển đổi ngữ cảnh có một cái giá thật, đo được**, thường là nhiều phút để tập trung lại, không phải vài giây.
- Đo **khả năng có thời gian tập trung trực tiếp từ dữ liệu lịch**; kết quả thường làm lãnh đạo ngạc nhiên.
- Chiều này thường **giải thích một khoảng cách giữa hoạt động và hiệu suất** mà nếu không sẽ bị chẩn đoán sai.
- **Các khối thời gian tập trung được bảo vệ** là một can thiệp chi phí thấp, lợi tức cao, nhưng cần được phòng vệ có chủ đích trước
  sự xói mòn dần.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of
  Developer Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, của Cal Newport (cái giá của chuyển đổi ngữ cảnh và giá trị của
  thời gian tập trung được bảo vệ).
- *Peopleware: Productive Projects and Teams*, của Tom DeMarco và Timothy Lister (cái giá của gián đoạn và thiết kế môi trường bảo
  vệ sự tập trung).
- Mark, Gloria, Daniela Gudith, và Ulrich Klocke, "The Cost of Interrupted Work: More Speed and Stress" (2008): nghiên cứu thực
  nghiệm về thời gian phục hồi sau gián đoạn.
