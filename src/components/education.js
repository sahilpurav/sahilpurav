import * as React from "react";
import "twin.macro";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H4, P } from "./typography";
import { Div } from "./elements";

const degrees = [
  {
    name: "B.Sc. in Information Technology",
    description: "March 2011, Valia College, Mumbai - 66.86%",
  },
  {
    name: "Higher Secondary School (HSC)",
    description: "Feb 2008, Valia College, Mumbai - 61.33%",
  },
  {
    name: "Secondary School Certiﬁcate (SSC)",
    description: "March 2006, Bal Vidya Mandir, Thane - 85.86%",
  },
];

const Education = () => (
  <Div tw="divide-y-2 divide-gray-200 mt-8">
    <Div tw="flex mb-2">
      <FontAwesomeIcon tw="mr-3 mt-1" icon={faUserGraduate} size="lg" />
      <H4 tw="uppercase font-extrabold">Education</H4>
    </Div>
    <Div tw="pt-2 flex flex-col space-y-4">
      {degrees.map((degree, index) => (
        <Div key={index}>
          <P tw="font-bold">{degree.name}</P>
          <P tw="font-light">{degree.description}</P>
        </Div>
      ))}
    </Div>
  </Div>
);

export default Education;
