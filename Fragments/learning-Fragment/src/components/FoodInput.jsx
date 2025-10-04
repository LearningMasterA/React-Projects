import styles from "./FoodInput.module.css"

const FoodInput=({handleKeyDown})=>{

  return <div className={styles.foodInput}>
    <input type="text" placeholder="Enter food item" onKeyDown={handleKeyDown}/>
    </div>
    }

    export default FoodInput;