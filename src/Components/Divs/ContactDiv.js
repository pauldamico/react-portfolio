import Contact from "../Contact"
import Center from "../Reusable/Center";
import Left from "../Reusable/Left";
import Right from "../Reusable/Right";
import DirectionGrid from "../Reusable/DirectionGrid";
import Home from "../Home";
import About from "../About";

export default function ContactDiv (props){

    return (
        <DirectionGrid>
        <Left>
          <About />
        </Left>
        <Center left="/about" right="/">
          <Contact>{props.children}</Contact>
        </Center>
        <Right>
          <Home />
        </Right>
      </DirectionGrid>

    )
}