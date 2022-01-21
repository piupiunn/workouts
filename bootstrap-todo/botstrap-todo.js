const ekle = document.getElementById("button-addon2");
const formgirdisi = document.getElementById("yazı-kutusu");

ekle.addEventListener("click", formekle);

function formekle() {
  if (formgirdisi.value == "a") alert("sadasda");
  else {
    const yeniform = document.createElement("input-group-text");
    yeniform.appendChild(document.createTextNode(formgirdisi.value));
    formgirdisi.appendChild(yeniform);
    ekle.value = "";
  }
}
