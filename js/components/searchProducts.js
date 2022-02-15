import { createHtml } from "./createHtml.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value;

    const filteredProducts = products.filter(function (product) {
      if (product.price <= 50) {
        return true;
      } else {
        return false;
      }
    });
    createHtml(filteredProducts);
  };
}
