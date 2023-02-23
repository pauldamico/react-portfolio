import Projects from "../Projects"
import Center from "../Reusable/Center";
import Left from "../Reusable/Left";
import Right from "../Reusable/Right";
import DirectionGrid from "../Reusable/DirectionGrid";
import Home from "../Home";
import About from "../About";
export default function ProjectsDiv (props){

    return (
        <DirectionGrid>
        <Left>
          <Home />
        </Left>
        <Center left="/" right="/about">
          <Projects>{props.children}</Projects>
        </Center>
        <Right>
          <About />
        </Right>
      </DirectionGrid>

    )
}