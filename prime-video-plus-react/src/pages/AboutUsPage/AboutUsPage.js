import { applyStyles } from "../../hoc/applyStyles";
import Bye from "./components/Bye";
import Hello from "./components/Hello";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const AboutUsPage = (props) => {
  return (
    <div>
      <h1>About Us</h1>
      {/* The following paragraph is to demo error boundary */}
      {/* Enable the following line to see error boundary in action */}
      {/* <p>{props.getAge()}</p> */}

      <h2>HOC Demo</h2>
      <StyledHello />
      <StyledBye />
    </div>
  );
}

export default AboutUsPage;
