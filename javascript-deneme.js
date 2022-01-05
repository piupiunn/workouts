const input = document.querySelector("#input");
const output = document.querySelector("#output");

function getDescription(text) {
  return text.substring(0, 10);
}

input.addEventListener("input", (event) => {
  output.textContent = getDescription(event.currentTarget.value);
});
