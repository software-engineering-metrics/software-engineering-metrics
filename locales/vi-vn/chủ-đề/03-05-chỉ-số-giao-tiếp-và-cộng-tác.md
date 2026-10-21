# 3.5 Chỉ số giao tiếp và cộng tác

## Tổng quan và động lực

**Giao tiếp và cộng tác (communication and collaboration)**, chữ C trong SPACE (chủ đề 3.1), đo thông tin thực sự chảy giữa
người và đội ra sao: tài liệu dễ tìm đến đâu, tri thức lan đều trong một đội thế nào, các phụ thuộc xuyên đội được điều phối
tốt đến đâu, và các thành viên mới hòa nhập vào dòng hiểu biết chung ra sao. Chiều này thường là chiều được đo đạc ít nhất
trong năm, chính vì nó khó quan sát hơn dữ liệu phân phối và ít mang tính cá nhân hơn dữ liệu hài lòng, và khoảng trống đó là
một sai lầm, vì các đổ vỡ ở đây thường là nguyên nhân gốc của những vấn đề hiện ra, bị quy sai, ở mọi chiều khác.

Một tỷ lệ thay đổi thất bại tăng (chủ đề 2.10) trông như một vấn đề kiểm thử đôi khi thực ra là một vấn đề giao tiếp: một đội
không biết về một thay đổi của phụ thuộc cho đến khi nó hỏng ở production. Một xu hướng hài lòng giảm (chủ đề 3.2) trông như
một vấn đề khối lượng công việc đôi khi thực ra là một vấn đề cô lập: một kỹ sư đã lặng lẽ bị loại khỏi những cuộc trò chuyện
nơi các quyết định được đưa ra. Lập luận trung tâm của chủ đề này là giao tiếp và cộng tác xứng đáng được đo trực tiếp chính
vì thất bại của chúng khoác áo các vấn đề khác, và một đội đuổi theo nguyên nhân gốc sai sẽ lãng phí công sức thật để sửa sai
thứ.

Với các đội lớn, chiều này trở nên khó duy trì hơn về mặt cấu trúc đúng khi nó trở nên quan trọng hơn. Sự phối hợp của một đội
năm người diễn ra qua sự gần gũi hằng ngày và hầu như không cần đo lường có chủ đích; một tổ chức năm trăm người trải khắp các
múi giờ và đơn vị kinh doanh phụ thuộc vào tài liệu, khả năng tìm thấy và các cơ chế điều phối xuyên đội phải được thiết kế có
chủ đích và giám sát chủ động, vì các kênh không chính thức vốn hiệu quả ở quy mô nhỏ đơn giản không với tới xa đến thế.

## Các nguyên tắc chính

- **Đổ vỡ giao tiếp thường khoác áo các vấn đề khác.** Một vấn đề chất lượng hay hài lòng có thể có nguyên nhân gốc là cộng tác.
- **Chiều này khó đo đạc tự động nhất**, và cám dỗ là bỏ qua hoàn toàn; hãy cưỡng lại cám dỗ đó một cách có chủ đích.
- **Sự tập trung tri thức là một rủi ro đo được, không chỉ là nỗi lo mơ hồ.** Hãy theo dõi tri thức quan trọng được nắm giữ hẹp
  đến đâu.
- **Ma sát phụ thuộc xuyên đội thường vô hình với các đội liên quan** cho đến khi ai đó đo trực tiếp.
- **Tốc độ hòa nhập là đại diện trực tiếp, đo được cho việc hiểu biết chung thực sự chảy tốt đến đâu** trong một tổ chức.

## Khuyến nghị

### Đo trực tiếp sự tập trung tri thức

Hãy theo dõi có bao nhiêu người có thể đánh giá, sửa đổi hay vận hành thành thạo mỗi thành phần hệ thống quan trọng: một thành
phần chỉ có một người đủ năng lực có **[hệ số xe buýt (bus factor)](https://en.wikipedia.org/wiki/Bus_factor)** bằng một, một
rủi ro nghiêm trọng và thường vô hình (chủ đề về duy trì các hệ thống sống lâu trong cuốn sách anh em `software-engineering-guide`
bao quát sâu hơn). Dữ liệu blame của kiểm soát phiên bản, kết hợp với hồ sơ luân phiên trực ca, có thể làm lộ sự tập trung này
một cách tự động: hãy tìm các thành phần mà một tác giả hay một người ứng phó trực ca đơn lẻ chiếm một tỷ trọng không cân xứng
của các thay đổi hay các lần xử lý sự cố trong một giai đoạn đáng kể.

### Đo ma sát phụ thuộc xuyên đội bằng một tín hiệu trực tiếp

Hãy theo dõi một yêu cầu xuyên đội, một thay đổi API cần thiết, một lần cập nhật thư viện dùng chung, một lần phát hành phối
hợp, mất bao lâu từ lúc được nêu đến lúc được giải quyết, tương tự về tinh thần với phân rã thời gian chu kỳ ở chủ đề 2.6
nhưng áp dụng cụ thể cho sự phối hợp giữa các đội, thay vì trong nội bộ một đội. Một đội liên tục chờ nhiều tuần cho một phụ
thuộc do đội khác sở hữu có một vấn đề cộng tác sẽ không hiện rõ trong chỉ số phân phối nội bộ của riêng đội nào.

### Dùng khả năng tìm thấy tài liệu, không chỉ sự tồn tại của tài liệu, làm tín hiệu

Một wiki đầy các trang lỗi thời hoặc không tìm thấy được không phải bằng chứng của giao tiếp tốt chỉ vì nội dung về mặt kỹ
thuật tồn tại đâu đó. Khi có thể, hãy theo dõi tài liệu thực sự được truy cập thường xuyên thế nào, một thành viên mới báo cáo
không tìm được câu trả lời họ cần thường xuyên thế nào, hay cùng một câu hỏi bị hỏi lặp đi lặp lại trong một kênh chat vì câu
trả lời, dù đã được ghi lại, không tìm thấy được. Điều này nối trực tiếp chất lượng tài liệu (chủ đề 4.6) với các mối quan
tâm cộng tác của chiều này.

### Theo dõi thời gian hòa nhập đến đóng góp hiệu quả như một đại diện trực tiếp

Thời gian từ lúc một thành viên mới gia nhập đến lần đóng góp độc lập, có ý nghĩa đầu tiên của họ là một đại diện mạnh, thực tế
cho việc hiểu biết chung thực sự chảy tốt đến đâu trong một tổ chức: một đội nơi tri thức hoàn toàn nằm trong đầu mọi người hòa
nhập chậm và khó đoán; một đội có tài liệu thực sự tốt, quyền sở hữu rõ ràng và sự cố vấn dễ tiếp cận hòa nhập nhanh hơn và nhất
quán hơn. Hãy theo dõi chỉ số này tường minh và coi thời gian hòa nhập dài hoặc biến thiên nhiều là một tín hiệu cộng tác, không
chỉ một mối quan tâm của nhân sự.

### Định kỳ vẽ bản đồ mạng giao tiếp thực tế, không chỉ sơ đồ tổ chức

Một sơ đồ tổ chức mô tả ai được cho là báo cáo cho ai; nó hiếm khi mô tả ai thực sự trò chuyện với ai để hoàn thành công việc.
Phân tích định kỳ, nhẹ nhàng các kiểu mẫu giao tiếp, mạng đánh giá mã (ai đánh giá công việc của ai), hay sự chồng lấn tham dự
cuộc họp, có thể lộ ra một cấu trúc cộng tác thực khác đáng kể với sơ đồ tổ chức chính thức, thường phơi bày một nút thắt không
chính thức (một người mà ai cũng đi qua) hoặc một túi cô lập (một nhóm con đã trôi khỏi dòng thông tin rộng hơn) mà nếu không thì
vẫn vô hình.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không đo cộng tác trực tiếp | Chi phí chung thấp | Nguyên nhân gốc bị quy sai cho các chiều khác; rủi ro vẫn vô hình |
| Theo dõi sự tập trung tri thức | Làm lộ trực tiếp một rủi ro thật, nghiêm trọng (hệ số xe buýt) | Cần kết hợp dữ liệu từ nhiều hệ thống (kiểm soát phiên bản, trực ca) |
| Theo dõi ma sát phụ thuộc xuyên đội | Làm lộ các vấn đề phối hợp vô hình bên trong cả hai đội | Cần đo đạc có chủ đích; không tự động từ công cụ sẵn có |
| Vẽ bản đồ mạng giao tiếp | Làm lộ cấu trúc không chính thức thật đằng sau sơ đồ tổ chức | Có thể gây cảm giác xâm phạm nếu không được xử lý cẩn thận như dữ liệu hài lòng |

Mâu thuẫn trung tâm là **độ khó đo đạc so với giá trị chẩn đoán**. Chiều này thực sự khó đo tự động hơn dữ liệu phân phối hay hoạt
động, và độ khó đó chính là lý do nhiều tổ chức bỏ qua nó, dù thất bại của nó thường là nguyên nhân gốc ẩn của các vấn đề bị quy
cho các chiều khác. Hãy giải quyết bằng cách bắt đầu với các tín hiệu giá trị cao nhất, dễ xử lý nhất, sự tập trung tri thức và ma
sát phụ thuộc xuyên đội, cả hai đều có thể suy ra phần lớn từ dữ liệu kiểm soát phiên bản và theo dõi vấn đề sẵn có, trước khi
thử phân tích mạng giao tiếp tham vọng hơn.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có biết hệ số xe buýt của từng thành phần hệ thống quan trọng không, hay chỉ biết theo cách khó khi người duy nhất
   hiểu nó vắng mặt?** Hãy lấy dữ liệu kiểm soát phiên bản và trực ca cho các hệ thống quan trọng nhất và kiểm tra trung thực xem
   tri thức thực sự tập trung đến đâu.

2. **Một yêu cầu phụ thuộc xuyên đội điển hình mất bao lâu để giải quyết, và đội nào trong hai đội có nhận ra ma sát đó nếu không
   cố ý đo không?** Hãy chọn một phụ thuộc xuyên đội gần đây và lần theo dòng thời gian thực của nó; câu trả lời thường dài hơn, và
   ít nhìn thấy hơn với những người liên quan, so với điều cả hai đội tưởng.

3. **Khi chúng ta gần đây có vấn đề về chất lượng hay hài lòng, một đổ vỡ giao tiếp hay cộng tác có thể là một phần nguyên nhân
   gốc thật không?** Hãy nhìn lại một sự cố hay một sự sụt giảm hài lòng gần đây và hỏi cụ thể câu này, thay vì chấp nhận lời giải
   thích đầu tiên, hiển nhiên hơn.

4. **Một thành viên mới mất bao lâu để có đóng góp độc lập, có ý nghĩa đầu tiên, và thời gian đó biến thiên bao nhiêu giữa người
   này và người khác?** Thời gian hòa nhập dài hoặc biến thiên nhiều là một triệu chứng trực tiếp, đo được của việc hiểu biết chung
   thực sự chảy tốt đến đâu ở đội bạn.

5. **Mạng giao tiếp không chính thức của chúng ta có khớp với sơ đồ tổ chức chính thức không, hay một nút thắt ẩn hoặc một túi cô
   lập đã hình thành mà không ai gọi tên?** Nếu bạn chưa bao giờ nhìn trực tiếp vào điều này, sự vắng mặt đó tự nó đáng bàn.

6. **Tài liệu của chúng ta có thực sự tìm thấy được, hay chỉ tồn tại đâu đó khó tìm?** Hãy hỏi một thành viên mới gần đây, hoặc
   cố ý thử trả lời một câu hỏi thật chỉ dùng các nguồn tài liệu của bạn, và xem trải nghiệm thực sự diễn ra ra sao.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Giao tiếp diễn ra tự nhiên qua sự gần gũi và trò chuyện hằng ngày trong một đội nhỏ, và đo lường chính thức thường
không cần thiết. Rủi ro cần để ý là hệ số xe buýt tập trung nguy hiểm khi đội lớn quá cỡ mà sự thẩm thấu không chính thức còn với
tới mọi người, thường quanh tám đến mười hai người.

**Doanh nghiệp nhỏ.** Một cuộc trò chuyện đơn giản, định kỳ, trung thực, "ai là người duy nhất hiểu hệ thống này", thường làm lộ
những rủi ro tập trung tri thức quan trọng nhất mà không cần đo đạc chính thức. Hãy ưu tiên ghi lại hai hoặc ba vùng tri thức mong
manh nhất, tập trung nhất trước.

**Doanh nghiệp lớn.** Ma sát phụ thuộc xuyên đội và sự tập trung tri thức đều mở rộng tệ ở đây, vì nhiều đội hơn nghĩa là bề mặt
phối hợp lớn hơn và nhiều hệ thống quan trọng hơn có thể rơi vào quyền sở hữu của một nhóm chuyên gia thâm niên ngày càng nhỏ. Hãy
đầu tư có chủ đích vào việc đo đạc mà chủ đề này khuyến nghị, vì sự nắm bắt không chính thức thực sự không bao quát được một tổ
chức ở quy mô này.

**Chính phủ.** Các hệ thống sống lâu và thâm niên nhân viên dài phổ biến ở các tổ chức khu vực công có thể tạo ra rủi ro hệ số xe
buýt nghiêm trọng ẩn sau sự ổn định bề ngoài, vì một hệ thống đã không đổi chủ cả thập kỷ có thể hoàn toàn phụ thuộc vào một hai
người sắp nghỉ hưu. Hãy coi việc đo sự tập trung tri thức là mối quan tâm về tính liên tục hoạt động, không chỉ một sự tinh tế kỹ
thuật.

## Ví dụ

**Doanh nghiệp lớn.** Đội nền tảng của một công ty hậu cần phát hiện, chỉ sau một sự cố nghiêm trọng khi một kỹ sư then chốt đi
nghỉ, rằng một thuật toán định tuyến cốt lõi có hệ số xe buýt hiệu dụng bằng một: lịch sử kiểm soát phiên bản cho thấy một người
đã là tác giả của hơn 90% các thay đổi gần đây của thành phần, và hồ sơ luân phiên trực ca cho thấy cùng người đó đã đích thân xử
lý mọi sự cố liên quan trong hai năm trước. Đội đưa ra một chương trình lan tỏa tri thức có chủ đích, các buổi làm việc cặp đôi và
luân phiên quyền sở hữu xử lý các sự cố liên quan, và một phân tích tiếp theo tám tháng sau cho thấy hệ số xe buýt đã tăng lên bốn,
với kỹ sư gốc được giải phóng để làm công việc mới, đòn bẩy cao hơn thay vì mãi là điểm lỗi đơn lẻ.

**Chính phủ.** Đội kỹ thuật của một cơ quan phúc lợi bang đo ma sát phụ thuộc xuyên đội lần đầu tiên sau các độ trễ lặp lại, được
nhận thấy không chính thức, trong một dịch vụ xác minh điều kiện dùng chung. Dữ liệu cho thấy thời gian chờ trung vị cho một thay
đổi phụ thuộc từ đội dịch vụ dùng chung là mười một ngày, dài hơn nhiều so với điều cả hai đội đã nghĩ khi được hỏi không chính
thức, và nguyên nhân gốc hóa ra là một quy trình yêu cầu không rõ, không được ghi lại chứ không phải thiếu năng lực. Công bố một
quy trình yêu cầu rõ ràng, đơn giản và một mục tiêu thời gian phản hồi cam kết cho dịch vụ dùng chung đã đưa thời gian chờ trung vị
xuống dưới hai ngày trong một quý, không cần thêm nhân sự.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo trực tiếp giao tiếp và cộng tác là bắt được các nguyên nhân gốc mà các chiều khác quy sai: một vấn đề chất lượng
trông như một lỗ hổng kiểm thử nhưng thực ra là một đổ vỡ giao tiếp lãng phí công sức khi một đội cố sửa nó bằng cách thêm nhiều
kiểm thử hơn thay vì sửa lỗi phối hợp nền tảng. Ví dụ hệ số xe buýt ở trên cho thấy phiên bản rõ rệt nhất của lợi tức này: một tổ
chức chủ động phát hiện và sửa một rủi ro tập trung tri thức nghiêm trọng tránh được cái giá thảm khốc của việc phát hiện nó trong
một cuộc khủng hoảng thực, khi người duy nhất hiểu một hệ thống quan trọng thực sự vắng mặt.

Tổng chi phí sở hữu chủ yếu là công sức đo đạc, kết hợp dữ liệu kiểm soát phiên bản, trực ca và theo dõi vấn đề theo những cách không
tự động có sẵn, cộng với kỷ luật định kỳ rà soát tường minh sự tập trung tri thức và ma sát phụ thuộc. Chi phí đó khiêm tốn so với
chi phí của một cuộc khủng hoảng hệ số xe buýt thực sự hay một thất bại phối hợp xuyên đội kinh niên, chưa được giải quyết.

## Phản mẫu và cạm bẫy

- **Bỏ qua chiều này vì khó đo đạc tự động:** để lại các nguyên nhân gốc bị quy sai cho các chiều khác dễ đo hơn.
- **Coi sơ đồ tổ chức là bức tranh chính xác về các kiểu mẫu giao tiếp thực:** thường sai, và khoảng cách đó chính là nơi các nút
  thắt ẩn cư ngụ.
- **Bỏ qua hệ số xe buýt cho đến khi một cuộc khủng hoảng buộc phải phát hiện:** kiểu thất bại gây hại nhất mà chủ đề này cảnh báo.
- **Cho rằng sự tồn tại của tài liệu bằng sự hữu ích của tài liệu:** nội dung lỗi thời hay không tìm thấy được cung cấp ít giá trị
  giao tiếp thật.
- **Đo ma sát xuyên đội nhưng không hành động theo một nguyên nhân gốc rõ ràng, sửa được khi đã tìm ra:** lãng phí khoản đầu tư
  chẩn đoán.
- **Coi thời gian hòa nhập chậm, biến thiên chỉ là vấn đề nhân sự thay vì tín hiệu cộng tác kỹ thuật:** bỏ sót một đại diện thực sự
  hữu ích, đo được.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Giao tiếp và cộng tác hoàn toàn không được đo; hệ số xe buýt và ma sát xuyên đội chỉ được phát hiện qua
  khủng hoảng.
- **Mức 2, Phát triển:** Có một chút nhận thức không chính thức về sự tập trung tri thức, nhưng không có đo lường nhất quán hay
  điều tra chủ động.
- **Mức 3, Chuẩn hóa:** Hệ số xe buýt và ma sát phụ thuộc xuyên đội được đo nhất quán cho các hệ thống quan trọng và dịch vụ dùng
  chung trên toàn tổ chức.
- **Mức 4, Quản lý:** Việc vẽ bản đồ mạng giao tiếp định kỳ làm lộ các nút thắt ẩn và túi cô lập, và thời gian hòa nhập được theo
  dõi như một đại diện trực tiếp cho sức khỏe hiểu biết chung.
- **Mức 5, Điều phối:** Tổ chức chủ động giảm rủi ro tập trung tri thức và ma sát xuyên đội trước khi chúng gây sự cố, và có thể
  chỉ ra các can thiệp cụ thể, lan tỏa tri thức có chủ đích, làm rõ quy trình phụ thuộc, đã cải thiện đo được chiều này.

## Ý tưởng để thảo luận

1. Hệ số xe buýt của hệ thống quan trọng nhất của chúng ta là bao nhiêu, một cách trung thực?
2. Phụ thuộc xuyên đội nào đã gây ma sát nhiều nhất trong quý vừa rồi, và chúng ta có đo nó không?
3. Một thành viên mới có tìm thấy tài liệu của chúng ta, hay chỉ thấy rằng về mặt kỹ thuật nó tồn tại đâu đó?
4. Mạng giao tiếp không chính thức của chúng ta có khớp với sơ đồ tổ chức không?
5. Vấn đề chất lượng hay hài lòng nào có thể thực sự có một nguyên nhân gốc cộng tác mà chúng ta chưa điều tra?

## Điểm chính cần nhớ

- Thất bại giao tiếp và cộng tác thường **khoác áo các vấn đề khác**; một nguyên nhân gốc bị quy sai cho chiều không đúng lãng phí
  công sức.
- Theo dõi **sự tập trung tri thức (hệ số xe buýt)** trực tiếp bằng dữ liệu kiểm soát phiên bản và trực ca, thay vì đợi một cuộc
  khủng hoảng làm lộ nó.
- Đo **ma sát phụ thuộc xuyên đội** một cách tường minh; nó thường vô hình với các đội liên quan cho đến khi được đo.
- Dùng **thời gian hòa nhập đến đóng góp hiệu quả** làm đại diện trực tiếp, thực tế cho việc hiểu biết chung chảy tốt đến đâu.
- Định kỳ vẽ bản đồ **mạng giao tiếp thực**, vì chúng thường khác đáng kể với sơ đồ tổ chức chính thức.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of
  Developer Productivity," *ACM Queue* (2021).
- *Team Topologies*, của Matthew Skelton và Manuel Pais (các chế độ tương tác đội và thiết kế phụ thuộc xuyên đội).
- *Peopleware: Productive Projects and Teams*, của Tom DeMarco và Timothy Lister (cấu trúc giao tiếp không chính thức và tác động
  của chúng lên năng suất).
- Conway, Melvin E., "How Do Committees Invent?" (1968): nguồn gốc của Định luật Conway, về mối quan hệ giữa cấu trúc giao tiếp
  và cấu trúc hệ thống.
