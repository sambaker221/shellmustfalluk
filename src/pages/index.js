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

export default () => (
  <ImageContainer>
    <Image />
  </ImageContainer>
);
