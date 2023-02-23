import About from "../About"
import Center from "../Reusable/Center";
import Left from "../Reusable/Left";
import Right from "../Reusable/Right";
import DirectionGrid from "../Reusable/DirectionGrid";
import Contact from "../Contact";
import Projects from "../Projects";
export default function AboutDiv (props){

    return (
        <DirectionGrid>
        <Left>
          <Projects />
        </Left>
        <Center left="/projects" right="/contact">
          <About>{props.children}</About>
        </Center>
        <Right>
          <Contact />
        </Right>
      </DirectionGrid>

    )
}