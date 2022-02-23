import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Card, Input } from "@material-ui/core";
import styles from "../styles/Cardd.module.scss";
import axios from "axios";
import  Info  from "./Info";
import { Fab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Maininfo from "./Maininfo";
function Cardd() {
const [Api, setApi] = useState();
 
 const [Ien, setIen] = useState("");
 const [Value, setValue] = useState("panipat");
 const [c, setc] = useState();
 
 const value="kar";
  useEffect(() => {
    const name = async () => {
      try{
      const api = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Value}&units=metric&appid=0b0db65ebbec168adafe8571da6f7d8c`
      );
setc(api.status);
      setApi(api.data)}
      catch(err){
        setc(404);
      }
    };
    name();
  },[Value]);
const In =(e)=>{
 setIen(e.target.value)
}
const Change =()=>{
   setValue(Ien)
   

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setValue(Ien)
   
    }

  }


 return (
    <div className={styles.card_div}>
      <Card className={styles.card}>
        <div className="Text">
          <TextField
            className={styles.i}
            label="City Name"
            onChange={In}          
            inputProps={{ maxLength: 10 }}
            onKeyDown={handleKeyDown}
          />

          <Fab
            size="small"
            className={styles.btn}
            color="secondary"
            aria-label="add"
           onClick={Change}
          >
            <SearchIcon />
          </Fab>
        </div>

{c==200?(
  <>
  <Maininfo Api={Api}/>
  <Info Api={Api}/>
  
</>  
):(
<p className={styles.notfound}>this city was not found</p>
)}
      </Card>
    </div>
  );
}
export default Cardd;
