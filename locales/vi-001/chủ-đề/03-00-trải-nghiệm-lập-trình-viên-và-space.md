# 3.0 Giới thiệu Phần 3: Trải nghiệm lập trình viên và khung SPACE

Phần 2 đo lường việc phân phối từ bên ngoài: mã đi qua một đường ống nhanh và an toàn đến đâu. Phần này đo
trải nghiệm của những người tạo ra mã đó, và nó tồn tại vì một bộ chỉ số phân phối đơn thuần có thể trông xuất
sắc trong khi những con người đứng sau đang kiệt sức, chìm trong gián đoạn, hoặc lặng lẽ rút lui. Một tổ chức
chỉ theo dõi các chỉ số DORA có thể cải thiện chúng một hai năm bằng cách siết một đội chặt hơn, cho đến khi
việc nghỉ việc, chất lượng sụp đổ hay kiệt sức xóa sạch thành quả cùng một lúc. Phần này là đối trọng.

Trung tâm là [khung SPACE](https://queue.acm.org/detail.cfm?id=3454124), được phát triển bởi các nhà nghiên cứu
từ Microsoft, GitHub và Đại học Victoria riêng như một sự sửa chữa cho thói quen của ngành là đo năng suất lập
trình viên qua một đại diện đơn lẻ, dễ bị lách như số dòng mã hay số commit. SPACE trải trên năm chiều: sự hài
lòng và phúc lợi, hiệu suất, hoạt động, giao tiếp và cộng tác, cùng hiệu quả và luồng công việc. Kỷ luật trung
tâm của khung, và là lý do phần này đối xử với nó bằng cùng sự nghiêm ngặt mà Phần 2 áp dụng cho các chỉ số luồng
của riêng nó, là không chiều đơn lẻ nào tự nó đáng tin; giá trị đến cụ thể từ việc giữ cả năm trong tầm mắt
cùng nhau, để một đội không thể trông tốt ở một trục bằng cách lặng lẽ làm hại một trục khác.

Với các đội lớn, chỉ số trải nghiệm lập trình viên trả lời một câu hỏi mà DORA không trả lời được: hiệu suất
phân phối này có bền vững không, và tổ chức có giữ chân được những người tạo ra nó không. Các tổ chức doanh
nghiệp bỏ qua phần này thường phát hiện cái giá qua dữ liệu nghỉ việc và các cuộc phỏng vấn thôi việc, rất lâu
sau khi thiệt hại đã xảy ra; các tổ chức chính phủ, thường hoạt động dưới những ràng buộc lương khu vực công
hạn chế khả năng cạnh tranh thuần túy bằng thù lao, có lý do đặc biệt mạnh để coi trải nghiệm lập trình viên là
một mối quan tâm hạng nhất, được quản lý chủ động, thay vì một điều nghĩ sau.

## Các chủ đề trong phần này

- **3.1 Khung SPACE:** Năm chiều cùng nhau, vì sao không chiều đơn lẻ nào đáng tin một mình, và cách xây một bộ
  chỉ số thực sự cân bằng từ chúng.
- **3.2 Chỉ số hài lòng và sức khỏe tinh thần:** Đo sự mãn nguyện, nỗi bực bội và rủi ro kiệt sức, chiều mà không
  dữ liệu viễn trắc hệ thống nào quan sát trực tiếp được.
- **3.3 Chỉ số hiệu suất và đại diện kết quả:** Chiều dễ bị nhầm với hoạt động nhất, và cách đo thay vào đó đóng
  góp kết quả thực sự.
- **3.4 Chỉ số hoạt động và giới hạn của chúng:** Số commit, số dòng mã, và vì sao đây là chiều nguy hiểm nhất khi
  nhấn mạnh quá mức.
- **3.5 Chỉ số giao tiếp và cộng tác:** Thông tin thực sự chảy giữa người và đội ra sao, và một kiểu mẫu khỏe mạnh
  trông thế nào.
- **3.6 Hiệu quả và luồng: làm việc sâu và gián đoạn:** Bảo vệ khoảng thời gian không bị gián đoạn mà công việc kỹ
  thuật thực sự đòi hỏi, và đo ma sát làm xói mòn nó.
- **3.7 Khảo sát trải nghiệm lập trình viên và chỉ số DevEx:** Cách tiến hành một khảo sát tạo ra tín hiệu đáng tin
  thay vì một cuộc thi nổi tiếng, và cách kết hợp nó với dữ liệu khách quan.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 3.1 giới thiệu cả năm chiều SPACE cùng nhau, và các chủ đề 3.2 đến 3.6 sau đó lần lượt đi vào từng chiều
với độ sâu thật, theo thứ tự mà các nhà nghiên cứu SPACE trình bày. Chủ đề 3.7 khép phần với cơ chế thực tế của
thiết kế khảo sát, vì sự hài lòng, hiệu suất và cộng tác đều dựa một phần vào dữ liệu tự báo cáo (sự phân biệt
đo đạc-so-với-tự-báo-cáo của chủ đề 1.5 liên quan trực tiếp xuyên suốt phần này) và một khảo sát thiết kế tồi làm
hỏng mọi chủ đề trước đó.

Kỷ luật trung tâm của phần này, sự cân bằng giữa các chiều thay vì sức mạnh ở một chiều, là ví dụ thực hành rõ
nhất của cuốn sách về nguyên tắc kết quả-trước-đầu-ra của chủ đề 1.3 áp dụng cho con người thay vì một đường ống
phân phối. Hoạt động (chủ đề 3.4) là chiều SPACE giống nhất với một chỉ số đầu ra thuần túy, và phần này đối xử
với nó tương ứng: hữu ích như một đầu vào trong năm, nguy hiểm như một tín hiệu đứng riêng. Đọc cùng Phần 2, phần
này hoàn thiện bức tranh mà DORA một mình không thể cung cấp: không chỉ phần mềm có được phát hành nhanh và an toàn
không, mà còn những người phát hành nó có thể duy trì nhịp đó không.
