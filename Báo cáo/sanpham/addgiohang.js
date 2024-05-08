function addToCart() {
    var productInfo = {
        name: "Vivobook 15X OLED (A1503, 12th Gen Intel)",
        price: 15500000, // Giá sản phẩm
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