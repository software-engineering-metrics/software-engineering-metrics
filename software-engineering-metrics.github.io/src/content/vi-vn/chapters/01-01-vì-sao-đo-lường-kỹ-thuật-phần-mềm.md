# 1.1 Vì sao đo lường kỹ thuật phần mềm

## Tổng quan và động lực

Kỹ thuật phần mềm chống lại việc đo lường theo cách mà sản xuất công nghiệp thì
không. Một dây chuyền nhà máy tạo ra những đơn vị giống hệt nhau, nên đếm chúng
cho bạn biết điều gì đó thật. Công việc phần mềm tạo ra những sản phẩm độc nhất vô
nhị dưới các yêu cầu liên tục thay đổi, nên một phép đếm ngây thơ, số commit, số
dòng, số phiếu đã đóng, hầu như không nói gì về giá trị đã phân phối. Khoảng cách
giữa độ khó của việc đo công việc phần mềm và nhu cầu rất thật là biết nó có đang
tốt hay không chính là nơi cuốn sách này tồn tại. Chủ đề này nói về việc thu hẹp
khoảng cách đó một cách trung thực: không phải bằng cách giả vờ công việc phần mềm
đếm được như đồ vật, mà bằng cách chính xác về những gì đo lường có thể và không
thể làm cho một tổ chức kỹ thuật.

Đo lường tồn tại để trả lời những câu hỏi mà một tổ chức không thể trả lời một
cách tự tin bằng cách khác: việc phân phối của chúng ta đang nhanh lên hay chậm đi,
chất lượng đang tốt lên hay xấu đi, các kỹ sư có đang kiệt sức không, khoản đầu tư
này có sinh lời không. Không có chỉ số, những câu hỏi đó được trả lời bởi người nói
tự tin nhất trong phòng, thường là người cao cấp nhất hoặc thuyết phục nhất có mặt,
và câu trả lời đó thường sai. Các đội [kỹ thuật phần mềm](https://en.wikipedia.org/wiki/Software_engineering)
bỏ qua đo lường không tránh được việc phán đoán hiệu suất của chính mình. Họ chỉ
phán đoán dựa trên cảm tính, giai thoại và thiên kiến gần đây thay vì bằng chứng.

Với các đội lớn, điều này thôi là "có thì tốt" mà trở thành mang tính cấu trúc.
Một đội sáu người có thể chia sẻ một mô hình tư duy về mọi việc đang diễn ra nhờ
trò chuyện hằng ngày. Một phòng ban sáu trăm người, trải khắp các múi giờ và đơn
vị kinh doanh, thì không thể. Ở quy mô đó, một bộ số liệu chung, đáng tin là thứ
thay thế thực tế duy nhất cho sự nắm bắt không chính thức mà một đội nhỏ có được
miễn phí. Ban lãnh đạo doanh nghiệp cần chỉ số để phân bổ đầu tư giữa hàng chục
đội tranh cùng một ngân sách. Các tổ chức kỹ thuật chính phủ cần chỉ số để chứng
minh với cơ quan lập pháp và công chúng rằng ngân sách được cấp đã tạo ra năng lực
thật, không chỉ hoạt động. Ở cả hai bối cảnh, "chúng tôi đã làm việc chăm chỉ"
không phải bằng chứng; một con số bảo vệ được mới là bằng chứng.

## Các nguyên tắc chính

- **Đo để học, không để phán xét.** Mục đích chính của một chỉ số kỹ thuật là báo
  cho một quyết định, không phải chấm điểm một người hay một đội.
- **Một con số không gắn với quyết định nào thì chỉ là đồ trang trí.** Nếu không
  một giá trị đọc nào của chỉ số làm thay đổi việc bạn làm tiếp theo, nó không
  thuộc về bảng điều khiển.
- **Đo lường là phương tiện, không phải mục tiêu.** Mục tiêu là phần mềm tốt hơn,
  được phân phối đáng tin cậy hơn, bởi một đội bền vững. Chỉ số chỉ tồn tại để
  phục vụ mục tiêu đó.
- **Mỗi chỉ số đều có chi phí.** Việc đo đạc, thời gian rà soát và rủi ro méo mó
  hành vi nêu trong chủ đề 1.2 đều tốn kém. Một chỉ số phải kiếm lại được chi phí
  đó.
- **Im lặng cũng là một quyết định.** Chọn không đo một thứ gì đó là một lựa chọn
  có hệ quả, không phải một mặc định trung tính.

## Khuyến nghị

### Bắt đầu từ quyết định, không phải bảng điều khiển

Trước khi đo đạc bất cứ thứ gì, hãy gọi tên quyết định mà chỉ số sẽ báo cho. "Chúng
tôi muốn biết đường ống triển khai mới có làm giảm tỷ lệ sự cố không" là một câu
hỏi mang hình dạng quyết định; "hãy theo dõi mọi thứ công cụ có thể xuất ra" thì
không. Làm ngược từ một quyết định giữ cho bộ chỉ số nhỏ và giữ cho mọi ô đều bảo
vệ được khi ai đó hỏi vì sao nó tồn tại. Nếu bạn không gọi được tên quyết định mà
một chỉ số sẽ báo cho, đừng xây nó vội. Chủ đề 1.3 đi sâu hơn vào phiên bản
"kết quả trước đầu ra" của kỷ luật này.

### Tách việc dùng để chẩn đoán khỏi việc dùng để đánh giá

Một chỉ số dùng để chẩn đoán vấn đề của hệ thống (vì sao thời gian dẫn của chúng
ta tăng dần) hành xử hoàn toàn khác với cùng chỉ số đó dùng để đánh giá một người
hay một đội (thời gian dẫn của ai tệ nhất). Cách đầu mời gọi điều tra và cải tiến.
Cách sau mời gọi che giấu và lách, vì giờ con số có gắn hệ quả về danh tiếng hay
tài chính. Hãy quyết định rõ ràng, bằng văn bản, một chỉ số dùng cho việc nào, và
đừng bao giờ để một chỉ số chẩn đoán trượt sang dùng để đánh giá mà không cân nhắc
lại rủi ro một cách có chủ đích. Sự phân biệt này lặp lại liên tục xuyên suốt cuốn
sách và được chính thức hóa trong mục phi-mục-tiêu của hiến chương chỉ số nêu ở
chủ đề 1.4.

### Coi đo lường là giả thuyết, không phải sự thật

Một chỉ số là đại diện cho điều bạn thực sự quan tâm, không phải chính điều đó. Tần
suất triển khai là đại diện cho năng lực phân phối, không phải chính năng lực phân
phối. Hãy coi mọi chỉ số là một giả thuyết đang được kiểm chứng liên tục: con số
này còn bám theo điều chúng ta quan tâm không, hay thế giới đã dịch chuyển và bỏ
lại đại diện ở phía sau? Hãy xem lại câu hỏi đó theo một nhịp cố định thay vì giả
định rằng một chỉ số được chọn tốt hai năm trước vẫn được chọn tốt hôm nay, nhất
là khi công cụ, cơ cấu đội, hoặc (xem Phần 7) bản chất của chính công việc thay
đổi.

### Làm cho sự vắng mặt của đo lường trở nên hữu hình

Ở các tổ chức lớn, khoảng trống rủi ro nhất không phải là một chỉ số tồi, mà là
một khu vực không ai đo vì khó đo đạc: trải nghiệm lập trình viên, ma sát phụ
thuộc giữa các đội, sự xói mòn của tri thức thể chế. Hãy nêu tên các khoảng trống
này một cách tường minh trong hiến chương chỉ số thay vì để chúng vô hình theo mặc
định. Một tổ chức biết mình không đo gì, và vì sao, ở vị thế mạnh hơn nhiều so với
một tổ chức đã lặng lẽ quên rằng những khu vực đó tồn tại.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Đo đạc dày đặc, nhiều chỉ số | Tầm nhìn rộng, ít điểm mù hơn | Mệt mỏi vì bảng điều khiển, bề mặt bị lách lớn hơn, chi phí bảo trì cao hơn |
| Chỉ số tối thiểu, dẫn dắt bởi quyết định | Tập trung, ít chi phí chung, mỗi chỉ số đều bảo vệ được | Nguy cơ bỏ sót một vấn đề đang nổi lên nằm ngoài bộ đã chọn |
| Chỉ số chỉ để chẩn đoán | Khuyến khích báo cáo trung thực và điều tra | Ban lãnh đạo vẫn có thể dùng chúng để đánh giá một cách không chính thức |
| Chỉ số gắn với đánh giá cá nhân | Có cảm giác chịu trách nhiệm, dễ giải thích với giám đốc điều hành | Khuyến khích lách mạnh; làm tổn hại niềm tin; thường đo sai thứ |

Mâu thuẫn trung tâm là **độ bao phủ so với sự tập trung**, và nó được làm sắc nét
thêm bởi **chẩn đoán so với phán xét**. Quá ít chỉ số thì bạn phát triển những
điểm mù chỉ lộ ra như một cuộc khủng hoảng; quá nhiều thì không ai hành động được
theo cái nào, trong khi mỗi cái bạn gắn trọng lượng đánh giá lên đều mời gọi sự
méo mó. Hãy giải quyết bằng cách bắt đầu tối thiểu và dẫn dắt bởi quyết định, chỉ
thêm một chỉ số khi một quyết định cụ thể, có tên cần đến nó, và bằng cách bảo vệ
ranh giới chỉ-để-chẩn-đoán một cách tường minh trong công việc quản trị của chủ đề
1.4 thay vì để nó mòn đi theo mặc định.

## Câu hỏi để thảo luận với đội của bạn

1. **Với mỗi chỉ số trên bảng điều khiển hiện tại, một giá trị đọc tốt và một giá
   trị đọc xấu sẽ lần lượt kích hoạt quyết định nào?** Nếu cả hai giá trị dẫn đến
   cùng một hành động, hoặc không hành động nào, chỉ số đó là đồ trang trí. Hãy đi
   qua bảng điều khiển từng ô một và buộc phải có câu trả lời trung thực cho mỗi
   ô. Bài tập này thường xuyên cắt một nửa bảng điều khiển phình to chỉ trong một
   buổi ngồi, vì phần lớn sự lan man tích tụ từ những chỉ số không ai gỡ bỏ chứ
   không phải từ những chỉ số ai đó cố ý thêm vào với một lý do còn đúng.

2. **Chỉ số nào của chúng ta dùng để chẩn đoán, và chỉ số nào đã lặng lẽ trở thành
   để đánh giá?** Một chỉ số được xây để hiểu một ràng buộc của hệ thống có thể
   trôi sang việc dùng để xếp hạng đội hay cá nhân mà không ai quyết định điều đó
   một cách có chủ đích, thường qua một nhận xét buột miệng trong buổi rà soát rồi
   thành thói quen. Một khi sự trôi ấy xảy ra, con số không còn đáng tin, vì giờ
   người ta có lý do để làm nó trông đẹp thay vì làm nó chính xác. Hãy ghi rõ mục
   đích dự định của từng chỉ số bằng văn bản và đối chiếu thực tế hiện tại với nó.

3. **Chúng ta không đo gì vì khó đo đạc, và khoảng trống đó đang khiến chúng ta
   mất gì?** Những điểm mù nguy hiểm nhất là những điểm không bao giờ lên được bảng
   điều khiển chính vì chúng khó đo: ma sát phụ thuộc giữa các đội, sự xói mòn tri
   thức thể chế, hay sự tích tụ lặng lẽ của những giải pháp tạm mong manh. Hãy mang
   theo danh sách những điều ai cũng thầm lo nhưng không ai theo dõi, và trung thực
   về lý do.

4. **Nếu ngày mai chúng ta xóa chỉ số này, ai sẽ nhận ra, và họ sẽ mất gì?** Một
   chỉ số không ai nhớ là một chỉ số không báo cho quyết định nào. Câu hỏi này làm
   lộ ra những ô phù phiếm tồn tại thuần túy nhờ quán tính. Với một tổ chức lớn có
   hàng chục bảng điều khiển của đội, kỷ luật cắt tỉa này quan trọng không kém kỷ
   luật thêm chỉ số mới ngay từ đầu.

5. **Mỗi chỉ số trên bảng điều khiển thực sự tốn bao nhiêu để tạo ra và duy trì,
   kể cả thời gian kỹ thuật đằng sau việc đo đạc?** Chỉ số không miễn phí. Đường
   ống, bảng điều khiển và thời gian rà soát dành để bàn một con số đều mang một
   chi phí định kỳ dễ bị đánh giá thấp vì nó phân tán qua nhiều việc nhỏ chứ không
   nằm trên một dòng ngân sách nhìn thấy được. Hãy mang theo công sức đo đạc và
   bảo trì thực tế của bạn và cân nó với giá trị quyết định từ câu hỏi 1.

6. **Ở đâu đo lường đã trở thành thứ thay thế cho phán đoán, và ở đâu phán đoán đã
   trở thành thứ thay thế cho đo lường?** Cả hai kiểu thất bại đều có thật. Một đội
   giao mọi quyết định cho bảng điều khiển sẽ mất phán đoán theo ngữ cảnh vốn bắt
   được những gì con số bỏ sót; một đội phớt lờ dữ liệu sẵn có để nghe theo giọng
   to nhất trong phòng lặp lại đúng vấn đề mà chủ đề này mở đầu. Mục tiêu là
   những chỉ số báo cho phán đoán, không phải những chỉ số thay thế nó.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Với một nhúm kỹ sư, phần lớn điều chủ đề này cảnh báo, trôi sang
dùng để đánh giá, điểm mù, bảng điều khiển phình to, đều dễ tránh chỉ vì mọi người
nói chuyện với nhau hằng ngày. Rủi ro là điều ngược lại: bỏ qua hoàn toàn đo lường
vì cảm thấy đó là gánh nặng đội không kham nổi. Hãy chọn hai hoặc ba câu hỏi mang
hình dạng quyết định (chúng ta có đang phát hành đủ nhanh không, chất lượng có giữ
được không) và chỉ đo đạc những câu đó.

**Doanh nghiệp nhỏ.** Không có đội nền tảng hay dữ liệu chuyên trách, hãy dựa vào
bất cứ gì các công cụ sẵn có của bạn đã báo cáo thay vì tự xây đo đạc tùy chỉnh.
Bảng điều khiển của cổng thanh toán, chỉ số phản hồi của công cụ hỗ trợ, và lịch
sử build của nhà cung cấp CI thường bao quát những quyết định quan trọng nhất. Hãy
cưỡng lại cám dỗ mua một nền tảng phân tích kỹ thuật chuyên dụng trước khi bạn
chứng minh được mình sẽ hành động theo những gì nó nói.

**Doanh nghiệp lớn.** Rủi ro cốt lõi là các chỉ số lặng lẽ trôi từ chẩn đoán sang
đánh giá khi chúng cuộn lên qua các tầng quản lý, và những bảng điều khiển lớn lên
bằng cách bồi đắp vì không ai giữ việc cắt tỉa chúng. Quản trị (chủ đề 1.4) không
phải tùy chọn ở quy mô này. Hãy chuẩn hóa định nghĩa giữa các đơn vị kinh doanh,
và đưa một đợt rà soát loại bỏ định kỳ vào chính chương trình chỉ số.

**Chính phủ.** Chỉ số ở đây thường mang trọng lượng theo luật định hay ngân sách,
điều vừa nâng giá trị của việc làm đúng vừa nâng chi phí của việc làm sai. Một con
số báo cáo cho cơ quan lập pháp hay cơ quan giám sát cần một phương pháp luận được
ghi lại, một định nghĩa ổn định qua các kỳ báo cáo, và sự trung thực về giới hạn
của nó. Hãy coi "hiện chúng tôi không đo điều này" là một câu trả lời bạn có thể
cần bảo vệ, không phải một thiếu sót riêng tư cần giấu.

## Ví dụ

**Doanh nghiệp lớn.** Tổ chức kỹ thuật của một công ty bảo hiểm toàn cầu đã lớn lên
đến hơn sáu mươi đội scrum, mỗi đội có một bảng điều khiển không chính thức riêng,
không cái nào so sánh được với cái nào. Ban lãnh đạo không trả lời được một câu hỏi
cơ bản: trong mười khoản đầu tư nền tảng chiến lược của chúng ta, khoản nào thực sự
đang giúp phần mềm ra nhanh hơn. Cách sửa không phải là thêm chỉ số, mà là ít hơn
nhưng tốt hơn: tổ chức định nghĩa một lõi chung, dẫn dắt bởi quyết định gồm các chỉ
số DORA (chủ đề 2.10) được tính giống hệt nhau ở mọi nơi từ cùng dữ liệu đường ống,
loại bỏ bốn mươi bảng điều khiển riêng của từng đội, và cuối cùng có thể so sánh các
mảng đầu tư trên một cơ sở chung chỉ trong hai quý.

**Chính phủ.** Đội dịch vụ số của một cơ quan thuế quốc gia được một ủy ban giám sát
yêu cầu chứng minh lợi tức của một chương trình hiện đại hóa nhiều năm. Các chỉ số
hiện có của đội hoàn toàn mang tính nội bộ và dựa trên hoạt động: số story point đã
hoàn thành, số sprint đã đóng. Không cái nào trả lời câu hỏi thật của ủy ban. Thay
vào đó, đội xây một bộ nhỏ các chỉ số kết quả, thời gian trung vị để giải quyết vấn
đề khai báo của một công dân, tỷ lệ chấp nhận kênh số, và tỷ lệ lỗi lọt trong hệ
thống mới, rồi báo cáo hằng quý với phương pháp luận được ghi lại. Các câu hỏi của
ủy ban chuyển từ "hãy chứng minh các bạn đang làm việc" sang "làm sao chúng tôi nhân
rộng điều này ở cơ quan tiếp theo", đó chính là kết quả mà một bộ chỉ số được chọn
tốt được kỳ vọng tạo ra.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo lường có chủ đích là chất lượng quyết định. Một tổ chức có thể
nói, kèm bằng chứng, rằng "thời gian dẫn của chúng ta cải thiện 30% sau khoản đầu
tư nền tảng" có thể bảo vệ khoản đầu tư đó, lặp lại điều đã hiệu quả và dừng điều
không hiệu quả. Một tổ chức dựa vào giai thoại không làm được điều nào trong số đó
một cách tự tin, và cuối cùng phải tranh luận lại cùng những lập luận ở mỗi chu kỳ
ngân sách vì không ai chỉ ra được một con số mà cả hai phía cùng tin.

Chi phí của đo lường không phải là bảng điều khiển. Đó là kỷ luật liên tục: đo đạc,
duy trì định nghĩa, và việc cắt tỉa định kỳ mà chủ đề này khuyến nghị. Tổng chi phí
sở hữu đó là có thật nhưng khiêm tốn so với chi phí của phương án thay thế, tức một
tổ chức lớn đưa ra các quyết định công nghệ hàng triệu đô la dựa trên việc ai đã
tranh luận thuyết phục nhất trong phòng. Lợi tức của một chương trình chỉ số không
phải là chính các chỉ số; đó là những quyết định được cải thiện nhờ chúng.

## Phản mẫu và cạm bẫy

- **Đo mọi thứ công cụ xuất ra:** biến bảng điều khiển thành nhiễu và mời gọi việc
  lách trên một bề mặt khổng lồ mà không có giá trị quyết định tương ứng.
- **Chỉ số không có quyết định nào được nêu tên:** đồ trang trí tốn công bảo trì
  và không nói cho ai điều gì hành động được.
- **Lặng lẽ trôi từ chẩn đoán sang đánh giá:** cách nhanh nhất để phá hủy niềm tin
  vào một con số.
- **Coi chỉ số là sự thật thay vì giả thuyết:** một đại diện từng đúng hai năm trước
  có thể sai hôm nay, và không ai kiểm tra.
- **Nhầm sự vắng mặt của một con số xấu với sự hiện diện của một con số tốt:** một
  chỉ số bạn không bao giờ nhìn đến không thể cho bạn biết có gì sai.
- **Xây năng lực đo lường trước khi quyết định cần quyết định điều gì:** đo đạc đi
  tìm một câu hỏi lãng phí thời gian kỹ thuật thật.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số, nếu có, mang tính tùy hứng, riêng của người xây
  chúng, và không ai nói được chỉ số nào báo cho quyết định nào.
- **Mức 2, Phát triển:** Một bộ chỉ số cơ bản tồn tại cho một số đội, phần lớn sao
  chép từ một khung hay mặc định của công cụ, không có liên kết rõ ràng trở lại một
  quyết định.
- **Mức 3, Chuẩn hóa:** Mỗi chỉ số được theo dõi đều có mục đích được ghi lại và
  một phân loại chẩn đoán-so-với-đánh-giá tường minh, được áp dụng nhất quán khắp
  tổ chức.
- **Mức 4, Quản lý:** Các chỉ số được rà soát theo nhịp cố định so với những quyết
  định chúng báo cho; chỉ số nào thôi xứng đáng được giữ thì bị loại bỏ, và cả bộ
  được đo về chi phí cũng như giá trị.
- **Mức 5, Điều phối:** Đo lường là một năng lực sống: tổ chức thường xuyên nhận
  diện điểm mù của chính mình, kiểm tra xem các đại diện của mình còn bám theo thực
  tế không, và coi chính chương trình chỉ số là thứ cần cải tiến, không chỉ duy trì.

## Ý tưởng để thảo luận

1. Chỉ số nào trên bảng điều khiển của chúng ta sẽ khó bảo vệ việc giữ lại nhất nếu bị hỏi hôm nay?
2. Quý vừa rồi chúng ta đã đưa ra quyết định nào dựa vào một chỉ số, thay vì một ý kiến?
3. Ở đâu trong tổ chức, một chỉ số chẩn đoán đã lặng lẽ trở thành chỉ số đánh giá?
4. Chúng ta sợ đo điều gì, và vì sao?
5. Nếu chương trình chỉ số của chúng ta biến mất ngày mai, những quyết định nào sẽ tệ đi?

## Điểm chính cần nhớ

- Đo lường tồn tại để phục vụ **quyết định**, không phải để tự tồn tại; một chỉ số
  không gắn quyết định nào chỉ là đồ trang trí.
- Giữ việc dùng **chẩn đoán** tách khỏi việc dùng **đánh giá**, bằng văn bản, và
  cảnh giác với sự trôi lặng lẽ giữa hai việc.
- Coi mọi chỉ số là một **giả thuyết** về điều nó đại diện, không phải một sự thật
  đã định, và xem lại giả thuyết đó theo một nhịp.
- Im lặng, chọn không đo một thứ gì đó, tự nó là một quyết định có hệ quả; hãy làm
  cho các điểm mù trở nên hữu hình thay vì để chúng vô hình theo mặc định.
- Tổng chi phí của một chương trình chỉ số là có thật; hãy cân nó một cách tường
  minh với giá trị quyết định mà mỗi chỉ số mang lại.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren,
  Jez Humble và Gene Kim (nền tảng nghiên cứu cho việc đo lường kỹ thuật dựa trên
  kết quả).
- *How to Measure Anything*, của Douglas W. Hubbard (một khung chung để định lượng
  những thứ tưởng chừng không đo được).
- *Measuring and Managing Performance in Organizations*, của Robert D. Austin (phân
  tích nền tảng về sự rối loạn chức năng mà đo lường có thể đưa vào một tổ chức).
- *Thinking, Fast and Slow*, của Daniel Kahneman (các thiên kiến nhận thức khiến
  phán đoán không được hỗ trợ trở thành một sự thay thế kém tin cậy cho đo lường).
- Chương trình DevOps Research and Assessment (DORA) của Google, [dora.dev](https://dora.dev/)
  (nghiên cứu State of DevOps liên tục mà cuốn sách này dựa vào xuyên suốt).
