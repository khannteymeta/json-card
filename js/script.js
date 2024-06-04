import { cardComponent } from "../components/cardComponent.js";
import { product } from "../data/product.js";

let readerArea = document.querySelector("#card");

var BASE_URL = "http://127.0.0.1:5500/data/product.json";
fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    data.map((product) => {
      readerArea.innerHTML += cardComponent(product);
    });
  });
