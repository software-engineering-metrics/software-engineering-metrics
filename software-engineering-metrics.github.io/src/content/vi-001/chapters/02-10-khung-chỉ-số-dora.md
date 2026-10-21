# 2.10 Khung chỉ số DORA

## Tổng quan và động lực

**[Chỉ số DORA](https://dora.dev/guides/dora-metrics/)** đến từ chương trình DevOps Research and
Assessment, một nỗ lực nghiên cứu nhiều năm, sau này được xuất bản thành cuốn sách *Accelerate* của Nicole
Forsgren, Jez Humble và Gene Kim, đã khảo sát hàng chục nghìn chuyên gia kỹ thuật để tìm ra những thực hành
phân phối nào tương quan với hiệu suất tổ chức. Kết quả là bốn chỉ số, ghép thành hai cặp: tần suất triển khai
và thời gian dẫn của thay đổi đo tốc độ; tỷ lệ thay đổi thất bại và thời gian phục hồi sau triển khai thất bại,
thường rút gọn là thời gian trung bình để phục hồi (MTTR), đo độ ổn định. Phát hiện nghiên cứu làm khung này có
ý nghĩa là các nhóm xuất sắc vừa nhanh vừa ổn định đồng thời, lật đổ giả định rằng tốc độ và an toàn đánh đổi
lẫn nhau, và phát hiện đó vẫn là ví dụ minh họa rõ nhất của cuốn sách này về nguyên tắc ghép rào chắn của chủ
đề 1.2: một chỉ số tốc độ có khuyến khích, ghép với một rào chắn ổn định, chính là điều các tổ chức hoạt động
tốt nhất thực sự làm.

Cuốn sách này bao quát DORA cuối cùng trong phần này, một cách có chủ đích, thay vì làm khung tổ chức của phần.
Vị trí đó không phải là sự bác bỏ nghiên cứu, vốn vẫn thực sự nghiêm ngặt và đáng dùng. Nó phản ánh một giới
hạn cụ thể, có thật: DORA đo một đường ống di chuyển nhanh và an toàn đến đâu, nhưng im lặng về thứ đang di
chuyển qua đường ống. Một đội có thể đăng những con số DORA xuất sắc trong khi sản lượng thực của nó đã lặng
lẽ trôi về làm lại lỗi hoặc đã bỏ đói nợ kỹ thuật và công việc bảo mật về năng lực, một kiểu mẫu mà Flow
Framework ở các chủ đề 2.1 đến 2.4 được xây riêng để làm lộ ra và DORA không thấy được. Hãy dùng DORA như chủ
đề này trình bày: một thước đo tham chiếu hẹp hơn, được kiểm chứng tốt về cơ chế đường ống, không phải toàn
bộ bức tranh về sức khỏe phân phối.

Với các đội lớn, giá trị thật còn lại của DORA là khả năng so sánh. Một chỉ số được tính nhất quán từ dữ liệu
đường ống và sự cố cho phép một tổ chức so sánh năng lực phân phối giữa nhiều đội làm việc trong các lĩnh vực
khác nhau mà không gặp vấn đề táo-với-cam vốn hành hạ phần lớn các so sánh xuyên đội. Các tổ chức doanh nghiệp
vẫn dùng nó để ưu tiên đầu tư nền tảng; các tổ chức chính phủ vẫn dùng nó để chứng minh, bằng bằng chứng, rằng
một chương trình hiện đại hóa đã cải thiện đo được cơ chế phân phối. Hãy coi đó là công việc đúng, có giới hạn
của DORA, và dùng các chủ đề Flow Framework trước đó trong phần này cho câu hỏi rộng hơn về việc các thứ đúng
có đang được giao hay không.

## Các nguyên tắc chính

- **DORA đo đường ống, không phải giá trị chảy qua nó.** Chủ đề 2.1 gọi tên khoảng trống này trực tiếp; hãy
  dùng phân bổ luồng (chủ đề 2.3) để thấy điều DORA không thấy được.
- **Tốc độ và độ ổn định được đo cùng nhau, không bao giờ riêng rẽ.** Một bảng điều khiển theo DORA mà thiếu
  một nửa nào thì thực ra không dùng khung này.
- **Tính nhất quán của định nghĩa quan trọng hơn con số thô.** Một đội chuyển từ hiệu suất "trung bình" lên
  "cao" trên một chỉ số được định nghĩa nhất quán là tín hiệu thật; so sánh hai đội tính khác nhau thì không.
- **DORA đo hệ thống, không đo cá nhân.** Áp dụng các chỉ số này cho từng kỹ sư phá vỡ cơ sở thống kê của khung
  và mời gọi đúng kiểu lách mà chủ đề 1.2 cảnh báo.
- **Cả bốn chỉ số là đại diện, không phải mục tiêu.** Chúng tương quan với hiệu suất tổ chức; đuổi theo bản thân
  con số, tách khỏi cải thiện phân phối thật, đánh bại mục đích của khung.

## Khuyến nghị

### Đo đạc tần suất triển khai từ đường ống, chỉ đếm các bản phát hành production

**Tần suất triển khai (deployment frequency)** đo một đội phát hành thành công lên production thường xuyên thế
nào. Chỉ đếm các lần triển khai production thành công, được đo đạc tự động từ dữ liệu đường ống CI/CD, không
bao giờ tự báo cáo. Hãy cảnh giác cụ thể với lách thay thế, tách một thay đổi có ý nghĩa thành vài lần triển
khai tầm thường thuần túy để thổi phồng số đếm, bằng cách theo dõi kích thước triển khai bên cạnh tần suất: kích
thước trung bình co lại bên cạnh số đếm tăng là dấu hiệu rõ nhất rằng điều này đang xảy ra.

### Đo đạc thời gian dẫn của thay đổi từ commit đầu tiên đến production

**Thời gian dẫn của thay đổi (lead time for changes)** đo thời gian từ commit đầu tiên của một thay đổi mã đến
lần triển khai thành công của nó lên production. Hãy báo cáo cả trung vị và một phân vị cao, không chỉ trung
bình, theo hướng dẫn của chủ đề 1.6 về dữ liệu thời gian bị lệch, và cảnh giác với sự trôi định nghĩa ở một
trong hai đầu, điều làm đẹp con số mà không có cải thiện thật.

### Định nghĩa tỷ lệ thay đổi thất bại bằng văn bản trước khi so sánh giữa các đội

**Tỷ lệ thay đổi thất bại (change failure rate)** đo phần trăm các lần triển khai gây ra một thất bại cần khắc
phục, một lần hoàn tác, một hotfix, hay một sự cố. Đây là chỉ số khó định nghĩa nhất quán nhất trong bốn, vì
"thất bại" không hiển nhiên khách quan. Hãy thống nhất một định nghĩa viết ra trước khi so sánh các đội; không
có nó, một phép so sánh có vẻ công bằng có thể đánh lạc hướng nghiêm trọng. Hãy cảnh giác với sự cải thiện nhanh
đáng ngờ mà không có thay đổi quy trình nền tảng nào đằng sau, dấu hiệu rõ nhất của việc lách định nghĩa thay vì
tiến bộ thật.

### Đo thời gian phục hồi từ lúc phát hiện, không phải từ sự kiện triển khai

**Thời gian phục hồi sau triển khai thất bại (failed deployment recovery time)** đo mất bao lâu để khôi phục
dịch vụ khi một lần triển khai gây ra thất bại. Hãy bắt đầu đồng hồ tại lúc phát hiện, không phải tại chính sự
kiện triển khai, để con số phản ánh độ trễ phục hồi thực chứ không phải một khoảng trống giám sát. Hãy đầu tư cụ
thể vào năng lực hoàn tác tự động, đòn bẩy phổ biến nhất để cải thiện chỉ số này một cách thực sự thay vì bằng
cách tuyên bố một sự cố đã giải quyết quá sớm.

### Dùng chỉ số luồng, không phải DORA, để chẩn đoán vì sao một con số dịch chuyển

Khi một chỉ số DORA dịch chuyển, bốn con số một mình hiếm khi giải thích được vì sao. Hãy dùng phân rã thời gian
chu kỳ (chủ đề 2.6), tải luồng (chủ đề 2.4) và phân bổ luồng (chủ đề 2.3) làm tầng chẩn đoán bên dưới các con số
tóm tắt của DORA, và đừng bao giờ dùng một chỉ số DORA trong đánh giá hiệu suất cá nhân, cách dùng sai gây hại
nhất mà khung này phải đối mặt.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Khung DORA đầy đủ, cả bốn chỉ số ghép đôi | Được nghiên cứu kiểm chứng, chống lách nhờ ghép đôi, cho phép so sánh xuyên đội công bằng | Im lặng về loại giá trị đang được giao; cần Flow Framework bên cạnh cho bức tranh đó |
| DORA làm bộ chỉ số tổ chức duy nhất của phần này | Đơn giản, quen thuộc với phần lớn lãnh đạo kỹ thuật | Bỏ lỡ hoàn toàn câu hỏi về hỗn hợp giá trị, lý do cuốn sách này hạ ưu tiên nó ở đây |
| DORA cộng Flow Framework cùng nhau | Cả cơ chế đường ống lẫn hỗn hợp giá trị đều nhìn thấy | Cần duy trì hai bộ từ vựng chỉ số thay vì một |
| DORA áp dụng ở cấp cá nhân | Có vẻ hành động được ngay với một số quản lý | Phá vỡ giá trị thống kê của khung; phơi nhiễm mạnh với định luật Goodhart |

Mâu thuẫn trung tâm là **sự nghiêm ngặt cơ học so với khả năng đọc hiểu về kinh doanh**. Bốn chỉ số của DORA
được định nghĩa chính xác và được nghiên cứu kiểm chứng, điều làm chúng xuất sắc để so sánh hiệu suất đường ống
giữa các đội, nhưng chính độ chính xác đó bị giới hạn hẹp ở bản thân đường ống và không nói gì về việc công
việc đúng có đang chảy qua nó hay không. Hãy giải quyết bằng cách giữ DORA làm tầng tham chiếu cho sức khỏe
đường ống, vị trí đúng của chủ đề 2.10 trong cấu trúc cuốn sách này, trong khi dùng các chủ đề Flow Framework
trước đó trong phần này cho câu hỏi hướng kinh doanh về hỗn hợp giá trị, thay vì cố bắt DORA trả lời một câu
hỏi mà nó chưa bao giờ được thiết kế để trả lời.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có đang đo đạc cả bốn chỉ số DORA từ đường ống, hay một số là ước lượng tự báo cáo?** Một khung
   xây trên phép đo khách quan, được nghiên cứu kiểm chứng mất phần lớn giá trị ngay khi một con số thành một
   phỏng đoán. Hãy kiểm toán nguồn dữ liệu thực của từng chỉ số (chủ đề 1.5).

2. **Mọi đội mà chúng ta so sánh bằng chỉ số DORA có chia sẻ cùng định nghĩa về triển khai, thay đổi và thất bại
   không?** Một phép so sánh giữa các đội dùng định nghĩa khác nhau thực ra không phải là so sánh, và có thể tạo
   ra những phán xét bất công về hiệu suất tương đối.

3. **Có ai trong tổ chức đã dùng một chỉ số DORA trong đánh giá hiệu suất cá nhân, chính thức hay không chính thức
   không?** Đây là cách dùng sai gây hại nhất của khung và thường xảy ra lặng lẽ. Hãy hỏi thẳng và sẵn sàng cho một
   câu trả lời khó chịu nhưng cần thiết.

4. **Các con số DORA của chúng ta có thể xuất sắc trong khi phân bổ luồng (chủ đề 2.3) đã lặng lẽ trôi về làm lại
   hoặc rời xa tính năng không?** Đây chính xác là khoảng trống mà DORA một mình không thấy. Hãy lấy cả hai bộ số
   cùng nhau và kiểm tra xem chúng có kể một câu chuyện nhất quán không.

5. **Khi một chỉ số DORA của chúng ta dịch chuyển, chúng ta có chẩn đoán chỉ số luồng để giải thích vì sao không?**
   Một con số DORA một mình cho bạn biết có gì đó đã đổi, không phải đổi gì. Hãy kiểm tra xem các đội của bạn trả lời
   "vì sao thời gian dẫn tăng tháng này" bằng dữ liệu, hay chỉ bằng suy đoán.

6. **Bốn con số DORA của chúng ta sẽ đổi thế nào nếu chúng ta cố ý thử lách từng cái, và chúng ta có nhận ra không?**
   Hãy đi qua từng cái một: tần suất triển khai, thời gian dẫn, tỷ lệ thay đổi thất bại và thời gian phục hồi, ứng
   dụng thực tế của kỷ luật cốt lõi ở chủ đề 1.2 vào khung cụ thể này.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Các chỉ số tốc độ của DORA thường đến tự nhiên với một đội nhỏ đã triển khai thường xuyên; kỷ luật
khó hơn là đo đạc trung thực tỷ lệ thay đổi thất bại và thời gian phục hồi thay vì cho rằng đã ổn định vì chưa có gì
hỏng nặng. Ghép DORA với dù chỉ một sự phân chia mục luồng không chính thức (chủ đề 2.2) sớm giúp tránh xây một cảm
giác sai lệch về sức khỏe phân phối chỉ quanh tốc độ đường ống.

**Doanh nghiệp nhỏ.** Phần lớn các nền tảng CI/CD và kiểm soát phiên bản hiện đại xuất dữ liệu tần suất triển khai
và thời gian dẫn với thiết lập tối thiểu; việc liên kết các lần triển khai với sự cố để có tỷ lệ thay đổi thất bại
thường cần nhiều công sức thủ công hơn. Hãy bắt đầu với hai chỉ số tốc độ và thêm theo dõi độ ổn định ngay khi có một
nhật ký sự cố không chính thức để liên kết.

**Doanh nghiệp lớn.** Giá trị còn lại lớn nhất của DORA ở quy mô này là so sánh xuyên đội công bằng, nhất quán cho các
quyết định đầu tư nền tảng. Hãy chuẩn hóa định nghĩa toàn tổ chức (chủ đề 1.4), tự động hóa đo đạc tập trung, và ghép
mọi báo cáo DORA với một góc nhìn phân bổ luồng để lãnh đạo thấy cả tốc độ đường ống lẫn hỗn hợp giá trị cùng nhau,
không cái này thiếu cái kia.

**Chính phủ.** Các chỉ số DORA vẫn cho một chương trình hiện đại hóa một cách bảo vệ được, có nghiên cứu hậu thuẫn để
chứng minh cải thiện cơ chế phân phối với các cơ quan giám sát. Hãy báo cáo cả bốn chỉ số cùng nhau, đừng bao giờ chọn
nửa đẹp, và ghép chúng với phân bổ luồng để báo cáo cũng trả lời câu hỏi khó hơn, quan trọng hơn là đường ống nhanh
hơn thực sự đang giao gì.

## Ví dụ

**Doanh nghiệp lớn.** Chương trình hiện đại hóa nền tảng của một công ty viễn thông lớn đã đo đạc nhất quán cả bốn chỉ
số DORA qua bốn mươi đội sản phẩm và cho thấy một chuyển dịch thật từ dải hiệu suất thấp lên cao trong mười tám tháng,
tần suất triển khai tăng khoảng mười lần, thời gian dẫn giảm từ vài tuần xuống vài ngày, tỷ lệ thay đổi thất bại giữ
nguyên. Một thành viên hội đồng quản trị, khi xem bài trình bày, hỏi một câu mà chỉ riêng các con số DORA không trả lời
được: bao nhiêu phần của việc phân phối nhanh hơn đó là giá trị khách hàng mới so với làm lại. Tổ chức kỹ thuật không có
câu trả lời cho đến khi áp dụng phân loại mục luồng vào quý sau, cho thấy công việc tính năng thực ra đã giảm tỷ trọng
trong tổng sản lượng ngay cả khi các con số tốc độ của DORA cải thiện, một phát hiện đã định hình lại các ưu tiên năm sau
của chương trình.

**Chính phủ.** Văn phòng hiện đại hóa CNTT của một chính quyền bang áp dụng chỉ số DORA như một điều kiện hợp đồng để so
sánh năng lực phân phối của nhiều đội nhà cung cấp cạnh tranh, một cách dùng hiệu quả tính so sánh được của khung. Tần
suất triển khai cao của một nhà cung cấp, khi tỷ lệ thay đổi thất bại được yêu cầu kèm theo, được tiết lộ là tương quan
với một tỷ lệ thất bại cao gần gấp ba lần các đối thủ, thông tin trực tiếp thông tin cho quyết định gia hạn hợp đồng của
văn phòng. Văn phòng sau đó thêm yêu cầu phân bổ luồng vào cùng các hợp đồng sau khi phát hiện rằng nhà cung cấp có các
con số DORA tốt nhất cũng là nhà cung cấp dành tỷ trọng năng lực nhỏ nhất cho công việc khắc phục bảo mật mà hợp đồng yêu
cầu cụ thể.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng DORA tốt, trong phạm vi đúng của nó, là một câu trả lời bảo vệ được, dựa trên bằng chứng cho
"đường ống phân phối của chúng ta có đang nhanh và an toàn hơn không", vẫn là một trong những câu hỏi dễ giải quyết hơn
trong kỹ thuật để trả lời một cách tự tin. Câu trả lời đó biện minh đầu tư nền tảng và công cụ bằng những con số thật,
và cho phép lãnh đạo so sánh các khoản đầu tư cạnh tranh trên một cơ sở công bằng, nhất quán, đúng như nó luôn làm.

Tổng chi phí sở hữu là công việc tích hợp liên kết các sự kiện triển khai với hồ sơ sự cố cho tỷ lệ thay đổi thất bại và
thời gian phục hồi, không hề tầm thường trên một bối cảnh công cụ lớn, không đồng nhất. Chi phí thêm của việc ghép DORA
với các chủ đề Flow Framework trước đó trong phần này tương đối nhỏ, vì phân loại mục luồng là một quy ước báo cáo xếp
lên công việc sẵn có, không phải một hệ thống đo song song, và lợi tức, bắt đúng điểm mù hỗn hợp giá trị mà ví dụ viễn
thông ở trên minh họa, hoàn toàn xứng đáng với khoản đầu tư thêm khiêm tốn đó.

## Phản mẫu và cạm bẫy

- **Coi DORA là toàn bộ bức tranh về sức khỏe phân phối:** véc-tơ bị lách mà vị trí của chủ đề này được thiết kế để
  chống lại. Một tổ chức có thể trình bày những con số DORA thực sự xuất sắc, triển khai nhanh, thường xuyên, ổn định,
  trong khi giá trị thực được giao đã lặng lẽ dịch về làm lại hoặc rời xa tính năng, và bốn chỉ số của DORA một mình sẽ
  không bao giờ lộ ra sự dịch chuyển đó vì chúng chưa bao giờ được thiết kế để đo nó. Rào chắn là ghép mọi báo cáo DORA
  với phân bổ luồng (chủ đề 2.3), để một đường ống nhanh, ổn định giao sai hỗn hợp công việc nhìn thấy được thay vì bị
  nhầm với sức khỏe phân phối thật.
- **Chỉ báo cáo nửa tốc độ của DORA:** đánh bại phát hiện trung tâm của khung rằng tốc độ và độ ổn định cùng dịch chuyển ở
  các nhóm hiệu suất cao.
- **Dùng chỉ số DORA trong đánh giá hiệu suất cá nhân:** phá vỡ giá trị thống kê của khung và mời gọi việc lách mạnh.
- **So sánh các đội với định nghĩa không nhất quán:** tạo ra những phép so sánh trông công bằng nhưng không phải.
- **Con số DORA tự báo cáo thay vì được đo đạc từ đường ống:** đưa vào đúng thiên kiến mà khung được thiết kế để loại bỏ.
- **Coi DORA là chẩn đoán thay vì tóm tắt:** để một đội không giải thích được vì sao một con số dịch chuyển nếu thiếu tầng
  chỉ số luồng bên dưới.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số DORA, nếu được theo dõi, là tự báo cáo, định nghĩa không nhất quán và không bao giờ ghép
  với dữ liệu luồng.
- **Mức 2, Phát triển:** Một số đội đo đạc DORA từ đường ống, nhưng định nghĩa khác nhau và không có đối trọng phân bổ luồng
  để kiểm tra.
- **Mức 3, Chuẩn hóa:** Cả bốn chỉ số DORA được đo đạc nhất quán từ dữ liệu đường ống và sự cố, với định nghĩa chung, và
  thường xuyên được hiển thị cùng phân bổ luồng.
- **Mức 4, Quản lý:** DORA và các chỉ số luồng được rà soát cùng nhau như một cặp chuẩn ở mọi cấp của tổ chức, và DORA không
  bao giờ được dùng để đánh giá cá nhân.
- **Mức 5, Điều phối:** Tổ chức có thể chỉ ra các trường hợp cụ thể nơi phân bổ luồng bắt được một vấn đề hỗn hợp giá trị
  mà các con số DORA xuất sắc một mình đã che giấu, và dùng cả hai khung một cách có chủ đích cho những câu hỏi riêng mà
  mỗi khung trả lời.

## Ý tưởng để thảo luận

1. Bốn chỉ số DORA hiện tại của chúng ta đặt chúng ta ở đâu trên phổ các bậc hiệu suất, một cách trung thực?
2. Các con số DORA của chúng ta có thể trông xuất sắc trong khi phân bổ luồng đã lặng lẽ trôi không? Chúng ta đã bao giờ kiểm tra chưa?
3. Có ai từng dùng một con số DORA để phán xét một cá nhân, dù không chính thức, chưa?
4. Nếu một đối thủ công bố các con số DORA của họ, của chúng ta có so sánh thuận lợi không, và phép so sánh đó có thực sự cho chúng ta biết ai đang giao nhiều giá trị thật hơn không?

## Điểm chính cần nhớ

- Bốn chỉ số của DORA, **tần suất triển khai, thời gian dẫn, tỷ lệ thay đổi thất bại và thời gian phục hồi**, ghép tốc độ với
  độ ổn định theo thiết kế và vẫn thực sự được nghiên cứu kiểm chứng.
- Cuốn sách này đặt DORA **cuối cùng trong phần này** vì nó đo đường ống, không phải giá trị chảy qua nó; hãy ghép nó với
  phân bổ luồng (chủ đề 2.3) cho bức tranh đầy đủ hơn.
- Véc-tơ bị lách trung tâm của chủ đề là **nhầm các con số DORA xuất sắc với sức khỏe phân phối đầy đủ**; rào chắn là luôn
  báo cáo DORA cùng phân bổ luồng.
- **Không bao giờ dùng chỉ số DORA trong đánh giá hiệu suất cá nhân**; giá trị của khung phụ thuộc vào đo lường cấp hệ
  thống, không phải cấp cá nhân.
- Hãy dùng **chỉ số luồng làm tầng chẩn đoán** bên dưới các con số tóm tắt của DORA khi một trong số chúng dịch chuyển.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Jez Humble, và Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press,
  2018.
- Google Cloud. DevOps Research and Assessment program. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, và George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, và John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT
  Revolution Press, 2018.
