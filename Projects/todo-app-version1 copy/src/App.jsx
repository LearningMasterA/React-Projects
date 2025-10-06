import AppName from "./Components/AppName"
import AddToDo from "./Components/AddToDo"
import "./App.css";
import ToDoItem from "./Components/ToDoItem";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

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



  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.name!=todoItemName)
    setTodoItems(newTodoItems);
    console.log(`Delete ${todoItemName}`);


  }

  return (
    <TodoItemsContext.Provider value={[]} >
    <center className="todo-container mt-5">
    <AppName/>
    <AddToDo onNewItem={handleNewItem}/>
  <WelcomeMessage todoItems={todoItems}/>
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    
    </center>
    </TodoItemsContext.Provider>

  )
}

export default App;
