# 2.8 Chỉ số chuỗi giá trị Lean

## Tổng quan và động lực

Mọi chỉ số mà phần này đã bao quát cho đến nay, thời gian luồng, tải luồng, thời gian chu kỳ, mức
sử dụng, đều bắt nguồn từ một bộ công cụ cũ hơn nhiều: năm phép đo cơ sở của việc lập bản đồ chuỗi
giá trị **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)** kinh điển, được phát triển tại
Toyota và khái quát khắp sản xuất, vận hành và cung cấp dịch vụ rất lâu trước khi phần mềm vay mượn
chúng. **Thời gian dẫn (lead time, LT)** là tổng thời gian đồng hồ từ lúc công việc được yêu cầu đến
lúc nó được giao. **Thời gian xử lý (process time, PT)** là thời gian làm trực tiếp thực tế dành cho
một đơn vị. **Thời gian chu kỳ (cycle time, CT)** là thời gian trung bình cần để hoàn thành một nút
hoặc giai đoạn đơn lẻ trong chuỗi. **Phần trăm hoàn chỉnh và chính xác (percent complete and
accurate, %C/A)** là phần trăm các đơn vị mà một đội ở hạ nguồn có thể xử lý mà không cần làm lại.
**Takt time** là thời gian tối đa chấp nhận được để hoàn thành một đơn vị nhằm khớp gọn gàng với nhu
cầu của khách hàng.

Chủ đề này tồn tại vì kỹ thuật phần mềm không phát minh ra những ý tưởng này, nó vay mượn chúng, và
việc vay mượn đôi khi dùng lại cùng những từ cho các thứ hơi khác nhau. Thời gian chu kỳ của chính
cuốn sách này (chủ đề 2.6) đo cụ thể các giai đoạn kỹ thuật của một thay đổi, viết mã, đánh giá,
kiểm thử, triển khai, trong khi CT kinh điển của Lean là "thời gian trung bình mỗi nút" tổng quát hơn
áp dụng cho bất kỳ quy trình nào. Thời gian luồng (chủ đề 2.4) là tên của cuốn sách này cho thứ mà
Lean gọi là thời gian dẫn. Biết phép ánh xạ là quan trọng vì một độc giả đến từ nền Lean Six Sigma,
phổ biến trong sản xuất, hậu cần, y tế và vận hành chính phủ, sẽ dùng chính những thuật ngữ này với
nghĩa gốc của chúng, và một đội phần mềm không nói cùng ngôn ngữ sẽ bỏ lỡ một cây cầu dễ dàng, có
bằng chứng tới các đồng nghiệp ngoài kỹ thuật.

Với các đội lớn, %C/A là chỉ số bị dùng ít nhất trong chủ đề này. Nó nắm bắt điều mà các chỉ số luồng
ở chủ đề 2.3 và 2.4 không làm được: bao nhiêu phần trong những gì một giai đoạn tạo ra thực sự dùng
được bởi giai đoạn kế tiếp mà không bị trả lại. Cuộn lên qua một chuỗi giá trị nhiều giai đoạn, một
khái niệm mà sản xuất gọi là **năng suất thông lượng cuộn (rolled throughput yield)**, %C/A cho thấy
việc làm lại cộng dồn một cách vô hình qua các lần bàn giao ra sao, một kiểu mẫu mà các tổ chức
doanh nghiệp có đường ống dài, nhiều đội và các chương trình chính phủ có nhiều cổng phê duyệt đặc
biệt dễ mắc và hiếm khi đo trực tiếp.

## Các nguyên tắc chính

- **Năm chỉ số này có trước phần mềm và khái quát vượt ra ngoài nó.** Chúng là bộ từ vựng chung mà một
  bên liên quan được đào tạo Lean Six Sigma, phổ biến ở các doanh nghiệp lớn và vận hành chính phủ,
  vốn đã nói trôi chảy.
- **Xung đột thuật ngữ là có thật và đáng gọi tên tường minh.** Thời gian chu kỳ của cuốn sách này
  (chủ đề 2.6) và CT kinh điển của Lean có liên quan nhưng không đồng nhất; hãy ghi lại phép ánh xạ
  để các cuộc trò chuyện liên chức năng không lặng lẽ nói lệch nhau.
- **%C/A phải được cuộn lên qua mọi giai đoạn, không đo một lần ở cuối.** Việc làm lại phát sinh sớm
  trong chuỗi và bị bắt muộn là vô hình với một chỉ số chỉ đo tại điểm giao cuối.
- **Takt time định khung lại việc lập kế hoạch năng lực quanh nhu cầu, không phải công sức.** Câu hỏi
  chuyển từ "chúng ta có thể đi nhanh đến đâu" sang "chúng ta cần đi nhanh đến đâu", nối trực tiếp với
  mức sử dụng (chủ đề 2.7) và tải luồng (chủ đề 2.4).
- **Đây là các chỉ số chẩn đoán, không phải chỉ số phù phiếm.** Mỗi chỉ số tồn tại để trả lời một câu
  hỏi vận hành cụ thể, không phải để tạo ra một con số ấn tượng cho bảng điều khiển.

## Khuyến nghị

### Lập bản đồ chuỗi giá trị của bạn với cả năm chỉ số Lean trước khi áp dụng một khung đặc thù phần mềm

Hãy tính thời gian dẫn, thời gian xử lý, thời gian chu kỳ, %C/A và takt time cho một mẫu đại diện công
việc di chuyển qua chuỗi giá trị của bạn trước khi chồng các chỉ số riêng của Flow Framework (chủ đề
2.3 và 2.4) lên trên. Điều này cho bạn một đường cơ sở mà bất kỳ bên liên quan am hiểu Lean Six Sigma
nào cũng hiểu ngay, và nó thường xuyên làm lộ cùng sự chi phối của thời gian chờ mà chủ đề 2.5 mô tả,
được diễn đạt trong một bộ từ vựng có trước và sẽ tồn tại lâu hơn bất kỳ khung phần mềm cụ thể nào.

### Cuộn phần trăm hoàn chỉnh và chính xác lên theo phép nhân qua mọi giai đoạn

Hãy đo %C/A tại từng giai đoạn riêng lẻ, rồi nhân các tỷ lệ cấp giai đoạn với nhau để có năng suất
thông lượng cuộn của chuỗi giá trị. Ba giai đoạn mỗi giai đoạn riêng lẻ chạy ở 90% hoàn chỉnh và
chính xác cộng dồn thành khoảng 73% tổng thể, một con số trông chẳng giống báo cáo riêng của giai
đoạn nào và thường là con số trung thực hơn. Phép tính đơn lẻ này là cách nhanh nhất để lộ ra một
đường ống nhiều giai đoạn đang thực sự hấp thụ bao nhiêu việc làm lại.

### Đặt takt time một cách tường minh từ dữ liệu nhu cầu khách hàng thật, không từ năng lực

Hãy tính takt time bằng thời gian làm việc khả dụng chia cho nhu cầu khách hàng trong giai đoạn đó,
cố ý độc lập với việc đội của bạn tình cờ làm việc nhanh đến đâu hôm nay. Hãy so sánh thời gian xử lý
và thời gian chu kỳ đo được của bạn với con số này: thời gian xử lý thoải mái dưới takt time cho thấy
độ chùng khỏe mạnh, trong khi thời gian chu kỳ vượt takt time là bằng chứng cụ thể, định lượng về sự
thiếu hụt năng lực, không chỉ là cảm giác rằng mọi thứ đang trễ.

### Ghi lại phép ánh xạ giữa thuật ngữ Lean và từ vựng riêng của cuốn sách này

Nơi tổ chức của bạn đã chạy một chương trình Lean Six Sigma ngoài phần mềm, hoặc nơi kỹ thuật báo cáo
cho lãnh đạo thạo bộ từ vựng đó, hãy ghi tường minh phép ánh xạ trong hiến chương chỉ số (chủ đề 1.4):
thời gian luồng của cuốn sách này là thời gian dẫn của Lean, thời gian chu kỳ của cuốn sách này (chủ
đề 2.6) là một ứng dụng cụ thể của CT tổng quát hơn của Lean, và thời gian hoạt động của cuốn sách
này (chủ đề 2.5) là thời gian xử lý của Lean. Tài liệu đơn lẻ này ngăn một cuộc tranh cãi lặp lại, ít
giá trị về việc con số của ai là "thật".

### Dùng %C/A làm rào chắn cạnh vận tốc luồng, không thay thế nó

Hãy ghép năng suất thông lượng cuộn với vận tốc luồng (chủ đề 2.3) theo cách cuốn sách này ghép mọi
chỉ số tốc độ với một rào chắn ổn định. Số mục tăng cùng %C/A cuộn giảm nghĩa là chuỗi giá trị đang
giao nhiều đơn vị hơn mà ngày càng cần làm lại sau này, đúng kiểu mẫu tốc-độ-không-chất-lượng mà chủ
đề 1.2 cảnh báo mọi họ chỉ số phải đề phòng.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ các chỉ số Lean kinh điển (LT, PT, CT, %C/A, takt time) | Từ vựng phổ quát; dùng được cho cả đội phần mềm lẫn phi phần mềm | Không đặc thù phần mềm; cần chuyển dịch cho các giai đoạn đặc thù kỹ thuật |
| Chỉ các chỉ số Flow Framework (chủ đề 2.3, 2.4) | Xây riêng cho chuỗi giá trị phần mềm và khả năng nhìn thấy loại mục | Xa lạ với các bên liên quan được đào tạo Lean Six Sigma ngoài kỹ thuật |
| Cả hai, với phép ánh xạ được ghi lại tường minh | Nói được cả hai bộ từ vựng; cây cầu liên chức năng mạnh nhất | Cần kỷ luật ban đầu để viết phép ánh xạ ra và giữ nó hiện hành |
| %C/A chỉ đo tại điểm giao cuối | Đơn giản, một con số | Giấu việc làm lại phát sinh và bị bắt sớm hơn trong chuỗi |

Mâu thuẫn trung tâm là **tính phổ quát so với tính đặc thù**. Các chỉ số Lean kinh điển dễ đọc ngay lập
tức với bất kỳ ai có kinh nghiệm sản xuất, vận hành hay Six Sigma, nhưng chúng không được thiết kế
với các giai đoạn đặc thù của phần mềm, đánh giá mã, kiểm thử tự động, phê duyệt triển khai, trong
đầu. Hãy giải quyết bằng cách dùng các chỉ số Lean làm bộ từ vựng cơ sở chung cho các cuộc trò chuyện
liên chức năng và với lãnh đạo, và các chỉ số riêng của Flow Framework (chủ đề 2.3 và 2.4) cho công
việc chẩn đoán đặc thù phần mềm mà các đội kỹ thuật làm hằng ngày.

## Câu hỏi để thảo luận với đội của bạn

1. **Hôm nay chúng ta có tính được cả năm chỉ số Lean kinh điển cho chuỗi giá trị của mình không, hay
   chỉ có vài cái trong số đó?** Phần lớn các đội phần mềm có tương đương thời gian luồng và thời gian
   chu kỳ nhưng chưa bao giờ tính tường minh thời gian xử lý, %C/A hay takt time. Hãy xác định cái nào
   trong năm thực sự thiếu trước khi cho rằng khoảng trống nhỏ.

2. **Chúng ta đã bao giờ cuộn %C/A qua mọi giai đoạn của chuỗi giá trị, hay chỉ đo nó tại điểm giao
   cuối?** Một phép đo đơn lẻ ở cuối chuỗi giấu đúng việc làm lại cộng dồn mà phép tính năng suất
   thông lượng cuộn của chủ đề này được thiết kế để làm lộ. Hãy thử phép cuộn lên bằng dữ liệu thật.

3. **Chúng ta có biết takt time của mình, tính từ nhu cầu khách hàng thực, và thời gian chu kỳ đo được
   của chúng ta so với nó thế nào không?** Phần lớn các đội chưa bao giờ làm phép so sánh này tường
   minh, nghĩa là các cuộc trò chuyện về năng lực vẫn mang tính giai thoại thay vì định lượng.

4. **Nếu một bên liên quan được đào tạo Lean Six Sigma ngoài kỹ thuật hỏi về thời gian chu kỳ của
   chúng ta, chúng ta có tự tin mình và họ nói cùng một thứ không?** Thời gian chu kỳ của cuốn sách
   này (chủ đề 2.6) và CT kinh điển của Lean có liên quan nhưng không đồng nhất. Hãy bàn xem sự phân
   biệt đó đã bao giờ gây ra một sự hiểu lầm thật trong tổ chức của bạn chưa.

5. **Năng suất thông lượng cuộn của chúng ta đã bao giờ thấp hơn đáng kể so với %C/A báo cáo riêng của
   bất kỳ giai đoạn đơn lẻ nào chưa?** Nếu bạn chưa bao giờ tính phép cuộn lên, hãy bàn xem bạn kỳ vọng
   thấy gì rồi kiểm tra nó với dữ liệu thật.

6. **Tổ chức của chúng ta có đang chạy một chương trình Lean hay Six Sigma ngoài phần mềm mà chúng ta
   có thể căn chỉnh theo thay vì duy trì một bộ từ vựng riêng, tách rời không?** Nhiều doanh nghiệp và
   cơ quan chính phủ đã có hạ tầng này; hãy kiểm tra xem kỹ thuật đã bao giờ thực sự kết nối với nó
   chưa.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Lập bản đồ chuỗi giá trị Lean đầy đủ hiếm khi đáng nghi thức ở quy mô này, nhưng takt
time đáng hiểu không chính thức: biết đại khái đội thực sự cần di chuyển nhanh đến đâu để khớp nhu cầu
khách hàng thật, thay vì một nhịp nội bộ tùy ý, ngăn cả việc xây thừa năng lực quá sớm lẫn xây thiếu
khi tăng trưởng đến.

**Doanh nghiệp nhỏ.** %C/A là chỉ số hữu ích ngay lập tức nhất trong năm cái ở đây, vì nó trả lời
trực tiếp "bao nhiêu phần những gì chúng ta phát hành cần được làm lại", một câu hỏi mà chủ doanh
nghiệp và các đội nhỏ cảm nhận sâu sắc mà không phải lúc nào cũng có một con số đi kèm. Hãy theo dõi
nó không chính thức cho một hoặc hai quy trình quan trọng của bạn trước khi đầu tư vào bất cứ thứ gì
công phu hơn.

**Doanh nghiệp lớn.** Đây là nơi bộ từ vựng Lean kinh điển phát huy giá trị, vì các doanh nghiệp lớn rất
thường đã chạy một chương trình Lean Six Sigma trong vận hành, các bộ phận gần sản xuất, hoặc dịch vụ
dùng chung, và kỹ thuật nói cùng ngôn ngữ giành được một cây cầu tức thì, đáng tin tới các chức năng
đó thay vì phải biện minh một bộ chỉ số riêng, chỉ-phần-mềm từ đầu.

**Chính phủ.** Các cơ quan chính phủ, đặc biệt những cơ quan có gốc từ các chức năng quản lý, gần sản
xuất hay hậu cần, thường đã có các nhiệm vụ Lean hoặc cải tiến quy trình. Định khung chuỗi giá trị của
một dịch vụ số bằng chính các thuật ngữ kinh điển, thời gian dẫn, thời gian xử lý, %C/A, takt time,
mà văn phòng cải tiến quy trình của cơ quan đã dùng thường là cách nhanh nhất để giành sự hỗ trợ thể
chế thực sự cho một nỗ lực hiện đại hóa phần mềm.

## Ví dụ

**Doanh nghiệp lớn.** Bộ phận phần mềm nội bộ của một công ty sản xuất đã nhiều năm vật lộn để ban lãnh
đạo vận hành, quen Lean Six Sigma từ sàn nhà máy, xem trọng các chỉ số kỹ thuật của họ. Việc định
khung lại đường ống phân phối của bộ phận bằng chính năm chỉ số kinh điển đó, tính thời gian dẫn, thời
gian xử lý, thời gian chu kỳ, %C/A và takt time cho chuỗi giá trị phần mềm của nó, lần đầu tiên khiến
các con số của bộ phận dễ đọc ngay với lãnh đạo vận hành. Một phép tính năng suất thông lượng cuộn
qua bốn giai đoạn của đường ống cho thấy %C/A thực tế là 61%, thấp hơn nhiều so với con số riêng báo
cáo của bất kỳ giai đoạn nào, điều trở thành cơ sở bằng chứng cho một sáng kiến giảm làm lại mà lãnh
đạo vận hành tài trợ ngay trong cùng quý.

**Chính phủ.** Đội cấp phép số của một sở giao thông bang, báo cáo cho một cơ quan có văn phòng cải tiến
quy trình Lean lâu năm, chưa bao giờ làm việc với văn phòng đó vì các chỉ số của chính họ dùng ngôn
ngữ đặc thù phần mềm mà văn phòng không nhận ra. Sau khi chuyển chuỗi giá trị cấp phép sang thời gian
dẫn, thời gian xử lý và %C/A, văn phòng cải tiến quy trình xác định rằng ràng buộc thực của đội không
phải tốc độ kỹ thuật mà là một giai đoạn rà soát pháp lý ở hạ nguồn chạy thấp xa so với takt time hiệu
dụng của chính nó đối với nhu cầu giấy phép, một phát hiện mà văn phòng có thể hành động ngay vì nó được
định khung bằng những thuật ngữ quen thuộc.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng bộ từ vựng Lean kinh điển cạnh các chỉ số đặc thù phần mềm của cuốn sách này
là một cây cầu đáng tin, tức thì tới chuyên môn cải tiến quy trình và nguồn vốn thường đã tồn tại ở
nơi khác trong một tổ chức lớn. Ví dụ công ty sản xuất ở trên, giành tài trợ giảm làm lại ngay trong
quý khi việc định khung lại làm lập luận dễ đọc, là kiểu mẫu mà cách tiếp cận của chủ đề này tạo ra
một cách đáng tin: hiểu biết không mới, nhưng bộ từ vựng làm nó hành động được với đúng đối tượng thì
mới.

Tổng chi phí sở hữu thấp: năm chỉ số này không cần đo đạc mới nào ngoài những gì các chủ đề 2.4 đến 2.6
đã thu thập, cộng với một phân loại làm lại %C/A thường chỉ là một bổ sung đơn giản cho việc theo dõi
lỗi và mục luồng sẵn có (chủ đề 2.2). Khoản đầu tư chính là chuyển dịch, ghi lại phép ánh xạ giữa
thuật ngữ của cuốn sách này và thuật ngữ kinh điển của Lean, điều tự hoàn vốn ngay lần đầu tiên nó
ngăn một sự hiểu lầm liên chức năng.

## Phản mẫu và cạm bẫy

- **Chỉ đo %C/A tại điểm giao cuối:** véc-tơ bị lách ở trung tâm của chủ đề này. Một đội có thể báo cáo
  %C/A giai đoạn cuối cao trong khi các giai đoạn sớm hơn lặng lẽ tạo ra việc làm lại được sửa trước khi
  ai đo, khiến cả chuỗi giá trị trông khỏe mạnh hơn thực tế. Rào chắn là cuộn %C/A lên theo phép nhân
  qua mọi giai đoạn, phép tính năng suất thông lượng cuộn, và định kỳ kiểm toán định nghĩa "hoàn chỉnh
  và chính xác" của từng giai đoạn để nó không thể thu hẹp lặng lẽ theo thời gian.
- **Cho rằng thời gian chu kỳ của cuốn sách này và CT kinh điển của Lean nghĩa y hệt nhau:** gây ra sự
  nhầm lẫn liên chức năng thật khi hai bộ từ vựng gặp nhau mà không có phép ánh xạ được ghi lại.
- **Đặt takt time từ năng lực hiện tại thay vì nhu cầu khách hàng thật:** đánh bại mục đích của chỉ số,
  vốn là để lộ khoảng cách giữa nhu cầu và năng lực, không phải để xác nhận bất cứ nhịp nào đã có.
- **Coi các chỉ số Lean kinh điển là lỗi thời khi một khung đặc thù phần mềm được áp dụng:** vứt bỏ một
  cây cầu đáng tin, có bằng chứng tới chuyên môn cải tiến quy trình có thể đã tồn tại trong tổ chức.
- **Bỏ qua một chương trình Lean Six Sigma sẵn có ở nơi khác trong tổ chức:** mất đi nguồn vốn, chuyên
  môn và uy tín thể chế mà việc định khung lại các chỉ số phân phối bằng ngôn ngữ chung có thể mở khóa.
- **Báo cáo %C/A mà không ghép nó với vận tốc luồng:** cho phép một con số thông lượng tăng giấu một tỷ
  lệ làm lại giảm, cùng khoảng trống rào chắn mà cuốn sách này cảnh báo xuyên suốt.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Không chỉ số nào trong năm chỉ số Lean kinh điển được tính; phân phối được bàn mà
  không tham chiếu thời gian dẫn, thời gian xử lý hay %C/A.
- **Mức 2, Phát triển:** Thời gian dẫn và thời gian chu kỳ được theo dõi không chính thức, nhưng thời
  gian xử lý, %C/A và takt time không được tính, và không có phép ánh xạ sang từ vựng riêng của cuốn
  sách này.
- **Mức 3, Chuẩn hóa:** Cả năm chỉ số kinh điển được tính nhất quán, và phép ánh xạ sang từ vựng luồng và
  thời gian chu kỳ của cuốn sách này được ghi lại trong một hiến chương chỉ số chung.
- **Mức 4, Quản lý:** Năng suất thông lượng cuộn được tính qua mọi giai đoạn của chuỗi giá trị, và takt
  time được so sánh với thời gian chu kỳ đo được để định lượng tường minh các khoảng trống năng lực.
- **Mức 5, Điều phối:** Tổ chức đã kết nối các chỉ số phân phối phần mềm của mình với một chương trình
  Lean hay Six Sigma có sẵn ở nơi khác trong doanh nghiệp, và có thể chỉ ra các quyết định đầu tư hay
  quy trình cụ thể được đưa ra vì bộ từ vựng chung làm một hiểu biết hành động được với đối tượng phi
  kỹ thuật.

## Ý tưởng để thảo luận

1. Hôm nay chúng ta có tính được thời gian dẫn, thời gian xử lý, thời gian chu kỳ, %C/A và takt time cho chuỗi giá trị của mình không?
2. Năng suất thông lượng cuộn của chúng ta sẽ là bao nhiêu nếu nhân %C/A của mọi giai đoạn với nhau?
3. Tổ chức của chúng ta có đang chạy một chương trình Lean hay Six Sigma mà chúng ta chưa bao giờ kết nối các chỉ số kỹ thuật với không?
4. Thời gian chu kỳ đo được của chúng ta so với takt time, tính từ nhu cầu khách hàng thực, như thế nào?

## Điểm chính cần nhớ

- Năm chỉ số Lean kinh điển, **thời gian dẫn, thời gian xử lý, thời gian chu kỳ, phần trăm hoàn chỉnh
  và chính xác, và takt time**, có trước phần mềm và vẫn là bộ từ vựng chung của các bên liên quan được
  đào tạo Lean Six Sigma.
- **Thời gian luồng và thời gian chu kỳ** của cuốn sách này ánh xạ lên, nhưng không đồng nhất với,
  thời gian dẫn và CT kinh điển của Lean; hãy ghi lại phép ánh xạ tường minh để tránh nhầm lẫn liên chức
  năng.
- Véc-tơ bị lách trung tâm của chủ đề là **chỉ đo %C/A tại điểm giao cuối**; rào chắn là cuộn nó lên
  theo phép nhân qua mọi giai đoạn như năng suất thông lượng cuộn.
- **Takt time định khung lại năng lực quanh nhu cầu khách hàng thật**, không phải nhịp hiện có, và ghép
  trực tiếp với mức sử dụng (chủ đề 2.7) và tải luồng (chủ đề 2.4).
- Định khung lại phân phối phần mềm bằng thuật ngữ Lean kinh điển thường là cách nhanh nhất để kết nối
  với **chuyên môn cải tiến quy trình và nguồn vốn sẵn có** trong một tổ chức lớn.

## Tài liệu tham khảo và đọc thêm

- Rother, Mike, và John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate
  Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., và Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your
  Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, và Daniel Roos. *The Machine That Changed the World*. Free Press,
  1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve
  Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
