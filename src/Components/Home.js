import React,{useContext} from 'react';
import {portfolioContext} from '../Context/portfolioProvider'


import styles from '../App.module.scss';
export default function Home (){
    const {toggle, toggleHello, toggleName, toggleDeveloper} = useContext(portfolioContext)
    

    const hello = !toggle.hello ? "hello.world" : "Hello visitor"
    const name = !toggle.name ? 'my[name] = "Paul"' : "My name is Paul"
    const developer = toggle.developer ? 'const i = "Web Developer"' : "A Web Developer"
  
    return (
  
    <div className={styles.home}>
        <h1 onClick={toggleHello}>{hello}</h1> <h2 onClick={toggleName}>{name} </h2><h3 onClick={toggleDeveloper}>{developer}</h3>
        <p>I HAVE ALWAYS LOVED PROBLEM SOLVING. I ALSO ENJOY FINDING WAYS TO DO THINGS AS EFFICIENTLY AS POSSIBLE. THIS IS WHY I LOVE WEB DEVELOPMENT.</p>
        {/* <section></section> */}
    </div>
   
    )
}