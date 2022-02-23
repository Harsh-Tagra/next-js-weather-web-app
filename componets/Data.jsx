import { Card } from "@material-ui/core"
import styles from "../styles/Data.module.scss"
import Image from "next/image"
  const Data = (props) => {
  
  return (
 <>
 <Card className={styles.div_data}> 
 
 <p className={styles.p}>{props.text}</p><p className={styles.p2}>{props.value}
 </p>
 <div className={styles.image}>
 <Image  src={props.image} alt=""  width="40px" height= "40px"/> 
 </div>
 </Card> </>)
}
export default Data