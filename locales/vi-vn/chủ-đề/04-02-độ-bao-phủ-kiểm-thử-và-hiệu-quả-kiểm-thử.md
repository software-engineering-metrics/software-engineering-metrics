# 4.2 Độ bao phủ kiểm thử và hiệu quả kiểm thử

## Tổng quan và động lực

**[Độ bao phủ kiểm thử (test coverage)](https://en.wikipedia.org/wiki/Code_coverage)** đo tỷ lệ phần trăm mã được một bộ kiểm thử
thực thi: độ bao phủ dòng, độ bao phủ nhánh, hay độ bao phủ đường đi chặt chẽ hơn. Đây là một trong những chỉ số được theo dõi rộng
rãi nhất trong toàn bộ cuốn sách này, rẻ để tính, dễ trực quan hóa thành một con số phần trăm duy nhất, và vì thế cũng là một trong
những chỉ số bị lách thường xuyên nhất, đúng như cách chủ đề 1.2 dự đoán cho bất kỳ chỉ số nào trở thành mục tiêu. Một bộ kiểm thử
có thể đạt độ bao phủ cao mà gần như không xác minh điều gì có ý nghĩa, vì độ bao phủ đo việc mã có được thực thi trong lần chạy
kiểm thử hay không, không đo việc kiểm thử có thực sự kiểm tra rằng mã hoạt động đúng hay không.

Khoảng cách giữa độ bao phủ và hiệu quả kiểm thử thật sự này không phải một chú thích nhỏ; nó là mối quan tâm trung tâm của chủ đề
này. Một kiểm thử gọi một hàm mà không khẳng định gì về kết quả của nó làm tăng độ bao phủ y hệt như một kiểm thử xác minh kỹ hành
vi của hàm qua các trường hợp biên. Cách khắc phục mà chủ đề này khuyến nghị, **kiểm thử đột biến (mutation testing)**, cố ý đưa
những lỗi nhân tạo nhỏ vào mã rồi kiểm tra xem bộ kiểm thử có thực sự bắt được chúng không, là câu trả lời trực tiếp cho khoảng cách
đó, và chủ đề này coi nó là phần bổ sung cần thiết của độ bao phủ, không phải một thứ tùy chọn thêm vào.

Với các đội lớn, mục tiêu độ bao phủ thường được áp dụng trên toàn tổ chức như một cổng chất lượng, đúng loại chỉ số có động cơ
khuyến khích và độ hiển thị cao mà chủ đề 1.2 cảnh báo là dễ bị lách nhất. Các tổ chức doanh nghiệp và chính phủ đặt ra yêu cầu tỷ
lệ phần trăm độ bao phủ đồng loạt mà không kèm kiểm tra hiệu quả, thực chất đang khuyến khích đúng kiểu lách ngưỡng mà cuốn sách này
mô tả: những kiểm thử tầm thường viết chỉ để chạm một con số, không kèm cải thiện tương ứng nào trong việc ngăn ngừa lỗi thực tế.

## Các nguyên tắc chính

- **Độ bao phủ đo sự thực thi, không đo sự xác minh.** Một dòng được kiểm thử chạy qua không cho biết gì về việc kiểm thử có kiểm
  tra điều gì có ý nghĩa về nó hay không.
- **Mục tiêu độ bao phủ không có kiểm tra hiệu quả là một ví dụ kinh điển của định luật Goodhart** (chủ đề 1.2): con số được cải
  thiện trong khi chất lượng thật sự thì không.
- **Kiểm thử đột biến là phần bổ sung cần thiết của độ bao phủ**, không phải sự thay thế; hãy dùng cả hai cùng nhau.
- **Độ bao phủ hữu ích hơn như một ngưỡng sàn hơn là một mục tiêu để tối đa hóa.** Một con số thấp cho thấy mã thực sự chưa được kiểm
  thử; theo đuổi 100% thường cho lợi ích giảm dần hoặc âm.
- **Độ bao phủ trên đường đi quan trọng có giá trị hơn độ bao phủ đồng đều, đồng loạt.** Không phải mọi đoạn mã đều mang rủi ro như
  nhau khi hỏng.

## Khuyến nghị

### Dùng độ bao phủ để tìm mã chưa được kiểm thử, không phải như mục tiêu để tối đa hóa

Hãy coi báo cáo độ bao phủ chủ yếu như một bản đồ về những gì hoàn toàn chưa có kiểm thử, đó là thông tin thực sự hữu ích, thay vì
một điểm số để đẩy lên 100%. Mã có độ bao phủ bằng không là một khoảng trống thật đáng lấp; giá trị cận biên của việc đẩy độ bao
phủ từ 85% lên 95% thường thấp hơn nhiều và thường không đáng công sức bỏ ra, nhất là khi công sức đó tạo ra những kiểm thử giá trị
thấp chỉ để chạm con số cao hơn.

### Ghép mọi mục tiêu độ bao phủ với kiểm thử đột biến

Các công cụ **kiểm thử đột biến** tự động đưa những lỗi nhỏ vào mã của bạn, đảo một toán tử so sánh, đổi một điều kiện biên, rồi
chạy bộ kiểm thử với từng phiên bản đã bị đột biến. Một bộ kiểm thử "giết" được (thất bại trước) phần lớn các đột biến là bộ kiểm
thử thực sự xác minh hành vi; một bộ kiểm thử có độ bao phủ dòng cao nhưng tỷ lệ giết đột biến thấp là đang thực thi mã mà không
kiểm tra có ý nghĩa. Sự kết hợp này là rào chắn hiệu quả nhất chống lại việc lách mục tiêu độ bao phủ, và cuốn sách này khuyến nghị
nó như thực hành tiêu chuẩn, không phải một kỹ thuật nâng cao hay tùy chọn.

### Ưu tiên độ bao phủ và kiểm thử đột biến trên các đường đi quan trọng trước

Không phải mọi đoạn mã đều mang rủi ro như nhau. Một đường đi xử lý thanh toán, một bước kiểm tra xác thực, hay một tập lệnh di
chuyển dữ liệu đáng được kiểm thử nghiêm ngặt hơn nhiều so với một báo cáo quản trị hiếm khi dùng. Thay vì theo đuổi độ bao phủ
đồng đều trên cả cơ sở mã, hãy xác định các đường đi mã có rủi ro cao nhất và hậu quả lớn nhất rồi tập trung công sức cả độ bao phủ
lẫn kiểm thử đột biến vào đó trước, chấp nhận độ bao phủ thấp hơn trên mã thực sự rủi ro thấp như một sự đánh đổi có chủ đích, có
hiểu biết, không phải một sơ suất.

### Cảnh giác với các kiểu lách độ bao phủ cụ thể

Những cách phổ biến nhất mà độ bao phủ bị lách, một khi nó trở thành mục tiêu, gồm: kiểm thử gọi một hàm nhưng không khẳng định điều
gì có ý nghĩa về kết quả (lách ngưỡng của chủ đề 1.2 áp dụng vào chỉ số này), tắt hoặc xóa các kiểm thử thất bại thay vì sửa vấn đề
gốc, và loại mã khó kiểm thử ra khỏi phép tính độ bao phủ thay vì giải quyết vì sao nó khó kiểm thử. Hãy định kỳ kiểm toán trực
tiếp một mẫu các kiểm thử, đọc các khẳng định thực sự của chúng, thay vì chỉ tin con số phần trăm độ bao phủ.

### Đặt ngưỡng sàn độ bao phủ, không đặt trần độ bao phủ, trong quy trình CI

Hãy cấu hình quy trình xây dựng của bạn để thất bại nếu độ bao phủ của mã mới tụt dưới một ngưỡng sàn đã thống nhất, nhằm ngăn thụt
lùi, thay vì đòi hỏi mọi thay đổi phải đẩy con số tổng thể cao hơn. Sự phân biệt này quan trọng: một ngưỡng sàn bảo vệ trước việc
thụt lùi mà không tạo ra áp lực đi lên không ngừng, thứ sinh ra những kiểm thử giá trị thấp viết chỉ để nhích con số lên thêm.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ dùng tỷ lệ phần trăm độ bao phủ | Rẻ, đơn giản, được công cụ hỗ trợ rộng rãi | Dễ bị lách; đo sự thực thi, không đo sự xác minh |
| Độ bao phủ cộng kiểm thử đột biến | Xác minh kiểm thử thực sự kiểm tra hành vi, chống lách tốt | Tốn tài nguyên tính toán hơn; cần đầu tư công cụ |
| Mục tiêu độ bao phủ đồng đều trên cả cơ sở mã | Đơn giản để phát biểu và thực thi | Lãng phí công sức vào mã rủi ro thấp; đầu tư thiếu so với rủi ro ở nơi khác |
| Độ bao phủ dựa trên rủi ro, đường đi quan trọng trước | Tập trung công sức nơi quan trọng nhất | Cần phán đoán để xác định đúng các đường đi thực sự quan trọng |

Sự căng thẳng trung tâm là **sự đơn giản so với sự trung thực**. Một tỷ lệ phần trăm độ bao phủ duy nhất dễ báo cáo và dễ đặt làm
mục tiêu, nhưng chính sự đơn giản đó khiến nó dễ bị lách đến vậy khi trở thành con số có động cơ khuyến khích. Hãy giải quyết sự
căng thẳng bằng cách chấp nhận độ phức tạp tăng thêm của kiểm thử đột biến và việc ưu tiên theo rủi ro như cái giá của một tín hiệu
trung thực, và bằng cách truyền đạt rõ ràng cho đội vì sao một con số độ bao phủ tổng thể thấp hơn, tập trung đúng vào các đường đi
quan trọng và được hậu thuẫn bởi tỷ lệ giết đột biến mạnh, có giá trị hơn một con số cao hơn nhưng phân bố đồng đều hơn và được xác
minh kém hiệu quả hơn.

## Câu hỏi để thảo luận với đội của bạn

1. **Tỷ lệ giết đột biến trên các đường đi mã rủi ro cao nhất của chúng ta là bao nhiêu, và nó so với tỷ lệ phần trăm độ bao phủ
   trên cùng đoạn mã đó ra sao?** Một khoảng cách lớn giữa độ bao phủ cao và tỷ lệ giết đột biến thấp là dấu hiệu rõ nhất rằng chỉ
   riêng độ bao phủ không cho bạn biết điều bạn nghĩ nó đang cho biết.

2. **Chúng ta đã bao giờ viết một kiểm thử chủ yếu để tăng con số độ bao phủ, mà ít suy nghĩ thật sự về việc nó nên xác minh gì chưa?**
   Hãy thành thật ở đây; điều này xảy ra thường hơn các đội muốn thừa nhận, nhất là dưới áp lực thời hạn khi một cổng độ bao phủ đang
   chặn việc hợp nhất.

3. **Công sức độ bao phủ của chúng ta tập trung vào các đường đi mã rủi ro cao nhất, hay dàn đều bất kể hậu quả nếu mã đó hỏng?**
   Hãy đối chiếu phân bố độ bao phủ hiện tại với một đánh giá rủi ro trung thực về cơ sở mã của bạn và tìm chỗ lệch.

4. **Chúng ta đã bao giờ tắt hoặc xóa một kiểm thử thất bại thay vì sửa vấn đề gốc mà nó bộc lộ chưa?** Đây là một trong những dạng
   lách độ bao phủ gây hại nhất, vì nó chủ động gỡ bỏ sự bảo vệ thật trong khi con số độ bao phủ báo cáo có thể hầu như không đổi.

5. **Quy trình CI của chúng ta áp ngưỡng sàn độ bao phủ cho mã mới, hay đẩy lên một mức trần ngày càng cao bất kể lợi ích giảm dần?**
   Hãy thảo luận xem thiết kế cổng hiện tại tạo ra động cơ đúng, bảo vệ trước thụt lùi, hay động cơ sai, áp lực đi lên không ngừng
   thưởng cho việc độn thêm kiểm thử giá trị thấp.

6. **Mã nào trong cơ sở mã của chúng ta bị loại khỏi phép tính độ bao phủ, và việc loại đó có chính đáng hay đang che giấu một khoảng
   trống kiểm thử thật?** Hãy xem lại cấu hình loại trừ thực tế của bạn; danh sách này thường lặng lẽ dài ra theo thời gian mà không
   ai xem xét lại liệu từng mục loại trừ có còn chính đáng hay không.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Các mục tiêu độ bao phủ chính thức thường không cần thiết ở giai đoạn sớm này; hãy dồn công sức viết kiểm thử thẳng
vào các đường đi mã rủi ro nhất, quan trọng nhất với kinh doanh (thường là logic thanh toán hoặc luồng công việc lõi) thay vì theo
đuổi một tỷ lệ phần trăm đồng loạt trên một cơ sở mã vẫn đang thay đổi nhanh và có thể sắp bị viết lại đáng kể.

**Doanh nghiệp nhỏ.** Hầu hết các nền tảng CI báo cáo độ bao phủ tự động với chi phí thiết lập tối thiểu; hãy dùng nó chủ yếu để phát
hiện mã quan trọng hoàn toàn chưa được kiểm thử hơn là chạy theo một tỷ lệ phần trăm mục tiêu cụ thể, và chỉ cân nhắc kiểm thử đột
biến khi bạn có đủ năng lực kỹ thuật để hành động theo những gì nó phát hiện.

**Doanh nghiệp lớn.** Các mục tiêu độ bao phủ đồng loạt trên toàn tổ chức là một sai lầm phổ biến và có hậu quả ở quy mô này, vì
chúng khuyến khích đúng kiểu lách mà chủ đề này mô tả, đồng thời trên hàng chục đội. Hãy thiết lập kỳ vọng độ bao phủ dựa trên rủi ro,
thay đổi theo mức độ quan trọng của dịch vụ, và đầu tư hạ tầng kiểm thử đột biến riêng cho các hệ thống rủi ro cao nhất.

**Chính phủ.** Yêu cầu độ bao phủ đôi khi xuất hiện trong tài liệu mua sắm hay tuân thủ như một đại diện thô, dễ nêu cho việc đảm bảo
chất lượng. Khi có thể, hãy ghép bất kỳ tỷ lệ phần trăm độ bao phủ nào được yêu cầu theo hợp đồng với một yêu cầu hiệu quả dựa trên
kiểm thử đột biến hoặc dựa trên lỗi, để động cơ khuyến khích trong hợp đồng không vô tình thưởng cho chính việc độn kiểm thử giá trị
thấp mà chủ đề này cảnh báo.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo của một nền tảng thương mại điện tử đã đặt yêu cầu độ bao phủ 95% toàn công ty cho mọi mã mới, áp
dụng như một cổng CI cứng. Một cuộc kiểm toán hai năm sau, được thúc đẩy bởi một loạt lỗi sản xuất trong mã được cho là đã kiểm thử
kỹ, phát hiện tỷ lệ giết đột biến dưới 40% trên phần lớn cơ sở mã: các đội đã viết những kiểm thử thực thi các đường đi mã mà không
khẳng định có ý nghĩa về hành vi của chúng, chỉ để thỏa cổng dưới áp lực thời hạn. Công ty thay yêu cầu độ bao phủ đồng loạt bằng
một chính sách phân tầng theo rủi ro: độ bao phủ nghiêm ngặt cộng kiểm thử đột biến bắt buộc trên ngưỡng giết 80% cho mã thanh toán
và xác thực, và một ngưỡng sàn nhẹ hơn nhiều cho công cụ nội bộ rủi ro thấp, điều này vừa giảm công sức kiểm thử lãng phí vừa cải
thiện đo được tỷ lệ lỗi ở các đường đi thực sự quan trọng.

**Chính phủ.** Hệ thống xét điều kiện hưởng trợ cấp của một cơ quan y tế công cộng đã bị yêu cầu theo hợp đồng phải duy trì độ bao
phủ kiểm thử 90% theo thỏa thuận với nhà cung cấp phát triển. Một cuộc rà soát sau sự cố, sau một lỗi tính toán điều kiện hưởng
đáng kể đã được phát hành dù yêu cầu độ bao phủ đã đạt, phát hiện hàm chịu trách nhiệm đã đạt độ bao phủ hoàn toàn nhờ các kiểm thử
gọi hàm với đầu vào hợp lệ nhưng không bao giờ kiểm thử điều kiện biên hay đầu vào không hợp lệ, chính xác là nơi lỗi xảy ra. Hợp
đồng nhà cung cấp được sửa đổi của cơ quan hiện yêu cầu một điểm kiểm thử đột biến được ghi chép cùng với độ bao phủ cho bất kỳ mã
tính toán điều kiện hưởng nào, đóng đúng khoảng trống đã cho phép việc kiểm thử tuân thủ nhưng kém hiệu quả thỏa mãn hợp đồng.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc ghép độ bao phủ với kiểm thử đột biến là phát hiện khoảng cách giữa chất lượng kiểm thử bề ngoài và thực tế trước
khi nó gây ra một lỗi sản xuất. Ví dụ thương mại điện tử ở trên cho thấy rõ mô hình này: một yêu cầu độ bao phủ đơn thuần đã tạo ra
cảm giác an toàn giả, cuối cùng bị một loạt lỗi phơi bày với chi phí lớn hơn nhiều so với khoản đầu tư kiểm thử đột biến vốn có thể
phát hiện khoảng trống sớm hơn.

Tổng chi phí sở hữu gồm chi phí tính toán của kiểm thử đột biến, vốn tốn kém hơn để chạy so với đo đạc độ bao phủ đơn giản và do đó
thường được dành cho mã đường đi quan trọng hơn là cả cơ sở mã, cộng thời gian kỹ thuật để diễn giải và hành động theo kết quả. Chi
phí đó đáng giá cụ thể cho mã rủi ro cao nhất, nơi cái giá của một khoảng trống không bị phát hiện trong hiệu quả kiểm thử là lớn nhất.

## Phản mẫu và cạm bẫy

- **Coi tỷ lệ phần trăm độ bao phủ như phán quyết chất lượng trực tiếp:** nó đo sự thực thi, không đo sự xác minh.
- **Viết kiểm thử chủ yếu để thỏa một cổng độ bao phủ:** tạo ra đúng kiểu lách ngưỡng giá trị thấp mà chủ đề 1.2 cảnh báo.
- **Tắt hoặc xóa kiểm thử thất bại thay vì sửa vấn đề gốc:** gỡ bỏ sự bảo vệ thật trong khi hầu như không ảnh hưởng con số báo cáo.
- **Áp một mục tiêu độ bao phủ đồng đều bất kể rủi ro của mã:** lãng phí công sức vào mã rủi ro thấp và đầu tư thiếu cho các đường đi
  thực sự quan trọng.
- **Để danh sách loại trừ lặng lẽ dài ra theo thời gian:** che giấu các khoảng trống kiểm thử thật sau một con số độ bao phủ chính
  xác về kỹ thuật nhưng gây hiểu lầm.
- **Theo đuổi trần độ bao phủ thay vì ngưỡng sàn độ bao phủ:** tạo áp lực đi lên không ngừng, thưởng cho việc độn kiểm thử hơn là
  xác minh thật.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Độ bao phủ không được đo, hoặc được đo không nhất quán, không có ngưỡng sàn, mục tiêu hay kiểm tra hiệu quả.
- **Cấp 2, Phát triển:** Có một mục tiêu độ bao phủ và được theo dõi, nhưng không có kiểm thử đột biến hay ưu tiên theo rủi ro để
  định hướng cách phân bổ công sức.
- **Cấp 3, Chuẩn hóa:** Ngưỡng sàn độ bao phủ được áp nhất quán trong CI, với ưu tiên theo rủi ro chỉ đạo nơi công sức độ bao phủ
  tập trung.
- **Cấp 4, Quản lý:** Kiểm thử đột biến chạy trên mã đường đi quan trọng, với một ngưỡng tỷ lệ giết được theo dõi phải đạt cùng với
  độ bao phủ, và danh sách loại trừ được kiểm toán định kỳ.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những lần giảm lỗi cụ thể truy được về việc ưu tiên dựa trên kiểm thử đột biến, và dữ
  liệu độ bao phủ cùng hiệu quả cùng trực tiếp định hướng các quyết định đầu tư kiểm thử.

## Ý tưởng để thảo luận

1. Tỷ lệ giết đột biến trên đường đi mã quan trọng nhất của chúng ta là bao nhiêu, và chúng ta có thực sự biết không?
2. Chúng ta đã bao giờ viết một kiểm thử giá trị thấp chỉ để thỏa một cổng độ bao phủ chưa?
3. Công sức độ bao phủ hiện tại của chúng ta tập trung nơi rủi ro cao nhất, hay dàn đều?
4. Mã nào hiện đang bị loại khỏi phép tính độ bao phủ, và việc loại đó còn chính đáng không?
5. Một khoản đầu tư kiểm thử đột biến cho hệ thống rủi ro cao nhất của chúng ta có đáng chi phí tính toán không?

## Những điểm chính cần nhớ

- Độ bao phủ kiểm thử đo **sự thực thi, không đo sự xác minh**; một dòng được bao phủ không cho biết nó có được kiểm tra có ý nghĩa
  hay không.
- Hãy ghép độ bao phủ với **kiểm thử đột biến** để xác minh rằng kiểm thử thực sự bắt được lỗi thật, không chỉ rằng chúng chạy mã.
- Hãy tập trung công sức kiểm thử vào **các đường đi quan trọng, rủi ro cao** thay vì theo đuổi độ bao phủ đồng đều trên cả cơ sở mã.
- Hãy dùng độ bao phủ như **ngưỡng sàn để bảo vệ trước thụt lùi**, không phải mức trần để tối đa hóa không ngừng.
- Hãy cảnh giác với các kiểu lách độ bao phủ cụ thể: **kiểm thử giá trị thấp, kiểm thử thất bại bị tắt, và danh sách loại trừ lặng
  lẽ dài ra**.

## Tài liệu tham khảo và đọc thêm

- *Working Effectively with Legacy Code*, của Michael Feathers (chiến lược độ bao phủ kiểm thử cho các cơ sở mã sẵn có, khó kiểm
  thử).
- Jia, Yue, và Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software
  Engineering* (2011): một khảo sát toàn diện về các kỹ thuật kiểm thử đột biến và hiệu quả của chúng.
- *xUnit Test Patterns*, của Gerard Meszaros (các mẫu thiết kế kiểm thử liên quan đến việc viết kiểm thử thực sự hiệu quả, không
  chỉ thỏa độ bao phủ).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (mối quan hệ giữa thực hành
  kiểm thử và hiệu suất phân phối).
