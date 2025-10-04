import { useState } from "react";

function AddToDo({onNewItem}) {
const [todoName,setTodoName]=useState();
const [dueDate,setdueDate]=useState();

const handleNameChange=(event)=>{
  // setTodoName(todoName);

  setTodoName(event.target.value);
}

const handleDateChange=(event)=>{
  // setdueDate(dueDate);
  setdueDate(event.target.value);
}


const handleAddButtonClick=()=>{
  onNewItem(todoName,dueDate);
  setTodoName("");
  setdueDate("");
}
  return (
    <div class="container text-center">
      <div class="row mt-5">
        <div class="col-6">
          <input type="text" placeholder="Enter todo work here"
          value={todoName}
          onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date"
          value={dueDate}
          onChange={handleDateChange}
          />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary" 
          onClick={()=>{
            // onNewItem(todoName,dueDate);
            handleAddButtonClick();
            }}>
            Add
            </button>
        </div>
      </div>
    </div>  

  )
}


export default AddToDo;