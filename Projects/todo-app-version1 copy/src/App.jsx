import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css";
import ToDoItem from "./Components/ToDoItem";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {



  const initialtodoItems=[
//     {
//     name:'Buy milk',
//     duedate:'4/10/2023',
//   },
// {
//     name:'Go to Gym',
//     duedate:'4/10/2023',
// },
// {
//   name:'Learn React',
//   duedate:'6/10/2023',
//}
];

// let onDelete=() => alert("Delete Clicked");

  const [todoItems,setTodoItems]=useState([]);
  const handleNewItem=(itemName,itemduedate)=>{

    // console.log(itemName);
    // console.log(itemduedate);

    const newTodoItems=[...todoItems,{name:itemName,duedate:itemduedate}];
    setTodoItems(newTodoItems);
  }
  // const addWork=(todoItems)=>{
  //   let newTodoWork=initialtodoItems + todoItems;
  //   setTodoItems(newTodoWork);
  // }

  return (
    <center className="todo-container mt-5">
    <AppName/>
    <AddToDo onNewItem={handleNewItem}/>
    {todoItems.length ==0 && <WelcomeMessage/>}
    <TodoItems todoItems={todoItems}></TodoItems>
    
    </center>

  )
}

export default App
