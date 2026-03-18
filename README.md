# 🎯 2N1 - Ứng Dụng Học Tập Thông Minh

[cite_start]Website học tập tích hợp AI, Pomodoro Timer và Gamification, được xây dựng hoàn toàn bằng HTML5, CSS3 và JavaScript thuần (Vanilla JS)[cite: 10].

---

## ✨ Tính Năng Nổi Bật

### 🔐 Hệ Thống Xác Thực
* [cite_start]**Đăng ký/Đăng nhập**: Hỗ trợ qua Username hoặc Email với thông báo lỗi chi tiết[cite: 10].
* [cite_start]**Quên mật khẩu**: Khôi phục mật khẩu thông qua mã xác thực 6 chữ số (mô phỏng)[cite: 10].
* [cite_start]**Ghi nhớ**: Tùy chọn "Ghi nhớ đăng nhập" để duy trì phiên làm việc[cite: 10].

### ⏱️ Pomodoro Timer & AI
* [cite_start]**3 Chế độ**: Tập trung (25p), Nghỉ ngắn (5p), Nghỉ dài (15p) - có thể tùy chỉnh[cite: 10].
* [cite_start]**AI Gemini Pro**: Gợi ý thời gian học tối ưu và tự động tạo lịch học 7 ngày theo yêu cầu[cite: 10].
* [cite_start]**Thông báo**: Hỗ trợ âm thanh và thông báo trình duyệt khi kết thúc phiên[cite: 10].

### 🎮 Gamification & Thú Cưng
* [cite_start]**Hệ thống EXP**: Nhận 1 EXP cho mỗi 5 phút tập trung[cite: 10].
* [cite_start]**Streak System**: Theo dõi chuỗi ngày học liên tục; nhận thưởng khi đạt mốc 7 hoặc 30 ngày[cite: 10].
* [cite_start]**Thú cưng**: Mua và nuôi 10 loại thú cưng khác nhau trong cửa hàng bằng điểm EXP[cite: 10].

### 🎨 Giao Diện & Âm Thanh
* [cite_start]**Hiệu ứng**: Tùy chọn rơi Tuyết, Hoa, Lá hoặc Sao để tăng cảm hứng[cite: 10].
* [cite_start]**Nhạc nền**: Tích hợp các bản nhạc Lo-fi, Piano, Ambient với bộ điều khiển âm lượng[cite: 10].
* [cite_start]**Chế độ Theme**: Hỗ trợ chuyển đổi Sáng/Tối và tùy chỉnh màu sắc chủ đạo[cite: 10].

---

## 🚀 Hướng Dẫn Sử Dụng

1.  [cite_start]**Mở Website**: Chạy file `index.html` hoặc sử dụng `demo.bat` để thử nghiệm tài khoản mẫu[cite: 10, 15].
2.  [cite_start]**Thiết lập AI**: Vào **Cài đặt**, dán Gemini API Key từ Google AI Studio để kích hoạt tính năng lập lịch[cite: 10].
3.  [cite_start]**Học tập**: Chọn tab **Pomodoro**, đặt mục tiêu và nhấn **Bắt đầu**[cite: 10].
4.  [cite_start]**Tương tác**: Dùng EXP mua thú cưng tại **Cửa hàng** và theo dõi tiến độ qua **Báo cáo tuần**[cite: 10].

---

## 📁 Cấu Trúc Dự Án
* [cite_start]`index.html`: Trang đăng nhập/đăng ký[cite: 10].
* [cite_start]`app.html`: Giao diện ứng dụng chính[cite: 10].
* [cite_start]`public/css/`: Chứa các file định dạng giao diện (`main.css`, `app.css`, `theme-system.css`)[cite: 10].
* [cite_start]`public/js/`: Chứa logic xử lý (`auth.js`, `timer.js`, `ai.js`, `theme.js`, `storage.js`)[cite: 10].

---

## 📝 Lưu Ý Quan Trọng
* **Dữ liệu**: Lưu trữ hoàn toàn tại **LocalStorage** của trình duyệt. [cite_start]Tránh xóa cache nếu muốn giữ tài khoản[cite: 10].
* [cite_start]**Bảo mật**: Mật khẩu lưu dạng văn bản thuần; không sử dụng mật khẩu thật cho bản demo này[cite: 10].
* [cite_start]**API Key**: Cần có kết nối Internet và API Key hợp lệ để sử dụng các tính năng AI[cite: 10].

---
**Chúc bạn có những giờ học tập thật hiệu quả với 2N1! 🚀📚**