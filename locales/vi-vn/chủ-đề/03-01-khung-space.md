# 3.1 Khung SPACE

## Tổng quan và động lực

[Khung SPACE](https://queue.acm.org/detail.cfm?id=3454124), được công bố năm 2021 bởi các nhà nghiên cứu Nicole
Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck và Jenna Butler, được xây để
trả lời một vấn đề cụ thể: các chỉ số [năng suất lập trình viên](https://en.wikipedia.org/wiki/Productivity)
chỉ một con số, số dòng mã, số commit, story point, bị lách dễ dàng và thường xuyên gây hiểu lầm. SPACE đề xuất
đo lường qua năm chiều thay vào đó: **Sự hài lòng và phúc lợi (Satisfaction and well-being)**, **Hiệu suất
(Performance)**, **Hoạt động (Activity)**, **Giao tiếp và cộng tác (Communication and collaboration)**, và
**Hiệu quả và luồng (Efficiency and flow)**. Không chữ cái đơn lẻ nào được kỳ vọng đứng một mình; đóng góp thực
sự của khung là kỷ luật giữ cả năm trong tầm mắt cùng nhau, để một đội không thể trông năng suất ở một trục
trong khi lặng lẽ làm hại một trục khác.

Điều này quan trọng vì năng suất lập trình viên không phải một thứ duy nhất. Một đội có thể rất hoạt động
(nhiều commit, nhiều pull request) trong khi hiệu suất kém (công việc không làm dịch chuyển các kết quả quan
trọng). Một đội có thể hoạt động tốt trong ngắn hạn trong khi sự hài lòng sụp đổ, một chỉ báo dẫn của việc nghỉ
việc và sụp đổ chất lượng sẽ lộ ra nhiều tháng sau. Hiểu biết của SPACE, xây trực tiếp trên chủ đề 1.2 và chủ
đề 1.3 của cuốn sách này, là bất kỳ chiều nào trong số này, khi theo đuổi như một mục tiêu đứng riêng, sẽ bị
lách với cái giá là các chiều khác, và khung tồn tại cụ thể để làm sự đánh đổi đó nhìn thấy được trước khi nó
gây hại thật.

Với các đội lớn, SPACE cho lãnh đạo một bộ từ vựng chung cho một cuộc trò chuyện vốn mặc định rơi vào bất kỳ
chiều nào dễ đo nhất, hầu như luôn là hoạt động. Các tổ chức doanh nghiệp so sánh năng suất qua nhiều đội cần
một khung chống lại lực kéo về việc đếm commit; các tổ chức chính phủ đối mặt với áp lực tuyển dụng và giữ chân
trên một thị trường lao động cạnh tranh cần dữ liệu hài lòng và phúc lợi nghiêm túc như dữ liệu phân phối, vì mất
một kỹ sư giàu kinh nghiệm vì kiệt sức tốn kém hơn nhiều so với những gì sản lượng của bất kỳ sprint đơn lẻ nào
từng tiết kiệm được.

## Các nguyên tắc chính

- **Không chiều SPACE đơn lẻ nào đáng tin khi đứng riêng.** Giá trị của khung đến cụ thể từ việc đo nhiều chiều
  cùng nhau.
- **Ít nhất một chỉ số từ ít nhất ba chiều, trộn nguồn chủ quan và khách quan, là mức tối thiểu cho một bức tranh
  cân bằng.** Một bộ chỉ số rút hoàn toàn từ một chiều hay một loại dữ liệu thực ra không dùng SPACE.
- **Hoạt động là chiều dễ bị dùng sai nhất như một đại diện đứng riêng.** Nó dễ đo nhất và ít đại diện nhất cho
  giá trị thực khi đứng một mình.
- **Đo lường cấp đội và cấp cá nhân cần cách xử lý khác nhau.** SPACE được thiết kế chủ yếu cho hiểu biết cấp
  đội và hệ thống, không phải cho bảng điểm cá nhân.
- **Năm chiều tương tác với nhau.** Một thay đổi cải thiện chiều này có thể làm suy giảm chiều khác, và khung
  tồn tại để bắt sự đánh đổi đó.

## Khuyến nghị

### Dựng bộ chỉ số của bạn từ ít nhất ba chiều trước khi tin nó

Đừng áp dụng SPACE bằng cách chọn một chiều yêu thích, thường là hoạt động hay hiệu suất, rồi coi như xong. Hãy
cố ý chọn ít nhất một chỉ số từ ít nhất ba trong năm chiều, trộn đo đạc khách quan (chủ đề 1.5) với dữ liệu
khảo sát chủ quan (chủ đề 3.7), trước khi trình bày bất kỳ kết luận nào về năng suất đội. Thành phần tối thiểu
này là điều ngăn SPACE sụp đổ trở lại vấn đề đại diện đơn lẻ mà nó được thiết kế để giải quyết.

### Coi chỉ số hoạt động là bối cảnh, không bao giờ là tiêu đề

Số commit, số dòng mã và số pull request là dữ liệu chiều-hoạt động chính đáng của SPACE, nhưng chúng không bao
giờ nên là chỉ số chính hay duy nhất được trình bày về năng suất của một đội. Hãy dùng dữ liệu hoạt động để cung
cấp bối cảnh cho các chiều khác, ví dụ nhận thấy rằng một sự giảm hoạt động trùng với sự tăng hài lòng vì đội cuối
cùng có chỗ để trả nợ kỹ thuật, thay vì như một phán quyết độc lập. Chủ đề 3.4 bao quát sâu các rủi ro cụ thể của
chiều này.

### Áp dụng SPACE ở cấp đội và hệ thống, không phải cấp cá nhân

Nghiên cứu gốc của SPACE và việc ngành áp dụng sau đó đều coi khung như một thấu kính để hiểu năng suất đội và
tổ chức, không phải một bảng điểm hiệu suất cá nhân. Áp dụng các chiều SPACE để xếp hạng cá nhân, đặc biệt là
chiều hoạt động, tái tạo đúng rủi ro bị lách mà chủ đề 1.2 cảnh báo và áp dụng sai một khung chưa bao giờ được
kiểm chứng cho cách dùng đó.

### Theo dõi các đánh đổi giữa các chiều, không chỉ chuyển động trong một chiều

Sức mạnh chẩn đoán thật của khung đến từ việc quan sát các chiều dịch chuyển tương đối với nhau thế nào. Một chỉ
số hiệu suất tăng cùng sự hài lòng giảm là dấu hiệu cảnh báo đáng điều tra ngay, có thể chỉ ra nhịp độ không bền
vững. Một chỉ số hoạt động tăng cùng hiệu suất đi ngang hoặc giảm gợi ý công việc bận rộn vô ích hơn là tiến bộ
thật. Hãy rà soát cả năm chiều cùng nhau theo nhịp cố định cụ thể để bắt các kiểu mẫu xuyên chiều này, không chỉ
để kiểm tra từng con số riêng lẻ.

### Trộn các nhịp đo một cách phù hợp giữa các chiều

Một số chiều SPACE thay đổi chậm và được đo tốt nhất định kỳ (sự hài lòng, thường theo chu kỳ khảo sát hằng
quý); số khác thay đổi nhanh và hưởng lợi từ việc theo dõi tự động, thường xuyên hơn (hoạt động, hiệu quả và luồng,
cả hai phần lớn đo đạc được từ các hệ thống sẵn có). Hãy khớp nhịp đo của bạn với tốc độ thay đổi tự nhiên của từng
chiều thay vì ép mọi chỉ số vào cùng một lịch báo cáo.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Bộ chỉ số một chiều (thường là hoạt động) | Đơn giản, rẻ, quen thuộc | Dễ bị lách, bỏ sót cái giá con người của các thực hành không bền vững |
| Áp dụng SPACE đầy đủ năm chiều | Cân bằng, chống lách một trục, bắt được các đánh đổi | Cần nhiều đo đạc và đầu tư khảo sát hơn |
| Áp dụng SPACE cấp đội | Khớp với cách dùng đã được kiểm chứng của khung, bảo vệ cá nhân khỏi áp dụng sai | Không trả lời được các câu hỏi cấp cá nhân mà lãnh đạo đôi khi muốn |
| Áp dụng SPACE cấp cá nhân | Có cảm giác hành động được trực tiếp hơn với một số quản lý | Áp dụng sai khung; rủi ro lách và tinh thần mạnh |

Mâu thuẫn trung tâm là **tính đầy đủ của đo lường so với chi phí và độ phức tạp**. Một triển khai SPACE đầy đủ, cân
bằng cần nhiều đo đạc, nhiều công sức thiết kế khảo sát và nhiều kỷ luật hơn để rà soát cả năm chiều cùng nhau so với
một bảng điều khiển hoạt động đơn giản. Hãy giải quyết bằng cách bắt đầu với một bộ thực sự tối thiểu nhưng cân bằng,
ít nhất một chỉ số từ ít nhất ba chiều, thay vì hoặc bỏ qua hoàn toàn kỷ luật của khung hoặc cố gắng một phiên bản
choáng ngợp, đo đạc đầy đủ cả năm chiều ngay từ ngày đầu.

## Câu hỏi để thảo luận với đội của bạn

1. **Bộ chỉ số năng suất hiện tại của chúng ta có rút từ ít nhất ba chiều SPACE không, hay chỉ bị chi phối bởi dữ liệu
   hoạt động?** Hãy kiểm toán bảng điều khiển của bạn so với năm chiều một cách tường minh; phần lớn các tổ chức, khi
   đánh giá trung thực, nặng về hoạt động hơn nhiều so với họ nhận ra.

2. **Chúng ta đã bao giờ thấy một chiều SPACE cải thiện trong khi chiều khác lặng lẽ suy giảm, và lúc đó chúng ta có
   nhận ra không?** Sự đánh đổi xuyên chiều này chính xác là điều khung được thiết kế để bắt. Hãy nhìn lại năm vừa qua
   tìm một giai đoạn các chỉ số phân phối cải thiện và hỏi dữ liệu hài lòng hay phúc lợi cho thấy gì trong cùng khoảng
   thời gian.

3. **Dữ liệu SPACE có bao giờ được dùng, dù không chính thức, để đánh giá hay so sánh cá nhân thay vì đội không?** Điều
   này áp dụng sai khung và mời gọi việc lách. Hãy trung thực về cách các chỉ số này thực sự được bàn trong thực tế,
   không chỉ cách chính sách quy định chúng nên được dùng.

4. **Làm sao chúng ta nhận ra nếu một đội cải thiện các chỉ số hiệu suất với cái giá là nhịp độ không bền vững?** Nếu
   không có dữ liệu hài lòng và phúc lợi được rà soát cùng dữ liệu hiệu suất, kiểu đánh đổi này vô hình cho đến khi nó
   lộ ra như việc nghỉ việc hay sự sụp đổ chất lượng nhiều tháng sau.

5. **Nhịp đo của chúng ta cho từng chiều trong năm chiều là gì, và nó có khớp với tốc độ mỗi chiều thực sự thay đổi
   không?** Một khảo sát hài lòng hằng quý ghép với dữ liệu hoạt động thời gian thực là một sự lệch nhịp hợp lý; cùng
   một nhịp áp dụng cho cả năm mà không suy nghĩ thì không.

6. **Nếu một quản lý kỹ thuật mới gia nhập ngày mai và chỉ xem bảng điều khiển của chúng ta, họ sẽ có một bức tranh cân
   bằng về năng suất đội hay một bức tranh lệch?** Đây là phép thử thực tế xem bộ chỉ số của bạn đã thực sự đạt được sự
   cân bằng của SPACE chưa, hay chỉ ra dấu hiệu về khung trong khi thực tế vẫn bị chi phối bởi hoạt động.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Một triển khai năm chiều đầy đủ thường là thừa với một nhúm kỹ sư trò chuyện hằng ngày và cảm nhận
trực tiếp sức khỏe hài lòng và cộng tác. Thói quen đáng áp dụng sớm là cưỡng lại lực kéo về các chỉ số chỉ-hoạt-động
khi đội bắt đầu lớn quá cỡ mà sự nắm bắt không chính thức còn bao quát được mọi thứ.

**Doanh nghiệp nhỏ.** Không có chức năng phân tích con người chuyên trách, hãy giữ đơn giản: ghép bất kỳ dữ liệu phân
phối nào bạn đã có (chủ đề 2.10) với một lần kiểm tra ngắn, không chính thức, đều đặn về sự hài lòng, thậm chí một khảo
sát nhanh một câu hỏi. Sự ghép đôi tối thiểu đó đã nắm bắt kỷ luật cốt lõi của khung tốt hơn nhiều so với một bảng điều
khiển chỉ-hoạt-động.

**Doanh nghiệp lớn.** Đây là nơi khung đầy đủ xứng đáng với độ phức tạp của nó. Hãy chuẩn hóa một bộ chỉ số SPACE cân
bằng qua các đội để lãnh đạo có thể so sánh năng suất công bằng thay vì mặc định nghiêng về đội nào có đồ thị commit
trông ấn tượng nhất, và đầu tư vào hạ tầng khảo sát mà chủ đề 3.7 bao quát để làm dữ liệu hài lòng và cộng tác đáng tin
như đo đạc khách quan.

**Chính phủ.** Áp lực tuyển dụng và giữ chân, đặc biệt khi lương khu vực công không phải lúc nào cũng cạnh tranh được
với lời đề nghị của khu vực tư, khiến dữ liệu hài lòng và phúc lợi thành mối quan tâm chiến lược thực sự, không phải
phần bổ sung mềm. Hãy coi SPACE nghiêm túc như các chỉ số phân phối trong lập kế hoạch nhân lực và biện minh ngân sách,
vì cái giá của việc mất một kỹ sư giàu kinh nghiệm vì kiệt sức được tính bằng nhiều tháng tri thức thể chế mà người thay
thế không thể cung cấp ngay.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty phần mềm đã theo dõi số commit và số story point hoàn thành
làm tín hiệu năng suất chính suốt nhiều năm. Sau khi áp dụng một bộ chỉ số SPACE đầy đủ hơn, gồm khảo sát hài lòng hằng
quý và phân tích mạng cộng tác (chủ đề 3.5), ban lãnh đạo phát hiện rằng đội có số liệu hoạt động cao nhất cũng có điểm
hài lòng thấp nhất và tỷ lệ nghỉ việc tự nguyện cao nhất trong năm sau. Riêng các con số hoạt động đã chủ động gây hiểu
lầm; bức tranh đầy đủ hơn dẫn đến một sự giảm có chủ đích khối lượng công việc đồng thời của đội đó (nguyên tắc WIP của
chủ đề 2.5 áp dụng ở cấp con người) và một sự phục hồi đo được ở cả sự hài lòng và, cuối cùng, hiệu suất bền vững.

**Chính phủ.** Một cơ quan dịch vụ số quốc gia, cạnh tranh nhân tài kỹ thuật với mức lương khu vực tư mà họ không theo
kịp, áp dụng một bộ chỉ số SPACE cân bằng cụ thể để lập luận cho các khoản đầu tư giữ chân phi tiền tệ: công cụ tốt hơn,
thời gian tập trung được bảo vệ, và ma sát quy trình giảm. Dữ liệu khảo sát hài lòng kết hợp các chỉ số hiệu quả và luồng
(chủ đề 3.6) cho thấy tần suất gián đoạn, không phải thù lao, là yếu tố dự đoán mạnh nhất cho ý định nghỉ việc trong dữ
liệu phỏng đoán thôi việc. Khoản đầu tư sau đó của cơ quan vào chính sách thời gian tập trung được bảo vệ, được biện minh
trực tiếp bởi dữ liệu SPACE này, tương quan với một cải thiện đo được về giữ chân trong mười tám tháng sau.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng SPACE đầy đủ là tránh được nghỉ việc và tránh được sự sụp đổ chất lượng do kiệt sức, cả hai đều
tốn kém hơn nhiều so với chi phí đo đạc của khung. Một bộ chỉ số chỉ-hoạt-động có thể trông xuất sắc một hai năm cho đến
khi cái giá con người bắt kịp cùng một lúc, lúc đó chi phí thay thế chuyên môn đã mất và xây lại sức khỏe đội vượt xa mọi
lợi ích năng suất mà bộ chỉ số hẹp từng có vẻ cho thấy.

Tổng chi phí sở hữu bao gồm hạ tầng khảo sát (chủ đề 3.7) và kỷ luật rà soát cả năm chiều cùng nhau thay vì mặc định theo
chiều dễ nhất. Chi phí đó thực sự đáng bỏ ra: ví dụ doanh nghiệp ở trên cho thấy một kiểu mẫu thật, có thể khám phá được,
hoạt động cao che giấu rủi ro nghỉ việc cao, mà một bộ chỉ số hẹp hơn sẽ không bao giờ làm lộ ra cho đến khi thiệt hại đã
xảy ra.

## Phản mẫu và cạm bẫy

- **Áp dụng SPACE chỉ trên danh nghĩa trong khi thực tế vẫn bị chi phối bởi hoạt động:** kiểu thất bại phổ biến nhất, và
  nó đánh bại toàn bộ mục đích của khung.
- **Áp dụng các chiều SPACE cho bảng điểm cá nhân:** áp dụng sai một khung được kiểm chứng cho hiểu biết cấp đội và hệ
  thống.
- **Rà soát các chiều riêng rẽ thay vì theo dõi các đánh đổi xuyên chiều:** bỏ sót kiểu mẫu mà SPACE được thiết kế riêng
  để bắt.
- **Ép mọi chiều vào cùng một nhịp đo:** lãng phí công sức vào các chiều thay đổi chậm và đo thiếu các chiều thay đổi
  nhanh.
- **Coi một điểm khảo sát hài lòng đơn lẻ là đủ mà không có dữ liệu khách quan:** mất sự cân bằng giữa nguồn chủ quan và
  khách quan mà khung đòi hỏi.
- **Bỏ qua một xu hướng xấu đi ở một chiều vì chiều khác trông tốt:** chính là thất bại mà kỷ luật xuyên chiều của khung
  tồn tại để ngăn.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Năng suất được đo chỉ qua các chỉ số hoạt động, không thu thập dữ liệu hài lòng, cộng tác hay hiệu
  quả.
- **Mức 2, Phát triển:** Một số chiều bổ sung được đo không chính thức, nhưng không có rà soát xuyên chiều nhất quán và
  không có chuẩn thành phần tối thiểu.
- **Mức 3, Chuẩn hóa:** Một bộ chỉ số cân bằng rút từ ít nhất ba chiều SPACE được áp dụng nhất quán ở cấp đội trên toàn
  tổ chức.
- **Mức 4, Quản lý:** Cả năm chiều được rà soát cùng nhau theo nhịp đều đặn, các đánh đổi xuyên chiều được điều tra chủ
  động, và khung thông tin cho các quyết định nhân sự và quy trình thật.
- **Mức 5, Điều phối:** Dữ liệu SPACE trực tiếp định hình kế hoạch nhân lực và đầu tư giữ chân, và tổ chức có thể chỉ ra
  các can thiệp cụ thể, được thông tin bởi các kiểu mẫu xuyên chiều, đã cải thiện đo được cả phân phối lẫn phúc lợi lập
  trình viên cùng lúc.

## Ý tưởng để thảo luận

1. Chiều SPACE nào đang bị đo thiếu nhất trong bộ chỉ số hiện tại của chúng ta?
2. Chúng ta đã bao giờ thấy hoạt động của một đội tăng trong khi sự hài lòng lặng lẽ giảm chưa?
3. Hôm nay làm sao chúng ta bắt được một đội đánh đổi tính bền vững dài hạn lấy sản lượng ngắn hạn?
4. Có dữ liệu gần SPACE nào hiện được dùng để đánh giá cá nhân thay vì đội không?
5. Một bảng điều khiển năng suất thực sự cân bằng sẽ trông ra sao với chúng ta, cụ thể?

## Điểm chính cần nhớ

- SPACE trải trên năm chiều, **Sự hài lòng và phúc lợi, Hiệu suất, Hoạt động, Giao tiếp và cộng tác, và Hiệu quả và
  luồng**, và không chiều đơn lẻ nào đáng tin khi đứng riêng.
- Dựng một bộ chỉ số từ **ít nhất ba chiều**, trộn các nguồn dữ liệu khách quan và chủ quan.
- Coi **chỉ số hoạt động là bối cảnh**, không bao giờ là tín hiệu năng suất tiêu đề (chủ đề 3.4).
- Áp dụng SPACE ở **cấp đội và hệ thống**, không phải như một bảng điểm cá nhân.
- Rà soát các chiều cùng nhau, theo dõi **các đánh đổi xuyên chiều**, không chỉ chuyển động trong bất kỳ chiều đơn lẻ nào.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of
  Developer Productivity," *ACM Queue* (2021): bài báo gốc của khung SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble và Gene Kim (nền tảng nghiên cứu
  chung với các chỉ số DORA).
- *Peopleware: Productive Projects and Teams*, của Tom DeMarco và Timothy Lister (lập luận kinh điển cho việc coi năng
  suất lập trình viên là một câu hỏi về con người, không thuần túy cơ học).
- *Drive: The Surprising Truth About What Motivates Us*, của Daniel H. Pink (nghiên cứu về động lực liên quan đến đo lường
  sự hài lòng và phúc lợi).
