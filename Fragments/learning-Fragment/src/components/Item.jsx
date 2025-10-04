import styles from "./Item.module.css";

const Item=({foodItem,bought,handleBuyButtonClicked}) =>{
  // let {foodItem}=props;



return (
   <li className={`${styles["kg-item"]} list-group-item `}>
          {foodItem}
          <button className={`${styles.button} btn btn-info ${bought} && 'active'`}
           onClick={
            ()=> {handleBuyButtonClicked(foodItem)}
          }>Buy</button>
          </li>
);
}
export default Item;