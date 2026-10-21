# 6.1 Chỉ báo mức dịch vụ, mục tiêu mức dịch vụ và ngân sách lỗi

## Tổng quan và động lực

**[Kỹ thuật độ tin cậy trang web](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, kỷ luật do Google đi tiên phong
và được ghi lại trong cuốn *Site Reliability Engineering*, đóng góp một vốn từ mà chủ đề này dựa trực tiếp vào: một **chỉ báo mức dịch
vụ (service level indicator, SLI)** là một tín hiệu đo trực tiếp về sức khỏe của một dịch vụ, độ trễ yêu cầu, tỷ lệ lỗi, tính sẵn sàng.
Một **mục tiêu mức dịch vụ (service level objective, SLO)** là khoảng mục tiêu cho chỉ báo đó, chẳng hạn 99,9% yêu cầu thành công trong
200 mili giây. Và một **ngân sách lỗi (error budget)** là phần thiếu hụt được phép, 0,1% yêu cầu được phép thất bại, được coi không phải
là một khiếm khuyết cần loại bỏ mà là một nguồn lực có thể chi tiêu, dùng có chủ đích để nhận rủi ro: giao một thay đổi rủi ro, chạy một
thử nghiệm, hay đơn giản là chấp nhận rằng độ tin cậy hoàn hảo vừa không đạt được vừa, quá một điểm nhất định, không đáng cái giá của nó.

Ý tưởng cuối này, ngân sách lỗi như một nguồn lực chi tiêu được thay vì một con số cần giảm về không, là khái niệm quan trọng nhất của
chủ đề này và có thể nói của cả phần này. Nó giải quyết một căng thẳng đeo bám nhiều tổ chức: kỹ thuật muốn giao tính năng và nhận những
rủi ro hợp lý; vận hành muốn ổn định tối đa. Không có một ngân sách lỗi chung, được định lượng, điều này trở thành một cuộc thương lượng
không dứt, đầy màu sắc chính trị. Có nó, điều này trở thành một quy tắc khách quan, đơn giản: chi tiêu thoải mái khi ngân sách còn,
chậm lại và ưu tiên công việc ổn định một cách tự động khi nó cạn. Điều này biến một bất đồng triết lý thành một bất đồng số học.

Với các đội lớn, SLO và ngân sách lỗi là thứ khiến độ tin cậy đo được và thương lượng được thay vì một tuyệt đối không đạt được, không
nói ra mà mọi đội lặng lẽ không đáp ứng trong khi cảm thấy tội lỗi mơ hồ. Các tổ chức doanh nghiệp dùng SLO để đặt kỳ vọng rõ ràng, có
tính hợp đồng giữa các đội và với khách hàng; các tổ chức chính phủ vận hành hạ tầng công quan trọng dùng chúng để đặt các mục tiêu độ
tin cậy bảo vệ được, biện minh công khai được thay vì một chuẩn mực hoàn hảo bất khả mà không hệ thống thật nào duy trì được.

## Các nguyên tắc chính

- **Độ tin cậy 100% là mục tiêu sai cho hầu như mọi hệ thống.** Nó thường không đạt được, và theo đuổi nó quá một điểm nhất định chủ
  động đánh đổi tốc độ lấy lợi ích người dùng không có ý nghĩa.
- **Một SLO nên phản ánh điều người dùng thực sự nhận thấy và quan tâm**, không phải một con số tròn tùy ý được chọn vì nghe có vẻ trấn
  an.
- **Ngân sách lỗi biến độ tin cậy thành một nguồn lực chi tiêu được**, cho cả kỹ thuật và vận hành một quy tắc khách quan, chung về lúc
  nào giao nhanh và lúc nào chậm lại.
- **SLI phải được đo từ trải nghiệm thực tế của người dùng** bất cứ khi nào có thể, không chỉ từ sức khỏe tự báo cáo của một hệ thống
  nội bộ.
- **Việc cạn ngân sách lỗi kích hoạt một phản ứng định trước, đã thỏa thuận**, không phải một cuộc tranh cãi tùy hứng mỗi lần nó xảy ra.

## Khuyến nghị

### Chọn các SLI phản ánh trải nghiệm thật của người dùng

Hãy chọn các chỉ báo được đo càng gần trải nghiệm người dùng thực tế càng tốt: tỷ lệ thành công và độ trễ của yêu cầu đo tại biên hoặc
bộ cân bằng tải, không chỉ các kiểm tra sức khỏe dịch vụ nội bộ có thể báo "khỏe" trong khi người dùng gặp vấn đề thật. Một SLI đo thứ
mà người dùng không bao giờ thực sự nhận thấy, một thành phần nội bộ hoạt động về mặt kỹ thuật trong khi yêu cầu tổng thể vẫn thất bại,
là đang đo sai thứ dù dễ cài đặt đến đâu.

### Đặt mục tiêu SLO dựa trên điều người dùng thực sự cần, không phải một con số tròn tùy ý

Hãy cưỡng lại phản xạ đặt một mục tiêu như "99,99% thời gian hoạt động" đơn giản vì nghe có vẻ chặt chẽ ấn tượng. Thay vào đó, hãy
nghiên cứu mức độ tin cậy nào người dùng thực sự nhận thấy và quan tâm, dựa trên dữ liệu sự cố lịch sử, nghiên cứu người dùng và chi
phí đã được chứng minh để đạt mỗi bước tăng độ tin cậy thêm, vì đi từ 99,9% lên 99,99% thường tốn công sức kỹ thuật hơn nhiều so với đi
từ 99% lên 99,9%, cho lợi ích người dùng nhận thấy được giảm dần và cuối cùng không đáng kể.

### Coi ngân sách lỗi là nguồn lực chi tiêu được với phản ứng định trước khi cạn

Hãy tính ngân sách lỗi trực tiếp từ SLO (mục tiêu tính sẵn sàng 99,9% trong 30 ngày cho phép khoảng 43 phút ngừng hoạt động) và theo
dõi chi tiêu so với nó liên tục. Hãy thỏa thuận, từ trước và trước bất kỳ sự cố cụ thể nào, điều gì xảy ra khi ngân sách cạn: một chính
sách phổ biến, hiệu quả là công việc tính năng tạm dừng và ưu tiên của đội chuyển tự động sang công việc độ tin cậy cho đến khi ngân sách
hồi phục. Quy tắc định trước này loại bỏ nhu cầu tranh luận lại sự đánh đổi dưới áp lực trong từng sự cố riêng lẻ.

### Dùng ngân sách lỗi để đưa ra các quyết định rủi ro có chủ đích, có hiểu biết

Một ngân sách lỗi lành mạnh, chưa dùng không phải thứ để tích trữ; nó là sự cho phép nhận những rủi ro hợp lý, giao một thay đổi có rủi
ro cao hơn nhưng chấp nhận được, chạy một thử nghiệm kỹ thuật hỗn loạn (chủ đề kỹ thuật hỗn loạn của cuốn `software-engineering-guide`
chị em bàn trực tiếp điều này), hay chấp nhận một thay đổi kiến trúc rủi ro hơn, vì ngân sách tồn tại chính là để được chi tiêu một cách
có chủ đích chứ không phải giữ nguyên không đụng tới. Một ngân sách lỗi không bao giờ được chi gợi ý hoặc một đội quá thận trọng, hoặc
một SLO đặt quá lỏng so với độ tin cậy thực tế đạt được, cả hai đều đáng điều tra.

### Xem lại và sửa SLO định kỳ, dựa trên bằng chứng, không phải quán tính

Một SLO được đặt từ nhiều năm trước có thể không còn phản ánh kỳ vọng người dùng, kiến trúc hệ thống hay ưu tiên kinh doanh hiện tại.
Hãy xem lại SLO theo nhịp đều đặn, kiểm tra độ tin cậy đạt được trong lịch sử, phản hồi người dùng và liệu mục tiêu có còn đại diện cho
một điểm đánh đổi có ý nghĩa hay hoặc là một mục tiêu dễ đạt có thể siết chặt để cho phép nhiều tốc độ hơn ở nơi khác, hoặc là một mục
tiêu phi thực tế mà đội thực chất đã từ bỏ việc đáp ứng.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không có SLO chính thức (ngầm hiểu "tin cậy hết mức có thể") | Không tốn chi phí thiết lập | Thương lượng không dứt, thiếu cơ sở giữa tốc độ và ổn định; không có quy tắc chung |
| SLO rất cao, mang tính khát vọng (99,99%+) | Báo hiệu sự nghiêm túc về độ tin cậy | Thường là chi phí không cần thiết; lợi ích giảm dần quá mức người dùng thực sự nhận thấy |
| SLO dựa trên bằng chứng, gắn với trải nghiệm người dùng | Phản ánh giá trị thật; bảo vệ được và đạt được | Cần dữ liệu và phân tích thật để đặt đúng |
| Ngân sách lỗi với phản ứng định trước khi cạn | Loại bỏ thương lượng tùy hứng; ra quyết định khách quan, nhanh | Cần sự đồng thuận tổ chức và kỷ luật để thực sự tôn trọng quy tắc định trước |

Sự căng thẳng trung tâm là **khát vọng so với tính đạt được**. Một SLO cao, mang tính khát vọng cảm giác như báo hiệu sự nghiêm túc về
chất lượng, nhưng theo đuổi độ tin cậy quá mức người dùng thực sự nhận thấy đánh đổi tốc độ thật lấy lợi ích không có thật, và một mục
tiêu phi thực tế mà đội không bao giờ đạt dạy mọi người thôi coi trọng SLO hoàn toàn. Hãy giải quyết sự căng thẳng bằng cách đặt nền SLO
trên bằng chứng thực, người dùng nhận thấy gì, hệ thống đã đạt được gì trong lịch sử, mỗi bước tăng thêm tốn bao nhiêu, thay vì trên khát
vọng hay mong muốn trông chặt chẽ trên bảng điểm.

## Câu hỏi để thảo luận với đội của bạn

1. **SLO hiện tại của chúng ta có dựa trên bằng chứng về điều người dùng thực sự nhận thấy, hay được đặt theo khát vọng vì một con số cao
   cảm giác nghiêm túc thích hợp?** Hãy truy nguồn gốc mục tiêu hiện tại của bạn, nếu có thể, và đánh giá thành thật liệu nó phản ánh
   nghiên cứu người dùng thật hay chỉ trực giác kỹ thuật.

2. **Chúng ta có phản ứng định trước, đã thỏa thuận khi ngân sách lỗi cạn, hay sự đánh đổi bị tranh luận lại mỗi lần nó xảy ra?** Nếu
   câu trả lời thành thật là vế sau, khoảng trống đó đáng được đóng trước khi sự cố kế tiếp buộc cuộc tranh cãi diễn ra dưới áp lực.

3. **Ngân sách lỗi của chúng ta có bao giờ thực sự được chi tiêu có chủ đích, cho một thay đổi rủi ro đã tính toán hay một thử nghiệm,
   hay nó chỉ bị tiêu hao một cách vô tình qua các sự cố?** Một ngân sách không bao giờ được chi chủ đích có thể cho thấy một đội quá
   thận trọng, bỏ lỡ những cơ hội chính đáng mà ngân sách tồn tại để cho phép.

4. **SLI của chúng ta được đo từ trải nghiệm người dùng thật, hay từ sức khỏe hệ thống nội bộ có thể không phản ánh điều người dùng thực
   sự gặp?** Hãy kiểm tra hệ thống đo đạc hiện tại của bạn theo sự phân biệt cụ thể này; đó là một khoảng trống phổ biến kể cả trong các
   chương trình độ tin cậy trưởng thành.

5. **Lần cuối chúng ta xem lại SLO so với bằng chứng hiện tại là khi nào, và có điều gì thay đổi, kỳ vọng người dùng, kiến trúc hệ thống,
   ưu tiên kinh doanh, biện minh cho việc sửa nó không?** Nếu bạn không nhớ có lần xem lại gần đây nào, bản thân sự vắng mặt đó đáng
   được thảo luận.

6. **Chúng ta sẽ tốn bao nhiêu công sức kỹ thuật để nâng SLO hiện tại lên thêm một "số chín" độ tin cậy, và chi phí đó có được biện minh
   bởi lợi ích người dùng thật nào không?** Khung chi phí-lợi ích cụ thể này giúp đặt nền sự căng thẳng khát vọng-so-với-tính-đạt-được
   trên các con số thật thay vì sở thích trừu tượng.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** SLO chính thức thường không cần thiết rất sớm, khi đội có thể ứng phó trực tiếp, không chính thức với các vấn đề độ
tin cậy. Hãy áp dụng ít nhất một SLO sơ bộ, không chính thức khi bạn có khách hàng trả tiền thật phụ thuộc vào thời gian hoạt động, vì
kỷ luật của một mục tiêu tường minh, dù được theo dõi lỏng lẻo, giúp ưu tiên công việc độ tin cậy trước áp lực tính năng sớm hơn hầu hết
các công ty non trẻ nghĩ đến.

**Doanh nghiệp nhỏ.** Hầu hết các nền tảng lưu trữ và quan sát hiện đại báo cáo dữ liệu thời gian hoạt động và độ trễ cơ bản với thiết
lập tối thiểu; hãy dùng nó để đặt một SLO đơn giản, đạt được thay vì một SLO khát vọng mà bạn không thể thực tế theo dõi hay hành động
với năng lực vận hành hạn chế.

**Doanh nghiệp lớn.** SLO ở quy mô này thường làm nền cho các thỏa thuận mức dịch vụ có tính hợp đồng với hệ quả tài chính thật, khiến
việc đặt mục tiêu dựa trên bằng chứng và quản lý ngân sách lỗi có kỷ luật đặc biệt quan trọng. Hãy đầu tư vào các SLI gắn với trải
nghiệm người dùng thật thay vì các kiểm tra sức khỏe nội bộ tiện lợi, và thiết lập chính sách phản ứng khi cạn định trước một cách chính
thức, với sự ủng hộ của lãnh đạo, trước khi cần đến nó dưới áp lực.

**Chính phủ.** Mục tiêu độ tin cậy khu vực công cho hạ tầng quan trọng đôi khi mang sức nặng pháp lý hay quy định, và một mục tiêu phi
thực tế, không đạt được bị phát hiện trong một cuộc kiểm toán hay một sự cố công khai làm tổn hại uy tín thể chế đáng kể. Hãy đặt mục
tiêu dựa trên nhu cầu thật, được ghi chép của người dùng và sứ mệnh, và minh bạch công khai về sự đánh đổi có chủ đích mà một ngân sách
lỗi đại diện, thay vì ngụ ý một chuẩn mực hoàn hảo không đạt được.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty lưu trữ đám mây trong nhiều năm nhắm mục tiêu "thời gian hoạt động tối đa" mà không có SLO chính thức,
dẫn đến căng thẳng kinh niên, chưa giải quyết giữa đội sản phẩm (muốn giao tính năng nhanh) và đội hạ tầng (muốn thận trọng tối đa), bị
tranh luận lại từ đầu trong mọi cuộc họp lập kế hoạch phát hành. Việc áp dụng một SLO tính sẵn sàng chính thức 99,95% với ngân sách lỗi
tường minh và chính sách định trước, công việc tính năng tạm dừng tự động khi ngân sách cạn, đã giải quyết hoàn toàn cuộc thương lượng
lặp lại: cả hai đội nhìn cùng một con số và đồng ý cùng một quy tắc, và công ty báo cáo số tính năng được giao tăng đo được trong các giai
đoạn ngân sách lành mạnh cùng với một sự chậm lại có chủ đích, đo được trong hai giai đoạn trong năm sau đó khi ngân sách thực sự cạn,
đúng như chính sách dự định.

**Chính phủ.** Hệ thống cảnh báo công cộng của một cơ quan khí tượng quốc gia đã vận hành nhiều năm theo kỳ vọng không chính thức là "luôn
sẵn sàng", không có mục tiêu được ghi chép và áp lực vận hành đáng kể, chưa được giải quyết lên đội trực ca đang cố đáp ứng một chuẩn mực
không nói ra, thực chất bất khả. Một SLO chính thức mới được áp dụng, tính sẵn sàng 99,9% kèm lời giải thích ngân sách lỗi công khai được
truyền đạt rõ ràng, đã cho đội vận hành sự cho phép tường minh, bảo vệ được để lên lịch các cửa sổ bảo trì có kế hoạch trong ngân sách,
điều mà kỳ vọng "luôn sẵn sàng" không nói ra trước đó đã khiến khó thực hiện về mặt chính trị ngay cả khi thực sự cần cho sức khỏe hệ thống
dài hạn. Việc truyền thông công khai giải thích trực tiếp khái niệm ngân sách lỗi, thay vì che giấu nó, được đón nhận thuận lợi như dấu
hiệu của thực hành vận hành trung thực, trưởng thành thay vì sự suy yếu cam kết về chất lượng dịch vụ.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng SLO và ngân sách lỗi một cách chính thức là giải quyết một cuộc thương lượng không dứt, tốn kém về chính trị giữa
tốc độ và ổn định bằng một quy tắc khách quan, chung duy nhất. Ví dụ lưu trữ đám mây ở trên cho thấy cụ thể điều này: nhiều năm căng
thẳng lặp lại, chưa giải quyết giữa hai đội được giải quyết bằng một mục tiêu chính thức và một chính sách định trước, giải phóng năng
lượng tổ chức đáng kể trước đó đổ vào việc tranh luận lại cùng một sự đánh đổi hết lần này đến lần khác.

Tổng chi phí sở hữu gồm công sức phân tích để đặt đúng một mục tiêu dựa trên bằng chứng và kỷ luật tôn trọng phản ứng khi cạn định trước
ngay cả dưới áp lực phải giao một tính năng đặc biệt được muốn. Chi phí kỷ luật đó là thật, nhưng thấp hơn nhiều so với chi phí liên tục
của một cuộc thương lượng kinh niên, chưa giải quyết tiêu tốn năng lượng tổ chức trong mọi chu kỳ lập kế hoạch vô thời hạn.

## Phản mẫu và cạm bẫy

- **Đặt một SLO khát vọng mà không có bằng chứng phía sau:** tạo ra một mục tiêu phi thực tế mà đội thôi coi trọng, hoặc một mục tiêu
  đắt không cần thiết đuổi theo lợi ích người dùng không nhận thấy.
- **Không có phản ứng định trước khi ngân sách lỗi cạn:** buộc cùng một cuộc tranh cãi đánh đổi khó khăn dưới áp lực mỗi lần nó xảy ra.
- **Đo SLI từ sức khỏe hệ thống nội bộ thay vì trải nghiệm người dùng thật:** có thể báo "khỏe" trong khi người dùng gặp vấn đề thật.
- **Không bao giờ chi tiêu chủ đích một ngân sách lỗi lành mạnh:** có thể cho thấy sự thận trọng quá mức và cơ hội chính đáng bị bỏ lỡ.
- **Đặt mục tiêu một lần rồi không bao giờ xem lại:** một SLO có thể lỗi thời khi kỳ vọng người dùng, kiến trúc và ưu tiên thay đổi.
- **Coi chính sách ngân sách lỗi là tùy chọn dưới áp lực:** một quy tắc định trước bị phá bất cứ khi nào bất tiện không đem lại giá trị
  ra quyết định thật.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Mục tiêu độ tin cậy ngầm hiểu hoặc mang tính khát vọng, không có SLO, SLI hay ngân sách lỗi chính thức.
- **Cấp 2, Phát triển:** Một số dịch vụ có SLO không chính thức, nhưng SLI có thể không phản ánh trải nghiệm người dùng thật và không có
  chính sách khi cạn định trước.
- **Cấp 3, Chuẩn hóa:** SLO dựa trên bằng chứng với SLI gắn trải nghiệm người dùng thật và chính sách khi cạn ngân sách lỗi định trước
  được thiết lập nhất quán trên các dịch vụ quan trọng.
- **Cấp 4, Quản lý:** Ngân sách lỗi được chi tiêu tích cực và có chủ đích cho các rủi ro đã tính toán, và SLO được xem lại và sửa theo
  nhịp đều đặn, dựa trên bằng chứng.
- **Cấp 5, Điều phối:** SLO và ngân sách lỗi được tích hợp trên toàn tổ chức như cơ chế chung, khách quan để cân bằng tốc độ và ổn định,
  và tổ chức có thể chỉ ra những quyết định cụ thể mà khung này cho phép mà một cuộc thương lượng thiếu cơ sở sẽ không giải quyết hiệu
  quả bằng.

## Ý tưởng để thảo luận

1. SLO hiện tại của chúng ta dựa trên bằng chứng hay khát vọng?
2. Chúng ta có phản ứng định trước khi ngân sách lỗi cạn mà chúng ta thực sự tôn trọng dưới áp lực không?
3. Lần cuối chúng ta chi tiêu chủ đích một ngân sách lỗi lành mạnh cho một rủi ro đã tính toán là khi nào?
4. SLI của chúng ta đang đo trải nghiệm người dùng thật hay các kiểm tra sức khỏe nội bộ tiện lợi?
5. Chúng ta sẽ tốn bao nhiêu để nâng SLO thêm một "số chín", và chi phí đó có xứng đáng không?

## Những điểm chính cần nhớ

- Một **chỉ báo mức dịch vụ (SLI)** đo trải nghiệm người dùng thật; một **mục tiêu mức dịch vụ (SLO)** là mục tiêu dựa trên bằng chứng
  của nó; một **ngân sách lỗi** là phần thiếu hụt được phép, chi tiêu được một cách có chủ đích.
- **Độ tin cậy 100% thường là mục tiêu sai**; hãy đặt nền SLO của bạn trên điều người dùng thực sự nhận thấy và mỗi bước tăng thêm thực
  sự tốn bao nhiêu.
- Hãy coi ngân sách lỗi là **nguồn lực chi tiêu được với phản ứng định trước khi cạn**, loại bỏ nhu cầu tranh luận lại tốc độ-so-với-ổn
  định dưới áp lực mỗi lần.
- Hãy đo SLI từ **trải nghiệm người dùng thật**, không chỉ các kiểm tra sức khỏe nội bộ tiện lợi.
- **Hãy xem lại và sửa SLO định kỳ**, dựa trên bằng chứng, vì một mục tiêu lỗi thời mất tính hữu ích khi hệ thống và người dùng của nó
  thay đổi.

## Tài liệu tham khảo và đọc thêm

- *Site Reliability Engineering: How Google Runs Production Systems*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard
  Murphy biên tập (văn bản nền tảng định nghĩa SLI, SLO và ngân sách lỗi).
- *The Site Reliability Workbook*, do Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, và Stephen Thorne biên tập
  (hướng dẫn thực tế về triển khai SLO và ngân sách lỗi).
- *Implementing Service Level Objectives*, của Alex Hidalgo (một hướng dẫn toàn diện, hướng thực hành về thiết kế và vận hành hóa SLO).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (mối quan hệ giữa thực hành độ
  tin cậy và hiệu suất phân phối).
