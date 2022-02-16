import { createHtml } from "./createHtml.js";
import displayMessage from "./displayMessage.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value;
    console.log(event);

    const filteredProducts = products.filter(function (product) {
      if (product.price <= searchValue) {
        // console.log(product.price);
        return true;
      }
      if (searchValue === "") {
        return true;
      }
      if (!product.price) {
        displayMessage("error", error, target);
      } else {
        return false;
      }
    });
    createHtml(filteredProducts);
  };
}
