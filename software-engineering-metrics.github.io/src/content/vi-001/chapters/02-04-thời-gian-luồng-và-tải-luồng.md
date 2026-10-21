# 2.4 Thời gian luồng và tải luồng

## Tổng quan và động lực

**Thời gian luồng (flow time)** là tổng thời gian trôi qua từ lúc một mục luồng (chủ đề
2.2) vào chuỗi giá trị đến lúc nó được giao, đo khả năng đáp ứng trên toàn bộ con đường từ
lúc một nhu cầu kinh doanh được xác định đến lúc một khách hàng nhận được giá trị. **Tải
luồng (flow load)** là tổng số mục luồng đang hoạt động hoặc đang chờ trong chuỗi giá trị ở
bất kỳ thời điểm nào, tên gọi của Flow Framework cho thứ mà chủ đề 2.5 gọi là công việc đang
thực hiện. Cùng nhau, đây là hai chỉ số của Flow Framework nối trực tiếp nhất với toán học của
hàng đợi, vì tải luồng không chỉ tương quan với thời gian luồng, nó quyết định thời gian luồng
về mặt toán học.

Mối quan hệ đó là **[định luật Little](https://en.wikipedia.org/wiki/Little%27s_law)**, một
chứng minh từ lý thuyết hàng đợi (chủ đề 2.7 bao quát đầy đủ) phát biểu rằng số mục trung bình
trong một hệ thống ổn định bằng tốc độ đến trung bình nhân với thời gian trung bình mỗi mục ở
trong hệ thống. Áp dụng ở đây: tải luồng bằng tốc độ đến nhân với thời gian luồng. Đây là sự
thật hữu ích nhất của chủ đề này, vì nó biến một lập luận trước đây định tính, "chúng ta quá
tải, mọi thứ mất quá lâu", thành một lập luận định lượng, chứng minh được mà một nhà lãnh đạo
kinh doanh khó có thể gạt đi: nếu tải luồng cứ tăng trong khi tốc độ đến đi ngang, thời gian
luồng chắc chắn sẽ tăng theo về mặt toán học, không chỉ có khả năng.

Với các đội lớn, đây thường là con số thuyết phục nhất trong toàn bộ khung. Một nhà lãnh đạo
kinh doanh chống lại ý tưởng nói không với công việc mới, vì mỗi yêu cầu riêng lẻ đều có vẻ
chính đáng, thường sẽ chấp nhận rằng quá tải một chuỗi giá trị chứng minh được làm chậm mọi
mục đã có trong đó, một khi tải luồng được theo dõi và mối quan hệ với thời gian luồng được
cho thấy trực tiếp thay vì tranh luận trừu tượng. Các tổ chức doanh nghiệp xoay xở nhiều sáng
kiến chiến lược đồng thời và các chương trình chính phủ vận hành hàng chục dòng công việc song
song đều dựa vào chứng minh này, không chỉ trực giác đằng sau, để biện minh việc nói không với
việc bắt đầu thêm nhiều công việc cùng lúc.

## Các nguyên tắc chính

- **Tải luồng quyết định thời gian luồng về mặt toán học, qua định luật Little.** Đây không
  phải tương quan; đó là một chứng minh đúng với mọi chuỗi giá trị ổn định.
- **Thời gian luồng trải khắp chuỗi giá trị, không chỉ kỹ thuật.** Nó bắt đầu khi một nhu cầu
  kinh doanh được xác định, không phải khi kỹ thuật nhận việc, điều mà thời gian chu kỳ của chủ
  đề 2.6 sau đó phân rã thêm.
- **Tải luồng tăng là dấu hiệu cảnh báo sớm nhất của thời gian luồng tăng.** Vì mối quan hệ
  chứng minh được, tải luồng có thể được theo dõi như một chỉ báo dẫn, không chỉ được phát hiện
  sau khi thời gian luồng đã suy giảm.
- **Điểm vào của chuỗi giá trị phải được cố định và ghi lại.** Nơi đồng hồ thời gian luồng bắt
  đầu là một lựa chọn định nghĩa chịu cùng rủi ro bị lách như mọi ranh giới chỉ số khác trong
  cuốn sách này.
- **Một nhà lãnh đạo kinh doanh có thể hành động trực tiếp trên tải luồng.** Không như thời
  gian luồng, một phép đo trễ, tải luồng là một đòn bẩy: nói không với việc bắt đầu công việc
  mới là một hành động có thể làm ngay hôm nay.

## Khuyến nghị

### Cố định và ghi lại điểm vào của chuỗi giá trị trước khi đo thời gian luồng

Hãy quyết định tường minh liệu thời gian luồng bắt đầu khi một nhu cầu kinh doanh lần đầu được
xác định, khi nó được phê duyệt chính thức, hay khi kỹ thuật bắt đầu làm việc, và ghi lại lựa
chọn đó theo cách chủ đề 1.4 khuyến nghị cho mọi hiến chương chỉ số. Quyết định đơn lẻ này
xác định liệu thời gian luồng đo khả năng đáp ứng đầu-cuối thực sự hay chỉ phần hẹp hơn của nó
mà kỹ thuật kiểm soát, và đổi định nghĩa sau đó mà không công bố là rủi ro bị lách trung tâm
của chủ đề này.

### Theo dõi tải luồng liên tục, không định kỳ

Vì tải luồng, qua định luật Little, là chỉ báo dẫn của thời gian luồng sắp tới, hãy theo dõi nó
như một con số sống, cập nhật liên tục thay vì ảnh chụp định kỳ. Một tải luồng đã leo lên nhiều
tuần khi có người kiểm tra thì đã lặng lẽ kéo dài thời gian luồng suốt chừng ấy thời gian, vô
hình, trước khi chỉ số bắt kịp.

### Dùng định luật Little một cách tường minh khi lập luận cho giới hạn WIP hay tăng năng lực

Khi trình bày lý do bắt đầu ít công việc đồng thời hơn, hoặc thêm năng lực, hãy trình bày chính
phương trình, không chỉ khuyến nghị: tải luồng bằng tốc độ đến nhân thời gian luồng, nên nếu
tốc độ đến gần như cố định, giảm tải luồng chắc chắn làm giảm thời gian luồng về mặt toán học.
Đây là một lập luận mạnh hơn đáng kể với một bên liên quan hoài nghi so với khẳng định không
định lượng rằng "chúng ta quá bận", vì nó chứng minh được thay vì chỉ khẳng định.

### Tách thời gian luồng khỏi các nguyên nhân nền tảng của tải luồng trước khi đề xuất cách sửa

Khi tải luồng cao, hãy điều tra loại mục luồng nào (chủ đề 2.2) thực sự đang thúc đẩy nó: quá
nhiều tính năng bắt đầu cùng lúc, một backlog lỗi chưa xử lý, hay công việc rủi ro kẹt chờ một
sự phê duyệt dùng chung. Mỗi nguyên nhân ngụ ý một cách sửa khác nhau, và coi "tải luồng cao"
là một vấn đề đơn lẻ, không phân biệt có xu hướng tạo ra một phản ứng chung chung, kém hiệu
quả.

### Đối chiếu thời gian luồng với thời gian chu kỳ để cô lập nơi trễ thực sự xảy ra

Vì thời gian luồng trải khắp chuỗi giá trị và thời gian chu kỳ (chủ đề 2.6) chỉ bao quát phần
kỹ thuật của nó, hãy so sánh trực tiếp hai thứ. Một khoảng cách lớn giữa thời gian luồng và
thời gian chu kỳ nghĩa là phần lớn độ trễ xảy ra trước khi kỹ thuật nhìn thấy công việc, trong
các hàng đợi phê duyệt, backlog ưu tiên hóa, hay bàn giao giữa các đội, điều chỉ về một cách
sửa rất khác với một khoảng cách tập trung bên trong chính kỹ thuật.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Đo thời gian luồng chỉ từ lúc kỹ thuật nhận việc | Đơn giản, khớp với đo đạc thời gian chu kỳ sẵn có | Bỏ sót độ trễ trước kỹ thuật, đánh giá thấp khả năng đáp ứng thực |
| Đo thời gian luồng từ lúc nhu cầu kinh doanh thực sự được xác định | Nắm bắt khả năng đáp ứng đầu-cuối thực | Cần đo đạc các giai đoạn ngoài tầm kiểm soát trực tiếp của kỹ thuật |
| Ảnh chụp tải luồng định kỳ | Rẻ để tính thỉnh thoảng | Mất giá trị chỉ báo dẫn; tải tăng không được chú ý quá lâu |
| Theo dõi tải luồng liên tục | Chỉ báo dẫn sống, hành động được | Cần tích hợp công cụ liên tục, không chỉ một báo cáo thỉnh thoảng |

Mâu thuẫn trung tâm là **phạm vi so với tầm với của đo đạc**. Đo thời gian luồng chỉ từ lúc kỹ
thuật nhận việc dễ đo hơn nhiều, vì nó dùng lại dữ liệu thời gian chu kỳ mà chủ đề 2.6 đã thu
thập, nhưng nó lặng lẽ đánh giá thấp khả năng đáp ứng thực bằng cách bỏ qua mọi thứ xảy ra trước
khi kỹ thuật thấy công việc. Hãy giải quyết bằng cách bắt đầu với phép đo hẹp hơn, giới hạn trong
kỹ thuật nếu đó là tất cả bạn đo được hôm nay, nhưng coi việc kéo điểm bắt đầu của thời gian luồng
ngược lên thượng nguồn, vào khâu xác định nhu cầu kinh doanh và ưu tiên hóa, là ưu tiên gần chứ
không phải giới hạn vĩnh viễn.

## Câu hỏi để thảo luận với đội của bạn

1. **Hôm nay đồng hồ thời gian luồng của chúng ta thực sự bắt đầu ở đâu, và mọi người trong tổ
   chức có đồng ý đó là điểm bắt đầu đúng không?** Sự không khớp giữa nơi các bên liên quan cho
   là đồng hồ bắt đầu và nơi nó thực sự bắt đầu là nguồn mất niềm tin thường gặp, âm thầm với chỉ
   số. Hãy xác nhận định nghĩa được ghi lại khớp với hiểu biết chung.

2. **Chúng ta đã bao giờ kiểm tra liệu tải luồng, tốc độ đến và thời gian luồng đo được của
   mình có thực sự thỏa định luật Little chưa?** Nếu chúng không xấp xỉ cân bằng, một trong ba con
   số đang được đo không nhất quán. Hãy cùng đi qua các con số thật thay vì cho rằng phép kiểm
   tra sẽ đạt.

3. **Tải luồng có được theo dõi liên tục không, hay một sự tăng đều sẽ không được chú ý trong
   nhiều tuần trước khi ai đó kiểm tra?** Một chỉ báo dẫn chỉ bảo vệ bạn nếu có người thực sự
   theo dõi nó gần thời gian thực, không chỉ xem lại trong một báo cáo hằng quý.

4. **Khi tải luồng tăng, chúng ta có nói được loại mục luồng nào thực sự thúc đẩy nó, hay nó đọc
   như một con số không phân biệt?** Một chẩn đoán chung chung "chúng ta quá tải" tạo ra một phản
   ứng chung chung, thường kém hiệu quả. Hãy kiểm tra xem việc đo đạc hiện tại của bạn có thực sự
   quy được tải tăng cho một nguyên nhân cụ thể không.

5. **Khoảng cách giữa thời gian luồng và thời gian chu kỳ của chúng ta lớn đến đâu, và khoảng
   cách đó gợi ý phần lớn độ trễ xảy ra trước hay sau khi kỹ thuật thấy công việc?** Phép so sánh
   này thường cho thấy cơ hội cải thiện lớn nhất nằm hoàn toàn ngoài tầm kiểm soát của chính kỹ
   thuật.

6. **Có ai đã bao giờ lặng lẽ thu hẹp điểm bắt đầu thời gian luồng của chúng ta để con số trông
   đẹp hơn, mà thay đổi đó không được ghi lại hay công bố không?** Đây là rủi ro bị lách trung
   tâm của chủ đề, nêu thẳng. Hãy hỏi trung thực xem định nghĩa của bạn đã bao giờ trôi theo cách
   này chưa.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Tải luồng thường thấp đơn giản vì không đủ người để bắt đầu nhiều công việc cùng
lúc, nhưng cùng mối quan hệ toán học vẫn áp dụng ngay khi một nhà sáng lập hay kỹ sư trưởng trở
thành nút thắt cá nhân cho nhiều sáng kiến đồng thời. Hãy theo dõi tải luồng không chính thức
ngay cả khi không có công cụ chuyên dụng, vì định luật Little đúng bất kể quy mô.

**Doanh nghiệp nhỏ.** Một danh sách chung, đơn giản về mọi thứ đang hoạt động thường đủ để tính
tải luồng mà không cần phần mềm quản lý chuỗi giá trị chuyên dụng. Thói quen hữu ích là kiểm
tra nó đủ đều để một con số tăng được bắt sớm, không chỉ phát hiện khi thời gian luồng đã suy
giảm rõ rệt.

**Doanh nghiệp lớn.** Đây là nơi định luật Little xứng đáng như một lập luận, không chỉ một chỉ
số: một tổ chức lớn xoay xở hàng chục sáng kiến chiến lược đồng thời có thể dùng mối quan hệ
chứng minh được giữa tải luồng và thời gian luồng để đưa ra lập luận dựa trên bằng chứng cho việc
sắp xếp thứ tự công việc, điều mà một lập luận thuần định tính "chúng ta quá bận" hiếm khi đạt
được trước áp lực kiên quyết của các bên liên quan.

**Chính phủ.** Các chương trình nhiều năm thường xuyên tích tụ tải luồng lớn, ngầm định qua nhiều
dòng công việc, mỗi dòng được biện minh riêng lẻ, mà không có tầm nhìn toàn tổ chức về tổng.
Trình bày trực tiếp định luật Little, cho thấy sự tăng thời gian luồng của chính chương trình
được giải thích về mặt toán học bởi sự tăng tải luồng của chính nó, thường là bằng chứng rõ ràng
và thuyết phục nhất hiện có để sắp xếp thứ tự các dòng công việc thay vì chạy mọi thứ song song
vô thời hạn.

## Ví dụ

**Doanh nghiệp lớn.** Tổ chức nền tảng của một công ty công nghệ truyền thông đang chạy hai mươi
hai sáng kiến chiến lược đồng thời với năng lực thực tế chỉ khoảng mười hai, một sự không khớp
mà không ai định lượng cho đến khi một phó chủ tịch kỹ thuật mới yêu cầu số liệu tải luồng trực
tiếp. Thời gian luồng của sáng kiến trung vị đã tăng 40% trong năm trước, một xu hướng mà ban
lãnh đạo gán cho "công việc ngày càng khó". Việc trình bày định luật Little cùng các con số tải
luồng và tốc độ đến thực tế cho thấy sự tăng này hoàn toàn được giải thích chỉ bởi tải luồng tăng,
không cần thay đổi độ khó nền tảng của công việc để giải thích. Tổ chức sắp xếp thứ tự các sáng
kiến xuống mức tải luồng bền vững, và thời gian luồng trung vị giảm gần một phần ba trong vòng
hai quý.

**Chính phủ.** Chương trình hiện đại hóa của một cơ quan quản lý trợ cấp liên bang đã tích tụ tải
luồng qua hàng chục dòng công việc song song mà không có tổng nào được theo dõi, mỗi nhà tài trợ
dòng công việc tin rằng sáng kiến của mình được cấp nguồn lực phù hợp khi xét riêng. Một phân
tích của văn phòng chương trình dùng định luật Little cho thấy tổng thời gian luồng của chương
trình, thời gian từ khi một dòng công việc được phê duyệt đến khi giao, có thể dự đoán gần như
chính xác chỉ từ tổng tải luồng của nó, một phát hiện thuyết phục những nhà tài trợ đã chống lại
các lập luận hạ ưu tiên hơn một năm. Chương trình áp dụng một trần tải luồng tường minh, và các
dòng công việc mới nay vào một hàng đợi thay vì bắt đầu ngay bất kể tải hiện tại.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc theo dõi tải luồng và thời gian luồng cùng nhau là một lập luận chứng minh được,
không chỉ thuyết phục, cho việc sắp xếp thứ tự công việc thay vì chạy mọi thứ song song. Ví dụ
công ty công nghệ truyền thông ở trên, giải thích toàn bộ sự suy giảm thời gian luồng chỉ bằng
tải luồng, là kiểu mẫu mà sự kết hợp này tạo ra một cách đáng tin: một lập luận cụ thể, định
lượng thành công ở nơi một lời kêu gọi định tính về việc "quá bận" trước đây đã thất bại trước
áp lực tổ chức thật phải bắt đầu thêm công việc.

Tổng chi phí sở hữu thấp so với sức thuyết phục của nó: tải luồng chỉ cần một số đếm sống các mục
đang hoạt động và đang chờ, và thời gian luồng cần đo đạc điểm vào của chuỗi giá trị, công việc
tự hoàn vốn ngay lần đầu tiên nó ngăn một tổ chức cam kết nhiều sáng kiến đồng thời hơn mức năng
lực thực của họ có thể hỗ trợ.

## Phản mẫu và cạm bẫy

- **Lặng lẽ thu hẹp điểm bắt đầu thời gian luồng để làm đẹp con số:** véc-tơ bị lách ở trung tâm
  của chủ đề này. Dời điểm bắt đầu của đồng hồ từ lúc nhu cầu kinh doanh thực sự được xác định
  sang một điểm muộn hơn, lúc kỹ thuật nhận việc, lúc phê duyệt chính thức, làm co thời gian luồng
  mà không đổi khả năng đáp ứng thực chút nào, và có thể xảy ra từ từ đến mức không thay đổi đơn
  lẻ nào trông như thao túng có chủ ý. Rào chắn là ghi lại tường minh điểm vào trong một hiến
  chương chỉ số (chủ đề 1.4) và định kỳ kiểm toán nó so với định nghĩa đã ghi, cùng kỷ luật mà
  cuốn sách này đòi hỏi ở mọi ranh giới chỉ số.
- **Chỉ đo tải luồng định kỳ:** mất giá trị là chỉ báo dẫn, vì một sự tăng đều có thể không được
  chú ý nhiều tuần.
- **Coi tải luồng là một con số đơn lẻ, không phân biệt:** bỏ sót loại mục luồng nào thực sự
  thúc đẩy sự quá tải, tạo ra phản ứng chung chung thay vì có mục tiêu.
- **Bỏ qua khoảng cách giữa thời gian luồng và thời gian chu kỳ:** bỏ sót việc độ trễ tập trung
  trước hay sau kỹ thuật, điều ngụ ý các cách sửa rất khác nhau.
- **Lập luận giảm công việc đồng thời mà không trình bày định luật Little một cách tường minh:**
  một lời kêu gọi định tính dễ bị bên liên quan gạt đi hơn nhiều so với một mối quan hệ định
  lượng, chứng minh được.
- **Cho rằng định luật Little chỉ áp dụng ở quy mô lớn:** nó đúng với mọi hệ thống ổn định bất kể
  kích thước, kể cả một cá nhân quá tải.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Cả thời gian luồng lẫn tải luồng đều không được theo dõi; độ trễ được bàn
  mang tính giai thoại, không có dữ liệu hỗ trợ.
- **Mức 2, Phát triển:** Thời gian luồng được theo dõi chỉ từ lúc kỹ thuật nhận việc, và tải luồng
  được kiểm tra định kỳ thay vì liên tục.
- **Mức 3, Chuẩn hóa:** Thời gian luồng được đo từ một điểm vào chuỗi giá trị được ghi lại, thống
  nhất toàn tổ chức, và tải luồng được theo dõi liên tục như một chỉ báo dẫn.
- **Mức 4, Quản lý:** Định luật Little được dùng tường minh để biện minh các quyết định về năng lực
  và sắp xếp thứ tự, và tải luồng tăng được quy cho một loại mục luồng cụ thể trước khi đề xuất
  cách sửa.
- **Mức 5, Điều phối:** Tổ chức đặt trần tải luồng tường minh qua các chuỗi giá trị, và có thể chỉ
  ra các quyết định sắp xếp thứ tự cụ thể, được định luật Little hậu thuẫn, đã cải thiện đo được
  thời gian luồng.

## Ý tưởng để thảo luận

1. Đồng hồ thời gian luồng của chúng ta thực sự bắt đầu ở đâu, và định nghĩa đó đã bao giờ trôi mà không được ghi lại chưa?
2. Tải luồng, tốc độ đến và thời gian luồng đo được của chúng ta có xấp xỉ thỏa định luật Little không?
3. Tải luồng có được theo dõi đủ liên tục để một sự tăng đều được bắt trong vài ngày, không phải vài tháng không?
4. Khoảng cách giữa thời gian luồng và thời gian chu kỳ của chúng ta là bao nhiêu, và nó cho biết gì về nơi độ trễ thực sự xảy ra?

## Điểm chính cần nhớ

- **Tải luồng quyết định thời gian luồng về mặt toán học**, qua định luật Little: tải luồng bằng
  tốc độ đến nhân thời gian luồng, với mọi chuỗi giá trị ổn định.
- **Thời gian luồng trải khắp chuỗi giá trị**, từ lúc xác định nhu cầu kinh doanh đến lúc giao,
  rộng hơn phạm vi chỉ-kỹ-thuật của thời gian chu kỳ (chủ đề 2.6).
- Véc-tơ bị lách trung tâm của chủ đề là **lặng lẽ thu hẹp điểm bắt đầu thời gian luồng**; rào
  chắn là một định nghĩa điểm vào được ghi lại và kiểm toán.
- **Theo dõi tải luồng liên tục**, không định kỳ, để nó hoạt động như một chỉ báo dẫn thực sự
  thay vì một phát hiện trễ.
- Hãy dùng định luật Little **một cách tường minh**, không chỉ như trực giác, khi lập luận cho
  một giới hạn WIP, tăng năng lực, hoặc sắp xếp thứ tự công việc đồng thời.

## Tài liệu tham khảo và đọc thêm

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital
  Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean
  Product Development*. Celeritas Publishing, 2009.
