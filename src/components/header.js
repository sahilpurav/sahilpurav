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
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { H1, H5, Li, Ul, A } from "../components/typography";
import { Wrapper, Div } from "./elements";

const Header = () => {
  return (
    <Wrapper tw="bg-gray-200 rounded-xl p-6 md:p-10 lg:p-12 xl:p-16">
      <Div tw="flex flex-col md:flex-row divide-y divide-gray-300 md:divide-none mx-auto">
        <Div tw="flex-1 text-center md:text-left pb-4">
          <H1 tw="mb-1 lg:mb-2">
            <span tw="hidden md:inline-block text-2xl lg:text-4xl">
              Hi I'm&nbsp;
            </span>
            <span tw="font-extrabold">Sahil&nbsp;</span>
            <span>Purav</span>
          </H1>
          <H5 tw="mb-2 lg:mb-4">
            <span>Associate Director</span>
            <span tw="hidden md:inline-block">, Engineering</span>
          </H5>
          <Div tw="lg:mt-1">
            <A tw="px-1" target="_blank" href="https://github.com/sahilpurav">
              <FontAwesomeIcon tw="mr-2 md:mr-4" icon={faGithub} size="lg" />
            </A>
            <A
              tw="px-1"
              target="_blank"
              href="https://www.linkedin.com/in/sahilpurav"
            >
              <FontAwesomeIcon tw="mr-2 md:mr-4" icon={faLinkedin} size="lg" />
            </A>
            <A tw="px-1" target="_blank" href="https://twitter.com/sahilpurav">
              <FontAwesomeIcon tw="mr-2 md:mr-4" icon={faTwitter} size="lg" />
            </A>
            <A tw="px-1" target="_blank" href="https://sahilpurav.medium.com">
              <FontAwesomeIcon tw="mr-2 md:mr-4" icon={faMedium} size="lg" />
            </A>
          </Div>
        </Div>
        <Div tw="flex justify-evenly pt-4">
          <Ul tw="lg:text-2xl">
            <Li>
              <FontAwesomeIcon
                tw="mr-2 md:mr-4 lg:mt-3"
                icon={faHeadphonesAlt}
              />
              <A href="tel:+919616636881">+91-9619636881</A>
            </Li>
            <Li>
              <FontAwesomeIcon
                tw="mr-2 md:mr-4 lg:mt-3"
                icon={faEnvelopeOpenText}
              />
              <A href="mailto:sahil.purav@live.com">sahil.purav@live.com</A>
            </Li>
            <Li>
              <FontAwesomeIcon
                tw="mr-2 md:mr-4 lg:mt-3"
                icon={faMapMarkedAlt}
              />
              <span>Andheri (W), Mumbai</span>
            </Li>
          </Ul>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default Header;
