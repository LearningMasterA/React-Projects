import TodoItems from "./TodoItems";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
 const {todoItems}=useContext(TodoItemsContext);

  return (
    todoItems.length===0 &&
      <p className="fw-bolder mt-5 text-center fs-1">Enjoy your day</p>
  );
};

export default WelcomeMessage;