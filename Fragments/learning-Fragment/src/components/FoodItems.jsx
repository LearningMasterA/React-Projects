import { useState } from "react";
import Item from "./Item";

const FoodItems=({items})=>{
  // let foodItems=["Pulses","Green Vegetables","Salad","Milk","Fruits"];
let [activeItems,setActiveItems]=useState([]);

let onBuyButtonClicked=(item,event)=>{
  let newItems=[...activeItems,item];
  setActiveItems(newItems);

};

  return <ul className="list-group fw-bolder fs-5 ">
        {items.map((item)=>
        <Item 
        key={item}
        foodItem={item}
        bought={activeItems.includes(item)}
        handleBuyButtonClicked={(event)=>onBuyButtonClicked(item,event)}
        ></Item>
        )}
        </ul>
}

export default FoodItems;