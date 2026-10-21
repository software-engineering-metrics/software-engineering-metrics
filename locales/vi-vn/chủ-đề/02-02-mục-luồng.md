# 2.2 Mục luồng: tính năng, lỗi, rủi ro và nợ

## Tổng quan và động lực

Một **mục luồng (flow item)** là đơn vị công việc của Flow Framework, và mỗi mục luồng
thuộc về đúng một trong bốn loại: **tính năng (features)**, giá trị kinh doanh hay năng
lực mới được giao cho khách hàng; **lỗi (defects)**, các bản sửa chất lượng cho lỗi do
người dùng hoặc kiểm thử phát hiện; **rủi ro (risks)**, công việc về bảo mật, tuân thủ,
quyền riêng tư và quản trị bảo vệ doanh nghiệp; và **nợ (debt)**, [nợ kỹ thuật](https://en.wikipedia.org/wiki/Technical_debt),
cải thiện kiến trúc và công việc hạ tầng tạo điều kiện cho tốc độ tương lai. Chủ đề 2.1
đã giới thiệu khung mà bốn loại này thuộc về; chủ đề này đi sâu vào chính phép phân loại,
vì các loại chỉ mang lại giá trị nếu một đội phân loại công việc của mình vào chúng một
cách trung thực và nhất quán.

Đặc tính xác định của các mục luồng là việc phân bổ qua bốn loại là một **trò chơi tổng
bằng không**: trong bất kỳ giai đoạn nào có một lượng năng lực kỹ thuật cố định, và mỗi
giờ dành cho một tính năng là một giờ không dành cho nợ, rủi ro hay công việc sửa lỗi.
Đây không phải sự thật mới về phân phối phần mềm, mọi lãnh đạo kỹ thuật đều biết năng lực
là hữu hạn, nhưng phần lớn tổ chức không có cách nhất quán, trung thực nào để thấy sự phân
chia thực tế. Vận tốc sprint đếm story point bất kể loại; một backlog được đốt xuống trông
y hệt dù công việc đằng sau là một luồng thanh toán mới hay ba tháng khắc phục bảo mật thiếu
hào nhoáng. Mục luồng tồn tại cụ thể để làm sự phân chia vô hình đó hiện ra.

Với các đội lớn, sự hiển thị này thay đổi bản chất của một cuộc trò chuyện về nguồn lực.
Thay vì một lãnh đạo kỹ thuật đưa ra lập luận không định lượng rằng "chúng tôi cần thêm
thời gian cho nợ kỹ thuật", việc phân loại mục luồng tạo ra một con số thật, nợ đã tiêu 30%
năng lực quý trước, có thể được thảo luận, bảo vệ và điều chỉnh một cách có chủ đích với
các bên liên quan kinh doanh. Các tổ chức doanh nghiệp vận hành nhiều dòng sản phẩm đồng
thời và các cơ quan chính phủ cân bằng chức năng mới hướng công dân với rủi ro hệ thống di
sản đều phụ thuộc vào kiểu đánh đổi bảo vệ được, định lượng được này nhiều hơn hẳn một cảm
nhận riêng tư, không chính thức rằng "chúng ta đang dành quá nhiều thời gian cho bảo trì".

## Các nguyên tắc chính

- **Mỗi mục luồng thuộc về đúng một loại.** Buộc một phân loại duy nhất, thay vì cho phép
  một phân loại pha trộn hay mơ hồ, là điều làm phép phân loại dùng được cho báo cáo tổng
  hợp.
- **Phân bổ là tổng bằng không, không phải cộng dồn.** Nhiều năng lực hơn cho tính năng tất
  yếu là ít năng lực hơn cho lỗi, rủi ro và nợ trong cùng giai đoạn.
- **Không có phân bổ khỏe mạnh phổ quát.** Một sản phẩm non trẻ trong giai đoạn tăng trưởng
  có thể chính đáng nghiêng về tính năng; một hệ thống trưởng thành mang rủi ro kỹ thuật thật
  có thể chính đáng nghiêng về nợ và rủi ro.
- **Công việc nợ và rủi ro luôn bị báo cáo thiếu nếu không có kỷ luật này.** Nó thường xảy
  ra lặng lẽ, bị hấp thụ vào các "tác vụ kỹ thuật" chung chung, cho đến khi phân loại mục
  luồng buộc nó ra ánh sáng.
- **Chất lượng phân loại quyết định toàn bộ giá trị của phép phân loại.** Một phép phân loại
  áp dụng không nhất quán hoặc bị lách sau sự việc tạo ra những con số đánh lạc hướng thay vì
  cung cấp thông tin.

## Khuyến nghị

### Phân loại mọi mục ngay lúc tiếp nhận, dùng một định nghĩa viết ra cho từng loại

Hãy thống nhất một định nghĩa viết ra, ngắn gọn cho điều gì được tính là tính năng, lỗi, rủi
ro và nợ trong bối cảnh cụ thể của bạn, và yêu cầu mọi phần công việc mới được phân loại theo
định nghĩa đó ngay khi nó vào chuỗi giá trị, không phải sau khi hoàn thành. Một định nghĩa
được thống nhất từ trước chống lại cám dỗ phân loại hồi tố dựa trên việc một phần công việc
hóa ra trông thế nào, đúng là rủi ro bị lách mà chủ đề này nêu thẳng ngay bên dưới.

### Báo cáo phân bổ luồng như một xu hướng, không phải ảnh chụp đơn lẻ

Phân bổ của một giai đoạn đơn lẻ cho bạn biết ít hơn xu hướng qua nhiều giai đoạn. Một sự
trôi đều về phía một loại mục, tính năng tăng trong khi nợ lặng lẽ co lại quý này qua quý
khác, là tín hiệu mạnh hơn nhiều so với con số của bất kỳ giai đoạn đơn lẻ nào, và thường là
kiểu mẫu đáng nêu với các bên liên quan trước khi nó thành khủng hoảng chứ không phải sau.

### Đặt một phân bổ mục tiêu có chủ đích cùng các bên liên quan kinh doanh, không chỉ kỹ thuật

Hãy quyết định, cùng với lãnh đạo sản phẩm và kinh doanh, một phân bổ khỏe mạnh trông ra sao
cho giai đoạn hiện tại của chuỗi giá trị cụ thể của bạn, và xem lại mục tiêu đó định kỳ thay
vì để nó trôi theo mặc định. Một sản phẩm non trẻ ở giai đoạn tăng trưởng và một hệ thống
trưởng thành ở giai đoạn ổn định có các mục tiêu khỏe mạnh khác nhau một cách chính đáng, và
chính mục tiêu phải là một quyết định kinh doanh được thương lượng, không phải thứ kỹ thuật
lặng lẽ tự quyết.

### Đối chiếu phân loại mục luồng với bằng chứng độc lập

Hãy định kỳ so sánh phân bổ luồng của bạn với các chỉ số không phụ thuộc vào tự phân loại:
tỷ lệ lỗi lọt (chủ đề 5.1), đo lường nợ kỹ thuật (chủ đề 4.5), và các chỉ số quản lý lỗ hổng
(chủ đề 6.4). Nếu lỗi hoặc lỗ hổng đang tăng trong khi tỷ trọng mục luồng "lỗi" và "rủi ro" đi
ngang hoặc co lại, sự không khớp đó là tín hiệu rõ ràng nhất hiện có rằng việc phân loại đã
trôi khỏi thực tế.

### Cảnh giác cụ thể với kiểu mẫu nhà máy tính năng

Khi phân bổ luồng cho thấy tính năng liên tục hấp thụ gần như toàn bộ năng lực, quý này qua
quý khác, với công việc nợ và rủi ro không bao giờ vượt quá một tỷ trọng tượng trưng, kiểu
mẫu đó (đôi khi gọi là "nhà máy tính năng") thường có nghĩa là nợ và rủi ro đang bị bỏ đói
năng lực, không phải hệ thống thực sự không cần bảo trì. Kiểu mẫu này thoải mái trong ngắn
hạn và đắt về sau, cuối cùng hiện ra như một cuộc khủng hoảng chất lượng hay bảo mật đến mà
không có cảnh báo nào trên biểu đồ phân bổ luồng, vì sự tích tụ nền tảng chưa bao giờ nhìn
thấy được.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không phân loại chính thức (backlog chung) | Không tốn chi phí quy trình | Công việc nợ, rủi ro và lỗi vẫn vô hình; khó bảo vệ các quyết định nguồn lực |
| Phân loại mục luồng bốn kiểu | Làm phân bổ năng lực hiện ra và có thể thương lượng với các bên liên quan | Cần kỷ luật lúc tiếp nhận và một định nghĩa viết ra, được thống nhất cho mỗi loại |
| Phân loại mịn hơn (nhiều kiểu con) | Chi tiết chẩn đoán nhiều hơn | Nhiều công sức phân loại hơn; nhiều con số hơn để giải thích cho các bên liên quan |
| Phân loại hồi tố | Dễ áp dụng, không đổi quy trình từ đầu | Rất dễ bị lách; phân loại trôi về phía bất cứ thứ gì trông đẹp nhất |

Mâu thuẫn trung tâm là **kỷ luật phân loại so với chi phí quy trình**. Một phép phân loại
bốn kiểu cố ý thô, đủ thô để phân loại một mục chỉ mất vài giây, không phải một cuộc tranh
luận, nhưng độ thô đó chỉ đứng vững nếu kỷ luật phân loại lúc tiếp nhận, theo một định nghĩa
viết ra, được duy trì thực sự. Hãy giải quyết bằng cách giữ phép phân loại đúng đơn giản như
vậy, bốn kiểu, không hơn, và đầu tư mọi sự nghiêm ngặt thêm vào bước kiểm toán (đối chiếu với
bằng chứng độc lập) thay vì một sơ đồ phân loại công phu hơn sẽ mòn đi dưới khối lượng công
việc thật.

## Câu hỏi để thảo luận với đội của bạn

1. **Nếu chúng ta phân loại mọi thứ đội đã phát hành quý trước, sự phân chia thực tế giữa
   tính năng, lỗi, rủi ro và nợ sẽ trông thế nào, và nó có làm các bên liên quan ngạc nhiên
   không?** Phần lớn các đội chưa bao giờ làm bài tập này một cách trung thực. Hãy thử nó với
   dữ liệu thật trước khi cho rằng bạn đã biết câu trả lời.

2. **Chúng ta có một định nghĩa viết ra, được thống nhất về điều gì là tính năng so với nợ
   so với rủi ro trong bối cảnh cụ thể của mình không, hay việc phân loại phụ thuộc vào ai tình
   cờ gắn nhãn phiếu?** Một định nghĩa không chính thức, không nhất quán tạo ra những con số
   trông chính xác nhưng thực ra không so sánh được giữa các giai đoạn.

3. **Phân bổ luồng của chúng ta đã bao giờ trôi đều về một loại mục mà không ai quyết định
   điều đó một cách có chủ đích chưa?** Một sự trôi chậm dễ bỏ sót qua từng giai đoạn nhưng
   hiển nhiên khi được vẽ thành xu hướng. Hãy lấy dữ liệu của vài giai đoạn, nếu có, và tìm
   kiểu mẫu này một cách trung thực.

4. **Một phân bổ luồng khỏe mạnh sẽ trông thế nào cho giai đoạn hiện tại của sản phẩm chúng
   ta, và chúng ta đã thực sự thống nhất mục tiêu đó với các bên liên quan kinh doanh chưa?**
   Phần lớn tổ chức chưa bao giờ làm mục tiêu này tường minh, nghĩa là không có cơ sở chung
   để nhận ra khi phân bổ thực tế trôi khỏi nó.

5. **Phân bổ luồng của chúng ta có khớp với bằng chứng độc lập, như tỷ lệ lỗi lọt hay số lỗ
   hổng đang mở, hay có một sự không khớp đáng điều tra?** Sự không khớp ở đây là dấu hiệu rõ
   ràng nhất hiện có rằng việc phân loại đã trôi khỏi bản chất thực sự của công việc.

6. **Ai đó trong đội có thể lặng lẽ gắn lại nhãn một mục nợ hay rủi ro thành tính năng dưới
   áp lực phân phối không, và hiện giờ chúng ta có nhận ra nếu họ làm vậy không?** Đây là rủi
   ro bị lách trung tâm của chủ đề, nêu thẳng. Hãy bàn xem quy trình hiện tại của bạn có thực
   sự bắt được điều này không, chứ không chỉ liệu có ai cố ý làm điều đó không.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Việc phân loại chính thức thường có cảm giác như gánh nặng khi cả đội đã
biết mọi người đang làm gì. Mức tối thiểu hữu ích ở quy mô này chỉ là nói to tên bốn loại
trong khi lập kế hoạch, để công việc nợ và rủi ro không lặng lẽ bị hạ ưu tiên mỗi khi hạn
chót tính năng tạo áp lực, một kiểu mẫu cộng dồn tệ hại khi cả cơ sở mã lẫn đội đều lớn lên.

**Doanh nghiệp nhỏ.** Một trường tùy chỉnh hay nhãn duy nhất trong công cụ theo dõi sẵn có
của bạn là đủ để ghi lại loại mục luồng mà không cần đầu tư công cụ chuyên dụng. Kỷ luật phân
loại nhất quán ngay lúc tiếp nhận quan trọng hơn nhiều so với bất kỳ độ tinh vi nào của công
cụ.

**Doanh nghiệp lớn.** Phân loại mục luồng là nơi khung này tạo ra giá trị ở quy mô lớn, vì
một tổ chức lớn vận hành nhiều chuỗi giá trị đồng thời không có cách tổng hợp đáng tin nào
khác để thấy năng lực thực sự được chia thế nào qua tính năng, lỗi, rủi ro và nợ. Hãy đầu tư
vào phân loại tích hợp công cụ và các đợt đối chiếu định kỳ với bằng chứng độc lập; phân loại
thủ công, tùy hứng không sống sót ở quy mô tổ chức thật.

**Chính phủ.** Phân bổ luồng mang lại cho một lãnh đạo công nghệ khu vực công một câu trả lời bảo vệ
được, định lượng được khi được hỏi vì sao không phát hành thêm nhiều tính năng hướng công dân
mới, khi câu trả lời trung thực là gánh nặng rủi ro và nợ của một hệ thống di sản đang tiêu
thụ một phần năng lực chính đáng, có thể biện minh. Làm sự đánh đổi đó tường minh và được
thương lượng, thay vì hấp thụ lặng lẽ, thường xây được nhiều niềm tin hơn với các cơ quan giám
sát so với một lời viện dẫn "sự cần thiết kỹ thuật" không định lượng.

## Ví dụ

**Doanh nghiệp lớn.** Đội nền tảng thương mại điện tử của một công ty bán lẻ lớn tin rằng, dựa
trên vận tốc sprint, họ đang giao sản lượng tính năng đều đặn. Lần phân loại mục luồng trung
thực đầu tiên cho thấy "tính năng" thực ra chỉ chiếm 40% công việc đã hoàn thành, với nợ, phần
lớn gắn với một hệ thống thanh toán già cỗi, tiêu gần một phần ba năng lực mà chưa bao giờ được
gọi tên như vậy trong bất kỳ báo cáo nào trước đó. Việc trình bày sự phân chia này cho lãnh đạo
sản phẩm, cùng một tỷ lệ lỗi lọt đang tăng củng cố gánh nặng nợ, đã giành được một ngân sách
hiện đại hóa chuyên dụng mà đội đã xin không thành công suốt hai năm chỉ bằng các lập luận định
tính.

**Chính phủ.** Đội cấp phép số của một cơ quan phương tiện cơ giới bang phân loại backlog của
mình lần đầu tiên sau khi một sự cố ngừng hoạt động công khai khiến độ ổn định của hệ thống nền
tảng bị soi xét. Bài tập cho thấy công việc "rủi ro", chủ yếu là vá bảo mật liên tục bị hạ ưu
tiên để nhường cho các tính năng hướng công dân dễ thấy, đã co lại dưới 5% năng lực trong năm
trước, một kiểu mẫu chưa bao giờ hiện ra trong báo cáo chuẩn của đội. Lãnh đạo cơ quan dùng
phát hiện này để quy định một mức phân bổ công việc rủi ro tối thiểu từ nay, được hậu thuẫn bởi
dữ liệu phân bổ luồng thay vì chỉ một tuyên bố chính sách chung.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc phân loại mục luồng là một cơ sở định lượng, bảo vệ được cho các quyết định
nguồn lực trước đây được tranh luận định tính và thường thua công việc dễ thấy nhất với các bên
liên quan. Ví dụ bán lẻ ở trên, giành được ngân sách hiện đại hóa bằng dữ liệu năng lực thật
thay vì một lời kêu gọi chung, là kiểu mẫu mà kỷ luật này tạo ra một cách đáng tin: một con số
cụ thể khó gạt đi hơn nhiều so với một ấn tượng chung rằng "chúng tôi cần thêm thời gian cho
bảo trì".

Tổng chi phí sở hữu thấp một khi phép phân loại và các định nghĩa của nó được thống nhất: phân
loại thêm vài giây vào khâu tiếp nhận, không phải một gánh nặng quy trình đáng kể, và việc tích
hợp công cụ cần để theo dõi nó thường chỉ là một trường tùy chỉnh hay nhãn duy nhất. Chi phí
thật, liên tục là kỷ luật duy trì phân loại trung thực dưới áp lực phân phối, đó là lý do việc
đối chiếu định kỳ với bằng chứng độc lập quan trọng không kém việc áp dụng ban đầu.

## Phản mẫu và cạm bẫy

- **Phân loại công việc hồi tố, sau khi biết kết quả:** véc-tơ bị lách ở trung tâm của chủ đề
  này. Dưới áp lực phân phối, một đội có thể lặng lẽ gắn nhãn công việc nợ hay rủi ro là tính
  năng sau sự việc, hoặc làm tròn một mục mơ hồ về phía loại trông đẹp hơn trên biểu đồ phân bổ,
  mà không một quyết định đơn lẻ nào tự nó trông không trung thực. Rào chắn là phân loại lúc
  tiếp nhận theo một định nghĩa viết ra, kết hợp với các đợt kiểm toán định kỳ so sánh phân bổ
  luồng với bằng chứng độc lập như tỷ lệ lỗi lọt (chủ đề 5.1) và chỉ số lỗ hổng (chủ đề 6.4),
  cùng kỷ luật kiểm toán-so-với-bằng-chứng-độc-lập mà chủ đề 1.2 yêu cầu với mọi chỉ số trong
  cuốn sách này.
- **Để tính năng liên tục hấp thụ gần như toàn bộ năng lực (kiểu mẫu nhà máy tính năng):** bỏ
  đói công việc nợ và rủi ro một cách lặng lẽ cho đến khi nó nổ ra như một cuộc khủng hoảng.
- **Coi phân bổ của một giai đoạn đơn lẻ là toàn bộ bức tranh:** bỏ sót sự trôi chậm, tích lũy
  mà một góc nhìn xu hướng cho thấy rõ.
- **Đặt phân bổ mục tiêu mà không có các bên liên quan kinh doanh:** làm mất giá trị chính của
  khung, một sự hiểu biết chung, được thương lượng về sự đánh đổi.
- **Dùng một định nghĩa không nhất quán hoặc không được ghi lại cho mỗi loại:** tạo ra những
  con số trông chính xác nhưng không so sánh được theo thời gian.
- **Thiết kế quá phức tạp phép phân loại với nhiều kiểu con:** thêm chi phí phân loại làm mòn
  kỷ luật mà không thêm hiểu biết tương xứng.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Công việc được theo dõi chung chung, không có phân loại mục luồng; công
  việc nợ và rủi ro vô hình trong báo cáo.
- **Mức 2, Phát triển:** Một số đội phân loại mục luồng một cách không chính thức, nhưng các
  định nghĩa không nhất quán và việc phân loại thường xảy ra hồi tố.
- **Mức 3, Chuẩn hóa:** Mọi đội phân loại lúc tiếp nhận theo một định nghĩa chung, viết ra, và
  phân bổ luồng được theo dõi như một xu hướng.
- **Mức 4, Quản lý:** Phân bổ luồng được đối chiếu định kỳ với bằng chứng độc lập, và phân bổ
  mục tiêu được đặt có chủ đích cùng các bên liên quan kinh doanh.
- **Mức 5, Điều phối:** Dữ liệu mục luồng trực tiếp thông tin cho các quyết định nguồn lực và
  đầu tư trên toàn tổ chức, và lãnh đạo có thể chỉ ra các quyết định cụ thể được đưa ra vì phân
  loại đã làm một sự đánh đổi trước đây vô hình trở nên tường minh.

## Ý tưởng để thảo luận

1. Một phép chia mục luồng trung thực của công việc quý trước sẽ cho thấy gì, và nó có làm ai ngạc nhiên không?
2. Chúng ta có định nghĩa viết ra cho từng loại trong bốn loại mục luồng, hay việc phân loại phụ thuộc vào ai gắn nhãn công việc?
3. Phân bổ luồng của chúng ta đã bao giờ trôi về một loại mục mà không có quyết định có chủ đích đằng sau chưa?
4. Hôm nay chúng ta có thể đối chiếu phân bổ luồng với bằng chứng độc lập nào?

## Điểm chính cần nhớ

- Một **mục luồng** thuộc về đúng một trong bốn loại, tính năng, lỗi, rủi ro hoặc nợ, và việc
  phân bổ năng lực giữa chúng là **tổng bằng không**.
- **Không có phân bổ khỏe mạnh phổ quát**; hỗn hợp đúng phụ thuộc vào giai đoạn của sản phẩm và
  nên là một mục tiêu có chủ đích, được thương lượng với các bên liên quan kinh doanh.
- Véc-tơ bị lách trung tâm của chủ đề là **phân loại hồi tố**, lặng lẽ gắn lại nhãn công việc
  nợ hay rủi ro thành tính năng sau sự việc; rào chắn là phân loại lúc tiếp nhận cộng với các
  đợt kiểm toán định kỳ so với bằng chứng độc lập.
- Cảnh giác cụ thể với **kiểu mẫu nhà máy tính năng**, tính năng liên tục hấp thụ gần như toàn
  bộ năng lực, bỏ đói công việc nợ và rủi ro cho đến khi nó nổ ra như một cuộc khủng hoảng.
- Phân bổ luồng có giá trị nhất như một **xu hướng**, và lợi ích lớn nhất của nó đến từ việc
  chia sẻ trực tiếp với các bên liên quan kinh doanh.

## Tài liệu tham khảo và đọc thêm

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital
  Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, và George Spafford. *The Phoenix Project*. IT Revolution Press,
  2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean
  Product Development*. Celeritas Publishing, 2009.
