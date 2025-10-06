import { useState,useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";


function AddToDo({onNewItem}) {
const [todoName,setTodoName]=useState("");
const [dueDate,setdueDate]=useState("");
const noOfClicks=useRef(0);

const handleNameChange=(event)=>{
  // setTodoName(todoName);

  setTodoName(event.target.value);
  noOfClicks.current+=1;
}

const handleDateChange=(event)=>{
  // setdueDate(dueDate);
  setdueDate(event.target.value);
  console.log(`No of clicks: ${noOfClicks.current}`);
}


const handleAddButtonClick=(event)=>{
  event.preventDefault();
  onNewItem(todoName,dueDate);
  setTodoName("");
  setdueDate("");


}
  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClick} className="row mt-5">
        <div className="col-6">
          <input type="text" placeholder="Enter todo work here"
          value={todoName}
          onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={dueDate}
          onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary" 
          onClick={()=>{
            // onNewItem(todoName,dueDate);
            handleAddButtonClick();
            }}>
            <IoAddCircleOutline></IoAddCircleOutline>
            </button>
        </div>
        </form>
      
    </div>  

  )
}


export default AddToDo;