import React from "react";
import Image from "../components/image";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import styled from "styled-components";

const ImageContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const TextContainer = styled.div`
  color: yellow;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`;

export default () => (
  <>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <TextContainer>
      <p>
        Welcome to the British arm of Shell Must Fall, a campaign of mass civil
        disobediance against Fossil Capital
      </p>
    </TextContainer>
  </>
);
