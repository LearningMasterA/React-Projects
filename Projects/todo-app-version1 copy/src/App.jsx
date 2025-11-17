import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css";
import ToDoItem from "./Components/ToDoItem";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import {useReducer} from "react";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";


function App() {

  return (
    <TodoItemsContextProvider>
    <center className="todo-container mt-5">
    <AppName/>
    <AddToDo />
    <WelcomeMessage />
    <TodoItems />
    </center>
    </TodoItemsContextProvider>


  )
}

export default App;
