function addToCart() {
    var productInfo = {
        name: "Laptop Apple MacBook Air 15 inch M2 2023(MQKR3SA/A)",
        price: 28200000, // Giá sản phẩm
        quantity: 1 // Số lượng sản phẩm
    };

    var gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    var existingProductIndex = gioHang.findIndex(function(item) {
        return item.name === productInfo.name;
    });

    if (existingProductIndex !== -1) {
        gioHang[existingProductIndex].quantity++;
    } else {
        gioHang.push(productInfo);
    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}