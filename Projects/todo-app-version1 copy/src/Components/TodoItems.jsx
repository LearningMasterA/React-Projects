import ToDoItem from "./ToDoItem";
import {TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems=()=>{
  const {todoItems,deleteItem}=useContext(TodoItemsContext);
  // const todoItems=contextObject.todoItems;
  // console.log(todoItemsFromContext);
  return <div>
    {todoItems.map(
      (item) =>
        (
    <ToDoItem 
    todoName={item.name} 
    todoDate={item.duedate} 
    onDeleteClick={deleteItem}
    ></ToDoItem>
  )
    )
    }
  </div>
}
export default TodoItems;