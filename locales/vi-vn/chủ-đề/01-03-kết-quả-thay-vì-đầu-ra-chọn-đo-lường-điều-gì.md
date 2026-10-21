# 1.3 Kết quả thay vì đầu ra: chọn đo lường điều gì

## Tổng quan và động lực

Mọi chỉ số kỹ thuật đều rơi vào một trong ba loại, và nhầm lẫn giữa chúng là kiểu
thất bại phổ biến thứ hai trong cuốn sách này, sau việc bỏ qua hoàn toàn [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
Một **chỉ số đầu vào (input)** đo công sức đã bỏ ra: giờ làm của kỹ sư, số tiền đã
triển khai, số story point đã cam kết. Một **chỉ số đầu ra (output)** đo những gì hệ
thống đã sản xuất: tính năng đã phát hành, pull request đã gộp, phiếu đã đóng. Một
**chỉ số kết quả (outcome)** đo sự thay đổi thực sự quan trọng: doanh thu giữ lại
được, sự cố tránh được, thời gian tiết kiệm được cho người dùng. Các đội bị hút về
phía đầu vào và đầu ra vì chúng dễ đếm và hoàn toàn nằm trong tầm kiểm soát của đội.
Giá trị, hầu như luôn luôn, nằm ở kết quả, thứ xuất hiện chậm hơn, đo nhiễu hơn, và
khó quy cho công việc của một đội nào hơn.

Chủ đề này nói về việc chủ động chống lại lực hút đó. Một bảng điều khiển dựng
hoàn toàn từ đầu vào và đầu ra có thể trông bận rộn ấn tượng mà không tạo ra giá trị
thật nào: một đội có thể phát hành hàng chục tính năng không ai dùng, đóng hàng trăm
phiếu mà một tuần sau lại mở lại, hay đạt mọi ước lượng story point trong khi các
kết quả thực của sản phẩm, tỷ lệ giữ chân, mức hài lòng, doanh thu, đi ngang hoặc
sụt giảm. Không sự bận rộn nào trong số đó hiện ra như một vấn đề trên một bảng điều
khiển chỉ có đầu ra, vì bảng điều khiển chỉ có đầu ra không được dựng để nhìn thấy
nó.

Ở quy mô doanh nghiệp và chính phủ, sự phân biệt này quyết định liệu ban lãnh đạo có
phân biệt được một đội năng suất với một đội chỉ đang hoạt động hay không. Một khối
có thể đăng những con số đầu ra xuất sắc suốt nhiều năm, tính năng đã phát hành,
sprint đã đóng, trong khi kết quả mà nhà tài trợ hay cơ quan lập pháp thực sự quan
tâm, doanh thu giữ lại, thời gian chờ của công dân được rút ngắn, lặng lẽ xói mòn
bên dưới. "Chúng tôi đã giao lộ trình" không phải là cùng một khẳng định với "lộ
trình đã làm mọi thứ tốt hơn", và chỉ một bộ chỉ số nghiêng về kết quả mới phân biệt
được hai điều ấy.

## Các nguyên tắc chính

- **Đầu vào và đầu ra là đại diện; kết quả là chính sự vật.** Hãy nghiêng bộ chỉ số
  của bạn về kết quả bất cứ khi nào bạn với tới được.
- **Dễ đo không phải là lý do để đo một thứ.** Những thứ dễ đếm nhất thường là đầu
  vào và đầu ra, không phải vì chúng quan trọng nhất mà vì chúng đơn giản về mặt cơ
  học để ghi nhận.
- **Việc quy trách nhiệm khó hơn khi bạn tiến về phía kết quả.** Hãy chấp nhận sự đánh
  đổi đó một cách có chủ đích thay vì rút lui về đầu ra vì kết quả khó quy hơn.
- **Một đội kiểm soát được đầu vào và đầu ra nhưng chỉ ảnh hưởng được kết quả.** Hãy
  thiết kế trách nhiệm giải trình cho phù hợp: bắt các đội chịu trách nhiệm về những
  gì họ thực sự kiểm soát được, và theo dõi kết quả như các tín hiệu chung, xuyên đội.
- **Một kết quả ngôi sao Bắc Đẩu duy nhất, cùng một bộ nhỏ các động lực, hơn một bức
  tường ô đầu ra.** Độ bao phủ nên đến từ cấu trúc, không phải từ số lượng bảng điều
  khiển thuần túy.

## Khuyến nghị

### Phân loại mọi chỉ số trước khi áp dụng

Với bất kỳ chỉ số ứng viên nào, hãy hỏi nó thuộc loại nào trong ba loại. "Số pull
request được gộp mỗi tuần" là đầu ra. "Phần trăm pull request được gộp đã gây ra sự
cố production trong vòng một tuần" gần với kết quả hơn, vì nó đo một hệ quả chứ không
phải khối lượng. Việc phân loại này mất ba mươi giây và nên là bắt buộc trước khi một
chỉ số được thêm vào bất kỳ bảng điều khiển cấp đội hay tổ chức nào, vì đó là cách
nhanh nhất để bắt một bảng điều khiển đang lặng lẽ đầy lên những đầu ra dễ đếm trong
khi tin rằng nó đo giá trị.

### Dựng một cây chỉ số dưới một kết quả duy nhất

Đừng theo dõi một danh sách phẳng. Hãy sắp xếp các chỉ số thành một **cây chỉ số
(metric tree)** (đôi khi gọi là cây KPI): một chỉ số kết quả ở trên cùng được chia
nhỏ thành các động lực nuôi nó theo quan hệ nhân quả hoặc toán học, xuống tới các
phép đo đầu ra và đầu vào vận hành mà từng đội thực sự sở hữu. Khi kết quả trên cùng
dịch chuyển, cây cho bạn biết động lực cấp thấp nào cần điều tra, biến "con số đang
giảm" thành "bước cụ thể này trong đường ống là nguyên nhân". Hãy gọi tên một **chỉ
số ngôi sao Bắc Đẩu (north-star)** duy nhất ở đỉnh bất cứ nơi nào lĩnh vực của bạn
hỗ trợ: thước đo nắm bắt tốt nhất giá trị đã phân phối, tần suất triển khai ghép với
tỷ lệ thay đổi thất bại cho một đội nền tảng, hoặc mức sử dụng chủ động hằng tuần
của một tính năng cốt lõi cho một đội sản phẩm.

### Ưu tiên kết quả trong rà soát, không chỉ trên bảng điều khiển

Một cây chỉ số chỉ tốt bằng cách nó được dùng trong thực tế. Trong các buổi rà soát
sprint, rà soát kinh doanh hằng quý và cập nhật lãnh đạo, hãy dẫn đầu bằng con số ở
cấp kết quả và dùng các chỉ số đầu ra, đầu vào bên dưới chỉ để giải thích sự dịch
chuyển, không phải để thay thế nó. Một đội báo cáo "chúng tôi đã đóng 40 phiếu trong
sprint này" mà không có bối cảnh kết quả nào chưa nói cho bạn biết gì về việc công
việc có quan trọng không; một đội báo cáo "lỗi lọt giảm 30% và đây là khoản đầu tư
kiểm thử đã thúc đẩy điều đó" đã nói cho bạn điều gì đó thật.

### Chấp nhận phản hồi chậm hơn cho chỉ số kết quả, và ghép chúng với các chỉ báo dẫn nhanh hơn

Chỉ số kết quả thường là chỉ báo trễ: chúng xác nhận một kết quả sau khi đủ thời gian
trôi qua để chắc chắn. Độ trễ đó là một chi phí thật, vì nó làm chậm việc học. Hãy
ghép mỗi chỉ số kết quả với ít nhất một **chỉ báo dẫn (leading indicator)**, một chỉ
số dịch chuyển sớm hơn và dự đoán kết quả, để một đội có thể lái trước khi con số
chậm, có thẩm quyền cuối cùng cũng đến. Tần suất triển khai là chỉ báo dẫn cho các
kết quả phân phối; một xu hướng lỗi lọt tăng là chỉ báo dẫn cho một kết quả độ tin
cậy sắp tới. Hãy dùng chỉ báo dẫn để hành động sớm và chỉ số kết quả trễ để xác nhận
rằng bạn đã đúng.

## Đánh đổi: ưu và nhược điểm

| Loại | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ số đầu vào | Hoàn toàn nằm trong tầm kiểm soát của đội, dễ đếm | Liên kết yếu nhất với giá trị thực; dễ bị lách bằng khối lượng |
| Chỉ số đầu ra | Dễ đếm, quyền sở hữu rõ ràng, phản hồi nhanh | Thưởng cho hoạt động hơn tác động; có thể tăng trong khi giá trị giảm |
| Chỉ số kết quả | Phản ánh trực tiếp điều quan trọng; khó bị lách rẻ | Chậm, nhiễu và khó quy cho một đội đơn lẻ |
| Cấu trúc cây chỉ số | Nối công việc hằng ngày với giá trị chiến lược; hỗ trợ chẩn đoán | Cần công việc phân tích thật để xây và duy trì đúng |

Mâu thuẫn trung tâm là **khả năng kiểm soát so với giá trị**. Đầu vào và đầu ra hoàn
toàn nằm trong tầm kiểm soát của đội, điều khiến việc bắt các đội chịu trách nhiệm về
chúng trở nên hấp dẫn; kết quả mang giá trị nhưng chỉ nằm một phần trong tầm ảnh
hưởng của bất kỳ đội đơn lẻ nào, vì một tính năng tốt vẫn có thể thất bại vì những lý
do hoàn toàn nằm ngoài kỹ thuật. Hãy giải quyết bằng cách bắt các đội chịu trách
nhiệm về đầu vào và đầu ra mà họ kiểm soát hoàn toàn, trong khi theo dõi kết quả như
các tín hiệu chung mà cả tổ chức cùng sở hữu, được nối qua một cây chỉ số tường minh
thay vì để lại như một khoảng trống không giải thích được giữa "chúng tôi đã làm việc"
và "nó có giúp ích không".

## Câu hỏi để thảo luận với đội của bạn

1. **Với mỗi chỉ số trên bảng điều khiển hiện tại, nó là đầu vào, đầu ra hay kết quả,
   và sự cân bằng giữa ba loại có kể một câu chuyện trung thực không?** Phần lớn
   bảng điều khiển, khi kiểm toán một cách trung thực, hóa ra gần như hoàn toàn là
   đầu vào và đầu ra, vì đó là thứ công cụ báo cáo theo mặc định. Hãy phân loại từng
   ô và đếm tỷ lệ; một bảng điều khiển hoàn toàn không có ô kết quả nào đang đo hoạt
   động và trình bày nó như hiệu suất.

2. **Chỉ số kết quả ngôi sao Bắc Đẩu duy nhất của chúng ta là gì, và chúng ta có thể
   lần nó xuống qua một cây chỉ số đến thứ mà từng đội thực sự sở hữu không?** Không
   có cấu trúc kết nối này, một con số trên cùng dịch chuyển không cho manh mối nào
   về nơi cần tìm, và các đội không thể thấy các chỉ số đầu ra hằng ngày của mình nối
   với điều quan trọng nào. Hãy mang theo chỉ số trên cùng hiện tại của bạn, nếu có,
   và thử dựng cây ngay tại chỗ.

3. **Ở đâu chúng ta bắt một đội chịu trách nhiệm về một kết quả mà họ chỉ ảnh hưởng
   được chứ không kiểm soát được?** Đây là nguồn phổ biến của sự bực bội và việc lách
   lặng lẽ, vì một đội bị phạt vì kết quả do các yếu tố ngoài tầm kiểm soát định hình
   có đủ khuyến khích để tự bảo vệ mình thay vì cải thiện hệ thống thật. Hãy xác định
   những sự không khớp này và hoặc điều chỉnh trách nhiệm giải trình hoặc thêm các
   đòn bẩy còn thiếu.

4. **Chúng ta có chỉ báo dẫn nào cho mỗi chỉ số kết quả trễ, và nó dự đoán chúng sớm
   bao nhiêu?** Một bộ chỉ số thuần trễ nghĩa là bạn chỉ biết mình sai sau khi đã quá
   muộn để đổi hướng với chi phí thấp. Hãy mang theo các chỉ số kết quả của bạn và
   kiểm tra xem có một chỉ báo dẫn thực sự cho từng cái không, hay bạn đang bay mù
   giữa các kỳ báo cáo.

5. **Bao nhiêu phần trong những gì chúng ta ăn mừng ở các buổi rà soát và hồi cứu là
   đầu ra ("chúng tôi đã phát hành X") so với kết quả ("X đã thay đổi Y theo hướng
   tốt hơn")?** Ngôn ngữ các đội dùng để ăn mừng công việc định hình điều họ tối ưu
   theo thời gian, thường hơn cả bảng điều khiển. Hãy lắng nghe các buổi rà soát của
   chính bạn trong một sprint và đếm tỷ lệ một cách trung thực.

6. **Nếu các chỉ số đầu ra hàng đầu của chúng ta tăng gấp đôi qua một đêm, các chỉ số
   kết quả có nhất thiết cải thiện không, hay chúng có thể tệ đi?** Thí nghiệm tư duy
   này phơi bày các chỉ số đầu ra đã tách rời, thậm chí đối lập chủ động, với những
   kết quả mà chúng được kỳ vọng phục vụ, chẳng hạn khối lượng tính năng làm tăng
   gánh nặng bảo trì nhanh hơn mức tăng sự chấp nhận.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Hãy chọn một kết quả, thường là đại diện cho việc khách hàng có tiếp
tục nhận được giá trị không, như tỷ lệ giữ chân hằng tuần hoặc kích hoạt, và coi nó
là ngôi sao Bắc Đẩu ngay từ ngày đầu. Hãy cưỡng lại lực kéo về các chỉ số phù phiếm
của đầu ra như tổng số tính năng tích lũy, thứ hấp dẫn để báo cáo cho nhà đầu tư
nhưng không nói gì về việc sản phẩm có thực sự hiệu quả với ai không.

**Doanh nghiệp nhỏ.** Các công cụ sẵn có của bạn, điểm bán hàng, bàn hỗ trợ, phân
tích, thường đã báo cáo một con số gần kết quả, tỷ lệ mua lặp lại, tỷ lệ mở lại
phiếu. Hãy dùng những cái đó thay vì xây đo đạc kết quả tùy chỉnh mà bạn không đủ
năng lực duy trì, và cưỡng lại cám dỗ quay về số đếm hoạt động thô chỉ vì đó là cách
xem mặc định.

**Doanh nghiệp lớn.** Kiểu thất bại chi phối là một danh mục các đội, mỗi đội tối ưu
chỉ số đầu ra cục bộ không cộng lại thành bất kỳ kết quả tổ chức nhất quán nào. Hãy
dựng cây chỉ số một cách có chủ đích, chuẩn hóa định nghĩa kết quả giữa các đơn vị
kinh doanh, và yêu cầu mọi sáng kiến lớn nêu giả thuyết kết quả của mình trước khi
được cấp vốn, không chỉ kế hoạch đầu ra.

**Chính phủ.** Các cơ quan giám sát và công chúng ngày càng hiểu rõ sự khác biệt giữa
"đã giao bản tuyên bố công việc" và "đã cải thiện kết quả", và một báo cáo chỉ có đầu
ra mời gọi đúng sự soi xét đó. Hãy định nghĩa thành công như một kết quả hướng đến
công dân (thời gian chờ, tỷ lệ lỗi, mức hài lòng) bất cứ nơi nào luật pháp và thực tế
cho phép, và nói rõ khi chỉ có chỉ số đầu ra và vì sao.

## Ví dụ

**Doanh nghiệp lớn.** Khối kỹ thuật của một công ty hậu cần báo cáo số "tính năng đã
phát hành mỗi quý" tăng đều suốt hai năm, trong khi điểm hài lòng khách hàng cốt lõi
của công ty lặng lẽ đi ngang. Một phó chủ tịch kỹ thuật mới dựng cây chỉ số gốc là tỷ
lệ giao hàng đúng hạn, kết quả kinh doanh thực sự, chia xuống qua thời gian lưu tại
trung tâm và tỷ lệ thành công chặng cuối rồi xuống các đầu ra kỹ thuật cấp đội. Chỉ
trong một chu kỳ báo cáo đã rõ rằng nhiều đội có đầu ra cao đang phát hành tính năng
ở những khu vực không có tác động đo được nào lên chỉ số ngôi sao Bắc Đẩu, và đầu tư
chuyển sang các động lực mà cây cho thấy thực sự quan trọng.

**Chính phủ.** Đội số của một dịch vụ y tế quốc gia đã báo cáo "các mô-đun đã giao so
với bản tuyên bố công việc" cho một chương trình hiện đại hóa hồ sơ bệnh nhân nhiều
năm. Một ủy ban giám sát hỏi một câu khác: bác sĩ lâm sàng có tốn ít thời gian hơn
cho việc nhập dữ liệu hành chính không. Đội bổ sung ngược một chỉ số kết quả, số phút
hành chính trung vị cho mỗi lần tiếp xúc bệnh nhân, và thấy rằng các mô-đun đầu tiên
thực ra đã làm tăng thời gian này do ma sát quy trình, dù đạt mọi cột mốc giao hàng.
Các mô-đun sau được thiết kế lại trực tiếp quanh chỉ số kết quả, và báo cáo công khai
của chương trình chuyển từ một danh sách kiểm tra giao hàng sang một so sánh kết quả
trước và sau.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc ưu tiên kết quả là tránh được lãng phí: một tổ chức thấy được, gần
như theo thời gian thực, rằng một dòng đầu ra không làm dịch chuyển kết quả nào có
thể chuyển hướng khoản đầu tư đó trước khi tiêu hết một chu kỳ ngân sách để tìm ra
theo cách khó. Chi phí ẩn chi phối ở các tổ chức kỹ thuật lớn không phải là đầu tư
thiếu, mà là công việc thực hiện tốt nhưng lẽ ra không bao giờ nên được cấp vốn vì nó
tách rời khỏi mọi kết quả thật, và một bảng điều khiển chỉ có đầu ra hoàn toàn không
thấy được sự tách rời đó.

Tổng chi phí sở hữu của đo lường kết quả cao hơn đo lường đầu ra, vì kết quả thực sự
khó định nghĩa, quy trách nhiệm và đo đạc hơn, và xây một cây chỉ số thật cần công sức
phân tích có chủ đích thay vì chấp nhận bất cứ gì công cụ xuất ra theo mặc định. Chi
phí đó đáng bỏ ra cho bất kỳ sáng kiến nào trên một quy mô khiêm tốn, vì phương án
thay thế, phát hiện sau sự việc rằng một năm đầu ra được báo cáo đầy tự tin đã không
tạo ra giá trị thật nào, tốn kém hơn nhiều so với phân tích ban đầu.

## Phản mẫu và cạm bẫy

- **Một bảng điều khiển toàn ô đầu ra:** đo hoạt động và trình bày nó như hiệu suất.
- **Bắt một đội chịu trách nhiệm hoàn toàn về một kết quả họ không kiểm soát được:**
  sinh ra bực bội và mời gọi việc lách để tự bảo vệ khỏi sự đổ lỗi bất công.
- **Không có chỉ báo dẫn cho một kết quả trễ:** đội chỉ biết mình sai khi đã quá đắt
  để sửa.
- **Ăn mừng bằng ngôn ngữ đầu ra trong rà soát trong khi tuyên bố coi trọng kết quả:**
  ưu tiên được tuyên bố và khuyến khích thực tế tách rời, và khuyến khích thực tế
  thắng.
- **Một danh sách phẳng các chỉ số không có cấu trúc cây:** một con số trên cùng dịch
  chuyển không cho manh mối nào về nơi cần tìm.
- **Coi đo lường kết quả là quá khó để thử:** mặc định đẩy tổ chức vĩnh viễn trở lại
  đầu vào và đầu ra dễ đếm.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số gần như hoàn toàn là đầu vào và đầu ra; không ai gọi
  được tên các chỉ số kết quả của tổ chức hay lần được một đường nối đến chúng.
- **Mức 2, Phát triển:** Một số đội đã xác định chỉ số kết quả một cách không chính
  thức, nhưng không có cây chỉ số chung và không có chỉ báo dẫn nhất quán.
- **Mức 3, Chuẩn hóa:** Một cây chỉ số được ghi lại nối một kết quả ngôi sao Bắc Đẩu
  chung xuống các đầu ra do đội sở hữu, được áp dụng nhất quán khắp tổ chức.
- **Mức 4, Quản lý:** Cả chỉ báo dẫn và trễ đều được theo dõi và rà soát cùng nhau; các
  đội chỉ chịu trách nhiệm về những gì họ kiểm soát, và đo lường kết quả được cấp
  nguồn lực chủ động.
- **Mức 5, Điều phối:** Đo lường kết quả được tích hợp trực tiếp vào các quyết định cấp
  vốn và ưu tiên; tổ chức thường xuyên chuyển hướng đầu tư khỏi công việc đầu ra cao,
  kết quả thấp trước khi trọn một chu kỳ ngân sách trôi qua.

## Ý tưởng để thảo luận

1. Hãy gọi tên chỉ số kết quả quan trọng nhất của tổ chức chúng ta. Mọi người có đồng ý về nó không?
2. Khoản đầu tư lớn nhất hiện tại của chúng ta vào đầu ra mà chúng ta chưa lần được đến bất kỳ kết quả nào là gì?
3. Ở đâu cấu trúc trách nhiệm giải trình của chúng ta phạt một đội vì một kết quả họ không kiểm soát được?
4. Bảng điều khiển của chúng ta sẽ trông ra sao nếu xóa mọi ô thuần đầu ra?
5. Hiện chúng ta mất bao lâu để biết một tính năng đã phát hành có thực sự giúp ích không?

## Điểm chính cần nhớ

- Phân loại mọi chỉ số là **đầu vào, đầu ra hay kết quả**, và nghiêng bộ chỉ số của bạn
  một cách có chủ đích về kết quả.
- Dựng một **cây chỉ số** dưới một **chỉ số ngôi sao Bắc Đẩu** duy nhất để một con số
  trên cùng dịch chuyển chỉ ra một nguyên nhân.
- Bắt các đội chịu trách nhiệm về những gì họ **kiểm soát** (đầu vào, đầu ra); theo dõi
  kết quả như các tín hiệu chung mà cả tổ chức cùng ảnh hưởng.
- Ghép mỗi **chỉ số kết quả** trễ với một **chỉ báo dẫn** nhanh hơn để bạn có thể lái
  trước khi con số chậm xác nhận rằng bạn đã sai.
- Một bảng điều khiển chỉ có đầu ra đo hoạt động và gọi nó là hiệu suất; hãy coi đó
  là dấu hiệu cảnh báo, không phải sự an ủi.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez
  Humble và Gene Kim (đo lường phân phối dựa trên kết quả).
- *Lean Analytics*, của Alistair Croll và Benjamin Yoskovitz (One Metric That Matters
  và sự phân biệt đầu vào/đầu ra/kết quả trong bối cảnh khởi nghiệp).
- *Measure What Matters*, của John Doerr (đặt mục tiêu hướng kết quả và sự nhấn mạnh
  của khung OKR vào kết quả hơn hoạt động).
- *The Lean Startup*, của Eric Ries (chỉ số hành động được so với phù phiếm, và kiểm
  chứng kết quả).
- *Key Performance Indicators*, của David Parmenter (xây cấu trúc KPI hay cây chỉ số
  dưới một thước đo ngôi sao Bắc Đẩu).
