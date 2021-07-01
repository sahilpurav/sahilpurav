import * as React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "twin.macro";
import { H4, P } from "./typography";
import { Div } from "./elements";

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearWhenIStartedFirstJob = new Date(2011, 11, 11).getFullYear();
  const experience = currentYear - yearWhenIStartedFirstJob;

  return (
    <Div tw="divide-y-2 divide-gray-200">
      <Div tw="flex mb-2">
        <FontAwesomeIcon tw="mr-3 mt-1" icon={faUser} size="lg" />
        <H4 tw="uppercase font-extrabold">About Me</H4>
      </Div>
      <Div tw="pt-2 flex flex-col space-y-4">
        <P>
          I have spent {experience} years of my life in the software industry,
          helping large companies, utilise software to become more eﬃcient,
          automate redundant jobs and manage their business. You could say that,
          my eﬀorts always focus on making the big, even bigger.
        </P>
        <P>
          My resume can be summarised as simplifying complex systems by
          packaging technological advances into friendly experiences.
        </P>
        <P>
          While not quite at the age for a mid life crisis, I have been looking
          for a signiﬁcant change &amp; a meaningful mission or put simply, an
          endeavour that would be fulﬁlling, contribute to my happiness &amp; my
          freedom.
        </P>
        <P>
          What could be more gratifying than lifting my expertise, experience
          &amp; moving it to a completely diﬀerent domain that I ﬁnd
          exhilarating, full of colour with passionate and delightful people,
          and super important to the way we live our lives?
        </P>
      </Div>
    </Div>
  );
};

export default About;
