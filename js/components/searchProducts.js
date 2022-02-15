import { createHtml } from "./createHtml.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const value = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().startsWith(value)) {
        return true;
      }
    });
    createHtml(filteredProducts);
  };
}
