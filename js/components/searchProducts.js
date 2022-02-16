import { createHtml } from "./createHtml.js";
// import displayMessage from "./displayMessage.js";
// import { EMPTY_RESULTS } from "../constants/message.js";

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
      } else {
        return false;
      }
    });
    createHtml(filteredProducts);
  };
}
