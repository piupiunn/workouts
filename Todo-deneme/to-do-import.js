export default class Todos {
  constructor() {
    this.todos = [
      {
        title: "Learn JavaScript",
        category: "work",
      },
      {
        title: "Meditate",
        category: "personal",
      },
    ];
  }
  getAll() {
    return this.todos;
  }
  getCount() {
    return this.todos.length;
  }
  add(title, category) {
    this.todos.push({ title, category });
  }
  getWork() {
    return this.todos.filter((todo) => todo.category === "work");
  }
  getWorkCount() {
    return this.getWork().length;
  }
  getPersonal() {
    return this.todos.filter((todo) => todo.category === "personal");
  }

  getPersonalCount() {
    return this.getPersonal().length;
  }
}
