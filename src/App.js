import Main from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Project from './Components/Project';
import Nav from './Components/Nav';
import styles from './App.module.scss';

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className={styles.app}>      
      <Nav/>
      
      <Routes>
      <Route path="/" element ={<Main/>}/>
      <Route path="/about" element ={ <About />}/>
      <Route path="/projects" element ={<Projects />}/>
      <Route path="/projects/:title" element ={<Project />}/>
      <Route path="/contact" element ={   <Contact />}/>    
      </Routes>
     
    </div>    
    </>
  );
}

export default App;
