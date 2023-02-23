import Home from "../Home";
import Center from "../Reusable/Center";
import Left from "../Reusable/Left";
import Right from "../Reusable/Right";
import DirectionGrid from "../Reusable/DirectionGrid";
import Contact from "../Contact";
import Projects from "../Projects";
export default function HomeDiv(props) {
  return (
    <DirectionGrid>
      <Left>
        <Contact />
      </Left>
      <Center left="/contact" right="/projects">
        <Home>{props.children}</Home>
      </Center>
      <Right>
        <Projects />
      </Right>
    </DirectionGrid>
  );
}
