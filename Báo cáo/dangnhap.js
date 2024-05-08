// Lấy modal đăng nhập
var loginModal = document.getElementById("login-modal");
// Lấy nút đóng pop-up đăng nhập
var closeBtn = document.querySelector(".modal .close");
// Lấy liên kết "Đăng nhập"
var loginLink = document.getElementById("login-link");
// Khi click vào liên kết "Đăng nhập"
loginLink.onclick = function() {
        // Hiển thị pop-up đăng nhập
        loginModal.style.display = "block";
    }
    // Khi click vào nút đóng pop-up đăng nhập
closeBtn.onclick = function() {
        // Ẩn pop-up đăng nhập
        loginModal.style.display = "none";
    }
    // Khi click vào bất kỳ đâu ngoài pop-up đăng nhập
window.onclick = function(event) {
    if (event.target == loginModal) {
        // Ẩn pop-up đăng nhập
        loginModal.style.display = "none";
    }
}