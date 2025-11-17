import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoItem({todoName,todoDate}) {
const {deleteItem}=useContext(TodoItemsContext);

  return <div className="container text-center">
      <div className="row mt-3">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>deleteItem(todoName)}><MdDelete /></button>
        </div>
      </div>
      </div>
}
export default ToDoItem;
