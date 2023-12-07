import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage = () => {
  // Let's try to collect the todo input form elements's data in uncontrolled component's way
  const todoInputRef = useRef();

  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState); // undefined at first
  console.log(todoDispatch); // is a fn

  useEffect(() => {
    // Let's load the todos after initial rendering
    todoDispatch({
      type: "LIST_TODOS"
    });
  }, []);

  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);
    const todoItem = {
      id: new Date().toISOString(),
      title: todoInputRef.current.value,
      isCompleted: false,
    };
    console.log(todoItem); // this todo should be added into an array of todos
    // Let's dispatch an action to add a todo
    todoDispatch({
      type: "ADD_TODO",
      payload: todoItem,
    });
  };

  return (
    <div>
      <h1>Todos App! | useRef and useReducer Hooks</h1>
      <input type="text" placeholder="Enter Todo" ref={todoInputRef} />
      <button onClick={handleAddTodo}>Add TODO</button>
      <hr />

      <div>
        <h2>Listing Todos</h2>
        {todoState?.length === 0 && (
          <div className="alert alert-warning">
            No Todos Found. You can add one
          </div>
        )}

        <ul>
          {todoState?.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
