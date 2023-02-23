import { useNavigate } from "react-router-dom";
import styles from "../../App.module.scss";

export default function Center(props) {

    const navigate = useNavigate();
  return (
    <div className={styles.center}>
        <div className={styles.arrows}>
        <img alt="left" onClick={()=>{navigate(props.left)}}
          className={styles.leftarrow}
          src={require("../../Images/leftarrow.png")}
        />
        <img  alt="right" onClick={()=>{navigate(props.right)}}
          className={styles.rightarrow}
          src={require("../../Images/rightarrow.png")}
        />
        </div>
       
      {props.children}     
  
   
    </div>
  );
}
