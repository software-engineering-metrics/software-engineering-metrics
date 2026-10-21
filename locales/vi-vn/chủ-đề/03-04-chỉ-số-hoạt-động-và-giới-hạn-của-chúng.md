# 3.4 Chỉ số hoạt động và giới hạn của chúng

## Tổng quan và động lực

**Hoạt động (activity)**, chữ A trong SPACE (chủ đề 3.1), đếm khối lượng công việc kỹ thuật quan sát được từ dữ liệu viễn
trắc hệ thống: số commit, số pull request đã mở, số dòng mã đã thay đổi, số bình luận đánh giá mã đã để lại. Đây là chiều
SPACE dễ đo nhất, vì mọi sự kiện này đã được các công cụ mà đội kỹ thuật dùng hằng ngày ghi lại tự động, và chính sự dễ
đo đó khiến chiều này nguy hiểm nhất khi nhấn mạnh quá mức. Hoạt động là một tín hiệu thật, chính đáng nếu dùng cẩn thận.
Dùng như một đại diện năng suất đứng riêng, nó là họ chỉ số bị lách nhiều nhất, gây hiểu lầm nhiều nhất trong toàn bộ lịch
sử đo lường [kỹ thuật phần mềm](https://en.wikipedia.org/wiki/Software_engineering).

Vấn đề cốt lõi là hoạt động đo chuyển động, không đo giá trị. Một số commit không phân biệt được một commit giải quyết một
vấn đề khó một cách thanh nhã với một commit tách một thay đổi có ý nghĩa thành năm để trông năng suất hơn (lách thay thế
của chủ đề 1.2, áp dụng trực tiếp cho họ chỉ số này). Số dòng mã thay đổi thưởng cho sự dài dòng hơn là kỹ năng giá trị hơn
nhiều là xóa mã không cần thiết. Một kỹ sư dành cả ngày suy nghĩ sâu, không bị gián đoạn trước khi viết mười dòng thanh nhã,
được kiểm thử tốt trông ít "hoạt động" theo các chỉ số này hơn một người commit những thay đổi nông, chưa được đánh giá mỗi
hai mươi phút, dù người đầu rất thường tạo ra nhiều giá trị thật hơn nhiều.

Với các đội lớn, cám dỗ dùng chỉ số hoạt động để đánh giá cá nhân là liên tục và được ghi nhận rõ, vì hoạt động dễ quy cho
một người cụ thể và dễ tính tự động, không như các tín hiệu khó hơn, trung thực hơn ở các chiều SPACE khác. Chủ đề này tồn
tại cụ thể để gọi tên cám dỗ đó và cho các đội ngôn ngữ và bằng chứng để cưỡng lại, vì một khi tổ chức bắt đầu xếp hạng cá
nhân kỹ sư theo số commit hay số dòng mã, thiệt hại cho cộng tác, chất lượng mã và tinh thần được ghi nhận rõ và khó đảo
ngược.

## Các nguyên tắc chính

- **Hoạt động đo chuyển động, không đo giá trị.** Nó là một tín hiệu bối cảnh chính đáng, không bao giờ là đại diện năng suất
  đứng riêng.
- **Đây là họ chỉ số bị dùng sai nhiều nhất trong lịch sử đo lường kỹ thuật phần mềm.** Hãy coi lịch sử đó là cảnh báo, không
  phải sự trùng hợp.
- **Xếp hạng hoạt động cá nhân gần như luôn gây hại.** Nó làm tổn hại cộng tác, thưởng cho công việc bận rộn nhìn thấy được và
  mời gọi việc lách gần như ngay lập tức.
- **Dữ liệu hoạt động hữu ích nhất ở dạng tổng hợp, làm bối cảnh cho các chiều khác,** không phải một tín hiệu độc lập về bất
  kỳ cá nhân hay đội nào.
- **Công việc sâu, có giá trị thường trông yên ắng trên bảng điều khiển hoạt động.** Họ chỉ số này về mặt cấu trúc thiên lệch
  chống lại đúng kiểu tư duy tạo ra những kết quả kỹ thuật tốt nhất.

## Khuyến nghị

### Không bao giờ xếp hạng hay đánh giá cá nhân theo số đếm hoạt động thô

Đây là quy tắc khó nhất, quan trọng nhất của chủ đề này. Số commit, số dòng mã và số pull request không bao giờ nên xuất hiện
trong một đánh giá hiệu suất cá nhân, một bảng xếp hạng so sánh, hay bất kỳ bối cảnh nào mà thù lao, vị thế hay danh tiếng
của một kỹ sư phụ thuộc vào con số. Điều này trực tiếp suy ra từ nguyên tắc phơi nhiễm khuyến khích của chủ đề 1.2: ngay khi
hoạt động trở thành một chỉ số cá nhân có khuyến khích, việc lách theo sau gần như tức thì, và hành vi kết quả, độn commit,
tách thay đổi một cách tầm thường, tránh công việc sâu, không hào nhoáng tạo ra ít sự kiện nhìn thấy được, chủ động gây hại
cho tổ chức.

### Dùng dữ liệu hoạt động ở dạng tổng hợp, làm bối cảnh, không phải phán quyết

Dữ liệu hoạt động trở nên thực sự hữu ích khi được tổng hợp ở cấp đội và đọc cùng các chiều SPACE khác: sự sụt giảm mạnh
hoạt động commit cấp đội trùng với sự tăng hài lòng có thể cho thấy đội cuối cùng có chỗ thở để suy nghĩ sâu và trả nợ kỹ
thuật, một kiểu mẫu tích cực, không phải tiêu cực. Đọc riêng lẻ, cùng sự sụt giảm đó trông đáng báo động. Bối cảnh từ các
chiều khác là điều khiến dữ liệu hoạt động diễn giải được thay vì gây hiểu lầm.

### Ưu tiên các tín hiệu hoạt động gần chất lượng hơn khối lượng thô

Nơi dữ liệu hoạt động hữu ích, hãy ưu tiên các tín hiệu được điều chỉnh theo chất lượng hơn số đếm thô: kích thước pull
request so với độ sâu đánh giá (chủ đề 2.9), hoặc tỷ lệ mã mới trên mã bị gỡ, có thể cho thấy một đội đang tích tụ độ phức
tạp hay chủ động đơn giản hóa. Những tín hiệu đã điều chỉnh này vẫn là dữ liệu chiều hoạt động nhưng chống lại kiểu lách thô
nhất mà số đếm thô mời gọi.

### Cảnh giác cụ thể với kiểu lách thay thế trong dữ liệu hoạt động

Cách phổ biến nhất khiến chỉ số hoạt động bị lách chính là kiểu thay thế của chủ đề 1.2: tách công việc thực sự có ý nghĩa
thành nhiều sự kiện nhỏ, tầm thường để thổi phồng một số đếm. Nếu tần suất commit hay pull request tăng trong khi độ phức tạp
hay kích thước nền tảng của các thay đổi giảm mạnh, hãy điều tra trước khi ghi công một cải thiện năng suất thật, dùng cùng
kỷ luật chẩn đoán mà chủ đề 2.10 khuyến nghị cho tần suất triển khai.

### Gọi tên tường minh và không khuyến khích kịch hoạt động

**Kịch hoạt động (activity theater)** là công việc được thực hiện, có ý thức hay không, chủ yếu vì nó nhìn thấy được và đếm
được hơn là vì nó có giá trị: các commit nhỏ thường xuyên, hoạt động khuya nổi bật, hay sự bận rộn nhìn thấy được trong các
kênh chung. Gọi tên kiểu mẫu này tường minh với đội của bạn, và minh bạch rằng lãnh đạo không dùng hoạt động thô để đánh giá
đóng góp, loại bỏ phần lớn khuyến khích để nó xảy ra ngay từ đầu.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Xếp hạng hoạt động cá nhân | Đơn giản, dễ tính, có cảm giác hành động được trực tiếp | Bị lách gần như tức thì; làm tổn hại cộng tác và tinh thần; đo sai thứ |
| Không đo hoạt động nào cả | Tránh hoàn toàn rủi ro dùng sai | Mất tín hiệu bối cảnh thực sự hữu ích để phát hiện kiểu mẫu cấp đội |
| Hoạt động tổng hợp cấp đội, đọc trong bối cảnh | Cung cấp bối cảnh hữu ích mà không có rủi ro cá nhân | Cần kỷ luật để diễn giải cùng các chiều khác thay vì riêng lẻ |
| Tín hiệu hoạt động điều chỉnh theo chất lượng | Chống lách thô nhất của số đếm thô | Phức tạp hơn để tính và giải thích so với một số đếm đơn giản |

Mâu thuẫn trung tâm là **tính hữu ích so với rủi ro dùng sai**. Dữ liệu hoạt động, đọc cẩn thận ở dạng tổng hợp và trong bối
cảnh, thực sự hữu ích để phát hiện các kiểu mẫu như nhịp độ không bền vững hay một đội lặng lẽ tìm được chỗ để giải quyết nợ
kỹ thuật. Cùng dữ liệu đó, dùng như một bảng điểm cá nhân, gần như luôn có hại. Hãy giải quyết mâu thuẫn không phải bằng cách
tránh hoàn toàn dữ liệu hoạt động mà bằng cách xây một quy tắc tổ chức cứng chống lại việc dùng cá nhân, trong khi cho phép và
thậm chí khuyến khích việc dùng cấp đội có suy xét, có bối cảnh.

## Câu hỏi để thảo luận với đội của bạn

1. **Có ai trong tổ chức của chúng ta từng bị đánh giá, chính thức hay không chính thức, bằng một số đếm hoạt động thô như số
   commit hay số dòng mã không?** Hãy hỏi thẳng điều này và sẵn sàng cho một câu trả lời khó chịu nhưng cần thiết; sự dùng sai
   này thường xảy ra lặng lẽ, qua một nhận xét buột miệng của quản lý, mà không bao giờ thành chính sách chính thức.

2. **Kịch hoạt động sẽ trông thế nào ở riêng đội chúng ta, và chúng ta đã thấy dấu hiệu của nó chưa?** Gọi tên hình thức cụ thể,
   hợp lý mà kiểu mẫu này có thể có ở đội của chính bạn làm nó dễ nhận ra hơn nhiều nếu nó bắt đầu xảy ra.

3. **Khi dữ liệu hoạt động cấp đội của chúng ta dịch chuyển, chúng ta có diễn giải nó cùng các chiều SPACE khác hay riêng lẻ?**
   Một sự giảm hoạt động đọc riêng lẻ trông đáng lo; cùng sự giảm đó đọc cùng sự cải thiện hài lòng hay hiệu suất có thể trông
   như một kiểu mẫu thực sự tích cực. Hãy kiểm tra thực hành rà soát thực tế của bạn so với sự phân biệt này.

4. **Chúng ta đã bao giờ thấy tần suất commit hay pull request tăng kèm kích thước thay đổi trung bình co lại, gợi ý việc tách
   tầm thường hơn là tăng năng suất thật không?** Hãy lấy dữ liệu thật và kiểm tra riêng kiểu lách thay thế này.

5. **Hiện chúng ta bàn về "ai đang đóng góp nhiều nhất" ở đội mình như thế nào, và cuộc trò chuyện đó có ngầm dựa vào dữ liệu hoạt
   động ngay cả khi không có chỉ số chính thức không?** Sự thiên lệch không chính thức, không đo lường về sự bận rộn nhìn thấy
   được có thể định hình nhận thức và phần thưởng ngay cả khi không có chính sách dựa trên hoạt động tường minh; hãy làm nó lộ
   ra một cách trung thực.

6. **Công việc thực sự có giá trị nhưng yên ắng, suy nghĩ sâu, thiết kế cẩn thận, cố vấn, trông thế nào ở đội chúng ta, và làm
   sao chúng ta đảm bảo nó được ghi nhận dù tạo ra ít dữ liệu hoạt động nhìn thấy được?** Câu hỏi này là phần bổ sung tích cực
   cho các câu trước: gọi tên công việc tốt, yên ắng trông thế nào giúp bảo vệ nó khỏi bị bỏ qua để nhường chỗ cho công việc
   ồn ào hơn, đếm được hơn.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Với một đội nhỏ, cộng tác chặt, dữ liệu hoạt động thường nhìn thấy được mà không cần bảng điều khiển, và rủi
ro xếp hạng cá nhân mà chủ đề này cảnh báo ít xảy ra hơn đơn giản vì ai cũng đã biết ai đang làm gì. Rủi ro thay vào đó là một
nhà sáng lập vô thức thiên về hành vi "bận rộn" nhìn thấy được khi đưa ra quyết định tuyển dụng hay cổ phần sớm.

**Doanh nghiệp nhỏ.** Dữ liệu hoạt động từ các công cụ sẵn có của bạn là ổn để liếc nhìn để có cảm nhận chung về thông lượng đội,
nhưng hãy cưỡng lại việc dùng nó để so sánh trực tiếp từng người đóng góp; giá trị thật của một đội nhỏ thường tập trung ở một
vài người làm công việc yên ắng, đòn bẩy cao mà một góc nhìn đếm commit sẽ có hệ thống đánh giá thấp.

**Doanh nghiệp lớn.** Đây là nơi cám dỗ xếp hạng cá nhân mạnh nhất và gây hại nhất, vì dữ liệu hoạt động là tín hiệu dễ lấy nhất
cho một quy trình đánh giá hiệu suất trải trên hàng nghìn kỹ sư, và áp lực tìm *một* đầu vào định lượng được là có thật. Hãy xây
một chính sách tường minh, được truyền đạt, được thực thi chống lại xếp hạng hoạt động cá nhân, và định kỳ kiểm toán các thực
hành đánh giá hiệu suất để xác nhận chính sách thực sự được tuân theo trong thực tế, không chỉ được nêu.

**Chính phủ.** Chỉ số hoạt động có thể hấp dẫn để trích dẫn trong một báo cáo công khai như bằng chứng của năng suất ("mười nghìn
commit trong năm nay"), nhưng loại tiêu đề này gần như vô nghĩa và có thể mời gọi đúng sự soi xét sai khi một người rà soát am
hiểu chỉ ra rằng hoạt động thô không nói gì về kết quả. Hãy báo cáo dữ liệu kết quả và hiệu suất (chủ đề 3.3) thay vào đó, và
tránh số đếm hoạt động trong mọi giao tiếp hướng ra bên ngoài.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty phần mềm, không có chính sách chính thức, đã bắt đầu không chính thức
tham chiếu dữ liệu tần suất commit cá nhân trong các cuộc thảo luận thăng chức. Một cuộc rà soát nội bộ, do một dự án phân tích
nghỉ việc không liên quan thúc đẩy, thấy rằng các kỹ sư làm việc trên các hệ thống phức tạp nhất, giá trị cao nhất của công ty,
đòi hỏi khoảng thời gian thiết kế cẩn thận dài trước khi viết bất kỳ mã nào, có số commit thấp hơn có hệ thống so với các kỹ sư
trên các hệ thống đơn giản hơn, phát triển tăng dần hơn, và bị bất lợi một cách tinh vi trong các cuộc trò chuyện thăng chức
vì điều đó. Ban lãnh đạo ban hành một chính sách tường minh, được truyền đạt cấm tham chiếu số đếm hoạt động trong các cuộc thảo
luận đánh giá hiệu suất và thăng chức, và chuyển bằng chứng thăng chức sang cách tiếp cận hiệu suất đa tín hiệu từ chủ đề 3.3.

**Chính phủ.** Một cơ quan dịch vụ số, chịu áp lực chứng minh năng suất với một ủy ban giám sát lập pháp, ban đầu đề xuất báo
cáo tổng số commit và số dòng mã đã viết trong chương trình kỹ thuật như bằng chứng của giá trị đã giao. Một cố vấn kỹ thuật nội
bộ phản đối, nhận xét đúng rằng cách định khung này mời gọi đúng sự soi xét sai, vì một thành viên ủy ban am hiểu kỹ thuật có thể
dễ dàng chỉ ra rằng khối lượng mã thô không nói gì về việc mã có hoạt động hay có ý nghĩa không. Báo cáo sửa đổi của cơ quan dùng
các chỉ số kết quả thay vào đó (chủ đề 5.3): sự giảm lỗi do công dân báo cáo và sự tăng hoàn thành tự phục vụ thành công, vững vàng
hơn nhiều dưới sự chất vấn của ủy ban so với các con số hoạt động.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc làm đúng chỉ số hoạt động, dùng chúng theo bối cảnh thay vì bảng điểm cá nhân, là tránh được thiệt hại: các tổ
chức xếp hạng cá nhân kỹ sư theo hoạt động chắc chắn thấy hành vi lách, cộng tác giảm (kỹ sư bảo vệ đầu ra nhìn thấy được của
riêng mình thay vì giúp đồng đội), và sự thiên lệch có hệ thống chống lại công việc sâu, đòn bẩy cao vốn thường tạo ra nhiều giá
trị nhất trong khi tạo ra ít hoạt động nhìn thấy được nhất. Đảo ngược thiệt hại đó, một khi đã ăn sâu vào văn hóa đánh giá hiệu
suất, thực sự khó và chậm.

Tổng chi phí tránh cái bẫy này chủ yếu là kỷ luật tổ chức: một chính sách tường minh, được thực thi nhất quán, chống lại xếp hạng
hoạt động cá nhân, và cam kết đầu tư vào việc đo hiệu suất khó hơn, trung thực hơn mô tả ở chủ đề 3.3 thay vào đó. Kỷ luật đó tốn
ít hơn các quyết định thăng chức sai hướng, cộng tác bị tổn hại và hành vi lách mà chỉ số hoạt động cá nhân chắc chắn tạo ra theo
thời gian.

## Phản mẫu và cạm bẫy

- **Xếp hạng cá nhân theo số commit hay số dòng mã:** cách dùng sai gây hại nhất, phổ biến nhất trong lịch sử trong toàn bộ cuốn
  sách này.
- **Kịch hoạt động:** công việc thực hiện chủ yếu vì khả năng nhìn thấy hơn là giá trị, một phản ứng hoàn toàn có thể đoán trước
  với việc đánh giá dựa trên hoạt động.
- **Diễn giải sự giảm hoạt động cấp đội riêng lẻ, không kiểm tra các chiều SPACE khác:** có thể nhầm một kiểu mẫu thực sự tích cực
  thành đáng lo.
- **Trích dẫn số đếm hoạt động thô trong giao tiếp bên ngoài hay hướng lãnh đạo:** mời gọi đúng sự soi xét sai và nói rất ít về giá
  trị thực.
- **Có hệ thống đánh giá thấp công việc sâu, cẩn thận tạo ra ít sự kiện nhìn thấy được:** một thiên lệch cấu trúc nướng vào toàn bộ
  họ chỉ số này.
- **Thiên lệch hoạt động không chính thức, không chính sách len vào các cuộc trò chuyện thăng chức hay đánh giá:** gây hại ngay cả
  khi không có chỉ số chính thức đằng sau.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Chỉ số hoạt động được dùng, chính thức hay không chính thức, để đánh giá hay xếp hạng cá nhân, không nhận
  thức về rủi ro.
- **Mức 2, Phát triển:** Có một chút nhận thức về rủi ro, nhưng không có chính sách tường minh ngăn dữ liệu hoạt động không chính
  thức ảnh hưởng đến đánh giá hay thảo luận thăng chức.
- **Mức 3, Chuẩn hóa:** Một chính sách tường minh, được truyền đạt trên toàn tổ chức cấm xếp hạng hoạt động cá nhân, và dữ liệu hoạt
  động chỉ được dùng ở dạng tổng hợp, bối cảnh cấp đội.
- **Mức 4, Quản lý:** Các thực hành đánh giá hiệu suất và thăng chức được định kỳ kiểm toán để xác nhận chính sách được tuân theo
  trong thực tế, và các tín hiệu hoạt động điều chỉnh theo chất lượng thay thế số đếm thô khi dữ liệu hoạt động được dùng.
- **Mức 5, Điều phối:** Tổ chức đã chứng minh chuyển văn hóa đánh giá khỏi chỉ số hoạt động sang cách tiếp cận hiệu suất đa tín hiệu
  của chủ đề 3.3, với cải thiện cộng tác nhìn thấy được và hành vi lách giảm làm bằng chứng sự chuyển dịch hiệu quả.

## Ý tưởng để thảo luận

1. Có ai ở đây từng cảm thấy bị đánh giá, dù không chính thức, bởi hoạt động của mình trông "bận" đến đâu không?
2. Kịch hoạt động sẽ trông thế nào cụ thể ở đội chúng ta?
3. Chúng ta có chính sách bằng văn bản, tường minh chống xếp hạng hoạt động cá nhân không, và nó có thực sự được tuân theo không?
4. Công việc yên ắng, giá trị cao nào ở đội chúng ta hiện tạo ra ít dữ liệu hoạt động nhìn thấy được nhất?
5. Chúng ta sẽ thiết kế lại bằng chứng đánh giá hiệu suất thế nào để loại bỏ hoàn toàn số đếm hoạt động?

## Điểm chính cần nhớ

- Hoạt động đo **chuyển động, không đo giá trị**; nó là họ chỉ số bị dùng sai nhiều nhất trong lịch sử đo lường kỹ thuật phần mềm.
- **Không bao giờ xếp hạng hay đánh giá cá nhân** theo số đếm hoạt động thô; đây là quy tắc khó nhất và quan trọng nhất của chủ đề
  này.
- Dùng dữ liệu hoạt động **ở dạng tổng hợp, làm bối cảnh** cho các chiều SPACE khác, không bao giờ như một phán quyết đứng riêng.
- Cảnh giác với **kịch hoạt động** và **kiểu lách thay thế** (chủ đề 1.2) cụ thể trong họ chỉ số này.
- Công việc sâu, giá trị cao thường tạo ra **ít dữ liệu hoạt động nhìn thấy được nhất**; hãy bảo vệ nó khỏi bị đánh giá thấp có
  hệ thống.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of
  Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, của Tom DeMarco và Timothy Lister (lập luận chống việc đo kỹ sư bằng sự bận rộn
  nhìn thấy được).
- *Deep Work: Rules for Focused Success in a Distracted World*, của Cal Newport (giá trị của công việc yên ắng, không bị gián
  đoạn mà các chỉ số hoạt động có hệ thống đếm thiếu).
- *The Tyranny of Metrics*, của Jerry Z. Muller (nỗi ám ảnh chỉ số và các chi phí của nó, áp dụng trực tiếp cho việc đánh giá dựa
  trên hoạt động).
