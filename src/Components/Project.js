import styles from '../App.module.scss';
import {useParams, Link} from "react-router-dom";
import {projectData} from "../projectData";
export default function Project (){
  const {title} = useParams()
  const selectedProject = projectData.find(project=>title === project.title)
    return (<>      
   <div className={styles.project}>
  <h1>{selectedProject?.title}</h1>
    <p>{selectedProject?.description}</p>
    <img/>

    </div>
    </>)
}