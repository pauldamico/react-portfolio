import styles from '../../App.module.scss';
export default function Left (props){

    return (<div onClick={()=>{console.log("Use Arrow")}} className={styles.left}>
{props.children}

    </div>)
}