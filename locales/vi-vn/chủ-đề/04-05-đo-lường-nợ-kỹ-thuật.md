# 4.5 Đo lường nợ kỹ thuật

## Tổng quan và động lực

**[Nợ kỹ thuật (technical debt)](https://en.wikipedia.org/wiki/Technical_debt)**, một phép ẩn dụ do Ward Cunningham đặt ra, mô tả
chi phí tích lũy của những lối tắt trong quá khứ, những quyết định chóng vánh giúp giao thứ gì đó sớm hơn nhưng để lại cơ sở mã khó
thay đổi hơn về sau, theo đúng cách nợ tài chính cho phép bạn chi tiêu bây giờ với cái giá là tiền lãi sau này. Mọi cơ sở mã đều
mang một ít nợ kỹ thuật, và điều đó không tự động là thất bại; giá trị thật của phép ẩn dụ là nó đặt nợ vào khung một sự đánh đổi quản
lý được thay vì một bí mật đáng xấu hổ hay một gánh nặng vĩnh viễn không tránh được. Chủ đề này nói về việc làm cho sự đánh đổi đó
hiển thị và quản lý được bằng đo lường, thay vì để nó thành một nỗi lo mơ hồ, mãi bị hoãn mà mọi kỹ sư đều cảm thấy nhưng không ai
hành động được bằng bằng chứng.

Các chủ đề trước chủ đề này, độ phức tạp (4.1), độ bao phủ (4.2), mức thay đổi và điểm nóng (4.3), và phân tích tĩnh (4.4), mỗi chủ đề
làm lộ ra một khía cạnh của nợ kỹ thuật. Việc của chủ đề này là tổng hợp: biến những tín hiệu riêng rẽ đó, cộng các mục không bao giờ
xuất hiện trong bất kỳ lần quét tự động nào (một lối tắt kiến trúc không được ghi chép, một đợt di chuyển bị hoãn có chủ đích), thành
một backlog duy nhất, được ưu tiên, hiển thị, cạnh tranh công bằng cho đầu tư với công việc tính năng, thay vì mặc nhiên thua cuộc
cạnh tranh đó chỉ vì nó không có chỉ số đi kèm và không có người bênh vực trong các cuộc họp lập kế hoạch.

Với các đội lớn, nợ kỹ thuật không được quản lý tích lũy lãi theo cách thực sự nguy hiểm và dễ bị đánh giá thấp: mỗi lối tắt mới làm
thay đổi tiếp theo khó hơn một chút, tạo áp lực cho thêm lối tắt, rồi lại tích lũy thêm. Các tổ chức doanh nghiệp và chính phủ bảo trì
hệ thống qua nhiều năm đặc biệt dễ chịu hiệu ứng tích lũy này, và khuyến nghị trung tâm của chủ đề này, một backlog nợ hiển thị, được
định lượng, được ưu tiên, là cơ chế cho phép một tổ chức thực sự quản lý sự đánh đổi một cách chủ đích thay vì trôi vào khủng hoảng.

## Các nguyên tắc chính

- **Nợ kỹ thuật là một phép ẩn dụ có chủ đích cho một sự đánh đổi quản lý được, không phải một bí mật đáng xấu hổ.** Một ít nợ, được
  nhận lấy có ý thức, là một quyết định kinh doanh hợp lý.
- **Nợ không được đo mặc nhiên thua cuộc cạnh tranh ưu tiên với công việc tính năng,** không phải vì nó kém quan trọng hơn, mà vì nó
  không có người bênh vực hiển thị.
- **Hãy định lượng nợ theo các thuật ngữ mà người ra quyết định cân nhắc được: chi phí sửa so với chi phí gánh nó.** Một tuyên bố mơ
  hồ kiểu "mã này bừa bộn" hiếm khi cạnh tranh tốt với một yêu cầu tính năng cụ thể.
- **Nợ tích lũy lãi.** Mỗi lối tắt mới làm các thay đổi tương lai khó hơn đôi chút, và hiệu ứng đó tăng tốc nếu không được quản lý.
- **Không phải mọi khoản nợ đều nên được trả.** Một số đáng mang vô thời hạn nếu chi phí sửa vượt chi phí sống chung với nó.

## Khuyến nghị

### Xây một backlog nợ kỹ thuật duy nhất, hiển thị

Hãy hợp nhất các tín hiệu từ những chủ đề trước của phần này, các ngoại lệ độ phức tạp, vùng có tỷ lệ giết đột biến thấp, điểm nóng,
phát hiện phân tích tĩnh chưa giải quyết, cùng với các mục nợ chỉ con người mới nhận ra (một lối tắt kiến trúc, một lần nâng cấp phụ
thuộc bị hoãn, một cách lách không được ghi chép), vào một backlog hiển thị, được theo dõi với cùng độ chặt chẽ và độ hiển thị như
backlog tính năng của bạn. Nợ chỉ nằm trong trí nhớ của từng kỹ sư hay trong các ghi chú mã rải rác thì thực tế không tồn tại đối
với mục đích ưu tiên.

### Định lượng chi phí sửa và chi phí gánh của từng mục nợ

Với mỗi mục, hãy ước tính hai con số: chi phí để sửa nó (thời gian kỹ thuật, rủi ro của chính bản sửa) và chi phí gánh nó khi chưa sửa
(công việc liên quan chậm đi bao nhiêu, nó mang thêm bao nhiêu rủi ro lỗi, nó chặn bao nhiêu công việc khác). Khung này, mượn thẳng từ
logic của chính phép ẩn dụ nợ tài chính, cho người ra quyết định một cơ sở thật để so sánh với chi phí và giá trị kỳ vọng của công
việc tính năng, thay vì một lời phàn nàn trừu tượng, không định lượng.

### Ưu tiên theo tác động, không theo tuổi hay người bênh vực to tiếng nhất

Hãy xếp hạng các mục nợ theo sự kết hợp giữa chi phí gánh và mức độ thường xuyên mã bị ảnh hưởng được chạm tới (dữ liệu mức thay đổi của
chủ đề 4.3 hữu ích trực tiếp ở đây): một mục nằm ở góc ít được sửa của cơ sở mã, dù khó chịu đến đâu, quan trọng kém hơn nhiều so với
mục nằm ngay trên đường phát triển tích cực nhất của bạn. Hãy cưỡng lại việc ưu tiên theo mục nào nằm trong backlog lâu nhất hay kỹ
sư nào bênh vực nó dai dẳng nhất, cả hai đều không tương quan đáng tin cậy với tác động kinh doanh thực tế.

### Phân bổ năng lực riêng, được bảo vệ cho việc khắc phục nợ

Một backlog nợ phải cạnh tranh từng mục với mọi yêu cầu tính năng đến trong mọi chu kỳ lập kế hoạch thường thua liên tục, vì công
việc tính năng thường có người bênh vực kinh doanh rõ ràng, tức thời hơn. Hãy phân bổ một tỷ lệ phần trăm năng lực kỹ thuật được bảo
vệ, một mẫu phổ biến là khoảng từ 10% đến 20%, dành riêng cho việc khắc phục nợ, được quyết định từ trước thay vì thương lượng lại mỗi
sprint, để việc trả nợ diễn ra như lẽ thường chứ không chỉ sau một cuộc khủng hoảng.

### Chấp nhận một số nợ là vĩnh viễn, và nói rõ điều đó

Không phải mục nào cũng thuộc về một kế hoạch khắc phục đang chạy. Khi chi phí sửa thực sự vượt chi phí gánh một mục vô thời hạn, nhất
là với mã trong một hệ thống ổn định, hiếm khi chạm tới, sắp ngừng sử dụng, hãy ghi chép quyết định đó một cách tường minh và chuyển
mục đó sang một nhóm bị hạ ưu tiên có chủ đích thay vì để nó nằm vô thời hạn trong backlog đang hoạt động, nơi sự hiện diện kéo dài
của nó lặng lẽ ngụ ý một công việc sẽ không bao giờ thực sự diễn ra.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không theo dõi nợ chính thức | Không tốn chi phí quản lý | Nợ mặc nhiên thua cuộc cạnh tranh ưu tiên; tích lũy lãi một cách vô hình |
| Nhận thức nợ không chính thức, tùy hứng | Chi phí thấp, có chút hiển thị | Không nhất quán; dựa vào trí nhớ và sự bênh vực của cá nhân |
| Backlog nợ chính thức, được định lượng | Cạnh tranh công bằng cho đầu tư; cho phép đánh đổi có hiểu biết | Cần bảo trì liên tục và kỷ luật định lượng |
| Năng lực khắc phục riêng, được bảo vệ | Bảo đảm việc trả nợ diễn ra nhất quán, không chỉ phản ứng | Giảm năng lực dành cho công việc tính năng trong ngắn hạn |

Sự căng thẳng trung tâm là **áp lực phân phối trước mắt so với khả năng bảo trì dài hạn**. Công việc tính năng hầu như luôn có người
bênh vực kinh doanh rõ ràng, tức thời hơn việc khắc phục nợ, tạo ra áp lực cấu trúc khiến nợ thua mọi quyết định ưu tiên riêng lẻ
ngay cả khi chi phí tích lũy của nó cao. Hãy giải quyết sự căng thẳng bằng cách đưa việc khắc phục nợ ra khỏi cuộc cạnh tranh từng mục
hoàn toàn thông qua năng lực được bảo vệ, phân bổ trước, để sự đánh đổi được quyết định một cách chủ đích và từ trước thay vì bị tranh
luận lại, và thường là thua, trong từng chu kỳ lập kế hoạch.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có một backlog nợ kỹ thuật duy nhất, hiển thị không, hay nhận thức về nợ chủ yếu nằm trong đầu từng kỹ sư?** Nếu câu
   trả lời thành thật là vế sau, đó là khoảng trống lớn nhất mà chủ đề này khuyến nghị đóng trước tiên.

2. **Với mục nợ hàng đầu của chúng ta, chúng ta có thể nêu chi phí sửa và chi phí gánh của nó theo những thuật ngữ đủ cụ thể để so sánh
   công bằng với một yêu cầu tính năng không?** Nếu không, hãy cùng nhau luyện việc định lượng này như một bài tập nhóm với một mục
   thật, hiện tại.

3. **Bao nhiêu phần trăm năng lực kỹ thuật của chúng ta thực sự dành cho việc khắc phục nợ, và tỷ lệ đó được quyết định chủ đích hay chỉ
   tình cờ là phần còn lại sau khi công việc tính năng được phân bổ?** Hãy xem các sprint gần đây thực tế của bạn và tính con số thật
   thay vì dựa vào ấn tượng.

4. **Backlog nợ của chúng ta được ưu tiên theo tác động kinh doanh thật, hay theo mục nào được nêu dai dẳng nhất hoặc nằm đó lâu
   nhất?** Hãy đối chiếu cách ưu tiên hiện tại với dữ liệu mức thay đổi (chủ đề 4.3) và xem hai thứ có khớp không.

5. **Những mục nợ nào chúng ta nên tường minh chấp nhận là vĩnh viễn, thay vì để nằm vô thời hạn trong backlog đang hoạt động?** Hãy
   xác định ít nhất một mục thật mà chi phí sửa thực sự vượt chi phí gánh, và thảo luận việc chuyển nó sang trạng thái bị hạ ưu tiên
   tường minh.

6. **Backlog nợ của chúng ta đã thay đổi thế nào trong năm qua, lớn lên, thu nhỏ hay giữ nguyên, và xu hướng đó có khớp với trực giác
   của chúng ta không?** Hãy theo dõi theo thời gian thay vì chỉ nhìn một ảnh chụp; xu hướng thường cho nhiều thông tin hơn quy mô
   tuyệt đối tại một thời điểm.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Nợ có chủ đích, có hiểu biết thường là một chiến lược hợp lý ở giai đoạn này: giao nhanh để kiểm chứng một giả thuyết,
kèm kế hoạch rõ ràng để xem lại các lối tắt cụ thể nếu sản phẩm thành công, là một sự đánh đổi chính đáng, không phải thất bại. Rủi ro
là mất dấu lối tắt nào là có chủ đích và đảo ngược được so với lối tắt nào đã lặng lẽ thành khoản nợ vĩnh viễn, không được xem xét khi
cơ sở mã lớn lên.

**Doanh nghiệp nhỏ.** Một danh sách chung đơn giản, dù không chính thức, nêu tên các lối tắt đã biết và chi phí sửa ước chừng của
chúng thường là đủ ở quy mô này. Kỷ luật chính đáng áp dụng là định kỳ xem lại danh sách đó thay vì để nó tích tụ lặng lẽ và trở nên vô
hình do quen thuộc.

**Doanh nghiệp lớn.** Năng lực khắc phục được bảo vệ, phân bổ trước quan trọng nhất ở đây, vì cuộc cạnh tranh ưu tiên riêng lẻ giữa nợ
và công việc tính năng luôn nghiêng về tính năng trên hàng chục đội cùng lúc nếu không có đối trọng cấu trúc. Hãy chuẩn hóa thực hành
định lượng nợ trên toàn tổ chức để các mục nợ có thể được so sánh công bằng giữa các đội cho các quyết định đầu tư cấp danh mục.

**Chính phủ.** Các hệ thống tồn tại lâu tích lũy nợ qua nhiều năm hay nhiều thập kỷ của những thay đổi yêu cầu từng bước, riêng lẻ hợp
lý, thường không có theo dõi nợ chính thức nào cho đến khi một cuộc khủng hoảng buộc phải giải quyết. Một backlog nợ được định lượng,
hiển thị là công cụ thực sự thuyết phục để biện minh ngân sách hiện đại hóa với các cơ quan giám sát, vì nó biến tuyên bố mơ hồ "hệ
thống đã cũ" thành một luận cứ đầu tư cụ thể, có tính chi phí.

## Ví dụ

**Doanh nghiệp lớn.** Nền tảng tính cước của một công ty viễn thông đã tích tụ hơn một thập kỷ nợ kỹ thuật được thừa nhận không chính
thức nhưng chưa bao giờ được theo dõi chính thức, với việc các kỹ sư thường xuyên nói "động cơ tính cước là một đống hỗn độn" trong
các buổi nhìn lại mà không có hành động tiếp theo. Một giám đốc kỹ thuật mới yêu cầu mọi đội xây một backlog nợ được định lượng, ước
tính chi phí sửa và chi phí gánh cho từng mục, và phân bổ cố định 15% năng lực kỹ thuật cho việc khắc phục nợ từ đó về sau. Trong một
năm, năm mục có chi phí gánh cao nhất, chiếm một phần nhỏ tổng backlog theo số lượng, đã được giải quyết, và tỷ lệ thay đổi thất bại
(chủ đề 2.10) cho các lần triển khai liên quan đến tính cước cải thiện đo được, cho thấy tác động không cân xứng của việc nhắm vào các
mục có chi phí gánh cao nhất trước thay vì xử lý backlog theo thứ tự tùy ý.

**Chính phủ.** Hệ thống xử lý dữ liệu lõi của một cơ quan thống kê quốc gia, được xây dựng hơn hai mươi năm trước, chưa bao giờ có đánh
giá nợ chính thức dù nhân viên thừa nhận không chính thức rộng rãi rằng các phần đáng kể là mong manh và ít người hiểu. Một đánh giá
nợ có cấu trúc, kết hợp phát hiện phân tích tĩnh, dữ liệu điểm nóng và phỏng vấn với số ít kỹ sư còn hiểu các thành phần cũ nhất, đã
tạo ra một backlog được định lượng, được ưu tiên, hỗ trợ trực tiếp cho một đề nghị ngân sách hiện đại hóa nhiều năm. Điều then chốt
là đánh giá cũng tường minh xác định một số thành phần cũ ổn định, hiếm khi chạm tới là hợp lý để giữ nguyên, tránh một đợt viết lại
toàn hệ thống rộng và đắt không cần thiết để ủng hộ một khoản đầu tư có mục tiêu vào các khu vực cụ thể mà dữ liệu cho thấy mang chi phí
liên tục cao nhất.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc quản lý nợ kỹ thuật một cách chủ đích là tránh được chi phí tích lũy: mỗi lối tắt chưa được giải quyết làm các thay
đổi tương lai khó hơn đôi chút, và hiệu ứng đó tăng tốc nếu không can thiệp, cuối cùng tạo ra một cơ sở mã mong manh đến mức ngay cả
những thay đổi đơn giản cũng chậm và rủi ro. Ví dụ viễn thông ở trên cho thấy lợi tức một cách cụ thể: nhắm vào một số ít mục có chi
phí gánh cao nhất đã tạo ra cải thiện đo được về phân phối và chất lượng, không cân xứng với phần nhỏ của tổng backlog mà các mục đó
đại diện.

Tổng chi phí sở hữu là năng lực được bảo vệ phân bổ cho việc khắc phục, thường từ 10% đến 20% thời gian kỹ thuật, một chi phí thật,
hiển thị cạnh tranh với tốc độ tính năng trong ngắn hạn. Chi phí đó đáng trả vì phương án thay thế, nợ tích lũy lãi không được quản lý,
cuối cùng tốn kém hơn nhiều về phân phối chậm và tỷ lệ lỗi cao trên toàn bộ cơ sở mã, không chỉ ở những mục cụ thể bị bỏ ngỏ.

## Phản mẫu và cạm bẫy

- **Không có backlog nợ hiển thị, được theo dõi:** nợ mặc nhiên thua cuộc cạnh tranh ưu tiên và tích lũy lãi một cách vô hình.
- **Tuyên bố nợ mơ hồ, không định lượng:** hiếm khi cạnh tranh tốt với các yêu cầu tính năng cụ thể, được định lượng trong lập kế hoạch.
- **Ưu tiên nợ theo tuổi hay độ to của sự bênh vực thay vì tác động:** hướng sai năng lực khắc phục hạn chế.
- **Không có năng lực được bảo vệ cho việc khắc phục:** việc trả nợ chỉ diễn ra theo kiểu phản ứng, sau một cuộc khủng hoảng, thay vì
  thực hành thường lệ, có chủ đích.
- **Coi mọi khoản nợ đều đáng sửa như nhau:** lãng phí công sức vào các mục tác động thấp trong khi các mục có chi phí gánh cao vẫn
  chưa được giải quyết.
- **Để nợ nằm vô thời hạn trong backlog đang hoạt động mà không bao giờ quyết định nó là vĩnh viễn:** ngụ ý công việc tương lai sẽ
  không bao giờ thực sự diễn ra và làm rối việc ưu tiên thật.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Nợ kỹ thuật được bàn không chính thức, không có backlog được theo dõi và không định lượng; nó liên tục thua
  công việc tính năng.
- **Cấp 2, Phát triển:** Một số đội theo dõi nợ không chính thức, nhưng không có định lượng nhất quán, hiển thị giữa các đội hay năng
  lực khắc phục được bảo vệ.
- **Cấp 3, Chuẩn hóa:** Một backlog nợ hiển thị, được định lượng tồn tại trên toàn tổ chức, với năng lực khắc phục được bảo vệ phân
  bổ nhất quán.
- **Cấp 4, Quản lý:** Các mục nợ được ưu tiên theo tác động đo được (chi phí gánh kết hợp mức thay đổi), và nợ được chấp nhận vĩnh viễn
  được ghi chép tường minh thay vì để mơ hồ.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những cải thiện cụ thể, đo được về phân phối hay chất lượng truy được về việc khắc phục
  nợ có mục tiêu, và quản lý nợ là một đầu vào thường xuyên, đáng tin cậy cho các quyết định đầu tư kỹ thuật cùng với công việc tính
  năng.

## Ý tưởng để thảo luận

1. Mục nợ có chi phí gánh cao nhất của chúng ta lúc này là gì, và chúng ta có thể định lượng nó không?
2. Bao nhiêu phần trăm năng lực của chúng ta thực sự dành cho việc khắc phục nợ hiện nay?
3. Mục nợ nào chúng ta nên tường minh chấp nhận là vĩnh viễn thay vì để mơ hồ trong backlog?
4. Backlog nợ của chúng ta đã lớn lên, thu nhỏ hay giữ nguyên trong năm qua?
5. Một đánh giá nợ được định lượng sẽ cho thấy điều gì mà nhận thức không chính thức hiện tại của chúng ta đang bỏ sót?

## Những điểm chính cần nhớ

- Nợ kỹ thuật là một **sự đánh đổi quản lý được, không phải một bí mật đáng xấu hổ**; hãy định lượng nó thay vì để nó là một mối bận
  tâm mơ hồ, mãi bị hoãn.
- **Hãy định lượng chi phí sửa so với chi phí gánh** cho từng mục để nó cạnh tranh công bằng với công việc tính năng.
- **Hãy ưu tiên theo tác động** (chi phí gánh kết hợp mức thay đổi), không theo tuổi hay độ to của sự bênh vực.
- Hãy phân bổ **năng lực khắc phục riêng, được bảo vệ**, quyết định từ trước, vì nếu không nợ luôn thua cuộc cạnh tranh từng mục với
  công việc tính năng.
- **Hãy tường minh chấp nhận một số nợ là vĩnh viễn** khi chi phí sửa vượt chi phí gánh, thay vì để nó mơ hồ trong backlog đang hoạt
  động.

## Tài liệu tham khảo và đọc thêm

- Cunningham, Ward, "The WyCash Portfolio Management System" (báo cáo kinh nghiệm OOPSLA, 1992): nguồn gốc của phép ẩn dụ nợ kỹ
  thuật.
- *Managing Technical Debt: Reducing Friction in Software Development*, của Philippe Kruchten, Robert Nord, và Ipek Ozkaya (một
  khảo cứu toàn diện về đo lường và quản lý nợ kỹ thuật).
- *Refactoring: Improving the Design of Existing Code*, của Martin Fowler (các kỹ thuật khắc phục mà một backlog nợ cuối cùng dựa
  vào).
- *Your Code as a Crime Scene*, của Adam Tornhill (phân tích điểm nóng như đầu vào cho việc ưu tiên nợ, chủ đề 4.3).
