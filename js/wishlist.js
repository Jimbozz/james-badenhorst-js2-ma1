import { getExistingWishes } from "./utils/wishFunction.js";

const wishlist = getExistingWishes();

const productContainer = document.querySelector(".product-container");

if (wishlist.length === 0) {
  productContainer.innerHTML = `<div class="message error">You have nothing in your wishlist<div>`;
}
wishlist.forEach(function (favourite) {
  productContainer.innerHTML += `
      <div class="result">
          <h3>${favourite.name}</h3>
          <h5>Price: NOK ${favourite.price}</h5> 
          <i class="fa-solid fa-heart fa-lg"></i>
      </div>
    `;
});

//Try to remove products directly from wishlist page.

// const favButtons = document.querySelectorAll(".result i");
// console.log(favButtons);
// favButtons.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

// function handleClick() {
//   this.classList.toggle("fa-solid");
//   this.classList.toggle("fa-regular");
//   // const currentFavs = getExistingFavs();
//   const id = this.dataset.id;
//   // const name = this.dataset.name;
//   // const price = this.dataset.price;

//   var items = JSON.parse(localStorage.getItem("favourites"));
//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id) {
//       items.splice(i, 0);
//     }
//     console.log(items[i].id);
//   }
// }
