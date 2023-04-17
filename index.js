// Lấy phần tử HTML của bộ đếm
var counterElement = document.getElementById("counter");

// Lấy phần tử HTML của nút
var buttonElement = document.getElementById("btn");

// Khởi tạo biến đếm ban đầu
var count = 0;

// Xử lý sự kiện click của nút
buttonElement.addEventListener("click", function() {
    // Tăng giá trị đếm lên 1
    count += 1;

    // Cập nhật giá trị của bộ đếm trên giao diện
    counterElement.textContent = count;
});