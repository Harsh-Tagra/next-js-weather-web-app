import { Card, Input } from "@material-ui/core";
import styles from "../styles/main.module.scss";
import Image from "next/image";

 const Maininfo = (props) => {
  const api = props.Api

  const  Ing =`http://openweathermap.org/img/wn/${api?.weather[0].icon}@2x.png`
  
  
const sate   =api?.name
const country=api?.sys.country
const temp  =api?.main.temp
const max   =api?.main.temp_max
const min   =api?.main.temp_min
const fell  =api?.main.feels_like  
const  mainte =api?.weather[0].description


  return (
    <>
    
    <div className="Text">
        <Card className={styles.main}>
          <div className={styles.d}>
            {" "}

            <h1 className={styles.h1}>
              {sate},{country}
            </h1>
            <Image src={Ing} width="75px" height="75px"></Image>
            <p className={styles.marginp}> {mainte} | {temp}&deg;C</p>
            <p className={`${styles.max_min} ${styles.marginp}`}>
              Max {max}&deg;C | Min {min}&deg;C
            </p>
            <p className={`${styles.fell} ${styles.marginp}`}>
              {" "}
              Feels Like {fell}&deg;C
            </p>
          </div>
        </Card>
      </div>

    </>
  )
}
export default Maininfo