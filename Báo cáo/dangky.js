// Lấy thẻ a có id là "register-link"
var registerLink = document.getElementById('register-link');
// Lấy modal đăng ký
var registerModal = document.getElementById('register-modal');
// Lấy nút đóng modal
var registerClose = document.querySelector('#register-modal .close');
// Khi liên kết đăng ký được nhấp, hiển thị modal đăng ký
registerLink.addEventListener('click', function() {
    registerModal.style.display = 'block';
});
// Khi nút đóng được nhấp, đóng modal đăng ký
registerClose.addEventListener('click', function() {
    registerModal.style.display = 'none';
});
// Khi người dùng nhấp vào bất kỳ nơi nào bên ngoài modal, đóng modal đăng ký
window.addEventListener('click', function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
});