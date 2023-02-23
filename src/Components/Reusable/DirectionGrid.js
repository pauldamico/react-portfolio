import styles from '../../App.module.scss';
export default function DirectionGrid (props){

    return (<div className={styles.directiongrid}>
{props.children}

    </div>)
}