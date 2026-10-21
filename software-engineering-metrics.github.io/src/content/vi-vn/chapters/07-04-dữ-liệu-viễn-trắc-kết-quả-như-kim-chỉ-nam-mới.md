# 7.4 Dữ liệu viễn trắc kết quả như kim chỉ nam mới

## Tổng quan và động lực

Chủ đề này khép lại Phần 7, và theo nghĩa thật khép lại lập luận mà cả cuốn sách này đã xây từ chủ đề 1.3, bằng một tuyên bố duy nhất,
trực tiếp: khi AI sinh tạo làm cho đầu ra thô trở nên rẻ, **dữ liệu [viễn trắc](https://en.wikipedia.org/wiki/Telemetry) kết quả
(outcome telemetry)**, phép đo liên tục, có đo đạc về các kết quả thật chứ không phải hoạt động hay đầu ra, thôi là một thực hành tốt
trong số nhiều thực hành và trở thành nguyên tắc tổ chức mà một chương trình chỉ số phải được xây quanh. Đây không phải một ý tưởng mới
được đưa ra lần đầu ở đây. Đó là ý tưởng chủ đề 1.3 giới thiệu ở phần mở đầu của cuốn sách này, nay được trình bày như phản ứng cần
thiết, chứ không chỉ đáng mong muốn hơn, trước một sự chuyển dịch công nghệ đã khiến mọi phương án khác nguy hiểm hơn trước.

Logic rất trực tiếp. Trước AI sinh tạo, khối lượng đầu ra là một đại diện không hoàn hảo nhưng không vô giá trị cho công sức và, một cách
lỏng lẻo, cho giá trị; một đội giao nhiều tính năng hơn ít nhất đã làm nhiều việc hơn, dù việc đó không phải lúc nào cũng đúng việc. AI
sinh tạo cắt đứt ngay cả mối nối lỏng lẻo đó: khối lượng đầu ra không còn chỉ báo đáng tin cho công sức, vì một công cụ có thể tạo ra nó
trong vài giây, và chắc chắn không chỉ báo giá trị, vì chủ đề 7.3 đã cho thấy đầu ra bị thổi phồng có thể cùng tồn tại với chất lượng
suy giảm. Các chỉ số còn nguyên vẹn qua sự chuyển dịch này chính là những chỉ số mà cuốn sách này đã nhấn mạnh xây hướng tới từ các chủ
đề mở đầu: tỷ lệ lỗi lọt (chủ đề 5.1), mức áp dụng tính năng (chủ đề 5.2), kết quả khách hàng và kinh doanh (chủ đề 5.3), độ tin cậy
(Phần 6) và sức khỏe tinh thần của lập trình viên (Phần 3). Không cái nào trong số này phụ thuộc vào việc mã nền được tạo ra thế nào;
tất cả đều đo điều thực sự xảy ra như một kết quả.

Với các đội lớn, lập luận của chủ đề này có hệ quả thực tế, trực tiếp cho cách một chương trình chỉ số nên được xây và xây lại từ nay.
Các tổ chức doanh nghiệp thiết kế lại bảng điều khiển kỹ thuật của mình trước việc áp dụng AI nên nghiêng đầu tư riêng về hạ tầng dữ liệu
viễn trắc kết quả mà chủ đề này mô tả; các tổ chức chính phủ, đánh giá cả công cụ AI lẫn các chương trình công nghệ rộng hơn mà nó được
nhúng vào, nên áp cho cả hai cùng tiêu chuẩn dữ liệu viễn trắc kết quả mà chủ đề này khuyến nghị làm mức cơ sở cho bất kỳ đánh giá đáng
tin, chống lỗi thời nào.

## Các nguyên tắc chính

- **Dữ liệu viễn trắc kết quả trở nên cần thiết, không chỉ đáng mong muốn, một khi đầu ra rẻ.** Đây là nguyên tắc sáng lập của chủ đề 1.3,
  nay cấp bách thay vì mang tính khát vọng.
- **Các chỉ số còn nguyên qua sự chuyển dịch này là những chỉ số mà cuốn sách này đã xây hướng tới xuyên suốt**: lỗi lọt, mức áp dụng,
  kết quả kinh doanh, độ tin cậy và sức khỏe tinh thần.
- **Một chương trình chỉ số xây chủ yếu quanh các chỉ số đầu ra giờ là một khoản nợ, không chỉ là một lựa chọn dưới mức tối ưu.** Các chỉ
  số đầu ra có thể bị thổi phồng rẻ và nhanh ở quy mô lớn.
- **Dữ liệu viễn trắc kết quả đòi hỏi đầu tư thật**, đo đạc, sự kiên nhẫn với tín hiệu chậm hơn, và kỷ luật tổ chức để cưỡng lại lực kéo
  về các chỉ số đầu ra nhanh hơn, rẻ hơn nhưng nay không đáng tin.
- **Nguyên tắc này sống lâu hơn bất kỳ công cụ AI hay nhà cung cấp cụ thể nào.** Đó là một phản ứng bền vững trước một sự chuyển dịch bền
  vững về ý nghĩa của đầu ra, không phải một điều chỉnh tạm thời cho một xu hướng thoáng qua.

## Khuyến nghị

### Kiểm toán tỷ lệ đầu tư chỉ số của bạn: dữ liệu viễn trắc kết quả so với theo dõi đầu ra

Hãy tính gần đúng phần nào của hạ tầng chỉ số hiện tại của bạn, công sức đo đạc, không gian bảng điều khiển, thời gian họp xem xét, dành
cho các chỉ số kết quả (Phần 5, Phần 6, sức khỏe tinh thần của lập trình viên từ Phần 3) so với các chỉ số đầu ra và hoạt động (số lần
triển khai, khối lượng commit, thông lượng pull request). Nếu việc theo dõi đầu ra chiếm ưu thế, chính tỷ lệ đó giờ là một khoản nợ theo
lập luận của chủ đề này, và cân bằng lại nó là thay đổi đòn bẩy cao nhất mà chủ đề này khuyến nghị.

### Đầu tư hạ tầng dữ liệu viễn trắc kết quả một cách có chủ đích, như một khoản đầu tư kỹ thuật hạng nhất

Đo kết quả, theo dõi mức áp dụng tính năng, tương quan kết quả kinh doanh (chủ đề 5.3), đo đạc độ tin cậy (Phần 6), đòi hỏi đầu tư kỹ
thuật thật, liên tục mà nhiều tổ chức trong lịch sử đã cấp nguồn lực thiếu so với các chỉ số đầu ra tương đối rẻ và dễ vốn thống trị
nhiều bảng điều khiển ngày nay. Hãy đối xử với khoản đầu tư hạ tầng này với cùng sự nghiêm túc mà cuốn sách này áp dụng cho mọi năng lực
kỹ thuật quan trọng khác, không phải một mối quan tâm thứ yếu sau khoản đầu tư công cụ AI.

### Chấp nhận và truyền đạt rằng dữ liệu viễn trắc kết quả chậm hơn, và xây sự kiên nhẫn cho điều đó vào kỳ vọng của tổ chức

Các chỉ số kết quả, gần như về bản chất, chậm trễ hơn và nhiễu hơn các chỉ số đầu ra (sự phân biệt dẫn trước-so-với-chậm sau của chủ đề
1.3, sự thận trọng thống kê của chủ đề 1.6). Một tổ chức quen với phản hồi nhanh, thỏa mãn của việc xem một con số đầu ra tăng cần xây sự
kiên nhẫn thật cho tín hiệu chậm hơn, trung thực hơn mà dữ liệu viễn trắc kết quả cung cấp, và lãnh đạo cần chủ động truyền đạt và làm
gương sự kiên nhẫn đó thay vì phản xạ với tay tới phương án nhanh hơn, nay không đáng tin dưới áp lực phải cho thấy kết quả nhanh.

### Dùng sự chuyển dịch này làm dịp để ngừng các chỉ số đầu ra thực sự lỗi thời, không chỉ thêm các chỉ số kết quả bên cạnh chúng

Theo kỷ luật của chủ đề 1.1 về ngừng các chỉ số không còn xứng đáng chỗ đứng, hãy dùng thời điểm này như một dịp có chủ đích để gỡ các
chỉ số đầu ra và hoạt động mà sự chuyển dịch này đã làm mất giá trị cụ thể, thay vì đơn giản thêm các chỉ số kết quả lên trên một bảng
điều khiển hiện có không đổi. Một bảng điều khiển giữ mọi chỉ số đầu ra cũ trong khi gắn thêm các chỉ số kết quả mới sẽ phình to chứ
không thực sự được cải thiện.

### Coi đầu tư dữ liệu viễn trắc kết quả là bền vững, độc lập với bất kỳ công cụ AI hay quan hệ nhà cung cấp cụ thể nào

Hãy xây hạ tầng dữ liệu viễn trắc kết quả như một năng lực tổ chức lâu dài, không phải một phản ứng đặc thù cho công cụ AI nào tổ chức của
bạn tình cờ đang dùng năm nay. Nguyên tắc này, và hạ tầng nó đòi hỏi, sẽ sống lâu hơn bất kỳ quan hệ nhà cung cấp hay thế hệ công cụ cụ
thể nào, và xây nó như một năng lực bền vững bảo vệ chương trình chỉ số của bạn trước sự chuyển dịch công nghệ kế tiếp cũng như sự
chuyển dịch hiện tại.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Bảng điều khiển do chỉ số đầu ra thống trị | Phản hồi nhanh, rẻ; quen thuộc với hầu hết tổ chức | Nay không đáng tin một cách chủ động do tác động của AI sinh tạo lên chi phí đầu ra |
| Bảng điều khiển do dữ liệu viễn trắc kết quả thống trị | Bền vững trước sự chuyển dịch này; đo điều thực sự quan trọng | Tín hiệu chậm hơn, nhiễu hơn; cần đầu tư đo đạc thật |
| Thêm chỉ số kết quả bên cạnh các chỉ số đầu ra không đổi | Từng bước, ít gián đoạn hơn | Tạo ra bảng điều khiển phình to thay vì cải thiện thật |
| Cân bằng lại hoàn toàn, có chủ đích về phía dữ liệu viễn trắc kết quả | Xử lý sự chuyển dịch trực tiếp và đầy đủ | Cần thay đổi tổ chức và đầu tư đáng kể nhất |

Sự căng thẳng trung tâm, theo nghĩa thật, là cùng sự căng thẳng mà cuốn sách này mở đầu ở chủ đề 1.3, nay được mài sắc đến dạng cấp bách
nhất: **phản hồi nhanh, quen thuộc so với tín hiệu chậm hơn, trung thực**. Các chỉ số đầu ra luôn dễ và nhanh để tạo ra hơn; lập luận của
chủ đề này là AI sinh tạo đã đưa sự đánh đổi đó từ chỉ dưới mức tối ưu sang nguy hiểm một cách chủ động. Hãy giải quyết sự căng thẳng theo
cách cuốn sách này đã khuyến nghị từ chủ đề mở đầu: gia quyền dứt khoát về phía kết quả, chấp nhận phản hồi chậm hơn đi cùng với việc đo
giá trị thật, và coi sự khó chịu của phản hồi chậm hơn đó là cái giá trung thực của việc đo thứ có thật thay vì thứ chỉ tiện lợi.

## Câu hỏi để thảo luận với đội của bạn

1. **Phần nào của hạ tầng chỉ số và sự chú ý trên bảng điều khiển hiện tại của chúng ta dành cho các chỉ số kết quả so với các chỉ số đầu
   ra và hoạt động?** Hãy tính tỷ lệ này một cách thành thật; hầu hết các tổ chức, khi đánh giá lần đầu, thấy nó nghiêng về đầu ra hơn
   họ đã đoán.

2. **Khoản đầu tư hạ tầng dữ liệu viễn trắc kết quả cụ thể nào chúng ta đã trì hoãn để ưu tiên việc theo dõi đầu ra nhanh hơn, rẻ hơn?**
   Hãy gọi tên một ví dụ cụ thể, đo đạc mức áp dụng tính năng, công cụ tương quan kết quả kinh doanh, và thảo luận cần gì để thực sự xây
   nó.

3. **Tổ chức của chúng ta đã xây sự kiên nhẫn thật cho phản hồi chậm hơn của dữ liệu viễn trắc kết quả, hay áp lực phải có kết quả nhanh
   cứ kéo chúng ta về các chỉ số đầu ra nhanh hơn nhưng nay không đáng tin?** Hãy thành thật về mẫu hình này trong các báo cáo và buổi
   xem xét gần đây của chính bạn.

4. **Chỉ số đầu ra hay hoạt động nào trên bảng điều khiển hiện tại của chúng ta là ứng viên thật sự để ngừng, nay khi lập luận của chủ đề
   này áp dụng cụ thể cho nó?** Hãy xác định ít nhất một cái, và thảo luận cái gì cần thay thế nó thay vì đơn giản để lại một khoảng
   trống.

5. **Nếu nhà cung cấp công cụ AI của chúng ta hay thế hệ trợ lý lập trình AI hiện tại thay đổi mạnh vào năm sau, chương trình chỉ số của
   chúng ta có còn đứng vững không?** Điều này kiểm tra liệu khoản đầu tư dữ liệu viễn trắc kết quả của bạn có thực sự bền vững, được
   xây như một năng lực lâu dài, hay chỉ là một phản ứng đặc thù cho tình huống công cụ hiện tại.

6. **Tổ chức của chúng ta sẽ trông ra sao khi cam kết hoàn toàn với lập luận của chủ đề này, cân bằng lại đầu tư chỉ số dứt khoát về phía
   kết quả thay vì từng bước?** Hãy phác họa điều này một cách cụ thể thay vì để trừu tượng; khoảng cách giữa trạng thái hiện tại và tầm
   nhìn này là lộ trình thật của tổ chức bạn để đáp lại sự chuyển dịch này.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Xây dữ liệu viễn trắc kết quả sớm, trước khi các chỉ số đầu ra kịp trở thành thói quen tổ chức ăn sâu, thực sự dễ hơn
bổ sung sau. Một công ty non trẻ áp dụng trợ lý lập trình AI ngay từ đầu có cơ hội thật để xây chương trình chỉ số theo hướng kết quả
trước tiên thay vì phải gỡ một văn hóa đã bị các chỉ số đầu ra thống trị.

**Doanh nghiệp nhỏ.** Hãy tập trung đầu tư dữ liệu viễn trắc kết quả vào chỉ số kết quả duy nhất phản ánh trực tiếp nhất sự sống còn và
tăng trưởng (chủ đề 5.3), thay vì cố đo đạc toàn diện mọi nhóm kết quả mà cuốn sách này bàn. Một khoản đầu tư dữ liệu viễn trắc kết quả
khiêm tốn, tập trung thắng một bảng điều khiển chỉ số đầu ra toàn diện mà lập luận của chủ đề này nay đã làm mất giá trị cụ thể.

**Doanh nghiệp lớn.** Việc cân bằng lại mà chủ đề này khuyến nghị là một thay đổi tổ chức thật, đáng kể ở quy mô này, nhiều khả năng đòi
hỏi sự bảo trợ của lãnh đạo và một kế hoạch đầu tư nhiều quý. Hãy đối xử với nó nghiêm túc như mọi khoản đầu tư hạ tầng lớn khác mà
cuốn sách này bàn, và dùng các ví dụ cụ thể từ chủ đề 7.1 và 7.3, thổi phồng chỉ số và pha loãng chất lượng mà một bảng điều khiển được
cân bằng lại sẽ bắt sớm hơn, để xây luận cứ nội bộ cho khoản đầu tư.

**Chính phủ.** Các chương trình công nghệ chính phủ được đánh giá chủ yếu bằng các chỉ số phân phối và đầu ra (tính năng đã giao, đúng
tiến độ) ngày càng dễ bị chính sự hoài nghi mà chủ đề 5.3 mô tả, và lập luận của chủ đề này làm sự dễ bị tổn thương đó sắc hơn nữa khi
việc áp dụng công cụ AI lan qua ngành rộng hơn mà các cơ quan chính phủ tuyển dụng và bị so sánh với. Hãy xây dữ liệu viễn trắc kết quả
làm cơ sở chính cho báo cáo công khai và biện minh ngân sách, đặt tổ chức của bạn đi trước, thay vì sau, sự chuyển dịch này.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty phần mềm, được thúc đẩy trực tiếp bởi suýt soát thổi phồng chỉ số được mô tả
trong ví dụ công nghệ tài chính của chủ đề 7.1, đã tiến hành kiểm toán toàn bộ tỷ lệ đầu tư chỉ số của mình và thấy gần 70% không gian
bảng điều khiển và công sức đo đạc dành cho các chỉ số đầu ra và hoạt động, chỉ có đầu tư khiêm tốn, không nhất quán cho dữ liệu viễn
trắc kết quả. Trong năm sau, công ty cân bằng lại tỷ lệ này một cách có chủ đích, ngừng một số chỉ số đầu ra mà cuộc kiểm toán của chủ
đề 7.1 đã gắn cờ là dễ bị ảnh hưởng nhất và đầu tư năng lực giải phóng vào đo đạc mức áp dụng tính năng và kết quả kinh doanh (chủ đề
5.2, 5.3). Bảng điều khiển kết quả, được trình bày tại cuộc họp hội đồng quản trị năm sau, được chính thành viên hội đồng từng hoài nghi
đó tường minh ghi nhận là cơ sở đáng tin hơn đáng kể để đánh giá đầu tư kỹ thuật so với phiên bản nặng về đầu ra mà nó thay thế.

**Chính phủ.** Một cơ quan dịch vụ số quốc gia, xây một chương trình chỉ số kỹ thuật mới từ đầu chính vì bảng điều khiển trước đó, do các
chỉ số đầu ra thống trị, đã chịu sự hoài nghi kéo dài của cơ quan lập pháp, đã tường minh áp dụng nguyên tắc của chủ đề này làm quyết
định thiết kế sáng lập: dữ liệu viễn trắc kết quả, thời gian chờ của công dân, tỷ lệ hoàn thành dịch vụ, tỷ lệ lỗi lọt, sẽ là cơ sở chính
cho mọi báo cáo công khai, còn các chỉ số đầu ra và phân phối chỉ được giữ lại như công cụ chẩn đoán nội bộ, không bao giờ là bằng chứng
tiêu đề trình bày ra bên ngoài. Thiết kế kết quả trước tiên này, được xây có chủ đích trước sự chuyển dịch AI sinh tạo mà phần này mô tả,
đã cho báo cáo của cơ quan một độ bền và uy tín với ủy ban giám sát mà chương trình tiền nhiệm, xây quanh các giả định đầu ra của một
thế hệ trước, chưa bao giờ đạt được.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc cam kết dứt khoát với dữ liệu viễn trắc kết quả là một chương trình chỉ số vẫn đáng tin và có uy tín qua sự chuyển dịch
công nghệ hiện tại và bất cứ điều gì đến sau nó, thay vì một chương trình đòi hỏi một cuộc đại tu đáng kể khác lần sau khi đầu ra trở nên
rẻ qua một thay đổi công nghệ nào đó trong tương lai. Ví dụ công ty phần mềm ở trên cho thấy cụ thể điều này: bảng điều khiển được cân
bằng lại đã trực tiếp sửa chữa uy tín mà phiên bản nặng về đầu ra trước đó đã đặt vào rủi ro thật.

Tổng chi phí sở hữu là khoản đầu tư hạ tầng dữ liệu viễn trắc kết quả mà chủ đề này khuyến nghị, công việc thực sự đáng kể, nhiều quý
với một tổ chức lớn, đặt cạnh rủi ro dài hạn, bền vững của một chương trình chỉ số ngày càng kém đáng tin khi đầu ra tiếp tục rẻ đi. Đây
không phải một chi phí mà cuốn sách này yêu cầu bạn chấp nhận nhẹ nhàng; đó là hệ quả trực tiếp, cần thiết của việc coi lập luận sáng
lập của chủ đề 1.3 nghiêm túc như phần cuối này của cuốn sách yêu cầu bạn.

## Phản mẫu và cạm bẫy

- **Coi sự chuyển dịch này chỉ cần điều chỉnh từng bước thay vì cân bằng lại thật sự:** đánh giá thấp quy mô thay đổi mà AI sinh tạo đã
  đưa vào ý nghĩa của các chỉ số đầu ra.
- **Thêm chỉ số kết quả bên cạnh một bộ chỉ số đầu ra không đổi, vẫn thống trị:** tạo ra bảng điều khiển phình to thay vì sự cân bằng
  lại thật mà chủ đề này lập luận.
- **Xây đầu tư dữ liệu viễn trắc kết quả như phản ứng với một công cụ AI hiện tại cụ thể thay vì một năng lực bền vững:** để tổ chức phơi
  nhiễm trước sự chuyển dịch công nghệ kế tiếp theo cùng cách.
- **Không xây sự kiên nhẫn của tổ chức cho phản hồi chậm hơn của dữ liệu viễn trắc kết quả:** có nguy cơ quay lại các chỉ số đầu ra
  nhanh hơn nhưng nay không đáng tin dưới áp lực phải có kết quả nhanh.
- **Ngừng các chỉ số đầu ra mà không có sự thay thế bằng dữ liệu viễn trắc kết quả thật:** để lại một khoảng trống đo lường thay vì một
  cải thiện thật.
- **Trình bày sự chuyển dịch này với các bên liên quan chỉ như phản ứng với công cụ AI thay vì sự hoàn thành nguyên tắc sáng lập của cuốn
  sách này:** đánh giá thấp độ bền và tính khái quát của lập luận.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Bảng điều khiển vẫn do chỉ số đầu ra thống trị, không có phản ứng có chủ đích với sự chuyển dịch mà phần này mô tả.
- **Cấp 2, Phát triển:** Một số chỉ số kết quả đã được thêm, nhưng tỷ lệ đầu tư tổng thể vẫn nặng về đầu ra và không chỉ số nào bị ngừng
  có chủ đích.
- **Cấp 3, Chuẩn hóa:** Một cuộc kiểm toán và cân bằng lại có chủ đích về phía dữ liệu viễn trắc kết quả đã được tiến hành, với các chỉ
  số đầu ra thực sự lỗi thời bị ngừng, trên toàn tổ chức.
- **Cấp 4, Quản lý:** Hạ tầng dữ liệu viễn trắc kết quả được coi là một khoản đầu tư kỹ thuật hạng nhất, liên tục, và sự kiên nhẫn của tổ
  chức với phản hồi chậm hơn của nó được vun đắp và bảo vệ tích cực.
- **Cấp 5, Điều phối:** Chương trình chỉ số của tổ chức do dữ liệu viễn trắc kết quả dẫn dắt như một nguyên tắc thiết kế bền vững, lâu
  dài, được chứng minh vững vàng qua sự chuyển dịch công nghệ hiện tại và được xây tường minh để vẫn vững vàng qua bất cứ điều gì đến sau.

## Ý tưởng để thảo luận

1. Tỷ lệ thực tế hiện tại của chúng ta giữa đầu tư chỉ số kết quả và chỉ số đầu ra là bao nhiêu?
2. Chỉ số đầu ra đơn lẻ nào chúng ta nên ngừng quý này, và chỉ số kết quả nào nên thay thế nó?
3. Gần đây sự thiếu kiên nhẫn của tổ chức đã kéo chúng ta quay lại các chỉ số đầu ra nhanh hơn nhưng kém đáng tin ở đâu?
4. Đầu tư dữ liệu viễn trắc kết quả của chúng ta có bền vững, hay gắn riêng với tình huống công cụ AI hiện tại?
5. Cần gì để cam kết hoàn toàn với lập luận của chủ đề này, thay vì điều chỉnh từng bước?

## Những điểm chính cần nhớ

- Dữ liệu viễn trắc kết quả trở nên **cần thiết, không chỉ đáng mong muốn**, một khi AI sinh tạo làm đầu ra rẻ; đây là nguyên tắc sáng
  lập của chủ đề 1.3, nay cấp bách.
- **Các chỉ số còn nguyên qua sự chuyển dịch này** là những chỉ số mà cuốn sách này xây hướng tới xuyên suốt: lỗi lọt, mức áp dụng, kết
  quả kinh doanh, độ tin cậy và sức khỏe tinh thần.
- **Hãy kiểm toán và cân bằng lại tỷ lệ đầu tư chỉ số của bạn** một cách có chủ đích, ngừng các chỉ số đầu ra thực sự lỗi thời thay vì
  chỉ thêm các chỉ số kết quả bên cạnh chúng.
- Hãy xây **sự kiên nhẫn của tổ chức với phản hồi chậm hơn của dữ liệu viễn trắc kết quả**, và cưỡng lại lực kéo về các chỉ số đầu ra
  nhanh hơn nhưng nay không đáng tin dưới áp lực.
- Hãy xây khoản đầu tư này như một **năng lực bền vững**, độc lập với bất kỳ công cụ AI hay nhà cung cấp cụ thể nào, bảo vệ chương trình
  chỉ số của bạn trước các sự chuyển dịch công nghệ tương lai cũng như hiện tại.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (nền tảng đo lường dựa trên kết quả
  mà cả cuốn sách này, và chủ đề khép Phần 7 này, dựa vào).
- *Lean Analytics*, của Alistair Croll và Benjamin Yoskovitz (sự phân biệt chỉ số hành động được so với chỉ số phù phiếm mà lập luận của
  chủ đề này mở rộng sang kỷ nguyên AI).
- *The Innovator's Dilemma*, của Clayton M. Christensen (mẫu hình chung của việc các chỉ số và thực hành đã thiết lập trở thành gánh nặng
  dưới một sự chuyển dịch công nghệ mang tính đột phá).
- *Measure What Matters*, của John Doerr (đặt mục tiêu hướng kết quả như một nguyên tắc tổ chức cho chương trình chỉ số, mô hình mà chủ
  đề này lập luận giờ nên là mặc định, không phải ngoại lệ).
