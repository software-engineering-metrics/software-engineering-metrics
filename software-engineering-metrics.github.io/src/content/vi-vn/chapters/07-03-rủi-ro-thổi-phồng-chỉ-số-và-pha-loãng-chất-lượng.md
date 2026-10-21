# 7.3 Rủi ro thổi phồng chỉ số và pha loãng chất lượng

## Tổng quan và động lực

Chủ đề này gọi tên, trực tiếp và cụ thể, hai kiểu thất bại mà chủ đề 7.1 đã cảnh báo toàn bộ khung của cuốn sách này phải đề phòng khi
phát triển có AI hỗ trợ trở thành thực hành tiêu chuẩn: **thổi phồng chỉ số (metric inflation)**, các con số tăng mà không có giá trị
thật tương ứng, và **pha loãng chất lượng (quality dilution)**, một sự xói mòn dần chất lượng mã vượt khả năng phát hiện hiện tại của
ngành qua các thực hành đánh giá và kiểm thử hiện có. Đây không phải những loại rủi ro mới mà cuốn sách này chưa gọi tên: thổi phồng chỉ
số là định luật Goodhart và lách bằng thay thế của chủ đề 1.2 áp dụng ở quy mô lớn, và pha loãng chất lượng là khoảng cách giữa độ bao
phủ và hiệu quả của chủ đề 4.2 cùng mối quan tâm lỗi lọt của chủ đề 5.1, cả hai đều được tăng cường. Điều mới là tốc độ và quy mô mà AI sinh
tạo có thể tạo ra đồng thời cả hai kiểu thất bại, nhanh hơn mức các rào chắn hiện có của hầu hết các tổ chức được thiết kế để bắt.

Cơ chế cụ thể mà chủ đề này quan tâm rất tinh vi: mã do AI tạo ra rất thường trông đúng. Nó tuân theo các thành ngữ quen thuộc, dùng tên
biến hợp lý, và qua được một lần đọc lướt đáng tin cậy hơn nhiều so với mã do người viết cẩu thả thực sự thường qua được, chính vì nó
được huấn luyện trên một kho mã khổng lồ trông đúng. Điều này khiến lỗi do AI tạo ra khó bị người đánh giá bắt hơn qua kiểu đánh giá khớp
mẫu, "cái này có trông đúng không" vốn bắt được nhiều lỗi do người đưa vào, vì phiên bản do AI tạo ra được tối ưu hóa cụ thể, theo
nghĩa thống kê, để trông đúng dù nó có thực sự đúng hay không.

Với các đội lớn, rủi ro của chủ đề này tích lũy theo quy mô theo cách đáng làm các tổ chức doanh nghiệp và chính phủ quan ngại: thổi phồng
chỉ số trên hàng chục đội cùng lúc có thể tạo ra một tín hiệu sai toàn tổ chức về năng suất được cải thiện, cần nhiều thời gian và phân
tích đáng kể để gỡ, đúng như ví dụ công nghệ tài chính của chủ đề 7.1 cho thấy. Sự pha loãng chất lượng vượt khả năng phát hiện còn
nghiêm trọng hơn trong các bối cảnh được quản lý, an toàn trọng yếu hay lòng tin công chúng, nơi cái giá của một lỗi không bị phát hiện
đến được production mang hệ quả vượt xa mối quan tâm kỹ thuật tức thời.

## Các nguyên tắc chính

- **Thổi phồng chỉ số và pha loãng chất lượng là các phiên bản được tăng cường của những rủi ro mà cuốn sách này đã gọi tên**, không
  phải những loại hoàn toàn mới; các rào chắn hiện có vẫn áp dụng, nhưng cần làm việc vất vả hơn.
- **Đặc tính "trông đúng" của mã do AI tạo ra khiến việc đánh giá khớp mẫu của con người khó bắt các lỗi tinh vi hơn một cách đặc thù.**
  Đây là một rủi ro riêng, khác với lỗi thông thường của con người.
- **Tốc độ của sự chuyển dịch này có thể vượt khả năng thích nghi rào chắn của một tổ chức**, tạo ra một cửa sổ phơi nhiễm thật, có giới
  hạn thời gian.
- **Các chỉ số chất lượng hiện có (Phần 4) vẫn có giá trị nhưng có thể cần hiệu chuẩn lại**, không phải thay thế, trước hồ sơ rủi ro mới
  này.
- **Bản thân năng lực phát hiện cần được đầu tư có chủ đích**, vì các thực hành đánh giá và kiểm thử mà cuốn sách này bàn được thiết kế
  trước khi rủi ro cụ thể này tồn tại ở quy mô này.

## Khuyến nghị

### Hiệu chuẩn lại ngưỡng tỷ lệ thay đổi thất bại và tỷ lệ lỗi lọt cho công việc dùng nhiều AI

Ở nơi một đội hay một vùng mã đã áp dụng sự hỗ trợ của AI nhiều, hãy áp dụng việc theo dõi gia quyền theo mức nghiêm trọng của chủ đề 2.4
và 5.1 với độ nhạy cao hơn, ít nhất cho đến khi tổ chức của bạn xây đủ bằng chứng (chủ đề 7.2) để biết mối quan hệ lịch sử giữa các chỉ
số này và rủi ro thật có còn nguyên không đổi cho riêng công việc có AI hỗ trợ không. Hãy coi việc hiệu chuẩn lại này là một tư thế tạm
thời, thu thập bằng chứng, không phải một giả định lâu dài, không được xem xét theo bất kỳ hướng nào.

### Đầu tư cụ thể vào năng lực phát hiện chống lại vấn đề "trông đúng"

Đánh giá mã truyền thống, vốn dựa nhiều vào khả năng nhận dạng mẫu của người đánh giá về cái trông đúng, bị yếu đi một cách đặc thù trước
mã do AI tạo ra trông hợp lý nhưng sai tinh vi. Hãy đầu tư tương ứng nhiều hơn vào các phương pháp phát hiện không dựa vào khớp mẫu thị
giác: [kiểm thử đột biến](https://en.wikipedia.org/wiki/Mutation_testing) (chủ đề 4.2), kiểm thử hành vi thật chứ không phải vẻ ngoài, và
kiểm thử dựa trên thuộc tính hay bất biến, xác minh tính đúng đắn logic thay vì vẻ hợp lý bề mặt, cả hai trở nên có giá trị hơn không
cân xứng chính vì sự chuyển dịch này.

### Để ý sự thổi phồng chỉ số trên toàn bộ đường ống phân phối, không chỉ ở điểm tạo mã

Sự thổi phồng chỉ số từ phát triển có AI hỗ trợ không giới hạn ở giai đoạn viết mã; nó có thể lan qua toàn bộ chuỗi thời gian chu kỳ
(chủ đề 2.6): một khối lượng pull request do AI tạo ra lớn hơn có thể thổi phồng các chỉ số thông lượng pull request (chủ đề 2.9) ngay
cả khi tín hiệu hữu ích mà chỉ số đó ban đầu được thiết kế để nắm bắt, thông lượng thật của đội, đi ngang hoặc thậm chí giảm khi gánh
nặng đánh giá và chi phí sửa chữa được tính đúng. Hãy kiểm toán toàn bộ bộ chỉ số của bạn để tìm mẫu lan truyền này, không chỉ các chỉ
số trực tiếp, hiển nhiên nhất liên quan đến AI.

### Xây một kế hoạch hiệu chuẩn lại tường minh, có giới hạn thời gian thay vì một tư thế nghi ngờ vĩnh viễn

Sự soi xét nâng cao mà chủ đề này khuyến nghị phù hợp trong giai đoạn áp dụng và bất định đang diễn ra, nhưng không nên trở thành một
loại thuế vĩnh viễn, không được xem xét đánh lên công việc có AI hỗ trợ vô thời hạn. Khi tổ chức của bạn xây bằng chứng thật qua kỷ luật
đo lường của chủ đề 7.2, hãy sửa ngưỡng và rào chắn dựa trên điều bằng chứng đó thực sự cho thấy, siết thêm ở nơi rủi ro được xác nhận,
nới ở nơi không, thay vì hoặc phớt lờ hoàn toàn rủi ro hoặc coi mọi đoạn mã có AI hỗ trợ bằng sự nghi ngờ vĩnh viễn, không phân biệt bất
kể bằng chứng đang tích lũy.

### Truyền đạt rủi ro này một cách minh bạch thay vì coi nó là lý do để chống lại việc áp dụng AI

Hãy định khung hướng dẫn của chủ đề này như quản lý rủi ro cho một năng lực mới thực sự giá trị, không phải một lập luận chống lại phát
triển có AI hỗ trợ nói chung. Một tổ chức truyền đạt rõ ràng những rủi ro cụ thể, có tên này và xây các rào chắn tương xứng chống lại
chúng, đúng như cuốn sách này khuyến nghị cho mọi chỉ số và kỹ thuật khác nó bàn, áp dụng sự hỗ trợ của AI an toàn hơn và bền vững hơn
một tổ chức hoặc phớt lờ rủi ro hoặc coi nó là lý do để chống lại hàng loạt một bộ công cụ thực sự hữu ích.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không hiệu chuẩn lại, coi công việc có AI hỗ trợ giống mã do người viết | Đơn giản, không đổi quy trình | Bỏ lỡ một hồ sơ rủi ro tăng cao cụ thể mà bằng chứng gợi ý |
| Sự soi xét nâng cao, vĩnh viễn, hàng loạt với toàn bộ mã có AI hỗ trợ | Tối đa hóa giảm rủi ro ngắn hạn | Một loại thuế không bền vững lên một năng lực thực sự giá trị; phớt lờ bằng chứng đang tích lũy |
| Hiệu chuẩn lại có giới hạn thời gian, dựa trên bằng chứng | Cân bằng quản lý rủi ro với việc áp dụng bền vững | Cần kỷ luật đo lường liên tục (chủ đề 7.2) để biết khi nào nới sự soi xét |
| Đầu tư vào các phương pháp phát hiện chống lại lỗi "trông đúng" | Xử lý trực tiếp, bền vững rủi ro mới cụ thể | Cần đầu tư ban đầu vào hạ tầng kiểm thử đột biến và dựa trên thuộc tính |

Sự căng thẳng trung tâm là **sự thận trọng so với tốc độ áp dụng**. Sự thận trọng quá mức, vĩnh viễn làm phí phần lớn giá trị thật của phát
triển có AI hỗ trợ; sự thận trọng không đủ có nguy cơ thổi phồng chỉ số và pha loãng chất lượng mà chủ đề này gọi tên, có thể ở quy mô
đáng kể trước khi bị phát hiện. Hãy giải quyết sự căng thẳng qua cách tiếp cận có giới hạn thời gian, dựa trên bằng chứng mà chủ đề này
khuyến nghị: soi xét nâng cao bây giờ, được hiệu chỉnh xuống hay lên khi bằng chứng thật từ kỷ luật đo lường của chủ đề 7.2 tích lũy, thay
vì hoặc một chính sách hàng loạt vĩnh viễn hoặc một giả định không được xem xét rằng không có gì thay đổi.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta đã hiệu chuẩn lại ngưỡng tỷ lệ thay đổi thất bại hay tỷ lệ lỗi lọt cho công việc dùng nhiều AI chưa, hay đang áp dụng các
   ngưỡng thời trước AI không đổi?** Nếu không đổi, hãy thảo luận liệu điều đó phản ánh một quyết định có chủ đích, dựa trên bằng chứng
   hay chỉ đơn giản là thiếu sự chú ý đến câu hỏi.

2. **Chúng ta có các phương pháp phát hiện, như kiểm thử đột biến, không dựa vào khớp mẫu thị giác của người đánh giá, hay quy trình đánh
   giá của chúng ta hoàn toàn phụ thuộc vào mắt người đánh giá xem mã có "trông đúng" không?** Đây là điểm dễ tổn thương cụ thể mà chủ
   đề này xác định; hãy đánh giá thành thật năng lực phát hiện hiện tại của bạn so với nó.

3. **Sự thổi phồng chỉ số có lan ra ngoài giai đoạn viết mã vào các chỉ số pull request hay triển khai của chúng ta không, và hiện nay
   chúng ta có nhận ra nếu nó đã lan không?** Hãy đi qua toàn bộ chuỗi thời gian chu kỳ của bạn để tìm mẫu lan truyền này, không chỉ điểm
   khởi nguồn hiển nhiên nhất.

4. **Sự soi xét nâng cao hiện tại của chúng ta với mã có AI hỗ trợ, nếu có, dựa trên bằng chứng tích lũy, hay là một mặc định vô thời hạn,
   không được xem xét chưa bao giờ được cân nhắc lại?** Hãy thảo luận cần tích lũy bằng chứng nào trước khi bạn cân nhắc nới hay siết
   thêm các rào chắn hiện tại.

5. **Chúng ta truyền đạt các rủi ro của chủ đề này nội bộ như thế nào: như lý do cho sự thận trọng và rào chắn tương xứng, hay như một lập
   luận ngầm chống lại việc áp dụng AI nói chung?** Hãy thành thật về cách cuộc trò chuyện này thực sự được đội của bạn đón nhận, vì một
   thông điệp bị nhận như sự chống đối hàng loạt hiếm khi tạo ra phản ứng tương xứng, dựa trên bằng chứng mà chủ đề này khuyến nghị.

6. **Tổ chức của chúng ta sẽ trông ra sao khi chỉ phát hiện, sau khi đã ở quy mô đáng kể, rằng cả thổi phồng chỉ số lẫn pha loãng chất
   lượng đã diễn ra đồng thời và không bị phát hiện?** Kịch bản cụ thể, hơi khó chịu này đáng được gọi tên tường minh như kiểu thất bại
   cụ thể mà các rào chắn của chủ đề này được xây để ngăn.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Áp dụng nhanh với năng lực đánh giá hạn chế khiến rủi ro của chủ đề này đặc biệt cấp tính với một đội nhỏ; vấn đề phát
hiện "trông đúng" khó bắt hơn với ít người đánh giá hơn, kém chuyên môn hơn. Hãy đầu tư sớm vào ít nhất kiểm thử đột biến nhẹ trên các
đường đi mã quan trọng nhất của bạn, dù độ bao phủ toàn diện chưa khả thi.

**Doanh nghiệp nhỏ.** Các quy trình hiệu chuẩn lại chính thức nhiều khả năng không cần thiết ở quy mô này, nhưng một nhận thức đơn giản,
tường minh rằng mã do AI tạo ra đáng được đọc hoài nghi hơn thường lệ một chút, chính vì nó có xu hướng trông đúng tự tin hơn thực tế,
không tốn gì và xử lý trực tiếp mối quan tâm cốt lõi của chủ đề này.

**Doanh nghiệp lớn.** Cả thổi phồng chỉ số lẫn pha loãng chất lượng đều tích lũy đáng kể theo quy mô, vì một tín hiệu sai hay một vấn đề
chất lượng không bị phát hiện trên hàng chục đội cùng lúc có hệ quả lớn hơn nhiều và khó gỡ hơn nhiều so với cùng vấn đề trên một đội đơn
lẻ. Hãy đầu tư có chủ đích vào nâng cấp năng lực phát hiện toàn tổ chức (hạ tầng kiểm thử đột biến, áp dụng kiểm thử dựa trên thuộc tính)
và vào kỷ luật hiệu chuẩn lại có giới hạn thời gian mà chủ đề này khuyến nghị, được theo dõi tập trung.

**Chính phủ.** Hệ quả của sự pha loãng chất lượng không bị phát hiện đặc biệt nghiêm trọng trong các bối cảnh được quản lý, an toàn trọng
yếu hay lòng tin công chúng thường gặp trong hệ thống chính phủ. Hãy áp dụng sự soi xét nâng cao, dựa trên bằng chứng riêng cho các thay
đổi có AI hỗ trợ trong các đường đi mã hệ quả cao (logic gia quyền phơi nhiễm-và-khả năng khai thác của chủ đề 6.4 áp dụng tương tự ở
đây), và chuẩn bị để chứng minh, với một kiểm toán viên hay cơ quan giám sát, chính xác năng lực phát hiện nào tồn tại chống lại rủi ro
cụ thể này.

## Ví dụ

**Doanh nghiệp lớn.** Đội kỹ thuật xử lý bồi thường của một công ty bảo hiểm áp dụng rộng rãi sự hỗ trợ lập trình của AI và, sáu tháng
sau, nhận thấy lỗi lọt tăng dần nhưng đo được, riêng ở logic điều kiện phức tạp, loại mã mà việc xử lý trường hợp biên sai tinh vi vừa dễ
nhất cho công cụ AI tạo ra một cách hợp lý vừa khó nhất cho người đánh giá bắt chỉ bằng kiểm tra. Một cuộc điều tra xác nhận mẫu hình
"trông đúng" mà chủ đề này mô tả: mã lỗi đã nhất quán dùng các mẫu thành ngữ, trông quen thuộc, qua được đánh giá mà không kích hoạt sự
soi xét mà một đoạn mã do người viết rõ ràng bất thường hay vụng về có thể nhận được. Phản ứng của đội nhắm kiểm thử đột biến riêng vào
logic điều kiện phức tạp trên toàn công ty, một phương pháp phát hiện chống lại vấn đề hợp lý bề mặt, và đo được sự giảm đáng kể ở nhóm
lỗi cụ thể này trong hai quý.

**Chính phủ.** Một cơ quan thuế thí điểm phát triển có AI hỗ trợ cho một nhóm con công việc bảo trì động cơ tính toán của mình đã xây
sẵn kỷ luật hiệu chuẩn lại có giới hạn thời gian mà chủ đề này khuyến nghị từ đầu, đặt một giai đoạn thu thập bằng chứng sáu tháng tường
minh với yêu cầu đánh giá nâng cao cho các thay đổi có AI hỗ trợ riêng với logic tính toán. Bằng chứng thu được cho thấy không có khác
biệt có ý nghĩa thống kê về tỷ lệ lỗi đối với các thay đổi hẹp, phạm vi rõ, nhưng xác nhận một rủi ro tăng cao cho các thay đổi có AI hỗ
trợ rộng hơn, quan trọng hơn về mặt kiến trúc. Chính sách kết quả của cơ quan đã nới sự soi xét nâng cao cho nhóm thay đổi hẹp trong khi
duy trì và thậm chí tăng cường nó cho các thay đổi quan trọng về kiến trúc, một kết quả tương xứng, dựa trên bằng chứng mà cả cực "không
hiệu chuẩn lại" lẫn cực "soi xét hàng loạt vĩnh viễn" đều không tạo ra.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc đề phòng thổi phồng chỉ số và pha loãng chất lượng một cách chủ đích là tránh được đúng kịch bản mà ví dụ công ty bảo
hiểm ở trên cho thấy: một vấn đề chất lượng không bị phát hiện, tích lũy dần tốn nhiều hơn nhiều để phát hiện và khắc phục sau sự việc
so với khoản đầu tư phát hiện, hạ tầng kiểm thử đột biến nhắm riêng vào mã rủi ro cao nhất, sẽ tốn nếu làm chủ động.

Tổng chi phí sở hữu gồm khoản đầu tư năng lực phát hiện mà chủ đề này khuyến nghị và kỷ luật liên tục của việc hiệu chuẩn lại dựa trên
bằng chứng thay vì một trong hai thái cực, nghi ngờ vĩnh viễn hoặc thiếu chú ý vĩnh viễn. Chi phí đó khiêm tốn và có giới hạn thời gian
so với rủi ro một vấn đề chất lượng đáng kể, ở quy mô lớn không bị phát hiện, chính vì nó được tạo ra, bởi bản chất cách các công cụ này
sinh mã, để trông đúng với các quy trình đánh giá mà tổ chức đã có sẵn.

## Phản mẫu và cạm bẫy

- **Áp dụng các ngưỡng và phương pháp phát hiện thời trước AI không đổi:** bỏ lỡ một hồ sơ rủi ro tăng cao cụ thể mà bằng chứng gợi ý.
- **Hoàn toàn dựa vào đánh giá khớp mẫu của con người với mã do AI tạo ra:** đặc biệt dễ tổn thương trước vấn đề "trông đúng" mà chủ
  đề này xác định.
- **Bỏ lỡ sự lan truyền thổi phồng chỉ số vượt ra ngoài điểm tạo mã:** một tín hiệu sai có thể lan qua toàn bộ đường ống phân phối mà
  không bị phát hiện.
- **Soi xét hàng loạt vĩnh viễn, không được xem xét mà không hiệu chuẩn lại dựa trên bằng chứng:** phí phần lớn giá trị thật của phát
  triển có AI hỗ trợ một cách không bền vững.
- **Truyền đạt các rủi ro của chủ đề này như sự chống đối hàng loạt với việc áp dụng AI thay vì quản lý rủi ro tương xứng:** làm suy
  yếu cả an toàn lẫn việc áp dụng.
- **Không đầu tư năng lực phát hiện nhắm riêng vào hồ sơ rủi ro mới này:** để tổ chức phụ thuộc vào các phương pháp đánh giá mà chủ đề
  này đã cho thấy bị yếu đi một cách đặc thù trước nó.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Không có nhận thức về rủi ro thổi phồng chỉ số hay pha loãng chất lượng đặc thù cho phát triển có AI hỗ trợ; các
  rào chắn và phương pháp phát hiện hiện có được áp dụng không đổi.
- **Cấp 2, Phát triển:** Có một số nhận thức, nhưng việc hiệu chuẩn lại là tùy hứng và chưa có đầu tư năng lực phát hiện đặc thù cho
  rủi ro này.
- **Cấp 3, Chuẩn hóa:** Các ngưỡng được hiệu chuẩn lại và các phương pháp phát hiện chống lại vấn đề "trông đúng" (kiểm thử đột biến và
  dựa trên thuộc tính) được áp dụng nhất quán cho công việc có AI hỗ trợ.
- **Cấp 4, Quản lý:** Một kỷ luật hiệu chuẩn lại có giới hạn thời gian, dựa trên bằng chứng chủ động điều chỉnh sự soi xét theo dữ liệu
  tích lũy, và sự lan truyền thổi phồng chỉ số được theo dõi tích cực trên toàn đường ống.
- **Cấp 5, Điều phối:** Tổ chức có một tư thế quản lý rủi ro trưởng thành, tương xứng, liên tục tiến hóa đối với phát triển có AI hỗ trợ,
  được truyền đạt minh bạch, không phí giá trị của nó qua sự thận trọng quá mức cũng không để tổ chức phơi nhiễm trước sự pha loãng chất
  lượng không bị phát hiện.

## Ý tưởng để thảo luận

1. Chúng ta đã thấy bằng chứng sớm nào về mẫu lỗi "trông đúng" trong mã có AI hỗ trợ của chính mình chưa?
2. Phương pháp phát hiện nào sẽ xử lý trực tiếp nhất rủi ro cụ thể của chủ đề này cho chúng ta?
3. Sự thổi phồng chỉ số từ sự hỗ trợ của AI có lan vào bất kỳ chỉ số đường ống hạ nguồn nào của chúng ta chưa?
4. Sự soi xét hiện tại của chúng ta với mã có AI hỗ trợ dựa trên bằng chứng hay là một mặc định không được xem xét?
5. Hướng dẫn của chủ đề này thực sự được đội chúng ta đón nhận ra sao: như quản lý rủi ro hay như sự chống đối việc áp dụng AI?

## Những điểm chính cần nhớ

- Thổi phồng chỉ số và pha loãng chất lượng là **các phiên bản được tăng cường của những rủi ro mà cuốn sách này đã gọi tên**, đòi hỏi
  các rào chắn hiện có làm việc vất vả hơn, không phải những khung hoàn toàn mới.
- Xu hướng **"trông đúng"** của mã do AI tạo ra làm yếu đi một cách đặc thù việc đánh giá mã khớp mẫu truyền thống của con người.
- Hãy đầu tư vào **các phương pháp phát hiện chống lại vẻ hợp lý bề mặt**, đặc biệt là kiểm thử đột biến và kiểm thử dựa trên thuộc tính.
- Hãy áp dụng tư thế **hiệu chuẩn lại có giới hạn thời gian, dựa trên bằng chứng**, không phải nghi ngờ hàng loạt vĩnh viễn hay tin
  tưởng vĩnh viễn không được xem xét.
- **Hãy truyền đạt rủi ro này như quản lý rủi ro tương xứng**, không phải một lập luận chống lại việc áp dụng AI, để hỗ trợ cả an toàn
  lẫn việc sử dụng bền vững.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (kỷ luật tốc độ-và-ổn định ghép
  đôi mà chủ đề này áp dụng cho một loại rủi ro mới).
- Jia, Yue, và Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering*
  (2011): phương pháp phát hiện mà chủ đề này lập luận trở nên có giá trị hơn không cân xứng.
- Nghiên cứu của GitHub về lập trình cặp với AI và năng suất lập trình viên (dữ liệu ngành về kết quả và rủi ro của phát triển có AI hỗ
  trợ).
- *The Tyranny of Metrics*, của Jerry Z. Muller (sự ám ảnh chỉ số và rủi ro bị lách, liên quan trực tiếp đến mối quan tâm thổi phồng chỉ
  số mà chủ đề này gọi tên).
