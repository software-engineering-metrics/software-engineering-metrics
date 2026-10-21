# 8.3 Triển khai chỉ số mà không gây nỗi sợ

## Tổng quan và động lực

Chủ đề này, theo nghĩa thật, là đỉnh điểm thực tế của mọi điều cuốn sách này đã lập luận kể từ khi chủ đề 1.2 giới thiệu định luật
Goodhart: một chương trình chỉ số được triển khai tồi, theo cách gây ra nỗi sợ thay vì lòng tin, bảo đảm chính hành vi lách mà mọi chủ đề
sau đã cảnh báo, bất kể từng chỉ số riêng lẻ được thiết kế cẩn thận thế nào. Một tổ chức có thể làm đúng mọi chi tiết kỹ thuật, trực
quan hóa trung thực, ghép rào chắn, quản trị cẩn thận, mà vẫn tạo ra một chương trình chỉ số bị hỏng, không đáng tin nếu chính đợt triển
khai dạy các kỹ sư rằng những con số này tồn tại để phán xét họ thay vì giúp họ.

Cơ chế ở đây thẳng thắn và được ghi nhận rõ trong nghiên cứu hành vi tổ chức mà cuốn sách này đã trích dẫn xuyên suốt: những người sợ một
chỉ số sẽ bị dùng chống lại mình, làm suy yếu [an toàn tâm lý](https://en.wikipedia.org/wiki/Psychological_safety), phản ứng đúng như chủ
đề 1.2 dự đoán, họ tối ưu hóa con số thay vì thực tế nền tảng, vì động cơ tự bảo vệ là tức thời và cá nhân trong khi tác hại cho việc học
hỏi của tổ chức là lan tỏa và chậm trễ. Đây không phải thất bại về tính cách cá nhân; đó là phản ứng hợp lý trước một mối đe dọa thật,
và cách khắc phục bền vững duy nhất là loại bỏ mối đe dọa, không phải yêu cầu mọi người cư xử trung thực hơn bất chấp nó.

Với các đội lớn, hướng dẫn của chủ đề này quan trọng nhất ở thời điểm triển khai ban đầu, khi lòng tin chưa được xác lập theo bất kỳ
hướng nào và ấn tượng ban đầu đặt ra kỳ vọng lâu dài. Các tổ chức doanh nghiệp giới thiệu một chương trình chỉ số mới, toàn tổ chức có
nguy cơ một sự cố ban đầu bị xử lý sai duy nhất, chỉ số của một đội bị dùng để trừng phạt, đầu độc lòng tin trên cả đợt triển khai; các
tổ chức chính phủ, thường giới thiệu chương trình chỉ số trong bối cảnh có sẵn bảo vệ của công đoàn, văn hóa công chức, hay sự nghi ngờ
lịch sử với các sáng kiến đo lường, cần áp dụng hướng dẫn của chủ đề này với sự cẩn trọng và kiên nhẫn đặc biệt.

## Các nguyên tắc chính

- **Nỗi sợ làm hỏng dữ liệu nhanh hơn và triệt để hơn bất kỳ lỗi kỹ thuật nào trong thiết kế chỉ số.** Một chỉ số thiết kế hoàn hảo nhưng
  triển khai tồi vẫn bị lách.
- **Lòng tin được xác lập qua việc sử dụng không trừng phạt, nhất quán, được chứng minh, không chỉ qua một tuyên bố chính sách.** Hành
  động qua nhiều chu kỳ xây lòng tin; lời nói đơn thuần thì không.
- **Các sự cố triển khai ban đầu đặt ra kỳ vọng lâu dài.** Vài lần đầu một chỉ số chạm vào điều có hệ quả quyết định cách cả chương trình
  được nhìn nhận về sau.
- **Sự minh bạch về mục đích và quy trình giảm nỗi sợ nhiều hơn riêng lời trấn an.** Mọi người tin điều họ nhìn thấy và hiểu được, không
  chỉ điều họ được nói.
- **Đây là một kỷ luật tổ chức bền bỉ, không phải một thông báo triển khai một lần.** Nỗi sợ có thể len lại dần dần ngay cả sau một khởi
  đầu thực sự đáng tin.

## Khuyến nghị

### Truyền đạt tường minh mục đích và các phi mục tiêu, trước khi triển khai, không phải sau khi mối lo xuất hiện

Theo kỷ luật hiến chương chỉ số của chủ đề 1.4, hãy truyền đạt mục đích của một chương trình chỉ số mới và, quan trọng, các phi mục tiêu
tường minh của nó (không bao giờ dùng để đánh giá hiệu suất cá nhân mà không có một chính sách được công bố riêng, rõ ràng, theo chủ đề
1.1) trước khi ra mắt, không phải phản ứng sau khi kỹ sư đã bắt đầu lo lắng. Sự minh bạch chủ động, ngay từ đầu về điều một chỉ số không
dùng cho ngăn chặn sự suy đoán lo âu vốn sẽ lấp đầy khoảng trống và định hình những ấn tượng ban đầu khó đảo ngược.

### Mời những người được đo tham gia vào quá trình thiết kế

Các kỹ sư giúp thiết kế những chỉ số sẽ mô tả công việc của chính họ ít sợ hay bực bội với các chỉ số đó hơn nhiều so với những người bị
áp một hệ thống mà không có ý kiến. Hãy mời đại diện đội trực tiếp tham gia chọn chỉ số nào để theo dõi, chúng được trực quan hóa thế nào,
và rào chắn nào áp dụng, theo sự nhấn mạnh nhất quán của cuốn sách này vào quyền sở hữu cấp đội (chủ đề 1.4) thay vì một mệnh lệnh thuần
túy từ trên xuống.

### Bắt đầu với việc dùng chỉ để chẩn đoán và chứng minh nó qua nhiều chu kỳ trước khi thậm chí cân nhắc bất kỳ việc dùng để đánh giá nào

Theo trực tiếp sự phân biệt chẩn đoán-so-với-đánh-giá của chủ đề 1.1: hãy bắt đầu một chương trình chỉ số mới ở chế độ thuần túy chẩn
đoán, chỉ dùng để hiểu và cải thiện hệ thống, không có bất kỳ mối liên hệ nào với đánh giá cá nhân hay đội, và duy trì kỷ luật đó một
cách hiển thị qua vài chu kỳ báo cáo trước khi một cuộc trò chuyện về việc dùng rộng hơn thậm chí bắt đầu. Lòng tin xây theo cách này,
qua sự tiết chế được chứng minh theo thời gian, bền vững hơn nhiều so với lòng tin chỉ được tuyên bố qua một tài liệu chính sách.

### Phản ứng ngay lập tức và hiển thị với sự cố xử lý sai đầu tiên

Nếu một chỉ số bị dùng sai để trừng phạt, dù chỉ một lần, dù không chính thức, hãy xử lý ngay lập tức, hiển thị và trực tiếp, thay vì để
nó trôi qua lặng lẽ. Phản ứng của một tổ chức trước sự cố xử lý sai đầu tiên quan trọng một cách không cân xứng trong việc định hình
lòng tin của cả đội hay tổ chức vào toàn bộ chương trình về sau; một sự sửa chữa nhanh, minh bạch báo hiệu cam kết thật với mục đích
không trừng phạt đã nêu, trong khi sự im lặng hay một ngoại lệ lặng lẽ, không được xử lý xác nhận chính nỗi sợ thúc đẩy hành vi lách ngay
từ đầu.

### Biến chính rủi ro bị lách thành một cuộc trò chuyện chung, minh bạch, không phải mối bận tâm quản lý bị giấu kín

Thay vì coi rủi ro bị lách là điều lãnh đạo lo lắng một cách riêng tư, hãy chia sẻ công khai logic ghép rào chắn của chủ đề 1.2 với các
đội được đo: giải thích trực tiếp vì sao một rào chắn cụ thể tồn tại, nó được thiết kế để bắt mẫu lách nào, và mời ý kiến của chính đội
về việc rào chắn có được thiết kế tốt không. Sự minh bạch này, định khung cả đội như đối tác trong việc ngăn lách thay vì đối tượng bị
theo dõi, xây một mối quan hệ khác về căn bản với chương trình chỉ số so với một hệ thống lặng lẽ giám sát việc lách từ trên xuống mà
không bao giờ thảo luận công khai về rủi ro.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Mệnh lệnh từ trên xuống với sự tham gia tối thiểu của đội | Triển khai nhanh, thiết kế nhất quán | Rủi ro cao về lách do sợ hãi và lòng tin thấp ngay từ đầu |
| Triển khai có đội tham gia, đồng thiết kế | Xây lòng tin và sự đồng thuận thật, rủi ro lách thấp hơn | Triển khai chậm hơn, cần nỗ lực phối hợp nhiều hơn |
| Dùng để đánh giá ngay từ ngày đầu | Cảm giác hiệu quả, nối chỉ số với hệ quả nhanh | Gây nỗi sợ và rủi ro lách tối đa trước khi bất kỳ lòng tin nào được xác lập |
| Giai đoạn chứng minh kéo dài chỉ để chẩn đoán trước mọi việc dùng để đánh giá | Xây lòng tin bền vững, dựa trên bằng chứng | Chậm hơn để hiện thực hóa bất kỳ trường hợp dùng để đánh giá nào mà lãnh đạo cuối cùng có thể muốn |

Sự căng thẳng trung tâm là **tốc độ triển khai so với việc xây lòng tin**. Một đợt triển khai nhanh, từ trên xuống đưa chương trình chỉ số
vào chạy nhanh nhưng có rủi ro thật là gây ra chính nỗi sợ và việc lách mà cuốn sách này đã cảnh báo từ chủ đề mở đầu; một đợt triển
khai chậm hơn, có đội tham gia, chẩn đoán trước tiên mất nhiều thời gian hơn nhưng xây lòng tin bền vững khiến dữ liệu thu được đáng
thu thập ngay từ đầu. Hãy giải quyết sự căng thẳng dứt khoát nghiêng về xây lòng tin, vì một chương trình chỉ số ra mắt nhanh nhưng tạo
ra dữ liệu bị lách, không đáng tin thì theo nghĩa thật chưa đạt được gì mà cuốn sách này đã lập luận, dù được triển khai nhanh đến đâu.

## Câu hỏi để thảo luận với đội của bạn

1. **Mục đích và các phi mục tiêu tường minh của chương trình chỉ số hiện tại có được truyền đạt trước khi triển khai, hay kỹ sư biết về nó
   trước và chỉ sau đó mới nghe lời trấn an về cách nó sẽ được dùng?** Nếu lời trấn an đến một cách phản ứng thay vì chủ động, chính trình
   tự đó có thể đã định hình lòng tin ban đầu theo hướng tiêu cực, đáng gọi tên thành thật.

2. **Những người được đo có được mời tham gia thiết kế các chỉ số mô tả công việc của chính họ không, hay hệ thống bị áp đặt mà không có ý
   kiến?** Hãy đánh giá quy trình triển khai thực tế của bạn theo phép thử cụ thể này, vì sự tham gia quan trọng độc lập với việc thiết
   kế chỉ số kết quả tốt đến đâu.

3. **Chương trình chỉ số của chúng ta có duy trì việc dùng chỉ để chẩn đoán qua nhiều chu kỳ báo cáo không, hay việc dùng để đánh giá đã
   len vào sớm hơn một đợt triển khai xây lòng tin sẽ khuyến nghị?** Hãy truy lịch sử thực tế một cách thành thật; sự trôi dạt ở đây
   thường xảy ra dần dần và không chính thức hơn là qua một thay đổi chính sách tường minh duy nhất.

4. **Có chỉ số nào từng bị dùng sai để trừng phạt, dù một lần, dù không chính thức không, và tổ chức đã phản ứng thế nào?** Nếu điều này
   đã xảy ra, hãy đánh giá thành thật phản ứng nhanh và hiển thị hay lặng lẽ và không được xử lý, vì phản ứng đó định hình lòng tin vào cả
   chương trình nhiều hơn nhiều so với bản thân sự cố ban đầu.

5. **Các đội được đo có hiểu vì sao mỗi rào chắn tồn tại không, hay logic ngăn lách vẫn là mối bận tâm quản lý riêng tư mà họ không bao
   giờ được nói trực tiếp?** Hãy thảo luận liệu lập luận rào chắn của tổ chức bạn (chủ đề 1.2) có thực sự được chia sẻ minh bạch hay vẫn
   là một cân nhắc thiết kế không nói ra, ở hậu trường.

6. **Nếu hôm nay chúng ta bắt đầu lại việc triển khai chỉ số từ đầu, áp dụng đầy đủ hướng dẫn của chủ đề này, quy trình sẽ khác bao nhiêu so
   với những gì thực sự đã xảy ra?** Thí nghiệm tư duy hồi cố này thường cho thấy những chỗ cụ thể, gọi tên được nơi việc xây lòng tin bị
   rút ngắn dưới áp lực thời gian, đáng học hỏi dù không thể hoàn tác đợt triển khai ban đầu.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Lòng tin thường dễ xác lập hơn ở quy mô này, vì trò chuyện trực tiếp hằng ngày tự nhiên mang lại sự minh bạch mà chủ đề
này khuyến nghị. Rủi ro là bỏ qua việc truyền đạt có chủ đích mục đích và phi mục tiêu đơn giản vì nó có vẻ không cần thiết trong một
đội nhỏ, gắn bó, một giả định có thể lặng lẽ sụp đổ khi đội lớn lên và nhân viên mới gia nhập mà không có cùng bối cảnh chung.

**Doanh nghiệp nhỏ.** Một cuộc trò chuyện đơn giản, trực tiếp về lý do một chỉ số mới được giới thiệu và nó sẽ và sẽ không được dùng vào
việc gì, diễn ra trước khi triển khai thay vì sau khi mối lo xuất hiện, nắm được phần lớn giá trị của chủ đề này mà không cần quy trình
chính thức ở quy mô này.

**Doanh nghiệp lớn.** Quy mô và tính vô danh của một tổ chức lớn khiến hướng dẫn của chủ đề này vừa khó thực hiện tốt hơn vừa quan trọng
hơn phải làm đúng, vì một sự cố xử lý sai duy nhất có thể đầu độc lòng tin trên hàng chục đội nghe về nó qua người khác thay vì trực
tiếp trải nghiệm. Hãy đầu tư có chủ đích vào giai đoạn chứng minh kéo dài, chẩn đoán trước tiên mà chủ đề này khuyến nghị, và thiết lập
một giao thức phản ứng rõ ràng, nhanh, hiển thị cho mọi sự cố lạm dụng chỉ số trước khi nó xảy ra.

**Chính phủ.** Các tổ chức khu vực công thường giới thiệu chương trình chỉ số vào bối cảnh có sẵn bảo vệ của công đoàn, văn hóa công chức
đã thiết lập, và trong một số trường hợp, sự nghi ngờ lịch sử với các sáng kiến đo lường gắn với những tranh cãi quản lý hiệu suất trong
quá khứ. Hãy áp dụng hướng dẫn của chủ đề này với sự kiên nhẫn và tính trang trọng đặc biệt, có thể mời trực tiếp ý kiến của đại diện
công đoàn hoặc nhân viên vào quá trình thiết kế, và kỳ vọng dòng thời gian xây lòng tin thực sự dài hơn trong bối cảnh khu vực tư điển
hình.

## Ví dụ

**Doanh nghiệp lớn.** Đợt triển khai ban đầu của một công ty phần mềm cho một bảng điều khiển chỉ số kỹ thuật toàn diện, được một đội nền
tảng trung tâm thiết kế hoàn toàn mà không có ý kiến cấp đội, vấp phải sự kháng cự âm thầm, rộng khắp: các kỹ sư trên toàn tổ chức bắt
đầu không chính thức lách các con số báo cáo của chính mình trong vòng vài tuần, đúng như chủ đề 1.2 dự đoán cho một hệ thống chỉ số
không được tin, từ trên xuống. Một lần ra mắt lại sáu tháng sau, lần này mời trực tiếp đại diện đội vào việc chọn chỉ số và thiết kế rào
chắn, và tường minh cam kết rồi thực sự duy trì một giai đoạn sáu tháng chỉ để chẩn đoán trước khi có bất kỳ cuộc trò chuyện nào về việc
dùng rộng hơn, đã tạo ra dữ liệu đáng tin hơn đo được trong một năm: một cuộc kiểm toán nội bộ so sánh số lần triển khai tự báo cáo và
số lần đo bằng đường ống thấy khoảng cách giữa hai bên đã thu hẹp đáng kể so với những tháng đầu của đợt triển khai ban đầu.

**Chính phủ.** Nỗ lực đầu tiên của một cơ quan chính quyền tiểu bang trong việc giới thiệu chỉ số kỹ thuật đã bị bỏ hoàn toàn hai năm
trước sau một sự cố duy nhất khi một quản lý không chính thức nhắc đến dữ liệu hoạt động của một cá nhân trong một cuộc trao đổi hiệu
suất, một sự cố đơn lẻ nhưng không được xử lý đã đầu độc lòng tin vào cả sáng kiến trên toàn cơ quan trong nhiều năm sau, với nhân viên
vẫn nhắc "chuyện chỉ số đó" với sự hoài nghi rõ ràng rất lâu sau khi chương trình ban đầu đã bị lặng lẽ gác lại. Một chương trình mới,
được ra mắt lại có chủ đích, đã tường minh nêu thẳng lịch sử này một cách công khai, thừa nhận sự xử lý sai trong quá khứ, cam kết một
chính sách sử dụng không trừng phạt cụ thể, được công bố với một lãnh đạo bảo trợ chịu trách nhiệm có tên, và thiết lập một giao thức
phản ứng nhanh, minh bạch cho mọi mối lo lạm dụng trong tương lai. Sự thừa nhận tường minh về thất bại trong quá khứ này, thay vì chỉ
ra mắt lại như thể lịch sử không tồn tại, được đại diện nhân viên ghi nhận riêng là lý do nỗ lực thứ hai giành được lòng tin thật nơi
nỗ lực đầu thì không.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của một đợt triển khai xây lòng tin, tránh nỗi sợ đơn giản là dữ liệu đáng tin, nếu không có nó mọi công việc thiết kế chỉ số cẩn
thận của các chủ đề khác trong cuốn sách này không tạo ra giá trị thật nào. Ví dụ doanh nghiệp lớn ở trên cho thấy cụ thể và đo được
điều này: dữ liệu của chương trình ra mắt lại chính xác hơn rõ rệt so với dữ liệu của đợt triển khai ban đầu do sợ hãi thúc đẩy, một
lợi tức trực tiếp, định lượng được của khoản đầu tư xây lòng tin thêm.

Tổng chi phí sở hữu chủ yếu là thời gian và sự kiên nhẫn của tổ chức: giai đoạn chứng minh chẩn đoán trước tiên kéo dài, nỗ lực để đội
tham gia thiết kế, và kỷ luật bền bỉ trong việc phản ứng nhanh và hiển thị với mọi sự cố lạm dụng. Chi phí đó đáng kể nhưng là cái giá
cần thiết, không tránh được của dữ liệu đáng tin mà mọi chủ đề khác trong cuốn sách này phụ thuộc vào; một đợt triển khai nhanh bỏ qua
khoản đầu tư này tạo ra một chương trình chỉ số trông đầy đủ nhưng lặng lẽ vô giá trị, bị hỏng bởi chính việc lách mà cuốn sách này đã
cảnh báo từ chủ đề nội dung đầu tiên.

## Phản mẫu và cạm bẫy

- **Triển khai từ trên xuống không có sự tham gia của đội vào thiết kế chỉ số:** gây nỗi sợ và việc lách ngay từ đầu, bất kể bản thân
  các chỉ số được thiết kế tốt đến đâu.
- **Truyền đạt mục đích và phi mục tiêu một cách phản ứng thay vì chủ động:** để sự suy đoán lo âu lấp khoảng trống và định hình những ấn
  tượng ban đầu khó đảo ngược.
- **Vội dùng để đánh giá trước khi một giai đoạn tin cậy chỉ để chẩn đoán thực sự trôi qua:** cách phổ biến nhất khiến một chương trình
  chỉ số mới gây ra hành vi lách ngay lập tức.
- **Phản ứng lặng lẽ, không được xử lý trước sự cố lạm dụng chỉ số:** xác nhận chính nỗi sợ thúc đẩy việc lách và gây tổn hại lâu dài
  cho lòng tin vào cả chương trình.
- **Giữ logic ngăn lách và rào chắn là mối bận tâm quản lý riêng tư:** bỏ lỡ cơ hội xây lòng tin của việc chia sẻ lập luận minh bạch với
  các đội được đo.
- **Ra mắt lại một chương trình chỉ số từng bị xử lý sai mà không thừa nhận thẳng thất bại trong quá khứ:** lặp lại sai lầm ban đầu về
  sự minh bạch không đủ, lần này còn chồng thêm lịch sử chưa được giải quyết.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Chỉ số được triển khai từ trên xuống không có sự tham gia của đội, và mục đích cùng phi mục tiêu được truyền đạt
  một cách phản ứng, nếu có.
- **Cấp 2, Phát triển:** Có một số truyền đạt và sự tham gia của đội, nhưng không có giai đoạn chứng minh chỉ để chẩn đoán kéo dài và
  không có giao thức phản ứng lạm dụng rõ ràng.
- **Cấp 3, Chuẩn hóa:** Các chương trình chỉ số mới được triển khai nhất quán với truyền đạt chủ động, sự tham gia của đội vào thiết kế,
  và một giai đoạn chứng minh chỉ để chẩn đoán đã cam kết, trên toàn tổ chức.
- **Cấp 4, Quản lý:** Một giao thức phản ứng lạm dụng nhanh, minh bạch, được kiểm thử tồn tại và đã được thực hành, và lập luận rào chắn
  được chia sẻ công khai với các đội được đo như thực hành tiêu chuẩn.
- **Cấp 5, Điều phối:** Tổ chức có thành tích bền bỉ đã được chứng minh về dữ liệu chỉ số đáng tin, ít bị lách, quy trực tiếp cho thực
  hành triển khai xây lòng tin có kỷ luật, và thành tích này được bảo vệ và củng cố tích cực với mỗi chỉ số mới được giới thiệu.

## Ý tưởng để thảo luận

1. Mục đích của chương trình chỉ số hiện tại của chúng ta được truyền đạt trước hay sau khi mối lo xuất hiện?
2. Những người được đo có thực sự được mời tham gia thiết kế các chỉ số của chúng ta, hay hệ thống bị áp đặt?
3. Tổ chức của chúng ta đã bao giờ xử lý sai một chỉ số theo hướng trừng phạt chưa, và chúng ta đã phản ứng thế nào?
4. Các đội được đo có hiểu vì sao các rào chắn của chúng ta tồn tại, hay lập luận đó được giữ riêng?
5. Nếu hôm nay chúng ta ra mắt lại chương trình chỉ số với sự chú ý đầy đủ đến chủ đề này, chúng ta sẽ làm gì khác?

## Những điểm chính cần nhớ

- **Nỗi sợ làm hỏng dữ liệu nhanh hơn và triệt để hơn bất kỳ lỗi kỹ thuật nào** trong thiết kế chỉ số; một chỉ số thiết kế hoàn hảo nhưng
  triển khai tồi vẫn bị lách.
- **Hãy mời các đội được đo tham gia trực tiếp vào thiết kế chỉ số**, và truyền đạt chủ động mục đích cùng các phi mục tiêu tường minh,
  trước khi triển khai.
- **Hãy bắt đầu chỉ để chẩn đoán và chứng minh nó qua nhiều chu kỳ** trước khi thậm chí cân nhắc bất kỳ việc dùng để đánh giá nào.
- **Hãy phản ứng ngay lập tức và hiển thị với sự cố xử lý sai đầu tiên**; sự im lặng xác nhận chính nỗi sợ thúc đẩy hành vi lách.
- **Hãy chia sẻ minh bạch lập luận rào chắn và ngăn lách** với các đội được đo, xây quan hệ đối tác thay vì quan hệ giám sát.

## Tài liệu tham khảo và đọc thêm

- *Drive: The Surprising Truth About What Motivates Us*, của Daniel H. Pink (động lực nội tại so với ngoại tại, liên quan trực tiếp đến
  vì sao nỗi sợ làm hỏng hành vi bị chỉ số dẫn dắt).
- *The Tyranny of Metrics*, của Jerry Z. Muller (chi phí tổ chức và văn hóa của các chương trình chỉ số được triển khai tồi).
- *Site Reliability Engineering: How Google Runs Production Systems*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard
  Murphy biên tập (các nguyên tắc văn hóa không đổ lỗi mà chủ đề này mở rộng từ ứng phó sự cố sang triển khai chương trình chỉ số nói
  chung).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (nghiên cứu văn hóa tổ chức làm nền
  cho thực hành chỉ số kỹ thuật đáng tin, hiệu suất cao).
