import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}
/* Todoların içine Todo.js de tanımlı olan props.text i ayrı ayrı özelleştirip ihtiyacımıza göre kullandık. Ama Todo fonksiyonu içinde props.text olarak belirtip nerede kullanılacağını da belirtmeliyiz */

export default App;
