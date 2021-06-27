import * as React from "react";
import "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faEnvelopeOpenText,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => {
  return (
    <>
      <header tw="bg-gray-200 m-6 md:m-10 xl:m-16 p-6 md:p-10 xl:px-20 xl:py-14 rounded-xl">
        <div tw="flex flex-col md:flex-row divide-y divide-gray-300 md:divide-none mx-auto">
          <div tw="flex-1 text-center md:text-left pb-4">
            <h1 tw="text-4xl lg:text-6xl xl:text-7xl">
              <span tw="hidden md:inline-block lg:text-4xl">Hi I'm&nbsp;</span>
              <span tw="font-extrabold">Sahil&nbsp;</span><span>Purav</span>
            </h1>
            <h2 tw="text-lg lg:text-2xl xl:text-3xl lg:mt-2">
              <span>Associate Director</span>
              <span tw="hidden md:inline-block">, Engineering</span>
            </h2>
            <div tw="flex justify-center md:justify-start mt-2 lg:mt-5">
              <a tw="px-1" href="https://github.com/sahilpurav">
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 block lg:hidden"
                  icon={faGithub}
                  size="lg"
                />
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 hidden lg:block"
                  icon={faGithub}
                  size="2x"
                />
              </a>
              <a tw="px-px" href="https://www.linkedin.com/in/sahilpurav">
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 block lg:hidden"
                  icon={faLinkedin}
                  size="lg"
                />
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 hidden lg:block"
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
              <a tw="px-1" href="https://twitter.com/sahilpurav">
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 block lg:hidden"
                  icon={faTwitter}
                  size="lg"
                />
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 hidden lg:block"
                  icon={faTwitter}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div tw="flex justify-evenly pt-4">
            <ul tw="lg:text-2xl">
              <li>
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 lg:mt-3"
                  icon={faHeadphonesAlt}
                />
                <a href="tel:+919616636881">+91-9619636881</a>
              </li>
              <li>
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 lg:mt-3"
                  icon={faEnvelopeOpenText}
                />
                <a href="mailto:sahil.purav@live.com">sahil.purav@live.com</a>
              </li>
              <li>
                <FontAwesomeIcon
                  tw="mr-2 md:mr-4 lg:mt-3"
                  icon={faMapMarkedAlt}
                />
                <span>Andheri (W), Mumbai</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default IndexPage;
