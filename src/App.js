import { useDispatch } from "react-redux";
import { addTodo } from "./actions";
import { useState } from "react";
import TodoList from "./todoList";


function App() {

  const dispatch = useDispatch()

  const [todoTitle, updateTodoTitle] = useState('')

  const handleTodo = () => {
    if(todoTitle.trim()){
      const newTodo = {
        title: todoTitle
      }
      dispatch(addTodo(newTodo))
      updateTodoTitle('')
    }
  }

  return (
    <div className = 'container mt-5 w-50'>
      <h3 className="text-primary text-center">Todo Application using React Redux</h3>
      <div className="input-group">
        <input type='text' className='form-control' placeholder="Add a Todo" value={todoTitle} onChange={(e) => updateTodoTitle(e.target.value)}/>
        <button className="btn btn-primary" onClick={() => handleTodo()}>Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
