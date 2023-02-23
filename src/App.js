import HomeDiv from './Components/Divs/HomeDiv';
import ProjectsDiv from './Components/Divs/ProjectsDiv';
import AboutDiv from './Components/Divs/AboutDiv';
import ContactDiv from './Components/Divs/ContactDiv';
import Project from './Components/Project';
import Nav from './Components/Nav';
import styles from './App.module.scss';

import {Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <div className={styles.app}>      
      <Nav/>    
      <Routes>
      <Route path="/" element ={<HomeDiv/>}/>
      <Route path="/projects" element ={<ProjectsDiv />}/>
      <Route path="/projects/:title" element ={<Project />}/>
      <Route path="/about" element ={ <AboutDiv />}/>     
      <Route path="/contact" element ={   <ContactDiv />}/>    
      </Routes>
     
    </div>    
    </>
  );
}

export default App;
