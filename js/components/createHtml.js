// export function createHtml(data, targetElement) {
//   const element = document.querySelector(targetElement);

//   element.innerHtml = "";

//   for (let i = 0; i < 7; i++) {
//     element.innerHTML += `<div class="result">
//                                         <h4>${data[i].price}</h4>

//                                     </div>`;
//   }
// }

export function createHtml(cardsToRender) {
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "";

  cardsToRender.forEach(function (card) {
    resultContainer.innerHTML += `
    <div class="result">
                                        <h3>${card.title}</h3>
                                        <h5>Price: NOK ${card.price}</h5>
                                        
                                    </div>
    `;
  });
}
