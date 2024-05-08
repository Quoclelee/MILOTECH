function addToCart() {
    var productInfo = {
        name: "Box di động SSD M.2 NVMe Asus ROG Strix Arion to USB 3.2",
        price: 950000, // Giá sản phẩm
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