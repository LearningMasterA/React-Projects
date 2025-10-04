import ToDoItem from "./ToDoItem";

const TodoItems=({todoItems})=>{
  return <div>
    {todoItems.map(item =>
    <ToDoItem todoName={item.name} 
    todoDate={item.duedate}
    >
    </ToDoItem>)}






  {/* <ToDoItem todoDate={'4/10/2003'} todoName={'Buy milk'}></ToDoItem>
    <ToDoItem todoDate={'4/10/2003'} todoName={'Go to Gym'}></ToDoItem> */}

 </div>
}

export default TodoItems;