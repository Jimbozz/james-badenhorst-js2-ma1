import { url } from "./constants/api.js";
import { createHtml } from "./components/createHtml.js";
import { searchProducts } from "./components/searchProducts.js";
import displayMessage from "./components/displayMessage.js";

// const container = document.querySelector(".result-container");

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    createHtml(json);
    searchProducts(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".result-container");
  }
}

callApi();
