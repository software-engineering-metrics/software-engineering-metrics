# 2.5 Hiệu suất luồng và công việc đang thực hiện

## Tổng quan và động lực

**Hiệu suất luồng (flow efficiency)** là tỷ lệ giữa thời gian hoạt động và tổng thời gian của
một phần công việc: nếu một thay đổi dành mười giờ được viết mã, đánh giá và kiểm thử tích cực,
nhưng nằm không trong các hàng đợi tổng cộng chín mươi giờ trên toàn hành trình, hiệu suất luồng
là 10%. Phần lớn các đường ống phân phối phần mềm, khi đo trung thực, rơi vào khoảng 10% đến 25%
hiệu suất luồng, điều khiến những người kỳ vọng công sức chiếm ưu thế phải ngạc nhiên. Chi phí
chi phối ở phần lớn hệ thống phân phối không phải là công việc mất bao lâu để làm, mà là công
việc chờ bao lâu mới được bắt đầu.

**[Công việc đang thực hiện](https://en.wikipedia.org/wiki/Work_in_process)** (work in process,
WIP) là số mục đang được làm tại một thời điểm, trên một đội hoặc một hệ thống, cùng đại lượng
mà chủ đề 2.4 gọi là "tải luồng". Phát hiện trái trực giác đằng sau chủ đề này, được hậu thuẫn
bởi nhiều thập kỷ nghiên cứu trong quản trị vận hành và được chính thức hóa cho phân phối phần
mềm qua kanban và lý thuyết hàng đợi, là việc giới hạn WIP có xu hướng *làm tăng* thông lượng,
không giảm, vì ít công việc đang bay cùng lúc nghĩa là ít chuyển đổi ngữ cảnh hơn, hàng đợi
ngắn hơn, và hoàn thành mỗi mục nhanh hơn, dù cảm giác rằng làm ít việc đồng thời hơn sẽ tạo
ra ít sản lượng hơn tổng thể.

Với các đội lớn, hiểu hiệu suất luồng định khung lại gần như mọi vấn đề phân phối từ "mọi người
cần làm nhanh hơn" thành "công việc cần chờ ít hơn". Sự định khung lại đó quan trọng vì cách
đầu mời gọi áp lực lên cá nhân, đúng cái bẫy mà chủ đề 2.6 cảnh báo, còn cách sau mời gọi điều
tra cấu trúc hàng đợi, năng lực đánh giá, và bao nhiêu công việc được bắt đầu đồng thời, nơi
mà cải thiện thật, bền vững thường nằm. Các tổ chức doanh nghiệp xoay xở nhiều sáng kiến đồng
thời qua các đội dùng chung đặc biệt dễ rơi vào WIP cao và hiệu suất luồng thấp, vì bắt đầu
công việc mới luôn có cảm giác là tiến bộ ngay cả khi nó đang lặng lẽ làm chậm mọi thứ đang bay.

## Các nguyên tắc chính

- **Thời gian chờ, không phải công sức hoạt động, chi phối phần lớn các đường ống phân phối.**
  Hiệu suất luồng dưới 25% là điển hình, không phải dấu hiệu của một đội hỏng.
- **Giới hạn công việc đang thực hiện có xu hướng làm tăng thông lượng,** không giảm, bằng cách
  giảm chuyển đổi ngữ cảnh và rút ngắn hàng đợi.
- **Bắt đầu công việc mới có cảm giác như tiến bộ; hoàn thành công việc mới thực sự giao giá
  trị.** Đây không phải cùng một thứ, và các tổ chức thường xuyên nhầm lẫn chúng.
- **WIP cao thường vô hình cho đến khi được đo.** Một đội có thể đang xoay xở nhiều công việc
  đồng thời hơn nhiều so với điều mà bất kỳ cá nhân nào nhận ra.
- **Đây là chỉ số cấp hệ thống, không phải cấp cá nhân.** Áp dụng giới hạn WIP để trừng phạt cá
  nhân hiểu sai toàn bộ điểm mấu chốt của kỹ thuật này.

## Khuyến nghị

### Đo hiệu suất luồng trước khi cho rằng công sức là nút thắt

Hãy tính tỷ lệ giữa thời gian hoạt động và tổng thời gian trôi qua cho một mẫu đại diện các
thay đổi gần đây, dùng dữ liệu giai đoạn thời gian chu kỳ từ chủ đề 2.6. Phần lớn các đội đo
điều này lần đầu đều ngạc nhiên vì con số thấp đến vậy, và sự ngạc nhiên đó tự nó có giá trị: nó
chuyển hướng sự chú ý từ "làm việc chăm hơn" sang "giảm xếp hàng", gần như luôn là đòn bẩy hiệu
quả hơn.

### Đặt một giới hạn công việc đang thực hiện tường minh và thực thi nó một cách nhìn thấy được

Hãy giới hạn số mục mà một đội hay một cá nhân có thể đang tiến hành tích cực cùng lúc, hiển thị
trên một bảng chung (một bảng kanban vật lý hoặc số là cách triển khai kinh điển). Khi chạm giới
hạn, hành động tiếp theo của đội là giúp hoàn thành thứ gì đó đang bay, không phải bắt đầu thứ
mới. Thực hành đơn lẻ này, vay mượn từ sản xuất tinh gọn và được chính thức hóa trong kanban, là
một trong những cải thiện luồng hiệu quả nhất quán nhất dành cho một đội phần mềm, và gần như
không tốn gì để thực hiện.

### Coi giới hạn WIP là một ràng buộc hệ thống, không phải hạn ngạch cá nhân

Một giới hạn WIP điều chỉnh bao nhiêu công việc mà *hệ thống* (một đội, một hàng đợi đánh giá
dùng chung, một môi trường dùng chung) có đang bay cùng lúc, không phải bao nhiêu mà bất kỳ một
người nào được phép đụng tới. Áp dụng giới hạn như một hạn ngạch hiệu suất cá nhân, "bạn chỉ
được mở hai phiếu", áp dụng sai kỹ thuật và mạo hiểm với đúng loại lách cấp cá nhân mà cuốn
sách này cảnh báo xuyên suốt. Giới hạn tồn tại để bảo vệ luồng qua toàn hệ thống, và việc thực
thi nó nên là một chuẩn mực của đội, không phải trần cá nhân.

### Điều tra vì sao công việc nằm không, không chỉ nó nằm bao lâu

Khi phân tích hiệu suất luồng cho thấy thời gian chờ dài, hãy hỏi cụ thể vì sao: công việc đang
chờ vì người đánh giá không có mặt, vì một môi trường kiểm thử dùng chung đã được đặt, vì một
phụ thuộc vào đội khác chưa hạ cánh. Mỗi nguyên nhân có một cách sửa khác nhau. Một chỉ thị
chung chung "giảm thời gian chờ" mà không có cuộc điều tra cụ thể này có xu hướng tạo ra phản
ứng chung chung, kém hiệu quả.

### Cảnh giác khi WIP leo ngược lên sau cải thiện ban đầu

Các đội áp dụng thành công giới hạn WIP thường thấy nó mòn dần theo thời gian khi áp lực bắt đầu
các sáng kiến mới quay lại, "chỉ lần này thôi, chúng ta cũng cần bắt đầu việc khẩn này". Hãy coi
mỗi ngoại lệ của giới hạn WIP là một quyết định có chủ đích, nhìn thấy được, kèm lý do nêu rõ,
không phải một sự ghi đè lặng lẽ, thường lệ, để kỷ luật của giới hạn không lặng lẽ suy tàn trở
về trạng thái ban đầu.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không có giới hạn WIP | Có cảm giác linh hoạt; không ma sát khi bắt đầu công việc mới | Chuyển đổi ngữ cảnh và xếp hàng lặng lẽ làm chậm mọi thứ |
| Giới hạn WIP cấp đội | Cải thiện thông lượng và hiệu suất luồng đo được | Cần kỷ luật để thực thi, đặc biệt dưới áp lực thời hạn |
| Hạn ngạch WIP cấp cá nhân | Đơn giản để phát biểu | Áp dụng sai kỹ thuật; có nguy cơ bị lách ở cấp cá nhân |
| Giới hạn WIP nghiêm ngặt, không nhân nhượng | Lợi ích hiệu suất luồng tối đa | Có thể cảm thấy cứng nhắc trong các tình huống thực sự khẩn cấp, ngoại lệ |

Mâu thuẫn trung tâm là **tính linh hoạt so với luồng**. Bắt đầu công việc mới bất cứ khi nào có
vẻ khẩn tạo cảm giác phản ứng nhanh, nhưng nghiên cứu về hiệu suất luồng và WIP liên tục cho
thấy sự linh hoạt này phải trả giá bằng việc hoàn thành bất cứ thứ gì nhanh chóng, vì nhiều công
việc đồng thời hơn nghĩa là hàng đợi dài hơn và nhiều chuyển đổi ngữ cảnh hơn cho mọi thứ đang
bay. Hãy giải quyết bằng cách áp dụng giới hạn WIP cấp đội làm mặc định, với một quy trình ngoại
lệ có chủ đích, nhìn thấy được và hiếm cho các trường hợp khẩn cấp thật, thay vì hoặc một quy tắc
cứng nhắc không ngoại lệ hoặc một sự tự do linh hoạt không giới hạn.

## Câu hỏi để thảo luận với đội của bạn

1. **Hiệu suất luồng thực tế của chúng ta, đo từ dữ liệu thời gian chu kỳ thật, là bao nhiêu, và
   con số đó có làm chúng ta ngạc nhiên không?** Phần lớn các đội chưa bao giờ tính điều này và
   cho rằng nó cao hơn nhiều so với thực tế. Hãy lấy một mẫu các thay đổi gần đây và tính tỷ lệ
   một cách trung thực trước khi bàn bất cứ điều gì khác trong chủ đề này.

2. **Hiện giờ chúng ta thực sự có bao nhiêu công việc đang thực hiện, trên toàn đội, và có ai
   biết con số đó trước khi đếm không?** WIP cao thường vô hình cho đến khi được đo tường minh, vì
   mỗi cá nhân chỉ thấy lát cắt của riêng mình. Hãy đếm mọi thứ đang tiến hành, kể cả công việc
   hôm nay không ai đụng tới.

3. **Nếu chúng ta áp dụng một giới hạn WIP, điều gì cần thay đổi về cách chúng ta phản ứng với
   một yêu cầu khẩn mới?** Câu hỏi này làm lộ thói quen tổ chức thật, bắt đầu công việc mới theo
   phản xạ, mà một giới hạn WIP được thiết kế để ngắt, và đáng bàn trước, không phải sau, khi cố
   thực thi một giới hạn.

4. **Khi công việc nằm không trong đường ống, lý do cụ thể là gì, và có phải lần nào cũng cùng
   một lý do không?** Một cảm nhận chung rằng "mọi thứ chờ quanh quẩn" kém hữu ích hơn một nguyên
   nhân cụ thể, lặp lại: người đánh giá vắng mặt, môi trường dùng chung đã đặt, phụ thuộc xuyên
   đội. Hãy gọi tên kiểu mẫu thực từ các ví dụ gần đây có thật.

5. **Chúng ta đã bao giờ áp dụng một giới hạn WIP rồi nhìn nó lặng lẽ mòn đi qua các ngoại lệ
   chưa?** Điều này cực kỳ phổ biến và đáng bàn thẳng thắn: áp lực nào gây ra ngoại lệ đầu tiên,
   và các ngoại lệ có thành bình thường mới mà không ai quyết định điều đó một cách tường minh
   không.

6. **Trong bối cảnh của chúng ta, một giới hạn WIP cần được áp dụng ở cấp cá nhân, đội, hay tài
   nguyên dùng chung (như hàng đợi đánh giá hoặc môi trường kiểm thử)?** Các nút thắt khác nhau
   đòi hỏi giới hạn ở các cấp khác nhau, và áp dụng giới hạn sai cấp, hạn ngạch cá nhân thay vì
   trần hàng đợi dùng chung, có thể áp dụng sai toàn bộ kỹ thuật.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Với ít người, WIP thường thấp một cách tự nhiên đơn giản vì không đủ kỹ sư để
bắt đầu nhiều việc đồng thời. Rủi ro là điều ngược lại: một nhà sáng lập hay kỹ sư trưởng cá
nhân xoay xở nhiều sáng kiến đồng thời hơn họ nhận ra, điều đáng đo ngay cả khi không có công
cụ kanban chính thức.

**Doanh nghiệp nhỏ.** Một bảng nhìn thấy được đơn giản, vật lý hay một công cụ số cơ bản, với
giới hạn cột tường minh là đủ để có phần lớn lợi ích mà không cần đầu tư công cụ chỉ số luồng
tinh vi. Hãy bắt đầu với một giới hạn rộng rãi và siết dần khi đội quen với kỷ luật.

**Doanh nghiệp lớn.** WIP cao đặc biệt phổ biến và đặc biệt tốn kém ở đây, vì nhiều sáng kiến
chiến lược đồng thời tranh cùng năng lực kỹ thuật dùng chung, và bắt đầu một sáng kiến mới luôn
trông như tiến bộ với bất cứ ai tài trợ nó. Hãy làm WIP nhìn thấy được ở cấp danh mục, không chỉ
cấp đội, để lãnh đạo thấy chi phí của việc bắt đầu thêm một sáng kiến nữa trước khi hoàn thành
những sáng kiến hiện tại.

**Chính phủ.** Các chương trình nhiều năm thường tích tụ WIP ngầm định khổng lồ qua nhiều dòng
công việc, mỗi dòng được biện minh riêng lẻ, mà không có tầm nhìn toàn tổ chức về tổng. Giới
thiệu khả năng nhìn thấy WIP cấp danh mục, ngay cả không chính thức, thường là lập luận thuyết
phục nhất để sắp xếp thứ tự công việc thay vì chạy mọi thứ song song, vì chi phí hiệu suất luồng
của WIP cao cộng dồn rõ rệt một khi được đo.

## Ví dụ

**Doanh nghiệp lớn.** Đội nền tảng của một công ty dịch vụ tài chính đang xoay xở mười tám sáng
kiến đồng thời với chỉ mười hai kỹ sư, một tỷ lệ WIP-trên-năng-lực mà không ai thực sự tính cho
đến khi một giám đốc kỹ thuật mới hỏi trực tiếp. Hiệu suất luồng trên công việc của đội đo được
dưới 12%. Đội áp dụng một giới hạn WIP tường minh là một sáng kiến hoạt động cho mỗi hai kỹ sư,
cố ý tạm dừng nhiều sáng kiến ưu tiên thấp hơn thay vì tiếp tục dàn mỏng năng lực. Thông lượng,
đo bằng số sáng kiến thực sự hoàn thành mỗi quý, tăng hơn gấp đôi trong vòng hai quý, dù đội
trông rõ ràng là "làm ít hơn" ở bất kỳ thời điểm nào.

**Chính phủ.** Chương trình chuyển đổi số của một cơ quan hạ tầng quốc gia đã tích tụ hơn bốn
mươi dòng công việc đồng thời trên danh mục, mỗi dòng có nhà tài trợ và lời biện minh riêng,
không có cái nhìn tổng thể nào về tổng công việc đang thực hiện. Một đợt rà soát hiệu suất luồng
cấp chương trình thấy dòng công việc trung vị dành dưới 15% thời gian trôi qua trong phát triển
tích cực, phần còn lại chờ các tài nguyên dùng chung: một đội rà soát kiến trúc trung tâm nhỏ,
một môi trường kiểm thử dùng chung, và sự phê duyệt liên cơ quan. Chương trình áp dụng các giới
hạn WIP cấp danh mục tường minh, sắp xếp thứ tự các dòng công việc thay vì chạy cả bốn mươi song
song, và theo dõi của chính cơ quan cho thấy hoàn thành nhanh hơn đo được ở các dòng công việc
còn hoạt động, dù tổng số chạy cùng lúc giảm mạnh.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc quản lý hiệu suất luồng và WIP có chủ đích là trái trực giác nhưng được ghi nhận
rõ: thông lượng có xu hướng tăng, không giảm, khi một tổ chức làm ít việc hơn cùng lúc, vì ít
chuyển đổi ngữ cảnh và hàng đợi ngắn hơn nghĩa là mỗi phần công việc hoàn thành nhanh hơn. Ví dụ
dịch vụ tài chính ở trên, thông lượng tăng gấp đôi nhờ cố ý giảm công việc đồng thời, là kiểu mẫu
phổ biến một khi các tổ chức thực sự đo và hành động theo hiệu suất luồng thay vì cho rằng nhiều
công việc song song hơn luôn nghĩa là nhiều tiến bộ hơn.

Tổng chi phí áp dụng kỷ luật này chủ yếu mang tính tổ chức, không phải kỹ thuật: một bảng nhìn
thấy được, một giới hạn WIP được thống nhất, và kỷ luật nói không với việc bắt đầu công việc mới
khi chạm giới hạn. Kỷ luật đó khó duy trì hơn là áp dụng, đó là lý do khuyến nghị "cảnh giác khi
WIP leo ngược lên" ở trên quan trọng không kém chính việc áp dụng ban đầu.

## Phản mẫu và cạm bẫy

- **Cho rằng công sức hoạt động chi phối thời gian phân phối mà không đo hiệu suất luồng:** thường
  sai, và nó chuyển hướng nỗ lực cải thiện về đòn bẩy sai.
- **Áp dụng giới hạn WIP như hạn ngạch cá nhân thay vì ràng buộc hệ thống:** áp dụng sai kỹ thuật
  và có nguy cơ bị lách ở cấp cá nhân.
- **Bắt đầu công việc mới theo phản xạ vì có cảm giác như tiến bộ:** thói quen cốt lõi mà hiệu suất
  luồng và giới hạn WIP được thiết kế để ngắt.
- **Để các ngoại lệ của giới hạn WIP trở nên thường lệ và vô hình:** làm mòn kỷ luật trở về trạng
  thái ban đầu mà không ai quyết định điều đó một cách có chủ đích.
- **Chỉ đo WIP ở cấp đội, bỏ sót quá tải cấp danh mục:** phổ biến ở các tổ chức lớn vận hành nhiều
  sáng kiến chiến lược đồng thời.
- **Coi một con số hiệu suất luồng thấp là dấu hiệu của một đội tồi:** nó điển hình ở hầu hết các
  đường ống phân phối và là điểm khởi đầu để điều tra, không phải một phán quyết.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Công việc đang thực hiện không được theo dõi; các đội bắt đầu công việc mới
  theo phản xạ, không có tầm nhìn về tổng tải đồng thời.
- **Mức 2, Phát triển:** Một số đội dùng một bảng không chính thức, nhưng giới hạn WIP không được
  thực thi nhất quán và hiệu suất luồng chưa bao giờ được tính.
- **Mức 3, Chuẩn hóa:** Các đội có giới hạn WIP tường minh, nhìn thấy được ở cấp hệ thống, và hiệu
  suất luồng được đo định kỳ từ dữ liệu thời gian chu kỳ thật.
- **Mức 4, Quản lý:** Các ngoại lệ của giới hạn WIP được theo dõi như quyết định có chủ đích, nhìn
  thấy được; hiệu suất luồng được giám sát về sự xói mòn theo thời gian và được điều tra khi nó
  giảm.
- **Mức 5, Điều phối:** WIP nhìn thấy được và được quản lý ở cấp danh mục, không chỉ cấp đội, và tổ
  chức có thể chỉ ra các cải thiện thông lượng cụ thể có được từ việc cố ý giảm công việc đồng
  thời.

## Ý tưởng để thảo luận

1. Hiệu suất luồng thực tế của chúng ta, tính trung thực từ dữ liệu thật, là bao nhiêu?
2. Hiện chúng ta có bao nhiêu công việc đang thực hiện mà trước buổi thảo luận này chưa ai đếm?
3. Chúng ta cần nói không với điều gì để thực thi một giới hạn WIP thật?
4. Lý do phổ biến nhất khiến công việc nằm không trong đường ống của chúng ta là gì?
5. Ở đâu trong tổ chức, WIP cấp danh mục vô hình và có lẽ đang quá cao?

## Điểm chính cần nhớ

- **Hiệu suất luồng**, tỷ lệ giữa thời gian hoạt động và tổng thời gian, thường dưới 25% trong các
  đường ống phân phối thực; thời gian chờ, không phải công sức, chi phối.
- **Giới hạn công việc đang thực hiện có xu hướng làm tăng thông lượng**, không giảm, bằng cách
  giảm chuyển đổi ngữ cảnh và rút ngắn hàng đợi.
- Áp dụng **giới hạn WIP như một ràng buộc hệ thống**, không bao giờ như hạn ngạch cá nhân.
- Hãy điều tra **lý do cụ thể** công việc nằm không thay vì ban hành một chỉ thị chung chung "giảm
  thời gian chờ".
- Cảnh giác với giới hạn WIP **mòn đi qua các ngoại lệ thường lệ**; hãy coi mỗi ngoại lệ là một
  quyết định có chủ đích, nhìn thấy được.
- Chủ đề 2.4 gọi đại lượng này là **tải luồng** và chủ đề 2.7 chính thức hóa mối quan hệ như định
  luật Little: công việc đang thực hiện bằng tốc độ đến nhân thời gian chu kỳ, với mọi hàng đợi ổn
  định.

## Tài liệu tham khảo và đọc thêm

- *The Principles of Product Development Flow*, của Donald G. Reinertsen (lý thuyết hàng đợi, cỡ
  lô và giới hạn WIP trong phát triển sản phẩm).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, của David J. Anderson
  (văn bản nền tảng về giới hạn WIP và luồng cho các đội phần mềm).
- *Actionable Agile Metrics for Predictability*, của Daniel S. Vacanti (đo hiệu suất luồng và dự
  báo dựa trên luồng).
- *The Goal*, của Eliyahu M. Goldratt (lý thuyết về ràng buộc và mối quan hệ trái trực giác giữa
  sự bận rộn cục bộ và thông lượng hệ thống).
