import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";


// import { Fragment } from 'react';
function App() {
  // let foodItems=["Pulses","Green Vegetables","Salad","Milk","Fruits","Ghee"];
  //  let textStateArr=useState("Food item entered by user");
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];

  // let [textToShow,setTextState]=useState();
  let [foodItems,setFoodItems]=useState([]);
  // console.log(textToShow);
  // console.log(setTextState);
  // let textToShow="Hello";
  // let emptyMessage=(foodItems==0 ? <h3>I am still hungry</h3>:null);
const onKeyDown=(event)=>{ 
  if(event.key==="Enter"){
    let newFoodItem=event.target.value;
    event.target.value="";

    let newItems=[...foodItems,newFoodItem];
    setFoodItems(newItems);

    // console.log("food entered value is:"+newFoodItem);

  }
    
  }

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Items</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      {/* <p>{textToShow}</p> */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>

      {/* <li class="list-group-item">Pulses</li>
      <li class="list-group-item">Green Vegetables</li>
      <li class="list-group-item">Salad</li>
      <li class="list-group-item">Milk</li>
      <li class="list-group-item">Fruits</li> */}


    </Container>
    </>
  );


}

export default App;
