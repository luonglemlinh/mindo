const fullMenu = [
  { name: "Indomie rau củ", price: "17.000đ" },
  { name: "Indomie viên rau củ", price: "20.000đ" },
  { name: "Indomie rau củ + bò viên", price: "20.000đ" },
  { name: "Indomie rau củ + cá viên", price: "20.000đ" },
  { name: "Indomie rau củ + trứng cút ", price: "20.000đ" },
  { name: "Indomie rau củ + tôm viên ", price: "20.000đ" },
  { name: "Indomie rau củ + tôm surimi", price: "20.000đ" },
  { name: "Indomie rau củ + hồ lô", price: "20.000đ" },
  { name: "Indomie rau củ + há cảo", price: "20.000đ" },
  { name: "Indomie rau củ + xúc xích", price: "25.000đ" },
  { name: "Indomie rau củ + mực xoắn", price: "20.000đ" },
  { name: "Indomie thập cẩm", price: "30.000đ" },
  { name: "Indomie rau củ + trứng ốp la", price: "35.000đ" },
  { name: "Indomie rau củ + lườn ngồng", price: "35.000đ" },
  { name: "Indomie siêu đặc biệt(full topping + 2 mì)", price: "50.000đ" },
  { name: "Tự chọn topping", price: "" }
];

function selectCategory(category) {
  document.getElementById('screen-start').style.display = 'none';
  document.getElementById('screen-main').style.display = 'block';

  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  fullMenu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <span class="name">${item.name}</span>
      <span class="price">${item.price}</span>
    `;
    productList.appendChild(div);
  });
}
