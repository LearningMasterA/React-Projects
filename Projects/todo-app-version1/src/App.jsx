import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import ToDOItem1 from "./Components/ToDoItem1"
import ToDOItem2 from "./Components/ToDoItem2"
import "./App.css";

function App() {

  return (
    <center class="todo-container mt-5">
    <AppName/>
    <AddToDo/>
    <ToDOItem1/>
    <ToDOItem2/>
    </center>

  )
}

export default App
