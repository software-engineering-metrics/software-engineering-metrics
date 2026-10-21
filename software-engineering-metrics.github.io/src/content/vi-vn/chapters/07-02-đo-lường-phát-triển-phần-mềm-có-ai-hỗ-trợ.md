# 7.2 Đo lường phát triển phần mềm có AI hỗ trợ

## Tổng quan và động lực

Chủ đề 7.1 đã xác lập vì sao một số chỉ số hiện có không còn đo đáng tin điều chúng từng đo dưới phát triển có AI hỗ trợ. Chủ đề này nói
về việc đo gì thay thế: làm sao biết, bằng bằng chứng thật chứ không phải ấn tượng hay quảng cáo của nhà cung cấp, liệu sự hỗ trợ lập
trình của AI có thực sự giúp ích tổ chức của bạn không, và giúp bao nhiêu. Đây là một câu hỏi thực sự quan trọng với hệ quả ngân sách
thật, giấy phép công cụ AI là một chi phí thật, liên tục, kỷ luật kinh tế đơn vị của chủ đề 5.4 áp dụng trực tiếp, và một tổ chức không
thể trả lời bằng bằng chứng hoặc đang trả quá nhiều cho một công cụ không giúp ích hoặc đầu tư thiếu vào một công cụ thực sự có ích.

Cách tiếp cận của chủ đề này dựa trực tiếp vào nguyên tắc kết quả hơn đầu ra của chủ đề 1.3, giờ áp dụng riêng cho đánh giá công cụ AI.
Cách ngây thơ, phổ biến nhất đo phát triển có AI hỗ trợ bằng khối lượng đầu ra, số dòng mã được tạo, số gợi ý được chấp nhận, thời gian
tiết kiệm trên mỗi tác vụ do lập trình viên tự báo cáo, chính xác những chỉ số mà chủ đề 7.1 cảnh báo là dễ bị ảnh hưởng nhất bởi sự
chuyển dịch này. Cách chặt chẽ hơn mà chủ đề này khuyến nghị đo kết quả: sự hỗ trợ của AI có thực sự giảm thời gian chu kỳ mà không làm
suy giảm chất lượng không, nó có giảm thời gian dành cho công việc lặp lại, giá trị thật sự thấp, giải phóng năng lực cho công việc giá
trị cao hơn không, và nó có tác động đo được đến các kết quả kinh doanh và sản phẩm từ Phần 5 không.

Với các đội lớn, đo đúng điều này quyết định các quyết định đầu tư công cụ AI được đưa ra dựa trên bằng chứng hay dựa trên tuyên bố của
nhà cung cấp và đà của tổ chức. Các tổ chức doanh nghiệp đàm phán hợp đồng công cụ AI quy mô lớn cần bằng chứng thật về giá trị để biện
minh khoản chi và so sánh các công cụ cạnh tranh một cách công bằng; các tổ chức chính phủ, thường chịu sự soi xét đặc biệt về chi tiêu
công nghệ, cần một phương pháp đánh giá chặt chẽ, bảo vệ được trước khi cam kết ngân sách công cho việc áp dụng công cụ AI ở quy mô lớn.

## Các nguyên tắc chính

- **Hãy đo sự hỗ trợ của AI theo kết quả, không theo khối lượng đầu ra hay thống kê sử dụng do nhà cung cấp báo cáo.** Kỷ luật của chủ đề
  1.3 áp dụng đầy đủ ở đây.
- **Hãy dùng một [nhóm so sánh](https://en.wikipedia.org/wiki/Treatment_and_control_groups) thật bất cứ khi nào khả thi**, không chỉ
  một phép so sánh trước-sau có thể bị nhiễu bởi một đường cơ sở toàn ngành đang tăng.
- **Thời gian tiết kiệm do tự báo cáo là tín hiệu yếu khi đứng riêng.** Hãy ghép chúng với dữ liệu thời gian chu kỳ và chất lượng khách
  quan.
- **Hãy đo toàn bộ chi phí, gồm cả thời gian đánh giá và sửa chữa**, không chỉ tốc độ tạo ra.
- **Các tác vụ khác nhau và các kỹ sư khác nhau có thể thấy giá trị hỗ trợ của AI rất khác nhau.** Hãy tránh một con số gộp toàn tổ chức
  duy nhất che giấu sự khác biệt này.

## Khuyến nghị

### Xây một phép so sánh thật, không chỉ một ảnh chụp trước-sau

Khi khả thi, hãy so sánh kết quả giữa một nhóm dùng sự hỗ trợ của AI và một nhóm tương đương không dùng, trong cùng giai đoạn, thay vì
chỉ so sánh các con số trước-sau của chính tổ chức bạn, vốn không phân biệt được tác động của sự hỗ trợ AI với bất kỳ thay đổi đồng thời
nào khác (lời cảnh báo biến gây nhiễu của chủ đề 1.6 áp dụng trực tiếp). Khi một nhóm so sánh thật không thực tế, ít nhất hãy so sánh
với một đường cơ sở lịch sử dài hơn (biểu đồ kiểm soát, theo chủ đề 1.6) thay vì một ảnh chụp trước-sau đơn lẻ dễ bị hồi quy về trung
bình hay các thay đổi đồng thời không liên quan.

### Đo thời gian chu kỳ và chất lượng cùng nhau, không bao giờ chỉ riêng tuyên bố tốc độ của sự hỗ trợ AI

Hãy áp dụng trực tiếp kỷ luật của chủ đề 2.6 và 2.10: theo dõi xem công việc có AI hỗ trợ có di chuyển nhanh hơn qua các giai đoạn thời
gian chu kỳ không, và đồng thời liệu tỷ lệ thay đổi thất bại hay tỷ lệ lỗi lọt (chủ đề 5.1) cho công việc đó có dịch chuyển sai hướng
không. Một mức tăng năng suất thật cho thấy thời gian chu kỳ nhanh hơn với chất lượng ổn định hoặc cải thiện; một mức tăng giả cho thấy
thời gian chu kỳ nhanh hơn với chất lượng suy giảm, đúng sự đánh đổi mà chủ đề 7.1 cảnh báo, được phát hiện ở đây qua cùng kỷ luật chỉ
số ghép đôi mà cuốn sách này áp dụng xuyên suốt.

### Đưa thời gian đánh giá và sửa chữa vào toàn bộ kế toán chi phí

Mã do AI tạo ra nhanh hơn để tạo nhưng chậm hơn để đánh giá, hoặc cần sửa chữa và làm lại nhiều hơn sau khi tạo ban đầu, có thể không cho
cải thiện thời gian chu kỳ ròng nào khi đo toàn bộ đường ống, dù bước tạo mã ban đầu cảm giác nhanh hơn rõ rệt với từng kỹ sư. Hãy đo
toàn bộ chuỗi thời gian chu kỳ (chủ đề 2.6), không chỉ giai đoạn viết mã, để nắm bắt điều này một cách trung thực thay vì ghi công cho sự
hỗ trợ của AI dựa trên cảm giác tốc độ có thật nhưng chưa đầy đủ.

### Coi thời gian tiết kiệm tự báo cáo là giả thuyết khởi đầu, không phải kết luận

Lời tự báo cáo của lập trình viên "việc này đã tiết kiệm cho tôi một giờ" hữu ích như một tín hiệu ban đầu và như bối cảnh định tính
(cách tiếp cận kết hợp định lượng-định tính của chủ đề 5.3 cũng áp dụng ở đây), nhưng nó chịu cùng các thiên lệch hồi tưởng và mong muốn
xã hội mà chủ đề 1.5 cảnh báo với mọi dữ liệu tự báo cáo, và nó không nói gì về chi phí đánh giá hay sửa chữa ở hạ nguồn. Hãy dùng tự báo
cáo để tạo giả thuyết về nơi sự hỗ trợ của AI giúp ích nhiều nhất, rồi xác nhận các giả thuyết đó so với dữ liệu thời gian chu kỳ và chất
lượng khách quan trước khi rút ra kết luận chắc chắn.

### Phân đoạn phép đo theo loại tác vụ và tránh một con số gộp duy nhất

Sự hỗ trợ lập trình của AI nhiều khả năng đem lại giá trị rất khác nhau cho các tác vụ khuôn mẫu, đã hiểu rõ so với giải quyết vấn đề
thực sự mới mẻ, phức tạp. Hãy đo và báo cáo theo nhóm tác vụ thay vì một trung bình gộp toàn tổ chức duy nhất, thứ có thể che giấu việc
sự hỗ trợ đang đem lại giá trị mạnh ở một nhóm trong khi đem lại ít hoặc thậm chí giá trị âm ở nhóm khác, thông tin mà một con số gộp
sẽ che khuất hoàn toàn.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ thời gian tiết kiệm tự báo cáo | Nhanh, dễ thu thập | Tín hiệu yếu; chịu thiên lệch; bỏ qua chi phí đánh giá ở hạ nguồn |
| Chỉ so sánh trước-sau | Đơn giản để thiết lập | Bị nhiễu bởi mọi thay đổi đồng thời khác hay xu hướng toàn ngành |
| Nhóm so sánh thật | Bằng chứng mạnh nhất, bảo vệ được nhất | Khó sắp xếp hơn; có thể không khả thi với một đợt triển khai toàn bộ |
| Đo kết quả phân đoạn theo tác vụ | Cho thấy giá trị thực sự tập trung ở đâu | Cần theo dõi và phân loại chi tiết hơn |

Sự căng thẳng trung tâm là **độ chặt chẽ của phép đo so với tính khả thi thực tế**. Một nhóm so sánh thật, có kiểm soát là bằng chứng mạnh
nhất nhưng thường không thực tế một khi công cụ đã được triển khai toàn tổ chức mà không giữ lại nhóm đối chứng; ấn tượng tự báo cáo
nhanh và dễ nhưng yếu khi đứng riêng. Hãy giải quyết sự căng thẳng bằng cách dùng thiết kế so sánh mạnh nhất mà đợt triển khai thực tế
của bạn cho phép, một nhóm đối chứng thật trong giai đoạn thí điểm sớm nếu có thể, một biểu đồ kiểm soát đường cơ sở lịch sử nếu không,
và coi tự báo cáo là công cụ tạo giả thuyết thay vì lời cuối cùng, bất kể bạn cuối cùng dùng thiết kế so sánh nào.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta đã có, hoặc vẫn có thể dựng, một nhóm so sánh thật để đánh giá việc áp dụng công cụ AI không, hay đang hoàn toàn dựa vào
   phép so sánh trước-sau?** Nếu một nhóm so sánh thật chưa bao giờ được thiết lập, hãy thảo luận liệu một biểu đồ kiểm soát đường cơ sở
   lịch sử có còn cung cấp được một phương án thay thế khá chặt chẽ không.

2. **Chúng ta đã đo thời gian chu kỳ và chất lượng cùng nhau cho công việc có AI hỗ trợ, hay chỉ có một tuyên bố tốc độ mà không có kiểm
   tra chất lượng tương ứng?** Hãy lấy bất kỳ dữ liệu nào hiện có và kiểm tra sự ghép đôi cụ thể này; nếu không có, khoảng trống đó là bản
   sửa ưu tiên cao nhất của chủ đề này.

3. **Phép đo thời gian chu kỳ của chúng ta cho công việc có AI hỗ trợ có gồm thời gian đánh giá và sửa chữa, hay chỉ bước tạo ban đầu?**
   Một tuyên bố tốc độ chỉ dựa trên thời gian tạo, bỏ qua chi phí đánh giá ở hạ nguồn, có nguy cơ rơi vào bẫy kế toán không đầy đủ mà chủ
   đề này cảnh báo trực tiếp.

4. **Chúng ta đã thu thập những tuyên bố tiết kiệm thời gian tự báo cáo nào, và đã xác nhận cái nào so với dữ liệu khách quan chưa?** Hãy
   chọn một tuyên bố cụ thể, hay được lặp lại và kiểm tra xem dữ liệu khách quan có thực sự ủng hộ không.

5. **Phép đo hiện tại của chúng ta có gộp mọi loại tác vụ thành một con số, hay chúng ta biết nhóm công việc cụ thể nào thấy giá trị hỗ
   trợ của AI mạnh nhất?** Nếu gộp, hãy thảo luận bảng phân tích phân đoạn theo tác vụ có thể cho thấy điều gì mà con số hiện tại che giấu.

6. **Nếu hôm nay chúng ta phải biện hộ cho khoản đầu tư công cụ AI trước một bên liên quan tài chính hoài nghi, bằng bằng chứng chứ không
   phải ấn tượng, chúng ta thực sự có thể cho họ xem gì?** Phép thử cụ thể này làm lộ ra khoảng cách giữa điều tổ chức của bạn hiện tin về
   giá trị hỗ trợ của AI và điều nó thực sự chứng minh được bằng bằng chứng.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Một nghiên cứu nhóm so sánh chính thức thường không thực tế ở quy mô nhỏ, nhưng ngay cả một cái nhìn trước-sau đơn giản,
trung thực về thời gian chu kỳ và tỷ lệ lỗi, thay vì chỉ dựa vào việc công việc cảm giác nhanh hơn bao nhiêu, cho một tín hiệu đáng tin
hơn hẳn so với riêng ấn tượng.

**Doanh nghiệp nhỏ.** Hãy tập trung công sức đo lường vào nhóm tác vụ giá trị cao nhất, lặp lại nhiều nhất của bạn trước, nơi giá trị hỗ
trợ của AI nhiều khả năng rõ ràng và đo được nhất, thay vì cố đánh giá toàn diện mọi loại công việc mà đội nhỏ của bạn làm.

**Doanh nghiệp lớn.** Một phép so sánh thật, có kiểm soát trong giai đoạn thí điểm sớm, trước khi triển khai toàn tổ chức, thường đạt được
ở đây và đáng công sức sắp xếp có chủ đích, vì nó tạo ra bằng chứng bảo vệ được hơn nhiều cho quyết định đầu tư công cụ quy mô lớn thường
theo sau một thí điểm thành công.

**Chính phủ.** Các quyết định chi tiêu công nghệ công, gồm cả mua sắm công cụ AI, thường chịu sự soi xét đặc biệt và có thể đòi hỏi biện
minh chi phí-lợi ích chính thức (chủ đề 5.5). Hãy đưa kỷ luật đo lường mà chủ đề này khuyến nghị vào mọi giai đoạn thí điểm ngay từ đầu,
vì một phương pháp đánh giá chặt chẽ, được ghi chép củng cố đáng kể luận cứ tài trợ hay mua sắm cuối cùng.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty phần mềm triển khai một trợ lý lập trình AI cho một nửa số đội kỹ thuật của mình như một thí điểm có
chủ đích, giữ nửa còn lại làm nhóm so sánh trong một quý trước khi triển khai đầy đủ. Nhóm thí điểm cho thấy cải thiện thời gian chu kỳ
thật, có ý nghĩa thống kê cho các tác vụ được xác định rõ, nhiều khuôn mẫu, nhưng không cho thấy cải thiện đo được, và số vòng lặp đánh
giá (chủ đề 2.9) tăng nhẹ, cho công việc kiến trúc phức tạp, mới mẻ. Phát hiện phân đoạn theo tác vụ này, chỉ thấy được nhờ thiết kế so
sánh thật và bảng phân tích theo nhóm tác vụ, đã khiến công ty nhắm thông điệp triển khai và đào tạo về sự hỗ trợ của AI cụ thể vào các
nhóm tác vụ mà nó chứng minh được là có ích, thay vì trình bày nó như một mức tăng năng suất đồng đều trên mọi công việc.

**Chính phủ.** Một cơ quan liên bang thí điểm hỗ trợ lập trình bằng AI cho một nhóm con các đội trong chương trình hiện đại hóa của mình
ban đầu dựa vào các khảo sát thời gian tiết kiệm tự báo cáo, cho thấy các phản hồi nhiệt tình, tích cực đồng đều. Một phân tích khách quan
tiếp theo, so sánh thời gian chu kỳ và tỷ lệ lỗi lọt giữa các đội thí điểm và một nhóm không thí điểm tương đương làm việc trên các thành
phần hệ thống tương tự, thấy cải thiện thời gian chu kỳ khách quan là thật nhưng nhỏ hơn đáng kể so với các ước tính tự báo cáo gợi ý,
và xác định một mức tăng khiêm tốn nhưng có thật về thời gian đánh giá đã bù trừ một phần mức tăng tốc độ tạo ra, một phát hiện mà riêng
dữ liệu tự báo cáo đã hoàn toàn bỏ lỡ. Bức tranh chính xác hơn, dựa trên bằng chứng này đã trực tiếp thông tin cho một luận cứ kinh doanh
khiêm tốn hơn và bảo vệ được hơn cho việc tiếp tục và mở rộng mua sắm công cụ.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo phát triển có AI hỗ trợ chặt chẽ là các quyết định đầu tư tự tin, dựa trên bằng chứng: một tổ chức biết chính xác nơi
sự hỗ trợ của AI thực sự giúp ích có thể đầu tư mở rộng nó ở đó và tránh trả quá nhiều cho giấy phép ở các nhóm tác vụ nơi nó đem lại ít
giá trị, đúng hiểu biết phân đoạn theo tác vụ mà ví dụ công ty phần mềm ở trên minh họa. Điều này nối trực tiếp với kinh tế đơn vị của
chủ đề 5.4 và kỷ luật ROI của chủ đề 5.5, vì chi phí công cụ AI, thường được cấp phép theo ghế, cần cùng cách xử lý chi phí-lợi ích chặt
chẽ mà cuốn sách này áp dụng cho mọi khoản đầu tư kỹ thuật lớn khác.

Tổng chi phí sở hữu là công sức phân tích để xây các phép so sánh thật, đo toàn bộ thời gian chu kỳ gồm đánh giá và sửa chữa, và phân
đoạn theo loại tác vụ, nhiều việc hơn là chấp nhận nguyên giá trị thống kê sử dụng do nhà cung cấp báo cáo hay ấn tượng tự báo cáo. Công
sức đó được biện minh trực tiếp bởi quy mô chi phí giấy phép công cụ AI trên một tổ chức lớn và rủi ro của một cam kết đắt đỏ, toàn tổ
chức, thiếu bằng chứng, dựa trên ấn tượng thay vì dữ liệu.

## Phản mẫu và cạm bẫy

- **Đo sự hỗ trợ của AI chỉ bằng khối lượng đầu ra hay thống kê sử dụng của nhà cung cấp:** lặp lại trực tiếp lời cảnh báo trung tâm của
  chủ đề 7.1.
- **Hoàn toàn dựa vào thời gian tiết kiệm tự báo cáo:** một tín hiệu yếu dễ chịu thiên lệch, và mù với chi phí đánh giá và sửa chữa ở hạ
  nguồn.
- **Chỉ đo bước tốc độ tạo ra, bỏ qua toàn bộ thời gian chu kỳ:** tạo ra một kế toán không đầy đủ, có thể gây hiểu lầm về tác động năng
  suất thực tế.
- **Báo cáo một con số gộp toàn tổ chức duy nhất:** che giấu sự khác biệt thật về giá trị giữa các nhóm tác vụ khác nhau.
- **Không có nhóm so sánh hay đường cơ sở lịch sử:** không phân biệt được tác động thực của sự hỗ trợ AI với bất kỳ thay đổi đồng thời
  nào khác.
- **Coi một kết quả khảo sát tự báo cáo nhiệt tình là bằng chứng đủ cho một quyết định đầu tư quy mô lớn:** có nguy cơ rơi vào chính
  khoảng trống mà ví dụ cơ quan liên bang ở trên chỉ phát hiện sau khi xây một phép so sánh chặt chẽ hơn.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Giá trị phát triển có AI hỗ trợ được đánh giá, nếu có, chỉ qua ấn tượng tự báo cáo và thống kê sử dụng của nhà cung
  cấp.
- **Cấp 2, Phát triển:** Có một số dữ liệu thời gian chu kỳ hoặc chất lượng, nhưng không có nhóm so sánh thật hay đường cơ sở lịch sử và
  không có phân tích phân đoạn theo tác vụ.
- **Cấp 3, Chuẩn hóa:** Một thiết kế so sánh thật (nhóm đối chứng hoặc đường cơ sở lịch sử) với đo thời gian chu kỳ và chất lượng ghép
  đôi được áp dụng nhất quán, phân đoạn theo loại tác vụ.
- **Cấp 4, Quản lý:** Kế toán thời gian chu kỳ đầy đủ, gồm thời gian đánh giá và sửa chữa, được theo dõi; các tuyên bố tự báo cáo được
  xác nhận có hệ thống so với dữ liệu khách quan.
- **Cấp 5, Điều phối:** Tổ chức có hiểu biết trưởng thành, dựa trên bằng chứng về chính xác nơi sự hỗ trợ của AI thực sự giúp ích, thông
  tin cho việc triển khai có mục tiêu, đầu tư đào tạo và các quyết định mua sắm với ROI được chứng minh, bảo vệ được.

## Ý tưởng để thảo luận

1. Chúng ta có phép so sánh thật nào, nếu có, cho việc áp dụng công cụ AI hiện tại của mình?
2. Chúng ta đã đo thời gian chu kỳ và chất lượng cùng nhau, hay chỉ một tuyên bố tốc độ?
3. Tuyên bố hỗ trợ AI tự báo cáo nào chúng ta nên xác nhận so với dữ liệu khách quan?
4. Nhóm tác vụ cụ thể nào cho thấy bằng chứng mạnh nhất về giá trị hỗ trợ thật của AI với chúng ta?
5. Hiện nay chúng ta có thể biện hộ cho khoản đầu tư công cụ AI của mình trước một bên liên quan tài chính hoài nghi bằng bằng chứng
   không?

## Những điểm chính cần nhớ

- Hãy đo phát triển có AI hỗ trợ theo **kết quả**, không theo khối lượng đầu ra hay thống kê sử dụng do nhà cung cấp báo cáo.
- Hãy dùng **nhóm so sánh thật hoặc đường cơ sở lịch sử**, không chỉ một ảnh chụp trước-sau dễ bị nhiễu.
- Hãy đo **thời gian chu kỳ và chất lượng cùng nhau**, gồm toàn bộ đường ống, thời gian đánh giá và sửa chữa, không chỉ tốc độ tạo ra.
- Hãy coi **thời gian tiết kiệm tự báo cáo là một giả thuyết**, không phải kết luận, và xác nhận nó so với dữ liệu khách quan.
- **Hãy phân đoạn theo loại tác vụ**; một con số gộp duy nhất che giấu giá trị thực sự tập trung ở đâu và không ở đâu.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (kỷ luật đo lường dựa trên kết
  quả mà chủ đề này áp dụng cho đánh giá công cụ AI).
- Nghiên cứu của GitHub về lập trình cặp với AI và năng suất lập trình viên (nghiên cứu thực nghiệm quy mô ngành về kết quả của phát
  triển có AI hỗ trợ).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (kỷ luật đo lường đa chiều mà chủ đề này áp dụng cho một loại công cụ mới cụ thể).
- *How to Measure Anything*, của Douglas W. Hubbard (xây các phép so sánh bảo vệ được và định lượng giá trị dưới sự bất định thật).
