import * as React from "react";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "twin.macro";
import { H4, H5, Li, P, Ul } from "./typography";
import { Div } from "./elements";

const companies = [
  {
    name: "CACTUS Communications",
    description:
      "CACTUS started with the idea of helping researchers meet their publication goals. It focuses on helping researchers from all around the world get due recognition. Later company has extended its support to other players in the research and publishing space and now emerged as a product-based and tech-driven organization. I have played a versatile role right from doing the crazy complex code to managing a team of ~50 people presently. During this time, I've got a hands-on experience on React, Angular, NodeJS, PHP, Laravel, Python, AWS Services. I've also created an architecture of various systems for CACTUS primary brand Editage, which is operating at over $50 million in revenue.",
    roles: [
      {
        designation: "Associate Director",
        period: "Jul 2020 - Present",
        responsibilities: [
          "Managing & mentoring a team of 50+ engineers.",
          "Building a high performing team and overseeing the function responsible for with high accountability.",
          "Responsible for quality hire, lead and manage and overseeing all the projects and managing the managers.",
          "Providing leadership through coaching, feedback, development goals, and performance management.",
          "Performing cross functional collaboration with aim to achieve collective organizational goal.",
          "Bringing in scalable best-practices in an engineering department.",
          "Brainstormed & helped team to provide vision & implementation techniques for moving from Monolith to Micro-service architecture.",
          "Brought the TDD & BDD culture in the team.",
          "Responsible for taking a costly data-driven decisions.",
          "Helping Architcts in their decision.",
        ],
      },
      {
        designation: "Sr. Software Architect",
        period: "Jul 2019 - Jun 2020",
        responsibilities: [
          "Designed cost-effective infrastructure & application code.",
          "Analyzed business needs and created software solutions accordingly.",
          "Set-up automated development processes to improve the coding standard in the entire technology team.",
          "Owned product quality and overall customer experience.",
          "Created the infrastructure & application architecture of revamped CMS-driven websites",
          "Developed the intelligent SOA based order creation form.",
          "Brought external perceptive to the in-house technologies.",
          "Reduced build time of big Angular application from 20 minutes to 13 minutes.",
          "Owned the technical roadmap of complex projects.",
          "Evaluated and selected the best possible technology stack for a project",
          "Managed & mentored a team of 15 engineers.",
          "Improved performance of stale APIs to 90% by revamping caching architecture.",
        ],
      },
      {
        designation: "Software Architect",
        period: "Jul 2017 - Jun 2019",
        responsibilities: [
          "Designed & developed the SOA architecture of customer-centric application.",
          "Improved the system performance to 10x by converting traditional session-based application to SPA.",
          "Maintained, upgraded & improved the performance of existing software.",
          "Assisted in hiring the quality talent.",
          "Set-up the rules & processes for the developers in the interest of improving their coding skills.",
          "Contributed to the team objective by providing efficient tools for setup and local development.",
          "Built and extended the layer over framework whenever necessary.",
          "Managed & mentored a team of 2 engineers.",
          "Involved in requirement gathering and elicitation & perform feasibility.",
          "Tweaked the application code to make it fully server-agnostic and compatible for infinite scaling.",
        ],
      },
      {
        designation: "Software Engineer",
        period: "Jun 2016 - Jun 2017",
        responsibilities: [
          "Integrated payment gateways (WeChat Pay, PayPal, CC-Avenue, Braintree, Boleto, etc.) on geography specific applications.",
          "Migrated various modules from legacy Drupal 6 to modern Laravel.",
          "Created a JavaScript library that automates the creation of views for CRUD operations.",
          "Maintained and improved existing codebases and peer reviewed code changes.",
          "Improved system quality by identifying issues and common patterns, and developed standard operating procedures.",
          "Assisted in task planning, estimation and scheduling.",
        ],
      },
    ],
  },
  {
    name: "Chenoa Information Services",
    description:
      "Chenoa, a provider of software engineering services, helps clients innovate, develop, and manage their software products and platforms. Chenoa offers a broad range of services working at the intersection of business and technology fostering innovation in areas of product engineering, digital transformation, data + AI, and IoT. My profile was to help providing solutions of complex business problems in creative ways by considering end user experience to develop products or solutions that are usable, engaging, functional and profitable.",
    roles: [
      {
        designation: "Lead Software Engineer",
        period: "Jul 2015 - May 2016",
        responsibilities: [
          "Migrated the on-premise infrastructure to Cloud (AWS).",
          "Setup the architecture of Learning management system with Moodle.",
          "Created simulated application for generating TinCan (now knowns xApi) Compliant Statements and store it in LRS.",
          "Setup & integrated Multi-DB (MySQL & MongoDB) architecture in Moodle.",
          "Setup architecture of RESTful APIs as a services and integrated it to Moodle.",
          "Created customised ACL system in Moodle.",
          "Build and extend the layer over framework whenever necessary.",
          "Design and implement robust architecture for the existing and new systems",
        ],
      },
      {
        designation: "Software Engineer",
        period: "Feb 2014 - Jun 2015",
        responsibilities: [
          "Migrated intranet application framework from Joomla 2.5 to Joomla 3.x",
          "Created custom theme in Joomla with HTML 5, CSS 3, Bootstrap 3, PHP as per the guidelines.",
          "Created full-fledge custom Support module and integrated into the main intranet.",
          "Automated “Change Request Process” with the help of web-forms using Joomla Framework API.",
          "Developed Glossary Component in Joomla to help new employees to know various business terms.",
          "Gave a fresh look to the web application with Bootstrap migration along with designers.",
          "Developed Case Study Component in Joomla that helped marketing team to add new case studies to site.",
        ],
      },
    ],
  },
  {
    name: "iGATE Global Solutions Ltd.",
    description:
      "iGATE (now a part of Capgemini Group) operating in over 40 countries, is one of the world's foremost providers of consulting, technology and outsourcing services. I've started my journey in technology with iGATE, my primary job was to launch new phones on Motorola sites through the CMS called \"Vignette\". In no time, I was being able to automate the redudant tasks and soon moved as Associate in technology BU. Thereafter, I started with the migration project of website having around 100000+ different pages from legacy Joomla v1.5 to v.3.1 in blazing fast 15 days of time-span. For a later part of my career, I was responsible for managing these migrated sites and developing new features.",
    roles: [
      {
        designation: "Associate",
        period: "Nov 2011 - Jan 2014",
        responsibilities: [
          "Addressed the tickets raised by Customer through BMC and VHD tool for content updates.",
          "Reviewed assets provided by clients for accuracy and consistency against dimensions, color scheme, quality.",
          "Created micro-sites and integrated it with custom CMS.",
          "Migrated a website having 100000+ pages from Joomla 1.5x to Joomla 3.x.",
          "Created full-featured multilingual web application.",
          "Created custom modules in Joomla and Drupal CMS.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <Div tw="divide-y-2 divide-gray-200 mt-8 lg:mt-0">
      <Div tw="flex mb-2">
        <FontAwesomeIcon tw="mr-3 mt-1" icon={faSuitcase} size="lg" />
        <H4 tw="uppercase font-extrabold">Experience</H4>
      </Div>
      <Div tw="my-2">
        {companies.map((company, companyIndex) => (
          <Div key={companyIndex} tw="my-6">
            <H5 tw="font-bold mb-2">{company.name}</H5>
            <P tw="mb-2">{company.description}</P>
            {company.roles.map((role, roleIndex) => (
              <Div tw="border-l-2 pl-3.5 relative py-1.5" key={roleIndex}>
                <Div tw="rounded-full p-1.5 absolute bg-gray-300 -left-2 top-5 lg:top-6"></Div>
                <P tw="py-2">
                  <span tw="font-semibold">{role.designation}</span>,{" "}
                  <span tw="text-gray-600 italic">{role.period}</span>
                </P>
                <Ul tw="list-disc ml-4 lg:ml-10">
                  {role.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <Li key={responsibilityIndex}>{responsibility}</Li>
                    )
                  )}
                </Ul>
              </Div>
            ))}
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default Experience;
