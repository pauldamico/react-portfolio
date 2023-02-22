import {Link} from 'react-router-dom'
export default function Nav (){

    const linkStyle = {textDecoration:"none"}

    return (<div className='nav-div'>    
      <Link style={linkStyle} to="/">Home</Link>    
        <Link style={linkStyle} to="/projects">Projects</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
    </div>)
}