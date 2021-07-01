import * as React from "react";
import { Wrapper } from "./elements";
import About from "./about";
import Education from "./education";
import Skills from "./skills";

const LeftSidebar = () => (
  <Wrapper>
    <About />
    <Education />
    <Skills />
  </Wrapper>
);

export default LeftSidebar;
