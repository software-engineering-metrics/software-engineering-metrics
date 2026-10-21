# 1.4 Quản trị và quyền sở hữu chỉ số

## Tổng quan và động lực

Một chỉ số không có chủ là một cuộc tranh cãi thường trực đang chờ xảy ra. Hai đội
tính "người dùng hoạt động" theo hai cách khác nhau và tốn cả một cuộc họp để đối
chiếu số liệu thay vì quản lý xu hướng; một ô trên bảng điều khiển không ai bảo trì
lặng lẽ lỗi thời suốt nhiều tháng trước khi ai đó nhận ra; một chỉ số ban đầu được
xây để chẩn đoán cho một đội lại bị đội khác dùng cho một mục đích mà định nghĩa gốc
của nó chưa bao giờ được thiết kế để hỗ trợ. Không điều nào trong số đó là vấn đề đo
lường theo nghĩa thống kê. Đó là vấn đề quản trị, và giải được bằng chính kỷ luật mà
các tổ chức vốn đã áp dụng cho mã nguồn: quyền sở hữu tường minh, một [nguồn sự thật](https://en.wikipedia.org/wiki/Single_source_of_truth)
được ghi lại, và một quy trình rà soát.

Quản trị không phải là quan liêu vì quan liêu. Nó là thứ giúp một chương trình chỉ
số sống sót khi chạm vào quy mô tổ chức. Một đội đơn lẻ có thể giữ định nghĩa chỉ số
trong đầu ai đó và sửa sự trôi lệch qua trò chuyện hằng ngày. Một tổ chức có hàng
chục đội, mỗi đội vừa tạo ra vừa dùng chỉ số, thì không thể. Không có quản trị, định
nghĩa trôi lặng lẽ, chỉ số nhân lên mà không ai cắt tỉa, và đến lúc lãnh đạo nhận ra
hai báo cáo mâu thuẫn nhau, chi phí để đối chiếu chúng đã được trả nhiều lần qua
những cuộc họp lãng phí và niềm tin bị xói mòn.

Với các tổ chức doanh nghiệp và chính phủ, quản trị mang thêm trọng lượng vì chỉ số
ngày càng nuôi những quyết định có hệ quả thật, phân bổ ngân sách, báo cáo hiệu suất
công khai, hợp đồng nhà cung cấp, sống lâu hơn bất kỳ cá nhân nào đã dựng bảng điều
khiển gốc. Một hiến chương chỉ số sống sót qua việc nhân sự thay đổi, mà bất kỳ thành
viên mới nào cũng đọc và hiểu được, là thứ giữ cho các con số của một tổ chức mang
cùng một ý nghĩa năm năm nữa như hôm nay.

## Các nguyên tắc chính

- **Mỗi chỉ số có đúng một chủ sở hữu.** Sở hữu chung là không sở hữu; khi mọi người
  cùng sở hữu một định nghĩa thì không ai bảo trì nó.
- **Một chỉ số có một nguồn sự thật.** Hai hệ thống tính cùng một chỉ số theo hai cách
  khác nhau là một thất bại quản trị đang chờ lộ ra.
- **Quản trị được viết ra, không phải tri thức truyền miệng.** Một hiến chương chỉ số
  chỉ sống trong trí nhớ của ai đó sẽ không sống sót khi họ rời đi.
- **Loại bỏ quan trọng như áp dụng.** Một chương trình chỉ số lành mạnh cắt tỉa có chủ
  đích như cách nó mở rộng.
- **Quản trị tỷ lệ với hệ quả, không phải với số lượng chỉ số.** Một chỉ số nuôi một
  báo cáo công khai cần quản trị nặng hơn chỉ số mà một đội đơn lẻ dùng để gỡ lỗi
  sprint của chính mình.

## Khuyến nghị

### Viết một hiến chương chỉ số cho mỗi bộ chỉ số vượt qua ranh giới đội

Một **hiến chương chỉ số (metrics charter)** là một tài liệu ngắn, sống, nêu mục đích
của một bộ chỉ số, các phi-mục-tiêu tường minh (sự phân biệt chẩn đoán-so-với-đánh-giá
của chủ đề 1.1 thuộc về đây), chủ sở hữu và nguồn sự thật của từng chỉ số, và một nhịp
rà soát. Hãy giữ nó trong một trang. Tệp docs/examples/metrics-charter-example.md
trong kho đi kèm của cuốn sách này cho thấy hình dạng. Một hiến chương ngắn như vậy
được đọc; một hiến chương lan thành tài liệu chính sách thì không.

### Gán một chủ sở hữu có tên cho mỗi chỉ số, không phải một đội

"Đội nền tảng sở hữu chỉ số này" làm loãng trách nhiệm cho đến khi không ai thực sự
bảo trì nó. Hãy gọi tên một người hoặc một vai trò cụ thể, chịu trách nhiệm. Chủ sở
hữu đó chịu trách nhiệm giữ cho định nghĩa của chỉ số chính xác, việc đo đạc của nó
khỏe mạnh, và trả lời câu hỏi "vì sao con số này trông sai" khi điều đó chắc chắn
đến. Quyền sở hữu có thể và nên luân chuyển khi người ta đổi vai trò, nhưng hiến
chương luôn phải nêu tên một chủ sở hữu hiện tại, đừng bao giờ để trống ô đó.

### Thiết lập một nguồn sự thật cho mỗi chỉ số và cấm tính toán song song

Khi hai hệ thống tính cùng một chỉ số mang cùng tên danh nghĩa theo hai cách khác
nhau, ví dụ "người dùng hoạt động" của một đội đếm lượt đăng nhập còn của đội khác
đếm lời gọi API, sự bất đồng kết quả tốn kém trong các cuộc họp đối chiếu hơn nhiều
so với việc thống nhất một nguồn sự thật ngay từ đầu. Hãy nêu tên hệ thống có thẩm
quyền cho mỗi chỉ số trong hiến chương, và coi mọi phép tính khác của cùng chỉ số đó
hoặc là một lỗi cần sửa hoặc là một chỉ số mang tên khác cần được đổi tên.

### Đưa một đợt rà soát loại bỏ vào nhịp quản trị

Một chương trình chỉ số chỉ luôn thêm chỉ số sẽ tích tụ sự lan man bảng điều khiển mà
không ai hành động được (chủ đề 1.1). Ở mỗi buổi rà soát quản trị, bên cạnh việc đề
xuất chỉ số mới, hãy hỏi chỉ số hiện có nào đã không báo cho quyết định nào trong hai
chu kỳ gần nhất và là ứng viên để loại bỏ. Loại bỏ không phải là thất bại; đó là cùng
kỷ luật mà một cơ sở mã lành mạnh áp dụng cho mã chết.

### Tỷ lệ độ nghiêm ngặt của quản trị với hệ quả, không phải khối lượng

Không phải chỉ số nào cũng cần cùng một quy trình. Một chỉ số mà một đội đơn lẻ tự
nghĩ ra để gỡ lỗi sprint của mình gần như không cần quản trị ngoài việc đội biết nó có
nghĩa gì. Một chỉ số nuôi bảng điểm điều hành, báo cáo hiệu suất công khai, hoặc lương
thưởng của một cá nhân cần một định nghĩa được ghi lại, một chủ sở hữu có tên, một
dấu vết kiểm toán và sự chấp thuận trước khi đưa vào hoạt động. Hãy khớp trọng lượng
quy trình của bạn với hệ quả của việc chỉ số sai, không phải với số chỉ số hiện có.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không quản trị chính thức | Nhanh, chi phí chung thấp cho các đội nhỏ | Định nghĩa trôi; quyền sở hữu loãng; bảng điều khiển lan man không kiểm soát |
| Hiến chương nhẹ cho mỗi bộ chỉ số | Rẻ, dễ đọc, mở rộng cùng tổ chức | Cần kỷ luật để giữ cập nhật; có thể bị bỏ qua dưới áp lực thời hạn |
| Hội đồng quản trị chỉ số trung tâm nặng nề | Nhất quán mạnh, dấu vết kiểm toán mạnh | Chậm phê duyệt chỉ số mới; có thể thành nút thắt mà các đội đi vòng |
| Quản trị tỷ lệ với hệ quả | Khớp công sức với rủi ro thực | Cần phán đoán để phân loại hệ quả đúng; có thể bị lách bằng cách đánh giá thấp mức đặt cược |

Mâu thuẫn trung tâm là **tính nhất quán so với tốc độ**. Quản trị trung tâm nặng nề
tạo ra các chỉ số đáng tin, nhất quán nhưng làm đội chậm lại đúng lúc họ muốn đo đạc
nhanh một thứ để trả lời một câu hỏi khẩn. Hãy giải quyết mâu thuẫn bằng cách tỷ lệ
trọng lượng quản trị với hệ quả: để các đội tự do đo đạc cho việc chẩn đoán của chính
họ, và chỉ yêu cầu kỷ luật hiến chương, quyền sở hữu và chấp thuận đầy đủ khi một chỉ
số vượt qua ranh giới đội hoặc nuôi một mục đích đánh giá hay công khai.

## Câu hỏi để thảo luận với đội của bạn

1. **Mỗi chỉ số vượt qua ranh giới đội có một chủ sở hữu có tên không, và chủ sở hữu
   đó có nhận ra mình chịu trách nhiệm nếu hôm nay được hỏi không?** "Đội nền tảng
   sở hữu nó" không phải là câu trả lời; một người hay vai trò cụ thể mới là. Hãy
   kiểm toán các chỉ số xuyên đội của bạn và kiểm tra xem chủ sở hữu được nêu tên,
   nếu có, có thực sự biết mình nắm trách nhiệm đó không.

2. **Ở đâu hiện tại chúng ta tính cùng một chỉ số mang cùng tên danh nghĩa theo hai
   cách khác nhau, và chúng ta đã tốn bao nhiêu thời gian đối chiếu sự bất đồng?**
   Đây là một trong những thất bại quản trị tốn kém nhất và phổ biến nhất ở các tổ
   chức lớn, và hoàn toàn phòng ngừa được bằng một nguồn sự thật duy nhất được ghi
   lại. Hãy mang theo một ví dụ thật nếu có và lần theo chi phí của nó.

3. **Lần cuối chúng ta loại bỏ một chỉ số là khi nào, và điều gì đã kích hoạt quyết
   định đó?** Một tổ chức chỉ mô tả được cách mình thêm chỉ số, không bao giờ cách
   gỡ bỏ, đang tích tụ nợ bảng điều khiển. Nếu bạn không nhớ nổi một lần loại bỏ,
   chính sự vắng mặt đó là câu trả lời cho câu hỏi này.

4. **Quy trình quản trị của chúng ta có tỷ lệ với hệ quả không, hay mọi chỉ số đều
   trải qua cùng một mức rà soát bất kể mức đặt cược?** Quản trị quá nặng trên một chỉ
   số đội ít rủi ro làm chậm công việc mà không có lợi ích an toàn; quản trị quá nhẹ
   trên một chỉ số nuôi báo cáo công khai hay một quyết định lương thưởng là rủi ro
   thật. Hãy vẽ các chỉ số hiện tại của bạn theo hệ quả và kiểm tra trọng lượng quy
   trình so với nó một cách trung thực.

5. **Điều gì xảy ra với quyền sở hữu của một chỉ số khi người xây nó đổi vai trò hoặc
   rời đi?** Một hiến chương chỉ số chỉ tồn tại trong đầu một người sẽ biến mất cùng
   họ. Hãy thử bằng cách chọn một chỉ số và hỏi liệu một nhân viên mới, chỉ từ tài liệu
   viết, có hiểu được định nghĩa, nguồn sự thật và mục đích của nó không.

6. **Làm sao chúng ta biết được nếu định nghĩa của một chỉ số đã lặng lẽ thay đổi?**
   Một thay đổi cách tính con số, mà không đổi tên hay không có ghi chú trong lịch sử
   của nó, gần như vô hình cho đến khi ai đó so sánh dữ liệu cũ và mới và thấy một chỗ
   gián đoạn không giải thích được. Hãy bàn xem các chỉ số của bạn hiện có bất kỳ dạng
   nhật ký thay đổi nào không.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Quản trị chính thức thường là thừa với một đội năm người nơi ai cũng
đã biết mỗi con số nghĩa là gì. Kỷ luật duy nhất đáng áp dụng sớm là gọi tên một chủ
sở hữu cho mỗi chỉ số bằng văn bản, vì nó gần như không tốn gì và ngăn sự nhầm lẫn khi
vài người đầu tiên gia nhập và bắt đầu hỏi một con số nghĩa là gì.

**Doanh nghiệp nhỏ.** Quản trị ở đây chủ yếu nghĩa là chọn, và bám lấy, một công cụ
làm nguồn sự thật cho mỗi chỉ số thay vì để bảng tính và bảng điều khiển tích hợp của
một nền tảng lặng lẽ lệch nhau. Hãy viết hiến chương thành một tài liệu chung duy
nhất, dù không chính thức, để nhân viên mới có thể tìm hiểu một con số nghĩa là gì
mà không phải hỏi quanh.

**Doanh nghiệp lớn.** Đây là nơi quản trị xứng đáng với chỗ đứng của nó. Hãy chuẩn
hóa định nghĩa giữa các đơn vị kinh doanh, yêu cầu hiến chương cho bất cứ thứ gì nuôi
bảng điểm điều hành, và đưa rà soát loại bỏ vào một nhịp quản trị định kỳ, vì sự lan
man bảng điều khiển ở quy mô này nhanh chóng trở nên đắt đỏ, cả về chi phí bảo trì
lẫn mất uy tín khi hai bộ phận báo cáo những con số mâu thuẫn cho cùng một thứ.

**Chính phủ.** Quản trị ở đây thường có chiều kích pháp lý hay kiểm toán: các thước đo
hiệu suất công bố có thể phải thỏa yêu cầu báo cáo theo luật định, và một thay đổi
định nghĩa có thể có hệ quả chính trị thật. Hãy ghi lại phương pháp luận công khai,
đóng băng định nghĩa giữa các kỳ báo cáo trừ khi chính thay đổi được biện minh công
khai, và coi một cuộc kiểm toán độc lập về định nghĩa của chỉ số, không chỉ giá trị
hiện tại, là một thực hành quản trị thường trực.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty phần mềm đa quốc gia phát hiện, trong quá trình tích
hợp sau mua lại, rằng hai đơn vị kinh doanh lớn nhất của họ định nghĩa "tần suất triển
khai" khác nhau: một bên đếm mọi lần đẩy lên môi trường staging, bên kia chỉ đếm các
bản phát hành production. Ban lãnh đạo đã so sánh hiệu suất phân phối của hai đơn vị
hơn một năm bằng những con số thực ra không so sánh được. Cách sửa là một hội đồng
quản trị chỉ số toàn công ty công bố một bảng thuật ngữ định nghĩa chỉ số duy nhất
(được phản chiếu trong chủ đề 9.2 của cuốn sách này), yêu cầu mọi đội chứng nhận tuân
thủ, và loại bỏ các định nghĩa cục bộ mơ hồ trong vòng một quý.

**Chính phủ.** Một văn phòng thống kê quốc gia chịu trách nhiệm công bố bảng điều
khiển hiệu suất dịch vụ số phát hiện rằng một thay đổi cách tính "được giải quyết
trong SLA", do một đội kỹ thuật lặng lẽ thực hiện để sửa thứ họ thấy là một lỗi, đã
làm dịch chuyển một con số tuân thủ nổi bật vài điểm phần trăm mà không có tài liệu
công khai nào về thay đổi. Văn phòng thiết lập một quy trình kiểm soát thay đổi chính
thức cho mọi định nghĩa chỉ số nuôi một báo cáo công khai: thay đổi đề xuất cần một
lý do được ghi lại, một so sánh trước-sau công bố cùng với thay đổi, và sự chấp thuận
của một viên chức chịu trách nhiệm có tên, lấp khoảng trống đã để thay đổi trước đó
trôi qua không ai hay.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của quản trị là tránh được chi phí đối chiếu. Mỗi giờ trong một cuộc họp nơi
hai đội tranh cãi con số của ai đúng là một giờ mà quản trị có kỷ luật, một nguồn sự
thật duy nhất, một chủ sở hữu có tên, lẽ ra đã ngăn hoàn toàn. Ở quy mô doanh nghiệp,
chi phí này cộng dồn qua hàng chục đội và có thể ngốn một phần thực sự đáng kể sự chú
ý của lãnh đạo vào một vấn đề mà một hiến chương một trang cho mỗi bộ chỉ số đã tránh
được.

Tổng chi phí sở hữu của một thực hành quản trị nhẹ, một hiến chương, một chủ sở hữu
có tên, một đợt rà soát định kỳ, là khiêm tốn và chủ yếu nằm ở đầu. Phương án thay
thế, phát hiện sau một năm của một sáng kiến lớn rằng những con số lãnh đạo vẫn tin
chưa bao giờ thực sự so sánh được, tốn kém hơn đáng kể, cả về phân tích lãng phí lẫn
tổn hại uy tín của việc sửa hồ sơ công khai hay nội bộ sau sự việc.

## Phản mẫu và cạm bẫy

- **Sở hữu theo đội thay vì theo người có tên:** làm loãng trách nhiệm cho đến khi
  không ai thực sự bảo trì định nghĩa.
- **Tính song song cùng một chỉ số danh nghĩa:** đảm bảo sự bất đồng cuối cùng và việc
  đối chiếu tốn kém.
- **Một hiến chương chỉ tồn tại trong đầu ai đó:** biến mất ngay khi người đó đổi vai
  trò.
- **Một chương trình chỉ số chỉ thêm, không bao giờ loại bỏ:** tạo ra sự lan man bảng
  điều khiển mà không ai hành động được.
- **Trọng lượng quản trị đồng đều bất kể hệ quả:** làm chậm công việc ít rủi ro trong
  khi bảo vệ chưa đủ các chỉ số công khai hay gắn lương thưởng có mức đặt cược cao.
- **Thay đổi định nghĩa thầm lặng:** ý nghĩa của một chỉ số dịch chuyển mà không có
  nhật ký thay đổi, và các so sánh lịch sử lặng lẽ mất hiệu lực.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số không có chủ sở hữu chính thức; định nghĩa nằm
  trong trí nhớ cá nhân và trôi lặng lẽ giữa các đội.
- **Mức 2, Phát triển:** Một số đội viết tài liệu không chính thức cho chỉ số của
  chính mình, nhưng không có định dạng hiến chương chung hay tính nhất quán xuyên đội.
- **Mức 3, Chuẩn hóa:** Mỗi chỉ số vượt ranh giới đội có một hiến chương được ghi lại,
  một chủ sở hữu có tên và một nguồn sự thật được thống nhất, được thực thi trên toàn
  tổ chức.
- **Mức 4, Quản lý:** Một nhịp quản trị định kỳ rà soát các chỉ số về sự liên quan
  tiếp tục, loại bỏ những chỉ số không còn xứng đáng, và theo dõi thay đổi định nghĩa
  với một lịch sử nhìn thấy được.
- **Mức 5, Điều phối:** Quản trị tỷ lệ với hệ quả, tự động hóa khi có thể (một danh
  mục chỉ số gắn cờ các chỉ số chưa ghi lại hay không có chủ), và tổ chức có thể chứng
  minh, theo yêu cầu, toàn bộ nguồn gốc của bất kỳ con số công bố nào.

## Ý tưởng để thảo luận

1. Một nhân viên mới, chỉ từ tài liệu, có tìm ra được ba chỉ số quan trọng nhất của chúng ta thực sự nghĩa là gì không?
2. Chỉ số nào của chúng ta hiện được hai hệ thống tính theo hai cách khác nhau?
3. Lần cuối chúng ta loại bỏ một chỉ số là khi nào, và chúng ta quyết định bằng cách nào?
4. Quy trình quản trị của chúng ta có nặng hơn ở nơi hệ quả cao nhất, hay đồng đều?
5. Ai, theo tên, sở hữu chỉ số hướng công chúng quan trọng nhất của tổ chức chúng ta?

## Điểm chính cần nhớ

- Mỗi chỉ số cần **một chủ sở hữu có tên**, không phải một đội, và **một nguồn sự
  thật**, không phải tính song song.
- Viết một **hiến chương chỉ số** ngắn, sống cho bất kỳ bộ chỉ số nào vượt ranh giới
  đội, nêu mục đích, phi-mục-tiêu, quyền sở hữu và nhịp rà soát.
- **Loại bỏ** quan trọng như một kỷ luật quản trị không kém áp dụng; hãy cắt tỉa có
  chủ đích.
- Tỷ lệ độ nghiêm ngặt của quản trị với **hệ quả**, không phải số lượng chỉ số: quy
  trình nặng hơn cho các chỉ số công khai, đánh giá hay gắn lương thưởng.
- Định nghĩa của một chỉ số có thể trôi lặng lẽ; hãy theo dõi thay đổi bằng một lịch
  sử nhìn thấy được để niềm tin vào một con số sống sót qua việc nhân sự thay đổi.

## Tài liệu tham khảo và đọc thêm

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance
  Program*, của John Ladley (các cấu trúc quản trị áp dụng được cho chương trình chỉ
  số).
- *Measuring and Managing Performance in Organizations*, của Robert D. Austin (sự rối
  loạn chức năng của tổ chức quanh quyền sở hữu và việc sử dụng chỉ số).
- *Key Performance Indicators*, của David Parmenter (quyền sở hữu chỉ số, kỷ luật định
  nghĩa và nhịp rà soát).
- Hướng dẫn của Văn phòng Trách nhiệm Giải trình Chính phủ Hoa Kỳ (GAO) về đo lường
  hiệu suất và Đạo luật Hiện đại hóa GPRA: quản trị chỉ số và kiểm soát thay đổi trong
  khu vực công.
