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
      } else {
        return false;
      }
    });
    createHtml(filteredProducts);
  };
}

// // if (searchValue <= 50) {
// //   return; //filtered products;
// // } else {
// //   //if nothing in search box have all products
// // }

// export function searchProducts(data, targetElement) {
//   const search = document.querySelector(".search");

//   function filterProducts() {
//     const field = event.target.value;
//     console.log(event.target.value);

//     if (field <= 50) {
//       return true;
//     }
//     const searchValue = event.target.value;

//     const filteredData = data.filter(function (item) {
//       if (item[field] <= 50) {
//         return true;
//       }
//     });
//     createHtml(filteredData, targetElement);
//   }
//   search.addEventListener("keyup", filterProducts);
// }
