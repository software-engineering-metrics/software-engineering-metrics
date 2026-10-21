# 6.3 Chỉ số trực ca, năng lực và tải vận hành

## Tổng quan và động lực

Độ tin cậy mà chủ đề 6.1 giới thiệu và việc ứng phó sự cố mà chủ đề 6.2 đo đều phụ thuộc vào một hệ thống con người mà chủ đề này đo
trực tiếp: vòng trực ca (on-call), những kỹ sư mang máy nhắn tin và ứng phó khi có gì hỏng, và năng lực hạ tầng quyết định một hệ thống
có thể hấp thụ bao nhiêu tải trước khi bắt đầu hỏng ngay từ đầu. Một tổ chức có thể có SLO xuất sắc, ngân sách lỗi được thiết kế tốt và
một văn hóa sự cố thực sự không đổ lỗi, mà vẫn làm kiệt sức các kỹ sư trực ca bằng một tải không bền vững cuối cùng làm suy giảm chính
độ tin cậy mà các thực hành khác nhằm bảo vệ.

Chủ đề này coi tải vận hành là một họ chỉ số riêng, nối trực tiếp với việc đo sức khỏe tinh thần và [kiệt sức](https://en.wikipedia.org/wiki/Occupational_burnout)
của chủ đề 3.2 nhưng đặc thù cho áp lực cấp tính riêng của việc mang máy nhắn tin: giấc ngủ bị gián đoạn, cái giá tâm lý của việc trực
ca ngay cả khi không có gì xảy ra, và tác hại tích lũy của tải sự cố thường xuyên, phân bổ kém. Một tổ chức đo độ tin cậy của hệ thống
mình tỉ mỉ mà không bao giờ đo tính bền vững của những con người giữ cho các hệ thống đó đáng tin chỉ đang đo một nửa bức tranh, và nửa
không đo có xu hướng cuối cùng nổi lên thành nghỉ việc, chất lượng ứng phó sự cố suy giảm do người ứng phó kiệt sức, hoặc cả hai.

Với các đội lớn, các chỉ số trực ca và năng lực làm lộ ra các vấn đề cân bằng tải phản chiếu mối quan tâm tập trung tri thức của chủ đề
3.5: một số ít kỹ sư hấp thụ phần lớn không cân xứng các cuộc gọi, thường chính là những người giàu kinh nghiệm nhất vì họ giải quyết sự
cố nhanh nhất, tạo ra đồng thời cả rủi ro kiệt sức lẫn rủi ro hệ số xe buýt. Các tổ chức doanh nghiệp và chính phủ chạy các dịch vụ quan
trọng suốt ngày đêm dựa vào các chỉ số của chủ đề này để bố trí nhân sự vòng trực ca một cách bền vững thay vì chỉ phát hiện cái giá
thật qua việc nhân viên nghỉ việc.

## Các nguyên tắc chính

- **Tải trực ca là một nguồn lực đo được, quản lý được**, không phải một gánh nặng không tránh được, vô hạn mà kỹ sư cứ phải hấp thụ.
- **Cả tần suất cuộc gọi lẫn phân bổ cuộc gọi đều quan trọng.** Một trung bình toàn đội có thể che giấu sự tập trung nghiêm trọng vào một
  số ít cá nhân.
- **Bị gián đoạn khi trực ca mang một cái giá ngay cả khi không có sự cố nào thực sự xảy ra**, sức nặng tâm lý của việc có thể liên lạc
  và chịu trách nhiệm.
- **Lập kế hoạch năng lực và tải trực ca có liên hệ với nhau.** Hạ tầng cấp phát thiếu sinh thêm cuộc gọi, trực tiếp tăng gánh nặng trực
  ca.
- **Một hệ thống trực ca bền vững bảo vệ chính độ tin cậy**, vì người ứng phó kiệt sức đưa ra quyết định chậm hơn, dễ sai hơn trong sự cố.

## Khuyến nghị

### Theo dõi tần suất và phân bổ cuộc gọi, không chỉ một trung bình cấp đội

Hãy đo mỗi kỹ sư trực ca nhận bao nhiêu cuộc gọi, không chỉ một trung bình toàn đội có thể che giấu sự tập trung nghiêm trọng. Tương tự
mối quan tâm về hệ số xe buýt của chủ đề 3.5 và tải người đánh giá của chủ đề 2.9, tải trực ca thường tập trung vào một số ít người giàu
kinh nghiệm có thể giải quyết sự cố nhanh nhất, chính xác mẫu hình tạo ra cả rủi ro kiệt sức lẫn một điểm hỏng đơn lẻ nguy hiểm. Hãy
cân bằng lại các vòng trực một cách có chủ đích khi sự tập trung này xuất hiện.

### Đo cái giá tâm lý của việc trực ca, không chỉ thời gian xử lý sự cố đang diễn ra

Trực ca mang một cái giá thật ngay cả trong một ca không có cuộc gọi thực sự nào: chất lượng giấc ngủ giảm do chờ đợi một gián đoạn có
thể xảy ra, các hoạt động cá nhân bị hạn chế, và căng thẳng ở mức thấp của trách nhiệm liên tục. Khi khả thi, hãy nắm bắt điều này qua
dữ liệu khảo sát (chủ đề 3.7) riêng về trải nghiệm trực ca, tách khỏi mức hài lòng chung, vì một đội có thể báo cáo mức hài lòng chung
hợp lý trong khi riêng việc trực ca lặng lẽ bào mòn sức khỏe tinh thần.

### Đặt giới hạn tường minh về tần suất trực ca bền vững

Hãy thiết lập một tần suất tối đa hợp lý cho việc mỗi cá nhân nên trực ca bao lâu một lần, thường không quá một tuần trong bốn hoặc năm
tuần, và theo dõi tần suất luân phiên thực tế so với giới hạn đó. Một vòng trực về mặt kỹ thuật có đủ người được liệt kê nhưng thực chất
dựa vào hai hoặc ba người do khoảng trống kỹ năng hay hạn chế về khả năng có mặt thì không thực sự đáp ứng giới hạn, bất kể lịch danh
nghĩa cho thấy gì.

### Nối trực tiếp lập kế hoạch năng lực với tải trực ca

Hạ tầng cấp phát thiếu, không đủ dư địa cho các đợt tăng đột biến lưu lượng, cấu hình tự động mở rộng không đầy đủ, theo định nghĩa sinh
thêm cuộc gọi, trực tiếp tăng gánh nặng trực ca. Hãy theo dõi mức sử dụng năng lực hạ tầng và đối chiếu với tần suất cuộc gọi: một dịch
vụ thường xuyên chạy gần trần năng lực và sinh ra một phần không cân xứng các cuộc gọi là một lập luận trực tiếp, định lượng được cho đầu
tư năng lực, không chỉ là một lời phàn nàn vận hành mơ hồ.

### Dùng chỉ số trực ca để thông tin cho quyết định nhân sự và tuyển dụng, không phải đánh giá cá nhân

Hãy tổng hợp dữ liệu tải trực ca ở cấp đội để đưa ra luận cứ cho biên chế bổ sung, công cụ tốt hơn để giảm cuộc gọi dương tính giả, hay
đầu tư kiến trúc để giảm tần suất sự cố thật. Theo hướng dẫn nhất quán của cuốn sách này với mọi chỉ số chạm trực tiếp đến cá nhân (chủ
đề 1.2, chủ đề 3.4), không bao giờ dùng chỉ số phản hồi cuộc gọi cá nhân để đánh giá hiệu suất của một kỹ sư cụ thể; mục tiêu là bố trí
nhân sự và thiết kế hệ thống bền vững, không phải ghi điểm cá nhân.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không theo dõi chính thức tải trực ca | Không tốn chi phí quản lý | Rủi ro kiệt sức và tập trung hệ số xe buýt vô hình cho đến khi nổi lên thành nghỉ việc |
| Chỉ tần suất cuộc gọi trung bình của đội | Đơn giản để tính | Che giấu sự tập trung cá nhân nghiêm trọng |
| Theo dõi phân bổ cuộc gọi cấp cá nhân | Cho thấy trực tiếp sự tập trung và rủi ro kiệt sức | Cần cẩn trọng chỉ dùng ở dạng tổng hợp, không bao giờ để đánh giá cá nhân |
| Đầu tư năng lực để giảm khối lượng cuộc gọi tại nguồn | Xử lý nguyên nhân gốc, giảm gánh nặng bền vững | Cần đầu tư hạ tầng ban đầu |

Sự căng thẳng trung tâm là **chấp nhận so với đầu tư**. Rất dễ coi khối lượng cuộc gọi cao đơn giản là cái giá không tránh được của việc
vận hành một dịch vụ đáng tin và yêu cầu kỹ sư trực ca hấp thụ nó, nhưng sự chấp nhận đó cuối cùng tốn kém cho tổ chức qua việc nhân
viên nghỉ việc và chất lượng ứng phó sự cố suy giảm do người ứng phó kiệt sức. Hãy giải quyết sự căng thẳng bằng cách coi tải trực ca
tăng cao là một tín hiệu kêu gọi đầu tư thật, cải thiện năng lực, cảnh báo tốt hơn để giảm dương tính giả, mở rộng nhân sự vòng trực, thay
vì một gánh nặng không tránh được cứ chịu đựng vô thời hạn.

## Câu hỏi để thảo luận với đội của bạn

1. **Phân bổ cuộc gọi thực tế của chúng ta giữa các cá nhân trong vòng trực là gì, không chỉ trung bình của đội?** Hãy lấy dữ liệu thật
   ở cấp cá nhân; một trung bình đội trông hợp lý có thể che giấu một hai người hấp thụ phần lớn không cân xứng đáng kể.

2. **Chúng ta đã bao giờ đo cái giá tâm lý của việc trực ca riêng khỏi mức hài lòng chung chưa?** Nếu chưa, hãy thảo luận liệu một câu
   hỏi khảo sát ngắn, riêng về trải nghiệm trực ca có làm lộ ra điều mà khảo sát hài lòng chung của bạn (chủ đề 3.2) đang bỏ sót không.

3. **Lịch vòng trực danh nghĩa của chúng ta có phản ánh thực tế không, hay thực chất chỉ dựa vào hai hoặc ba người do khoảng trống kỹ
   năng hay khả năng có mặt?** Hãy thành thật về điều này; một lịch liệt kê tám cái tên nhưng thực chất phụ thuộc vào hai thì không đáp
   ứng bất kỳ giới hạn bền vững hợp lý nào.

4. **Dịch vụ nào của chúng ta sinh ra phần không cân xứng các cuộc gọi so với dư địa năng lực của nó, và liệu đầu tư hạ tầng thêm có giảm
   trực tiếp tải đó không?** Hãy đối chiếu tường minh tần suất cuộc gọi với dữ liệu sử dụng năng lực để xây luận cứ này bằng bằng chứng
   thật.

5. **Dữ liệu tải trực ca có bao giờ được dùng, dù không chính thức, để đánh giá hiệu suất của một cá nhân thay vì thông tin cho các quyết
   định nhân sự và kiến trúc không?** Điều này có nguy cơ rơi vào cùng bẫy đánh giá cá nhân mà chủ đề 3.4 cảnh báo với dữ liệu hoạt động,
   giờ áp dụng cho tải vận hành.

6. **Chúng ta sẽ tốn bao nhiêu nếu mất kỹ sư trực ca bị gọi nhiều nhất vì kiệt sức hay nghỉ việc, và con số đó so với chi phí cân bằng
   lại vòng trực hay đầu tư sửa nguyên nhân gốc ngay bây giờ thế nào?** Phép so sánh cụ thể này thường tạo ra luận cứ mạnh hơn cho đầu tư
   chủ động so với riêng một lời kêu gọi trừu tượng về tính bền vững.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Trực ca thường không chính thức và tập trung vào những người sáng lập hay một đội kỹ thuật nhỏ ban đầu do bắt buộc. Rủi
ro là chuẩn hóa một nhịp độ không bền vững từ sớm, trước khi thiết kế vòng trực có chủ đích từng được cân nhắc, điều trở nên khó gỡ hơn
nhiều một khi nó đã thành kỳ vọng mặc định cho nhân viên mới gia nhập sau.

**Doanh nghiệp nhỏ.** Một lịch luân phiên đơn giản, tường minh với một giới hạn bền vững rõ ràng (chẳng hạn không quá một tuần trong bốn
tuần) là khả thi ngay cả khi không có công cụ trực ca chuyên dụng. Kỷ luật chính đơn giản là làm cho vòng trực và tính công bằng của nó
hiển thị và tường minh thay vì để nó là một sự sắp xếp không chính thức, không nói ra.

**Doanh nghiệp lớn.** Sự tập trung phân bổ cuộc gọi và các rủi ro kiệt sức và hệ số xe buýt đi kèm mở rộng tệ ở đây, vì nhiều dịch vụ và
độ phức tạp hơn thường có nghĩa là nhiều cuộc gọi tiềm năng hơn, và sự tập trung chuyên môn làm vấn đề tích lũy thêm. Hãy đầu tư theo dõi
tải cấp cá nhân (chỉ dùng ở dạng tổng hợp cho quyết định nhân sự), đầu tư năng lực để giảm khối lượng cuộc gọi tại nguồn, và cân bằng lại
vòng trực có chủ đích.

**Chính phủ.** Hạ tầng công quan trọng thường đòi hỏi phủ sóng trực ca suốt ngày đêm với hệ quả thật nếu ứng phó chậm, vừa nâng tầm quan
trọng của việc bố trí nhân sự bền vững vừa làm khó việc đạt được nó dưới các ràng buộc biên chế điển hình của khu vực công. Hãy dùng dữ
liệu tải trực ca một cách tường minh và trực tiếp để biện minh các yêu cầu nhân sự, định khung năng lực trực ca bền vững như một yêu cầu
độ tin cậy trực tiếp, định lượng được thay vì một ưu tiên nhân sự tùy ý.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty hạ tầng đám mây phát hiện, sau khi lần đầu tiên lấy dữ liệu cuộc gọi cấp cá nhân, rằng hai kỹ sư cấp
cao trong một vòng trực mười lăm người đã tự mình xử lý hơn 60% mọi cuộc gọi năm trước, vừa vì họ nhanh nhất trong giải quyết các sự cố
phức tạp vừa vì các thành viên khác trong vòng trực đã học cách không chính thức nhường họ thay vì tự mình thử giải quyết. Cả hai kỹ sư
đều báo cáo triệu chứng kiệt sức đáng kể trong khảo sát sức khỏe tinh thần của công ty (chủ đề 3.2) mà lãnh đạo trước đó chưa nối tín
hiệu khảo sát này với dữ liệu tập trung trực ca cụ thể, định lượng được. Một nỗ lực cân bằng lại có chủ đích, gồm đào tạo có mục tiêu để
xây dựng sự tự tin giải quyết trên toàn vòng trực rộng hơn và một giới hạn chính thức về số cuộc gọi liên tiếp một cá nhân có thể được
giao, đã giảm tỷ trọng của hai kỹ sư xuống dưới 25% trong sáu tháng, kèm cải thiện tương ứng về sức khỏe tinh thần họ báo cáo.

**Chính phủ.** Đội kỹ sư trực ca của một công ty nước khu vực đã vận hành với một vòng trực danh nghĩa bốn người cho việc giám sát hạ
tầng quan trọng, nhưng dữ liệu sử dụng năng lực cho thấy một trạm bơm cũ cụ thể, liên tục chạy gần trần vận hành, sinh ra gần một nửa mọi
cuộc gọi trên toàn vòng trực. Một đợt nâng cấp năng lực cho riêng trạm bơm đó, được tài trợ trực tiếp bằng cách dùng tương quan giữa tần
suất cuộc gọi và năng lực làm bằng chứng hỗ trợ cụ thể trong đề nghị ngân sách, đã giảm tổng khối lượng cuộc gọi toàn tổ chức khoảng 40%
trong năm sau, cho thấy gánh nặng trực ca phần lớn là một vấn đề năng lực trá hình hơn là thuần túy một vấn đề nhân sự hay quy trình.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc quản lý tải trực ca và năng lực một cách chủ đích là tránh được nhân viên nghỉ việc và tránh được suy giảm độ tin cậy do
người ứng phó kiệt sức đưa ra quyết định chậm hơn, dễ sai hơn. Ví dụ hạ tầng đám mây ở trên cho thấy trực tiếp rủi ro tích lũy: sự tập
trung không được quản lý tạo ra đồng thời rủi ro kiệt sức và hệ số xe buýt mà một nỗ lực cân bằng lại đơn giản, dựa trên dữ liệu đã giải
quyết với chi phí khiêm tốn so với rủi ro mất một trong hai kỹ sư cấp cao do nghỉ việc.

Tổng chi phí sở hữu gồm công cụ đo đạc để theo dõi phân bổ cuộc gọi cấp cá nhân (dùng cẩn thận, chỉ ở dạng tổng hợp) và, khi được chỉ
định, đầu tư năng lực thật để giảm khối lượng cuộc gọi tại nguồn. Ví dụ công ty nước cho thấy khoản đầu tư này có thể tự hoàn vốn trực
tiếp và đo được, vì một bản sửa năng lực đơn lẻ, nhắm đúng đã giảm đáng kể gánh nặng vận hành toàn tổ chức.

## Phản mẫu và cạm bẫy

- **Chỉ theo dõi số cuộc gọi trung bình cấp đội:** che giấu sự tập trung cá nhân nghiêm trọng vốn thúc đẩy cả rủi ro kiệt sức lẫn hệ số
  xe buýt.
- **Coi lịch vòng trực danh nghĩa là phản ánh thực tế:** một lịch thực chất phụ thuộc vào hai hoặc ba người không bền vững bất kể liệt
  kê bao nhiêu cái tên.
- **Dùng dữ liệu phản hồi cuộc gọi cá nhân để đánh giá hiệu suất:** lặp lại bẫy đánh giá cá nhân mà cuốn sách này cảnh báo xuyên suốt,
  giờ áp dụng cho tải vận hành.
- **Chấp nhận khối lượng cuộc gọi cao như cái giá không tránh được của độ tin cậy thay vì điều tra năng lực như một nguyên nhân gốc:**
  bỏ lỡ một bản sửa trực tiếp thường sẵn có.
- **Không bao giờ nối dữ liệu tải trực ca với dữ liệu khảo sát sức khỏe tinh thần:** bỏ lỡ cơ hội xác định và hành động trước một rủi ro
  kiệt sức tích lũy trước khi nó nổi lên thành nghỉ việc.
- **Phớt lờ cái giá tâm lý của việc trực ca khi không có cuộc gọi thực sự nào:** đánh giá thấp gánh nặng thật của một vòng trực.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Tải trực ca hoàn toàn không được theo dõi, hoặc chỉ như một trung bình toàn đội che giấu sự tập trung cá nhân.
- **Cấp 2, Phát triển:** Có một số dữ liệu cuộc gọi cấp cá nhân, nhưng không nối với dữ liệu khảo sát sức khỏe tinh thần hay các quyết
  định đầu tư năng lực.
- **Cấp 3, Chuẩn hóa:** Phân bổ cuộc gọi cấp cá nhân và tương quan sử dụng năng lực được theo dõi nhất quán, với giới hạn bền vững tường
  minh về tần suất luân phiên.
- **Cấp 4, Quản lý:** Dữ liệu tải trực ca được dùng tích cực để thúc đẩy đầu tư năng lực và cân bằng lại vòng trực, nối tường minh với
  tín hiệu khảo sát sức khỏe tinh thần.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những cải thiện cụ thể, đo được ở cả tải vận hành lẫn sức khỏe tinh thần từ đầu tư năng
  lực có mục tiêu và thiết kế lại vòng trực, và việc bố trí nhân sự trực ca bền vững là một đầu vào thường xuyên, được biện minh tốt cho
  lập kế hoạch biên chế và hạ tầng.

## Ý tưởng để thảo luận

1. Phân bổ cuộc gọi thực tế ở cấp cá nhân của chúng ta hiện trông thế nào?
2. Lịch vòng trực danh nghĩa của chúng ta có phản ánh ai thực sự giải quyết phần lớn sự cố không?
3. Khoản đầu tư năng lực đơn lẻ nào sẽ giảm khối lượng cuộc gọi hiện tại của chúng ta nhiều nhất?
4. Chúng ta đã bao giờ nối dữ liệu tải trực ca với tín hiệu khảo sát sức khỏe tinh thần chưa?
5. Chúng ta sẽ tốn bao nhiêu nếu mất kỹ sư bị gọi nhiều nhất vì kiệt sức?

## Những điểm chính cần nhớ

- Tải trực ca là một **nguồn lực đo được, quản lý được**; hãy theo dõi phân bổ cấp cá nhân, không chỉ trung bình toàn đội có thể che
  giấu sự tập trung nghiêm trọng.
- Trực ca mang một **cái giá tâm lý ngay cả khi không có cuộc gọi thực sự nào**; hãy đo điều này riêng khỏi mức hài lòng chung.
- **Lập kế hoạch năng lực và tải trực ca có liên hệ trực tiếp**; hạ tầng cấp phát thiếu sinh thêm cuộc gọi và gánh nặng.
- Hãy dùng dữ liệu trực ca cho **quyết định nhân sự và năng lực**, không bao giờ cho đánh giá hiệu suất cá nhân.
- Một hệ thống trực ca bền vững **bảo vệ chính độ tin cậy**, vì người ứng phó kiệt sức đưa ra quyết định chậm hơn, dễ sai hơn.

## Tài liệu tham khảo và đọc thêm

- *Site Reliability Engineering: How Google Runs Production Systems*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard
  Murphy biên tập (thực hành trực ca và tải vận hành bền vững).
- *The Site Reliability Workbook*, do Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, và Stephen Thorne biên tập
  (hướng dẫn thực tế về thiết kế vòng trực ca).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve Wellbeing*, của Christina Maslach và Michael P. Leiter (nguyên
  nhân tổ chức và can thiệp cho kiệt sức, áp dụng cho căng thẳng trực ca).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, do David N. Blank-Edelman biên tập (góc nhìn của người thực
  hành về thực hành vận hành bền vững).
