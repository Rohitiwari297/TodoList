import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import todoReducer, {addTodo, editTodo, deleteTodo, todoFinished} from './slices/todoSlice'
function App() {

  //creating dispatch method
  const dispatch = useDispatch()
  const actions = bindActionCreators({addTodo, editTodo, todoFinished, deleteTodo}, dispatch)
  return (
      <>  
        <AddTodo addTodo = {actions.addTodo}/>
        <TodoList deleteTodo = {actions.deleteTodo} editTodo= {actions.editTodo} todoFinished= {actions.todoFinished} />
      </>
  );
}
import { formatProdErrorMessage } from "@reduxjs/toolkit";

export default App;
