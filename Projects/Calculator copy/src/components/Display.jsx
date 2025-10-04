import styles from './Display.module.css'

const Display=({calVal})=>{
return <input className={styles.display} type='text' placeholder='Enter text' value={calVal} readOnly></input>
}
export default Display;