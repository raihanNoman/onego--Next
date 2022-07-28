import { NextPage } from "next";
import React from "react";
import Page from "../../components/app/PageStyles";

import Logo from "../../components/app/Logo";
import Contacts from "../../components/support/Contacts";
import AppFooter from "../../components/app/Footer";
import styled from "styled-components";

const index: NextPage = () => {
  return (
    <Page.Page>
      <SupportPage>
        <Logo title="Support" size={300} />
        <Contacts.Office />
        <Contacts.Tech />
      </SupportPage>

      <AppFooter />
    </Page.Page>
  );
};

const SupportPage = styled(Page.Screen)`
  margin-top: 1rem;
  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    & {
      font-size: 13px;
      padding-bottom: 0;
    }
    img {
      object-fit: cover;
      max-height: 100px;
      max-width: 100px;
    }
  }
`;

export default index;
