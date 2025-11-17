import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext=createContext({
      todoItems:[],
      addNewItem:()=>{},
      deleteItem:()=>{}
});

const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if(action.type==='NEW_ITEM'){
    newTodoItems=[
      ...currTodoItems,{name: action.payload.itemName, duedate: action.payload.itemduedate}
    ];
    
  }
   else if(action.type==='DELETE_ITEM'){
   newTodoItems=currTodoItems.filter(
    (item)=>item.name!=action.payload.itemName
  );
  }
  return newTodoItems; 
};



const TodoItemsContextProvider=({children})=> {
  const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[]);


  const addNewItem=(itemName,itemduedate)=>{
    const newItemAction={
      type:"NEW_ITEM",
      payload: {
        itemName,
        itemduedate
      }
    };
    dispatchTodoItems(newItemAction);


    // console.log(itemName);
    // console.log(itemduedate);

    // const newTodoItems=[
    //   ...todoItems,{name:itemName,duedate:itemduedate}];
    // setTodoItems(newTodoItems);

  };

  const deleteItem=(todoItemName)=>{
    // const newTodoItems=todoItems.filter((item)=>item.name!=todoItemName)
    // setTodoItems(newTodoItems);
  
    const deleteItemAction={
    type: "DELETE_ITEM",
    payload: {
      todoItemName
    }
    }; 
    dispatchTodoItems(deleteItemAction);
  };

return (
  <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
      }} >
        {children}
      </TodoItemsContext.Provider>
)
}


export default TodoItemsContextProvider;
