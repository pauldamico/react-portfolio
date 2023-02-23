import styles from '../App.module.scss';
import {projectData} from "../projectData";
import {Link} from "react-router-dom";

export default function Projects (){

    const trackMyDogImg = require(".././Images/trackmydog.png")
    const mealPlannerImg = require(".././Images/mealplanner.png")
    const hotZoneImg = require(".././Images/hotzone.png")
    const gamerProfileImg = require(".././Images/gamerprofile.png")

    const ProjectList = projectData.map(project=><div key={project.id}><Link style={{textDecoration:"none"}} to={`/projects/${project.title}`}><p>JS</p><nav><h5>{project.title}</h5></nav>
   <img src={project.image}/>
   </Link></div>)
    return (<>
        <h1>[...Projects]</h1>
        <div className={styles.projectListDiv}>
        {ProjectList}
        </div>
    </>)
}



// <Project> 
//     <div>
// <a href="https://www.trackmydog.app/tracker" rel="noreferrer" target="_blank">Track My Dog</a>
// <p>I developed this app to allow users to track when you fed, took out, gave treat, scheduled vet apt, and grooming apt.</p>
// <h4>TECHNOLOGIES: React, Node, Express, Mongoose, MongoDB, Hosted with Render.com</h4>
// <div class="project-button-div"><button><a href="https://github.com/pauldamico/dog-tracker" rel="noreferrer" target="_blank">View Code</a></button><button>
// <a href="https://www.trackmydog.app/tracker" rel="noreferrer" target="_blank">View Project</a></button></div>
// </div>  
// <a href="https://www.trackmydog.app/tracker" rel="noreferrer" target="_blank"><img src={trackMyDogImg} alt="Track My Dog" /></a>
 
// </Project>

// <Project>
//     <div>
// <a href="https://mealplanner-frontend.onrender.com/" rel="noreferrer" target="_blank">Meal Planner</a>
// <p>I developed this app with a group that allows users to find recipes and add them to a recipe list.  It is also a weekly meal planner</p>
// <h4>TECHNOLOGIES: React, Node, Express, Mongoose, MongoDB, Hosted with Render.com</h4>
// <div class="project-button-div"><button > <a href="https://github.com/pauldamico/recipe-tracker/" rel="noreferrer" target="_blank">View Code</a></button><button>
// <a href="https://mealplanner-frontend.onrender.com/" rel="noreferrer" target="_blank">View Project</a></button></div>
// </div>
// <a href="https://mealplanner-frontend.onrender.com/" rel="noreferrer" target="_blank"><img src={mealPlannerImg} alt="Meal Planner" /></a>
// </Project>

// <Project>
//     <div>
// <a href="https://www.youtube.com/watch?v=Z6Q5bhENln0&t=10s" rel="noreferrer" target="_blank">Gamer Profile</a>
// <p>I developed this app to allow gamers to save any important gaming information they need per game.  I added some subtitles describing everything in the video.</p>
// <h4>TECHNOLOGIES: React, localStorage, Vite, Frontend, API</h4>
// <div class="project-button-div"><button><a href="https://www.youtube.com/watch?v=Z6Q5bhENln0&t=10s" rel="noreferrer" target="_blank">View Project</a></button></div>     
// </div>
// <a href="https://mealplanner-frontend.onrender.com/" rel="noreferrer" target="_blank"><img src={gamerProfileImg} alt="Gamer Profile" /></a>
// </Project>

// <Project>
//     <div>
// <a href="https://www.youtube.com/watch?v=mFmZiGz20h8" rel="noreferrer" target="_blank">HotZone App</a>
// <p>This section of the app was created by me and calculates drug useage data in the case of emergency situations for firefighters.  I am working with a full team to develop the entire app that will be used by fire departments.</p>
// <h4>TECHNOLOGIES: React,  Vite, Frontend, API, Google Firebase, Firestore</h4>
// <div class="project-button-div"><button><a href="https://www.youtube.com/watch?v=mFmZiGz20h8" rel="noreferrer" target="_blank">View App</a></button></div>
// </div>
// <a href="https://mealplanner-frontend.onrender.com/" rel="noreferrer" target="_blank"><img src={hotZoneImg} alt="Hotzone" /></a>
// </Project>

