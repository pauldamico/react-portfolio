import {Link} from 'react-router-dom'
import styles from '../App.module.scss';
export default function Nav (){

    

    return (<div className={styles.nav}>    
      <Link to="/">Home</Link>    
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>)
}