import styles from '../../App.module.scss';
export default function Left (props){

    return (<div className={styles.left}>
{props.children}

    </div>)
}