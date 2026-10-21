# 5.2 Chỉ số áp dụng và sử dụng tính năng

## Tổng quan và động lực

**Mức áp dụng tính năng (feature adoption)** đo xem những người mà một tính năng được xây cho có thực sự dùng nó không, với tỷ lệ nào,
và liệu việc dùng đó có bền theo thời gian không. Theo nghĩa rất trực tiếp, đó là phép kiểm tra thực tế đối với mọi thứ các Phần 2 đến
4 của cuốn sách này đo: một tổ chức có thể triển khai thường xuyên, duy trì trải nghiệm lập trình viên xuất sắc và giao mã được kiểm
thử hoàn hảo, mà vẫn đang xây những thứ không ai muốn. Dữ liệu áp dụng là nơi một tổ chức kỹ thuật biết được đầu ra của mình có nối với
bất kỳ kết quả thật nào hay không, đúng sự phân biệt đầu vào-đầu ra-kết quả mà chủ đề 1.3 giới thiệu, áp dụng vào trường hợp cụ thể
nhất của cuốn sách này: một tính năng cụ thể đã được giao.

Mối quan tâm trung tâm của chủ đề này là dữ liệu áp dụng, hơn hầu hết mọi họ chỉ số khác trong cuốn sách này, dễ được đo theo cách tâng
bốc hơn là cung cấp thông tin. Một tính năng có thể cho thấy mức áp dụng ban đầu ấn tượng thuần túy do tò mò hoặc bị buộc tiếp xúc (một
hộp thoại hiện ra dù người dùng có muốn hay không) trong khi việc đem lại giá trị thật, bền vững, đo bằng việc mọi người có tiếp tục dùng
khi sự mới lạ phai đi hay không, kể một câu chuyện hoàn toàn khác. Phân biệt mức áp dụng thật với một đợt tăng đột biến tạm thời là
thách thức kỹ thuật cốt lõi của chủ đề này, và làm sai thường dẫn các tổ chức đến ăn mừng những tính năng lặng lẽ thất bại và bỏ những
tính năng vừa mới bắt đầu tìm được khán giả.

Với các đội lớn, dữ liệu áp dụng tính năng là thứ khiến việc ưu tiên lộ trình dựa trên bằng chứng thay vì bị dẫn dắt bởi ai bênh vực công
việc của đội mình thuyết phục nhất. Các tổ chức doanh nghiệp quản lý danh mục sản phẩm lớn cần dữ liệu áp dụng để xác định khoản đầu tư
nào đang xứng đáng; các tổ chức chính phủ xây dịch vụ số hướng công dân cần nó để chứng minh đầu tư công tạo ra các dịch vụ mà mọi
người thực sự dùng, không chỉ những dịch vụ tồn tại về mặt kỹ thuật.

## Các nguyên tắc chính

- **Mức áp dụng ban đầu và mức áp dụng bền vững là những tín hiệu khác nhau.** Một đợt tăng đột biến do tò mò hay bị buộc tiếp xúc
  không giống với giá trị thật, lâu dài.
- **Mức áp dụng nên được đo so với đối tượng mà tính năng được xây cho**, không so với toàn bộ cơ sở người dùng một cách bừa bãi.
- **Một tính năng có mức áp dụng thấp không tự động là thất bại.** Nó có thể khó được khám phá, nhắm sai đối tượng, hay đơn giản là còn
  mới; hãy điều tra trước khi kết luận.
- **Việc giữ chân sử dụng quan trọng hơn một ảnh chụp áp dụng đơn lẻ.** Hãy theo dõi xem những người đã thử một tính năng có tiếp tục
  quay lại với nó không.
- **Dữ liệu áp dụng dễ bị lách qua việc buộc tiếp xúc hay mẫu thiết kế đen tối.** Một con số bị thổi phồng bằng cách làm cho tính năng
  khó né tránh không phải một tín hiệu thật.

## Khuyến nghị

### Phân biệt lần thử đầu với việc giữ chân bền vững

Hãy theo dõi hai con số riêng: tỷ lệ phần trăm đối tượng mục tiêu của bạn thử tính năng ít nhất một lần (mức áp dụng ban đầu), và tỷ lệ
phần trăm vẫn dùng nó sau một khoảng thời gian có ý nghĩa, chẳng hạn bốn hoặc tám tuần (mức áp dụng được giữ chân). Một tính năng có
lần thử đầu cao và giữ chân thấp gợi ý khả năng khám phá hoạt động tốt nhưng bản thân tính năng không đem lại đủ giá trị để giữ mọi
người quay lại, một chẩn đoán rất khác, và một cách sửa rất khác, so với lần thử đầu thấp mà giữ chân cao, vốn gợi ý một tính năng thực
sự giá trị mà chưa đủ người biết đến.

### Xác định chính xác đối tượng mục tiêu trước khi đo mức áp dụng

Mức áp dụng đo so với toàn bộ cơ sở người dùng của bạn có thể gây hiểu lầm nếu một tính năng chỉ từng nhằm một phân khúc cụ thể: một
tính năng cho quản trị viên doanh nghiệp đo so với một cơ sở chủ yếu là người dùng cá nhân sẽ luôn trông như có mức áp dụng tệ hại, bất
kể nó phục vụ tốt đến đâu những người nó được xây cho. Hãy xác định tường minh đối tượng dự kiến trước khi ra mắt, và đo mức áp dụng so
với mẫu số cụ thể đó, không phải tổng số người dùng của bạn.

### Điều tra mức áp dụng thấp trước khi kết luận một tính năng đã thất bại

Một con số áp dụng thấp có nhiều nguyên nhân khả dĩ đòi hỏi các phản ứng rất khác nhau: tính năng thực sự không có giá trị, tính năng có
giá trị nhưng khó khám phá (người dùng không biết nó tồn tại), tính năng có giá trị nhưng giải thích kém (người dùng thấy nó nhưng không
hiểu mục đích), hoặc cửa sổ đo đơn giản là quá ngắn để một tính năng áp dụng chậm hơn kịp tìm được khán giả. Hãy điều tra xem điều nào
áp dụng trước khi quyết định đầu tư thêm, thiết kế lại hay ngừng hỗ trợ.

### Để ý mức áp dụng bị thổi phồng bởi việc buộc tiếp xúc hay [mẫu thiết kế đen tối](https://en.wikipedia.org/wiki/Dark_pattern)

Một con số áp dụng được thúc đẩy bởi việc tính năng khó né tránh, một luồng làm quen xâm lấn, một hộp thoại người dùng buộc phải đóng,
một mặc định khó đổi, không đo việc đem lại giá trị thật, và ăn mừng nó như thể đúng vậy là lặp lại mẫu hình lách bằng thay thế của
chủ đề 1.2 dưới dạng sản phẩm. Hãy ghép các con số áp dụng thô với một tín hiệu hài lòng hay kiểu Net Promoter cho riêng tính năng đó
khi khả thi, để việc buộc tiếp xúc không chuyển thành sự hài lòng thật bị bắt được thay vì được ăn mừng.

### Nối xu hướng áp dụng trở lại các quyết định sản phẩm và kỹ thuật cụ thể

Khi mức áp dụng tăng hay giảm bất ngờ, hãy truy sự thay đổi về một quyết định cụ thể, một thay đổi giao diện, một thay đổi cài đặt mặc
định, một đợt đẩy tiếp thị, một cải thiện hay suy giảm hiệu năng, thay vì coi biến động đó là một điều bí ẩn không giải thích được.
Điều này nối dữ liệu áp dụng với việc học hỏi sản phẩm và kỹ thuật hành động được, khép vòng giữa một thay đổi cụ thể và tác động đo được
của nó lên việc sử dụng thực.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Đo so với tổng cơ sở người dùng | Đơn giản, một mẫu số duy nhất | Gây hiểu lầm cho các tính năng nhắm một phân khúc cụ thể |
| Đo so với đối tượng mục tiêu đã xác định | Phản ánh công bằng, chính xác phạm vi tiếp cận dự kiến | Cần xác định đối tượng chủ đích trước khi ra mắt |
| Chỉ lần thử đầu | Tín hiệu nhanh, có sẵn sớm sau khi ra mắt | Bỏ lỡ việc tính năng có đem lại giá trị lâu dài không |
| Lần thử đầu cộng giữ chân | Phân biệt tò mò với giá trị thật | Cần chờ lâu hơn (vài tuần) trước khi có bức tranh đầy đủ |

Sự căng thẳng trung tâm là **tốc độ so với sự trung thực**. Dữ liệu lần thử đầu có sẵn gần như ngay sau khi ra mắt và đáp ứng áp lực của
tổ chức phải báo cáo kết quả sớm, nhưng riêng nó không thể phân biệt sự tò mò hay buộc tiếp xúc với giá trị thật, lâu dài. Hãy giải quyết
sự căng thẳng bằng cách báo cáo dữ liệu lần thử đầu sớm và gắn nhãn rõ là sơ bộ, đồng thời cam kết công khai một lần đọc giữ chân tiếp
theo ở một khoảng cố định, định trước, để sự hào hứng ban đầu không đông cứng thành một câu chuyện thành công không được xem xét trước
khi tín hiệu thật kịp xuất hiện.

## Câu hỏi để thảo luận với đội của bạn

1. **Với tính năng mới giao gần đây nhất của chúng ta, chúng ta có biết riêng lần thử đầu và mức sử dụng được giữ chân, hay chỉ một con
   số gộp?** Nếu chỉ có số gộp, khoảng trống đó che giấu đúng sự phân biệt tò mò so với giá trị mà chủ đề này coi là trung tâm.

2. **Đối tượng mục tiêu cho tính năng này có được xác định tường minh trước khi ra mắt không, và chúng ta có đang đo mức áp dụng so với
   nhóm cụ thể đó không?** Hãy kiểm tra xem mẫu số áp dụng hiện tại của bạn có khớp với người mà tính năng thực sự được xây cho, hay bị
   loãng bởi việc đo so với một nhóm dân số rộng hơn không liên quan.

3. **Với một tính năng có mức áp dụng thấp, chúng ta đã điều tra xem nguyên nhân nào trong số các nguyên nhân khả dĩ, giá trị thấp,
   khó khám phá, giải thích kém, không đủ thời gian, thực sự áp dụng chưa?** Hãy đi qua danh sách chẩn đoán cụ thể này cho một tính năng
   áp dụng thấp thật, hiện tại thay vì mặc định "chắc nó không có giá trị".

4. **Có phần nào trong con số áp dụng được báo cáo của chúng ta bị thổi phồng bởi việc buộc tiếp xúc, một mặc định xâm lấn, hay một hộp
   thoại buộc đóng, thay vì việc dùng tự nguyện, thật không?** Hãy thành thật ở đây; đây là một mẫu phổ biến và dễ rơi vào, đặc biệt dưới
   áp lực phải cho thấy kết quả tích cực sớm.

5. **Khi mức áp dụng của một tính năng dịch chuyển đáng kể, chúng ta có truy được sự dịch chuyển đó về một thay đổi cụ thể chúng ta đã
   thực hiện không?** Nếu câu trả lời thường là "chúng ta không chắc", khoảng trống đó giới hạn mức tổ chức của bạn thực sự học được từ
   dữ liệu áp dụng của chính mình theo thời gian.

6. **Chúng ta có ghép các con số áp dụng với bất kỳ tín hiệu hài lòng nào cho cùng tính năng, hay chỉ theo dõi mức sử dụng thô?** Một con
   số áp dụng cao đi cùng mức hài lòng thấp là dấu hiệu cảnh báo mà riêng mức sử dụng thô sẽ hoàn toàn bỏ lỡ.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Mức áp dụng tính năng thường là tín hiệu quan trọng nhất mà một công ty non trẻ có, gắn chặt với chính sự phù hợp
sản phẩm-thị trường. Hãy theo dõi riêng việc giữ chân, không chỉ lần thử đầu, từ lần ra mắt tính năng đầu tiên, vì phân biệt giá trị
thật với sự tò mò ban đầu là then chốt khi sự sống còn của công ty có thể phụ thuộc vào việc chẩn đoán đúng điều này.

**Doanh nghiệp nhỏ.** Hầu hết các nền tảng phân tích báo cáo dữ liệu sử dụng cơ bản với thiết lập tối thiểu; kỷ luật chính là xác định
rõ đối tượng mục tiêu trước khi đo, thay vì báo cáo mức áp dụng so với toàn bộ cơ sở khách hàng của bạn bất kể một tính năng cụ thể thực
sự được xây cho ai.

**Doanh nghiệp lớn.** Dữ liệu áp dụng ở quy mô này là thiết yếu cho việc ưu tiên lộ trình công bằng, dựa trên bằng chứng trên một danh
mục sản phẩm lớn, và kỷ luật phân biệt lần thử đầu với việc giữ chân bền vững còn quan trọng hơn ở đây, vì một cơ sở người dùng đủ lớn
có thể tạo ra một đợt tăng đột biến ban đầu trông ấn tượng cho hầu như mọi lần ra mắt bất kể giá trị thật.

**Chính phủ.** Mức áp dụng một dịch vụ số hướng công dân là thước đo trực tiếp, cụ thể về việc đầu tư công có chuyển thành lợi ích công
thật không, và thường là một chỉ số thuyết phục hơn nhiều với một cơ quan giám sát so với số đếm phân phối hay hoạt động. Hãy đo mức áp
dụng so với nhóm dân số mà dịch vụ thực sự được xây để phục vụ, và thành thật về các rào cản (kiến thức số, khả năng tiếp cận, nhận
biết) có thể giải thích mức áp dụng thấp ngoài thiết kế của chính dịch vụ.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty phần mềm quản lý dự án ra mắt một tính năng chỉnh sửa cộng tác mới và ăn mừng tỷ lệ thử ban đầu ấn
tượng 60% trong hai tuần đầu. Một lần đọc giữ chân tiếp theo ở tuần thứ tám cho thấy chỉ 8% những người thử ban đầu đó còn dùng tính
năng thường xuyên, cho thấy tỷ lệ thử cao gần như hoàn toàn do một chú giải làm quen nổi bật, khó đóng chứ không phải sự quan tâm thật,
bền vững. Việc điều tra phản hồi định tính từ những người thử sớm đã ngừng dùng tính năng đã phát hiện một vấn đề khả dụng cụ thể, sửa
được, một mẫu tương tác phản trực giác, mà một lần thiết kế lại có mục tiêu đã xử lý, và mức sử dụng được giữ chân gần như tăng gấp ba
sau bản sửa, dù không bao giờ tiến gần con số thử ban đầu cao một cách gây hiểu lầm.

**Chính phủ.** Một dịch vụ việc làm quốc gia ra mắt một công cụ kết nối việc làm trực tuyến mới, ban đầu báo cáo mức áp dụng so với toàn
bộ cơ sở người dùng đã đăng ký của cơ quan, tạo ra một tỷ lệ thấp đáng nản đe dọa việc tiếp tục tài trợ cho chương trình. Một phân tích
sửa đổi, đo mức áp dụng riêng so với tập con người dùng đã đăng ký đang tích cực tìm việc trong các ngành mục tiêu của công cụ, đối
tượng dự kiến thực sự, cho thấy một tỷ lệ áp dụng cao hơn đáng kể và chính xác hơn. Kết hợp với một chiến dịch tiếp cận có mục tiêu
riêng cho đối tượng đã xác định đó, và một lần đọc giữ chân sau đó cho thấy việc dùng bền vững mạnh trong những người áp dụng, chương
trình đã đảm bảo được việc tiếp tục tài trợ dựa trên chỉ số đã sửa, nhắm mục tiêu trung thực thay vì con số gốc bị làm loãng gây hiểu
lầm.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo mức áp dụng tính năng chặt chẽ là đầu tư lộ trình dựa trên bằng chứng: một tổ chức có thể phân biệt giá trị thật,
được giữ chân với lần thử đầu do tò mò có thể tự tin đầu tư thêm vào những tính năng thực sự hoạt động và chuyển công sức khỏi những
tính năng không, thay vì đuổi theo một đợt tăng đột biến ban đầu gây hiểu lầm hay bỏ sớm một tính năng thực sự giá trị nhưng chậm được
khám phá.

Tổng chi phí sở hữu chủ yếu là việc cài đặt phân tích, thường đã có sẵn trong hầu hết các nền tảng phân tích sản phẩm hiện đại, cộng kỷ
luật xác định đối tượng mục tiêu tường minh và cam kết các lần đọc giữ chân tiếp theo thay vì dừng ở một tín hiệu sớm, chưa đầy đủ.
Kỷ luật đó tốn ít và ngăn được sai lầm đắt hơn nhiều là đọc sai hoặc một thành công giả hoặc một thất bại giả.

## Phản mẫu và cạm bẫy

- **Chỉ báo cáo lần thử đầu, không bao giờ giữ chân:** không phân biệt được sự tò mò hay buộc tiếp xúc với giá trị thật, lâu dài.
- **Đo mức áp dụng so với sai mẫu số:** làm loãng hoặc thổi phồng tín hiệu cho các tính năng nhắm một phân khúc đối tượng cụ thể.
- **Kết luận một tính năng đã thất bại mà không điều tra nguyên nhân cụ thể** của mức áp dụng thấp: có nguy cơ bỏ một tính năng thực sự
  giá trị nhưng khó khám phá hay sai thời điểm.
- **Ăn mừng mức áp dụng bị thổi phồng bởi buộc tiếp xúc hay mẫu thiết kế đen tối:** một trường hợp phía sản phẩm của lách bằng thay
  thế ở chủ đề 1.2.
- **Không bao giờ truy biến động mức áp dụng về các quyết định cụ thể:** giới hạn việc học hỏi của tổ chức từ dữ liệu của chính mình.
- **Theo dõi mức sử dụng mà không có tín hiệu hài lòng đi kèm:** bỏ lỡ trường hợp mức sử dụng cao cùng tồn tại với giá trị hay sự hài
  lòng thật thấp.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Mức áp dụng không được đo, hoặc chỉ báo cáo một con số lần thử sớm, đơn lẻ, không giữ chân.
- **Cấp 2, Phát triển:** Có một số theo dõi mức áp dụng, nhưng đối tượng mục tiêu không được xác định chính xác và việc giữ chân được
  đo không nhất quán.
- **Cấp 3, Chuẩn hóa:** Lần thử đầu và mức áp dụng được giữ chân đều được theo dõi nhất quán so với một đối tượng mục tiêu xác định
  chính xác cho mọi tính năng lớn.
- **Cấp 4, Quản lý:** Các tính năng áp dụng thấp được điều tra có hệ thống về nguyên nhân gốc cụ thể trước khi quyết định thiết kế lại
  hay ngừng hỗ trợ; mức áp dụng được ghép với dữ liệu hài lòng.
- **Cấp 5, Điều phối:** Dữ liệu áp dụng trực tiếp và thường xuyên thông tin cho ưu tiên lộ trình và quyết định đầu tư, và tổ chức có
  thể tự tin truy các biến động áp dụng cụ thể về các quyết định sản phẩm và kỹ thuật cụ thể.

## Ý tưởng để thảo luận

1. Tính năng gần đây nào mà lần thử đầu và mức áp dụng được giữ chân của chúng ta kể những câu chuyện rất khác nhau?
2. Đối tượng mục tiêu của tính năng gần nhất của chúng ta được xác định chính xác trước khi ra mắt, hay chỉ sau đó?
3. Tính năng áp dụng thấp nào đáng một cuộc điều tra nguyên nhân gốc trung thực trước khi chúng ta quyết định số phận của nó?
4. Có phần nào trong báo cáo mức áp dụng hiện tại của chúng ta bị thổi phồng bởi việc buộc tiếp xúc không?
5. Việc ghép dữ liệu áp dụng với dữ liệu hài lòng sẽ cho thấy điều gì về tính năng được dùng nhiều nhất của chúng ta?

## Những điểm chính cần nhớ

- Hãy phân biệt **lần thử đầu với việc giữ chân bền vững**; một đợt tăng đột biến do tò mò hay bị buộc tiếp xúc không phải là giá trị
  thật, lâu dài.
- Hãy đo mức áp dụng so với một **đối tượng mục tiêu được xác định chính xác**, không phải một cơ sở người dùng rộng hơn không liên
  quan.
- **Hãy điều tra nguyên nhân cụ thể** của mức áp dụng thấp trước khi kết luận một tính năng đã thất bại; nhiều nguyên nhân rất khác nhau
  đòi hỏi các phản ứng rất khác nhau.
- Hãy để ý mức áp dụng **bị thổi phồng bởi buộc tiếp xúc hay mẫu thiết kế đen tối**, và ghép mức áp dụng với một **tín hiệu hài lòng**
  để bắt điều này.
- **Hãy truy biến động mức áp dụng về các quyết định cụ thể** để biến dữ liệu thành sự học hỏi thật của tổ chức.

## Tài liệu tham khảo và đọc thêm

- *Lean Analytics*, của Alistair Croll và Benjamin Yoskovitz (chỉ số hành động được so với chỉ số phù phiếm áp dụng cho dữ liệu sử
  dụng sản phẩm).
- *Continuous Discovery Habits*, của Teresa Torres (nối các quyết định sản phẩm với bằng chứng kết quả khách hàng, gồm cả dữ liệu áp
  dụng).
- *Hooked: How to Build Habit-Forming Products*, của Nir Eyal (giữ chân và hình thành thói quen, và ranh giới đạo đức giữa giá trị thật
  và mẫu thiết kế đen tối).
- *Measure What Matters*, của John Doerr (đặt mục tiêu hướng kết quả áp dụng cho việc đặt mục tiêu áp dụng).
