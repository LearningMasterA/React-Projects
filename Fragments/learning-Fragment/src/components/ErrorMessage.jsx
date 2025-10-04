
// Parameter destructuring
const ErrorMessage=({items})=>{

  // let foodItems=["Pulses","Green Vegetables","Salad","Milk","Fruits"];

return  <div>
  {items.length==0 && <h3 className="ml-5">I am waiting for the diet to be planned</h3>}
</div>
}

export default ErrorMessage;