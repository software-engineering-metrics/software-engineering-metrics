# 2.3 Vận tốc luồng và phân bổ luồng

## Tổng quan và động lực

**Vận tốc luồng (flow velocity)** là số mục luồng (chủ đề 2.2) hoàn thành trong một giai
đoạn nhất định, thước đo [thông lượng](https://en.wikipedia.org/wiki/Throughput) của
Flow Framework. **Phân bổ luồng (flow distribution)** là tỷ lệ của từng loại mục luồng,
tính năng, lỗi, rủi ro và nợ, trong số các mục hoàn thành cùng giai đoạn đó. Hai chỉ số
này được thiết kế để đọc cùng nhau: chỉ vận tốc trả lời "chúng ta đã phát hành bao nhiêu",
chỉ phân bổ trả lời "đó là loại công việc nào", nhưng không câu hỏi nào có nhiều ý nghĩa
nếu thiếu câu kia. Một đội có thể tăng vận tốc trong khi phân bổ lặng lẽ dịch khỏi tính
năng và về phía làm lại lỗi, điều trông như tăng tốc trên biểu đồ vận tốc và thực ra là
triệu chứng của chất lượng đang suy giảm.

Sự ghép đôi này là cùng kỷ luật mà chủ đề 1.2 đòi hỏi ở mọi họ chỉ số trong cuốn sách này:
không bao giờ báo cáo một con số tốc độ mà không có rào chắn cho thấy tốc độ đó đã tốn
gì. Vận tốc luồng là sự khái quát trực tiếp nhất của phần này cho một chỉ số thông lượng,
gần với tần suất triển khai (chủ đề 2.10) về tinh thần hơn bất kỳ con số đơn lẻ nào khác
trong cuốn sách, nhưng nhận biết loại mục theo cách tần suất triển khai chưa bao giờ làm
được. Tần suất triển khai cho bạn biết mã đến production thường xuyên thế nào; vận tốc luồng,
ghép với phân bổ, cho bạn biết giá trị đến production thường xuyên thế nào và đó là loại giá
trị gì.

Với các đội lớn vận hành nhiều chuỗi giá trị đồng thời, sự ghép đôi này làm lộ một kiểu mẫu
mà một con số thông lượng đơn lẻ giấu hoàn toàn: một chuỗi giá trị có vận tốc trông khỏe
mạnh trong khi phân bổ của nó đã lặng lẽ trôi về công việc tính năng gần như thuần túy, bỏ
đói năng lực nợ và rủi ro mà chủ đề 2.2 cảnh báo cần được bảo vệ có chủ đích. Các tổ chức
doanh nghiệp so sánh thông lượng giữa các dòng sản phẩm, và các cơ quan chính phủ báo cáo
sản lượng phân phối cho các cơ quan giám sát, đều cần sự ghép đôi này để tránh nhầm sản
lượng thô với tiến bộ thật, bền vững.

## Các nguyên tắc chính

- **Vận tốc không có phân bổ giấu đi điều thực sự đã được phát hành.** Một số mục tăng
  không nói gì về việc con số đó khỏe mạnh, bị lách, hay lặng lẽ lệch về công việc dễ nhất
  hiện có.
- **Phân bổ không có vận tốc giấu đi quy mô.** Một tỷ lệ phần trăm trông khỏe mạnh có ít ý
  nghĩa nếu bạn cũng không biết nó đại diện cho bao nhiêu tổng công việc.
- **Hai chỉ số phải luôn được báo cáo cùng nhau.** Đây là ứng dụng trực tiếp của nguyên tắc
  ghép rào chắn của chủ đề 1.2 vào dữ liệu luồng cụ thể.
- **Vận tốc chịu cùng kiểu lách thay thế như mọi chỉ số đếm mục.** Tách công việc khó thành
  nhiều mục nhỏ, dễ làm tăng số đếm mà không giao tương xứng nhiều giá trị hơn.
- **Một phân bổ khỏe mạnh phụ thuộc bối cảnh, không phải mục tiêu cố định.** Chủ đề 2.2 bao
  quát điều này sâu hơn; vận tốc và phân bổ luôn nên được diễn giải so với mục tiêu mà bối
  cảnh ngụ ý.

## Khuyến nghị

### Báo cáo vận tốc luồng như một đường xu hướng, không bao giờ là con số của một giai đoạn

Số mục của một giai đoạn đơn lẻ nhiễu và dễ bị đọc sai. Hãy vẽ vận tốc luồng qua nhiều giai
đoạn liên tiếp và nhìn xu hướng, không phải một điểm dữ liệu nào, cùng kỷ luật mà chủ đề 1.6
khuyến nghị cho mọi chỉ số chuỗi thời gian dễ biến thiên tự nhiên.

### Không bao giờ trình bày vận tốc luồng mà không có phân bổ bên cạnh

Hãy coi đây là quy tắc cứng cho mọi bảng điều khiển hay báo cáo, không phải "có thì tốt".
Một biểu đồ vận tốc hiển thị một mình mời gọi đúng sự đọc sai mà chủ đề này mở đầu: thông
lượng tăng thực ra là một tỷ trọng làm lại hay công việc tính năng dễ ngày càng lớn chen
lấn năng lực nợ và rủi ro. Hãy đặt cả hai trên cùng một chế độ xem, luôn luôn.

### Gia quyền vận tốc theo kích thước hoặc độ phức tạp khi kích thước mục biến thiên rộng

Số mục thô coi một thay đổi cấu hình một dòng và một cuộc di chuyển kiến trúc nhiều tuần là
tương đương, điều mời gọi cùng kiểu lách thay thế mà cuốn sách này đã gọi tên cho tần suất
triển khai (chủ đề 2.10): tách công việc khó thành nhiều mục nhỏ làm tăng số đếm mà không
giao tương xứng nhiều hơn. Khi kích thước mục biến thiên rộng, hãy gia quyền vận tốc theo một
ước lượng kích thước hay độ phức tạp thô, hoặc theo dõi kích thước mục trung bình bên cạnh số
đếm thô, để một kích thước trung bình co lại bên cạnh một số đếm tăng hiện ra thay vì bị giấu.

### Theo dõi sự trôi của phân bổ luồng, không chỉ ảnh chụp hiện tại

Tín hiệu hữu ích nhất trong phân bổ luồng hiếm khi là tỷ lệ chính xác của giai đoạn này; đó là
hướng thay đổi qua nhiều giai đoạn. Một sự trôi đều, tính năng tăng trong khi nợ và rủi ro
lặng lẽ co lại, đáng được nêu với các bên liên quan từ rất sớm trước khi nó thành loại vấn
đề chất lượng hay bảo mật mà chủ đề 2.2 cảnh báo tích tụ vô hình dưới kiểu mẫu nhà máy tính
năng.

### So sánh vận tốc luồng giữa các chuỗi giá trị chỉ với sự cẩn trọng thực sự

Hai chuỗi giá trị với độ chi tiết mục khác nhau, quy mô đội khác nhau, hay giai đoạn sản phẩm
khác nhau không thể so sánh trực tiếp chỉ trên vận tốc thô, cùng vấn đề công bằng mà chủ đề
2.10 nêu cho tần suất triển khai giữa các đội. Hãy dùng vận tốc cho xu hướng của chính một
chuỗi giá trị trước, và chỉ thử so sánh xuyên chuỗi giá trị sau khi xác nhận các định nghĩa
mục và độ chi tiết thực sự so sánh được.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ vận tốc theo số mục thô | Đơn giản để tính và giải thích | Dễ bị lách thay thế; giấu loại giá trị đã phát hành |
| Vận tốc ghép với phân bổ | Cho thấy cả quy mô lẫn hỗn hợp giá trị | Cần phân loại mục luồng có kỷ luật (chủ đề 2.2) mới có ý nghĩa |
| Vận tốc gia quyền theo kích thước | Chống lách thay thế từ việc tách kích thước mục | Cần một phương pháp định cỡ nhất quán, được thống nhất trong đội |
| So sánh vận tốc xuyên chuỗi giá trị | Hữu ích cho các quyết định đầu tư cấp danh mục | Dễ bất công nếu không xác nhận các định nghĩa mục thực sự so sánh được |

Mâu thuẫn trung tâm là **sự đơn giản so với khả năng chống lách**. Số mục thô là con số dễ
tính và giải thích nhất, nhưng cũng dễ thổi phồng nhất bằng cách tách công việc khó thành
nhiều mảnh nhỏ. Hãy giải quyết bằng cách giữ chỉ số chính đơn giản, vận tốc thô ghép với phân
bổ, và dành việc gia quyền theo kích thước cho những chuỗi giá trị nơi kích thước mục được
biết là biến thiên đủ rộng để số đếm đơn giản đã thành gây hiểu lầm thực sự.

## Câu hỏi để thảo luận với đội của bạn

1. **Khi báo cáo vận tốc luồng, phân bổ luồng có luôn được hiển thị bên cạnh, hay vận tốc
   đôi khi đứng một mình?** Một con số vận tốc không có phân bổ là một bức tranh chưa đầy đủ
   theo chính nguyên tắc trung tâm của chủ đề này. Hãy kiểm tra các bảng điều khiển và báo
   cáo thực tế của bạn về khoảng trống này.

2. **Kích thước mục trung bình của chúng ta có đổi cùng lúc với vận tốc tăng không, và chúng
   ta có biết nếu nó đã đổi không?** Kích thước trung bình co lại bên cạnh một số đếm đang
   leo là dấu hiệu đặc trưng của lách thay thế áp dụng cho mục luồng. Hãy lấy dữ liệu thật
   thay vì cho rằng kiểu mẫu đó không có.

3. **Chúng ta đã bao giờ so sánh vận tốc của mình với đội khác mà không xác nhận các định
   nghĩa mục và độ chi tiết thực sự khớp chưa?** Một phép so sánh bất công ở đây có thể gây
   áp lực khiến một đội lách chính các con số của mình chỉ để trông có vẻ so sánh được, lặp
   lại cùng rủi ro mà cuốn sách này đã nêu cho tần suất triển khai.

4. **Phân bổ luồng của chúng ta có trôi về một hướng trong vài giai đoạn gần đây không, và có
   ai quyết định điều đó một cách có chủ đích không?** Một sự trôi chậm dễ bỏ sót qua từng
   giai đoạn. Hãy vẽ nhiều giai đoạn cùng nhau và tìm một xu hướng một cách trung thực trước
   khi cho rằng sự phân chia hiện tại ổn định.

5. **Nếu ai đó muốn thổi phồng vận tốc luồng của chúng ta mà không làm thêm công việc thật,
   cách dễ nhất họ có thể làm là gì, và báo cáo hiện tại của chúng ta có bắt được không?**
   Hãy đi qua cơ chế cụ thể của việc tách mục khó thành mục dễ, và bàn xem bảng điều khiển
   của bạn có thực sự lộ ra kiểu mẫu đó không.

6. **Các con số vận tốc và phân bổ của chúng ta có bao giờ đến các bên liên quan kinh doanh
   cùng nhau không, hay chỉ tiêu đề vận tốc đi lên trên?** Nguyên tắc ghép đôi chỉ bảo vệ
   khỏi đọc sai nếu cả hai nửa thực sự được những người ra quyết định từ dữ liệu nhìn thấy.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Vận tốc luồng thường dễ theo dõi không chính thức ở quy mô này, vì cả đội đã
có cảm nhận thô về thông lượng. Kỷ luật hữu ích là ghép nó với phân bổ ngay cả khi không
chính thức, để một nhà sáng lập không nhầm số phiếu đóng tăng với tiến bộ tính năng thật khi
số đếm thực ra bị chi phối bởi việc sửa lỗi giai đoạn đầu.

**Doanh nghiệp nhỏ.** Hãy theo dõi vận tốc và phân bổ cùng nhau từ bất kỳ công cụ nhẹ nào bạn
đã dùng cho việc phân loại mục luồng (chủ đề 2.2); không cần nền tảng phân tích chuyên dụng ở
quy mô này. Thói quen luôn xem chúng cạnh nhau quan trọng hơn bất kỳ độ tinh vi nào của công
cụ.

**Doanh nghiệp lớn.** So sánh vận tốc xuyên chuỗi giá trị hấp dẫn ở quy mô này cho việc ưu
tiên cấp danh mục, và cũng là nơi rủi ro bất công lớn nhất, vì các dòng sản phẩm khác nhau
chính đáng có độ chi tiết mục rất khác nhau. Hãy đầu tư xác nhận các định nghĩa so sánh được
trước khi dùng so sánh vận tốc để biện minh các quyết định đầu tư giữa các đội.

**Chính phủ.** Vận tốc luồng ghép với phân bổ cho một lãnh đạo công nghệ khu vực công một cơ
sở bằng chứng mạnh hơn nhiều để báo cáo sản lượng phân phối cho các cơ quan giám sát so với
thông lượng thô một mình, vì nó có thể cho thấy không chỉ đã phát hành bao nhiêu mà còn cho
thấy hỗn hợp phản ánh một sự phân bổ có chủ đích, bảo vệ được giữa chức năng mới, khắc phục lỗi
và quản lý rủi ro.

## Ví dụ

**Doanh nghiệp lớn.** Đội nền tảng của một nhà cung cấp phần mềm báo cáo vận tốc luồng tăng
đều trong ba quý liên tiếp, một xu hướng mà ban lãnh đạo ăn mừng như phân phối đang tăng tốc.
Một cái nhìn kỹ hơn vào phân bổ luồng, chỉ được yêu cầu sau một lần khách hàng khiếu nại về
lỗi tái diễn, cho thấy tỷ trọng "tính năng" của vận tốc tăng đó thực ra đã giảm từ 70% xuống
45% trong cùng giai đoạn, với các mục sửa lỗi lấp khoảng trống. Đội đã phát hành nhiều mục
hơn, nhưng một tỷ lệ ngày càng nhỏ trong đó là giá trị mới; phần còn lại là làm lại mà biểu
đồ vận tốc một mình đã che khuất hoàn toàn.

**Chính phủ.** Đội nền tảng dữ liệu của một cơ quan thống kê quốc gia theo dõi vận tốc luồng
như chỉ số phân phối chính cho báo cáo thường niên gửi hội đồng giám sát. Khi một thành viên
hội đồng hỏi bao nhiêu phần trăm vận tốc đó đại diện cho năng lực mới hướng công chúng, đội
phát hiện chưa bao giờ chia con số theo loại mục luồng và không trả lời trực tiếp được. Cơ quan
sau đó áp dụng báo cáo vận tốc-và-phân-bổ ghép đôi, cho thấy công việc rủi ro và tuân thủ, do
một quy định bảo vệ dữ liệu mới thúc đẩy, đã chính đáng tiêu thụ một tỷ trọng năng lực ngày
càng lớn, một sự phân bổ bảo vệ được mà hội đồng chấp nhận dễ dàng một khi nó được cho thấy
tường minh thay vì để ngầm trong một chỗ trũng vận tốc không giải thích.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc ghép vận tốc với phân bổ là một bản tường trình trung thực hơn, bảo vệ được
hơn về sản lượng phân phối so với từng con số một mình. Ví dụ nhà cung cấp phần mềm ở trên,
phát hiện rằng vận tốc tăng thực ra phản ánh sản lượng tính năng giảm, chính là kiểu đọc sai
mà sự ghép đôi này ngăn ngừa, và bắt được kiểu mẫu đó sớm rẻ hơn nhiều so với chỉ phát hiện
sau khi một vấn đề chất lượng hướng khách hàng buộc phải đặt câu hỏi.

Tổng chi phí sở hữu là tối thiểu một khi phân loại mục luồng (chủ đề 2.2) đã có sẵn: phân bổ
là một phép tổng hợp đơn giản của các mục đã phân loại, và kỷ luật hiển thị cả hai chỉ số cùng
nhau là một quy ước báo cáo, không phải một khoản đầu tư kỹ thuật. Phần lớn chi phí của các
khuyến nghị trong chủ đề này đã được trả khi tổ chức áp dụng phân loại mục luồng trung thực
ngay từ đầu.

## Phản mẫu và cạm bẫy

- **Báo cáo vận tốc luồng mà không có phân bổ:** véc-tơ bị lách ở trung tâm của chủ đề này.
  Một đội dưới áp lực phân phối có thể tăng số mục bằng cách ưu tiên công việc tính năng nhỏ,
  dễ và tránh các mục nợ, rủi ro hay lỗi khó hơn, hoặc bằng cách tách các mục lớn thành nhiều
  mục nhỏ, và một biểu đồ vận tốc hiển thị một mình sẽ đọc như tăng tốc chứ không phải sự dịch
  chuyển thực sự của điều đang được giao. Rào chắn là cùng kỷ luật ghép đôi mà chủ đề 1.2 yêu
  cầu xuyên suốt cuốn sách này: không bao giờ hiển thị vận tốc mà không có phân bổ, và định kỳ
  kiểm tra kích thước mục trung bình bên cạnh số đếm để bắt riêng việc tách mục.
- **So sánh vận tốc giữa các chuỗi giá trị với độ chi tiết mục khác nhau:** tạo ra một phép so
  sánh bất công, gây hiểu lầm.
- **Coi phân bổ của một giai đoạn đơn lẻ là ổn định:** bỏ sót sự trôi chậm, có ý nghĩa mà chỉ
  góc nhìn xu hướng mới làm lộ ra.
- **Để chỉ tiêu đề vận tốc đến các bên liên quan kinh doanh:** làm mất toàn bộ giá trị bảo vệ
  của nguyên tắc ghép đôi.
- **Bỏ qua kích thước mục trung bình trong khi ăn mừng vận tốc tăng:** bỏ sót dấu hiệu đặc
  trưng của lách thay thế.
- **Đặt mục tiêu vận tốc mà không tham chiếu phân bổ:** mời gọi đúng kiểu lách mà chủ đề này
  cảnh báo đích danh.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Vận tốc luồng, nếu được theo dõi, được báo cáo một mình, không có dữ
  liệu phân bổ, và không ai kiểm tra lách thay thế.
- **Mức 2, Phát triển:** Một số đội theo dõi phân bổ, nhưng nó không được ghép nhất quán với
  vận tốc trong báo cáo hoặc rà soát như một xu hướng.
- **Mức 3, Chuẩn hóa:** Vận tốc và phân bổ luôn được báo cáo cùng nhau, xem như xu hướng, với
  kích thước mục trung bình được giám sát để bắt lách thay thế.
- **Mức 4, Quản lý:** Sự trôi của phân bổ được điều tra chủ động trước khi nó thành vấn đề chất
  lượng hay bảo mật, và so sánh vận tốc xuyên chuỗi giá trị chỉ được thực hiện sau khi xác nhận
  các định nghĩa mục thực sự so sánh được.
- **Mức 5, Điều phối:** Vận tốc và phân bổ trực tiếp thông tin cho các quyết định đầu tư cấp
  danh mục, và tổ chức có thể chỉ ra các trường hợp cụ thể nơi sự trôi phân bổ được bắt và sửa
  trước khi nó gây ra thất bại nhìn thấy được.

## Ý tưởng để thảo luận

1. Báo cáo vận tốc luồng của chúng ta có luôn kèm phân bổ không, hay chúng ta đã bao giờ cho thấy cái này mà không có cái kia?
2. Kích thước mục luồng trung bình của chúng ta có dịch chuyển cùng với một thay đổi vận tốc gần đây không?
3. Chúng ta có biết nếu phân bổ luồng đã trôi đều trong vài quý qua không?
4. Cần gì để ai đó thổi phồng vận tốc của chúng ta mà không giao thêm giá trị thật, và chúng ta có nhận ra không?

## Điểm chính cần nhớ

- **Vận tốc luồng** đo thông lượng; **phân bổ luồng** đo thông lượng đó đại diện cho loại công
  việc nào. Hãy luôn báo cáo chúng cùng nhau.
- Sự ghép đôi này là ứng dụng trực tiếp của **nguyên tắc rào chắn** ở chủ đề 1.2: không bao giờ
  hiển thị một con số tốc độ mà không có bối cảnh về điều nó đã tốn.
- Véc-tơ bị lách trung tâm của chủ đề là **báo cáo vận tốc một mình**, có thể giấu sự dịch
  chuyển sang công việc tính năng dễ hoặc việc tách mục làm tăng số đếm mà không giao giá trị
  tương xứng.
- **Sự trôi phân bổ** hiện rõ nhất như một xu hướng qua nhiều giai đoạn, không phải trong ảnh
  chụp của giai đoạn đơn lẻ nào.
- **So sánh vận tốc xuyên chuỗi giá trị** cần các định nghĩa mục thực sự so sánh được mới công
  bằng; nếu không, chúng đánh lạc hướng nhiều hơn là cung cấp thông tin.

## Tài liệu tham khảo và đọc thêm

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital
  Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, và Gene Kim. *Accelerate: The Science of Lean Software and
  DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press,
  2015.
