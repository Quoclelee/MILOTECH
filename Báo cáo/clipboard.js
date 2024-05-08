// Lấy tất cả các button có class là 'copyButton'
var copyButtons = document.querySelectorAll('.copyButton');

// Lặp qua từng button và thêm sự kiện click cho mỗi button
copyButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Tạo một thẻ textarea ẩn để sao chép nội dung
        var tempTextArea = document.createElement('textarea');

        // Tùy thuộc vào index của button, lấy nội dung tương ứng để sao chép
        var contentToCopy = document.getElementById('contentToCopy' + (index + 1)).innerText;

        // Đặt nội dung cho thẻ textarea
        tempTextArea.value = contentToCopy;
        document.body.appendChild(tempTextArea);

        // Chọn và sao chép nội dung vào clipboard
        tempTextArea.select();
        document.execCommand('copy');

        // Xóa thẻ textarea ẩn
        document.body.removeChild(tempTextArea);
        alert("Copied");

    });
});