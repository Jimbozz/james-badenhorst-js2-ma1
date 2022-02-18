import { getExistingWishes } from "../utils/wishFunction.js";

export function createHtml(cardsToRender) {
  const resultContainer = document.querySelector(".result-container");

  resultContainer.innerHTML = "";

  if (cardsToRender.length === 0) {
    resultContainer.innerHTML = `<div class="message error">There are no results for that price. Please try another price.<div>`;
  }

  cardsToRender.forEach(function (card) {
    let cssClass = "fa-regular";
    const favourites = getExistingWishes();

    const doesObjectExist = favourites.find(function (fav) {
      return parseInt(fav.id) === card.id;
    });

    if (doesObjectExist) {
      cssClass = "fa-solid";
    }

    resultContainer.innerHTML += `
      <div class="result">
          <h3>${card.title}</h3>
          <h5>Price: NOK ${card.price}</h5> 
          <i class="${cssClass} fa-heart fa-lg" data-id="${card.id}" data-price="${card.price}" data-name="${card.title}"></i>
      </div>
    `;
    const favButtons = document.querySelectorAll(".result i");

    favButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick() {
      this.classList.toggle("fa-solid");
      this.classList.toggle("fa-regular");

      const id = this.dataset.id;
      const name = this.dataset.name;
      const price = this.dataset.price;

      const currentFavs = getExistingWishes();

      const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
      });
      if (productExists === undefined) {
        const product = { id: id, name: name, price: price };
        currentFavs.push(product);
        saveFavs(currentFavs);
      } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
      }
    }
    function saveFavs(favs) {
      localStorage.setItem("favourites", JSON.stringify(favs));
    }
  });
}
