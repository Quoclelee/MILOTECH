window.onload = function() {
    showCart();
    calculateTotal();
};

function showCart() {
    var gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    var cartBody = document.getElementById("cartBody");
    var nf = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    cartBody.innerHTML = ""; // Xóa nội dung cũ

    gioHang.forEach(function(item, index) {
        var row = cartBody.insertRow();

        var nameCell = row.insertCell();
        nameCell.textContent = item.name;

        var priceCell = row.insertCell();
        priceCell.textContent = nf.format(item.price); // Định dạng giá sản phẩm

        var quantityCell = row.insertCell();
        var quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener("input", function() {
            var newQuantity = parseInt(this.value);
            if (newQuantity < 1) {
                this.value = 1;
                newQuantity = 1;
            }
            item.quantity = newQuantity;
            localStorage.setItem("gioHang", JSON.stringify(gioHang)); // Cập nhật giỏ hàng trong localStorage
            calculateProductTotal(row, item); // Tính lại tổng tiền của sản phẩm khi số lượng thay đổi
            calculateTotal(); // Tính lại tổng tiền tất cả sản phẩm
        });
        quantityCell.appendChild(quantityInput);

        var totalCell = row.insertCell();
        totalCell.textContent = nf.format(item.price * item.quantity); // Định dạng tổng tiền của mỗi sản phẩm

        var deleteButtonCell = row.insertCell();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", function() {
            gioHang.splice(index, 1);
            localStorage.setItem("gioHang", JSON.stringify(gioHang));
            showCart();
            calculateTotal();
        });
        deleteButtonCell.appendChild(deleteButton);
    });
}

function calculateProductTotal(row, item) {
    var nf = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    var totalCell = row.cells[3];
    totalCell.textContent = nf.format(item.price * item.quantity); // Cập nhật tổng tiền của sản phẩm
}

function calculateTotal() {
    var gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    var totalQuantityAll = 0;
    var totalPriceAll = 0;
    var nf = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    gioHang.forEach(function(item) {
        totalQuantityAll += item.quantity;
        totalPriceAll += item.price * item.quantity;
    });

    var totalAllDiv = document.getElementById("totalAll");
    if (totalAllDiv) {
        totalAllDiv.innerHTML = "Tổng số lượng tất cả sản phẩm: " + totalQuantityAll + "<br>Tổng tiền cần thanh toán: " + nf.format(totalPriceAll); // Định dạng tổng tiền cần thanh toán
    }

    var emptyCartDiv = document.getElementById("emptyCart");
    if (emptyCartDiv) {
        if (gioHang.length === 0) {
            emptyCartDiv.style.display = "block";
        } else {
            emptyCartDiv.style.display = "none";
        }
    }
}

function thanhToan() {
    // Xử lý khi nhấn nút thanh toán
    // Ví dụ: Chuyển hướng đến trang thanh toán
    window.location.href = "thanhtoan.html";
}