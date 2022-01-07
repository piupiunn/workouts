const form = document.querySelector("#todo-form");
const title = document.querySelector("#todo-title");
const category = document.querySelector("#todo-category");
const list = document.querySelector("#todo-list");
const filter = document.querySelector("#todo-filter");
const count = document.querySelector("#todo-count");

const render = (items, itemsCount) => {
  count.textContent = `(${itemsCount})`;
  list.innerHTML = items
    .map((todo) => `<li>${todo.title} [${todo.category}]</li>`)
    .join("");
};
const todos = new Todos();

try {
  render(todos.getAll(), todos.getCount());
} catch (error) {
  console.error(error);
}
