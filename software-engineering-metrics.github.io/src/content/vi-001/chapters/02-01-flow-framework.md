# 2.1 Flow Framework

## Tổng quan và động lực

**Flow Framework** là một mô hình quản lý và cấu trúc do Mik Kersten tạo ra và công bố
trong cuốn sách năm 2018 *Project to Product*. Nó tồn tại để trả lời một câu hỏi mà các
chỉ số đường ống thuần túy không trả lời được: không chỉ mã đi từ commit đến production
nhanh và an toàn đến đâu, mà còn loại giá trị nào đang chảy qua đường ống, và hỗn hợp đó
có phản ánh chiến lược thực sự của doanh nghiệp không. Khung này coi việc phân phối phần
mềm là một **[chuỗi giá trị (value stream)](https://en.wikipedia.org/wiki/Value_stream)**,
chuỗi hoạt động đầu-cuối biến một ý tưởng thành giá trị mà khách hàng nhận được, vay
mượn trực tiếp từ truyền thống lập bản đồ chuỗi giá trị của sản xuất tinh gọn.

Cuốn sách này dùng Flow Framework làm cấu trúc tổ chức của Phần 2. Chủ đề 2.2 giới thiệu
bốn mục luồng của nó, các chủ đề 2.3 và 2.4 giới thiệu năm chỉ số luồng, chủ đề 2.8 lần
các chỉ số đó về nguồn gốc của chúng trong việc lập bản đồ chuỗi giá trị Lean kinh điển,
và chủ đề 2.10 bao quát các chỉ số DORA như một khung tham chiếu hẹp hơn, tập trung vào
đường ống mà phần này không còn dẫn đầu bằng nó. Đó là một lựa chọn có chủ đích, không
phải sự bác bỏ nghiên cứu của DORA. DORA đo thông lượng và độ ổn định của hệ thống với sự
nghiêm ngặt thống kê thực sự, nhưng lại im lặng về câu hỏi mà một nhà lãnh đạo doanh
nghiệp quan tâm nhất: trong mọi thứ tổ chức kỹ thuật đã phát hành quý này, bao nhiêu là
giá trị khách hàng mới, và bao nhiêu đã lặng lẽ bị tiêu hao vào việc sửa lỗi, quản lý rủi
ro hay trả nợ. Flow Framework tồn tại cụ thể để làm hỗn hợp đó hiện ra.

Với các đội lớn, sự phân biệt này không mang tính học thuật. Một tổ chức nền tảng vận hành
hàng chục chuỗi giá trị có thể có những con số DORA xuất sắc, triển khai nhanh, thường
xuyên, ổn định, trong khi sản lượng sản phẩm thực của nó đã lặng lẽ trôi về phía công việc
gần như thuần bảo trì, một kiểu mẫu vô hình với bảng điều khiển chỉ đo cơ chế đường ống.
Các tổ chức doanh nghiệp và chính phủ, vốn phải biện minh đầu tư kỹ thuật với các bên liên
quan nghĩ bằng ngôn ngữ kinh doanh chứ không phải ngôn ngữ đường ống, cần một bộ từ vựng
nối hoạt động phân phối với ý đồ chiến lược. Đó là điều khung này cung cấp.

## Các nguyên tắc chính

- **Chuỗi giá trị là đơn vị đo lường, không phải một đội hay một đường ống.** Nó trải từ
  một nhu cầu của khách hàng hay doanh nghiệp đến kết quả được giao, vắt qua bất kỳ ranh
  giới đội nào mà công việc thực sự vắt qua.
- **Mục luồng làm hiện ra "cái gì", không chỉ "nhanh đến đâu".** Bốn loại của chủ đề 2.2,
  tính năng, lỗi, rủi ro và nợ, biến một quyết định ưu tiên ngầm thành một quyết định
  tường minh, đo được.
- **Phân bổ năng lực giữa các mục luồng là tổng bằng không.** Dành nhiều năng lực hơn cho
  một loại mục nghĩa là ít năng lực hơn cho các loại khác; khung làm sự đánh đổi đó hiện
  ra thay vì để nó ngầm định.
- **Năm chỉ số luồng trả lời các câu hỏi kinh doanh, không chỉ câu hỏi kỹ thuật.** Chúng
  được thiết kế để trình bày cho một bên liên quan phi kỹ thuật, không phải giữ bên trong
  đội kỹ thuật.
- **Quản lý chuỗi giá trị nên liên tục, không phải một bài tập lập bản đồ một lần.** Bản
  đồ chuỗi giá trị tĩnh trở nên lỗi thời; khung được xây để đo đạc từ chính những công cụ
  các đội đã dùng.

## Khuyến nghị

### Lập bản đồ chuỗi giá trị của bạn trước khi đo đạc bất cứ thứ gì

Trước khi áp dụng bất kỳ chỉ số luồng nào, hãy đi theo con đường thực tế một phần công
việc trải qua từ lúc một nhu cầu kinh doanh được xác định đến lúc một khách hàng nhận
được giá trị, gọi tên mọi giai đoạn và mọi lần bàn giao giữa các đội. Đây là bài tập kinh
điển [lập bản đồ chuỗi giá trị](https://en.wikipedia.org/wiki/Value_stream_mapping), được
điều chỉnh từ sản xuất tinh gọn, và bỏ qua nó là lý do phổ biến nhất khiến một lần áp dụng
Flow Framework tạo ra những con số không ai tin: các chỉ số tính trên một quy trình chưa
được xem xét, hiểu một cách không chính thức hiếm khi khớp với những gì thực sự đang xảy
ra.

### Nối các chỉ số luồng với các công cụ mà đội của bạn đã dùng

Flow Framework được xây cho quản lý chuỗi giá trị liên tục, tự động, không phải một bài
tập lập bản đồ thủ công định kỳ. Hãy tích hợp việc theo dõi mục luồng trực tiếp vào các
công cụ mà công việc vốn đã chảy qua, Jira, Azure DevOps, GitHub, thay vì xây một hệ
thống theo dõi song song mà các đội phải cập nhật bằng tay. Trạng thái của một mục luồng
nên tự cập nhật khi phiếu hoặc pull request nền tảng di chuyển, cùng kỷ luật đo đạc-hơn-tự
báo cáo mà chủ đề 1.5 khuyến nghị cho mọi chỉ số trong cuốn sách này.

### Trình bày phân bổ luồng trực tiếp cho các bên liên quan kinh doanh, không chỉ ban lãnh đạo kỹ thuật

Cơ hội bị bỏ lỡ lớn nhất với khung này là coi nó như một công cụ kỹ thuật nội bộ. Phân
bổ luồng, tỷ lệ công việc dành cho tính năng so với lỗi, rủi ro và nợ (chủ đề 2.3), được
thiết kế riêng để là một cuộc trò chuyện bạn có với lãnh đạo sản phẩm và kinh doanh, vì
nó biến một quyết định ưu tiên ngầm, bao nhiêu năng lực dành cho giá trị mới so với giữ
cho hệ thống chạy, thành tường minh và có thể thương lượng thay vì được mặc định.

### Coi bốn mục luồng là một phân loại thực sự, không phải hình thức

Hãy yêu cầu mọi đơn vị công việc được phân loại vào đúng một trong bốn loại mục luồng ngay
lúc tiếp nhận, không phải hồi tố. Một phân loại áp dụng sau sự việc, hoặc áp dụng lỏng lẻo
vì "về cơ bản nó là một tính năng", làm xói mòn toàn bộ giá trị của phép phân loại, vì
điểm mấu chốt là một bản ghi trung thực, nhất quán về năng lực thực sự đã đi đâu.

### Xem lại bản đồ chuỗi giá trị khi tổ chức thay đổi, không theo lịch cố định

Một bản đồ chuỗi giá trị trở nên lỗi thời ngay khi ranh giới đội, công cụ, hoặc chính sản
phẩm thay đổi đáng kể, không phải theo một nhịp hằng năm tùy ý nào đó. Hãy coi một cuộc
tái cơ cấu, một lần di chuyển công cụ lớn, hay một lần xoay trục sản phẩm đáng kể là
trigger để đi lại chuỗi giá trị, vì một chỉ số luồng tính trên một bản đồ lỗi thời lặng
lẽ đo sai thứ.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Chỉ chỉ số đường ống (DORA, chủ đề 2.10) | Đơn giản, được kiểm chứng tốt, rẻ để đo đạc từ dữ liệu CI/CD sẵn có | Im lặng về loại giá trị đang được giao |
| Áp dụng đầy đủ Flow Framework | Nối phân phối với chiến lược kinh doanh; làm hỗn hợp giá trị hiện ra và có thể thương lượng | Cần một bản đồ chuỗi giá trị trung thực và kỷ luật phân loại mục luồng nhất quán |
| Lập bản đồ chuỗi giá trị tĩnh, một lần | Rẻ, nhanh chạy như một buổi workshop | Nhanh lỗi thời; tạo ra một ảnh chụp, không phải một chỉ số sống |
| Quản lý chuỗi giá trị liên tục, tích hợp công cụ | Dữ liệu sống, luôn hiện hành; mở rộng qua nhiều chuỗi giá trị | Cần công việc tích hợp công cụ thật ngay từ đầu |

Mâu thuẫn trung tâm là **khả năng đọc hiểu về kinh doanh so với công sức đo đạc**. Chỉ số
đường ống rẻ vì đường ống vốn đã tạo ra dữ liệu; chỉ số chuỗi giá trị cần một bản đồ trung
thực của toàn bộ quy trình và một thói quen phân loại có kỷ luật ngay lúc tiếp nhận mà chỉ
số đường ống chưa bao giờ đòi hỏi. Hãy giải quyết bằng cách bắt đầu với một chuỗi giá trị,
không phải cả tổ chức cùng lúc, lập bản đồ nó cho đúng, và chỉ sau đó mới tích hợp việc
theo dõi mục luồng vào các công cụ có sẵn, thay vì cố triển khai đồng loạt trên mọi đội
cùng lúc.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có thể vẽ một bản đồ chuỗi giá trị chính xác cho sản phẩm quan trọng nhất
   ngay bây giờ không, hay sẽ phải đoán ở vài lần bàn giao?** Phần lớn tổ chức chưa bao
   giờ thực sự đi con đường này từ đầu đến cuối. Hãy thử bài tập này một cách trung thực
   và ghi lại mọi chỗ nhóm bất đồng về điều thực sự xảy ra, vì chính sự bất đồng đó có
   giá trị chẩn đoán.

2. **Nếu chúng ta phân loại mọi thứ đội đã phát hành quý trước thành tính năng, lỗi, rủi
   ro và nợ, kết quả có làm lãnh đạo sản phẩm ngạc nhiên không?** Phần lớn các đội chưa
   bao giờ làm sự phân chia này tường minh, và câu trả lời thường lộ ra một gánh nặng bảo
   trì hay một vấn đề nợ trước đây vô hình trong một phép đếm "story point đã giao" đơn
   giản.

3. **Chúng ta có một cách theo dõi mục luồng thực sự, tích hợp công cụ không, hay việc này
   sẽ đòi hỏi ai đó phân loại và phân loại lại công việc bằng tay?** Một hệ thống thủ công
   suy tàn nhanh dưới khối lượng công việc thật; một hệ thống tích hợp công cụ thì không.
   Hãy đánh giá trung thực bạn thực sự sẵn sàng duy trì cái nào.

4. **Bản đồ chuỗi giá trị của chúng ta thay đổi lần cuối khi nào, và chúng ta đã cập nhật
   các chỉ số để phản ánh điều đó chưa?** Các cuộc tái cơ cấu và di chuyển công cụ lặng lẽ
   làm mất hiệu lực một bản đồ chuỗi giá trị, và ít tổ chức nhớ xem lại nó khi điều đó xảy
   ra.

5. **Các chỉ số luồng của chúng ta có bao giờ được trình bày trực tiếp cho các bên liên
   quan kinh doanh hoặc sản phẩm không, hay chúng ở lại bên trong kỹ thuật?** Lợi thế lớn
   nhất của khung so với các chỉ số chỉ đường ống chính là cuộc trò chuyện này, và bỏ qua
   nó làm mất phần lớn giá trị của khung.

6. **Cần gì để ai đó lách việc phân loại mục luồng của chúng ta mà không làm điều gì không
   trung thực trên giấy tờ?** Hãy đi qua cách một đội dưới áp lực phân phối có thể lặng lẽ
   gắn lại nhãn công việc nợ hay rủi ro thành tính năng để trông năng suất hơn, và bàn xem
   hiện giờ bạn có nhận ra không.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Một bản đồ chuỗi giá trị đầy đủ thường là thừa với một đội năm người nơi
ai cũng đã thuộc lòng toàn bộ quy trình. Thói quen hữu ích ở quy mô này chỉ đơn giản là
nói to tên bốn loại mục luồng trong các cuộc trò chuyện lập kế hoạch, để công việc nợ và
rủi ro không lặng lẽ biến mất khỏi tầm mắt ngay khi hạn chót tính năng đến gần.

**Doanh nghiệp nhỏ.** Hãy áp dụng việc phân loại mục luồng trong bất kỳ công cụ theo dõi
nhẹ nào bạn đang dùng, một cột có nhãn hay một trường tùy chỉnh, thay vì bất kỳ sản phẩm
quản lý chuỗi giá trị chuyên dụng nào. Kỷ luật phân loại nhất quán quan trọng hơn nhiều
so với độ tinh vi của công cụ đằng sau.

**Doanh nghiệp lớn.** Đây là nơi khung xứng đáng với chỗ đứng của nó, vì một tổ chức lớn
vận hành hàng chục chuỗi giá trị qua nhiều dòng sản phẩm không có cách đáng tin nào khác
để thấy, ở một nơi, năng lực kỹ thuật thực sự đang được phân bổ thế nào giữa tính năng,
lỗi, rủi ro và nợ. Hãy đầu tư vào tích hợp công cụ; phương án thủ công không sống sót khi
chạm quy mô thật.

**Chính phủ.** Phân bổ luồng mang lại cho một tổ chức kỹ thuật khu vực công một câu trả lời bảo vệ
được, dễ đọc về kinh doanh cho câu "vì sao không phát hành thêm chức năng mới", khi câu trả
lời trung thực là một phần ngày càng lớn năng lực đang đi vào khắc phục bảo mật hoặc nợ di
sản. Làm sự đánh đổi đó hiện ra và tường minh, thay vì lặng lẽ hấp thụ áp lực, thường là
điều hữu ích nhất mà khung này mang lại cho một lãnh đạo công nghệ chính phủ.

## Ví dụ

**Doanh nghiệp lớn.** Tổ chức nền tảng yêu cầu bồi thường của một hãng bảo hiểm lớn tin
rằng mình chủ yếu phát hành tính năng mới, dựa trên các báo cáo vận tốc sprint. Lần lập bản
đồ chuỗi giá trị và phân loại mục luồng đầu tiên cho thấy công việc nợ và rủi ro, phần lớn
là nợ kỹ thuật không được ghi lại từ một hệ thống lõi hàng chục năm tuổi, thực ra tiêu hao
gần một nửa tổng năng lực kỹ thuật, một sự thật mà không báo cáo nào trước đó làm lộ ra vì
công việc đó luôn bị gộp vào "các tác vụ kỹ thuật" chung chung. Việc trình bày sự phân chia
này cho ủy ban điều hành đã giành được một ngân sách giảm nợ chuyên dụng lần đầu tiên trong
lịch sử của nền tảng, thay vì để công việc nợ tiếp tục lặng lẽ cạnh tranh với mọi yêu cầu
tính năng.

**Chính phủ.** Bộ phận dịch vụ số của một cơ quan thuế quốc gia dùng lập bản đồ chuỗi giá
trị để chẩn đoán vì sao một tính năng hướng công dân hàng đầu đã "đang thực hiện" hơn một
năm dù các sprint hoàn thành đều đặn. Bản đồ cho thấy chuỗi giá trị thực ra trải qua năm
đội riêng biệt với ba lần bàn giao mà sơ đồ tổ chức không phản ánh, và việc phân loại mục
luồng cho thấy thời gian kỹ thuật thực tế của tính năng chỉ là một phần nhỏ trong tổng thời
gian luồng của nó, phần còn lại bị tiêu hao bởi các độ trễ bàn giao giữa các đội mà chỉ số
riêng của không đội nào thấy được. Bộ phận tái cấu trúc quanh chuỗi giá trị thay vì sơ đồ
tổ chức cho dòng sản phẩm cụ thể đó, cắt giảm đáng kể thời gian luồng trong vòng hai quý.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc áp dụng Flow Framework là một câu trả lời bảo vệ được, dễ đọc về kinh
doanh cho một câu hỏi mà chỉ số đường ống không trả lời được: năng lực kỹ thuật có được
phân bổ đúng như lãnh đạo tin không. Ví dụ bảo hiểm ở trên, làm lộ gần một nửa năng lực
đi vào công việc nợ trước đây vô hình, là một kiểu mẫu phổ biến một khi tổ chức thực sự
phân loại công việc của mình một cách trung thực, và sự hiển thị đó thường xuyên mở khóa
khoản đầu tư mà một yêu cầu mơ hồ "chúng tôi cần thêm thời gian cho nợ kỹ thuật" không bao
giờ làm được.

Tổng chi phí sở hữu tập trung ở hai nơi: bài tập lập bản đồ chuỗi giá trị ban đầu, đòi hỏi
thời gian điều phối thật để làm trung thực, và việc tích hợp công cụ cần để giữ dữ liệu mục
luồng hiện hành mà không phải duy trì thủ công. Cả hai chi phí đều là một lần hoặc ít bảo
trì khi đã làm tốt, điều khiến khung rẻ để duy trì hơn đáng kể so với chi phí áp dụng.

## Phản mẫu và cạm bẫy

- **Coi lập bản đồ chuỗi giá trị là một workshop một lần, không bao giờ xem lại:** bản đồ
  lỗi thời ngay khi tổ chức thay đổi, và một chỉ số tính trên một bản đồ lỗi thời đo sai
  thứ.
- **Xây một hệ thống theo dõi mục luồng song song, duy trì thủ công:** suy tàn nhanh dưới
  khối lượng công việc thật; hãy tích hợp vào các công cụ sẵn có thay thế.
- **Phân loại mục luồng hồi tố thay vì ngay lúc tiếp nhận:** véc-tơ bị lách ở trung tâm của
  chủ đề này. Dưới áp lực phân phối, một đội có thể lặng lẽ gắn lại nhãn công việc nợ hay
  rủi ro thành tính năng sau sự việc để trông năng suất hơn với các bên liên quan chỉ nhìn
  biểu đồ phân bổ luồng, mà không ai từng đưa ra một quyết định tường minh, nhìn thấy được
  để làm vậy. Rào chắn là yêu cầu phân loại ngay lúc tiếp nhận, trước khi biết kết quả, và
  định kỳ kiểm toán một mẫu các mục đã phân loại so với những gì thay đổi nền tảng thực sự
  đã làm, cùng kỷ luật kiểm toán mà chủ đề 1.2 yêu cầu với mọi chỉ số trong cuốn sách này.
- **Giữ chỉ số luồng chỉ bên trong kỹ thuật:** làm mất lợi thế chính của khung, một bộ từ
  vựng chung với các bên liên quan kinh doanh.
- **Lập bản đồ sơ đồ tổ chức thay vì chuỗi giá trị thực:** che giấu các lần bàn giao xuyên
  đội vốn thường là nguồn trễ lớn nhất.
- **Áp dụng khung trên toàn tổ chức trước khi kiểm chứng trên một chuỗi giá trị:** có nguy
  cơ đầu tư lớn vào những chỉ số không ai tin vì bản đồ nền tảng chưa bao giờ được xác nhận
  là chính xác.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Không có bản đồ chuỗi giá trị; công việc được theo dõi như các phiếu
  chung chung, không có phân loại mục luồng.
- **Mức 2, Phát triển:** Một chuỗi giá trị đã được lập bản đồ và các mục luồng được phân
  loại một cách không chính thức, nhưng việc theo dõi thủ công và áp dụng không nhất quán.
- **Mức 3, Chuẩn hóa:** Phân loại mục luồng được tích hợp vào công cụ sẵn có và áp dụng nhất
  quán ngay lúc tiếp nhận trên các chuỗi giá trị chính.
- **Mức 4, Quản lý:** Phân bổ luồng được rà soát đều đặn với các bên liên quan kinh doanh,
  và bản đồ chuỗi giá trị được chủ động giữ hiện hành khi tổ chức thay đổi.
- **Mức 5, Điều phối:** Tổ chức phân bổ đầu tư kỹ thuật có chủ đích qua các chuỗi giá trị
  bằng dữ liệu luồng, và có thể chỉ ra các quyết định chiến lược cụ thể, một ngân sách giảm
  nợ, một lần tái cấu trúc đội, được đưa ra vì khung đã làm hiện ra một sự đánh đổi trước
  đây vô hình.

## Ý tưởng để thảo luận

1. Hôm nay chúng ta có vẽ được một bản đồ chuỗi giá trị chính xác cho sản phẩm hàng đầu mà không phải đoán không?
2. Một phân loại mục luồng trung thực sẽ lộ ra bao nhiêu phần trăm năng lực quý trước đã đi vào nợ và rủi ro, so với tính năng?
3. Các chỉ số luồng của chúng ta hiện có đến được các bên liên quan kinh doanh không, hay chúng ở lại trong kỹ thuật?
4. Lần bàn giao xuyên đội lớn nhất trong chuỗi giá trị của chúng ta mà sơ đồ tổ chức không phản ánh là gì?

## Điểm chính cần nhớ

- **Flow Framework**, từ *Project to Product* của Mik Kersten, đo loại giá trị nào di
  chuyển qua một đường ống phân phối, không chỉ bản thân đường ống chạy nhanh đến đâu.
- Một **chuỗi giá trị**, không phải một đội hay một đường ống, là đơn vị đo lường của
  khung, và lập bản đồ nó trung thực đi trước việc đo đạc bất cứ thứ gì.
- **Phân loại mục luồng ngay lúc tiếp nhận, không phải sau sự việc**, là rào chắn chống lại
  véc-tơ bị lách trung tâm của chủ đề này: lặng lẽ gắn lại nhãn công việc nợ hay rủi ro
  thành tính năng để trông năng suất hơn.
- **Nối chỉ số luồng với công cụ sẵn có**, Jira, Azure DevOps, GitHub, thay vì một hệ thống
  theo dõi thủ công song song sẽ không sống sót qua khối lượng công việc thật.
- Hãy trình bày dữ liệu luồng **trực tiếp cho các bên liên quan kinh doanh**; cuộc trò
  chuyện đó, không phải một bảng điều khiển kỹ thuật nội bộ, là lợi thế chính của khung so
  với các chỉ số chỉ đường ống.

## Tài liệu tham khảo và đọc thêm

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital
  Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, và John Shook. *Learning to See: Value Stream Mapping to Create Value and
  Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, và George Spafford. *The Phoenix Project*. IT Revolution Press,
  2013.
- Kim, Gene, Jez Humble, Patrick Debois, và John Willis. *The DevOps Handbook*. IT
  Revolution Press, 2016.
