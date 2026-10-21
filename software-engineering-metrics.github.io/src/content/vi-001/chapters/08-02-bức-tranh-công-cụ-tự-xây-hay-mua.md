# 8.2 Bức tranh công cụ: tự xây hay mua

## Tổng quan và động lực

Mọi tổ chức triển khai hướng dẫn của cuốn sách này rốt cuộc đều đối mặt một quyết định hạ tầng thực tế: tự xây công cụ chỉ số nội bộ,
mua một nền tảng phân tích kỹ thuật thương mại, hoặc, phổ biến nhất trong thực tế, một sự kết hợp cả hai. Chủ đề này đối xử với quyết
định đó bằng cùng độ chặt chẽ mà chủ đề 5.5 áp dụng cho mọi khoản đầu tư kỹ thuật khác: một phân tích chi phí-lợi ích trung thực, đặc thù
cho quy mô tổ chức của bạn, các nguồn dữ liệu hiện có và các chỉ số cụ thể từ cuốn sách này mà bạn thực sự định theo dõi, thay vì một
câu trả lời mặc định áp dụng đồng đều bất kể bối cảnh.

Thị trường công cụ phân tích kỹ thuật thương mại đã trưởng thành đáng kể, và nhiều nền tảng giờ cung cấp đo đạc vững chắc, phần lớn tự
động cho các chỉ số DORA (Phần 2), dữ liệu pull request và đánh giá (chủ đề 2.9), và ngày càng nhiều, hạ tầng khảo sát trải nghiệm lập
trình viên (chủ đề 3.7). Sự trưởng thành này đã dịch chuyển phép tính của nhiều tổ chức về phía mua ít nhất lớp nền tảng, nhưng nó chưa
loại bỏ những lợi thế thật của phương án tự xây cho các nhu cầu tùy biến cụ thể, đặc biệt quanh dữ liệu viễn trắc kết quả mà chủ đề 7.4
lập luận nay là trung tâm cần thiết của một chương trình chỉ số, thường là nhóm đo lường ít được chuẩn hóa nhất, đặc thù tổ chức nhất mà
cuốn sách này bàn.

Với các đội lớn, quyết định này có hệ quả thật, liên tục lên ngân sách và năng lực kỹ thuật. Các tổ chức doanh nghiệp thường cần tích hợp
công cụ chỉ số trên một bức tranh thực sự không đồng nhất gồm các hệ thống cũ và hiện đại, điều định hình phép tính tự xây-hay-mua đáng
kể; các tổ chức chính phủ thường đối mặt với ràng buộc mua sắm và yêu cầu về chủ quyền dữ liệu hay bảo mật ảnh hưởng đáng kể đến phương
án thương mại nào thậm chí khả thi, đôi khi nghiêng quyết định về phía tự xây hoặc về các nhà cung cấp cụ thể đã được thẩm định, bất kể
một phân tích chi phí-lợi ích thuần túy gợi ý gì.

## Các nguyên tắc chính

- **Đây hiếm khi là quyết định tất-cả-hoặc-không-gì.** Hầu hết các chương trình chỉ số trưởng thành kết hợp công cụ mua cho các chỉ số
  được chuẩn hóa tốt với công cụ tự xây cho dữ liệu viễn trắc kết quả đặc thù tổ chức.
- **Hãy mua cho các chỉ số được chuẩn hóa tốt, cần rộng rãi; hãy xây cho những chỉ số thực sự đặc thù tổ chức.** Các chỉ số DORA và phân
  tích pull request là lãnh địa hàng hóa; tương quan kết quả kinh doanh cụ thể của bạn (chủ đề 5.3) thường thì không.
- **Quyền sở hữu và khả năng di chuyển dữ liệu quan trọng ngang so sánh tính năng.** Một công cụ khóa dữ liệu chỉ số của bạn là một rủi
  ro bền vững, không chỉ là một bất tiện.
- **Chi phí tích hợp thường bị đánh giá thấp** trong phân tích tự xây-hay-mua, cho cả hai phương án.
- **Ràng buộc mua sắm, bảo mật và chủ quyền dữ liệu có thể đè lên phép tính chi phí-lợi ích thuần túy**, đặc biệt với các tổ chức chính
  phủ.

## Khuyến nghị

### Mua cho lớp hàng hóa: hạ tầng DORA, đánh giá và khảo sát

Với các họ chỉ số có công cụ thương mại trưởng thành, phổ biến, đo đạc chỉ số DORA (Phần 2), phân tích pull request và đánh giá mã (chủ
đề 2.9), và nền tảng khảo sát trải nghiệm lập trình viên (chủ đề 3.7), mua thường là lựa chọn kinh tế tốt hơn cho hầu hết các tổ chức dưới
một quy mô nhất định, vì xây hạ tầng tương đương lặp lại công sức kỹ thuật mà nhiều nhà cung cấp đã đầu tư nặng, với sự khác biệt thật
có hạn khi tự xây phiên bản của riêng bạn.

### Xây cho dữ liệu viễn trắc kết quả thực sự đặc thù tổ chức

Với các chỉ số kết quả mà chủ đề 7.4 lập luận nên là trọng tâm của chương trình chỉ số của bạn, tương quan kết quả kinh doanh (chủ đề
5.3), mức áp dụng tính năng gắn với sản phẩm cụ thể của bạn (chủ đề 5.2), kinh tế đơn vị gắn với cơ cấu chi phí cụ thể của bạn (chủ đề
5.4), công cụ thương mại kém chuẩn hóa hơn nhiều và thường không thể nắm bắt logic kinh doanh và mô hình dữ liệu cụ thể của tổ chức bạn
mà không cần tùy biến rộng, đắt đỏ có thể cuối cùng tốn hơn việc xây năng lực tương đương nội bộ với toàn quyền kiểm soát kết quả.

### Đánh giá quyền sở hữu và khả năng di chuyển dữ liệu trước khi cam kết với một nhà cung cấp

Trước khi ký hợp đồng thương mại, hãy xác nhận bạn có thể xuất toàn bộ dữ liệu chỉ số lịch sử ở định dạng dùng được, chuẩn, và hiểu điều
gì xảy ra với dữ liệu đó và lịch sử của nó nếu bạn đổi nhà cung cấp hay ngừng dịch vụ. Một quan hệ nhà cung cấp trở nên khó thoát do [khóa
dữ liệu](https://en.wikipedia.org/wiki/Vendor_lock-in) là một rủi ro tổ chức bền vững, không chỉ là bất tiện, và việc đánh giá này đáng được
nghiêm túc như mọi cam kết hạ tầng nhiều năm quan trọng khác.

### Lập ngân sách thực tế cho chi phí tích hợp ở cả hai phía của quyết định

Dù xây hay mua, chi phí tích hợp, kết nối công cụ với hệ thống kiểm soát phiên bản, CI/CD, theo dõi sự cố và hệ thống kinh doanh thực tế
của bạn, thường bị đánh giá thấp trong kế hoạch ban đầu cho cả hai con đường. Hãy lập ngân sách tường minh cho công sức tích hợp này như
một khoản mục riêng, đáng kể trong phân tích tự xây-hay-mua, thay vì giả định một công cụ thương mại sẽ chạy ngay với thiết lập tối thiểu,
hay chi phí tích hợp của giải pháp tự phát triển chỉ là một phần cộng thêm nhỏ vào chi phí phát triển của nó.

### Tính đến các ràng buộc mua sắm, bảo mật và chủ quyền một cách tường minh và sớm

Với các tổ chức chính phủ và doanh nghiệp được quản lý, yêu cầu chủ quyền dữ liệu, nhu cầu chứng nhận bảo mật và quy trình mua sắm có
thể thu hẹp hoặc loại bỏ đáng kể một số phương án thương mại bất kể chất lượng tính năng của chúng, đôi khi nghiêng quyết định về phía
tự xây hoặc về một tập nhỏ hơn các nhà cung cấp đã được thẩm định cụ thể. Hãy xác định các ràng buộc này tường minh và sớm trong quy
trình đánh giá, thay vì chỉ phát hiện sau khi đã đổ nhiều công sức đánh giá vào một phương án hóa ra không khả thi vì những lý do không
liên quan đến năng lực thực tế của nó.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Mua công cụ thương mại | Triển khai nhanh, bộ tính năng trưởng thành, do nhà cung cấp bảo trì | Kém tùy biến được cho các chỉ số kết quả đặc thù tổ chức; có thể bị khóa |
| Tự xây công cụ nội bộ | Tùy biến hoàn toàn, toàn quyền sở hữu và kiểm soát dữ liệu | Đầu tư kỹ thuật đáng kể, liên tục; lặp lại công sức cho các chỉ số hàng hóa |
| Lai: mua lớp hàng hóa, xây lớp kết quả | Cân bằng hiệu quả chi phí với tùy biến thật ở nơi quan trọng nhất | Cần công việc tích hợp để nối các thành phần mua và xây một cách mạch lạc |
| Mua mọi thứ, gồm cả dữ liệu viễn trắc kết quả, qua tùy biến rộng của nhà cung cấp | Một quan hệ nhà cung cấp duy nhất, có thể mua sắm đơn giản hơn | Có thể đắt ngang tự xây, với ít quyền kiểm soát kết quả cuối cùng hơn |

Sự căng thẳng trung tâm là **nhu cầu tùy biến so với chi phí phát triển**. Các chỉ số hưởng lợi nhiều nhất từ tùy biến, dữ liệu viễn trắc
kết quả gắn riêng với doanh nghiệp của bạn, cũng là những chỉ số đắt nhất để xây tốt; các chỉ số rẻ nhất để mua, DORA và phân tích đánh
giá, cũng là những chỉ số mà tùy biến thật ít quan trọng nhất. Hãy giải quyết sự căng thẳng bằng cách khớp quyết định trực tiếp với mẫu
hình này: mua ở nơi chuẩn hóa phục vụ bạn tốt, xây ở nơi bối cảnh cụ thể của bạn thực sự đòi hỏi, và lập ngân sách chi phí tích hợp thực
tế ở cả hai phía của sự phân chia đó.

## Câu hỏi để thảo luận với đội của bạn

1. **Với từng họ chỉ số mà cuốn sách này bàn, chúng ta có thực sự hưởng lợi từ tùy biến, hay một công cụ thương mại chuẩn hóa sẽ phục vụ
   chúng ta tốt ngang vậy?** Hãy đi qua tường minh các Phần 2 đến 6 và phân từng họ chỉ số vào cột mua hay xây dựa trên phép thử cụ thể
   này.

2. **Chúng ta đã đánh giá các tùy chọn xuất và di chuyển dữ liệu của nhà cung cấp hiện tại hay tiềm năng chưa, hay đang giả định mình có
   thể rời đi dễ dàng nếu cần?** Hãy kiểm tra trực tiếp thay vì giả định; khóa dữ liệu thường chỉ bị phát hiện khi một tổ chức thực sự
   thử chuyển đổi.

3. **Phân tích tự xây-hay-mua ban đầu của chúng ta có tính chi phí tích hợp một cách thực tế, hay chủ yếu tập trung vào phí giấy phép so với
   giờ phát triển?** Hãy xem lại một quyết định công cụ gần đây và kiểm tra xem chi phí tích hợp có được ước tính thật sự hay bị đánh giá
   thấp đáng kể.

4. **Chúng ta có đối mặt các ràng buộc mua sắm, bảo mật hay chủ quyền dữ liệu có thể loại bỏ một số phương án thương mại bất kể chất lượng
   tính năng không?** Hãy xác định các ràng buộc này tường minh trước, không phải sau, khi đầu tư công sức đánh giá đáng kể vào những
   phương án có thể hóa ra không khả thi.

5. **Bức tranh công cụ hiện tại của chúng ta là một sự kết hợp có chủ đích, khớp xây và mua với nơi mỗi cái hợp lý, hay nó tích tụ qua các
   quyết định tùy hứng, riêng lẻ hợp lý theo thời gian?** Hãy thành thật về mẫu hình nào thực sự mô tả tình huống hiện tại của bạn.

6. **Chúng ta sẽ tốn bao nhiêu, về công sức và rủi ro, để đổi nhà cung cấp công cụ chỉ số hiện tại ngay hôm nay nếu cần?** Câu hỏi cụ
   thể này kiểm tra mức phơi nhiễm thực tế hiện tại của bạn với rủi ro khóa dữ liệu, ngoài điều các điều khoản hợp đồng của nhà cung cấp
   hứa hẹn danh nghĩa.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Hãy mua công cụ hàng hóa theo mặc định ở quy mô này; xây hạ tầng chỉ số tùy chỉnh hiếm khi là cách dùng tốt năng lực kỹ
thuật khan hiếm ban đầu khi có các tùy chọn thương mại trưởng thành, rẻ cho riêng các chỉ số DORA và đánh giá. Hãy dành mọi nỗ lực xây
cho chỉ số kết quả duy nhất (chủ đề 5.3) phản ánh trực tiếp nhất giá trị cốt lõi của sản phẩm của bạn.

**Doanh nghiệp nhỏ.** Hầu hết các tùy chọn công cụ thương mại thu nhỏ khá tốt và được định giá dễ tiếp cận cho các tổ chức nhỏ hơn; mua
lớp hàng hóa hầu như luôn là lựa chọn đúng, và xây bất cứ thứ gì tùy chỉnh hiếm khi được biện minh cho đến khi tổ chức của bạn đã lớn đáng
kể và phát triển các nhu cầu thực sự đặc thù.

**Doanh nghiệp lớn.** Cách tiếp cận lai mà chủ đề này khuyến nghị xứng đáng với độ phức tạp của nó ở đây: mua lớp hàng hóa ở quy mô lớn
(thường có đòn bẩy thương lượng đáng kể để có điều khoản thuận lợi), và đầu tư có chủ đích vào việc xây lớp dữ liệu viễn trắc kết quả đặc
thù tổ chức, vì độ phức tạp logic kinh doanh và mô hình dữ liệu của bạn ở quy mô này thường vượt quá mức công cụ thương mại chung có thể
đáp ứng mà không cần tùy biến rộng, đắt đỏ.

**Chính phủ.** Quy trình mua sắm, yêu cầu chứng nhận bảo mật và ràng buộc chủ quyền dữ liệu thường chi phối quyết định này nhiều hơn so
sánh tính năng hay chi phí thuần túy gợi ý. Hãy mời các bên liên quan mua sắm và bảo mật tham gia sớm trong quy trình đánh giá, và chuẩn bị
để phương án tự xây thực sự hấp dẫn hơn ở đây so với bối cảnh khu vực tư tương đương, chính vì các ràng buộc này chứ không phải vì tự xây
vốn tốt hơn.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty phần mềm ban đầu cố xây một nền tảng chỉ số tùy chỉnh hoàn toàn bao quát mọi họ chỉ số từ Phần 2 đến
Phần 6, một nỗ lực nhiều năm tiêu tốn năng lực kỹ thuật đáng kể mà vẫn tụt sau các sản phẩm thương mại trưởng thành riêng ở các chỉ số
DORA và đánh giá được chuẩn hóa. Một chiến lược sửa đổi đã áp dụng một nền tảng thương mại cho các chỉ số hàng hóa này, giải phóng đội
nền tảng nội bộ tập trung hoàn toàn vào việc xây dữ liệu viễn trắc tương quan kết quả kinh doanh và kinh tế đơn vị (chủ đề 5.3, 5.4)
thực sự đặc thù cho mô hình kinh doanh của công ty, thứ mà không công cụ thương mại nào có thể cung cấp ngay. Cách tiếp cận lai này đã
mang lại một chương trình chỉ số đầy đủ hơn, thực sự hữu ích hơn trong một năm so với chiến lược tự xây toàn bộ đã đạt được sau hai năm.

**Chính phủ.** Đợt đánh giá ban đầu của một cơ quan liên bang về các nền tảng phân tích kỹ thuật thương mại thấy rằng không nhà cung cấp
nào sẵn có đáp ứng được yêu cầu chủ quyền dữ liệu của cơ quan, vốn bắt buộc mọi dữ liệu chỉ số kỹ thuật phải nằm trong các trung tâm dữ
liệu chính phủ được chứng nhận cụ thể. Thay vì bỏ hoàn toàn phương án mua, cơ quan đã xác định một tập con nhỏ hơn các nhà cung cấp cung
cấp tùy chọn triển khai đám mây chủ quyền được chính phủ chứng nhận, với mức phụ phí khiêm tốn so với giá thương mại tiêu chuẩn, và triển
khai thành công một chương trình lai: công cụ mua cho lớp chỉ số hàng hóa trong ranh giới chủ quyền bắt buộc, và công cụ nội bộ tự xây
cho nhu cầu dữ liệu viễn trắc kết quả công dân đặc thù của cơ quan, thứ mà không nhà cung cấp thương mại sẵn có nào đáp ứng bất kể cân
nhắc về chủ quyền.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của một chiến lược tự xây-hay-mua lai, có chủ đích là tránh được cả hai kiểu thất bại mà các ví dụ của chủ đề này minh họa: khoản
đầu tư kỹ thuật nhiều năm lãng phí vào việc xây năng lực hàng hóa vốn đã có rẻ trên thị trường, và sự thất vọng cùng chi phí tùy biến cuối
cùng của việc ép một nhu cầu thực sự đặc thù tổ chức vào một công cụ thương mại không vừa. Ví dụ doanh nghiệp lớn ở trên cho thấy cụ
thể điều này: cách tiếp cận lai mang lại nhiều giá trị thật hơn trong một năm so với chiến lược tự xây toàn bộ trong hai năm.

Tổng chi phí sở hữu cho cả hai con đường gồm chi phí tích hợp, thường bị đánh giá thấp, và, riêng với công cụ mua, chi phí rủi ro liên
tục của khả năng bị khóa nhà cung cấp trừ khi khả năng di chuyển dữ liệu được xác nhận và bảo vệ qua hợp đồng ngay từ đầu. Lập ngân sách
thực tế cho cả hai điều này, thay vì tập trung hẹp vào phí giấy phép hay giờ phát triển, tạo ra bức tranh tổng chi phí chính xác hơn nhiều
cho cả hai phương án.

## Phản mẫu và cạm bẫy

- **Xây công cụ tùy chỉnh cho các chỉ số hàng hóa, được chuẩn hóa tốt:** lặp lại công sức kỹ thuật mà nhiều nhà cung cấp đã đầu tư nặng.
- **Mua công cụ thương mại cho dữ liệu viễn trắc kết quả thực sự đặc thù tổ chức mà không kiểm tra độ phù hợp trước:** có nguy cơ tùy biến
  đắt đỏ, không vừa hoặc một nhu cầu không được đáp ứng.
- **Không đánh giá việc xuất và di chuyển dữ liệu trước khi cam kết với một nhà cung cấp:** có nguy cơ bị khóa bền vững, đắt đỏ chỉ bị
  phát hiện khi cố rời đi.
- **Đánh giá thấp chi phí tích hợp ở cả hai phía của quyết định:** tạo ra so sánh tổng chi phí không chính xác và mốc thời gian phi thực
  tế.
- **Phớt lờ ràng buộc mua sắm, bảo mật hay chủ quyền cho đến muộn trong quy trình đánh giá:** lãng phí công sức đánh giá vào những phương
  án hóa ra không khả thi vì lý do không liên quan đến năng lực.
- **Coi đây là một quyết định tất-cả-hoặc-không-gì duy nhất:** bỏ lỡ cách tiếp cận lai khớp nhất với nhu cầu hỗn hợp thực tế của hầu hết
  các tổ chức.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Các quyết định công cụ được đưa ra tùy hứng, không có phân tích tự xây-hay-mua có chủ đích hay cân nhắc về khả
  năng di chuyển dữ liệu.
- **Cấp 2, Phát triển:** Có một số phân tích, nhưng chi phí tích hợp thường xuyên bị đánh giá thấp và cách tiếp cận lai không được cân
  nhắc có chủ đích.
- **Cấp 3, Chuẩn hóa:** Một chiến lược tự xây-hay-mua lai, có chủ đích khớp các chỉ số hàng hóa với công cụ mua và dữ liệu viễn trắc kết
  quả đặc thù tổ chức với công cụ tự xây, một cách nhất quán.
- **Cấp 4, Quản lý:** Khả năng di chuyển dữ liệu được xác nhận và bảo vệ qua hợp đồng cho mọi công cụ mua, và các ràng buộc mua sắm, bảo
  mật và chủ quyền được tính đến tường minh và sớm.
- **Cấp 5, Điều phối:** Bức tranh công cụ của tổ chức phản ánh một chiến lược lai trưởng thành, có chủ đích, được xem xét đều đặn khi các
  sản phẩm thương mại và nhu cầu tổ chức tiến hóa, với giá trị được chứng minh từ cả thành phần mua lẫn tự xây.

## Ý tưởng để thảo luận

1. Chỉ số hiện tại nào của chúng ta sẽ hưởng lợi nhiều nhất từ sự tùy biến mà chúng ta chưa có?
2. Chúng ta đã xác nhận có thể xuất toàn bộ dữ liệu chỉ số lịch sử nếu cần đổi nhà cung cấp chưa?
3. Quyết định công cụ gần nhất của chúng ta có tính chi phí tích hợp một cách thực tế không?
4. Ràng buộc mua sắm, bảo mật hay chủ quyền nào chúng ta có thể đang đánh giá thấp?
5. Một chiến lược lai có chủ đích cho bộ chỉ số cụ thể của chúng ta sẽ trông ra sao?

## Những điểm chính cần nhớ

- Đây hiếm khi là tất-cả-hoặc-không-gì; hầu hết các chương trình trưởng thành **kết hợp công cụ mua cho chỉ số hàng hóa với công cụ tự
  xây cho dữ liệu viễn trắc kết quả đặc thù tổ chức**.
- **Hãy mua cho các chỉ số được chuẩn hóa** (DORA, phân tích đánh giá, hạ tầng khảo sát); **hãy xây cho đo lường kết quả thực sự đặc thù
  tổ chức**.
- Hãy đánh giá **quyền sở hữu và khả năng di chuyển dữ liệu** trước khi cam kết với một nhà cung cấp; bị khóa là rủi ro bền vững, không
  chỉ là bất tiện.
- **Hãy lập ngân sách thực tế cho chi phí tích hợp** ở cả hai phía của quyết định; nó thường bị đánh giá thấp.
- **Ràng buộc mua sắm, bảo mật và chủ quyền** có thể đè lên phép tính chi phí-lợi ích thuần túy, đặc biệt với các tổ chức chính phủ.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (các họ chỉ số mà phân tích tự
  xây-hay-mua của chủ đề này áp dụng cho).
- *Cloud FinOps*, của J.R. Storment và Mike Fuller (các nguyên tắc phân tích chi phí áp dụng cho quyết định đầu tư công cụ).
- Khung FinOps của FinOps Foundation, [finops.org](https://www.finops.org/) (hướng dẫn thực hành về đánh giá và quản lý chi phí công
  cụ đám mây và SaaS).
- Tài liệu của Chương trình Quản lý Rủi ro và Cấp phép Liên bang Hoa Kỳ (FedRAMP): hướng dẫn có thẩm quyền về yêu cầu bảo mật và chủ
  quyền của công cụ đám mây chính phủ.
