import ToDoItem from "./ToDoItem";
import {ToDoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems=({todoItems, onDeleteClick})=>{
  const todoItemsFromContext=useContext({ToDoItemsContext});
  console.log(`items from context ${todoItemsFromContext}`);
  return <div>
    {todoItems.map(item =>(
    <ToDoItem todoName={item.name} 
    key={item.name}
    todoDate={item.duedate} 
    onDeleteClick={onDeleteClick}
    >
    </ToDoItem>)
    )
    }

 </div>
}

export default TodoItems;