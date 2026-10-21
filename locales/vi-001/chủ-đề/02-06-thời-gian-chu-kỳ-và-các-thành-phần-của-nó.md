# 2.6 Thời gian chu kỳ và các thành phần của nó

## Tổng quan và động lực

**Thời gian chu kỳ (cycle time)** là sự phân rã nội bộ của thời gian luồng (chủ đề 2.4) của một
thay đổi thành các giai đoạn kỹ thuật cấu thành: thời gian viết mã, thời gian đánh giá, thời gian
kiểm thử và thời gian triển khai, đôi khi được chia thêm thành thời gian nhận việc (một thay đổi
chờ bao lâu trước khi ai đó bắt đầu làm) và thời gian hoạt động (mất bao lâu khi ai đó đã làm).
Nếu thời gian luồng cho bạn một con số duy nhất về một thay đổi mất bao lâu đầu-cuối qua toàn bộ
chuỗi giá trị, thì [thời gian chu kỳ](https://en.wikipedia.org/wiki/Cycle_time) cho bạn biết thời
gian đó thực sự đi đâu một khi nó đến kỹ thuật, đó là tầng chẩn đoán mà chủ đề 2.4 đã hứa nằm bên
dưới con số tóm tắt của chính nó.

Sự phân biệt này quan trọng vì "thời gian dẫn quá dài" tự nó không hành động được. Một đội có
thời gian dẫn bị chi phối bởi thời gian viết mã cần một can thiệp khác với một đội có thời gian
dẫn bị chi phối bởi hàng đợi đánh giá ba ngày, lại cần một can thiệp khác nữa so với một đội mất
phần lớn thời gian vào một bộ kiểm thử chập chờn, chậm. Không có phân rã thời gian chu kỳ, các
đội có xu hướng đoán nút thắt, và đoán sai đủ thường xuyên đến mức sửa nhầm giai đoạn lãng phí
công sức thật trong khi ràng buộc thực sự vẫn nguyên vẹn.

Với các đội lớn, phân rã thời gian chu kỳ là thứ biến một sự suy giảm thời gian dẫn toàn tổ chức
từ một bí ẩn thành một vấn đề cụ thể, giải quyết được. Khi hàng chục đội dùng chung hạ tầng, một
nút thắt đánh giá dùng chung hay một đường ống CI chậm dùng chung có thể kéo thời gian dẫn của
mọi đội xuống như nhau, và chỉ một phép so sánh thời gian chu kỳ xuyên đội mới làm lộ nguyên
nhân gốc chung đó, thay vì mỗi đội độc lập đoán lời giải thích cục bộ của riêng mình.

## Các nguyên tắc chính

- **Thời gian chu kỳ giải thích thời gian dẫn; nó không thay thế.** Hãy báo cáo cả hai cùng nhau,
  với thời gian chu kỳ là chẩn đoán và thời gian dẫn là tóm tắt.
- **Thời gian chờ thường chi phối thời gian hoạt động.** Phần lớn độ trễ trong phân phối phần mềm
  đến từ công việc nằm không trong hàng đợi, không phải từ công sức hoạt động (chủ đề 2.5 bao quát
  điều này trực tiếp qua hiệu suất luồng).
- **Hãy phân rã theo giai đoạn trước khi đề xuất cách sửa.** Một cách sửa nhắm vào sai giai đoạn
  lãng phí công sức và có thể làm nản lòng một đội bị yêu cầu "làm nhanh hơn" khi nút thắt thật ở
  nơi khác.
- **Một nút thắt dùng chung qua nhiều đội là cơ hội đầu tư nền tảng,** không chỉ là một loạt vấn
  đề của từng đội.
- **Dữ liệu thời gian chu kỳ chịu cùng rủi ro bị lách như thời gian luồng** (chủ đề 2.4): hãy cảnh
  giác với những ranh giới giai đoạn lặng lẽ dịch chuyển để làm đẹp một con số.

## Khuyến nghị

### Đo đạc tường minh mọi ranh giới giai đoạn

Hãy chia hành trình của một thay đổi thành các giai đoạn có tên với ranh giới rõ ràng, đo đạc
được: viết mã (commit đầu tiên đến khi mở pull request), nhận việc (mở pull request đến lần đánh
giá đầu tiên), đánh giá (lần đánh giá đầu tiên đến phê duyệt), và triển khai (phê duyệt đến
production). Hãy ghi lại dấu thời gian của mọi chuyển tiếp một cách tự động từ các sự kiện kiểm
soát phiên bản và CI/CD, không phải từ việc theo dõi giai đoạn tự báo cáo, áp dụng cùng nguyên
tắc đo đạc-hơn-tự báo cáo từ chủ đề 1.5.

### Tách thời gian chờ khỏi thời gian hoạt động trong mỗi giai đoạn

Ví dụ trong đánh giá, hãy phân biệt thời gian một pull request nằm yên chờ người đánh giá bắt đầu
(thời gian chờ) với thời gian một cuộc trao đổi đánh giá tích cực mất khi nó bắt đầu (thời gian
hoạt động). Sự phân biệt này thường lộ ra rằng chi phí chi phối là xếp hàng, không phải công sức,
điều chỉ về một cách sửa rất khác (thêm năng lực người đánh giá, thông báo tốt hơn, pull request
nhỏ hơn để đánh giá) so với cách sửa nhắm vào việc làm cho chính các cuộc trao đổi đánh giá nhanh
hơn.

### Tìm một nút thắt dùng chung trước khi chẩn đoán từng đội một

Khi nhiều đội cho thấy cùng một giai đoạn là độ trễ chi phối của họ, một đường ống CI dùng chung
chậm, một nhóm đánh giá dùng chung quá tải, một chuyến phát hành dùng chung không thường xuyên,
nguyên nhân chung đó là một cơ hội đầu tư cấp nền tảng, không phải một loạt vấn đề cục bộ không
liên quan. Hãy tổng hợp dữ liệu thời gian chu kỳ xuyên các đội cụ thể để tìm kiểu mẫu này trước
khi cho rằng nút thắt của mỗi đội là riêng của đội đó.

### Dùng thời gian chu kỳ để đặt các mục tiêu cải thiện thực tế, theo từng giai đoạn

Thay vì một mục tiêu duy nhất "giảm thời gian dẫn 20%", không cho đội hướng dẫn nào về nơi cần
tập trung, hãy dùng phân rã thời gian chu kỳ để đặt một mục tiêu theo từng giai đoạn: "giảm thời
gian chờ đánh giá trung vị từ hai ngày xuống bốn giờ." Một mục tiêu cụ thể, nhắm vào giai đoạn
vừa dễ hơn cho một đội hành động theo vừa dễ kiểm chứng hơn rằng nó thực sự đạt được qua thay đổi
quy trình thật chứ không phải một dịch chuyển không liên quan ở nơi khác.

### Cảnh giác với việc lách ranh giới giai đoạn

Cũng như điểm bắt đầu và kết thúc của thời gian luồng có thể trôi (chủ đề 2.4), các ranh giới giai
đoạn thời gian chu kỳ riêng lẻ có thể dịch chuyển theo cách làm đẹp con số của một giai đoạn cụ
thể mà không có cải thiện thật nào, ví dụ đánh dấu một lần đánh giá "đã bắt đầu" ngay khi người
đánh giá được gán thay vì khi họ thực sự bắt đầu đọc thay đổi. Hãy định kỳ kiểm toán việc đo đạc
ranh giới giai đoạn so với định nghĩa đã ghi của nó.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Thời gian chu kỳ thô (hai hoặc ba giai đoạn) | Đơn giản để đo đạc và giải thích | Có thể không xác định đủ chính xác nút thắt thật để hành động |
| Thời gian chu kỳ mịn (nhiều giai đoạn, tách chờ và hoạt động) | Chẩn đoán chính xác, mục tiêu theo giai đoạn hành động được | Nhiều công sức đo đạc hơn; nhiều con số hơn để duy trì và giải thích |
| Rà soát thời gian chu kỳ từng đội | Phù hợp với quy trình thực của từng đội | Có thể bỏ sót một nút thắt dùng chung, xuyên đội ẩn sau các con số cục bộ giống nhau |
| Rà soát thời gian chu kỳ tổng hợp xuyên đội | Làm lộ các nút thắt cấp nền tảng dùng chung | Cần các định nghĩa giai đoạn chuẩn hóa xuyên đội mới có ý nghĩa |

Mâu thuẫn trung tâm là **độ chính xác chẩn đoán so với chi phí đo đạc**. Theo dõi thời gian chu kỳ
mịn hơn cho một chẩn đoán hành động được hơn nhưng tốn nhiều hơn để xây và duy trì, và thêm nhiều
con số mà đội phải hiểu và tin. Hãy giải quyết bằng cách bắt đầu thô (viết mã, đánh giá, triển
khai) và chỉ thêm các phép chia mịn hơn, chờ so với hoạt động trong một giai đoạn cụ thể, khi giai
đoạn đó được xác nhận là một nút thắt thực sự, lặp lại, đáng khoản đầu tư đo đạc thêm.

## Câu hỏi để thảo luận với đội của bạn

1. **Nếu thời gian dẫn suy giảm hôm nay, chúng ta có nói được trong vòng một giờ giai đoạn cụ thể
   nào chịu trách nhiệm, bằng dữ liệu thay vì phỏng đoán không?** Đây là phép thử cốt lõi cho việc
   đo đạc thời gian chu kỳ của bạn có thực sự phục vụ mục đích chẩn đoán không. Nếu câu trả lời
   trung thực là không, khoảng trống đó đáng được lấp trước khi lần suy giảm tiếp theo xảy ra.

2. **Trong giai đoạn nút thắt chi phối của chúng ta, bao nhiêu độ trễ là thời gian chờ so với thời
   gian hoạt động?** Phần lớn các đội cho rằng công sức hoạt động là ràng buộc trước khi kiểm tra,
   trong khi xếp hàng thường là chi phí lớn hơn. Hãy lấy tỷ lệ chia thật cho giai đoạn chậm nhất
   của bạn và xem giả định đó có đứng vững không.

3. **Có nhiều đội cùng chia sẻ một giai đoạn nút thắt chi phối, gợi ý một cách sửa cấp nền tảng
   thay vì cấp đội không?** Hãy tổng hợp dữ liệu thời gian chu kỳ của bạn xuyên các đội và tìm
   tường minh kiểu mẫu này trước khi cho rằng sự chậm chạp của mọi đội đều do nguyên nhân cục bộ.

4. **Chúng ta đã đặt các mục tiêu cải thiện theo từng giai đoạn, hay chỉ một mục tiêu thời gian dẫn
   tổng thể duy nhất không có hướng dẫn về nơi cần tập trung?** Một mục tiêu mơ hồ để đội đoán nơi
   đầu tư công sức; một mục tiêu theo giai đoạn thì không. Hãy kiểm tra các mục tiêu hiện tại của
   bạn so với sự phân biệt này.

5. **Có ranh giới giai đoạn thời gian chu kỳ nào trong việc đo đạc của chúng ta đã trôi khỏi định
   nghĩa được ghi lại theo thời gian không?** Ranh giới giai đoạn chịu cùng sự trôi định nghĩa như
   chính thời gian luồng (chủ đề 2.4). Hãy kiểm toán một mẫu các sự kiện chuyển tiếp giai đoạn gần
   đây so với định nghĩa viết ra.

6. **Một văn hóa nặng về đánh giá so với một văn hóa nặng về tin tưởng hiện ra khác nhau thế nào
   trong dữ liệu thời gian chu kỳ của chúng ta?** Một đội có đánh giá rất kỹ, nhiều vòng sẽ cho
   thấy thời gian giai đoạn đánh giá dài hơn một đội tin tưởng việc gộp với một lần phê duyệt;
   hãy bàn xem sự cân bằng hiện tại của bạn phản ánh một lựa chọn có chủ đích hay một mặc định
   chưa được xem xét.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Thời gian chu kỳ thường bị chi phối bởi thời gian viết mã hơn là các giai đoạn đánh
giá hay triển khai, đơn giản vì quy trình tối thiểu. Khi đội lớn hơn vài kỹ sư, hãy bắt đầu theo dõi
cụ thể thời gian chờ đánh giá, vì đó thường là giai đoạn đầu tiên chậm lại khi công việc của nhiều
người hơn phải đi qua ít người đánh giá hiện có hơn.

**Doanh nghiệp nhỏ.** Phân tích cơ bản của nền tảng kiểm soát phiên bản thường đã đủ để lộ thời gian
cấp giai đoạn (thời gian đến lần đánh giá đầu, thời gian đến lúc gộp) mà không cần đo đạc tùy chỉnh.
Hãy tập trung vào giai đoạn đánh giá trước, vì nó là nút thắt sớm phổ biến nhất và dễ sửa nhất bằng
một thay đổi quy trình nhỏ như luân phiên người đánh giá.

**Doanh nghiệp lớn.** Các nút thắt dùng chung qua hàng chục đội là phổ biến và đáng tìm vì đòn bẩy
cao: một hàng đợi CI dùng chung quá tải hay một bước đánh giá trung tâm bắt buộc có thể lặng lẽ đánh
thuế thời gian dẫn toàn tổ chức. Hãy đầu tư cụ thể vào tổng hợp thời gian chu kỳ xuyên đội để làm lộ
những ràng buộc dùng chung này thay vì để mỗi đội tự chẩn đoán độc lập.

**Chính phủ.** Dữ liệu thời gian chu kỳ là công cụ mạnh, cụ thể để biện minh hiện đại hóa quy trình
với các bên liên quan hoài nghi, vì "thời gian chờ đánh giá trung bình bốn ngày do một vai trò phê
duyệt bị nghẽn" là một lập luận đầu tư cụ thể, thuyết phục hơn nhiều so với tuyên bố trừu tượng
"quy trình của chúng ta chậm".

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty hạ tầng đám mây nhận thấy thời gian dẫn
tăng dần ở gần như mọi đội cùng lúc. Việc tổng hợp thời gian chu kỳ xuyên đội cho thấy thời gian chờ
đánh giá, không phải thời gian đánh giá hoạt động, là nguyên nhân chi phối và dùng chung: một đội
rà soát bảo mật nhỏ, tập trung đã thành nút thắt khi số đội cần sự chấp thuận của họ tăng nhanh hơn
chính đội đó. Việc mở rộng và đào tạo một nhóm người đánh giá được chứng nhận bảo mật rộng hơn, thay
vì yêu cầu từng đội bằng cách nào đó viết mã hay kiểm thử nhanh hơn, đã giải quyết nút thắt dùng
chung và đưa thời gian dẫn xuống lại trên diện rộng trong vòng một quý.

**Chính phủ.** Đội dịch vụ số của một chính quyền bang chịu áp lực giảm thời gian dẫn, và ban đầu phản
ứng bằng cách yêu cầu kỹ sư làm nhanh hơn, một bản năng tự nhiên nhưng cuối cùng không giúp ích.
Phân rã thời gian chu kỳ cho thấy thời gian viết mã hoạt động hầu như không đổi so với năm trước;
gần như toàn bộ sự suy giảm đến từ một hàng đợi ngày càng dài ở một giai đoạn rà soát kiến trúc bắt
buộc được đưa vào mười tám tháng trước như một biện pháp tuân thủ. Đội thiết kế lại đợt rà soát đó
thành một quy trình nhẹ hơn, phân tầng theo rủi ro cho các thay đổi rủi ro thấp, cắt giảm đáng kể
thời gian chờ đánh giá trong khi vẫn giữ nguyên sự nghiêm ngặt đầy đủ của đánh giá cho các thay đổi
thực sự rủi ro cao.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc phân rã thời gian chu kỳ là đầu tư có mục tiêu, hiệu quả: một tổ chức biết chính
xác giai đoạn nào là nút thắt có thể sửa đúng giai đoạn đó thay vì dàn mỏng công sức qua cả quy
trình với hy vọng điều gì đó giúp ích. Ví dụ rà soát bảo mật ở trên là điển hình: một cách sửa nhắm
đúng mục tiêu, mở rộng một nguồn lực bị nghẽn cụ thể, đã giải quyết một vấn đề toàn tổ chức với chi
phí thấp hơn nhiều so với một sáng kiến "tăng tốc phân phối" rộng, thiếu tập trung.

Tổng chi phí sở hữu là công sức đo đạc để ghi lại dấu thời gian cấp giai đoạn một cách đáng tin và
kỷ luật liên tục là định kỳ kiểm toán ranh giới giai đoạn xem có trôi không. Chi phí đó đáng bỏ ra
vì phương án thay thế, đoán nút thắt và sửa nhầm giai đoạn, lãng phí nhiều công sức kỹ thuật hơn
nhiều theo thời gian so với chính chi phí đo đạc.

## Phản mẫu và cạm bẫy

- **Phản ứng với một sự suy giảm thời gian dẫn mà không chẩn đoán thời gian chu kỳ:** thường dẫn đến
  việc sửa nhầm giai đoạn.
- **Cho rằng công sức hoạt động, không phải thời gian chờ, là chi phí chi phối:** thường sai; xếp hàng
  chi phối ở hầu hết các đường ống phân phối thực (chủ đề 2.5).
- **Bỏ sót một nút thắt dùng chung, xuyên đội vì chỉ rà soát thời gian chu kỳ từng đội một:** để lại
  một cách sửa cấp nền tảng đòn bẩy cao chưa được khám phá.
- **Đặt một mục tiêu thời gian dẫn tổng thể mơ hồ không có hướng dẫn theo giai đoạn:** để các đội đoán
  nơi tập trung công sức.
- **Sự trôi định nghĩa ranh giới giai đoạn:** làm đẹp con số của một giai đoạn cụ thể mà không cải
  thiện thật.
- **Đo đạc mọi giai đoạn mịn có thể trước khi xác nhận bất kỳ giai đoạn nào là nút thắt thật:** lãng
  phí công sức đo đạc vào chi tiết chưa thông tin cho quyết định nào.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Thời gian chu kỳ hoàn toàn không được phân rã; các đội đoán nút thắt khi thời
  gian dẫn suy giảm.
- **Mức 2, Phát triển:** Một số đội theo dõi thời gian giai đoạn thô một cách không chính thức, nhưng
  không có đo đạc nhất quán hay so sánh xuyên đội.
- **Mức 3, Chuẩn hóa:** Ranh giới giai đoạn được đo đạc nhất quán trên toàn tổ chức, với thời gian chờ
  được tách khỏi thời gian hoạt động ở các giai đoạn nút thắt chi phối.
- **Mức 4, Quản lý:** Tổng hợp thời gian chu kỳ xuyên đội chủ động làm lộ các nút thắt dùng chung; các
  mục tiêu cải thiện theo giai đoạn thay thế các mục tiêu thời gian dẫn tổng thể mơ hồ.
- **Mức 5, Điều phối:** Dữ liệu thời gian chu kỳ trực tiếp thúc đẩy việc ưu tiên đầu tư nền tảng, và tổ
  chức có thể chỉ ra các cách sửa cụ thể, nhắm mục tiêu, một nhóm đánh giá mở rộng, một đường ống dùng
  chung nhanh hơn, đã cải thiện đo được thời gian dẫn ở nhiều đội cùng lúc.

## Ý tưởng để thảo luận

1. Giai đoạn nút thắt chi phối hiện tại của chúng ta là gì, và chúng ta tự tin đến đâu vào câu trả lời đó?
2. Bao nhiêu thời gian của giai đoạn nút thắt đó là thời gian chờ so với thời gian hoạt động?
3. Có đội nào của chúng ta chia sẻ cùng nút thắt, gợi ý một cách sửa cấp nền tảng không?
4. Lần cuối chúng ta đặt một mục tiêu cải thiện phân phối theo giai đoạn, thay vì tổng thể, là khi nào?
5. Có định nghĩa ranh giới giai đoạn nào trong công cụ của chúng ta từng thay đổi mà không được ghi lại không?

## Điểm chính cần nhớ

- Thời gian chu kỳ **phân rã thời gian luồng** thành các giai đoạn kỹ thuật, viết mã, đánh giá, kiểm
  thử, triển khai, và là tầng chẩn đoán nằm dưới con số tóm tắt đó.
- Hãy tách **thời gian chờ khỏi thời gian hoạt động** trong mỗi giai đoạn; xếp hàng thường chi phối
  công sức hoạt động (chủ đề 2.5).
- Hãy tìm **các nút thắt dùng chung qua các đội** trước khi cho rằng sự chậm lại là riêng của một đội;
  một nguyên nhân chung thường là cơ hội đầu tư nền tảng.
- Hãy đặt **mục tiêu cải thiện theo từng giai đoạn**, không phải các mục tiêu tổng thể mơ hồ, để các
  đội biết chính xác nơi cần tập trung.
- Ranh giới giai đoạn chịu cùng rủi ro **trôi định nghĩa** như chính thời gian luồng; hãy kiểm toán
  chúng định kỳ.
- Chủ đề 2.7 đưa ra toán học nền tảng, định luật Little, giải thích vì sao công việc đang thực hiện và
  thời gian chu kỳ dịch chuyển cùng nhau.

## Tài liệu tham khảo và đọc thêm

- *The Principles of Product Development Flow*, của Donald G. Reinertsen (lý thuyết hàng đợi và lập
  luận cỡ lô làm nền tảng cho phân tích thời gian chu kỳ).
- *Actionable Agile Metrics for Predictability*, của Daniel S. Vacanti (đo lường thời gian chu kỳ và
  dựa trên luồng cho phân phối phần mềm).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble và Gene Kim
  (thời gian dẫn và mối quan hệ của nó với hiệu suất phân phối).
- *The Goal*, của Eliyahu M. Goldratt (lý thuyết về ràng buộc, và nguyên tắc tìm và sửa nút thắt thực
  sự thay vì tối ưu ở mọi nơi).
