import * as React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "twin.macro";
import { H4, P } from "./typography";
import { Div } from "./elements";

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearWhenIStartedFirstJob = new Date(2011, 11, 11).getFullYear();
  const yearWhenIStartedWorkingInCactus = new Date(2016, 6, 1).getFullYear();
  const experience = currentYear - yearWhenIStartedFirstJob;
  const experienceInCactus = currentYear - yearWhenIStartedWorkingInCactus;

  return (
    <Div tw="divide-y-2 divide-gray-200">
      <Div tw="flex mb-2">
        <FontAwesomeIcon tw="mr-3 mt-1" icon={faUser} size="lg" />
        <H4 tw="uppercase font-extrabold">About Me</H4>
      </Div>
      <Div tw="pt-2 lg:pt-7 flex flex-col space-y-4">
        <P>
          I'm Sahil, working as Associate Director of Engineering in CACTUS.
          I've been on a gratifying journey with Cactus for the last{" "}
          {experienceInCactus} years, lifting my expertise &amp; experience,
          working with passionate and delightful people who are full of color.
          My main focus is on building high-performance team, great products,
          and high-quality development culture.
        </P>
        <P>
          I have been spending {experience} years of my life in the software
          industry, helping people and processes to become efficient, automate
          redundant jobs, and manage a department. I focus on building
          futuristic products and encourage my team and department to operate
          with scalability in mind. I like simplifying complex systems by
          packaging technological advances into friendly experiences. I make
          open-source contributions in some of the frameworks we use in the
          organization and own some npm packages and GitHub projects that have
          healthy downloads.
        </P>
        <P>
          Off work, I spend my time with family &amp; two lovely felines. I also
          keep interested in blog writing (technology &amp; finance),
          astrophysics, traveling, graphic designing, and investing/trading.
        </P>
      </Div>
    </Div>
  );
};

export default About;
