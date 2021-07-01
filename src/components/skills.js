import * as React from "react";
import "twin.macro";
import { Div } from "./elements";
import { P, H5 } from "./typography";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillsets = [
  {
    id: 1,
    type: "Leadership",
    skills: [
      "People Management",
      "Strategic Thinker",
      "Problem Solving",
      "Radical Interdependence",
      "Lateral Thinking",
      "Decisive",
      "Coaching & Mentoring",
      "Conflict Resolution",
      "Motivator",
    ],
  },
  {
    id: 2,
    type: "Tech Processes",
    skills: [
      "Agile",
      "Scrum",
      "MVP",
      "Risk Management",
      "Project Planning",
      "TDD",
      "BDD",
    ],
  },
  {
    id: 3,
    type: "Programming",
    skills: [
      "JavaScript",
      "Angular",
      "React",
      "Gatsby",
      "NodeJS (Express)",
      "GraphQL",
      "PHP",
      "Laravel/Lumen",
      "Python",
      "WebdriverIO",
      "Cypress",
      "Jest/Jasmine",
      "Cucumber",
      "TailwindCSS",
      "Webpack",
    ],
  },
  {
    id: 4,
    type: "Cloud Technology",
    skills: [
      "Compute (EC2, Lambda)",
      "Containers (ECS, Fargate)",
      "Networking (API Gateway, Route53, ELB)",
      "Content Delivery (CloudFront)",
      "Storage (S3, EBS, Glacier)",
      "Dev Tools (CodeBuild, CodeDeploy, X-Ray)",
      "Integrations (SNS, SQS, SES)",
    ],
  },
  {
    id: 5,
    type: "Logging & Tracking",
    skills: ["DataDog", "Newrelic", "Greylog", "Sentry", "Google Analytics"],
  },
  {
    id: 6,
    type: "Database",
    skills: ["RDS ", "PostgreSQL", "RedShift", "MySQL", "DynamoDB", "MongoDB"],
  },
  {
    id: 7,
    type: "Misc",
    skills: [
      "Architecture Design",
      "Infrastructure Design",
      "Open Source Contributor",
      "Docker",
      "Linux",
      "Ubuntu",
      "GIT",
    ],
  },
];

const Skills = () => {
  return (
    <Div tw="divide-y-2 divide-gray-200 mt-8">
      <Div tw="flex mb-2">
        <FontAwesomeIcon tw="mr-3 mt-1" icon={faPencilRuler} size="lg" />
        <H5 tw="uppercase font-extrabold">Skills</H5>
      </Div>
      <Div tw="pt-3">
        {skillsets.map((item) => (
          <Div key={item.id}>
            <P tw="font-bold">{item.type}</P>
            <Div tw="flex flex-wrap -ml-1.5 my-3">
              {item.skills.map((skill, index) => (
                <Div key={index} tw="bg-gray-200 py-1.5 px-2 rounded-lg m-1.5">{skill}</Div>
              ))}
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default Skills;
