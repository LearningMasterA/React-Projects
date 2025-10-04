import styles from './ButtonsContainer.module.css'

const ButtonsContainer=({onButtonClick})=>{

  const buttonsContainer=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  // return <div className={styles.buttonsContainer}>
  //   {buttons.map((button)=>{buttons.})}

  return <div className={styles.buttonsContainer}>
    {buttonsContainer.map(buttonName=> 
    <button className={styles.button} 
    onClick={()=>onButtonClick(buttonName)}
    >{buttonName}</button>
  )}

    </div>

}

export default ButtonsContainer;