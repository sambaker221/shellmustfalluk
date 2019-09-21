/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LayoutContainer = styled.div`
   {
    margin: 0 auto;
    max-width: 585px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
