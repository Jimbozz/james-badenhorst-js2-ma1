import displayMessage from "./displayMessage.js";
import { EMPTY_RESULTS } from "../constants/message.js";

export function createHtml(cardsToRender) {
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "";

  if (cardsToRender.length === 0) {
    resultContainer.innerHTML = "Whoops";
    displayMessage("error", error, resultContainer);
  }

  cardsToRender.forEach(function (card) {
    resultContainer.innerHTML += `
    <div class="result">
                                        <h3>${card.title}</h3>
                                        <h5>Price: NOK ${card.price}</h5>
                                        
                                    </div>
    `;
  });
}
