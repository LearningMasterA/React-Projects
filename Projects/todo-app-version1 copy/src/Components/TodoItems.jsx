import ToDoItem from "./ToDoItem";

const TodoItems=({todoItems, onDeleteClick})=>{
  return <div>
    {todoItems.map(item =>

    <ToDoItem todoName={item.name} 
    key={item.name}
    todoDate={item.duedate} onDeleteClick={onDeleteClick}
    >
    </ToDoItem>)}






  {/* <ToDoItem todoDate={'4/10/2003'} todoName={'Buy milk'}></ToDoItem>
    <ToDoItem todoDate={'4/10/2003'} todoName={'Go to Gym'}></ToDoItem> */}

 </div>
}

export default TodoItems;