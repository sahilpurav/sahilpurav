import * as React from "react";
import "twin.macro";
import { Div, Wrapper } from "../components/elements";
import Header from "../components/header";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Experience from "../components/experience";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sahil Purav - Associate Director, Programmer, Leader, Mentor, Open Source Contributor
        </title>
      </Helmet>
      <Header />
      <Wrapper>
        <Div tw="lg:flex lg:space-x-16">
          <Div tw="lg:w-1/3">
            <About />
            <Education />
            <Skills />
          </Div>
          <Div tw="lg:w-2/3">
            <Experience />
          </Div>
        </Div>
      </Wrapper>
    </>
  );
};

export default IndexPage;
