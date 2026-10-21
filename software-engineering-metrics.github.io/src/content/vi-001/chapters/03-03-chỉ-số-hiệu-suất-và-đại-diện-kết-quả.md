# 3.3 Chỉ số hiệu suất và đại diện kết quả

## Tổng quan và động lực

**Hiệu suất (performance)**, chữ P trong SPACE (chủ đề 3.1), là chiều thường bị nhầm với hoạt động nhất, và sự nhầm lẫn
đó chính là điều chủ đề này tồn tại để ngăn ngừa. Hiệu suất hỏi liệu công việc của một kỹ sư hay một đội có thực sự tạo
ra một [kết quả](https://en.wikipedia.org/wiki/Outcome_(probability)) tốt hay không: một tính năng đã phát hành và hoạt
động, một hệ thống giữ được độ tin cậy, một thay đổi làm dịch chuyển một chỉ số kinh doanh hay người dùng theo đúng
hướng. Hoạt động (chủ đề 3.4) chỉ hỏi có bao nhiêu chuyển động đã xảy ra. Một đội có thể rất hoạt động mà hiệu suất
thấp, liên tục phát hành các thay đổi nhỏ không bao giờ làm dịch chuyển một kết quả nào, và điều ngược lại cũng có thể
xảy ra: một đội hiếm khi phát hành nhưng các thay đổi của họ đáp đúng chỗ một cách đáng tin.

Khó khăn của chiều này là kết quả thường không quy cho một người, thậm chí một đội đơn lẻ; kết quả phần mềm nảy sinh từ
cộng tác, từ các quyết định được đưa ra nhiều tháng trước bởi những người từ đó đã chuyển sang dự án khác, từ điều kiện
thị trường mà không kỹ sư nào kiểm soát. Các nhà nghiên cứu SPACE đã nói rõ điều này: hiệu suất nên được đo ở cấp hệ
thống hay đội bằng nhiều tín hiệu hội tụ, không bị rút gọn thành một con số duy nhất và chắc chắn không được quy cho
một kỹ sư cá nhân một cách cô lập. Chủ đề này nghiêm túc với hướng dẫn đó và coi việc quy hiệu suất cho cá nhân là một
cái bẫy cần chủ động tránh, không phải một lối tắt để đi khi tiện.

Với các đội lớn, làm đúng đo lường hiệu suất là điều phân biệt một chương trình chỉ số thực sự cải thiện kết quả với một
chương trình chỉ thưởng cho sự bận rộn nhìn thấy được. Các tổ chức doanh nghiệp so sánh hiệu suất qua nhiều đội cần các
tín hiệu chống lách bằng khối lượng đầu ra thô; các tổ chức chính phủ biện minh đầu tư công nghệ với các cơ quan giám sát
cần chứng minh rằng nỗ lực kỹ thuật tạo ra kết quả thật, không chỉ các sản phẩm được giao, chính là nguyên tắc kết quả-
trước-đầu-ra của chủ đề 1.3 áp dụng cho chiều cụ thể này.

## Các nguyên tắc chính

- **Hiệu suất đo liệu công việc có tạo ra kết quả tốt không, không phải có bao nhiêu công việc đã xảy ra.** Đây là sự
  phân biệt cốt lõi với chiều hoạt động.
- **Dùng nhiều tín hiệu hội tụ, không bao giờ một điểm hiệu suất duy nhất.** Không đại diện đơn lẻ nào đủ đáng tin để
  đứng một mình.
- **Đo ở cấp đội hoặc hệ thống.** Việc quy kết quả cho cá nhân thường không đáng tin và mời gọi đúng kiểu lách mà cuốn
  sách này cảnh báo xuyên suốt.
- **Chất lượng là một phần của hiệu suất, không phải mối quan tâm tách biệt.** Công việc đã phát hành nhưng làm hỏng thứ
  khác thì không thực sự hoạt động tốt.
- **Một tín hiệu hiệu suất không gắn với quyết định nào thì chỉ là đồ trang trí,** đúng theo nguyên tắc chung của chủ
  đề 1.1 áp dụng cho chiều này.

## Khuyến nghị

### Kết hợp vài tín hiệu hội tụ thay vì một điểm hiệu suất

Hãy lấy bằng chứng hiệu suất từ nhiều nguồn: tỷ lệ thay đổi thất bại (chủ đề 2.10) và tỷ lệ lỗi lọt (chủ đề 5.1) cho
chất lượng, các kết quả triển khai gắn với mức độ chấp nhận tính năng thực (chủ đề 5.2) cho việc công việc có quan trọng
không, và đánh giá định tính từ đồng nghiệp hay quản lý về đóng góp của đội cho các mục tiêu chiến lược để có bối cảnh
mà một chỉ số thuần túy không nắm bắt được. Không cái nào trong số này đáng tin khi đứng riêng; cùng nhau, khi chúng hội
tụ về cùng một kết luận, chúng đáng tin hơn nhiều so với bất kỳ con số đơn lẻ nào.

### Đo ở cấp đội, cưỡng lại việc quy cho cá nhân

Kết quả phần mềm hiếm khi là sản phẩm của công việc một người; chúng nảy sinh từ các quyết định thiết kế, phản hồi đánh
giá, công việc trước đó của những người có thể đã rời đội, và cộng tác xuyên ranh giới. Quy một kết quả cho một kỹ sư đơn
lẻ thường là sự chính xác giả bỏ qua thực tế này và tạo ra khuyến khích mạnh để cá nhân bảo vệ công trạng thay vì cộng tác
tự do, đúng loại méo mó khuyến khích mà chủ đề 1.2 cảnh báo.

### Đưa chất lượng thẳng vào định nghĩa của hiệu suất

Một tính năng phát hành đúng hạn nhưng gây ra một làn sóng sự cố production không hoạt động tốt, dù một cách nhìn ngây thơ
chỉ-đầu-ra sẽ tính nó là đã giao. Hãy xây tỷ lệ thay đổi thất bại, tỷ lệ lỗi lọt và dữ liệu sự cố sau phát hành trực tiếp
vào cách bạn đánh giá hiệu suất, thay vì coi chất lượng là một mối quan tâm tách rời, rời rạc chỉ được đo ở Phần 4 và
Phần 6 của cuốn sách này.

### Dùng dữ liệu hiệu suất để thông tin cho quyết định đầu tư và quy trình, không phải xếp hạng cá nhân

Cách dùng hiệu quả của dữ liệu hiệu suất là quyết định nơi đầu tư thêm (một đội liên tục giao kết quả mạnh xứng đáng nhận
thêm nguồn lực và quyền tự chủ) và nơi cần điều tra (một đội có công việc liên tục không đáp đúng chỗ xứng đáng được giúp
đỡ, không phải bị đổ lỗi, theo cách định khung chẩn đoán của chủ đề 1.1). Xếp hạng cá nhân hoặc các đội cạnh tranh với
nhau trên dữ liệu hiệu suất mời gọi đúng sự lách và tổn hại tinh thần mà cuốn sách này cảnh báo và hiếm khi tạo ra kết quả
tốt hơn cách dùng chẩn đoán.

### Trung thực về giới hạn quy kết, đặc biệt với các đội nền tảng và hỗ trợ

Các đội xây hạ tầng dùng chung, công cụ nội bộ, hay năng lực nền tảng (chủ đề kỹ thuật nền tảng trong cuốn sách anh em
`software-engineering-guide` bao quát trực tiếp điều này) thường có đóng góp cho kết quả cách xa một vài bước so với bất kỳ
chỉ số hướng khách hàng đơn lẻ nào. Hãy đo hiệu suất của các đội này qua tác động của họ lên các đội họ hỗ trợ, mức độ chấp
nhận nền tảng của họ, sự giảm ma sát do các đội dùng báo cáo, thay vì ép một chỉ số kết quả trực tiếp không vừa vào công
việc vốn dĩ gián tiếp.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Một điểm hiệu suất duy nhất cho mỗi đội | Đơn giản để trình bày và so sánh | Chính xác giả; giấu tín hiệu nền tảng nào thực sự thúc đẩy điểm |
| Nhiều tín hiệu hội tụ | Đáng tin hơn, chống lách một chỉ số | Khó tóm tắt thành một con số; cần nhiều bối cảnh hơn để diễn giải |
| Đo hiệu suất cấp đội | Khớp với cách kết quả phần mềm thực sự nảy sinh | Không trả lời trực tiếp được các câu hỏi về đóng góp cá nhân |
| Quy hiệu suất cấp cá nhân | Có cảm giác hành động được trực tiếp hơn cho đánh giá | Thường là chính xác giả; rủi ro lách và bảo vệ công trạng mạnh |

Mâu thuẫn trung tâm là **độ chính xác so với sự trung thực**. Một con số hiệu suất duy nhất cho mỗi đội, hoặc tệ hơn, cho
mỗi cá nhân, dễ so sánh và xếp hạng, nhưng độ chính xác đó thường là giả, giấu sự không chắc chắn thật về quy kết và chất
lượng sau một con số trông gọn gàng. Hãy giải quyết bằng cách chấp nhận một bức tranh đa tín hiệu kém gọn là bức tranh
trung thực, và cưỡng lại áp lực từ lãnh đạo hay quy trình đánh giá hiệu suất muốn thu nó lại thành một điểm duy nhất, chính
xác giả.

## Câu hỏi để thảo luận với đội của bạn

1. **Việc đo hiệu suất hiện tại của chúng ta có kết hợp nhiều tín hiệu hội tụ, hay dựa vào một con số duy nhất có cảm giác
   chính xác hơn thực tế?** Hãy kiểm toán bất cứ thứ gì bạn hiện gọi là "chỉ số hiệu suất" và kiểm tra có bao nhiêu tín hiệu
   hội tụ, độc lập thực sự nuôi nó.

2. **Chúng ta đã bao giờ quy hiệu suất của một đội hay một cá nhân mà không tính đến tính chất cộng tác, xuyên đội của cách
   kết quả thực sự xảy ra chưa?** Hãy chọn một câu chuyện thành công gần đây và lần xem bao nhiêu phần của nó phụ thuộc vào
   con người, quyết định hay công việc trước đó ngoài đội hay cá nhân được ghi công.

3. **Việc đo hiệu suất của chúng ta có gồm chất lượng, hay chỉ tốc độ phân phối và khối lượng đầu ra?** Một tính năng đã
   phát hành sau đó gây ra sự cố production đáng kể không nên được tính là hiệu suất cao; hãy kiểm tra xem phép đo hiện tại
   của bạn có thực sự bắt được trường hợp này không.

4. **Chúng ta đo hiệu suất của các đội nền tảng hay hỗ trợ, nơi đóng góp cho kết quả là gián tiếp, như thế nào?** Nếu câu trả
   lời trung thực là "chúng ta không đo tốt", khoảng trống đó đáng được gọi tên và giải quyết trực tiếp thay vì để các đội đó
   thực tế không được đo hoặc bị đo bất công theo các chỉ số kết quả hướng khách hàng không phù hợp với công việc của họ.

5. **Dữ liệu hiệu suất đã bao giờ được dùng để xếp hạng cá nhân cạnh tranh với nhau, chính thức hay không chính thức chưa?**
   Sự trôi này, tương tự rủi ro dữ liệu hài lòng ở chủ đề 3.2, làm tổn hại cả tính trung thực của dữ liệu lẫn sự sẵn lòng cộng
   tác cởi mở của đội.

6. **Khi các tín hiệu hội tụ của chúng ta bất đồng, tốc độ phân phối cao nhưng tỷ lệ lỗi tăng chẳng hạn, chúng ta kết luận gì,
   và quy trình của chúng ta có xử lý tốt sự bất đồng đó không?** Sự bất đồng giữa các tín hiệu tự nó là thông tin có giá trị;
   hãy bàn xem đội của bạn hiện coi nó là nhiễu để bỏ qua hay một phát hiện thực sự đáng điều tra.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Hiệu suất thường nhìn thấy trực tiếp: tính năng có hoạt động không, khách hàng có chấp nhận không, chỉ số có
dịch chuyển không. Đo lường đa tín hiệu chính thức thường không cần thiết ở quy mô này; rủi ro thay vào đó là quy thành công
hay thất bại quá nhanh cho một người trong một đội nhỏ cộng tác chặt, chuyển động nhanh, nơi công trạng và trách nhiệm hiếm
khi thuộc về chỉ một cá nhân.

**Doanh nghiệp nhỏ.** Hãy kết hợp bất kỳ dữ liệu phân phối và chất lượng nào bạn đã có (chủ đề 2.10, chủ đề 5.1) với trò chuyện
trực tiếp, trung thực về việc công việc gần đây có thực sự giúp ích cho doanh nghiệp không, thay vì xây đo đạc đa tín hiệu chính
thức mà bạn không đủ năng lực duy trì.

**Doanh nghiệp lớn.** Đây là nơi kỷ luật đo lường cấp đội, đa tín hiệu xứng đáng khoản đầu tư, vì áp lực rút gọn hiệu suất
thành một con số so sánh được qua hàng chục đội mạnh nhất ở đây, và thiệt hại từ sự chính xác giả cộng dồn qua mọi quyết định
nguồn lực của cả tổ chức. Hãy cưỡng lại áp lực đó một cách tường minh và xây lập luận đa tín hiệu cho vì sao điều đó quan trọng.

**Chính phủ.** Chứng minh rằng đầu tư kỹ thuật tạo ra kết quả thật, không chỉ các sản phẩm được giao, thường là câu hỏi trung
tâm mà một cơ quan giám sát đặt ra. Đo lường hiệu suất đa tín hiệu, gắn tường minh với các chỉ số kết quả (chủ đề 5.3) thay vì
các đại diện chỉ-phân-phối, cho một câu trả lời mạnh hơn, bảo vệ được hơn nhiều so với riêng một số đếm hoạt động hay phân
phối.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo của một công ty công nghệ bán lẻ đã xếp hạng không chính thức các đội kỹ thuật theo số story
point hoàn thành mỗi sprint, coi đây là đại diện hiệu suất. Sau khi áp dụng cách tiếp cận đa tín hiệu, kết hợp dữ liệu phân
phối, tỷ lệ thay đổi thất bại và mức độ chấp nhận tính năng sau phát hành, ban lãnh đạo thấy rằng đội có tỷ lệ hoàn thành story
point cao nhất lại có tỷ lệ chấp nhận tính năng thấp nhất công ty: họ phát hành nhanh nhưng xây những thứ khách hàng không dùng.
Phân bổ lại các ưu tiên lộ trình của đội đó dựa trên bức tranh hiệu suất đầy đủ hơn, thay vì bảng xếp hạng một con số gây hiểu
lầm, đã chuyển hướng năng lực kỹ thuật đáng kể sang công việc có tác động cao hơn trong một quý.

**Chính phủ.** Chương trình kỹ thuật của một cơ quan thuế quốc gia cần chứng minh với một ủy ban giám sát rằng một khoản đầu
tư hệ thống lớn đã cải thiện hiệu suất, không chỉ giao phạm vi đã ký hợp đồng. Thay vì chỉ báo cáo hoàn thành story point hay
cột mốc, chương trình trình bày một bộ tín hiệu hội tụ: tỷ lệ lỗi xử lý giảm, thời gian xử lý trung vị giảm, và tỷ lệ hoàn
thành tự phục vụ thành công tăng, tất cả gắn với các thành phần hệ thống cụ thể đã giao. Bản trình bày đa tín hiệu, gắn với kết
quả đã thỏa mãn sự soi xét của ủy ban theo cách mà một báo cáo "giao đúng hạn" đơn giản từ một chương trình trước đã không làm
được năm trước.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo hiệu suất qua các tín hiệu hội tụ, gắn với kết quả thay vì một con số chính xác giả là các quyết định nguồn
lực tốt hơn: một tổ chức thấy được công việc của đội nào thực sự làm dịch chuyển kết quả có thể đầu tư thêm ở nơi quan trọng và
điều tra ở nơi không, thay vì thưởng cho đội nào tình cờ trông bận nhất. Ví dụ bán lẻ ở trên là điển hình: một bảng xếp hạng một
con số gây hiểu lầm đã hướng sự chú ý đầu tư ra xa nơi nó thực sự sẽ giúp ích.

Tổng chi phí sở hữu cao hơn cách tiếp cận một chỉ số, vì nó đòi hỏi kết hợp dữ liệu từ nhiều nguồn (phân phối, chất lượng, kết
quả) và cưỡng lại áp lực tổ chức muốn thu bức tranh về một con số so sánh được. Chi phí đó đáng bỏ ra vì phương án thay thế, một
điểm duy nhất chính xác giả, chủ động đánh lạc hướng các quyết định nguồn lực mà dữ liệu hiệu suất được kỳ vọng thông tin cho.

## Phản mẫu và cạm bẫy

- **Nhầm hoạt động với hiệu suất:** lỗi phổ biến nhất mà chiều này được thiết kế riêng để ngăn.
- **Quy hiệu suất cho cá nhân đối với các kết quả cộng tác, xuyên đội:** thường là chính xác giả làm nản lòng cộng tác.
- **Loại chất lượng khỏi định nghĩa của hiệu suất:** thưởng cho công việc đã phát hành nhưng làm hỏng thứ khác.
- **Ép một chỉ số kết quả trực tiếp lên các đội nền tảng hay hỗ trợ:** đo sai thứ cho công việc vốn dĩ gián tiếp.
- **Thu nhiều tín hiệu hội tụ trở lại thành một con số chính xác giả dưới áp lực tổ chức:** mất đi sự trung thực mà cách tiếp
  cận đa tín hiệu được xây để mang lại.
- **Dùng dữ liệu hiệu suất để xếp hạng cá nhân cạnh tranh:** làm tổn hại cả tính trung thực của dữ liệu lẫn cộng tác của đội.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Hiệu suất bị lẫn với hoạt động hoặc khối lượng đầu ra, đo bằng một con số duy nhất, chưa được xem xét.
- **Mức 2, Phát triển:** Một số tín hiệu chất lượng được xét cạnh đầu ra, nhưng không có cách tiếp cận đa tín hiệu nhất quán và
  việc quy cho cá nhân vẫn xảy ra không chính thức.
- **Mức 3, Chuẩn hóa:** Hiệu suất được đo ở cấp đội bằng nhiều tín hiệu hội tụ gồm chất lượng, nhất quán trên toàn tổ chức.
- **Mức 4, Quản lý:** Sự bất đồng giữa các tín hiệu hội tụ được điều tra chủ động; các đội nền tảng và hỗ trợ có các thước đo hiệu
  suất gián tiếp phù hợp với công việc thực của họ.
- **Mức 5, Điều phối:** Dữ liệu hiệu suất trực tiếp thông tin cho các quyết định nguồn lực và đầu tư, và tổ chức có thể chỉ ra các
  quyết định phân bổ lại cụ thể mà một cái nhìn đa tín hiệu cho phép và một cái nhìn một con số sẽ bỏ lỡ.

## Ý tưởng để thảo luận

1. Con số đơn lẻ nào chúng ta đang dùng làm đại diện hiệu suất mà chúng ta nên loại bỏ để thay bằng một bộ hội tụ?
2. Chúng ta đã bao giờ ghi công một kết quả cho sai đội hay sai người vì việc quy kết không rõ chưa?
3. Hiện chúng ta đo hiệu suất của một đội nền tảng hay hỗ trợ như thế nào?
4. Sẽ ra sao nếu các tín hiệu hội tụ của chúng ta bất đồng với nhau vào quý sau?
5. Ở đâu một bảng xếp hạng story point hay số lượng phân phối đã chuyển hướng sai sự chú ý đầu tư của chúng ta?

## Điểm chính cần nhớ

- Hiệu suất đo liệu công việc có tạo ra một **kết quả tốt** không, không phải có bao nhiêu chuyển động đã xảy ra; đừng nhầm nó với
  hoạt động (chủ đề 3.4).
- Dùng **nhiều tín hiệu hội tụ**, không bao giờ một con số hiệu suất duy nhất, và đề phòng sự chính xác giả.
- Đo ở **cấp đội hoặc hệ thống**; việc quy kết quả cho cá nhân thường không đáng tin và làm tổn hại cộng tác.
- **Chất lượng là một phần của hiệu suất**, không phải mối quan tâm tách rời, rời rạc.
- Hãy cho các đội nền tảng và hỗ trợ **các thước đo gián tiếp phù hợp** thay vì ép một chỉ số kết quả trực tiếp không vừa vào công
  việc của họ.

## Tài liệu tham khảo và đọc thêm

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, và Jenna Butler, "The SPACE of
  Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble và Gene Kim (đo lường hiệu suất dựa trên
  kết quả).
- *Team Topologies*, của Matthew Skelton và Manuel Pais (cấu trúc đội nền tảng và hỗ trợ và cách đo đóng góp của họ).
- *Measuring and Managing Performance in Organizations*, của Robert D. Austin (rủi ro của các chỉ số hiệu suất chính xác giả).
