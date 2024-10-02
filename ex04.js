const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony",
  },
];

products.forEach((product) => {
  `<table>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Brand</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${products.id}</td>
    <td>${products.name}</td>
    <td>${products.price}</td>
    <td>${products.brand}</td>
  </tr>
  <tr>
    <td>${products.id}</td>
    <td>${products.name}</td>
    <td>${products.price}</td>
    <td>${products.brand}</td>
  </tr>
  <tr>
    <td>${products.id}</td>
    <td>${products.name}</td>
    <td>${products.price}</td>
    <td>${products.brand}</td>
  </tr>
</tbody>
</table>`;
});
document.write(products);
